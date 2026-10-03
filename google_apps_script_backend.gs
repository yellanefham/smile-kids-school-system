/**
 * =========================================================================
 * Smile Kids School - Google Apps Script Cloud Backend & Audit Engine
 * بوابة المعلمات وقاعدة البيانات السحابية المركزية
 * Version: 2.5.0 (2026 Enterprise Security Edition)
 * File: google_apps_script_backend.gs
 * 
 * Deployment:
 * Web App URL: https://script.google.com/macros/s/AKfycbw3NIQ9nrVF3CHVQ7wChc0QYElIAQx2SHRnGs236x-yuIrBBuFiMqKiDDv3to0g1rnu/exec
 * Execute as: Me (your Google account)
 * Who has access: Anyone (allows browser fetch from any school device without Google login)
 * =========================================================================
 */

// ==================== CONFIGURATION & SECURITY TOKENS ====================
var CONFIG = {
  // Secret API Authentication Token
  AUTH_TOKEN: 'SK_SECURE_AUTH_2026_TOKEN_V1',
  AUTH_HEADER_NAME: 'X-SmileKids-Auth-Key',
  
  // Storage Configuration
  DRIVE_FILE_NAME: 'smile_kids_database.json',
  DRIVE_FOLDER_NAME: 'Smile Kids SIS Data',
  SPREADSHEET_NAME: 'Smile Kids SIS - Cloud Database & Audit Log',
  
  // Audit Sheet Tabs
  SHEET_AUDIT_LOG: 'Audit_Log',
  SHEET_GRADES_LOG: 'Grades_Sync',
  SHEET_ATTENDANCE_LOG: 'Attendance_Sync',
  
  // Version info
  VERSION: '2.5.0',
  ENV: 'production'
};

// Authorized Teachers & Staff Catalog
var AUTHORIZED_TEACHERS = {
  't_asmaa': { nameAr: 'مس / أسماء', title: 'اللغة العربية والتربية الدينية', grades: [2, 3, 4, 5] },
  't_yara': { nameAr: 'مس / يارا', title: 'اللغة الإنجليزية و ICT', grades: [1, 2, 3, 4] },
  't_nabila': { nameAr: 'مس / نبيلة', title: 'الرياضيات والحساب (الصفوف الأولى)', grades: [1, 2, 3, 4, 5] },
  't_hend': { nameAr: 'مس / هند', title: 'الرياضيات والـ Math (العليا والإعدادي)', grades: [4, 5, 6, 7, 8, 9] },
  't_dina': { nameAr: 'مس / دينا', title: 'العلوم والـ Science (الصفوف الأولى)', grades: [1, 2, 3, 4, 5] },
  't_amany': { nameAr: 'مس / أماني', title: 'العلوم والـ Science (العليا والإعدادي)', grades: [4, 5, 6, 7, 8, 9] },
  't_shimaa': { nameAr: 'مس / شيماء', title: 'الدراسات الاجتماعية', grades: [4, 5, 6, 7, 8, 9] },
  't_marwa': { nameAr: 'مس / مروة', title: 'اللغة الفرنسية (Français)', grades: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  't_mai': { nameAr: 'مس / مي', title: 'التربية الفنية والأنشطة', grades: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  't_fatma': { nameAr: 'مس / فاطمة', title: 'التربية البدنية والصحية', grades: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  't_sarah': { nameAr: 'مس / سارة', title: 'اللغة الألمانية (Deutsch)', grades: [4, 5, 6, 7, 8, 9] },
  't_hadeer': { nameAr: 'مس / هدير', title: 'التربية الموسيقية', grades: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  'admin_master': { nameAr: 'الإدارة العامة للمدرسة', title: 'Master Administrator', grades: [1, 2, 3, 4, 5, 6, 7, 8, 9] }
};

// ==================== AUTHENTICATION & SESSION VERIFICATION ====================

/**
 * Verifies API Auth Token and Teacher Session
 * In Google Apps Script Web Apps, HTTP headers may be stripped by Google's proxy.
 * Therefore, tokens can be passed via:
 * 1. Query parameter: ?authKey=SK_SECURE_AUTH_2026_TOKEN_V1
 * 2. POST body JSON: { authKey: "SK_SECURE_AUTH_2026_TOKEN_V1", ... }
 * 3. Fallback parameter aliases: 'auth-key', 'auth_token', 'token', 'key'
 */
function verifyAuthentication(e, payload) {
  var providedKey = null;
  
  // 1. Check query parameters
  if (e && e.parameter) {
    providedKey = e.parameter.authKey || 
                  e.parameter['auth-key'] || 
                  e.parameter['X-SmileKids-Auth-Key'] || 
                  e.parameter.auth_token || 
                  e.parameter.token || 
                  e.parameter.key;
  }
  
  // 2. Check JSON payload body
  if (!providedKey && payload && typeof payload === 'object') {
    providedKey = payload.authKey || 
                  payload['auth-key'] || 
                  payload['X-SmileKids-Auth-Key'] || 
                  payload.authToken || 
                  payload.token;
  }
  
  // Master Token validation (Allow script property override if set)
  var expectedKey = PropertiesService.getScriptProperties().getProperty('AUTH_KEY') || CONFIG.AUTH_TOKEN;
  
  // Check token match
  if (!providedKey || providedKey !== expectedKey) {
    return {
      authorized: false,
      error: 'Unauthorized: Invalid or missing API authentication token (SK_SECURE_AUTH_2026_TOKEN_V1 required)',
      code: 401
    };
  }
  
  // 3. Optional Teacher Session verification
  var teacherId = null;
  if (payload && payload.teacherId) {
    teacherId = payload.teacherId;
  } else if (e && e.parameter && e.parameter.teacherId) {
    teacherId = e.parameter.teacherId;
  }
  
  if (teacherId) {
    var teacherInfo = AUTHORIZED_TEACHERS[teacherId];
    if (!teacherInfo && teacherId !== 'admin_master') {
      return {
        authorized: false,
        error: 'Forbidden: Unrecognized teacher identity session (' + teacherId + ')',
        code: 403
      };
    }
  }
  
  return {
    authorized: true,
    teacherId: teacherId,
    teacherInfo: teacherId ? AUTHORIZED_TEACHERS[teacherId] : null
  };
}

// ==================== HTTP GET ROUTE (doGet) ====================

/**
 * Handles incoming GET requests:
 * - Full database download
 * - Filtering by grade, track, teacher, or studentId
 * - Audit logs retrieval for administrative reporting
 * - Health check / ping
 */
function doGet(e) {
  try {
    // 1. Verify authentication
    var auth = verifyAuthentication(e, null);
    if (!auth.authorized) {
      return jsonResponse({
        success: false,
        error: auth.error,
        code: auth.code
      }, 401);
    }
    
    // 2. Health check / ping
    var action = (e && e.parameter && e.parameter.action) ? e.parameter.action.toLowerCase() : '';
    if (action === 'ping' || action === 'health') {
      return jsonResponse({
        success: true,
        status: 'online',
        service: 'Smile Kids SIS Backend',
        version: CONFIG.VERSION,
        serverTime: new Date().toISOString(),
        authVerified: true
      });
    }
    
    // 3. Audit logs retrieval (for Admin portal)
    if (action === 'audit_logs') {
      var limit = parseInt(e.parameter.limit) || 100;
      var logs = getAuditLogs(limit);
      return jsonResponse({
        success: true,
        count: logs.length,
        logs: logs
      });
    }
    
    // 4. Retrieve database payload from Google Drive storage
    var db = loadDatabaseFromStorage();
    if (!db || !db.students) {
      return jsonResponse({
        success: false,
        error: 'Database storage file is empty or not initialized yet',
        database_info: {
          name: 'قاعدة بيانات مدرسة Smile Kids الموحدة',
          version: CONFIG.VERSION,
          total_students: 0
        },
        students: []
      });
    }
    
    var students = db.students;
    
    // 5. Query Filters:
    // Filter by studentId
    if (e && e.parameter && e.parameter.studentId) {
      var targetId = e.parameter.studentId;
      var student = students.find(function(s) { return s.id === targetId; });
      return jsonResponse({
        success: true,
        found: !!student,
        student: student || null
      });
    }
    
    // Filter by grade
    if (e && e.parameter && e.parameter.grade && e.parameter.grade !== 'all') {
      var gradeNum = parseInt(e.parameter.grade);
      if (!isNaN(gradeNum)) {
        students = students.filter(function(s) { return s.grade === gradeNum; });
      }
    }
    
    // Filter by track (arabic / languages)
    if (e && e.parameter && e.parameter.track && e.parameter.track !== 'all') {
      var trackStr = e.parameter.track.toLowerCase();
      students = students.filter(function(s) { return s.track === trackStr; });
    }
    
    // Filter by teacherId (returns only students in teacher's assigned grades)
    if (e && e.parameter && e.parameter.teacherId) {
      var tInfo = AUTHORIZED_TEACHERS[e.parameter.teacherId];
      if (tInfo && tInfo.grades && tInfo.grades.length > 0) {
        var tGrades = tInfo.grades;
        students = students.filter(function(s) { return tGrades.indexOf(s.grade) !== -1; });
      }
    }
    
    return jsonResponse({
      success: true,
      database_info: {
        name: (db.database_info && db.database_info.name) || 'قاعدة بيانات مدرسة Smile Kids الموحدة 2025/2026',
        version: (db.database_info && db.database_info.version) || CONFIG.VERSION,
        last_modified: (db.database_info && db.database_info.last_modified) || Date.now(),
        exported_at: (db.database_info && db.database_info.exported_at) || new Date().toISOString(),
        total_students: students.length,
        filtered: students.length !== db.students.length
      },
      students: students
    });
    
  } catch (err) {
    return jsonResponse({
      success: false,
      error: 'doGet Exception: ' + err.toString(),
      stack: err.stack
    }, 500);
  }
}

// ==================== HTTP POST ROUTE (doPost) ====================

/**
 * Handles incoming POST requests:
 * 1. action: 'sync_grades'
 *    - Updates single or batch student subject scores
 *    - Creates audit log row documenting teacher, student, subject, score
 * 2. action: 'sync_attendance'
 *    - Updates attendance records for students on a given date / period
 *    - Creates audit log row documenting teacher, class, present/absent count
 * 3. action: 'full_backup'
 *    - Complete database backup and overwrite
 *    - Creates snapshot and audit log
 */
function doPost(e) {
  try {
    // 1. Parse JSON payload
    var payload = null;
    if (e && e.postData && e.postData.contents) {
      try {
        payload = JSON.parse(e.postData.contents);
      } catch (pe) {
        return jsonResponse({
          success: false,
          error: 'Invalid JSON body in POST request: ' + pe.toString()
        }, 400);
      }
    }
    
    if (!payload) {
      return jsonResponse({ success: false, error: 'Empty POST payload received' }, 400);
    }
    
    // 2. Verify authentication
    var auth = verifyAuthentication(e, payload);
    if (!auth.authorized) {
      return jsonResponse({
        success: false,
        error: auth.error,
        code: auth.code
      }, 401);
    }
    
    var action = payload.action || '';
    var teacherId = payload.teacherId || auth.teacherId || 'system';
    var teacherName = payload.teacherName || (auth.teacherInfo ? auth.teacherInfo.nameAr : 'المعلمة / النظام');
    var timestamp = new Date();
    
    // Route by action
    switch (action) {
      
      // ================= 1. SYNC GRADES =================
      case 'sync_grades': {
        var resultGrades = handleSyncGrades(payload, teacherId, teacherName, timestamp);
        return jsonResponse(resultGrades);
      }
      
      // ================= 2. SYNC ATTENDANCE =================
      case 'sync_attendance': {
        var resultAtt = handleSyncAttendance(payload, teacherId, teacherName, timestamp);
        return jsonResponse(resultAtt);
      }
      
      // ================= 3. FULL BACKUP / DEFAULT =================
      case 'full_backup':
      default: {
        // If payload contains students array, treat as full backup
        if (payload.students && Array.isArray(payload.students)) {
          var resultBackup = handleFullBackup(payload, teacherId, teacherName, timestamp);
          return jsonResponse(resultBackup);
        } else {
          return jsonResponse({
            success: false,
            error: 'Unknown or missing action in POST payload (' + action + '). Supported actions: sync_grades, sync_attendance, full_backup.'
          }, 400);
        }
      }
    }
    
  } catch (err) {
    return jsonResponse({
      success: false,
      error: 'doPost Exception: ' + err.toString(),
      stack: err.stack
    }, 500);
  }
}

// ==================== ACTION HANDLERS ====================

/**
 * Handles 'sync_grades' action
 */
function handleSyncGrades(payload, teacherId, teacherName, timestamp) {
  var studentId = payload.studentId;
  var subjectId = payload.subjectId;
  var periodKey = payload.periodKey || payload.month || payload.termField;
  var scoreVal = payload.score;
  var maxVal = payload.maxScore || 20;
  var batchUpdates = payload.updates || null; // Optional batch of grades
  
  var db = loadDatabaseFromStorage();
  var updatedCount = 0;
  var auditLogs = [];
  
  if (Array.isArray(batchUpdates) && batchUpdates.length > 0) {
    // Batch grades update
    batchUpdates.forEach(function(item) {
      var st = db.students.find(function(s) { return s.id === item.studentId; });
      if (st) {
        st.subjectScores = st.subjectScores || {};
        st.subjectScores[item.subjectId] = st.subjectScores[item.subjectId] || {
          subjectId: item.subjectId,
          teacherNameAr: teacherName,
          scores: {}
        };
        st.subjectScores[item.subjectId].scores = st.subjectScores[item.subjectId].scores || {};
        st.subjectScores[item.subjectId].scores[item.periodKey] = {
          score: item.score,
          maxScore: item.maxScore || 20,
          isRecorded: true,
          recordedAt: timestamp.toISOString()
        };
        updatedCount++;
        auditLogs.push({
          action: 'SYNC_GRADES_BATCH',
          teacherId: teacherId,
          teacherName: teacherName,
          grade: 'Grade ' + st.grade,
          studentId: st.id,
          studentName: st.nameAr,
          subject: item.subjectId + ' (' + item.periodKey + ')',
          detail: 'درجة: ' + item.score + ' من ' + (item.maxScore || 20),
          status: 'SUCCESS'
        });
      }
    });
  } else if (studentId) {
    // Single student grade update
    var st = db.students.find(function(s) { return s.id === studentId; });
    if (st) {
      st.subjectScores = st.subjectScores || {};
      st.subjectScores[subjectId] = st.subjectScores[subjectId] || {
        subjectId: subjectId,
        teacherNameAr: teacherName,
        scores: {}
      };
      st.subjectScores[subjectId].scores = st.subjectScores[subjectId].scores || {};
      st.subjectScores[subjectId].scores[periodKey] = {
        score: scoreVal,
        maxScore: maxVal,
        isRecorded: true,
        recordedAt: timestamp.toISOString()
      };
      
      // Update termsScores fallback
      if (periodKey) {
        st.termsScores = st.termsScores || {};
        st.termsScores[periodKey] = scoreVal;
      }
      
      updatedCount = 1;
      auditLogs.push({
        action: 'SYNC_GRADES_SINGLE',
        teacherId: teacherId,
        teacherName: teacherName,
        grade: 'Grade ' + st.grade,
        studentId: st.id,
        studentName: st.nameAr,
        subject: subjectId + ' (' + periodKey + ')',
        detail: 'درجة: ' + scoreVal + ' من ' + maxVal,
        status: 'SUCCESS'
      });
    }
  } else if (payload.patch && payload.studentId) {
    // Direct patch
    var st = db.students.find(function(s) { return s.id === payload.studentId; });
    if (st) {
      Object.assign(st, payload.patch);
      updatedCount = 1;
      auditLogs.push({
        action: 'UPDATE_STUDENT_PATCH',
        teacherId: teacherId,
        teacherName: teacherName,
        grade: 'Grade ' + st.grade,
        studentId: st.id,
        studentName: st.nameAr,
        subject: 'General Update',
        detail: JSON.stringify(payload.patch),
        status: 'SUCCESS'
      });
    }
  }
  
  if (updatedCount > 0) {
    db.database_info = db.database_info || {};
    db.database_info.last_modified = Date.now();
    db.database_info.last_synced_by = teacherName + ' (' + teacherId + ')';
    saveDatabaseToStorage(db);
    
    // Record to Google Sheets Audit Log
    recordAuditEntries(auditLogs);
  }
  
  return {
    success: true,
    action: 'sync_grades',
    updated_at: timestamp.toISOString(),
    updated_count: updatedCount,
    teacher: teacherName
  };
}

/**
 * Handles 'sync_attendance' action
 */
function handleSyncAttendance(payload, teacherId, teacherName, timestamp) {
  var dateStr = payload.dateStr || timestamp.toISOString().split('T')[0];
  var periodNum = payload.periodNum || payload.period || 1;
  var classBadge = payload.classBadge || '';
  var records = payload.records || {}; // { "SK-G1-AR-001": "present", "SK-G1-AR-002": "absent" }
  var singleStudentId = payload.studentId;
  var singleStatus = payload.status;
  var singleNote = payload.note;
  
  var db = loadDatabaseFromStorage();
  var updatedCount = 0;
  var auditLogs = [];
  var present = 0, absent = 0, late = 0;
  
  if (records && Object.keys(records).length > 0) {
    // Batch attendance
    Object.keys(records).forEach(function(stId) {
      var st = db.students.find(function(s) { return s.id === stId; });
      if (st) {
        var status = records[stId];
        st.attendanceRecords = st.attendanceRecords || {};
        st.attendanceRecords[dateStr] = status;
        updatedCount++;
        
        if (status === 'present') present++;
        else if (status === 'absent') absent++;
        else if (status === 'late') late++;
      }
    });
    
    auditLogs.push({
      action: 'SYNC_ATTENDANCE_BATCH',
      teacherId: teacherId,
      teacherName: teacherName,
      grade: classBadge || 'فصل معتمد',
      studentId: 'BATCH (' + updatedCount + ' طلاب)',
      studentName: 'حضور حصة ' + periodNum,
      subject: 'تاريخ: ' + dateStr,
      detail: 'حاضر: ' + present + ' | غياب: ' + absent + ' | تأخير: ' + late,
      status: 'SUCCESS'
    });
    
  } else if (singleStudentId && singleStatus) {
    // Single student attendance
    var st = db.students.find(function(s) { return s.id === singleStudentId; });
    if (st) {
      st.attendanceRecords = st.attendanceRecords || {};
      st.attendanceRecords[dateStr] = singleStatus;
      if (singleNote !== undefined && singleNote !== null) {
        st.attendanceNotes = st.attendanceNotes || {};
        st.attendanceNotes[dateStr] = singleNote;
      }
      updatedCount = 1;
      
      auditLogs.push({
        action: 'SYNC_ATTENDANCE_SINGLE',
        teacherId: teacherId,
        teacherName: teacherName,
        grade: 'Grade ' + st.grade,
        studentId: st.id,
        studentName: st.nameAr,
        subject: 'تاريخ: ' + dateStr,
        detail: 'الحالة: ' + singleStatus + (singleNote ? ' (ملاحظة: ' + singleNote + ')' : ''),
        status: 'SUCCESS'
      });
    }
  }
  
  if (updatedCount > 0) {
    db.database_info = db.database_info || {};
    db.database_info.last_modified = Date.now();
    db.database_info.last_synced_by = teacherName + ' (' + teacherId + ')';
    saveDatabaseToStorage(db);
    
    // Record to Google Sheets Audit Log
    recordAuditEntries(auditLogs);
  }
  
  return {
    success: true,
    action: 'sync_attendance',
    date: dateStr,
    period: periodNum,
    updated_at: timestamp.toISOString(),
    recorded_count: updatedCount,
    teacher: teacherName
  };
}

/**
 * Handles 'full_backup' action
 */
function handleFullBackup(payload, teacherId, teacherName, timestamp) {
  var studentsList = payload.students || [];
  var dbInfo = payload.database_info || {};
  
  dbInfo.name = dbInfo.name || 'قاعدة بيانات مدرسة Smile Kids الموحدة 2025/2026';
  dbInfo.version = CONFIG.VERSION;
  dbInfo.last_modified = Date.now();
  dbInfo.exported_at = timestamp.toISOString();
  dbInfo.total_students = studentsList.length;
  dbInfo.backed_up_by = teacherName + ' (' + teacherId + ')';
  
  var fullDb = {
    database_info: dbInfo,
    students: studentsList
  };
  
  saveDatabaseToStorage(fullDb);
  
  // Log full backup audit entry
  recordAuditEntries([{
    action: 'FULL_BACKUP',
    teacherId: teacherId,
    teacherName: teacherName,
    grade: 'All Grades (1-9)',
    studentId: 'ALL',
    studentName: 'جميع الطلاب (' + studentsList.length + ' طالب)',
    subject: 'نسخ احتياطي شامل',
    detail: 'حجم البيانات: ' + studentsList.length + ' طالب • الإصدار: ' + CONFIG.VERSION,
    status: 'SUCCESS'
  }]);
  
  return {
    success: true,
    action: 'full_backup',
    updated_at: timestamp.toISOString(),
    total_students: studentsList.length,
    backed_up_by: teacherName
  };
}

// ==================== GOOGLE DRIVE & SPREADSHEET STORAGE ====================

/**
 * Retrieves or creates the master Drive folder
 */
function getOrCreateFolder() {
  var folders = DriveApp.getFoldersByName(CONFIG.DRIVE_FOLDER_NAME);
  if (folders.hasNext()) {
    return folders.next();
  }
  return DriveApp.createFolder(CONFIG.DRIVE_FOLDER_NAME);
}

/**
 * Loads JSON database from Google Drive
 */
function loadDatabaseFromStorage() {
  var folder = getOrCreateFolder();
  var files = folder.getFilesByName(CONFIG.DRIVE_FILE_NAME);
  if (!files.hasNext()) {
    // Check root Drive as fallback
    files = DriveApp.getFilesByName(CONFIG.DRIVE_FILE_NAME);
  }
  
  if (files.hasNext()) {
    var file = files.next();
    var content = file.getBlob().getDataAsString('UTF-8');
    try {
      return JSON.parse(content);
    } catch (e) {
      Logger.log('Error parsing Drive database file: ' + e);
      return { database_info: {}, students: [] };
    }
  }
  
  return { database_info: {}, students: [] };
}

/**
 * Saves JSON database to Google Drive
 */
function saveDatabaseToStorage(dbObj) {
  var folder = getOrCreateFolder();
  var content = JSON.stringify(dbObj, null, 2);
  var files = folder.getFilesByName(CONFIG.DRIVE_FILE_NAME);
  
  if (files.hasNext()) {
    var file = files.next();
    file.setContent(content);
    return file;
  } else {
    return folder.createFile(CONFIG.DRIVE_FILE_NAME, content, 'application/json');
  }
}

/**
 * Retrieves or creates the Audit Log Google Spreadsheet
 */
function getOrCreateAuditSpreadsheet() {
  var folder = getOrCreateFolder();
  var files = folder.getFilesByName(CONFIG.SPREADSHEET_NAME);
  var ss = null;
  
  if (files.hasNext()) {
    var file = files.next();
    ss = SpreadsheetApp.openById(file.getId());
  } else {
    // Search entire Drive
    var globalFiles = DriveApp.getFilesByName(CONFIG.SPREADSHEET_NAME);
    if (globalFiles.hasNext()) {
      ss = SpreadsheetApp.openById(globalFiles.next().getId());
    } else {
      // Create new Spreadsheet
      ss = SpreadsheetApp.create(CONFIG.SPREADSHEET_NAME);
      // Move to folder
      var file = DriveApp.getFileById(ss.getId());
      folder.addFile(file);
      DriveApp.getRootFolder().removeFile(file);
    }
  }
  
  // Ensure Audit_Log sheet exists with headers
  var sheet = ss.getSheetByName(CONFIG.SHEET_AUDIT_LOG);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_AUDIT_LOG);
    sheet.appendRow([
      'Timestamp',
      'Action',
      'Teacher ID',
      'Teacher Name',
      'Grade / Class',
      'Student ID',
      'Student Name',
      'Subject / Scope',
      'Change Details',
      'Status'
    ]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, 10).setBackground('#0f172a').setFontColor('#f8fafc').setFontWeight('bold');
  }
  
  return ss;
}

/**
 * Appends entries to Audit Log sheet
 */
function recordAuditEntries(entries) {
  if (!entries || entries.length === 0) return;
  try {
    var ss = getOrCreateAuditSpreadsheet();
    var sheet = ss.getSheetByName(CONFIG.SHEET_AUDIT_LOG);
    if (!sheet) return;
    
    var timestampStr = Utilities.formatDate(new Date(), 'Africa/Cairo', 'yyyy-MM-dd HH:mm:ss');
    var rows = entries.map(function(item) {
      return [
        timestampStr,
        item.action || 'SYNC',
        item.teacherId || '',
        item.teacherName || '',
        item.grade || '',
        item.studentId || '',
        item.studentName || '',
        item.subject || '',
        item.detail || '',
        item.status || 'SUCCESS'
      ];
    });
    
    sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, 10).setValues(rows);
  } catch (err) {
    Logger.log('recordAuditEntries error: ' + err.toString());
  }
}

/**
 * Reads recent audit logs from sheet
 */
function getAuditLogs(limit) {
  try {
    var ss = getOrCreateAuditSpreadsheet();
    var sheet = ss.getSheetByName(CONFIG.SHEET_AUDIT_LOG);
    if (!sheet) return [];
    
    var lastRow = sheet.getLastRow();
    if (lastRow <= 1) return [];
    
    var count = Math.min(limit, lastRow - 1);
    var startRow = Math.max(2, lastRow - count + 1);
    var values = sheet.getRange(startRow, 1, count, 10).getValues();
    
    // Return latest first
    return values.reverse().map(function(row) {
      return {
        timestamp: row[0],
        action: row[1],
        teacherId: row[2],
        teacherName: row[3],
        grade: row[4],
        studentId: row[5],
        studentName: row[6],
        subject: row[7],
        detail: row[8],
        status: row[9]
      };
    });
  } catch (err) {
    Logger.log('getAuditLogs error: ' + err.toString());
    return [];
  }
}

// ==================== HELPER / RESPONSE FORMATTER ====================

/**
 * Standard JSON response for Google Apps Script Web App
 */
function jsonResponse(data, statusCode) {
  var output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

/**
 * Optional Initial Setup Function
 * Run this function once from the Apps Script Editor to initialize folders, sheets, and properties.
 */
function setupSystem() {
  // Set Auth Key in Script Properties
  PropertiesService.getScriptProperties().setProperty('AUTH_KEY', CONFIG.AUTH_TOKEN);
  
  // Initialize Drive Folder & Spreadsheet
  var folder = getOrCreateFolder();
  var ss = getOrCreateAuditSpreadsheet();
  
  Logger.log('Smile Kids Backend Initialized Successfully!');
  Logger.log('Folder: ' + folder.getName() + ' (' + folder.getId() + ')');
  Logger.log('Spreadsheet: ' + ss.getName() + ' (' + ss.getId() + ')');
  Logger.log('Auth Token: ' + CONFIG.AUTH_TOKEN);
}
