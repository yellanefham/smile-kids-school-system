/**
 * =========================================================================
 * Smile Kids School - Unified Master Central Database Engine
 * اسم قاعدة البيانات: قاعدة بيانات مدرسة Smile Kids الموحدة
 * كود التخزين: SMILE_KIDS_MASTER_DATABASE_2026
 * الملف البرمجي: smile_kids_database.js
 * ملف التصدير العام: smile_kids_database.json
 * =========================================================================
 */
(function(window) {
  'use strict';

    const BLACKLIST_DELETED_STUDENTS = new Set([
    'SK-G2-LN-013',
    'SK-G4-AR-5389',
    'SK-G4-AR-6602',
    'SK-G4-AR-7167',
    'SK-G4-AR-0432',
    'SK-G4-AR-2978',
    'SK-G4-AR-6460'
  ]);
  const BLACKLIST_DELETED_NAMES = new Set(['ليان محمد أمين', 'حمزة أحمد مصطفى']);

  function isStudentBlacklisted(s) {
    if (!s) return false;
    if (s.id && BLACKLIST_DELETED_STUDENTS.has(s.id)) return true;
    if (s.nameAr && BLACKLIST_DELETED_NAMES.has(s.nameAr.trim())) return true;
    return false;
  }

  const STORAGE_KEY = 'SMILE_KIDS_MASTER_DATABASE_2026_V7';
  const LEGACY_STUDENT_KEYS = ['SMILE_KIDS_MASTER_DATABASE_2026_V6', 'SMILE_KIDS_MASTER_DATABASE_2026_V5', 'SMILE_KIDS_MASTER_DATABASE_2026_V4', 'SMILE_KIDS_MASTER_DATABASE_2026_V3', 'SMILE_KIDS_MASTER_DATABASE_2026_V2', 'SMILE_KIDS_MASTER_DATABASE_2026', 'smile_kids_students', 'smile_kids_students_v7_custom', 'smilekids_school_v6'];
  const LEGACY_ATT_KEY = 'smile_kids_attendance_v7_data';

  // Canonical Student Identity Overrides (Ironclad protection against legacy rollbacks)
  const CANONICAL_STUDENT_OVERRIDES = {
    'SK-G8-AR-002': {
      nameAr: 'سعد محمود منصور',
      nameEn: 'Saad Mahmoud Mansour',
      gender: 'male'
    },
    'SK-G1-AR-008': {
      nameAr: 'ماريا قتيبه العلي',
      nameEn: 'Maria Qutaiba Ali',
      gender: 'female'
    },
    'SK-G4-AR-0026': {
      nameAr: 'لينا بهاء العاصي',
      nameEn: 'Lina Bahaa El-Assi',
      gender: 'female'
    },
    'SK-G5-LN-006': {
      nameAr: 'مليكة محمد نوار',
      nameEn: 'Malika Mohamed Nawar',
      gender: 'female'
    },
    'SK-G3-LN-013': {
      nameAr: 'زين محمد نوار',
      nameEn: 'Zein Mohamed Nawar',
      gender: 'male'
    },
    'SK-G2-AR-007': {
      nameAr: 'إيلين أحمد زيدان',
      nameEn: 'Ellen Ahmed Zeidan',
      gender: 'female'
    },
    'SK-G2-LN-004': {
      nameAr: 'معتز محمد أطاها',
      nameEn: 'Moataz Mohamed Ataha',
      gender: 'male'
    },
    'SK-G4-LN-010': {
      nameAr: 'ميرا محمد أطاها',
      nameEn: 'Mira Mohamed Ataha',
      gender: 'female'
    },
    'SK-G9-AR-001': {
      nameAr: 'ساره محمد أطاها',
      nameEn: 'Sara Mohamed Ataha',
      gender: 'female'
    }
  };

  const CANONICAL_DELETED_STUDENT_IDS = [];

  function isCanonicalDeletedStudent(s) {
    if (!s) return false;
    if (s.id && CANONICAL_DELETED_STUDENT_IDS.includes(s.id)) return true;
    if (s.nameAr && s.nameAr.includes('إسلام أحمد إسماعيل')) return true;
    return false;
  }

  function enforceCanonicalStudent(s) {
    if (!s || !s.id) return s;
    const canon = CANONICAL_STUDENT_OVERRIDES[s.id];
    if (canon) {
      s.nameAr = canon.nameAr;
      s.nameEn = canon.nameEn;
      if (canon.gender) s.gender = canon.gender;
    }
    return s;
  }

  // Master Initial Verified Students (147 Students across 9 Grades)
  const MASTER_INITIAL_STUDENTS = [
  {
    "id": "SK-G1-AR-001",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "تاليا عادل خطاب",
    "nameEn": "Talia Adel Khattab",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_total": 98,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_exam": 30,
      "t1_tasks": null,
      "t2_tasks": null,
      "annual_total": 98,
      "t1_m1": 19.5,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t1_sep": 74,
      "t1_sep_pct": 98.67,
      "t1_sep_max": 75
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "sep": null,
        "scores": {
          "t1_sep": null,
          "t1_m1": {
            "score": 18,
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "isRecorded": true,
            "maxScore": 20
          },
          "t1_exam": {
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "isRecorded": true,
            "maxScore": 30,
            "score": 0
          },
          "t1_tasks": {
            "score": 0,
            "maxScore": 20,
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "isRecorded": true
          },
          "t1_m2": {
            "isRecorded": true,
            "score": 0,
            "maxScore": 20,
            "updatedAt": "2026-10-04T19:13:45.270Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "sep": 29,
        "scores": {
          "t1_exam": {
            "isRecorded": true,
            "maxScore": 30,
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "score": 0
          },
          "t1_m1": {
            "maxScore": 30,
            "score": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.270Z"
          },
          "t1_tasks": {
            "maxScore": 20,
            "score": 0,
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.270Z"
          },
          "t1_m2": {
            "score": 0,
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "maxScore": 20,
            "isRecorded": true
          },
          "t1_sep": {
            "maxScore": 30,
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "isRecorded": true,
            "recordedAt": "2026-10-11T17:32:51.690Z",
            "score": 29
          }
        },
        "subjectId": "math",
        "m1": 30
      },
      "arabic": {
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30,
        "teacherNameAr": "مس / مروة"
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 15
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "3051",
    "password": "3051",
    "_updatedAt": "2026-10-10T18:10:25.334Z",
    "_migratedAt": "2026-10-10T18:37:59.539Z",
    "subjectScores.english_al.scores.t1_sep": null,
    "_lastModified": 1791657479539
  },
  {
    "id": "SK-G1-AR-002",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "إيلاف عصام عبد الله",
    "nameEn": "Elaf Essam Abdullah",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_m2": 20,
      "t1_sep": 73,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_m1": 19.5,
      "t1_total": 98,
      "t2_total": 98,
      "t2_exam": 30,
      "t2_tasks": null,
      "annual_total": 98,
      "t1_exam": 29.5,
      "t1_tasks": null,
      "t1_sep_pct": 97.33,
      "t1_sep_max": 75
    },
    "subjectScores": {
      "english_al": {
        "scores": {},
        "subjectId": "english_al",
        "sep": null,
        "teacherNameAr": "مس / يارا"
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "scores": {
          "t1_m1": {
            "maxScore": 30,
            "score": 30,
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "isRecorded": true
          },
          "t1_exam": {
            "score": 0,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.270Z"
          },
          "t1_m2": {
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "score": 0,
            "maxScore": 20
          },
          "t1_tasks": {
            "score": 0,
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "maxScore": 20
          },
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:32:34.532Z",
            "score": 28
          }
        },
        "m1": 30,
        "subjectId": "math",
        "sep": 28
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 15
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "6334",
    "password": "6334",
    "_lastModified": 1791657479540,
    "_updatedAt": "2026-10-10T18:10:31.474Z",
    "_migratedAt": "2026-10-10T18:37:59.540Z",
    "subjectScores.english_al.scores.t1_sep": null
  },
  {
    "id": "SK-G1-AR-003",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "مودة أحمد كمال",
    "nameEn": "Mawaddah Ahmed Kamal",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 99,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_total": 98,
      "annual_total": 98,
      "t2_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep_pct": 99,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "math": {
        "m1": 30,
        "scores": {
          "t1_exam": {
            "isRecorded": true,
            "maxScore": 30,
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "score": 0
          },
          "t1_m2": {
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "maxScore": 20,
            "score": 0
          },
          "t1_m1": {
            "isRecorded": true,
            "maxScore": 30,
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "score": 30
          },
          "t1_tasks": {
            "isRecorded": true,
            "maxScore": 20,
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "score": 0
          },
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:33:22.339Z",
            "score": 30
          }
        },
        "subjectId": "math",
        "sep": 30
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "sep": 30,
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / مروة"
      },
      "english_al": {
        "teacherNameAr": "مس / يارا",
        "subjectId": "english_al",
        "sep": 24,
        "scores": {
          "t1_sep": {
            "score": 24,
            "maxScore": 25,
            "recordedAt": "2026-10-10T18:17:20.879Z",
            "isRecorded": true,
            "updatedAt": "2026-10-10T18:17:20.891Z"
          }
        }
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 15
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9333",
    "password": "9333",
    "subjectScores.english_al.scores.t1_sep": 24,
    "_migratedAt": "2026-10-10T18:37:59.540Z",
    "_lastModified": 1791657479540,
    "_updatedAt": "2026-10-10T18:17:20.891Z"
  },
  {
    "id": "SK-G1-AR-004",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "فيروز أشرف مجدى",
    "nameEn": "Fayrouz Ashraf Magdy",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 29.5,
      "annual_total": 98,
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_sep": 73,
      "t2_tasks": null,
      "t1_tasks": null,
      "t2_total": 98,
      "t1_total": 98,
      "t1_sep_pct": 97.33,
      "t1_sep_max": 75
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "m1": 30,
        "scores": {
          "t1_m1": {
            "maxScore": 30,
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "isRecorded": true,
            "score": 30
          },
          "t1_m2": {
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "score": 0,
            "maxScore": 20,
            "isRecorded": true
          },
          "t1_exam": {
            "maxScore": 30,
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "isRecorded": true,
            "score": 0
          },
          "t1_tasks": {
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "isRecorded": true,
            "maxScore": 20,
            "score": 0
          },
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:32:43.471Z",
            "score": 28
          }
        },
        "sep": 28
      },
      "english_al": {
        "teacherNameAr": "مس / يارا",
        "sep": null,
        "subjectId": "english_al",
        "scores": {}
      },
      "english_ol": {
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "sep": 15
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9485",
    "password": "9485",
    "_updatedAt": "2026-10-10T18:37:46.609Z",
    "_lastModified": 1791657479541,
    "_migratedAt": "2026-10-10T18:37:59.541Z",
    "subjectScores.english_ol.scores.t1_sep": 15,
    "subjectScores.english_al.scores.t1_sep": null
  },
  {
    "id": "SK-G1-AR-005",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "يحيى أحمد مصطفى",
    "nameEn": "Yahia Ahmed Mostafa",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 75,
      "t1_m1": 19.5,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_tasks": null,
      "t1_tasks": null,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_total": 98,
      "annual_total": 98,
      "t1_sep_pct": 100,
      "t1_sep_max": 75
    },
    "phone": "",
    "notes": "",
    "subjectScores": {
      "english_al": {
        "sep": null,
        "subjectId": "english_al",
        "scores": {},
        "teacherNameAr": "مس / يارا"
      },
      "arabic": {
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30,
        "subjectId": "arabic"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "m1": 30,
        "scores": {
          "t1_tasks": {
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "score": 0,
            "isRecorded": true,
            "maxScore": 20
          },
          "t1_exam": {
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "score": 0
          },
          "t1_m1": {
            "maxScore": 30,
            "score": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.270Z"
          },
          "t1_m2": {
            "isRecorded": true,
            "maxScore": 20,
            "score": 0,
            "updatedAt": "2026-10-04T19:13:45.270Z"
          },
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:33:17.791Z",
            "score": 30
          }
        },
        "subjectId": "math",
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 15
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "2781",
    "password": "2781",
    "_migratedAt": "2026-10-10T18:37:59.541Z",
    "_updatedAt": "2026-10-10T18:10:45.672Z",
    "_lastModified": 1791657479541,
    "subjectScores.english_al.scores.t1_sep": null
  },
  {
    "id": "SK-G1-AR-006",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "أمير مصطفى عبد اللطيف",
    "nameEn": "Amir Mostafa Abdel Latif",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 74,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "annual_total": 98,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep_pct": 98.67,
      "t1_sep_max": 75
    },
    "subjectScores": {
      "arabic": {
        "sep": 30,
        "teacherNameAr": "مس / مروة",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "english_al": {
        "scores": {},
        "sep": null,
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "scores": {
          "t1_exam": {
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "score": 0,
            "maxScore": 30
          },
          "t1_m1": {
            "maxScore": 30,
            "isRecorded": true,
            "score": 30,
            "updatedAt": "2026-10-04T19:13:45.270Z"
          },
          "t1_m2": {
            "score": 0,
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "maxScore": 20
          },
          "t1_tasks": {
            "score": 0,
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.270Z",
            "maxScore": 20
          },
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:32:22.308Z",
            "score": 29
          }
        },
        "m1": 30,
        "subjectId": "math",
        "sep": 29
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 15
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "4758",
    "password": "4758",
    "_migratedAt": "2026-10-10T18:37:59.541Z",
    "_lastModified": 1791657479541,
    "_updatedAt": "2026-10-10T18:10:51.570Z",
    "subjectScores.english_al.scores.t1_sep": null
  },
  {
    "id": "SK-G1-AR-007",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "يامن إسلام أحمد",
    "nameEn": "Yamen Islam Ahmed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_total": 98,
      "t1_m1": 19.5,
      "t1_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep": 28,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "annual_total": 98,
      "t1_sep_pct": 93.33,
      "t1_sep_max": 30
    },
    "subjectScores": {
      "math": {
        "subjectId": "math",
        "m1": 30,
        "scores": {
          "t1_exam": {
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "score": 0,
            "isRecorded": true,
            "maxScore": 30
          },
          "t1_tasks": {
            "maxScore": 20,
            "isRecorded": true,
            "score": 0,
            "updatedAt": "2026-10-04T19:13:45.271Z"
          },
          "t1_m1": {
            "isRecorded": true,
            "maxScore": 30,
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "score": 30
          },
          "t1_m2": {
            "score": 0,
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "isRecorded": true,
            "maxScore": 20
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / مروة",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 28
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "7991",
    "password": "7991",
    "_migratedAt": "2026-10-10T18:37:59.542Z",
    "_updatedAt": "2026-10-09T18:05:16.750Z",
    "_lastModified": 1791657479542
  },
  {
    "id": "SK-G1-LN-001",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "سارة رضا عبد المقصود",
    "nameEn": "Sara Reda Abdel Maksoud",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 100,
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_total": 98,
      "t1_exam": 29.5,
      "annual_total": 98,
      "t1_m1": 19.5,
      "t1_total": 98,
      "t2_exam": 30,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_sep_pct": 100,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "english_ol": {
        "teacherNameAr": "مس / يارا",
        "sep": 15,
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "arabic": {
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "teacherNameAr": "مس / مروة"
      },
      "math": {
        "m1": 30,
        "scores": {
          "t1_m1": {
            "score": 30,
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "maxScore": 30,
            "isRecorded": true
          },
          "t1_m2": {
            "score": 0,
            "maxScore": 20,
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "isRecorded": true
          },
          "t1_exam": {
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "maxScore": 30,
            "score": 0,
            "isRecorded": true
          },
          "t1_tasks": {
            "score": 0,
            "maxScore": 20,
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "isRecorded": true
          },
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:35:28.105Z",
            "score": 30
          }
        },
        "subjectId": "math",
        "sep": 30
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_al": {
        "subjectId": "english_al",
        "sep": 25,
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9142",
    "password": "9142",
    "_migratedAt": "2026-10-10T18:37:59.542Z",
    "_lastModified": 1791657479542,
    "subjectScores.arabic.scores.t1_sep": 30,
    "_updatedAt": "2026-10-10T18:35:04.357Z",
    "subjectScores.english_al.scores.t1_sep": 25,
    "subjectScores.english_ol.scores.t1_sep": 15
  },
  {
    "id": "SK-G1-LN-002",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "كنده السيد علي",
    "nameEn": "Kenda Elsayed Ali",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_sep": 100,
      "annual_total": 98,
      "t2_m1": 20,
      "t1_total": 98,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_total": 98,
      "t2_exam": 30,
      "t2_tasks": null,
      "t1_exam": 29.5,
      "t1_tasks": null,
      "t1_sep_pct": 100,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / مروة",
        "sep": 30,
        "subjectId": "arabic"
      },
      "english_ol": {
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol",
        "sep": 15
      },
      "math": {
        "subjectId": "math",
        "m1": 30,
        "scores": {
          "t1_exam": {
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "isRecorded": true,
            "maxScore": 30,
            "score": 0
          },
          "t1_tasks": {
            "score": 0,
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "maxScore": 20,
            "isRecorded": true
          },
          "t1_m1": {
            "maxScore": 30,
            "score": 30,
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "isRecorded": true
          },
          "t1_m2": {
            "maxScore": 20,
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "score": 0
          },
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:39:27.023Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_al": {
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "sep": 25
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8326",
    "password": "8326",
    "_lastModified": 1791657479543,
    "_updatedAt": "2026-10-10T18:36:23.700Z",
    "_migratedAt": "2026-10-10T18:37:59.543Z",
    "subjectScores.english_ol.scores.t1_sep": 15,
    "subjectScores.english_al.scores.t1_sep": 25
  },
  {
    "id": "SK-G1-LN-003",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "ريحانة عبد الرحمن عاطف",
    "nameEn": "Rihana Abdel Rahman Atef",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_total": 98,
      "t1_sep": 98,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "annual_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_sep_pct": 98,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "math": {
        "scores": {
          "t1_m1": {
            "score": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "maxScore": 30
          },
          "t1_m2": {
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "score": 0,
            "isRecorded": true,
            "maxScore": 20
          },
          "t1_tasks": {
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "isRecorded": true,
            "score": 0,
            "maxScore": 20
          },
          "t1_exam": {
            "score": 0,
            "isRecorded": true,
            "maxScore": 30,
            "updatedAt": "2026-10-04T19:13:45.271Z"
          },
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:39:13.234Z",
            "score": 29
          }
        },
        "m1": 30,
        "subjectId": "math",
        "sep": 29
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / مروة",
        "sep": 30,
        "subjectId": "arabic"
      },
      "english_ol": {
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / يارا",
        "sep": 15,
        "subjectId": "english_ol"
      },
      "english_al": {
        "scores": {
          "t1_sep": {
            "score": 24,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "sep": 24
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "5031",
    "password": "5031",
    "_migratedAt": "2026-10-10T18:37:59.543Z",
    "_updatedAt": "2026-10-10T18:36:16.085Z",
    "_lastModified": 1791657479543,
    "subjectScores.english_al.scores.t1_sep": 24,
    "subjectScores.english_ol.scores.t1_sep": 15
  },
  {
    "id": "SK-G1-LN-004",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "لي لي أحمد محمد يسرى",
    "nameEn": "Lili Ahmed Mohamed Yousry",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "annual_total": 98,
      "t1_exam": 29.5,
      "t2_total": 98,
      "t2_exam": 30,
      "t1_sep": 96,
      "t1_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep_pct": 96,
      "t1_sep_max": 100
    },
    "phone": "",
    "notes": "",
    "subjectScores": {
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30,
        "subjectId": "arabic",
        "teacherNameAr": "مس / مروة"
      },
      "math": {
        "scores": {
          "t1_exam": {
            "maxScore": 30,
            "score": 0,
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.271Z"
          },
          "t1_m2": {
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "maxScore": 20,
            "isRecorded": true,
            "score": 0
          },
          "t1_m1": {
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "maxScore": 30,
            "isRecorded": true,
            "score": 30
          },
          "t1_tasks": {
            "maxScore": 20,
            "score": 0,
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "isRecorded": true
          },
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:39:21.630Z",
            "score": 28
          }
        },
        "subjectId": "math",
        "m1": 30,
        "sep": 28
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 15,
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا"
      },
      "english_al": {
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 23,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_al",
        "sep": 23
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "1141",
    "password": "1141",
    "_updatedAt": "2026-10-10T18:37:35.964Z",
    "_lastModified": 1791657479544,
    "_migratedAt": "2026-10-10T18:37:59.544Z",
    "subjectScores.english_ol.scores.t1_sep": 15,
    "subjectScores.english_al.scores.t1_sep": 23
  },
  {
    "id": "SK-G1-LN-005",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "حمزة إبراهيم زيدان",
    "nameEn": "Hamza Ibrahim Zeidan",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 100,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_m1": 19.5,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t2_total": 98,
      "annual_total": 98,
      "t1_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep_pct": 100,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / مروة",
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "math": {
        "subjectId": "math",
        "scores": {
          "t1_tasks": {
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "maxScore": 20,
            "score": 0
          },
          "t1_m1": {
            "score": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "maxScore": 30
          },
          "t1_exam": {
            "maxScore": 30,
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "isRecorded": true,
            "score": 0
          },
          "t1_m2": {
            "score": 0,
            "updatedAt": "2026-10-04T19:13:45.271Z",
            "isRecorded": true,
            "maxScore": 20
          },
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:38:06.827Z",
            "score": 30
          }
        },
        "m1": 30,
        "sep": 30
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "sep": 15,
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / يارا",
        "subjectId": "english_ol"
      },
      "english_al": {
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_al",
        "sep": 25,
        "teacherNameAr": "مس / يا��ا"
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "2422",
    "password": "2422",
    "_lastModified": 1791657479544,
    "_migratedAt": "2026-10-10T18:37:59.544Z",
    "_updatedAt": "2026-10-10T18:34:43.416Z",
    "subjectScores.english_ol.scores.t1_sep": 15,
    "subjectScores.english_al.scores.t1_sep": 25
  },
  {
    "id": "SK-G1-LN-006",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "حمزة محمد البنا",
    "nameEn": "Hamza Mohamed Elbanna",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t2_total": 98,
      "t1_total": 98,
      "t1_tasks": null,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_sep": 67,
      "t2_tasks": null,
      "annual_total": 98,
      "t1_m1": 19.5,
      "t1_sep_pct": 95.71,
      "t1_sep_max": 70
    },
    "subjectScores": {
      "arabic": {
        "teacherNameAr": "مس / مروة",
        "scores": {},
        "sep": 0,
        "subjectId": "arabic"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "m1": 30,
        "subjectId": "math",
        "scores": {
          "t1_exam": {
            "isRecorded": true,
            "score": 0,
            "updatedAt": "2026-10-04T19:13:45.272Z",
            "maxScore": 30
          },
          "t1_tasks": {
            "score": 0,
            "updatedAt": "2026-10-04T19:13:45.272Z",
            "maxScore": 20,
            "isRecorded": true
          },
          "t1_m2": {
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.272Z",
            "score": 0,
            "maxScore": 20
          },
          "t1_m1": {
            "maxScore": 30,
            "score": 30,
            "updatedAt": "2026-10-04T19:13:45.272Z",
            "isRecorded": true
          },
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:38:00.999Z",
            "score": 27
          }
        },
        "sep": 27
      },
      "english_ol": {
        "subjectId": "english_ol",
        "sep": 15,
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / يارا"
      },
      "english_al": {
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 25,
        "teacherNameAr": "مس / يارا",
        "subjectId": "english_al"
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "2914",
    "password": "2914",
    "_migratedAt": "2026-10-10T18:37:59.545Z",
    "_lastModified": 1791657479545,
    "_updatedAt": "2026-10-10T18:34:32.289Z",
    "subjectScores.english_ol.scores.t1_sep": 14,
    "subjectScores.english_al.scores.t1_sep": 25
  },
  {
    "id": "SK-G1-LN-007",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "مروان أشرف رمضان",
    "nameEn": "Marwan Ashraf Ramadan",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "annual_total": 98,
      "t1_total": 98,
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep": 97,
      "t1_sep_pct": 97,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "m1": 30,
        "scores": {
          "t1_m1": {
            "score": 30,
            "updatedAt": "2026-10-04T19:13:45.272Z",
            "isRecorded": true,
            "maxScore": 30
          },
          "t1_m2": {
            "score": 0,
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.272Z",
            "maxScore": 20
          },
          "t1_tasks": {
            "updatedAt": "2026-10-04T19:13:45.272Z",
            "isRecorded": true,
            "maxScore": 20,
            "score": 0
          },
          "t1_exam": {
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.272Z",
            "score": 0,
            "maxScore": 30
          },
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:36:20.904Z",
            "score": 27
          }
        },
        "subjectId": "math",
        "sep": 27
      },
      "english_ol": {
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol",
        "sep": 15,
        "teacherNameAr": "مس / يارا"
      },
      "english_al": {
        "teacherNameAr": "مس / يارا",
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 25
      },
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30,
        "subjectId": "arabic",
        "teacherNameAr": "مس / مروة"
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "5806",
    "password": "5806",
    "_lastModified": 1791657479546,
    "_updatedAt": "2026-10-10T18:35:50.597Z",
    "_migratedAt": "2026-10-10T18:37:59.546Z",
    "subjectScores.english_al.scores.t1_sep": 25,
    "subjectScores.english_ol.scores.t1_sep": 15
  },
  {
    "id": "SK-G1-LN-008",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "يوسف عمرو محمد",
    "nameEn": "Youssef Amr Mohamed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 95,
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_total": 98,
      "t2_total": 98,
      "annual_total": 98,
      "t1_sep_pct": 95,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "arabic": {
        "sep": 30,
        "teacherNameAr": "مس / مروة",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 25,
        "teacherNameAr": "مس / يارا"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "scores": {
          "t1_m1": {
            "isRecorded": true,
            "score": 30,
            "maxScore": 30,
            "updatedAt": "2026-10-04T19:13:45.272Z"
          },
          "t1_m2": {
            "maxScore": 20,
            "isRecorded": true,
            "score": 0,
            "updatedAt": "2026-10-04T19:13:45.272Z"
          },
          "t1_exam": {
            "isRecorded": true,
            "maxScore": 30,
            "score": 0,
            "updatedAt": "2026-10-04T19:13:45.272Z"
          },
          "t1_tasks": {
            "maxScore": 20,
            "score": 0,
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.272Z"
          },
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:38:16.226Z",
            "score": 25
          }
        },
        "subjectId": "math",
        "m1": 30,
        "sep": 25
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 15
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "2706",
    "password": "2706",
    "_migratedAt": "2026-10-10T18:37:59.546Z",
    "_updatedAt": "2026-10-10T18:21:38.277Z",
    "_lastModified": 1791657479546,
    "subjectScores.english_al.scores.t1_sep": 25
  },
  {
    "id": "SK-G1-LN-009",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "علي محمد علاء الدين",
    "nameEn": "Ali Mohamed Alaa El-Din",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "annual_total": 98,
      "t1_total": 98,
      "t2_total": 98,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t1_exam": 29.5,
      "t1_sep": 82,
      "t1_sep_pct": 96.47,
      "t1_sep_max": 85
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "scores": {
          "t1_tasks": {
            "maxScore": 20,
            "score": 0,
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.272Z"
          },
          "t1_m2": {
            "updatedAt": "2026-10-04T19:13:45.272Z",
            "score": 0,
            "maxScore": 20,
            "isRecorded": true
          },
          "t1_m1": {
            "score": 30,
            "updatedAt": "2026-10-04T19:13:45.272Z",
            "isRecorded": true,
            "maxScore": 30
          },
          "t1_exam": {
            "updatedAt": "2026-10-04T19:13:45.272Z",
            "maxScore": 30,
            "score": 0,
            "isRecorded": true
          },
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T16:31:37.862Z",
            "score": 29
          }
        },
        "m1": 30,
        "subjectId": "math",
        "sep": 29
      },
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "teacherNameAr": "مس / مروة",
        "sep": 29
      },
      "english_al": {
        "subjectId": "english_al",
        "sep": 24,
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 24,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8467",
    "password": "8467",
    "_lastModified": 1791657479547,
    "_migratedAt": "2026-10-10T18:37:59.547Z",
    "_updatedAt": "2026-10-10T18:23:26.710Z",
    "subjectScores.english_al.scores.t1_sep": 24
  },
  {
    "id": "SK-G1-LN-010",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "زين الدين محمود عبد الحميد",
    "nameEn": "Zein El-Din Mahmoud Abdel Hamid",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t1_exam": 29.5,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "annual_total": 98,
      "t2_total": 98,
      "t1_sep": 100,
      "t1_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep_pct": 100,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "english_ol": {
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "sep": 15
      },
      "english_al": {
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 25,
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا"
      },
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "sep": 30,
        "teacherNameAr": "مس / مروة"
      },
      "math": {
        "m1": 30,
        "subjectId": "math",
        "scores": {
          "t1_m2": {
            "isRecorded": true,
            "score": 0,
            "maxScore": 20,
            "updatedAt": "2026-10-04T19:13:45.272Z"
          },
          "t1_m1": {
            "updatedAt": "2026-10-04T19:13:45.272Z",
            "maxScore": 30,
            "score": 30,
            "isRecorded": true
          },
          "t1_exam": {
            "updatedAt": "2026-10-04T19:13:45.272Z",
            "score": 0,
            "isRecorded": true,
            "maxScore": 30
          },
          "t1_tasks": {
            "maxScore": 20,
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.272Z",
            "score": 0
          },
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:35:58.392Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "1288",
    "password": "1288",
    "_migratedAt": "2026-10-10T18:37:59.547Z",
    "_lastModified": 1791657479547,
    "_updatedAt": "2026-10-10T18:36:59.076Z",
    "subjectScores.english_al.scores.t1_sep": 25,
    "subjectScores.english_ol.scores.t1_sep": 15
  },
  {
    "id": "SK-G2-AR-001",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "arabic",
    "trackNameAr": "ع��بي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "مهدي أحمد محمد",
    "nameEn": "Mahdi Ahmed Mohamed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "annual_total": 98,
      "t1_total": 98,
      "t1_sep": 78,
      "t2_total": 98,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_sep_pct": 97.5,
      "t1_sep_max": 80
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "sep": 29,
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_tasks": {
            "isRecorded": true,
            "score": 0,
            "maxScore": 20,
            "updatedAt": "2026-10-09T21:08:43.382Z"
          },
          "t1_m2": {
            "maxScore": 20,
            "isRecorded": true,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "score": 0
          },
          "t1_exam": {
            "isRecorded": true,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "score": 0,
            "maxScore": 30
          },
          "t1_m1": {
            "maxScore": 20,
            "recordedAt": "2026-10-09T18:37:20.474Z",
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "score": 0,
            "isRecorded": true
          },
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "m1": 20
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:41:23.033Z",
            "score": 29
          }
        },
        "sep": 29
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9132",
    "password": "9132",
    "_updatedAt": "2026-10-10T05:05:43.436Z",
    "_migratedAt": "2026-10-10T18:37:59.548Z",
    "_lastModified": 1791657479548
  },
  {
    "id": "SK-G2-AR-002",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "سيف حسن محمد",
    "nameEn": "Seif Hassan Mohamed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_total": 98,
      "t2_exam": 30,
      "t1_total": 98,
      "t1_exam": 29.5,
      "annual_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_sep": 79,
      "t1_sep_pct": 98.75,
      "t1_sep_max": 80
    },
    "subjectScores": {
      "arabic": {
        "sep": 30,
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_m2": {
            "isRecorded": true,
            "maxScore": 20,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "score": 0
          },
          "t1_m1": {
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "maxScore": 20,
            "isRecorded": true,
            "score": 0
          },
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          },
          "t1_tasks": {
            "maxScore": 20,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "isRecorded": true,
            "score": 0
          },
          "t1_exam": {
            "isRecorded": true,
            "score": 0,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "maxScore": 30
          }
        },
        "m1": 20,
        "subjectId": "arabic"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:42:09.889Z",
            "score": 29
          }
        },
        "sep": 29
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "6248",
    "password": "6248",
    "_updatedAt": "2026-10-10T05:05:54.134Z",
    "_lastModified": 1791657479548,
    "_migratedAt": "2026-10-10T18:37:59.548Z"
  },
  {
    "id": "SK-G2-AR-003",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "آدم أحمد شوقي",
    "nameEn": "Adam Ahmed Shawky",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t1_exam": 29.5,
      "t2_tasks": null,
      "t2_exam": 30,
      "t1_total": 98,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "annual_total": 98,
      "t1_sep": 79,
      "t1_sep_pct": 98.75,
      "t1_sep_max": 80
    },
    "subjectScores": {
      "arabic": {
        "m1": 20,
        "sep": 29,
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          },
          "t1_m1": {
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "score": 0,
            "maxScore": 20,
            "isRecorded": true
          },
          "t1_m2": {
            "score": 0,
            "isRecorded": true,
            "maxScore": 20,
            "updatedAt": "2026-10-09T21:08:43.382Z"
          },
          "t1_exam": {
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "isRecorded": true,
            "maxScore": 30,
            "score": 0
          },
          "t1_tasks": {
            "maxScore": 20,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "score": 0,
            "isRecorded": true
          }
        },
        "teacherNameAr": "مس / أسماء"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:40:47.848Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "4544",
    "password": "4544",
    "_lastModified": 1791657479548,
    "_updatedAt": "2026-10-10T05:06:02.035Z",
    "_migratedAt": "2026-10-10T18:37:59.548Z"
  },
  {
    "id": "SK-G2-AR-004",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "فريدة شريف علي",
    "nameEn": "Farida Sherif Ali",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_m1": 19.5,
      "annual_total": 98,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep": 80,
      "t2_total": 98,
      "t1_total": 98,
      "t1_sep_pct": 100,
      "t1_sep_max": 80
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "m1": 20,
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          },
          "t1_m2": {
            "maxScore": 20,
            "score": 0,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "isRecorded": true
          },
          "t1_m1": {
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "score": 0,
            "isRecorded": true,
            "maxScore": 20
          },
          "t1_tasks": {
            "isRecorded": true,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "maxScore": 20,
            "score": 0
          },
          "t1_exam": {
            "score": 0,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "isRecorded": true,
            "maxScore": 30
          }
        },
        "subjectId": "arabic",
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:40:35.024Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "7608",
    "password": "7608",
    "subjectScores.arabic.scores.t1_sep": 22,
    "_lastModified": 1791657479549,
    "_migratedAt": "2026-10-10T18:37:59.549Z",
    "_updatedAt": "2026-10-10T08:19:25.280Z"
  },
  {
    "id": "SK-G2-AR-005",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "مالك محمد الخشن",
    "nameEn": "Malek Mohamed El-Khoshen",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep": 80,
      "t1_total": 98,
      "t2_total": 98,
      "annual_total": 98,
      "t1_m1": 19.5,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_sep_pct": 100,
      "t1_sep_max": 80
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "sep": 30,
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_exam": {
            "maxScore": 30,
            "isRecorded": true,
            "score": 0,
            "updatedAt": "2026-10-09T21:08:43.382Z"
          },
          "t1_tasks": {
            "score": 0,
            "maxScore": 20,
            "isRecorded": true,
            "updatedAt": "2026-10-09T21:08:43.382Z"
          },
          "t1_m2": {
            "isRecorded": true,
            "score": 0,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "maxScore": 20
          },
          "t1_m1": {
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "score": 0,
            "maxScore": 20,
            "isRecorded": true
          },
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "m1": 20
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:40:40.514Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "5220",
    "password": "5220",
    "_migratedAt": "2026-10-10T18:37:59.549Z",
    "subjectScores.arabic.scores.t1_sep": 25,
    "_updatedAt": "2026-10-10T08:25:16.314Z",
    "_lastModified": 1791657479549
  },
  {
    "id": "SK-G2-AR-006",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "لين مهند خضرو",
    "nameEn": "Leen Mohannad Khidro",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_total": 98,
      "t1_total": 98,
      "annual_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t1_exam": 29.5,
      "t1_sep": 52,
      "t1_sep_pct": 86.67,
      "t1_sep_max": 60
    },
    "phone": "",
    "notes": "",
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "sep": 23,
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_m2": {
            "maxScore": 20,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "isRecorded": true,
            "score": 0
          },
          "t1_sep": {
            "recordedAt": "2026-10-10T08:25:23.103Z",
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T08:25:23.128Z",
            "score": 23
          },
          "t1_m1": {
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "maxScore": 20,
            "isRecorded": true,
            "score": 0
          },
          "t1_exam": {
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "score": 0,
            "isRecorded": true,
            "maxScore": 30
          },
          "t1_tasks": {
            "score": 0,
            "maxScore": 20,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "isRecorded": true
          }
        },
        "m1": 20
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:41:45.770Z",
            "score": 29
          }
        },
        "sep": 29
      }
    },
    "pin": "6796",
    "password": "6796",
    "subjectScores.arabic.scores.t1_sep": 23,
    "_migratedAt": "2026-10-10T18:37:59.549Z",
    "_lastModified": 1791657479549,
    "_updatedAt": "2026-10-10T08:25:23.129Z",
    "enrollmentStatus": "suspended"
  },
  {
    "id": "SK-G2-AR-007",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "إيلين أحمد زيدان",
    "nameEn": "Ellen Ahmed Zeidan",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t1_sep": 80,
      "t1_m1": 19.5,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t2_total": 98,
      "annual_total": 98,
      "t1_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep_pct": 100,
      "t1_sep_max": 80
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "sep": 30,
        "teacherNameAr": "مس / أسماء",
        "m1": 20,
        "scores": {
          "t1_exam": {
            "isRecorded": true,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "maxScore": 30,
            "score": 0
          },
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          },
          "t1_m2": {
            "isRecorded": true,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "score": 0,
            "maxScore": 20
          },
          "t1_m1": {
            "isRecorded": true,
            "score": 0,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "maxScore": 20
          },
          "t1_tasks": {
            "isRecorded": true,
            "maxScore": 20,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "score": 0
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:40:53.472Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "6943",
    "password": "6943",
    "subjectScores.arabic.scores.t1_sep": 18,
    "_lastModified": 1791657479550,
    "_updatedAt": "2026-10-10T08:26:16.198Z",
    "_migratedAt": "2026-10-10T18:37:59.550Z"
  },
  {
    "id": "SK-G2-AR-008",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "بيسان محمد أحمد",
    "nameEn": "Bisan Mohamed Ahmed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 78,
      "annual_total": 98,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_m1": 19.5,
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_total": 98,
      "t2_exam": 30,
      "t1_total": 98,
      "t1_exam": 29.5,
      "t1_sep_pct": 97.5,
      "t1_sep_max": 80
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "m1": 20,
        "sep": 28,
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:41:02.065Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "7266",
    "password": "7266",
    "_migratedAt": "2026-10-10T18:37:59.550Z",
    "_lastModified": 1791657479550,
    "_updatedAt": "2026-10-09T20:49:58.347Z"
  },
  {
    "id": "SK-G2-LN-001",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "نوح عبد الحميد سمير",
    "nameEn": "Noah Abdel Hamid Samir",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "t1_exam": 29.5,
      "annual_total": 98,
      "t2_exam": 30,
      "t2_tasks": null,
      "t1_sep": 100,
      "t1_tasks": null,
      "t2_total": 98,
      "t1_total": 98,
      "t1_sep_pct": 100,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "m1": 20,
        "sep": 30,
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أسماء"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:26:43.925Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9514",
    "password": "9514",
    "_updatedAt": "2026-10-09T18:04:51.476Z",
    "_lastModified": 1791657479550,
    "_migratedAt": "2026-10-10T18:37:59.550Z"
  },
  {
    "id": "SK-G2-LN-002",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "طارق السيد عبد الغني",
    "nameEn": "Tarek Elsayed Abdel Ghani",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_exam": 29.5,
      "t1_tasks": null,
      "t2_exam": 30,
      "t2_tasks": null,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t1_sep": 99,
      "t1_total": 98,
      "t1_sep_pct": 99,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "sep": 30,
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "m1": 20,
        "scores": {
          "t1_tasks": {
            "score": 0,
            "maxScore": 20,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "isRecorded": true
          },
          "t1_exam": {
            "score": 0,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "isRecorded": true,
            "maxScore": 30
          },
          "t1_m2": {
            "isRecorded": true,
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "maxScore": 20,
            "score": 0
          },
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          },
          "t1_m1": {
            "updatedAt": "2026-10-09T21:08:43.382Z",
            "isRecorded": true,
            "score": 0,
            "maxScore": 20
          }
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:26:50.761Z",
            "score": 29
          }
        },
        "sep": 29
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "2350",
    "password": "2350",
    "_updatedAt": "2026-10-09T20:49:20.199Z",
    "_lastModified": 1791657479550,
    "_migratedAt": "2026-10-10T18:37:59.550Z"
  },
  {
    "id": "SK-G2-LN-003",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "سليم محمد السعيد",
    "nameEn": "Selim Mohamed El-Saeed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_total": 98,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_exam": 29.5,
      "t1_sep": 100,
      "t2_exam": 30,
      "annual_total": 98,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "t1_sep_pct": 100,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "m1": 20,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30,
        "teacherNameAr": "مس / أسماء"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:26:38.770Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "6677",
    "password": "6677",
    "_updatedAt": "2026-10-09T20:49:24.074Z",
    "_lastModified": 1791657479551,
    "_migratedAt": "2026-10-10T18:37:59.551Z"
  },
  {
    "id": "SK-G2-LN-004",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "معتز محمد أطاها",
    "nameEn": "Moataz Mohamed Ataha",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "annual_total": 98,
      "t2_total": 98,
      "t2_exam": 30,
      "t1_sep": 92,
      "t1_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep_pct": 92,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "m1": 20,
        "sep": 28,
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:27:24.206Z",
            "score": 26
          }
        },
        "sep": 26
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 18,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 18
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "2569",
    "password": "2569",
    "_lastModified": 1791657479551,
    "_updatedAt": "2026-10-09T18:04:51.508Z",
    "_migratedAt": "2026-10-10T18:37:59.551Z"
  },
  {
    "id": "SK-G2-LN-005",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "راشد عبد الكريم بشير",
    "nameEn": "Rashed Abdel Karim Basheer",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_total": 98,
      "t1_sep": 77,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_m1": 19.5,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "annual_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_sep_pct": 96.25,
      "t1_sep_max": 80
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "sep": 29,
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "m1": 20
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:28:44.470Z",
            "score": 28
          }
        },
        "sep": 28
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "5886",
    "password": "5886",
    "_updatedAt": "2026-10-09T18:04:51.530Z",
    "_lastModified": 1791657479551,
    "_migratedAt": "2026-10-10T18:37:59.551Z"
  },
  {
    "id": "SK-G2-LN-006",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "أنس أحمد محمد",
    "nameEn": "Anas Ahmed Mohamed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_sep": 100,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_total": 98,
      "annual_total": 98,
      "t2_total": 98,
      "t2_exam": 30,
      "t2_tasks": null,
      "t1_exam": 29.5,
      "t1_tasks": null,
      "t1_sep_pct": 100,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "sep": 30,
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء",
        "m1": 20,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:30:51.861Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "5812",
    "password": "5812",
    "_updatedAt": "2026-10-09T18:04:51.540Z",
    "_lastModified": 1791657479551,
    "_migratedAt": "2026-10-10T18:37:59.551Z"
  },
  {
    "id": "SK-G2-LN-007",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "عصام محمد عصام",
    "nameEn": "Essam Mohamed Essam",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 96,
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_total": 98,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t1_m1": 19.5,
      "annual_total": 98,
      "t2_exam": 30,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_sep_pct": 96,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "arabic": {
        "m1": 20,
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء",
        "sep": 28,
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:29:47.291Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 18,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 18
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "8594",
    "password": "8594",
    "_migratedAt": "2026-10-10T18:37:59.551Z",
    "_updatedAt": "2026-10-09T18:04:51.549Z",
    "_lastModified": 1791657479551
  },
  {
    "id": "SK-G2-LN-008",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "مالك أحمد عبد المؤمن",
    "nameEn": "Malek Ahmed Abdel Moemen",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_total": 98,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_total": 98,
      "annual_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_exam": 30,
      "t1_sep": 91,
      "t1_exam": 29.5,
      "t1_sep_pct": 91,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "m1": 20,
        "sep": 28,
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أسماء"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:28:39.969Z",
            "score": 26
          }
        },
        "sep": 26
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 17,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 17
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "3408",
    "password": "3408",
    "_migratedAt": "2026-10-10T18:37:59.551Z",
    "_lastModified": 1791657479551,
    "_updatedAt": "2026-10-10T05:05:12.310Z"
  },
  {
    "id": "SK-G2-LN-010",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "فيروز محمد النجار",
    "nameEn": "Fayrouz Mohamed El-Naggar",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "annual_total": 98,
      "t1_total": 98,
      "t1_sep": 79,
      "t2_exam": 30,
      "t2_total": 98,
      "t1_exam": 29.5,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_m1": 19.5,
      "t1_sep_pct": 98.75,
      "t1_sep_max": 80
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30,
        "m1": 20,
        "subjectId": "arabic"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:41:32.540Z",
            "score": 29
          }
        },
        "sep": 29
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "6162",
    "password": "6162",
    "_lastModified": 1791657479552,
    "_updatedAt": "2026-10-09T18:04:51.568Z",
    "_migratedAt": "2026-10-10T18:37:59.552Z"
  },
  {
    "id": "SK-G2-LN-012",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "ليا هيثم رشوان",
    "nameEn": "Lia Haitham Rashwan",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "t1_exam": 29.5,
      "annual_total": 98,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t1_total": 98,
      "t1_sep": 97,
      "t1_sep_pct": 97,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "m1": 20,
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "sep": 28
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:30:29.309Z",
            "score": 29
          }
        },
        "sep": 29
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "1505",
    "password": "1505",
    "_lastModified": 1791657479552,
    "_migratedAt": "2026-10-10T18:37:59.552Z",
    "_updatedAt": "2026-10-09T18:04:51.579Z"
  },
  {
    "id": "SK-G2-LN-014",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "حبيبة أحمد حسين",
    "nameEn": "Habiba Ahmed Hussein",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 96,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_total": 98,
      "annual_total": 98,
      "t1_total": 98,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_sep_pct": 96,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "m1": 20,
        "sep": 29
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:30:33.930Z",
            "score": 28
          }
        },
        "sep": 28
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "7143",
    "password": "7143",
    "_migratedAt": "2026-10-10T18:37:59.552Z",
    "_lastModified": 1791657479552,
    "_updatedAt": "2026-10-09T18:04:51.587Z"
  },
  {
    "id": "SK-G2-LN-015",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "تالا هشام محمد",
    "nameEn": "Tala Hesham Mohamed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_total": 98,
      "t1_m1": 19.5,
      "t1_total": 98,
      "t1_sep": 99,
      "t1_tasks": null,
      "annual_total": 98,
      "t2_tasks": null,
      "t1_sep_pct": 99,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "m1": 20,
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:27:12.864Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "7056",
    "password": "7056",
    "parentUpdated": true,
    "photo": "data:image/jpeg;base64,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",
    "_lastModified": 1791657479552,
    "parentUpdatedAt": "2026-10-09T18:45:12.775Z",
    "_migratedAt": "2026-10-10T18:37:59.552Z",
    "_updatedAt": "2026-10-09T18:45:12.787Z"
  },
  {
    "id": "SK-G2-LN-016",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "زينة عبد الله سيد",
    "nameEn": "Zeina Abdullah Sayed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_sep": 100,
      "t1_total": 98,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_total": 98,
      "t1_m1": 19.5,
      "t2_tasks": null,
      "t2_exam": 30,
      "t1_tasks": null,
      "t1_exam": 29.5,
      "t1_sep_pct": 100,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "arabic": {
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء",
        "m1": 20
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:31:30.931Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8654",
    "password": "8654",
    "_updatedAt": "2026-10-09T18:04:51.607Z",
    "_migratedAt": "2026-10-10T18:37:59.552Z",
    "_lastModified": 1791657479552
  },
  {
    "id": "SK-G2-LN-017",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "سجى جمال إسماعيل",
    "nameEn": "Saja Gamal Ismail",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_total": 98,
      "t1_sep": 100,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_total": 98,
      "t1_m1": 19.5,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t2_tasks": null,
      "t1_tasks": null,
      "annual_total": 98,
      "t1_sep_pct": 100,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "sep": 30,
        "m1": 20
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:27:04.867Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8017",
    "password": "8017",
    "_lastModified": 1791657479552,
    "_migratedAt": "2026-10-10T18:37:59.552Z",
    "_updatedAt": "2026-10-09T18:04:51.618Z"
  },
  {
    "id": "SK-G2-LN-018",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "جاد محمد عباس",
    "nameEn": "Jad Mohamed Abbas",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t2_tasks": null,
      "t1_sep": 95,
      "t1_tasks": null,
      "t2_total": 98,
      "t1_total": 98,
      "t1_sep_pct": 95,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "arabic": {
        "sep": 28,
        "m1": 20,
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:26:07.237Z",
            "score": 28
          }
        },
        "sep": 28
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "2585",
    "password": "2585",
    "_migratedAt": "2026-10-10T18:37:59.552Z",
    "_lastModified": 1791657479552,
    "_updatedAt": "2026-10-09T18:04:51.628Z"
  },
  {
    "id": "SK-G2-LN-019",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "إيلين أحمد محمود",
    "nameEn": "Ellen Ahmed Mahmoud",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_total": 98,
      "t1_sep": 100,
      "t1_total": 98,
      "t1_exam": 29.5,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t2_tasks": null,
      "t1_tasks": null,
      "annual_total": 98,
      "t1_sep_pct": 100,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أسماء",
        "sep": 30,
        "m1": 20,
        "subjectId": "arabic"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:29:43.196Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "7633",
    "password": "7633",
    "_migratedAt": "2026-10-10T18:37:59.553Z",
    "_lastModified": 1791657479553,
    "_updatedAt": "2026-10-09T18:04:51.636Z"
  },
  {
    "id": "SK-G3-AR-001",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "مليكة محمد عادل",
    "nameEn": "Malika Mohamed Adel",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 89,
      "t1_m1": 19.5,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t2_tasks": null,
      "t1_tasks": null,
      "annual_total": 98,
      "t1_total": 98,
      "t2_total": 98,
      "t1_sep_pct": 98.89,
      "t1_sep_max": 90
    },
    "subjectScores": {
      "arabic": {
        "sep": 29,
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:23:37.986Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9266",
    "password": "9266",
    "_lastModified": 1791657479553,
    "_updatedAt": "2026-10-09T18:05:27.932Z",
    "_migratedAt": "2026-10-10T18:37:59.553Z"
  },
  {
    "id": "SK-G3-AR-002",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "أرين أشرف مجدي",
    "nameEn": "Areen Ashraf Magdy",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_total": 98,
      "t1_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_sep": 87,
      "annual_total": 98,
      "t1_sep_pct": 96.67,
      "t1_sep_max": 90
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "sep": 50,
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-14T15:24:50.198Z"
          }
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:23:14.159Z",
            "score": 29
          }
        },
        "sep": 29
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-14T15:24:50.198Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "3007",
    "password": "3007",
    "_migratedAt": "2026-10-10T18:37:59.553Z",
    "_updatedAt": "2026-10-14T15:24:50.198Z",
    "_lastModified": 1791991490198
  },
  {
    "id": "SK-G3-AR-003",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "الفاتح عبد القادر محمد",
    "nameEn": "Al-Fateh Abdel Qader Mohamed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_total": 98,
      "annual_total": 98,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep": 88,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_sep_pct": 97.78,
      "t1_sep_max": 90
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:23:54.278Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8070",
    "password": "8070",
    "_migratedAt": "2026-10-10T18:37:59.553Z",
    "_updatedAt": "2026-10-09T18:05:27.982Z",
    "_lastModified": 1791657479553
  },
  {
    "id": "SK-G3-AR-004",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "عمر محمود عبد الوهاب",
    "nameEn": "Omar Mahmoud Abdel Wahab",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 87,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_m1": 19.5,
      "t1_total": 98,
      "t2_total": 98,
      "annual_total": 98,
      "t1_exam": 29.5,
      "t2_tasks": null,
      "t1_tasks": null,
      "t2_exam": 30,
      "t1_sep_pct": 96.67,
      "t1_sep_max": 90
    },
    "subjectScores": {
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 28
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:23:22.962Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9396",
    "password": "9396",
    "_migratedAt": "2026-10-10T18:37:59.553Z",
    "_updatedAt": "2026-10-09T18:05:28.001Z",
    "_lastModified": 1791657479553
  },
  {
    "id": "SK-G3-AR-005",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "عبد الرحمن طه حسين",
    "nameEn": "Abdel Rahman Taha Hussein",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 79,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m1": 19.5,
      "t1_total": 98,
      "t2_total": 98,
      "t1_exam": 29.5,
      "t2_tasks": null,
      "t2_exam": 30,
      "t1_tasks": null,
      "annual_total": 98,
      "t1_sep_pct": 87.78,
      "t1_sep_max": 90
    },
    "subjectScores": {
      "arabic": {
        "sep": 27,
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 27,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "score": 26,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T17:48:58.643Z"
          }
        },
        "sep": 26
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 26,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 26
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "9145",
    "password": "9145",
    "_lastModified": 1791657479553,
    "_migratedAt": "2026-10-10T18:37:59.553Z",
    "_updatedAt": "2026-10-09T18:05:28.018Z"
  },
  {
    "id": "SK-G3-LN-001",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "لين محمد عبد الحليم",
    "nameEn": "Leen Mohamed Abdel Halim",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_sep": 117,
      "t1_total": 98,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_sep_pct": 97.5,
      "t1_sep_max": 120
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30,
        "subjectId": "arabic"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:47:31.817Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 27,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 27
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "7623",
    "password": "7623",
    "_migratedAt": "2026-10-10T18:37:59.553Z",
    "_lastModified": 1791657479553,
    "_updatedAt": "2026-10-09T18:05:28.031Z"
  },
  {
    "id": "SK-G3-LN-002",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "آسية أحمد مصطفى",
    "nameEn": "Asiya Ahmed Mostafa",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 118,
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "annual_total": 98,
      "t1_total": 98,
      "t2_total": 98,
      "t1_sep_pct": 98.33,
      "t1_sep_max": 120
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30,
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:47:36.681Z",
            "score": 29
          }
        },
        "sep": 29
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9695",
    "password": "9695",
    "_updatedAt": "2026-10-09T18:05:28.044Z",
    "_lastModified": 1791657479553,
    "_migratedAt": "2026-10-10T18:37:59.553Z"
  },
  {
    "id": "SK-G3-LN-003",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "أريام أحمد حسن",
    "nameEn": "Aryam Ahmed Hassan",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep": null,
      "t2_total": 98,
      "t1_total": 98,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_m1": 19.5,
      "annual_total": 98,
      "t2_exam": 30,
      "t1_exam": 29.5
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "scores": {},
        "subjectId": "arabic",
        "sep": 0
      }
    },
    "pin": "5337",
    "password": "5337",
    "_updatedAt": "2026-10-09T18:05:28.054Z",
    "_lastModified": 1791657479554,
    "_migratedAt": "2026-10-10T18:37:59.554Z"
  },
  {
    "id": "SK-G3-LN-004",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "ليان سامح بسيوني",
    "nameEn": "Layan Sameh Basiouny",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_sep": 110,
      "t1_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep_pct": 91.67,
      "t1_sep_max": 120
    },
    "subjectScores": {
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أسماء",
        "sep": 28,
        "subjectId": "arabic"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:46:01.313Z",
            "score": 29
          }
        },
        "sep": 29
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 26,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 26
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "7980",
    "password": "7980",
    "_updatedAt": "2026-10-09T18:05:28.067Z",
    "_migratedAt": "2026-10-10T18:37:59.554Z",
    "_lastModified": 1791657479554
  },
  {
    "id": "SK-G3-LN-005",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "ماريا خالد فهمي",
    "nameEn": "Maria Khaled Fahmy",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t1_exam": 29.5,
      "t1_total": 98,
      "annual_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep": 117,
      "t1_sep_pct": 97.5,
      "t1_sep_max": 120
    },
    "subjectScores": {
      "arabic": {
        "sep": 28,
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:47:29.044Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "8951",
    "password": "8951",
    "_updatedAt": "2026-10-09T18:05:28.080Z",
    "_lastModified": 1791657479554,
    "_migratedAt": "2026-10-10T18:37:59.554Z"
  },
  {
    "id": "SK-G3-LN-006",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "آدم محمد صبحي",
    "nameEn": "Adam Mohamed Sobhy",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_exam": 30,
      "t2_tasks": null,
      "t1_m1": 19.5,
      "t1_exam": 29.5,
      "annual_total": 98,
      "t2_total": 98,
      "t1_sep": 119,
      "t1_total": 98,
      "t1_sep_pct": 99.17,
      "t1_sep_max": 120
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29,
        "subjectId": "arabic"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:46:59.195Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9504",
    "password": "9504",
    "_migratedAt": "2026-10-10T18:37:59.554Z",
    "_updatedAt": "2026-10-09T18:05:28.093Z",
    "_lastModified": 1791657479554
  },
  {
    "id": "SK-G3-LN-007",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "زين سليمان محمد",
    "nameEn": "Zein Soliman Mohamed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 120,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_m1": 19.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_total": 98,
      "annual_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep_pct": 100,
      "t1_sep_max": 120
    },
    "subjectScores": {
      "arabic": {
        "sep": 30,
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:45:05.400Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9586",
    "password": "9586",
    "_updatedAt": "2026-10-09T18:05:28.104Z",
    "_lastModified": 1791657479554,
    "_migratedAt": "2026-10-10T18:37:59.554Z"
  },
  {
    "id": "SK-G3-LN-008",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "آدم خالد عبد الله",
    "nameEn": "Adam Khaled Abdullah",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 115,
      "t1_total": 98,
      "t2_total": 98,
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_exam": 30,
      "t2_tasks": null,
      "t1_exam": 29.5,
      "t1_tasks": null,
      "annual_total": 98,
      "t1_sep_pct": 95.83,
      "t1_sep_max": 120
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "sep": 29
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:46:28.633Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 27,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 27
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "1515",
    "password": "1515",
    "_migratedAt": "2026-10-10T18:37:59.554Z",
    "_updatedAt": "2026-10-09T18:05:28.116Z",
    "_lastModified": 1791657479554
  },
  {
    "id": "SK-G3-LN-009",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "أدهم مصطفى وحيد",
    "nameEn": "Adham Mostafa Waheed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t1_m1": 19.5,
      "t2_exam": 30,
      "t2_tasks": null,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_total": 98,
      "t1_sep": 119,
      "annual_total": 98,
      "t1_sep_pct": 99.17,
      "t1_sep_max": 120
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29,
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:44:58.868Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "4778",
    "password": "4778",
    "_lastModified": 1791657479554,
    "_migratedAt": "2026-10-10T18:37:59.554Z",
    "_updatedAt": "2026-10-09T18:05:28.127Z"
  },
  {
    "id": "SK-G3-LN-010",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "يوسف محمد عبد اللطيف",
    "nameEn": "Youssef Mohamed Abdel Latif",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_sep": 117,
      "t2_tasks": null,
      "annual_total": 98,
      "t1_tasks": null,
      "t2_total": 98,
      "t1_total": 98,
      "t1_sep_pct": 97.5,
      "t1_sep_max": 120
    },
    "subjectScores": {
      "arabic": {
        "sep": 27,
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 27,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:44:02.564Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "3213",
    "password": "3213",
    "_migratedAt": "2026-10-10T18:37:59.554Z",
    "_updatedAt": "2026-10-09T18:05:28.138Z",
    "_lastModified": 1791657479554
  },
  {
    "id": "SK-G3-LN-011",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "عبد الرحمن خالد رجب",
    "nameEn": "Abdel Rahman Khaled Ragab",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 115,
      "t1_tasks": null,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_tasks": null,
      "t1_m1": 19.5,
      "t1_total": 98,
      "annual_total": 98,
      "t2_exam": 30,
      "t2_total": 98,
      "t1_exam": 29.5,
      "t1_sep_pct": 95.83,
      "t1_sep_max": 120
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "sep": 29,
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:42:53.760Z",
            "score": 29
          }
        },
        "sep": 29
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 28
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "1900",
    "password": "1900",
    "_lastModified": 1791657479555,
    "_updatedAt": "2026-10-09T18:05:28.151Z",
    "_migratedAt": "2026-10-10T18:37:59.555Z"
  },
  {
    "id": "SK-G3-LN-012",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "شهم محمد أنور حرب",
    "nameEn": "Shahm Mohamed Anwar Harb",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_tasks": null,
      "t1_sep": 117,
      "t1_tasks": null,
      "t2_total": 98,
      "t1_m1": 19.5,
      "t1_total": 98,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "annual_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_sep_pct": 97.5,
      "t1_sep_max": 120
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "sep": 29
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:46:14.174Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 28
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9672",
    "password": "9672",
    "_lastModified": 1791657479555,
    "_updatedAt": "2026-10-09T18:05:28.172Z",
    "_migratedAt": "2026-10-10T18:37:59.555Z"
  },
  {
    "id": "SK-G3-LN-013",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "زين محمد نبيل نوار",
    "nameEn": "Zein Mohamed Nabil Nawar",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_m1": 19.5,
      "t1_tasks": null,
      "t2_exam": 30,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_tasks": null,
      "t1_exam": 29.5,
      "t1_sep": 120,
      "t2_total": 98,
      "t1_total": 98,
      "t1_sep_pct": 100,
      "t1_sep_max": 120
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:48:25.198Z",
            "score": 30,
            "updatedAt": "2026-10-12T00:25:00.000Z"
          }
        },
        "sep": 29.5
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "2780",
    "password": "2780",
    "_migratedAt": "2026-10-10T18:37:59.555Z",
    "_lastModified": 1791657479555,
    "_updatedAt": "2026-10-09T18:05:28.200Z"
  },
  {
    "id": "SK-G3-LN-014",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "رائد عبد الكريم بشير",
    "nameEn": "Raed Abdel Karim Basheer",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_total": 98,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_exam": 29.5,
      "t1_sep": 86,
      "t2_exam": 30,
      "annual_total": 98,
      "t1_m1": 19.5,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_sep_pct": 95.56,
      "t1_sep_max": 90
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "sep": 28
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:47:53.176Z",
            "score": 29
          }
        },
        "sep": 29
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8135",
    "password": "8135",
    "_lastModified": 1791657479555,
    "_updatedAt": "2026-10-09T18:05:28.214Z",
    "_migratedAt": "2026-10-10T18:37:59.555Z"
  },
  {
    "id": "SK-G3-LN-015",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "أمين السيد أحمد",
    "nameEn": "Amin Elsayed Ahmed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t2_tasks": null,
      "t1_tasks": null,
      "t2_total": 98,
      "annual_total": 98,
      "t1_m1": 19.5,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_total": 98,
      "t2_m2": 20,
      "t1_sep": 119,
      "t1_sep_pct": 99.17,
      "t1_sep_max": 120
    },
    "subjectScores": {
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "sep": 29,
        "teacherNameAr": "مس / أسماء"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:46:49.090Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8801",
    "password": "8801",
    "_lastModified": 1791657479555,
    "_migratedAt": "2026-10-10T18:37:59.555Z",
    "_updatedAt": "2026-10-09T18:05:28.226Z"
  },
  {
    "id": "SK-G3-LN-016",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "نور أحمد عصام",
    "nameEn": "Nour Ahmed Essam",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_total": 98,
      "t1_total": 98,
      "t1_sep": 117,
      "t1_m1": 19.5,
      "t1_exam": 29.5,
      "t2_m2": 20,
      "annual_total": 98,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_exam": 30,
      "t1_sep_pct": 97.5,
      "t1_sep_max": 120
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "sep": 27,
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 27,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:45:21.482Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "3433",
    "password": "3433",
    "_updatedAt": "2026-10-09T18:05:28.238Z",
    "_lastModified": 1791657479555,
    "_migratedAt": "2026-10-10T18:37:59.555Z"
  },
  {
    "id": "SK-G3-LN-017",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "��غات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "ريمان جمال الحسين",
    "nameEn": "Reman Gamal El-Hussein",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "annual_total": 98,
      "t2_total": 98,
      "t1_total": 98,
      "t2_exam": 30,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_exam": 29.5,
      "t1_m1": 19.5,
      "t1_sep": 87,
      "t1_sep_pct": 96.67,
      "t1_sep_max": 90
    },
    "subjectScores": {
      "arabic": {
        "sep": 28,
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:48:28.918Z",
            "score": 29
          }
        },
        "sep": 29
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "8998",
    "password": "8998",
    "_migratedAt": "2026-10-10T18:37:59.555Z",
    "_updatedAt": "2026-10-09T18:05:28.249Z",
    "_lastModified": 1791657479555
  },
  {
    "id": "SK-G3-LN-018",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "مصطفى عبد السلام مصطفى",
    "nameEn": "Mostafa Abdel Salam Mostafa",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 120,
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "annual_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_total": 98,
      "t2_exam": 30,
      "t1_total": 98,
      "t1_exam": 29.5,
      "t1_sep_pct": 100,
      "t1_sep_max": 120
    },
    "subjectScores": {
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء",
        "sep": 30
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:48:03.668Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "4850",
    "password": "4850",
    "_updatedAt": "2026-10-09T18:05:28.262Z",
    "_lastModified": 1791657479556,
    "_migratedAt": "2026-10-10T18:37:59.556Z"
  },
  {
    "id": "SK-G4-AR-001",
    "grade": 4,
    "gradeNameAr": "الصف 4",
    "gradeNameEn": "Grade 4",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "مها رضوان تسون",
    "nameEn": "Maha Radwan Tsoun",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_tasks": null,
      "t2_tasks": null,
      "annual_total": 98,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_total": 98,
      "t1_m1": 19.5,
      "t1_sep": 141,
      "t2_total": 98,
      "t1_sep_pct": 94,
      "t1_sep_max": 150
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 46,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أسماء",
        "sep": 46
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:16:39.287Z",
            "score": 28
          }
        },
        "sep": 28
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 48,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 48
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "3099",
    "password": "3099",
    "_lastModified": 1791657479556,
    "_migratedAt": "2026-10-10T18:37:59.556Z",
    "_updatedAt": "2026-10-09T18:05:38.580Z"
  },
  {
    "id": "SK-G4-AR-002",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "كارما أحمد عطية",
    "nameEn": "Karma Ahmed Attia",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 29.5,
      "t1_sep": 148,
      "t2_exam": 30,
      "annual_total": 98,
      "t2_total": 98,
      "t1_total": 98,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep_pct": 98.67,
      "t1_sep_max": 150
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 48,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 48
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "8584",
    "password": "8584",
    "_migratedAt": "2026-10-10T18:37:59.556Z",
    "_lastModified": 1791657479556,
    "_updatedAt": "2026-10-09T18:05:38.600Z"
  },
  {
    "id": "SK-G4-AR-003",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "جانتي السيد عبد الغني",
    "nameEn": "Janti Elsayed Abdel Ghani",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_exam": 29.5,
      "t1_m1": 19.5,
      "t1_sep": 210,
      "annual_total": 98,
      "t1_total": 98,
      "t2_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep_pct": 100,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "arabic": {
        "sep": 50,
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أسماء"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8790",
    "password": "8790",
    "_migratedAt": "2026-10-10T18:37:59.556Z",
    "_lastModified": 1791657479556,
    "_updatedAt": "2026-10-09T18:05:38.621Z"
  },
  {
    "id": "SK-G4-AR-004",
    "grade": 4,
    "gradeNameAr": "الصف 4",
    "gradeNameEn": "Grade 4",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "على شريف على",
    "nameEn": "Ali Sherif Ali",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep": 178,
      "t1_total": 98,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_total": 98,
      "t1_m1": 19.5,
      "annual_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_sep_pct": 98.89,
      "t1_sep_max": 180
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 48,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أسماء",
        "sep": 48,
        "subjectId": "arabic"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:17:01.270Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "5212",
    "password": "5212",
    "_updatedAt": "2026-10-09T18:05:38.633Z",
    "_lastModified": 1791657479556,
    "_migratedAt": "2026-10-10T18:37:59.556Z"
  },
  {
    "id": "SK-G4-AR-005",
    "grade": 4,
    "gradeNameAr": "الصف 4",
    "gradeNameEn": "Grade 4",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "محمد محمود الصياد",
    "nameEn": "Mohamed Mahmoud El-Sayad",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_total": 98,
      "t1_total": 98,
      "t1_m1": 19.5,
      "t2_exam": 30,
      "annual_total": 98,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_exam": 29.5,
      "t1_sep": 177,
      "t1_sep_pct": 98.33,
      "t1_sep_max": 180
    },
    "subjectScores": {
      "arabic": {
        "sep": 48,
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 48,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:17:06.234Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 49
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "7687",
    "password": "7687",
    "_lastModified": 1791657479556,
    "_updatedAt": "2026-10-09T18:05:38.646Z",
    "_migratedAt": "2026-10-10T18:37:59.556Z"
  },
  {
    "id": "SK-G4-AR-006",
    "grade": 4,
    "gradeNameAr": "الصف 4",
    "gradeNameEn": "Grade 4",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "عبد الله مروان الشيخ",
    "nameEn": "Abdullah Marwan El-Sheikh",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_sep": 126,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t2_total": 98,
      "t1_total": 98,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_m1": 19.5,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep_pct": 96.92,
      "t1_sep_max": 130
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "sep": 0,
        "scores": {},
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:16:55.274Z",
            "score": 28
          }
        },
        "sep": 28
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 28
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "6140",
    "password": "6140",
    "_updatedAt": "2026-10-09T18:05:38.658Z",
    "_migratedAt": "2026-10-10T18:37:59.556Z",
    "_lastModified": 1791657479556
  },
  {
    "id": "SK-G4-LN-001",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "حمزة أحمد عبد الحميد",
    "nameEn": "Hamza Ahmed Abdel Hamid",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "annual_total": 98,
      "t1_sep": 210,
      "t2_tasks": null,
      "t1_tasks": null,
      "t2_total": 98,
      "t1_total": 98,
      "t1_sep_pct": 100,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "arabic": {
        "sep": 50,
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9323",
    "password": "9323",
    "_migratedAt": "2026-10-10T18:37:59.556Z",
    "_updatedAt": "2026-10-09T18:05:38.668Z",
    "_lastModified": 1791657479556
  },
  {
    "id": "SK-G4-LN-002",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "مهيب جمال فتح الله",
    "nameEn": "Moheb Gamal Fathallah",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_exam": 29.5,
      "t1_tasks": null,
      "t2_exam": 30,
      "t2_tasks": null,
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t2_total": 98,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_total": 98,
      "t1_sep": 209,
      "t1_sep_pct": 99.52,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "sep": 49,
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8946",
    "password": "8946",
    "_lastModified": 1791657479557,
    "_migratedAt": "2026-10-10T18:37:59.557Z",
    "_updatedAt": "2026-10-09T18:05:38.680Z"
  },
  {
    "id": "SK-G4-LN-003",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "آدم عمرو أسامة",
    "nameEn": "Adam Amr Osama",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_total": 98,
      "t1_total": 98,
      "t1_sep": 198,
      "t1_tasks": null,
      "t1_m1": 19.5,
      "t2_tasks": null,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "annual_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_sep_pct": 94.29,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "sep": 47,
        "scores": {
          "t1_sep": {
            "score": 47,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أسماء"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 28
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 25
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 49
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "7685",
    "password": "7685",
    "_lastModified": 1791657479557,
    "_migratedAt": "2026-10-10T18:37:59.557Z",
    "_updatedAt": "2026-10-09T18:05:38.694Z"
  },
  {
    "id": "SK-G4-LN-004",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "يوسف كمال محمد",
    "nameEn": "Youssef Kamal Mohamed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m1": 19.5,
      "t2_tasks": null,
      "t1_exam": 29.5,
      "t1_tasks": null,
      "t2_exam": 30,
      "t1_sep": 209,
      "t1_total": 98,
      "t2_total": 98,
      "t1_sep_pct": 99.52,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "sep": 49,
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8195",
    "password": "8195",
    "_updatedAt": "2026-10-09T18:05:38.704Z",
    "_lastModified": 1791657479557,
    "_migratedAt": "2026-10-10T18:37:59.557Z"
  },
  {
    "id": "SK-G4-LN-005",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "عمر أحمد الجزيرى",
    "nameEn": "Omar Ahmed El-Gezeiry",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t2_total": 98,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_exam": 30,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_m1": 19.5,
      "t1_sep": 207,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep_pct": 98.57,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "sep": 48,
        "scores": {
          "t1_sep": {
            "score": 48,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "4418",
    "password": "4418",
    "_migratedAt": "2026-10-10T18:37:59.557Z",
    "_lastModified": 1791657479557,
    "_updatedAt": "2026-10-09T18:05:38.716Z"
  },
  {
    "id": "SK-G4-LN-006",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "يحيي محمد فاروق",
    "nameEn": "Yahia Mohamed Farouk",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_sep": 204,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_total": 98,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_sep_pct": 97.14,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "sep": 48,
        "scores": {
          "t1_sep": {
            "score": 48,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 27,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 27
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "5923",
    "password": "5923",
    "_lastModified": 1791657479557,
    "_migratedAt": "2026-10-10T18:37:59.557Z",
    "_updatedAt": "2026-10-09T18:05:38.729Z"
  },
  {
    "id": "SK-G4-LN-007",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ريان عبد الرحمن",
    "nameEn": "Rayan Abdel Rahman",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_sep": 205,
      "t1_total": 98,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "annual_total": 98,
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_sep_pct": 97.62,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 49,
        "teacherNameAr": "مس / أسماء"
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 27,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 27
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 49
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "5507",
    "password": "5507",
    "_migratedAt": "2026-10-10T18:37:59.557Z",
    "_updatedAt": "2026-10-09T18:05:38.744Z",
    "_lastModified": 1791657479557
  },
  {
    "id": "SK-G4-LN-008",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "دانة السيد علي",
    "nameEn": "Dana Elsayed Ali",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t2_total": 98,
      "t1_exam": 29.5,
      "t1_sep": 210,
      "t1_total": 98,
      "t2_exam": 30,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_m1": 19.5,
      "t1_sep_pct": 100,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "sep": 50
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "1251",
    "password": "1251",
    "_updatedAt": "2026-10-09T18:05:38.756Z",
    "_lastModified": 1791657479557,
    "_migratedAt": "2026-10-10T18:37:59.557Z"
  },
  {
    "id": "SK-G4-LN-009",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "كارما محمد حسام",
    "nameEn": "Karma Mohamed Hossam",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_total": 98,
      "t1_total": 98,
      "t1_exam": 29.5,
      "annual_total": 98,
      "t2_exam": 30,
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t1_m1": 19.5,
      "t1_sep": 204,
      "t1_sep_pct": 97.14,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "sep": 49,
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أسماء"
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 28
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 27,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 27
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "1642",
    "password": "1642",
    "_migratedAt": "2026-10-10T18:37:59.557Z",
    "_updatedAt": "2026-10-09T18:05:38.768Z",
    "_lastModified": 1791657479557
  },
  {
    "id": "SK-G4-LN-010",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "ميرا محمد أطاها",
    "nameEn": "Mira Mohamed Ataha",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_exam": 29.5,
      "t1_sep": 204,
      "t2_exam": 30,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_total": 98,
      "t1_m1": 19.5,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_total": 98,
      "t1_sep_pct": 97.14,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "sep": 50,
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء"
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 25
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 49
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "3555",
    "password": "3555",
    "_migratedAt": "2026-10-10T18:37:59.557Z",
    "_lastModified": 1791657479557,
    "_updatedAt": "2026-10-09T18:05:38.795Z"
  },
  {
    "id": "SK-G4-LN-011",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "فيروز هشام محمد",
    "nameEn": "Fayrouz Hesham Mohamed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep": 209,
      "annual_total": 98,
      "t1_sep_pct": 99.52,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "sep": 49
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8607",
    "password": "8607",
    "photo": "data:image/jpeg;base64,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",
    "phone": "0536778275",
    "whatsapp": "01101298294",
    "_migratedAt": "2026-10-10T18:37:59.558Z",
    "_updatedAt": "2026-10-10T05:49:47.812Z",
    "notes": "",
    "parentUpdatedAt": "2026-10-09T18:51:40.023Z",
    "parentWhatsApp": "01101298294",
    "parentEmail": "nabila.fakhry@gmail.com",
    "email": "nabila.fakhry@gmail.com",
    "parentPhone": "0536778275",
    "parentName": "هشام محمد عبد الفضيل",
    "_lastModified": 1791657479558,
    "parentUpdated": true
  },
  {
    "id": "SK-G4-LN-012",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "لجين وليد محمد",
    "nameEn": "Lojain Walid Mohamed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 210,
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_total": 98,
      "annual_total": 98,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_total": 98,
      "t1_exam": 29.5,
      "t1_m1": 19.5,
      "t2_exam": 30,
      "t1_sep_pct": 100,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50,
        "teacherNameAr": "مس / أسماء"
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9667",
    "password": "9667",
    "_migratedAt": "2026-10-10T18:37:59.558Z",
    "_lastModified": 1791657479558,
    "_updatedAt": "2026-10-09T18:05:38.838Z"
  },
  {
    "id": "SK-G4-LN-013",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "جنة عمرو أبو المكارم",
    "nameEn": "Janna Amr Abo El-Makarim",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_tasks": null,
      "t1_tasks": null,
      "annual_total": 98,
      "t2_total": 98,
      "t1_sep": 154,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t1_sep_pct": 96.25,
      "t1_sep_max": 160
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "sep": 0,
        "teacherNameAr": "مس / أسماء",
        "scores": {}
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 25
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-12T00:25:00.000Z"
          }
        },
        "sep": 49.5
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9120",
    "password": "9120",
    "_migratedAt": "2026-10-10T18:37:59.558Z",
    "_lastModified": 1791657479558,
    "_updatedAt": "2026-10-09T18:05:38.850Z"
  },
  {
    "grade": 1,
    "track": "languages",
    "nameAr": "عبد الحميد محمد الجزار",
    "nameEn": "Abdel Hamid Mohamed El-Gazzar",
    "phone": "",
    "gender": "male",
    "notes": "",
    "id": "SK-G1-EN-5941",
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_total": 100,
      "t1_total": 100,
      "t1_exam": 30,
      "t2_exam": 30,
      "t1_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "annual_total": 100,
      "t1_sep": 96,
      "t1_sep_pct": 96,
      "t1_sep_max": 100
    },
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "subjectScores": {
      "arabic": {
        "teacherNameAr": "مس / مروة",
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic"
      },
      "math": {
        "m1": 30,
        "scores": {
          "t1_m2": {
            "maxScore": 20,
            "isRecorded": true,
            "score": 0,
            "updatedAt": "2026-10-04T19:13:45.272Z"
          },
          "t1_exam": {
            "maxScore": 30,
            "score": 0,
            "updatedAt": "2026-10-04T19:13:45.272Z",
            "isRecorded": true
          },
          "t1_m1": {
            "score": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-04T19:13:45.272Z",
            "maxScore": 30
          },
          "t1_tasks": {
            "score": 0,
            "updatedAt": "2026-10-04T19:13:45.272Z",
            "isRecorded": true,
            "maxScore": 20
          },
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:37:09.258Z",
            "score": 27
          }
        },
        "subjectId": "math",
        "sep": 27
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 24,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 24,
        "teacherNameAr": "مس / يارا"
      },
      "english_ol": {
        "teacherNameAr": "مس / يارا",
        "sep": 15,
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol"
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "sampleScores": {},
    "pin": "6997",
    "password": "6997",
    "_updatedAt": "2026-10-10T18:37:58.947Z",
    "_lastModified": 1791657479558,
    "gradeNameEn": "Grade 1",
    "_migratedAt": "2026-10-10T18:37:59.558Z",
    "gradeNameAr": "الصف 1",
    "subjectScores.english_al.scores.t1_sep": 24,
    "subjectScores.english_ol.scores.t1_sep": 15
  },
  {
    "grade": 2,
    "track": "arabic",
    "nameAr": "فريد أحمد حمدي",
    "nameEn": "Farid Ahmed Hamdy",
    "phone": "",
    "gender": "male",
    "notes": "",
    "id": "SK-G2-AR-6576",
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 100,
      "t1_sep": 75,
      "t1_exam": 30,
      "t2_exam": 30,
      "t1_total": 100,
      "t2_total": 100,
      "t1_tasks": null,
      "t1_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_tasks": null,
      "t1_sep_pct": 93.75,
      "t1_sep_max": 80
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "sep": 28,
        "m1": 20,
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:41:58.697Z",
            "score": 27
          }
        },
        "sep": 27
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "sampleScores": {},
    "pin": "4374",
    "password": "4374",
    "gradeNameEn": "Grade 2",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "gradeNameAr": "الصف 2",
    "_migratedAt": "2026-10-10T18:37:59.558Z",
    "_updatedAt": "2026-10-09T18:04:51.645Z",
    "_lastModified": 1791657479558
  },
  {
    "grade": 2,
    "track": "arabic",
    "nameAr": "ريتال محمد مجدي",
    "nameEn": "Retal Mohamed Magdy",
    "phone": "",
    "gender": "female",
    "notes": "",
    "id": "SK-G2-AR-6446",
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep": 47,
      "t1_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_total": 100,
      "t2_exam": 30,
      "t1_exam": 30,
      "t2_total": 100,
      "annual_total": 100,
      "t1_sep_pct": 94,
      "t1_sep_max": 50
    },
    "subjectScores": {
      "arabic": {
        "m1": 20,
        "sep": 0,
        "scores": {},
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:41:52.639Z",
            "score": 27
          }
        },
        "sep": 27
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "sampleScores": {},
    "pin": "5361",
    "password": "5361",
    "_updatedAt": "2026-10-09T18:04:51.656Z",
    "_migratedAt": "2026-10-10T18:37:59.558Z",
    "_lastModified": 1791657479558,
    "gradeNameAr": "الصف 2",
    "trackNameAr": "عربي (حساب)",
    "gradeNameEn": "Grade 2",
    "trackNameEn": "Arabic Track",
    "enrollmentStatus": "suspended"
  },
  {
    "grade": 3,
    "track": "arabic",
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "فريدة محمد النجار",
    "nameEn": "Farida Mohamed El-Naggar",
    "gender": "female",
    "phone": "",
    "notes": "",
    "id": "SK-G3-AR-3636",
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 90,
      "t1_m1": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_exam": 30,
      "t1_exam": 30,
      "t1_tasks": null,
      "t2_tasks": null,
      "annual_total": 100,
      "t1_total": 100,
      "t2_total": 100,
      "t1_sep_pct": 100,
      "t1_sep_max": 90
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "sep": 30,
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:24:18.015Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "sampleScores": {},
    "pin": "9055",
    "password": "9055",
    "_lastModified": 1791657479558,
    "_migratedAt": "2026-10-10T18:37:59.558Z",
    "_updatedAt": "2026-10-09T18:05:28.274Z"
  },
  {
    "id": "SK-G5-AR-001",
    "grade": 5,
    "gradeNameAr": "الصف 5",
    "gradeNameEn": "Grade 5",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "كيان محمود منصور",
    "nameEn": "Kayan Mahmoud Mansour",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "annual_total": 98,
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_sep": 173,
      "t1_sep_pct": 96.11,
      "t1_sep_max": 180
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29,
        "teacherNameAr": "مس / أميرة"
      },
      "arabic": {
        "sep": 47,
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 47,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "science": {
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50,
        "subjectId": "science"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T16:54:35.665Z",
            "score": 28
          }
        },
        "sep": 28
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8745",
    "password": "8745",
    "subjectScores.english_ol.scores.t1_sep": 29,
    "_migratedAt": "2026-10-10T18:37:59.559Z",
    "_lastModified": 1791657479559,
    "_updatedAt": "2026-10-10T17:08:51.599Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G5-AR-002",
    "grade": 5,
    "gradeNameAr": "الصف 5",
    "gradeNameEn": "Grade 5",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "جويرية أحمد عطيه",
    "nameEn": "Jowairia Ahmed Attia",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 178,
      "t1_total": 98,
      "t2_total": 98,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_m1": 19.5,
      "annual_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_sep_pct": 98.89,
      "t1_sep_max": 180
    },
    "subjectScores": {
      "english_ol": {
        "teacherNameAr": "مس / أميرة",
        "subjectId": "english_ol",
        "sep": 29,
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "science": {
        "subjectId": "science",
        "sep": 50,
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 49
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T16:32:15.350Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9476",
    "password": "9476",
    "_updatedAt": "2026-10-10T17:08:56.097Z",
    "_migratedAt": "2026-10-10T18:37:59.559Z",
    "_lastModified": 1791657479559,
    "subjectScores.english_ol.scores.t1_sep": 29,
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G5-AR-003",
    "grade": 5,
    "gradeNameAr": "الصف 5",
    "gradeNameEn": "Grade 5",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "جودى مهند خضرو",
    "nameEn": "Judi Mohannad Khidro",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 30,
      "t2_exam": 30,
      "t2_tasks": null,
      "t1_tasks": null,
      "t2_total": 100,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_m1": 20,
      "t1_total": 100,
      "annual_total": 100,
      "t1_sep": 30,
      "t1_sep_pct": 100,
      "t1_sep_max": 30
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "sep": 0,
        "scores": {},
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T16:36:28.220Z",
            "score": 30
          }
        },
        "sep": 30
      }
    },
    "pin": "9245",
    "password": "9245",
    "_migratedAt": "2026-10-10T18:37:59.559Z",
    "_updatedAt": "2026-10-09T18:06:03.851Z",
    "_lastModified": 1791657479559
  },
  {
    "id": "SK-G5-AR-004",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "ملك محمد",
    "nameEn": "Malak Mohamed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_sep": null,
      "t2_exam": 30,
      "t1_exam": 30,
      "t2_tasks": null,
      "t1_tasks": null,
      "t2_total": 100,
      "annual_total": 100,
      "t1_total": 100
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "sep": 0,
        "scores": {}
      }
    },
    "pin": "8214",
    "password": "8214",
    "_updatedAt": "2026-10-09T18:06:03.864Z",
    "_lastModified": 1791657479559,
    "_migratedAt": "2026-10-10T18:37:59.559Z"
  },
  {
    "id": "SK-G5-AR-005",
    "grade": 5,
    "gradeNameAr": "الصف 5",
    "gradeNameEn": "Grade 5",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "ليندا هشام أحمد",
    "nameEn": "Linda Hesham Ahmed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 29.5,
      "t2_exam": 30,
      "annual_total": 98,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "t2_tasks": null,
      "t1_sep": 180,
      "t1_tasks": null,
      "t2_total": 98,
      "t1_total": 98,
      "t1_sep_pct": 100,
      "t1_sep_max": 180
    },
    "subjectScores": {
      "english_ol": {
        "sep": 30,
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "science": {
        "teacherNameAr": "مس / سمر",
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "sep": 50,
        "teacherNameAr": "مس / أسماء"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T16:51:01.822Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "1650",
    "password": "1650",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_updatedAt": "2026-10-10T17:08:43.031Z",
    "_migratedAt": "2026-10-10T18:37:59.559Z",
    "_lastModified": 1791657479559,
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G5-AR-006",
    "grade": 5,
    "gradeNameAr": "الصف 5",
    "gradeNameEn": "Grade 5",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "رفيدة خالد رجب",
    "nameEn": "Rofayda Khaled Ragab",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 179,
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_tasks": null,
      "t1_tasks": null,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_total": 98,
      "annual_total": 98,
      "t1_sep_pct": 99.44,
      "t1_sep_max": 180
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أميرة",
        "sep": 30,
        "subjectId": "english_ol"
      },
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "sep": 49
      },
      "science": {
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50,
        "teacherNameAr": "مس / سمر"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T16:51:05.553Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "5852",
    "password": "5852",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_migratedAt": "2026-10-10T18:37:59.559Z",
    "_lastModified": 1791657479559,
    "_updatedAt": "2026-10-10T17:08:10.762Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G5-AR-007",
    "grade": 5,
    "gradeNameAr": "الصف 5",
    "gradeNameEn": "Grade 5",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "زياد مصطفى فرج",
    "nameEn": "Ziad Mostafa Farag",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_total": 98,
      "t2_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep": 177,
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "annual_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_sep_pct": 98.33,
      "t1_sep_max": 180
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء",
        "sep": 48,
        "scores": {
          "t1_sep": {
            "score": 48,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "science": {
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50,
        "subjectId": "science"
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "sep": 29,
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T16:54:17.098Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "6288",
    "password": "6288",
    "_migratedAt": "2026-10-10T18:37:59.559Z",
    "_lastModified": 1791657479559,
    "subjectScores.english_ol.scores.t1_sep": 29,
    "_updatedAt": "2026-10-10T17:08:14.597Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G5-AR-008",
    "grade": 5,
    "gradeNameAr": "الصف 5",
    "gradeNameEn": "Grade 5",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "عبد الله محمود الصياد",
    "nameEn": "Abdullah Mahmoud El-Sayad",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_tasks": null,
      "t1_exam": 29.5,
      "t2_tasks": null,
      "t2_exam": 30,
      "t2_total": 98,
      "t1_m2": 20,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_sep": 178,
      "t1_m1": 19.5,
      "t1_sep_pct": 98.89,
      "t1_sep_max": 180
    },
    "subjectScores": {
      "english_ol": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30,
        "teacherNameAr": "مس / أميرة",
        "subjectId": "english_ol"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "sep": 49,
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T16:54:26.635Z",
            "score": 29
          }
        },
        "sep": 29
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8598",
    "password": "8598",
    "_migratedAt": "2026-10-10T18:37:59.559Z",
    "_updatedAt": "2026-10-10T12:00:00.429Z",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_lastModified": 1791657479559
  },
  {
    "id": "SK-G5-AR-009",
    "grade": 5,
    "gradeNameAr": "الصف 5",
    "gradeNameEn": "Grade 5",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "سامح طه النقاش",
    "nameEn": "Sameh Taha El-Naqqash",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_total": 98,
      "annual_total": 98,
      "t2_total": 98,
      "t1_sep": 170,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep_pct": 94.44,
      "t1_sep_max": 180
    },
    "subjectScores": {
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 47,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 47,
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "scores": {
          "t1_sep": {
            "score": 27,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أميرة",
        "sep": 27,
        "subjectId": "english_ol"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T16:54:07.517Z",
            "score": 26
          }
        },
        "sep": 26
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-12T00:25:00.000Z"
          }
        },
        "sep": 19.5
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "2711",
    "password": "2711",
    "_updatedAt": "2026-10-10T17:08:27.129Z",
    "subjectScores.english_ol.scores.t1_sep": 27,
    "_migratedAt": "2026-10-10T18:37:59.560Z",
    "_lastModified": 1791657479560,
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G5-AR-010",
    "grade": 5,
    "gradeNameAr": "الصف 5",
    "gradeNameEn": "Grade 5",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "مصطفى أحمد مصطفى",
    "nameEn": "Mostafa Ahmed Mostafa",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_total": 98,
      "t1_total": 98,
      "t1_sep": 180,
      "t1_m1": 19.5,
      "t1_tasks": null,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t2_tasks": null,
      "annual_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_sep_pct": 100,
      "t1_sep_max": 180
    },
    "subjectScores": {
      "arabic": {
        "sep": 50,
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic"
      },
      "science": {
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "science",
        "sep": 50
      },
      "english_ol": {
        "subjectId": "english_ol",
        "sep": 30,
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T16:51:44.955Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8283",
    "password": "8283",
    "_updatedAt": "2026-10-10T17:08:21.778Z",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_lastModified": 1791657479560,
    "_migratedAt": "2026-10-10T18:37:59.560Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G5-LN-001",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "لينا أحمد شوقى",
    "nameEn": "Lina Ahmed Shawky",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_total": 98,
      "t1_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_sep": 207,
      "annual_total": 98,
      "t1_sep_pct": 98.57,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "sep": 48,
        "scores": {
          "t1_sep": {
            "score": 48,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أسماء"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "science": {
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50,
        "subjectId": "science"
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "english_al": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة",
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9540",
    "password": "9540",
    "_lastModified": 1791657479560,
    "subjectScores.english_al.scores.t1_sep": 30,
    "_updatedAt": "2026-10-10T17:08:33.163Z",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_migratedAt": "2026-10-10T18:37:59.560Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G5-LN-002",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "عائشة محمد علاء الدين",
    "nameEn": "Aisha Mohamed Alaa El-Din",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 29.5,
      "t2_exam": 30,
      "annual_total": 98,
      "t2_total": 98,
      "t1_total": 98,
      "t1_tasks": null,
      "t1_m1": 19.5,
      "t2_tasks": null,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_sep": 206,
      "t1_sep_pct": 98.1,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 48,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 48,
        "teacherNameAr": "مس / أسماء"
      },
      "english_al": {
        "teacherNameAr": "مس / أميرة",
        "sep": 30,
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "english_ol": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أميرة",
        "sep": 30,
        "subjectId": "english_ol"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-12T00:25:00.000Z"
          }
        },
        "sep": 49.5
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "5340",
    "password": "5340",
    "_lastModified": 1791657479560,
    "subjectScores.english_al.scores.t1_sep": 30,
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_migratedAt": "2026-10-10T18:37:59.560Z",
    "_updatedAt": "2026-10-10T12:35:26.398Z"
  },
  {
    "id": "SK-G5-LN-003",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "رودينة عبد الله السيد",
    "nameEn": "Rodaina Abdullah Sayed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t2_tasks": null,
      "t1_tasks": null,
      "t2_total": 98,
      "annual_total": 98,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_m1": 19.5,
      "t1_total": 98,
      "t1_sep": 208,
      "t1_sep_pct": 99.05,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "sep": 48,
        "scores": {
          "t1_sep": {
            "score": 48,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_al": {
        "teacherNameAr": "مس / أميرة",
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_al"
      },
      "english_ol": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol",
        "sep": 30,
        "teacherNameAr": "مس / أميرة"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "8520",
    "password": "8520",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_lastModified": 1791657479560,
    "_updatedAt": "2026-10-10T12:35:30.648Z",
    "_migratedAt": "2026-10-10T18:37:59.560Z",
    "subjectScores.english_al.scores.t1_sep": 30
  },
  {
    "id": "SK-G5-LN-004",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "رقية رضا عبد المقصود",
    "nameEn": "Roqaya Reda Abdel Maqsoud",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t2_total": 98,
      "t1_sep": 209,
      "t1_total": 98,
      "annual_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep_pct": 99.52,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "sep": 49
      },
      "english_al": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30,
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "sep": 30,
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "4099",
    "password": "4099",
    "_migratedAt": "2026-10-10T18:37:59.560Z",
    "_lastModified": 1791657479560,
    "subjectScores.english_al.scores.t1_sep": 30,
    "_updatedAt": "2026-10-10T12:35:36.270Z",
    "subjectScores.english_ol.scores.t1_sep": 30
  },
  {
    "id": "SK-G5-LN-005",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "أيسل محمد السعيد",
    "nameEn": "Aysel Mohamed El-Saeed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_total": 98,
      "t1_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_tasks": null,
      "t2_tasks": null,
      "annual_total": 98,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_m1": 19.5,
      "t1_sep": 210,
      "t1_sep_pct": 100,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "english_al": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30,
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة"
      },
      "english_ol": {
        "sep": 30,
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أسماء",
        "sep": 50,
        "subjectId": "arabic"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8075",
    "password": "8075",
    "_lastModified": 1791657479560,
    "subjectScores.english_al.scores.t1_sep": 30,
    "_migratedAt": "2026-10-10T18:37:59.560Z",
    "_updatedAt": "2026-10-10T12:35:40.558Z",
    "subjectScores.english_ol.scores.t1_sep": 30
  },
  {
    "id": "SK-G5-LN-006",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مليكة محمد نبيل نوار",
    "nameEn": "Malika Mohamed Nabil Nawar",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_total": 98,
      "annual_total": 98,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep": 210,
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_sep_pct": 100,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "sep": 30,
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أميرة"
      },
      "english_al": {
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة"
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8950",
    "password": "8950",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "subjectScores.english_al.scores.t1_sep": 30,
    "_updatedAt": "2026-10-10T12:35:44.263Z",
    "_lastModified": 1791657479561,
    "_migratedAt": "2026-10-10T18:37:59.561Z"
  },
  {
    "id": "SK-G5-LN-007",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مريم حمدى أحمد",
    "nameEn": "Mariam Hamdy Ahmed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_tasks": null,
      "t2_exam": 30,
      "t2_tasks": null,
      "t1_exam": 29.5,
      "t2_total": 98,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t1_m1": 19.5,
      "t1_sep": 208,
      "t1_sep_pct": 99.05,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "english_ol": {
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أميرة",
        "subjectId": "english_ol"
      },
      "english_al": {
        "teacherNameAr": "مس / أميرة",
        "sep": 30,
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "sep": 49,
        "teacherNameAr": "مس / أسماء"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-12T00:25:00.000Z"
          }
        },
        "sep": 19.5
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "2153",
    "password": "2153",
    "subjectScores.english_al.scores.t1_sep": 30,
    "_updatedAt": "2026-10-10T12:35:47.676Z",
    "_lastModified": 1791657479561,
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_migratedAt": "2026-10-10T18:37:59.561Z"
  },
  {
    "id": "SK-G5-LN-008",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "محمد عمرو محمد",
    "nameEn": "Mohamed Amr Mohamed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_sep": 205,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep_pct": 97.62,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "arabic": {
        "sep": 48,
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 48,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "english_ol": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30,
        "teacherNameAr": "مس / أميرة",
        "subjectId": "english_ol"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_al": {
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_al",
        "sep": 29
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 28
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-12T00:25:00.000Z"
          }
        },
        "sep": 19.5
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "5465",
    "password": "5465",
    "subjectScores.english_al.scores.t1_sep": 29,
    "_lastModified": 1791657479561,
    "_updatedAt": "2026-10-10T12:35:53.908Z",
    "_migratedAt": "2026-10-10T18:37:59.561Z",
    "subjectScores.english_ol.scores.t1_sep": 30
  },
  {
    "id": "SK-G5-LN-009",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "محمد أدهم حربي",
    "nameEn": "Mohamed Adham Harby",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 207,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_m1": 19.5,
      "t1_total": 98,
      "t2_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "annual_total": 98,
      "t1_sep_pct": 98.57,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "sep": 30,
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة",
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 48,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 48,
        "teacherNameAr": "مس / أسماء"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "7164",
    "password": "7164",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_migratedAt": "2026-10-10T18:37:59.561Z",
    "_lastModified": 1791657479561,
    "_updatedAt": "2026-10-10T12:35:57.357Z",
    "subjectScores.english_al.scores.t1_sep": 30
  },
  {
    "id": "SK-G6-AR-001",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "ياسين إسلام حمد",
    "nameEn": "Yaseen Islam Hamad",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_total": 98,
      "annual_total": 98,
      "t2_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m1": 19.5,
      "t1_sep": 190,
      "t1_sep_pct": 100,
      "t1_sep_max": 190
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "science": {
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50,
        "teacherNameAr": "مس / سمر"
      },
      "english_ol": {
        "subjectId": "english_ol",
        "sep": 30,
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "2683",
    "password": "2683",
    "subjectScores.science.scores.t1_sep": 50,
    "_updatedAt": "2026-10-10T17:03:11.418Z",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_lastModified": 1791657479561,
    "_migratedAt": "2026-10-10T18:37:59.561Z"
  },
  {
    "id": "SK-G6-AR-002",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "لينا هشام أحمد",
    "nameEn": "Lina Hesham Ahmed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_total": 100,
      "t1_total": 100,
      "annual_total": 100,
      "t2_exam": 30,
      "t1_m1": 20,
      "t1_exam": 30,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_sep": 189,
      "t1_sep_pct": 99.47,
      "t1_sep_max": 190
    },
    "subjectScores": {
      "science": {
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50,
        "teacherNameAr": "مس / سمر"
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 49
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "4288",
    "password": "4288",
    "_migratedAt": "2026-10-10T18:37:59.561Z",
    "_lastModified": 1791657479561,
    "subjectScores.science.scores.t1_sep": 50,
    "_updatedAt": "2026-10-10T17:03:13.176Z"
  },
  {
    "id": "SK-G6-AR-003",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "باسم حسن العمري",
    "nameEn": "Bassem Hassan El-Omari",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep": 189,
      "t1_sep_pct": 99.47,
      "t1_sep_max": 190
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "sep": 29,
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أميرة",
        "subjectId": "english_ol"
      },
      "science": {
        "subjectId": "science",
        "sep": 50,
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / سمر"
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "7838",
    "password": "7838",
    "_updatedAt": "2026-10-10T17:03:14.911Z",
    "subjectScores.english_ol.scores.t1_sep": 29,
    "_migratedAt": "2026-10-10T18:37:59.561Z",
    "_lastModified": 1791657479561,
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G6-AR-004",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "أسيل محمد أحمد",
    "nameEn": "Aseel Mohamed Ahmed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "annual_total": 98,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep": 188,
      "t1_sep_pct": 98.95,
      "t1_sep_max": 190
    },
    "subjectScores": {
      "science": {
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / سمر",
        "sep": 50,
        "subjectId": "science"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "sep": 28,
        "teacherNameAr": "مس / أميرة",
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-12T00:25:00.000Z"
          }
        },
        "sep": 19.5
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "3497",
    "password": "3497",
    "_updatedAt": "2026-10-10T17:03:17.056Z",
    "_lastModified": 1791657479562,
    "subjectScores.english_ol.scores.t1_sep": 28,
    "_migratedAt": "2026-10-10T18:37:59.562Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G6-AR-005",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "هدى محمد مجدى",
    "nameEn": "Hoda Mohamed Magdy",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_m2": 20,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t1_sep": 84,
      "t1_sep_pct": 93.33,
      "t1_sep_max": 90
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 48,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 48
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 36,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 36
      }
    },
    "pin": "8462",
    "password": "8462",
    "_migratedAt": "2026-10-10T18:37:59.562Z",
    "_lastModified": 1791657479562
  },
  {
    "id": "SK-G6-LN-001",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "محمد السيد سمير",
    "nameEn": "Mohamed Elsayed Samir",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_total": 98,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "annual_total": 98,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_m1": 19.5,
      "t1_sep": 220,
      "t1_sep_pct": 100,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "science": {
        "sep": 50,
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / سمر"
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "1329",
    "password": "1329",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_migratedAt": "2026-10-10T18:37:59.562Z",
    "_lastModified": 1791657479562,
    "_updatedAt": "2026-10-10T17:03:25.071Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G6-LN-002",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "سيف جمال إسماعيل",
    "nameEn": "Seif Gamal Ismail",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_total": 98,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_total": 98,
      "t1_m1": 19.5,
      "t2_tasks": null,
      "t1_tasks": null,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "annual_total": 98,
      "t1_sep": 220,
      "t1_sep_pct": 100,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "science": {
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "science",
        "sep": 50,
        "teacherNameAr": "مس / سمر"
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أميرة",
        "sep": 30
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "2610",
    "password": "2610",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_migratedAt": "2026-10-10T18:37:59.562Z",
    "_updatedAt": "2026-10-10T17:03:26.790Z",
    "_lastModified": 1791657479562,
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G6-LN-003",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مالك محمود عبد الحميد",
    "nameEn": "Malek Mahmoud Abdel Hamid",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_exam": 29.5,
      "t1_m1": 19.5,
      "t2_exam": 30,
      "t1_total": 98,
      "t2_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep": 220,
      "t1_sep_pct": 100,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "science": {
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50,
        "teacherNameAr": "مس / سمر"
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "1103",
    "password": "1103",
    "_lastModified": 1791657479562,
    "_migratedAt": "2026-10-10T18:37:59.562Z",
    "subjectScores.science.scores.t1_sep": 50,
    "_updatedAt": "2026-10-10T17:03:28.519Z"
  },
  {
    "id": "SK-G6-LN-004",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "محمد مصطفى وحيد",
    "nameEn": "Mohamed Mostafa Waheed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_total": 98,
      "t1_total": 98,
      "t1_exam": 29.5,
      "annual_total": 98,
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_exam": 30,
      "t1_sep": 220,
      "t1_sep_pct": 100,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "english_ol": {
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أميرة",
        "subjectId": "english_ol"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "science": {
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "science",
        "sep": 50
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8492",
    "password": "8492",
    "_updatedAt": "2026-10-10T17:03:48.464Z",
    "_lastModified": 1791657479562,
    "_migratedAt": "2026-10-10T18:37:59.562Z",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G6-LN-005",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "أروى محمد أحمد",
    "nameEn": "Arwa Mohamed Ahmed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_total": 98,
      "annual_total": 98,
      "t2_total": 98,
      "t2_tasks": null,
      "t1_m1": 19.5,
      "t1_exam": 29.5,
      "t1_tasks": null,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_exam": 30,
      "t1_sep": 214,
      "t1_sep_pct": 97.27,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "science": {
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 49,
        "teacherNameAr": "مس / سمر"
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 36,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 36
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "2460",
    "password": "2460",
    "_migratedAt": "2026-10-10T18:37:59.562Z",
    "_lastModified": 1791657479562,
    "_updatedAt": "2026-10-10T17:03:54.141Z",
    "subjectScores.science.scores.t1_sep": 49
  },
  {
    "id": "SK-G6-LN-006",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ليليا مازن شلار",
    "nameEn": "Lilia Mazen Shollar",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_total": 98,
      "t2_total": 98,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_tasks": null,
      "t1_m1": 19.5,
      "t2_tasks": null,
      "t1_sep": 220,
      "t1_sep_pct": 100,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "science": {
        "sep": 50,
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "science"
      },
      "english_ol": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol",
        "sep": 30,
        "teacherNameAr": "مس / أميرة"
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "4357",
    "password": "4357",
    "_migratedAt": "2026-10-10T18:37:59.562Z",
    "_updatedAt": "2026-10-10T17:03:55.941Z",
    "_lastModified": 1791657479562,
    "subjectScores.english_ol.scores.t1_sep": 30,
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G6-LN-007",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ماسة محمد أنور",
    "nameEn": "Massa Mohamed Anwar",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_total": 98,
      "t2_total": 98,
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t1_exam": 29.5,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "annual_total": 98,
      "t1_sep": 220,
      "t1_sep_pct": 100,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "science": {
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50,
        "teacherNameAr": "مس / سمر"
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "5160",
    "password": "5160",
    "_lastModified": 1791657479563,
    "_migratedAt": "2026-10-10T18:37:59.563Z",
    "subjectScores.science.scores.t1_sep": 50,
    "_updatedAt": "2026-10-10T17:03:57.860Z"
  },
  {
    "id": "SK-G6-LN-008",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ليان السيد على",
    "nameEn": "Layan Elsayed Ali",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t2_tasks": null,
      "t1_tasks": null,
      "t2_total": 98,
      "t1_total": 98,
      "annual_total": 98,
      "t1_sep": 220,
      "t1_sep_pct": 100,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "science": {
        "sep": 50,
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / سمر"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "3079",
    "password": "3079",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_updatedAt": "2026-10-10T17:04:00.991Z",
    "_migratedAt": "2026-10-10T18:37:59.563Z",
    "_lastModified": 1791657479563,
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G6-LN-009",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "لورين وليد محمد",
    "nameEn": "Loreen Walid Mohamed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t2_exam": 30,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_exam": 29.5,
      "annual_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t2_total": 98,
      "t1_total": 98,
      "t1_sep": 217,
      "t1_sep_pct": 98.64,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "science": {
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "science",
        "sep": 50,
        "teacherNameAr": "مس / سمر"
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أميرة",
        "sep": 30
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 37,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 37
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "1831",
    "password": "1831",
    "_lastModified": 1791657479563,
    "_migratedAt": "2026-10-10T18:37:59.563Z",
    "_updatedAt": "2026-10-10T17:04:02.716Z",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G6-LN-010",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "لارين أحمد الشوني",
    "nameEn": "Lareen Ahmed El-Shouny",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "t2_total": 98,
      "t1_exam": 29.5,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t1_total": 98,
      "t1_m1": 19.5,
      "annual_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep": 213,
      "t1_sep_pct": 96.82,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "science": {
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50,
        "teacherNameAr": "مس / سمر"
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 49
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 35,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 35
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "5499",
    "password": "5499",
    "_lastModified": 1791657479563,
    "_migratedAt": "2026-10-10T18:37:59.563Z",
    "_updatedAt": "2026-10-10T17:04:06.409Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G6-LN-011",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "أفنان أحمد",
    "nameEn": "Afnan Ahmed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_total": 98,
      "annual_total": 98,
      "t2_total": 98,
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_sep": null
    },
    "subjectScores": {},
    "pin": "6953",
    "password": "6953",
    "_migratedAt": "2026-10-10T18:37:59.563Z",
    "_lastModified": 1791657479563
  },
  {
    "id": "SK-G7-AR-001",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "نورسان إسلام محمد",
    "nameEn": "Noursan Islam Mohamed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 29.5,
      "t2_exam": 30,
      "annual_total": 98,
      "t2_total": 98,
      "t1_total": 98,
      "t1_m1": 19.5,
      "t1_tasks": null,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t2_tasks": null,
      "t1_sep": 220,
      "t1_sep_pct": 104.76,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة",
        "sep": 30,
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 20,
            "updatedAt": "2026-10-10T12:10:18.125Z",
            "score": 30
          }
        }
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "sep": 50,
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "teacherNameAr": "مس / أميرة",
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol"
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "3635",
    "password": "3635",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_migratedAt": "2026-10-10T18:37:59.563Z",
    "subjectScores.english_al.scores.t1_sep": null,
    "_lastModified": 1791657479563,
    "_updatedAt": "2026-10-10T17:04:30.806Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G7-AR-002",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "ليان محمود رزق",
    "nameEn": "Layan Mahmoud Rezk",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_total": 98,
      "t1_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_m1": 19.5,
      "annual_total": 98,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_sep": 220,
      "t1_sep_pct": 104.76,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "english_ol": {
        "sep": 30,
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol"
      },
      "english_al": {
        "sep": 30,
        "teacherNameAr": "مس / أميرة",
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "score": 30,
            "maxScore": 20,
            "updatedAt": "2026-10-10T12:10:18.125Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "science": {
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "sep": 50
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "1184",
    "password": "1184",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_updatedAt": "2026-10-10T17:04:32.534Z",
    "_lastModified": 1791657479563,
    "_migratedAt": "2026-10-10T18:37:59.563Z",
    "subjectScores.english_al.scores.t1_sep": null,
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G7-AR-003",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "فريدة شريف رجب",
    "nameEn": "Farida Sherif Ragab",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t1_total": 98,
      "t1_exam": 29.5,
      "t2_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "annual_total": 98,
      "t1_sep": 213,
      "t1_sep_pct": 101.43,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_al": {
        "sep": 30,
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "updatedAt": "2026-10-10T12:10:18.125Z",
            "score": 30,
            "isRecorded": true,
            "maxScore": 20
          }
        }
      },
      "english_ol": {
        "sep": 30,
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol"
      },
      "science": {
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "sep": 50
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 35,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 35
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 18,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 18
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "6235",
    "password": "6235",
    "_updatedAt": "2026-10-10T17:04:34.274Z",
    "_lastModified": 1791657479563,
    "subjectScores.english_al.scores.t1_sep": null,
    "_migratedAt": "2026-10-10T18:37:59.563Z",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G7-AR-004",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "سارة أحمد مصطفى",
    "nameEn": "Sara Ahmed Mostafa",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t1_exam": 29.5,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_total": 98,
      "t2_tasks": null,
      "annual_total": 98,
      "t1_tasks": null,
      "t1_sep": 219,
      "t1_sep_pct": 104.29,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أميرة",
        "subjectId": "english_ol",
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "sep": 50,
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / سمر"
      },
      "english_al": {
        "sep": 30,
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:10:18.125Z",
            "maxScore": 20,
            "score": 30
          }
        },
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة"
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 49
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9160",
    "password": "9160",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_lastModified": 1791657479564,
    "_updatedAt": "2026-10-10T17:04:34.971Z",
    "_migratedAt": "2026-10-10T18:37:59.564Z",
    "subjectScores.english_al.scores.t1_sep": null,
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G7-AR-005",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "عمار محمود سعد",
    "nameEn": "Ammar Mahmoud Saad",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t1_tasks": null,
      "t1_exam": 29.5,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_tasks": null,
      "t1_total": 98,
      "t2_total": 98,
      "annual_total": 98,
      "t1_sep": 210,
      "t1_sep_pct": 100,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "english_ol": {
        "teacherNameAr": "مس / أميرة",
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "science": {
        "sep": 50,
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / سمر",
        "subjectId": "science"
      },
      "english_al": {
        "scores": {
          "t1_sep": {
            "maxScore": 20,
            "score": 29,
            "updatedAt": "2026-10-10T12:10:18.125Z",
            "isRecorded": true
          }
        },
        "subjectId": "english_al",
        "sep": 29,
        "teacherNameAr": "مس / أميرة"
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 47,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 47
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 35,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 35
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "3309",
    "password": "3309",
    "subjectScores.english_ol.scores.t1_sep": 29,
    "_updatedAt": "2026-10-10T17:04:37.676Z",
    "_lastModified": 1791657479564,
    "subjectScores.english_al.scores.t1_sep": null,
    "_migratedAt": "2026-10-10T18:37:59.564Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G7-AR-006",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "بلال محمد عادل",
    "nameEn": "Belal Mohamed Adel",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_total": 98,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "annual_total": 98,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_sep": 215,
      "t1_sep_pct": 102.38,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "science": {
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50,
        "subjectId": "science"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_al": {
        "scores": {
          "t1_sep": {
            "maxScore": 20,
            "isRecorded": true,
            "score": 30,
            "updatedAt": "2026-10-10T12:10:18.125Z"
          }
        },
        "teacherNameAr": "مس / أميرة",
        "subjectId": "english_al",
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أميرة"
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 35,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 35
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "4752",
    "password": "4752",
    "subjectScores.english_al.scores.t1_sep": null,
    "_lastModified": 1791657479564,
    "_updatedAt": "2026-10-10T17:04:39.428Z",
    "_migratedAt": "2026-10-10T18:37:59.564Z",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G7-LN-001",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مايا هيثم رشوان",
    "nameEn": "Maya Haitham Rashwan",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_m1": 19.5,
      "t2_tasks": null,
      "t1_tasks": null,
      "annual_total": 98,
      "t2_total": 98,
      "t1_total": 98,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_sep": 220,
      "t1_sep_pct": 100,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "science": {
        "sep": 50,
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "teacherNameAr": "مس / أميرة",
        "subjectId": "english_ol",
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "english_al": {
        "subjectId": "english_al",
        "sep": 30,
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-14T15:24:50.198Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8849",
    "password": "8849",
    "_updatedAt": "2026-10-14T15:24:50.198Z",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_lastModified": 1791991490198,
    "subjectScores.english_al.scores.t1_sep": 30,
    "_migratedAt": "2026-10-10T18:37:59.564Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G7-LN-002",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مريم أدهم حربي",
    "nameEn": "Mariam Adham Harby",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_total": 98,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t1_exam": 29.5,
      "annual_total": 98,
      "t1_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep": 220,
      "t1_sep_pct": 100,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "english_al": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_al",
        "sep": 30,
        "teacherNameAr": "مس / أميرة"
      },
      "science": {
        "sep": 50,
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / سمر"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "3249",
    "password": "3249",
    "_migratedAt": "2026-10-10T18:37:59.564Z",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_lastModified": 1791657479564,
    "subjectScores.english_al.scores.t1_sep": 30,
    "_updatedAt": "2026-10-10T17:04:42.931Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G7-LN-003",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "تقى أحمد محمود",
    "nameEn": "Toqa Ahmed Mahmoud",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_tasks": null,
      "t1_m1": 19.5,
      "t1_tasks": null,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_total": 98,
      "annual_total": 98,
      "t1_sep": 220,
      "t1_sep_pct": 100,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "english_al": {
        "sep": 30,
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_al"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "science": {
        "sep": 50,
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "science"
      },
      "english_ol": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "sep": 30
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9369",
    "password": "9369",
    "_lastModified": 1791657479564,
    "_updatedAt": "2026-10-10T17:04:44.677Z",
    "subjectScores.english_al.scores.t1_sep": 30,
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_migratedAt": "2026-10-10T18:37:59.564Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G7-LN-004",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "جودى خالد رجب",
    "nameEn": "Judy Khaled Ragab",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_total": 98,
      "t1_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_exam": 30,
      "annual_total": 98,
      "t1_exam": 29.5,
      "t1_sep": 220,
      "t1_sep_pct": 100,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أميرة",
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أميرة"
      },
      "science": {
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "science",
        "sep": 50
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "5862",
    "password": "5862",
    "_migratedAt": "2026-10-10T18:37:59.564Z",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_lastModified": 1791657479564,
    "subjectScores.english_al.scores.t1_sep": 30,
    "_updatedAt": "2026-10-10T17:04:46.419Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G7-LN-005",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ياسين سليمان محمد",
    "nameEn": "Yaseen Soliman Mohamed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t2_m1": 20,
      "t1_m2": 20,
      "annual_total": 98,
      "t2_m2": 20,
      "t2_total": 98,
      "t1_total": 98,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep": 220,
      "t1_sep_pct": 100,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "english_ol": {
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30,
        "subjectId": "english_ol"
      },
      "english_al": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_al",
        "sep": 30,
        "teacherNameAr": "مس / أميرة"
      },
      "science": {
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / سمر",
        "sep": 50,
        "subjectId": "science"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "2483",
    "password": "2483",
    "_migratedAt": "2026-10-10T18:37:59.564Z",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_updatedAt": "2026-10-10T17:04:47.079Z",
    "subjectScores.english_al.scores.t1_sep": 30,
    "_lastModified": 1791657479564,
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G7-LN-006",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مالك أدهم حربي",
    "nameEn": "Malek Adham Harby",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "t2_total": 98,
      "t1_m1": 19.5,
      "t1_exam": 29.5,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "annual_total": 98,
      "t1_sep": 220,
      "t1_sep_pct": 100,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "sep": 30,
        "teacherNameAr": "مس / أميرة",
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "english_al": {
        "sep": 30,
        "teacherNameAr": "مس / أميرة",
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "science": {
        "teacherNameAr": "مس / سمر",
        "sep": 50,
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "7944",
    "password": "7944",
    "subjectScores.english_al.scores.t1_sep": 30,
    "_migratedAt": "2026-10-10T18:37:59.564Z",
    "_updatedAt": "2026-10-10T17:04:49.455Z",
    "_lastModified": 1791657479564,
    "subjectScores.english_ol.scores.t1_sep": 30,
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G7-LN-007",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "عمر أحمد عصام",
    "nameEn": "Omar Ahmed Essam",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "t1_exam": 29.5,
      "annual_total": 98,
      "t2_tasks": null,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_tasks": null,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t1_total": 98,
      "t1_sep": 213,
      "t1_sep_pct": 96.82,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "science": {
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "science",
        "sep": 50,
        "teacherNameAr": "مس / سمر"
      },
      "english_al": {
        "teacherNameAr": "مس / أميرة",
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "teacherNameAr": "مس / أميرة",
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol"
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 47,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 47
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 36,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 36
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "3723",
    "password": "3723",
    "_migratedAt": "2026-10-10T18:37:59.565Z",
    "_lastModified": 1791657479565,
    "photo": null,
    "subjectScores.english_al.scores.t1_sep": 30,
    "phone": "",
    "_updatedAt": "2026-10-10T17:05:16.302Z",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "parentWhatsApp": "",
    "notes": "",
    "parentPhone": "",
    "parentEmail": "",
    "email": "",
    "whatsapp": "",
    "parentName": "",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G7-LN-008",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "آدم عبد الحميد عيد",
    "nameEn": "Adam Abdel Hamid Eid",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_total": 98,
      "t2_total": 98,
      "annual_total": 98,
      "t1_sep": 220,
      "t1_sep_pct": 100,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "english_ol": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / أميرة",
        "subjectId": "english_ol",
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "english_al": {
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "3317",
    "password": "3317",
    "_lastModified": 1791657479565,
    "subjectScores.english_al.scores.t1_sep": 30,
    "_updatedAt": "2026-10-10T17:05:10.204Z",
    "_migratedAt": "2026-10-10T18:37:59.565Z",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G8-AR-001",
    "grade": 8,
    "gradeNameAr": "الصف الثاني الإعدادي",
    "gradeNameEn": "Grade 8 (Prep 2)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "محمد حسن العمري",
    "nameEn": "Mohamed Hassan El-Omari",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_total": 98,
      "t2_total": 98,
      "t1_tasks": null,
      "annual_total": 98,
      "t2_tasks": null,
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_sep": 190,
      "t1_sep_pct": 100,
      "t1_sep_max": 190
    },
    "subjectScores": {
      "science": {
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50,
        "teacherNameAr": "مس / سمر"
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "6113",
    "password": "6113",
    "_lastModified": 1791657479565,
    "_migratedAt": "2026-10-10T18:37:59.565Z",
    "subjectScores.science.scores.t1_sep": 50,
    "_updatedAt": "2026-10-10T17:05:43.347Z"
  },
  {
    "id": "SK-G8-AR-002",
    "grade": 8,
    "gradeNameAr": "الصف الثاني الإعدادي",
    "gradeNameEn": "Grade 8 (Prep 2)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "سعد محمود منصور",
    "nameEn": "Saad Mahmoud Mansour",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_m1": 19.5,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t2_total": 98,
      "t1_sep": 157,
      "t1_sep_pct": 92.35,
      "t1_sep_max": 170
    },
    "subjectScores": {
      "science": {
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 47,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 47,
        "teacherNameAr": "مس / سمر"
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 49
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 32,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 32
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9418",
    "password": "9418",
    "_lastModified": 1791657479565,
    "_migratedAt": "2026-10-10T18:37:59.565Z",
    "subjectScores.science.scores.t1_sep": 47,
    "_updatedAt": "2026-10-10T17:06:13.888Z"
  },
  {
    "id": "SK-G8-AR-003",
    "grade": 8,
    "gradeNameAr": "الصف الثاني الإعدادي",
    "gradeNameEn": "Grade 8 (Prep 2)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "عبد الغني عصام عبد الله",
    "nameEn": "Abdel Ghany Essam Abdullah",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "annual_total": 98,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep": 181,
      "t1_sep_pct": 95.26,
      "t1_sep_max": 190
    },
    "subjectScores": {
      "science": {
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 49,
        "teacherNameAr": "مس / سمر"
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 49
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 28
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 36,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 36
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "7850",
    "password": "7850",
    "_lastModified": 1791657479565,
    "_migratedAt": "2026-10-10T18:37:59.565Z",
    "_updatedAt": "2026-10-10T17:06:04.796Z",
    "subjectScores.science.scores.t1_sep": 49
  },
  {
    "id": "SK-G8-LN-001",
    "grade": 8,
    "gradeNameAr": "الصف الثاني الإعدادي",
    "gradeNameEn": "Grade 8 (Prep 2)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "بسملة عبد الله سيد",
    "nameEn": "Basmala Abdullah Sayed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_total": 98,
      "t1_total": 98,
      "t1_tasks": null,
      "t1_exam": 29.5,
      "t2_tasks": null,
      "t2_exam": 30,
      "annual_total": 98,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "t1_sep": 220,
      "t1_sep_pct": 100,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "science": {
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50,
        "teacherNameAr": "مس / سمر"
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "7496",
    "password": "7496",
    "_migratedAt": "2026-10-10T18:37:59.565Z",
    "_lastModified": 1791657479565,
    "subjectScores.science.scores.t1_sep": 50,
    "_updatedAt": "2026-10-10T17:05:48.070Z"
  },
  {
    "id": "SK-G8-LN-002",
    "grade": 8,
    "gradeNameAr": "الصف الثاني الإعدادي",
    "gradeNameEn": "Grade 8 (Prep 2)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "وتين أحمد الشوني",
    "nameEn": "Wateen Ahmed El-Shouny",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_total": 98,
      "t1_total": 98,
      "t1_tasks": null,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "t2_tasks": null,
      "annual_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_sep": 199,
      "t1_sep_pct": 99.5,
      "t1_sep_max": 200
    },
    "subjectScores": {
      "science": {
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50,
        "teacherNameAr": "مس / سمر"
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 49
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "3533",
    "password": "3533",
    "_lastModified": 1791657479565,
    "_migratedAt": "2026-10-10T18:37:59.565Z",
    "_updatedAt": "2026-10-10T17:05:49.845Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G9-AR-001",
    "grade": 9,
    "gradeNameAr": "الصف الثالث الإعدادي",
    "gradeNameEn": "Grade 9 (Prep 3)",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "ساره محمد أطاها",
    "nameEn": "Sara Mohamed Ataha",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 29.5,
      "t1_tasks": null,
      "annual_total": 98,
      "t2_exam": 30,
      "t2_tasks": null,
      "t2_total": 98,
      "t1_m1": 19.5,
      "t1_total": 98,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_sep": 183,
      "t1_sep_pct": 96.32,
      "t1_sep_max": 190
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "science": {
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "science",
        "sep": 49
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 35,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 35
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9620",
    "password": "9620",
    "_lastModified": 1791657479565,
    "_updatedAt": "2026-10-10T17:07:27.862Z",
    "_migratedAt": "2026-10-10T18:37:59.565Z",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "subjectScores.science.scores.t1_sep": 49
  },
  {
    "id": "SK-G9-AR-002",
    "grade": 9,
    "gradeNameAr": "الصف الثالث الإعدادي",
    "gradeNameEn": "Grade 9 (Prep 3)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "أيمن عصام القاضي",
    "nameEn": "Ayman Essam El-Kady",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep": 188,
      "t1_sep_pct": 98.95,
      "t1_sep_max": 190
    },
    "subjectScores": {
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "sep": 50,
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "english_ol": {
        "sep": 30,
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 38,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 38
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-12T00:25:00.000Z"
          }
        },
        "sep": 19.5
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "4322",
    "password": "4322",
    "_lastModified": 1791657479566,
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_updatedAt": "2026-10-10T17:07:03.854Z",
    "_migratedAt": "2026-10-10T18:37:59.566Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G9-AR-003",
    "grade": 9,
    "gradeNameAr": "الصف الثالث الإعدادي",
    "gradeNameEn": "Grade 9 (Prep 3)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "محمد عبد الله النقاش",
    "nameEn": "Mohamed Abdullah El-Nakkash",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_exam": 29.5,
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_exam": 30,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t1_total": 98
    },
    "subjectScores": {},
    "pin": "7260",
    "password": "7260",
    "_migratedAt": "2026-10-10T18:37:59.566Z",
    "_lastModified": 1791991490187,
    "status": "interrupted",
    "isCancelled": true,
    "notes": "مشطوب من كشف الدرجات الورقي المعتمد (منسحب / ملغي)",
    "enrollmentStatus": "interrupted",
    "_updatedAt": "2026-10-14T15:24:50.184Z"
  },
  {
    "id": "SK-G9-LN-001",
    "grade": 9,
    "gradeNameAr": "الصف الثالث الإعدادي",
    "gradeNameEn": "Grade 9 (Prep 3)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "أحمد رضا شوشة",
    "nameEn": "Ahmed Reda Shousha",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t2_tasks": null,
      "t1_tasks": null,
      "t2_total": 98,
      "t1_total": 98,
      "annual_total": 98,
      "t1_sep": 218,
      "t1_sep_pct": 99.09,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "science": {
        "teacherNameAr": "مس / سمر",
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_al": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30,
        "subjectId": "english_al",
        "teacherNameAr": "مس / أميرة"
      },
      "english_ol": {
        "teacherNameAr": "مس / أميرة",
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol"
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 38,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 38
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-12T00:25:00.000Z"
          }
        },
        "sep": 19.5
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "1331",
    "password": "1331",
    "_migratedAt": "2026-10-10T18:37:59.566Z",
    "subjectScores.english_ol.scores.t1_sep": 30,
    "subjectScores.english_al.scores.t1_sep": 30,
    "_lastModified": 1791657479566,
    "_updatedAt": "2026-10-10T17:07:02.114Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G9-LN-002",
    "grade": 9,
    "gradeNameAr": "الصف الثالث الإعدادي",
    "gradeNameEn": "Grade 9 (Prep 3)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "جودى هيثم رشوان",
    "nameEn": "Judy Haitham Rashwan",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_total": 98,
      "t1_m1": 19.5,
      "t1_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep": 220,
      "t1_sep_pct": 100,
      "t1_sep_max": 220
    },
    "subjectScores": {
      "english_ol": {
        "sep": 30,
        "subjectId": "english_ol",
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "english_al": {
        "teacherNameAr": "مس / أميرة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30,
        "subjectId": "english_al"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "science": {
        "sep": 50,
        "teacherNameAr": "مس / سمر",
        "subjectId": "science",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 40,
            "maxScore": 40,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 40
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / علا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "2838",
    "password": "2838",
    "_lastModified": 1791657479566,
    "subjectScores.english_al.scores.t1_sep": 30,
    "subjectScores.english_ol.scores.t1_sep": 30,
    "_updatedAt": "2026-10-10T17:06:55.396Z",
    "_migratedAt": "2026-10-10T18:37:59.566Z",
    "subjectScores.science.scores.t1_sep": 50
  },
  {
    "id": "SK-G2-LN-020",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "ليان محمود أمين",
    "nameEn": "Layan Mahmoud Amin",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "annual_total": 98,
      "t1_exam": 29.5,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_total": 98,
      "t1_sep": 99,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep_pct": 99,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "sep": 29,
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:31:23.477Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "7479",
    "password": "7479",
    "_updatedAt": "2026-10-09T18:04:51.665Z",
    "_migratedAt": "2026-10-10T18:37:59.566Z",
    "_lastModified": 1791657479566
  },
  {
    "id": "SK-G2-LN-021",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "محمد أحمد ضاحي",
    "nameEn": "Mohamed Ahmed Dhahi",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_total": 98,
      "t1_total": 98,
      "t1_sep": 97,
      "annual_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep_pct": 97,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء",
        "sep": 29,
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:27:41.345Z",
            "score": 28
          }
        },
        "sep": 28
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "2303",
    "password": "2303",
    "_lastModified": 1791657479566,
    "_migratedAt": "2026-10-10T18:37:59.566Z",
    "_updatedAt": "2026-10-09T18:04:51.676Z"
  },
  {
    "id": "SK-G2-LN-022",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "يزن حسام عطية",
    "nameEn": "Yazan Hossam Atteya",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep": 95,
      "t2_total": 98,
      "t1_total": 98,
      "t1_m1": 19.5,
      "annual_total": 98,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_sep_pct": 95,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "sep": 28,
        "teacherNameAr": "مس / أسماء"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:31:03.002Z",
            "score": 28
          }
        },
        "sep": 28
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "1941",
    "password": "1941",
    "_migratedAt": "2026-10-10T18:37:59.566Z",
    "_updatedAt": "2026-10-09T18:04:51.685Z",
    "_lastModified": 1791657479566
  },
  {
    "id": "SK-G2-LN-023",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "ل��ات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "ريماس أحمد محمد",
    "nameEn": "Remas Ahmed Mohamed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_total": 98,
      "t2_total": 98,
      "t1_exam": 29.5,
      "t1_sep": 94,
      "t2_exam": 30,
      "annual_total": 98,
      "t1_m1": 19.5,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_sep_pct": 94,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 28,
        "subjectId": "arabic"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:30:09.306Z",
            "score": 28
          }
        },
        "sep": 28
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 18,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 18
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "6785",
    "password": "6785",
    "_updatedAt": "2026-10-09T18:04:51.696Z",
    "_lastModified": 1791657479566,
    "_migratedAt": "2026-10-10T18:37:59.566Z"
  },
  {
    "id": "SK-G2-LN-024",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "أمنية محمد عبد الرحمن",
    "nameEn": "Omnia Mohamed Abdel Rahman",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t2_tasks": null,
      "t1_sep": 80,
      "t1_tasks": null,
      "t2_total": 98,
      "annual_total": 98,
      "t1_total": 98,
      "t1_sep_pct": 100,
      "t1_sep_max": 80
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30,
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:29:09.569Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "6890",
    "password": "6890",
    "_updatedAt": "2026-10-09T18:04:51.704Z",
    "_lastModified": 1791657479566,
    "_migratedAt": "2026-10-10T18:37:59.566Z"
  },
  {
    "id": "SK-G2-LN-025",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "فريدة محمود إبراهيم",
    "nameEn": "Farida Mahmoud Ibrahim",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep": 94,
      "t1_m1": 19.5,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_exam": 30,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_total": 98,
      "annual_total": 98,
      "t1_sep_pct": 94,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 28
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:29:05.245Z",
            "score": 27
          }
        },
        "sep": 27
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "1522",
    "password": "1522",
    "_migratedAt": "2026-10-10T18:37:59.566Z",
    "_lastModified": 1791657479566,
    "_updatedAt": "2026-10-09T18:04:51.715Z"
  },
  {
    "id": "SK-G2-AR-009",
    "grade": 2,
    "gradeNameAr": "الصف 2",
    "gradeNameEn": "Grade 2",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "تالا عبد القادر",
    "nameEn": "Tala Abdel Qader",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_total": 98,
      "t1_total": 98,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_m1": 19.5,
      "t1_sep": 44,
      "t1_sep_pct": 88,
      "t1_sep_max": 50
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "sep": 0,
        "scores": {},
        "teacherNameAr": "مس / أسماء"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:42:05.647Z",
            "score": 27
          }
        },
        "sep": 27
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 17,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 17
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "1519",
    "password": "1519",
    "_updatedAt": "2026-10-09T18:04:51.725Z",
    "_migratedAt": "2026-10-10T18:37:59.566Z",
    "_lastModified": 1791657479566
  },
  {
    "id": "SK-G1-LN-011",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "ليان محمود احمد",
    "nameEn": "Layan Mahmoud Ahmed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_sep": 100,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_m1": 19.5,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t1_total": 98,
      "t2_exam": 30,
      "t2_total": 98,
      "t1_exam": 29.5,
      "t1_sep_pct": 100,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "english_al": {
        "sep": 25,
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / يارا"
      },
      "english_ol": {
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol",
        "sep": 15
      },
      "arabic": {
        "sep": 30,
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / مروة",
        "subjectId": "arabic"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:38:55.654Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9462",
    "password": "9462",
    "_migratedAt": "2026-10-10T18:37:59.566Z",
    "_lastModified": 1791657479566,
    "_updatedAt": "2026-10-10T18:36:01.267Z",
    "subjectScores.english_al.scores.t1_sep": 25,
    "subjectScores.english_ol.scores.t1_sep": 15
  },
  {
    "id": "SK-G1-LN-012",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "لجين ياسر محمد",
    "nameEn": "Loujain Yasser Mohamed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 99,
      "t2_exam": 30,
      "annual_total": 98,
      "t1_exam": 29.5,
      "t1_tasks": null,
      "t1_m1": 19.5,
      "t2_tasks": null,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t1_total": 98,
      "t2_total": 98,
      "t1_sep_pct": 99,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "english_al": {
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / يارا",
        "subjectId": "english_al",
        "sep": 25
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "sep": 30,
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:38:45.037Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 14,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 14
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8899",
    "password": "8899",
    "_updatedAt": "2026-10-10T18:15:07.276Z",
    "_lastModified": 1791657479567,
    "_migratedAt": "2026-10-10T18:37:59.567Z",
    "subjectScores.english_al.scores.t1_sep": 25
  },
  {
    "id": "SK-G1-LN-013",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "سيلا محمد صبحي",
    "nameEn": "Sila Mohamed Sobhi",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_m1": 19.5,
      "annual_total": 98,
      "t1_total": 98,
      "t1_sep": 97,
      "t2_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep_pct": 97,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "english_ol": {
        "sep": 15,
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / يارا"
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "sep": 23,
        "scores": {
          "t1_sep": {
            "score": 23,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:39:02.201Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "6470",
    "password": "6470",
    "_lastModified": 1791657479567,
    "_updatedAt": "2026-10-10T18:37:11.318Z",
    "_migratedAt": "2026-10-10T18:37:59.567Z",
    "subjectScores.english_ol.scores.t1_sep": 15,
    "subjectScores.english_al.scores.t1_sep": 23
  },
  {
    "id": "SK-G1-LN-014",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "روز احمد فواد",
    "nameEn": "Rose Ahmed Fouad",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_sep": 99,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_total": 98,
      "t2_total": 98,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_tasks": null,
      "t1_m1": 19.5,
      "t2_tasks": null,
      "t1_sep_pct": 99,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "arabic": {
        "teacherNameAr": "مس / مروة",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "sep": 15,
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_al": {
        "scores": {
          "t1_sep": {
            "score": 24,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 24,
        "teacherNameAr": "مس / يارا",
        "subjectId": "english_al"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:35:49.097Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "6075",
    "password": "6075",
    "_updatedAt": "2026-10-10T18:34:14.910Z",
    "_lastModified": 1791657479567,
    "_migratedAt": "2026-10-10T18:37:59.567Z",
    "subjectScores.english_ol.scores.t1_sep": 15,
    "subjectScores.english_al.scores.t1_sep": 24
  },
  {
    "id": "SK-G1-LN-015",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "بسمة محمد ابو فراج",
    "nameEn": "Basma Mohamed Abou Farag",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_total": 98,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t1_m1": 19.5,
      "t2_tasks": null,
      "t1_tasks": null,
      "annual_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_sep": 100,
      "t1_sep_pct": 100,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30,
        "teacherNameAr": "مس / مروة"
      },
      "english_ol": {
        "sep": 15,
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / يارا",
        "subjectId": "english_ol"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_al": {
        "teacherNameAr": "مس / يارا",
        "sep": 25,
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:35:45.481Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8475",
    "password": "8475",
    "_updatedAt": "2026-10-10T18:35:26.595Z",
    "_lastModified": 1791657479567,
    "_migratedAt": "2026-10-10T18:37:59.567Z",
    "subjectScores.english_ol.scores.t1_sep": 15,
    "subjectScores.english_al.scores.t1_sep": 25
  },
  {
    "id": "SK-G1-LN-016",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "مليكة محمد رفعت",
    "nameEn": "Malika Mohamed Refaat",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 29.5,
      "t1_sep": 69,
      "t2_exam": 30,
      "t1_total": 98,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "annual_total": 98,
      "t1_m1": 19.5,
      "t1_sep_pct": 98.57,
      "t1_sep_max": 70
    },
    "subjectScores": {
      "english_ol": {
        "scores": {
          "t1_sep": {
            "score": 14,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / يارا",
        "subjectId": "english_ol",
        "sep": 14
      },
      "english_al": {
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / يارا",
        "subjectId": "english_al",
        "sep": 25
      },
      "arabic": {
        "teacherNameAr": "مس / مروة",
        "scores": {},
        "subjectId": "arabic",
        "sep": 0
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:37:25.372Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "6441",
    "password": "6441",
    "_migratedAt": "2026-10-10T18:37:59.567Z",
    "_lastModified": 1791657488093,
    "_updatedAt": "2026-10-10T18:38:08.093Z",
    "subjectScores.english_al.scores.t1_sep": 25,
    "subjectScores.english_ol.scores.t1_sep": 14
  },
  {
    "id": "SK-G1-LN-017",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "لجين محمد رمضان",
    "nameEn": "Loujain Mohamed Ramadan",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t2_total": 98,
      "t1_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_sep": 100,
      "t1_sep_pct": 100,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "arabic": {
        "sep": 30,
        "teacherNameAr": "مس / مروة",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 25
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:38:34.940Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 15
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "3088",
    "password": "3088",
    "_lastModified": 1791657479567,
    "_migratedAt": "2026-10-10T18:37:59.567Z",
    "_updatedAt": "2026-10-10T18:27:07.985Z",
    "subjectScores.english_al.scores.t1_sep": 25
  },
  {
    "id": "SK-G1-LN-018",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "أدم عبدالرحمن السيد",
    "nameEn": "Adam Abdel Rahman El-Sayed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t2_tasks": null,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_tasks": null,
      "t2_total": 98,
      "t1_total": 98,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t1_sep": 100,
      "annual_total": 98,
      "t1_sep_pct": 100,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "english_al": {
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / يارا",
        "subjectId": "english_al",
        "sep": 25
      },
      "english_ol": {
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / يارا",
        "subjectId": "english_ol",
        "sep": 15
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / مروة",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:36:32.624Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9252",
    "password": "9252",
    "_lastModified": 1791657479567,
    "_updatedAt": "2026-10-10T18:33:17.527Z",
    "_migratedAt": "2026-10-10T18:37:59.567Z",
    "subjectScores.english_al.scores.t1_sep": 25,
    "subjectScores.english_ol.scores.t1_sep": 15
  },
  {
    "id": "SK-G1-LN-019",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "سفيان محمد رمضان",
    "nameEn": "Sofian Mohamed Ramadan",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t1_m1": 19.5,
      "t2_tasks": null,
      "annual_total": 98,
      "t1_tasks": null,
      "t2_total": 98,
      "t1_total": 98,
      "t2_exam": 30,
      "t1_sep": 98,
      "t1_exam": 29.5,
      "t1_sep_pct": 98,
      "t1_sep_max": 100
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "sep": 30,
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 24,
            "maxScore": 25,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "teacherNameAr": "مس / يارا",
        "sep": 24
      },
      "english_ol": {
        "sep": 15,
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:39:35.378Z",
            "score": 29
          }
        },
        "sep": 29
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "8744",
    "password": "8744",
    "_updatedAt": "2026-10-10T18:37:21.630Z",
    "_migratedAt": "2026-10-10T18:37:59.567Z",
    "_lastModified": 1791657479567,
    "subjectScores.english_al.scores.t1_sep": 24,
    "subjectScores.english_ol.scores.t1_sep": 15
  },
  {
    "id": "SK-G1-AR-008",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "ماريا قتيبه العلي",
    "nameEn": "Maria Qutaiba El-Ali",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t2_total": 98,
      "t1_sep": 60,
      "t1_total": 98,
      "t1_exam": 29.5,
      "t2_exam": 30,
      "t1_m1": 19.5,
      "t2_tasks": null,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t1_tasks": null,
      "t1_sep_pct": 100,
      "t1_sep_max": 60
    },
    "subjectScores": {
      "arabic": {
        "sep": 30,
        "subjectId": "arabic",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:33:12.708Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "3897",
    "password": "3897",
    "_updatedAt": "2026-10-14T15:24:50.198Z",
    "_lastModified": 1791991490198,
    "_migratedAt": "2026-10-10T18:37:59.567Z"
  },
  {
    "id": "SK-G1-AR-009",
    "grade": 1,
    "gradeNameAr": "الصف 1",
    "gradeNameEn": "Grade 1",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "كادي محمود سعد",
    "nameEn": "Cady Mahmoud Saad",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 75,
      "t1_m1": 19.5,
      "t1_tasks": null,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_tasks": null,
      "t1_total": 98,
      "annual_total": 98,
      "t2_exam": 30,
      "t2_total": 98,
      "t1_exam": 29.5,
      "t1_sep_pct": 100,
      "t1_sep_max": 75
    },
    "subjectScores": {
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "teacherNameAr": "مس / مروة",
        "sep": 30
      },
      "english_ol": {
        "teacherNameAr": "مس / يارا",
        "sep": 15,
        "scores": {
          "t1_sep": {
            "score": 15,
            "maxScore": 15,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "english_ol"
      },
      "english_al": {
        "sep": null,
        "scores": {},
        "teacherNameAr": "مس / يارا",
        "subjectId": "english_al"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:33:00.308Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / مروة",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "3621",
    "password": "3621",
    "_lastModified": 1791657479568,
    "_updatedAt": "2026-10-10T18:36:45.652Z",
    "_migratedAt": "2026-10-10T18:37:59.568Z",
    "subjectScores.english_ol.scores.t1_sep": 15,
    "subjectScores.english_al.scores.t1_sep": null
  },
  {
    "id": "SK-G3-LN-019",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "مالك محمود ابراهيم",
    "nameEn": "Malek Mahmoud Ibrahim",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "t1_exam": 29.5,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_m1": 19.5,
      "t1_sep": 112,
      "t1_total": 98,
      "t2_total": 98,
      "t2_tasks": null,
      "t1_tasks": null,
      "annual_total": 98,
      "t1_sep_pct": 93.33,
      "t1_sep_max": 120
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "sep": 27,
        "scores": {
          "t1_sep": {
            "score": 27,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:45:51.577Z",
            "score": 29
          }
        },
        "sep": 29
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 26,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 26
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "9613",
    "password": "9613",
    "_updatedAt": "2026-10-09T18:05:28.285Z",
    "_lastModified": 1791657479568,
    "_migratedAt": "2026-10-10T18:37:59.568Z"
  },
  {
    "id": "SK-G3-LN-020",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "مؤيد أحمد سيد",
    "nameEn": "Moayad Ahmed Sayed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 98,
      "t1_exam": 29.5,
      "t1_sep": 84,
      "t2_exam": 30,
      "t1_total": 98,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_tasks": null,
      "t1_m1": 19.5,
      "t1_sep_pct": 93.33,
      "t1_sep_max": 90
    },
    "subjectScores": {
      "arabic": {
        "sep": 0,
        "scores": {},
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء"
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:48:08.981Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 29
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 25
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "4491",
    "password": "4491",
    "_lastModified": 1791657479568,
    "_updatedAt": "2026-10-09T18:05:28.298Z",
    "_migratedAt": "2026-10-10T18:37:59.568Z"
  },
  {
    "id": "SK-G3-LN-021",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "ريتال محمد عسل",
    "nameEn": "Retal Mohamed Asal",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 83,
      "t2_exam": 30,
      "t1_exam": 29.5,
      "annual_total": 98,
      "t1_total": 98,
      "t2_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep_pct": 92.22,
      "t1_sep_max": 90
    },
    "subjectScores": {
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "sep": 28,
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:45:26.310Z",
            "score": 29
          }
        },
        "sep": 29
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 26,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 26
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "8204",
    "password": "8204",
    "_updatedAt": "2026-10-09T18:05:28.310Z",
    "_migratedAt": "2026-10-10T18:37:59.568Z",
    "_lastModified": 1791657479568
  },
  {
    "id": "SK-G3-LN-022",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "تالين أحمد محمود",
    "nameEn": "Taleen Ahmed Mahmoud",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "t1_exam": 29.5,
      "annual_total": 98,
      "t2_total": 98,
      "t1_m1": 19.5,
      "t1_total": 98,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_sep": 120,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_sep_pct": 100,
      "t1_sep_max": 120
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء",
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:44:34.568Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "pin": "6611",
    "password": "6611",
    "_updatedAt": "2026-10-09T18:05:28.325Z",
    "_lastModified": 1791657479568,
    "_migratedAt": "2026-10-10T18:37:59.568Z"
  },
  {
    "id": "SK-G3-AR-006",
    "grade": 3,
    "gradeNameAr": "الصف 3",
    "gradeNameEn": "Grade 3",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "نور حماده عياد",
    "nameEn": "Nour Hamada Ayyad",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_exam": 29.5,
      "t1_sep": 88,
      "t2_exam": 30,
      "t1_tasks": null,
      "t2_tasks": null,
      "t1_total": 98,
      "annual_total": 98,
      "t1_m1": 19.5,
      "t2_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m2": 20,
      "t1_sep_pct": 97.78,
      "t1_sep_max": 90
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "sep": 28,
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "subjectId": "arabic"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:24:01.525Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "pin": "8617",
    "password": "8617",
    "_updatedAt": "2026-10-09T18:05:28.339Z",
    "_migratedAt": "2026-10-10T18:37:59.568Z",
    "_lastModified": 1791657479568
  },
  {
    "grade": 4,
    "track": "arabic",
    "gradeNameAr": "الصف 4",
    "gradeNameEn": "Grade 4",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "مرام شريف رجب",
    "nameEn": "Maram Sheref Ragab",
    "gender": "female",
    "phone": "",
    "notes": "",
    "id": "SK-G4-AR-9749",
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 174,
      "t1_total": 100,
      "t1_m1": 20,
      "t1_m2": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t2_total": 100,
      "t1_tasks": null,
      "t2_tasks": null,
      "t2_exam": 30,
      "t1_exam": 30,
      "annual_total": 100,
      "t1_sep_pct": 96.67,
      "t1_sep_max": 180
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "scores": {
          "t1_sep": {
            "score": 47,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 47,
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:17:18.868Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 28
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 49
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-12T00:25:00.000Z"
          }
        },
        "sep": 19.5
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "sampleScores": {},
    "pin": "4922",
    "password": "4922",
    "_updatedAt": "2026-10-09T18:05:38.863Z",
    "_lastModified": 1791657479568,
    "_migratedAt": "2026-10-10T18:37:59.568Z"
  },
  {
    "grade": 4,
    "track": "arabic",
    "gradeNameAr": "الصف 4",
    "gradeNameEn": "Grade 4",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "لينا بهاء",
    "nameEn": "Lina Bahaa",
    "gender": "female",
    "phone": "",
    "notes": "",
    "id": "SK-G4-AR-0026",
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "annual_total": 100,
      "t1_sep": 176,
      "t1_total": 100,
      "t2_total": 100,
      "t1_tasks": null,
      "t1_m1": 20,
      "t2_tasks": null,
      "t2_m2": 20,
      "t1_m2": 20,
      "t2_m1": 20,
      "t1_exam": 30,
      "t2_exam": 30,
      "t1_sep_pct": 97.78,
      "t1_sep_max": 180
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 48,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 48,
        "subjectId": "arabic"
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / نبيلة",
        "scores": {
          "t1_sep": {
            "isRecorded": true,
            "maxScore": 30,
            "recordedAt": "2026-10-11T17:17:24.204Z",
            "score": 30
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 28
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "sampleScores": {},
    "pin": "2238",
    "password": "2238",
    "_updatedAt": "2026-10-09T18:05:38.875Z",
    "_lastModified": 1791657479568,
    "_migratedAt": "2026-10-10T18:37:59.568Z"
  },
  {
    "grade": 4,
    "track": "languages",
    "gradeNameAr": "الصف 4",
    "gradeNameEn": "Grade 4",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "يامن محمد رفعت",
    "nameEn": "Yamen Mohamed Refaat",
    "gender": "male",
    "phone": "",
    "notes": "",
    "id": "SK-G4-EN-6708",
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 20,
      "t2_m2": 20,
      "t2_m1": 20,
      "t1_m2": 20,
      "t1_exam": 30,
      "t2_exam": 30,
      "t1_sep": 209,
      "t2_tasks": null,
      "t1_tasks": null,
      "t2_total": 100,
      "annual_total": 100,
      "t1_total": 100,
      "t1_sep_pct": 99.52,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "term": {
        "scores": {
          "general": null
        }
      },
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "sep": 49,
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "sampleScores": {},
    "pin": "7639",
    "password": "7639",
    "_lastModified": 1791657479568,
    "_updatedAt": "2026-10-09T18:05:38.887Z",
    "_migratedAt": "2026-10-10T18:37:59.568Z"
  },
  {
    "grade": 4,
    "track": "languages",
    "gradeNameAr": "الصف 4",
    "gradeNameEn": "Grade 4",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "روفان عمر عبد المقصود",
    "nameEn": "Rovan Omar Abdelmaksoud",
    "gender": "female",
    "phone": "",
    "notes": "",
    "id": "SK-G4-EN-6103",
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "t1_exam": 30,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t1_m1": 20,
      "annual_total": 100,
      "t1_total": 100,
      "t1_sep": 209,
      "t2_total": 100,
      "t2_tasks": null,
      "t1_tasks": null,
      "t1_sep_pct": 99.52,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "arabic": {
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 49,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 49
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "sampleScores": {},
    "pin": "1659",
    "password": "1659",
    "_migratedAt": "2026-10-10T18:37:59.568Z",
    "_updatedAt": "2026-10-09T18:05:38.902Z",
    "_lastModified": 1791657479568
  },
  {
    "grade": 4,
    "track": "languages",
    "gradeNameAr": "الصف 4",
    "gradeNameEn": "Grade 4",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "محمد مازن شلار",
    "nameEn": "Mohamed Malaz Shalar",
    "gender": "male",
    "phone": "",
    "notes": "",
    "id": "SK-G4-EN-3027",
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t2_exam": 30,
      "t1_exam": 30,
      "t2_tasks": null,
      "t1_m1": 20,
      "t1_tasks": null,
      "t1_m2": 20,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_total": 100,
      "t1_total": 100,
      "t1_sep": 210,
      "annual_total": 100,
      "t1_sep_pct": 100,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "arabic": {
        "sep": 50,
        "teacherNameAr": "مس / أسماء",
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        }
      },
      "term": {
        "scores": {
          "general": null
        }
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "sampleScores": {},
    "pin": "4302",
    "password": "4302",
    "_updatedAt": "2026-10-09T18:05:38.914Z",
    "_migratedAt": "2026-10-10T18:37:59.568Z",
    "_lastModified": 1791657479568
  },
  {
    "id": "SK-G4-LN-014",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "ملك السيد سمير",
    "nameEn": "Malak El-Sayed Samir",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 210,
      "t1_sep_pct": 100,
      "t1_sep_max": 210
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "social": {
        "subjectId": "social",
        "teacherNameAr": "مس / كريمان",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 20,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 20
      }
    },
    "parentName": "السيد سمير",
    "parentPhone": "",
    "parentWhatsApp": "",
    "parentEmail": "",
    "email": ""
  },
  {
    "id": "SK-G4-LN-015",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "فريدة أحمد ضاحي",
    "nameEn": "Farida Ahmed Dahi",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": 186,
      "t1_sep_pct": 97.89,
      "t1_sep_max": 190
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 48,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 48
      },
      "english_ol": {
        "subjectId": "english_ol",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "english_al": {
        "subjectId": "english_al",
        "teacherNameAr": "مس / يارا",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 30
      },
      "math": {
        "subjectId": "math",
        "teacherNameAr": "مس / هند",
        "scores": {
          "t1_sep": {
            "score": 28,
            "maxScore": 30,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 28
      },
      "science": {
        "subjectId": "science",
        "teacherNameAr": "مس / سمر",
        "scores": {
          "t1_sep": {
            "score": 50,
            "maxScore": 50,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 50
      },
      "religion": {
        "subjectId": "religion",
        "teacherNameAr": "مس / أسماء",
        "scores": {
          "t1_sep": {
            "score": 19,
            "maxScore": 20,
            "isRecorded": true,
            "recordedAt": "2026-10-11T20:00:00.000Z",
            "updatedAt": "2026-10-11T20:00:00.000Z"
          }
        },
        "sep": 19
      }
    },
    "parentName": "أحمد ضاحي",
    "parentPhone": "",
    "parentWhatsApp": "",
    "parentEmail": "",
    "email": ""
  },
  {
    "id": "SK-G4-LN-016",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "سيد محمد عسل",
    "nameEn": "Sayed Mohamed Asal",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": null
    },
    "subjectScores": {},
    "parentName": "محمد عسل",
    "parentPhone": "",
    "parentWhatsApp": "",
    "parentEmail": "",
    "email": ""
  },
  {
    "id": "SK-G7-AR-007",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "arabic",
    "trackNameAr": "عربي (عام)",
    "trackNameEn": "Arabic Track",
    "nameAr": "عمر إيهاب محمد",
    "nameEn": "Omar Ehab Mohamed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_sep": null
    },
    "subjectScores": {},
    "parentName": "إيهاب محمد",
    "parentPhone": "",
    "parentWhatsApp": "",
    "parentEmail": "",
    "email": ""
  }
];

  const SmileKidsDB = {
    DATABASE_NAME: 'قاعدة بيانات مدرسة Smile Kids الموحدة 2025/2026',
    DATABASE_CODE: 'SMILE_KIDS_MASTER_DB',
    VERSION: '7.0.0',
    STORAGE_KEY: STORAGE_KEY,
    FILE_NAME_JS: 'smile_kids_database.js',
    FILE_NAME_JSON: 'smile_kids_database.json',
    CLOUD_API_URL: 'https://script.google.com/macros/s/AKfycbw3NIQ9nrVF3CHVQ7wChc0QYElIAQx2SHRnGs236x-yuIrBBuFiMqKiDDv3to0g1rnu/exec',
    AUTH_KEY: 'SK_SECURE_AUTH_2026_TOKEN_V1',
    AUTH_HEADER_NAME: 'X-SmileKids-Auth-Key',
    _isSyncingToCloud: false,
    _syncDebounceTimer: null,
    _syncStatus: 'idle',
    _lastModified: 0,
    _bc: null,

    getActiveTeacherSession: function() {
      try {
        if (typeof window !== 'undefined' && window.currentTeacher) {
          return {
            teacherId: window.currentTeacher.id,
            teacherName: window.currentTeacher.nameAr
          };
        }
        if (typeof sessionStorage !== 'undefined') {
          const raw = sessionStorage.getItem('smile_kids_active_teacher_session');
          if (raw) return JSON.parse(raw);
        }
        if (typeof localStorage !== 'undefined') {
          const raw = localStorage.getItem('smile_kids_active_teacher_session');
          if (raw) return JSON.parse(raw);
        }
      } catch(e) {}
      return null;
    },

    _cache: null,
    _listeners: [],
    DELETED_IDS_KEY: 'smile_kids_deleted_student_ids_v1',
    _deletedIds: new Set(['SK-G2-LN-013']),

    init: function() {
      // Purge legacy storage versions to prevent stale unrecorded cache overrides
      if (typeof localStorage !== 'undefined') {
        const staleKeys = ['SMILE_KIDS_MASTER_DATABASE_2026_V6', 'SMILE_KIDS_MASTER_DATABASE_2026_V5', 'SMILE_KIDS_MASTER_DATABASE_2026_V4', 'SMILE_KIDS_MASTER_DATABASE_2026', 'smile_kids_students', 'smilekids_school_v6', 'smile_kids_students_v7_custom'];
        staleKeys.forEach(k => {
          try { localStorage.removeItem(k); } catch(e) {}
        });
      }

      // Auto-purge outdated legacy storage caches to prevent old sessions from resurrecting typos
      if (typeof localStorage !== 'undefined') {
        LEGACY_STUDENT_KEYS.forEach(k => {
          try { localStorage.removeItem(k); } catch(e) {}
        });
        try { localStorage.removeItem(LEGACY_ATT_KEY); } catch(e) {}
      }

      let raw = null;
      if (typeof localStorage !== 'undefined') {
        try {
          raw = localStorage.getItem(STORAGE_KEY);
          const lm = localStorage.getItem(STORAGE_KEY + '_LAST_MODIFIED');
          if (lm) this._lastModified = parseInt(lm) || 0;
        } catch(e) {
          console.warn('localStorage read error:', e);
        }
      }

      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            this._cache = parsed.filter(s => !isStudentBlacklisted(s));
          } else {
            this._cache = this._clone(MASTER_INITIAL_STUDENTS);
            this.save();
          }
        } catch(e) {
          console.error('Master DB parse error, restoring defaults:', e);
          this._cache = this._clone(MASTER_INITIAL_STUDENTS);
          this.save();
        }
      } else {
        // Try migrating from legacy storage if present
        const migrated = this._tryMigrateLegacy();
        if (migrated && migrated.length > 0) {
          this._cache = migrated;
        } else {
          this._cache = this._clone(MASTER_INITIAL_STUDENTS);
        }
        this.save();
      }

      // Initialize and load deleted student IDs (Tombstones) to prevent zombie resurrections
      this._deletedIds = new Set(['SK-G2-LN-013']);
      if (typeof localStorage !== 'undefined') {
        try {
          const rawDel = localStorage.getItem(this.DELETED_IDS_KEY);
          if (rawDel) {
            const arr = JSON.parse(rawDel);
            if (Array.isArray(arr)) arr.forEach(id => this._deletedIds.add(id));
          }
          localStorage.setItem(this.DELETED_IDS_KEY, JSON.stringify(Array.from(this._deletedIds)));
        } catch(e) {}
      }

      // Purge any deleted students from cache immediately
      if (this._cache && Array.isArray(this._cache)) {
        this._cache = this._cache.filter(s => !this._deletedIds.has(s.id));
      }

      // Ensure verified students exist in cache without resurrecting deleted students
      if (this._cache) {
        const existingIds = new Set(this._cache.map(s => s.id));
        let addedCount = 0;
        let updatedFieldsCount = 0;
        MASTER_INITIAL_STUDENTS.forEach(defSt => {
          if (!existingIds.has(defSt.id) && !this._deletedIds.has(defSt.id)) {
            this._cache.push(this._clone(defSt));
            addedCount++;
          } else if (existingIds.has(defSt.id)) {
            const cachedSt = this._cache.find(s => s.id === defSt.id);
            if (cachedSt) {
              if (cachedSt.nameAr !== defSt.nameAr || cachedSt.nameEn !== defSt.nameEn || cachedSt.gender !== defSt.gender) {
                cachedSt.nameAr = defSt.nameAr;
                cachedSt.nameEn = defSt.nameEn;
                cachedSt.gender = defSt.gender;
                updatedFieldsCount++;
              }
              // Sync / update September scores from master if cached scores are missing or unrecorded
              if (defSt.subjectScores) {
                if (!cachedSt.subjectScores) cachedSt.subjectScores = {};
                for (const subKey in defSt.subjectScores) {
                  const defSub = defSt.subjectScores[subKey];
                  const cachedSub = cachedSt.subjectScores[subKey];
                  const cachedSep = cachedSub && cachedSub.scores && cachedSub.scores.t1_sep;
                  const isCachedRecorded = cachedSep && cachedSep.isRecorded === true && cachedSep.score !== null;
                  const defSep = defSub && defSub.scores && defSub.scores.t1_sep;
                  const isDefRecorded = defSep && defSep.isRecorded === true && defSep.score !== null;

                  if (isDefRecorded && (!isCachedRecorded || cachedSep.score !== defSep.score)) {
                    cachedSt.subjectScores[subKey] = this._clone(defSub);
                    updatedFieldsCount++;
                  }
                }
              }
              if (defSt.termsScores && defSt.termsScores.t1_sep) {
                if (!cachedSt.termsScores) cachedSt.termsScores = {};
                if (!cachedSt.termsScores.t1_sep || cachedSt.termsScores.t1_sep.totalScore === null || cachedSt.termsScores.t1_sep.totalScore === undefined) {
                  cachedSt.termsScores.t1_sep = this._clone(defSt.termsScores.t1_sep);
                  updatedFieldsCount++;
                }
              }
            }
          }
        });
        if (addedCount > 0 || updatedFieldsCount > 0) {
          this.save();
        }
      }

      this._ensureStudentFields();
      this._setupStorageListener();
      this._setupCloudSync();
      this._setupFirebaseSync();
      return this;
    },

    
    _setupCloudSync: function() {
      if (typeof window === 'undefined') return;

      // 1. Initial cloud check on startup
      setTimeout(() => {
        this.syncFromCloud();
      }, 400);

      // 2. Auto-sync whenever user switches back to the tab/window on mobile or desktop
      if (typeof document !== 'undefined' && document.addEventListener) {
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') {
            this.syncFromCloud();
          }
        });
      }
      if (window.addEventListener) {
        window.addEventListener('focus', () => {
          this.syncFromCloud();
        });
      }
    },

    forceCloudSync: async function() {
      this._setSyncStatus('syncing', 'جاري المزامنة السحابية الفورية...');
      await this.syncToCloud({ action: 'full_backup', instant: true });
      await this.syncFromCloud();
      this._notifyListeners('force_sync');
      return { success: true, total: this.getAllStudents().length };
    },

    _setupFirebaseSync: function() {
      if (typeof window === 'undefined') return;

      const startListening = () => {
        if (!window.SmileKidsFirebase || !window.SmileKidsFirebase.canUseFirestore()) return;
        if (this._isFirebaseListening) return;
        this._isFirebaseListening = true;

        console.log('[SmileKids DB] تم تفعيل المزامنة اللحظية مع Google Cloud Firestore 📡');

        this._firestoreUnsubscribe = window.SmileKidsFirebase.initFirestoreListeners({
          onStudents: (remoteStudents) => {
            if (!Array.isArray(remoteStudents) || remoteStudents.length === 0) return;

            let hasChanges = false;
            const localMap = new Map();
            this.getAllStudents().forEach(s => localMap.set(s.id, s));

            remoteStudents.forEach(remoteSt => {
              const localSt = localMap.get(remoteSt.id);
              if (!localSt) {
                this._cache.push(remoteSt);
                hasChanges = true;
              } else {
                enforceCanonicalStudent(localSt);
                enforceCanonicalStudent(remoteSt);
                if (!CANONICAL_STUDENT_OVERRIDES[localSt.id]) {
                  if (remoteSt.nameAr && remoteSt.nameAr !== localSt.nameAr) { localSt.nameAr = remoteSt.nameAr; hasChanges = true; }
                  if (remoteSt.nameEn && remoteSt.nameEn !== localSt.nameEn) { localSt.nameEn = remoteSt.nameEn; hasChanges = true; }
                  if (remoteSt.gender && remoteSt.gender !== localSt.gender) { localSt.gender = remoteSt.gender; hasChanges = true; }
                } else {
                  const c = CANONICAL_STUDENT_OVERRIDES[localSt.id];
                  localSt.nameAr = c.nameAr;
                  localSt.nameEn = c.nameEn;
                  if (c.gender) localSt.gender = c.gender;
                }

                // دمج حالة القيد وتعليق الشهادات
                if (remoteSt.enrollmentStatus && remoteSt.enrollmentStatus !== localSt.enrollmentStatus) {
                  localSt.enrollmentStatus = remoteSt.enrollmentStatus;
                  hasChanges = true;
                }
                if (remoteSt.status && remoteSt.status !== localSt.status) {
                  localSt.status = remoteSt.status;
                  hasChanges = true;
                }

                // دمج غير هدام: الحفاظ على أحدث التعديلات
                const remoteTs = remoteSt._lastModified || 0;
                const localTs = this._lastModified || 0;

                // دمج سجلات الحضور والغياب
                if (remoteSt.attendanceRecords && typeof remoteSt.attendanceRecords === 'object') {
                  localSt.attendanceRecords = localSt.attendanceRecords || {};
                  Object.keys(remoteSt.attendanceRecords).forEach(d => {
                    if (remoteTs >= localTs || !localSt.attendanceRecords[d]) {
                      if (localSt.attendanceRecords[d] !== remoteSt.attendanceRecords[d]) {
                        localSt.attendanceRecords[d] = remoteSt.attendanceRecords[d];
                        hasChanges = true;
                      }
                    }
                  });
                }

                // دمج ملاحظات الحضور
                if (remoteSt.attendanceNotes && typeof remoteSt.attendanceNotes === 'object') {
                  localSt.attendanceNotes = localSt.attendanceNotes || {};
                  Object.keys(remoteSt.attendanceNotes).forEach(d => {
                    if (localSt.attendanceNotes[d] !== remoteSt.attendanceNotes[d]) {
                      localSt.attendanceNotes[d] = remoteSt.attendanceNotes[d];
                      hasChanges = true;
                    }
                  });
                }

                // دمج درجات الشهور والاختبارات
                if (remoteSt.termsScores && typeof remoteSt.termsScores === 'object') {
                  localSt.termsScores = localSt.termsScores || {};
                  Object.keys(remoteSt.termsScores).forEach(k => {
                    if (remoteTs >= localTs || (!localSt.termsScores[k] && remoteSt.termsScores[k])) {
                      if (localSt.termsScores[k] !== remoteSt.termsScores[k]) {
                        localSt.termsScores[k] = remoteSt.termsScores[k];
                        hasChanges = true;
                      }
                    }
                  });
                }

                // دمج درجات المواد التفصيلية
                if (remoteSt.subjectScores && typeof remoteSt.subjectScores === 'object') {
                  localSt.subjectScores = localSt.subjectScores || {};
                  Object.keys(remoteSt.subjectScores).forEach(subId => {
                    if (!localSt.subjectScores[subId]) {
                      localSt.subjectScores[subId] = remoteSt.subjectScores[subId];
                      hasChanges = true;
                    } else if (remoteSt.subjectScores[subId].scores) {
                      localSt.subjectScores[subId].scores = localSt.subjectScores[subId].scores || {};
                      Object.keys(remoteSt.subjectScores[subId].scores).forEach(p => {
                        if (localSt.subjectScores[subId].scores[p] !== remoteSt.subjectScores[subId].scores[p]) {
                          localSt.subjectScores[subId].scores[p] = remoteSt.subjectScores[subId].scores[p];
                          hasChanges = true;
                        }
                      });
                    }
                  });
                }
              }
            });

            if (hasChanges) {
              this._ensureStudentFields();
              if (typeof localStorage !== 'undefined') {
                try {
                  localStorage.setItem(STORAGE_KEY, JSON.stringify(this._cache));
                  localStorage.setItem(STORAGE_KEY + '_LAST_MODIFIED', String(Date.now()));
                } catch(e) {}
              }
              this._notifyListeners('firestore_remote_sync');
            }
            this._setSyncStatus('online', 'Firestore (متزامن 🟢)');
          },

          onAttendance: (records) => {
            if (!Array.isArray(records) || records.length === 0) return;
            let updated = false;
            records.forEach(rec => {
              if (rec.studentId && rec.dateStr && rec.status) {
                const st = this.getStudentById(rec.studentId);
                if (st) {
                  st.attendanceRecords = st.attendanceRecords || {};
                  if (st.attendanceRecords[rec.dateStr] !== rec.status) {
                    st.attendanceRecords[rec.dateStr] = rec.status;
                    updated = true;
                  }
                  if (rec.note) {
                    st.attendanceNotes = st.attendanceNotes || {};
                    st.attendanceNotes[rec.dateStr] = rec.note;
                  }
                }
              }
            });
            if (updated) {
              this._notifyListeners('firestore_attendance');
            }
          },

          onGrades: (grades) => {
            if (!Array.isArray(grades) || grades.length === 0) return;
            let updated = false;
            grades.forEach(g => {
              if (g.studentId && g.subjectId && g.periodKey && g.score !== undefined && g.score !== null) {
                const st = this.getStudentById(g.studentId);
                if (st) {
                  st.subjectScores = st.subjectScores || {};
                  st.subjectScores[g.subjectId] = st.subjectScores[g.subjectId] || { subjectId: g.subjectId, scores: {} };
                  st.subjectScores[g.subjectId].scores = st.subjectScores[g.subjectId].scores || {};
                  const scNum = parseFloat(g.score);
                  const mxNum = parseFloat(g.maxScore) || 20;
                  if (!isNaN(scNum) && scNum > 0) {
                    st.subjectScores[g.subjectId].scores[g.periodKey] = {
                      score: scNum,
                      maxScore: mxNum,
                      isRecorded: true,
                      updatedAt: g.updatedAt || new Date().toISOString()
                    };
                    const fld = g.periodKey.replace('t1_', '').replace('t2_', '');
                    st.subjectScores[g.subjectId][fld] = scNum;
                    updated = true;
                  }
                }
              }
            });
            if (updated) {
              this._ensureStudentFields();
              if (typeof localStorage !== 'undefined') {
                try {
                  localStorage.setItem(STORAGE_KEY, JSON.stringify(this._cache));
                  localStorage.setItem(STORAGE_KEY + '_LAST_MODIFIED', String(Date.now()));
                } catch(e) {}
              }
              this._notifyListeners('firestore_grades');
            }
          },

          onTimetables: (schedulesMap) => {
            this._timetablesCache = schedulesMap;
            this._notifyListeners('firestore_timetables');
          },

          onError: (err) => {
            console.warn('[SmileKids DB] تنبيه مستمع Firestore (استمرار العمل محلياً):', err);
          }
        });
      };

      if (window.SmileKidsFirebase) {
        if (window.SmileKidsFirebase.isReady && window.SmileKidsFirebase.canUseFirestore()) {
          startListening();
        } else if (window.SmileKidsFirebase.whenReady) {
          window.SmileKidsFirebase.whenReady.then((ready) => {
            if (ready) startListening();
          });
        }
      }

      window.addEventListener('smilekids_firebase_ready', () => {
        startListening();
      });
    },

    _setSyncStatus: function(status, detail) {
      this._syncStatus = status;
      if (typeof document === 'undefined') return;

      const badgeElements = document.querySelectorAll('.cloud-sync-badge, #cloud-sync-badge, #db-sync-status');
      badgeElements.forEach(el => {
        if (status === 'syncing') {
          el.innerHTML = '<span class="inline-block animate-spin mr-1">🔄</span> جاري المزامنة مع Google Drive...';
          el.className = el.className.replace(/bg-\S+|text-\S+|border-\S+/g, '') + ' bg-amber-950/70 border border-amber-500/50 text-amber-300';
        } else if (status === 'online') {
          el.innerHTML = '<span class="relative flex h-2 w-2 mr-1"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span> Google Drive (متزامن 🟢)';
          el.className = el.className.replace(/bg-\S+|text-\S+|border-\S+/g, '') + ' bg-emerald-950/70 border border-emerald-500/50 text-emerald-300';
          el.title = 'متصل بـ Google Drive: ' + (detail || 'سمايل كيدز');
        } else if (status === 'error' || status === 'offline') {
          el.innerHTML = '<span class="text-amber-400 mr-1">⚠️</span> محلي (غير متصل بالدرايف)';
          el.className = el.className.replace(/bg-\S+|text-\S+|border-\S+/g, '') + ' bg-slate-900/80 border border-slate-700/60 text-slate-300';
        }
      });

      if (typeof window !== 'undefined' && window.dispatchEvent) {
        window.dispatchEvent(new CustomEvent('smilekids_sync_status', {
          detail: { status: status, detail: detail }
        }));
      }
    },

    syncFromCloud: async function(callback, queryParams) {
      if (!this.CLOUD_API_URL || typeof fetch === 'undefined') return;
      // Do not pull from cloud if a local edit is pending cloud push
      if (this._isSyncingToCloud) return;

      try {
        this._setSyncStatus('syncing');

        // Construct GET URL with secret auth key and optional query params
        let fetchUrl = this.CLOUD_API_URL;
        try {
          const u = new URL(this.CLOUD_API_URL);
          u.searchParams.set('authKey', this.AUTH_KEY);
          if (queryParams && typeof queryParams === 'object') {
            Object.entries(queryParams).forEach(([k, v]) => {
              if (v !== undefined && v !== null) u.searchParams.set(k, String(v));
            });
          }
          fetchUrl = u.toString();
        } catch(e) {
          const sep = fetchUrl.includes('?') ? '&' : '?';
          fetchUrl += `${sep}authKey=${encodeURIComponent(this.AUTH_KEY)}`;
        }

        const resp = await fetch(fetchUrl, {
          method: 'GET'
        });

        if (resp.ok) {
          const data = await resp.json();
          let studentsList = null;
          let cloudTimestamp = 0;
          if (Array.isArray(data)) {
            studentsList = data;
          } else if (data && typeof data === 'object') {
            if (Array.isArray(data.students)) studentsList = data.students;
            if (data.database_info && data.database_info.last_modified) {
              cloudTimestamp = parseInt(data.database_info.last_modified) || 0;
            } else if (data.database_info && data.database_info.exported_at) {
              cloudTimestamp = new Date(data.database_info.exported_at).getTime() || 0;
            }
          }

          if (studentsList && studentsList.length > 0) {
            studentsList = studentsList.filter(s => !isStudentBlacklisted(s));
            // Guard 0: If local has MORE students than cloud (e.g. 154 on mobile vs 147 on cloud), push local students to cloud!
            if (this._cache && this._cache.length > studentsList.length) {
              console.log('[SmileKids DB] Local has more students than cloud (' + this._cache.length + ' vs ' + studentsList.length + '). Uploading master to cloud...');
              this.syncToCloud({ action: 'full_backup', instant: true });
              return;
            }

            // Guard 1: If local edits were made more recently than cloud timestamp, push local to cloud instead
            if (this._lastModified > 0 && cloudTimestamp > 0 && this._lastModified > cloudTimestamp + 1000 && this._cache && this._cache.length >= studentsList.length) {
              console.log('Local data is newer than cloud. Syncing local changes to cloud...');
              this.syncToCloud();
              return;
            }

            // Guard 2: Safe Non-Destructive Merge (never wipe local attendance or subjectScores with empty cloud objects)
            let hasChanges = false;
            if (!this._cache || this._cache.length === 0) {
              this._cache = studentsList;
              hasChanges = true;
            } else {
              const localMap = new Map();
              this._cache.forEach(s => localMap.set(s.id, s));

              let cloudHasDeleted = false;
              studentsList.forEach(cloudSt => {
                if (this._deletedIds && this._deletedIds.has(cloudSt.id)) {
                  cloudHasDeleted = true;
                  return; // NEVER resurrect a deleted student!
                }
                const localSt = localMap.get(cloudSt.id);
                if (!localSt) {
                  this._cache.push(cloudSt);
                  hasChanges = true;
                } else {
                  // Merge updated student profile fields from cloud (names, photo, parent info)
                  if (cloudSt.photo && cloudSt.photo !== localSt.photo) {
                    localSt.photo = cloudSt.photo;
                    hasChanges = true;
                  }
                  enforceCanonicalStudent(localSt);
                  enforceCanonicalStudent(cloudSt);
                  if (!CANONICAL_STUDENT_OVERRIDES[localSt.id]) {
                    if (cloudSt.nameEn && cloudSt.nameEn !== localSt.nameEn) {
                      localSt.nameEn = cloudSt.nameEn;
                      hasChanges = true;
                    }
                    if (cloudSt.nameAr && cloudSt.nameAr !== localSt.nameAr) {
                      localSt.nameAr = cloudSt.nameAr;
                      hasChanges = true;
                    }
                    if (cloudSt.gender && cloudSt.gender !== localSt.gender) {
                      localSt.gender = cloudSt.gender;
                      hasChanges = true;
                    }
                  } else {
                    const c = CANONICAL_STUDENT_OVERRIDES[localSt.id];
                    localSt.nameAr = c.nameAr;
                    localSt.nameEn = c.nameEn;
                    if (c.gender) localSt.gender = c.gender;
                  }

                  // دمج حالة القيد وتعليق الشهادة السحابية
                  if (cloudSt.enrollmentStatus && cloudSt.enrollmentStatus !== localSt.enrollmentStatus) {
                    localSt.enrollmentStatus = cloudSt.enrollmentStatus;
                    hasChanges = true;
                  }
                  if (cloudSt.status && cloudSt.status !== localSt.status) {
                    localSt.status = cloudSt.status;
                    hasChanges = true;
                  }

                  if (cloudSt.parentName && cloudSt.parentName !== localSt.parentName) {
                    localSt.parentName = cloudSt.parentName;
                    hasChanges = true;
                  }
                  if (cloudSt.parentPhone && cloudSt.parentPhone !== localSt.parentPhone) {
                    localSt.parentPhone = cloudSt.parentPhone;
                    hasChanges = true;
                  }
                  if (cloudSt.parentWhatsApp && cloudSt.parentWhatsApp !== localSt.parentWhatsApp) {
                    localSt.parentWhatsApp = cloudSt.parentWhatsApp;
                    hasChanges = true;
                  }
                  if (cloudSt.parentEmail && cloudSt.parentEmail !== localSt.parentEmail) {
                    localSt.parentEmail = cloudSt.parentEmail;
                    localSt.email = cloudSt.parentEmail;
                    hasChanges = true;
                  }

                  // Merge attendance records without overwriting local marks
                  if (cloudSt.attendanceRecords && typeof cloudSt.attendanceRecords === 'object') {
                    localSt.attendanceRecords = localSt.attendanceRecords || {};
                    Object.keys(cloudSt.attendanceRecords).forEach(date => {
                      if (!localSt.attendanceRecords[date]) {
                        localSt.attendanceRecords[date] = cloudSt.attendanceRecords[date];
                        hasChanges = true;
                      }
                    });
                  }
                  if (cloudSt.attendanceNotes && typeof cloudSt.attendanceNotes === 'object') {
                    localSt.attendanceNotes = localSt.attendanceNotes || {};
                    Object.keys(cloudSt.attendanceNotes).forEach(date => {
                      if (!localSt.attendanceNotes[date]) {
                        localSt.attendanceNotes[date] = cloudSt.attendanceNotes[date];
                        hasChanges = true;
                      }
                    });
                  }
                  // Merge subject scores: NEVER replace non-empty local scores with empty cloud
                  if (cloudSt.subjectScores && typeof cloudSt.subjectScores === 'object' && Object.keys(cloudSt.subjectScores).length > 0) {
                    localSt.subjectScores = localSt.subjectScores || {};
                    Object.keys(cloudSt.subjectScores).forEach(subId => {
                      if (!localSt.subjectScores[subId]) {
                        localSt.subjectScores[subId] = cloudSt.subjectScores[subId];
                        hasChanges = true;
                      } else if (cloudSt.subjectScores[subId].scores) {
                        localSt.subjectScores[subId].scores = localSt.subjectScores[subId].scores || {};
                        Object.keys(cloudSt.subjectScores[subId].scores).forEach(period => {
                          if (!localSt.subjectScores[subId].scores[period]) {
                            localSt.subjectScores[subId].scores[period] = cloudSt.subjectScores[subId].scores[period];
                            hasChanges = true;
                          }
                        });
                      }
                    });
                  }
                  // Merge terms scores: preserve non-zero local scores
                  if (cloudSt.termsScores && typeof cloudSt.termsScores === 'object') {
                    localSt.termsScores = localSt.termsScores || {};
                    Object.keys(cloudSt.termsScores).forEach(k => {
                      if ((!localSt.termsScores[k] || localSt.termsScores[k] === 0) && cloudSt.termsScores[k] > 0) {
                        localSt.termsScores[k] = cloudSt.termsScores[k];
                        hasChanges = true;
                      }
                    });
                  }
                }
              });
            }

            if (cloudTimestamp > 0 && cloudTimestamp > this._lastModified) {
              this._lastModified = cloudTimestamp;
            }
            this._ensureStudentFields();
            if (typeof localStorage !== 'undefined') {
              try {
                const serialized = JSON.stringify(this._cache);
                localStorage.setItem(STORAGE_KEY, serialized);
                localStorage.setItem(STORAGE_KEY + '_LAST_MODIFIED', String(this._lastModified));
                localStorage.setItem('SMILE_KIDS_MASTER_DATABASE_2026', serialized);
                localStorage.setItem('smilekids_school_v6', serialized);
                localStorage.setItem('smile_kids_students_v7_custom', serialized);
              } catch(e) {}
            }
            this._setSyncStatus('online', this._cache.length + ' طالب');
            if (hasChanges) {
              this._notifyListeners('cloud_pull');
            }
            if (callback) callback({ success: true, count: this._cache.length });
            return;
          }
        }
        this._setSyncStatus('offline', 'لم يتم استرجاع بيانات');
      } catch(err) {
        console.warn('Google Cloud syncFromCloud error (working offline):', err);
        this._setSyncStatus('offline', err.message);
      }
    },

    syncToCloud: async function(options) {
      if (!this.CLOUD_API_URL || typeof fetch === 'undefined') return;
      options = options || {};

      // If debounced timer is pending and instant is not requested, handle cleanly
      if (options.instant && this._syncDebounceTimer) {
        clearTimeout(this._syncDebounceTimer);
        this._syncDebounceTimer = null;
      }

      // Build POST URL with query param authKey
      let postUrl = this.CLOUD_API_URL;
      try {
        const u = new URL(this.CLOUD_API_URL);
        u.searchParams.set('authKey', this.AUTH_KEY);
        postUrl = u.toString();
      } catch(e) {
        const sep = postUrl.includes('?') ? '&' : '?';
        postUrl += `${sep}authKey=${encodeURIComponent(this.AUTH_KEY)}`;
      }

      this._isSyncingToCloud = true;
      this._setSyncStatus('syncing');

      try {
        const now = Date.now();
        if (!this._lastModified || this._lastModified < now) {
          this._lastModified = now;
        }

        const teacherSession = this.getActiveTeacherSession();
        const action = options.action || 'full_backup';

        let payload = {
          authKey: this.AUTH_KEY,
          action: action,
          teacherId: options.teacherId || (teacherSession ? teacherSession.teacherId : 'system'),
          teacherName: options.teacherName || (teacherSession ? teacherSession.teacherName : 'المعلمة / النظام'),
          timestamp: new Date().toISOString()
        };

        if (action === 'sync_grades') {
          payload.studentId = options.studentId;
          payload.subjectId = options.subjectId;
          payload.periodKey = options.periodKey;
          payload.score = options.score;
          payload.maxScore = options.maxScore;
          payload.patch = options.patch;
          payload.updates = options.updates;
        } else if (action === 'sync_attendance') {
          payload.studentId = options.studentId;
          payload.status = options.status;
          payload.note = options.note;
          payload.dateStr = options.dateStr;
          payload.periodNum = options.periodNum;
          payload.records = options.records;
          payload.classBadge = options.classBadge;
        }

        // Always include master payload and database_info for backward compatibility and data preservation
        payload.database_info = {
          name: this.DATABASE_NAME,
          version: this.VERSION,
          last_modified: this._lastModified,
          exported_at: new Date(this._lastModified).toISOString(),
          total_students: this.getAllStudents().length
        };
        payload.students = this.getAllStudents().map(s => enforceCanonicalStudent(s));

        const resp = await fetch(postUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(payload)
        });

        let res = null;
        try {
          res = await resp.json();
        } catch(pe) {
          console.warn('Non-JSON response from cloud sync:', pe);
        }

        if (res && res.success) {
          this._setSyncStatus('online', 'متصل بالسحابة (Google Cloud 🟢)');
        } else {
          this._setSyncStatus('online', 'تم الحفظ في Google Drive');
        }
        return res || { success: true };
      } catch(err) {
        console.warn('Google Cloud syncToCloud error:', err);
        this._setSyncStatus('offline', err.message);
        return { success: false, error: err.message };
      } finally {
        this._isSyncingToCloud = false;
      }
    },

    _setupStorageListener: function() {
      if (typeof window === 'undefined') return;

      // 1. BroadcastChannel for instant real-time synchronization between open pages/tabs
      if (typeof BroadcastChannel !== 'undefined') {
        try {
          this._bc = new BroadcastChannel('smile_kids_shared_channel');
          this._bc.onmessage = (event) => {
            if (event.data && event.data.type === 'DB_UPDATED' && Array.isArray(event.data.data)) {
              this._cache = event.data.data;
              this._lastModified = event.data.timestamp || Date.now();
              this._ensureStudentFields();
              this._notifyListeners('broadcast_sync');
            }
          };
        } catch(e) {
          console.warn('BroadcastChannel initialization error:', e);
        }
      }

      // 2. Storage event listener fallback (cross-origin / different window instances)
      if (window.addEventListener) {
        window.addEventListener('storage', (e) => {
          if ((e.key === STORAGE_KEY || e.key === 'smilekids_school_v6' || e.key === 'SMILE_KIDS_MASTER_DATABASE_2026') && e.newValue) {
            try {
              const incoming = JSON.parse(e.newValue);
              if (Array.isArray(incoming) && incoming.length > 0) {
                this._cache = incoming;
                this._ensureStudentFields();
                this._notifyListeners('remote_storage_sync');
              }
            } catch(err) {
              console.error('Remote storage sync error:', err);
            }
          }
        });
      }
    },

    subscribe: function(callback) {
      if (typeof callback === 'function') {
        this._listeners.push(callback);
      }
      return () => {
        this._listeners = this._listeners.filter(cb => cb !== callback);
      };
    },

    _notifyListeners: function(trigger) {
      const data = this.getAllStudents();
      this._listeners.forEach(cb => {
        try {
          cb(data, trigger);
        } catch(e) {
          console.error('Error in DB subscriber:', e);
        }
      });
      if (typeof window !== 'undefined' && window.dispatchEvent) {
        window.dispatchEvent(new CustomEvent('smilekids_db_updated', {
          detail: { total: data.length, trigger: trigger }
        }));
      }
    },

    save: function() {
      if (!this._cache) return;
      this._lastModified = Date.now();
      const serialized = JSON.stringify(this._cache);
      if (typeof localStorage !== 'undefined') {
        try {
          localStorage.setItem(STORAGE_KEY, serialized);
          localStorage.setItem(STORAGE_KEY + '_LAST_MODIFIED', String(this._lastModified));
          // Keep all legacy and sister storage keys synchronized
          localStorage.setItem('SMILE_KIDS_MASTER_DATABASE_2026', serialized);
          localStorage.setItem('smilekids_school_v6', serialized);
          localStorage.setItem('smile_kids_students_v7_custom', serialized);
          localStorage.setItem('smile_kids_students', serialized);
        } catch(e) {
          console.warn('DB Save failed:', e);
        }
      }

      // Instant cross-page notification via BroadcastChannel
      if (this._bc) {
        try {
          this._bc.postMessage({
            type: 'DB_UPDATED',
            timestamp: this._lastModified,
            data: this._cache
          });
        } catch(err) {
          console.warn('BroadcastChannel postMessage error:', err);
        }
      }

      this._notifyListeners('local_save');

      // Trigger debounced cloud sync to Google Drive
      if (this._syncDebounceTimer) clearTimeout(this._syncDebounceTimer);
      this._syncDebounceTimer = setTimeout(() => {
        this.syncToCloud();
      }, 500);

      // Trigger debounced cloud sync to Firebase Firestore
      if (typeof window !== 'undefined' && window.SmileKidsFirebase && window.SmileKidsFirebase.canUseFirestore()) {
        if (this._fbDebounceTimer) clearTimeout(this._fbDebounceTimer);
        this._fbDebounceTimer = setTimeout(() => {
          this.syncToFirestore();
        }, 600);
      }
    },

    getAllStudents: function() {
      if (!this._cache) this.init();
      return this._cache;
    },

    getStudentsByGrade: function(grade, track) {
      const all = this.getAllStudents();
      const g = parseInt(grade);
      return all.filter(s => {
        const matchGrade = (isNaN(g) || grade === 'all' || s.grade === g);
        const matchTrack = (!track || track === 'all' || s.track === track);
        return matchGrade && matchTrack;
      });
    },

    getStudentById: function(id) {
      return this.getAllStudents().find(s => s.id === id) || null;
    },

    loadStudentsFromCloud: function(remoteStudents) {
      if (!Array.isArray(remoteStudents) || remoteStudents.length === 0) return this.getAllStudents();
      if (!this._cache) this._cache = this.getAllStudents();
      const localMap = new Map();
      this._cache.forEach(s => localMap.set(s.id, s));
      let hasChanges = false;

      remoteStudents.forEach(rem => {
        if (!rem || !rem.id) return;
        if (isStudentBlacklisted(rem) || isCanonicalDeletedStudent(rem)) return;
        const localSt = localMap.get(rem.id);
        if (!localSt) {
          this._cache.push(rem);
          hasChanges = true;
        } else {
          if (rem.enrollmentStatus && localSt.enrollmentStatus !== rem.enrollmentStatus) {
            localSt.enrollmentStatus = rem.enrollmentStatus;
            hasChanges = true;
          }
          if (rem.status && localSt.status !== rem.status) {
            localSt.status = rem.status;
            hasChanges = true;
          }
          // Non-destructive merge of profile and scores
          Object.assign(localSt, rem);
          if (rem.enrollmentStatus) {
            localSt.enrollmentStatus = rem.enrollmentStatus;
          }
          if (rem.subjectScores) {
            localSt.subjectScores = localSt.subjectScores || {};
            Object.keys(rem.subjectScores).forEach(subId => {
              localSt.subjectScores[subId] = Object.assign({}, localSt.subjectScores[subId] || {}, rem.subjectScores[subId]);
            });
          }
          if (rem.termsScores) {
            localSt.termsScores = Object.assign({}, localSt.termsScores || {}, rem.termsScores);
          }
          hasChanges = true;
        }
      });

      this._ensureStudentFields();
      if (hasChanges) {
        this.save();
      }
      return this._cache;
    },

    updateStudent: function(idOrStudent, patchData) {
      const id = typeof idOrStudent === 'object' ? idOrStudent.id : idOrStudent;
      const patch = typeof idOrStudent === 'object' ? idOrStudent : (patchData || {});
      const st = this.getStudentById(id);
      if (!st) return null;

      Object.assign(st, patch);
      if (patch.track) {
        st.track = patch.track;
        st.trackNameAr = patch.track === 'languages' ? 'لغات (Math & Science)' : 'عربي (حساب)';
        st.trackNameEn = patch.track === 'languages' ? 'Languages Track' : 'Arabic Track';
      }
      if (patch.grade) {
        st.grade = parseInt(patch.grade);
        st.gradeNameAr = `الصف ${st.grade}`;
        st.gradeNameEn = `Grade ${st.grade}`;
      }
      this._ensureStudentFields();
      this.save();

      // Instant Cloud Sync for student / grades update (Google Drive)
      this.syncToCloud({
        action: 'sync_grades',
        studentId: id,
        patch: patch,
        instant: true
      });

      // Instant Firestore Sync for student / grades update
      if (typeof window !== 'undefined' && window.SmileKidsFirebase && window.SmileKidsFirebase.canUseFirestore()) {
        window.SmileKidsFirebase.saveStudentToFirestore(st).catch(e => {
          console.warn('[SmileKids DB] Firestore saveStudent error:', e);
        });
        if (patch.termsScores || patch.subjectScores || patch.score !== undefined) {
          window.SmileKidsFirebase.saveGradeToFirestore({
            studentId: id,
            subjectId: patch.subjectId,
            periodKey: patch.periodKey,
            score: patch.score,
            patch: patch,
            termsScores: st.termsScores,
            subjectScores: st.subjectScores
          }).catch(e => {
            console.warn('[SmileKids DB] Firestore saveGrade error:', e);
          });
        }
      }

      return st;
    },

    addStudent: function(studentData) {
      if (!studentData || isStudentBlacklisted(studentData)) return null;

      const grade = parseInt(studentData.grade) || 1;
      const track = studentData.track || 'arabic';
      const trackCode = track === 'languages' ? 'EN' : 'AR';
      const cleanName = (studentData.nameAr || '').trim();

      // Debounce & duplicate protection: ignore duplicate submits within 6 seconds
      const now = Date.now();
      if (this._lastAdded && this._lastAdded.name === cleanName && this._lastAdded.grade === grade && (now - this._lastAdded.time < 6000)) {
        console.warn('[SmileKids DB] منع إضافة طالب مكرر خلال نافذة الحماية (Debounce)');
        return this.getAllStudents().find(s => s.nameAr && s.nameAr.trim() === cleanName && s.grade === grade) || studentData;
      }
      this._lastAdded = { name: cleanName, grade: grade, time: now };

      if (!studentData.id) {
        studentData.id = 'SK-G' + grade + '-' + trackCode + '-' + Date.now().toString().slice(-4);
      }
      studentData.grade = grade;
      studentData.track = track;
      if (!studentData.attendanceRecords) studentData.attendanceRecords = {};
      if (!studentData.attendanceNotes) studentData.attendanceNotes = {};
      if (!studentData.termsScores) {
        studentData.termsScores = { t1_m1: 20, t1_m2: 20, t1_exam: 30, t1_total: 100, t2_m1: 20, t2_m2: 20, t2_exam: 30, t2_total: 100, annual_total: 100 };
      }
      this.getAllStudents().push(studentData);
      this.save();

      // Instant Cloud Sync to Google Drive
      this.syncToCloud({
        action: 'full_backup',
        instant: true
      });

      // Instant Firestore Sync for new student
      if (typeof window !== 'undefined' && window.SmileKidsFirebase && window.SmileKidsFirebase.canUseFirestore()) {
        window.SmileKidsFirebase.saveStudentToFirestore(studentData).catch(e => {
          console.warn('[SmileKids DB] Firestore addStudent error:', e);
        });
      }

      return studentData;
    },

    PENDING_ADMISSIONS_KEY: 'SMILE_KIDS_PENDING_ADMISSIONS_2026',

    getPendingAdmissions: function() {
      if (typeof localStorage === 'undefined') return [];
      try {
        const val = localStorage.getItem(this.PENDING_ADMISSIONS_KEY);
        return val ? JSON.parse(val) : [];
      } catch(e) {
        return [];
      }
    },

    savePendingAdmissions: function(list) {
      if (typeof localStorage === 'undefined') return;
      try {
        localStorage.setItem(this.PENDING_ADMISSIONS_KEY, JSON.stringify(list));
      } catch(e) {}
    },

    addPendingAdmission: function(applicantData) {
      const list = this.getPendingAdmissions();
      const requestId = 'REQ-' + new Date().getFullYear() + '-' + Date.now().toString().slice(-4);
      const req = Object.assign({}, applicantData, {
        requestId: requestId,
        status: 'pending',
        submittedAt: new Date().toISOString()
      });
      list.unshift(req);
      this.savePendingAdmissions(list);
      return req;
    },

    approveAdmission: function(requestId) {
      const list = this.getPendingAdmissions();
      const item = list.find(r => r.requestId === requestId);
      if (!item) return { success: false, error: 'الطلب غير موجود' };
      if (item.status === 'approved') return { success: false, error: 'تم اعتماد هذا الطلب مسبقاً' };

      const studentData = {
        grade: parseInt(item.grade) || 1,
        track: item.track || 'arabic',
        nameAr: item.nameAr,
        nameEn: item.nameEn,
        parentName: item.parentName || '',
        parentPhone: item.parentPhone || item.phone || '',
        parentWhatsApp: item.parentWhatsApp || item.whatsapp || '',
        parentEmail: item.parentEmail || item.email || '',
        email: item.parentEmail || item.email || '',
        notes: item.notes || '',
        photo: item.photo || null,
        gender: item.gender || (item.nameAr && item.nameAr.match(/(ة|ه|فاطمة|مريم|نور|تاليا|إيلاف|فيروز|سارة|جنى|ملك|حبيبة)$/i) ? 'female' : 'male')
      };

      const added = this.addStudent(studentData);
      item.status = 'approved';
      item.approvedStudentId = added.id;
      item.approvedAt = new Date().toISOString();
      this.savePendingAdmissions(list);

      return { success: true, student: added, request: item };
    },

    rejectAdmission: function(requestId, reason) {
      const list = this.getPendingAdmissions();
      const item = list.find(r => r.requestId === requestId);
      if (!item) return false;
      item.status = 'rejected';
      item.rejectReason = reason || 'مرفوض من الإدارة';
      item.rejectedAt = new Date().toISOString();
      this.savePendingAdmissions(list);
      return true;
    },

    deleteStudent: function(id) {
      if (!id) return null;
      if (!this._deletedIds) this._deletedIds = new Set();
      this._deletedIds.add(id);

      if (typeof localStorage !== 'undefined') {
        try {
          localStorage.setItem(this.DELETED_IDS_KEY, JSON.stringify(Array.from(this._deletedIds)));
        } catch(e) {}
      }

      const idx = this.getAllStudents().findIndex(s => s.id === id);
      let removed = null;
      if (idx !== -1) {
        removed = this.getAllStudents().splice(idx, 1)[0];
        this.save();

        // Instant Cloud Sync to Google Drive with deleted IDs
        this.syncToCloud({
          action: 'full_backup',
          instant: true,
          deleted_student_ids: Array.from(this._deletedIds)
        });

        // Instant Firestore Sync for deleted student
        if (typeof window !== 'undefined' && window.SmileKidsFirebase && window.SmileKidsFirebase.canUseFirestore()) {
          window.SmileKidsFirebase.db.collection('students').doc(String(id)).delete().catch(e => {
            console.warn('[SmileKids DB] Firestore deleteStudent error:', e);
          });
        }

        return removed;
      }
      return null;
    },

    getAttendance: function(studentId, dateStr) {
      const st = this.getStudentById(studentId);
      if (!st || !st.attendanceRecords) return 'present';
      return st.attendanceRecords[dateStr] || 'present';
    },

    setAttendance: function(studentId, dateStr, status, note) {
      const st = this.getStudentById(studentId);
      if (!st) return false;
      if (!st.attendanceRecords) st.attendanceRecords = {};
      if (status !== undefined && status !== null) {
        st.attendanceRecords[dateStr] = status;
      }
      if (note !== undefined && note !== null) {
        if (!st.attendanceNotes) st.attendanceNotes = {};
        st.attendanceNotes[dateStr] = note;
      }
      this.save();

      // Instant Cloud Sync for single attendance record (Google Drive)
      this.syncToCloud({
        action: 'sync_attendance',
        studentId: studentId,
        dateStr: dateStr,
        status: status,
        note: note,
        instant: true
      });

      // Instant Firestore Sync for single attendance record
      if (typeof window !== 'undefined' && window.SmileKidsFirebase && window.SmileKidsFirebase.canUseFirestore()) {
        window.SmileKidsFirebase.saveAttendanceToFirestore({
          studentId: studentId,
          dateStr: dateStr,
          status: status,
          note: note
        }).catch(e => {
          console.warn('[SmileKids DB] Firestore saveAttendance error:', e);
        });
      }

      return true;
    },

    setBatchAttendance: function(studentIds, dateStr, status) {
      const all = this.getAllStudents();
      const recordsMap = {};
      studentIds.forEach(id => {
        const st = all.find(s => s.id === id);
        if (st) {
          if (!st.attendanceRecords) st.attendanceRecords = {};
          st.attendanceRecords[dateStr] = status;
          recordsMap[id] = status;
        }
      });
      this.save();

      // Instant Cloud Sync for batch attendance record (Google Drive)
      this.syncToCloud({
        action: 'sync_attendance',
        dateStr: dateStr,
        records: recordsMap,
        instant: true
      });

      // Instant Firestore Sync for batch attendance record
      if (typeof window !== 'undefined' && window.SmileKidsFirebase && window.SmileKidsFirebase.canUseFirestore()) {
        window.SmileKidsFirebase.saveAttendanceToFirestore({
          studentIds: studentIds,
          dateStr: dateStr,
          status: status,
          isBatch: true,
          records: recordsMap
        }).catch(e => {
          console.warn('[SmileKids DB] Firestore saveBatchAttendance error:', e);
        });
      }
    },

    syncToFirestore: async function() {
      if (typeof window === 'undefined' || !window.SmileKidsFirebase || !window.SmileKidsFirebase.canUseFirestore()) {
        return { success: false, fallback: true, message: 'Firestore غير متصل أو يعمل محلياً' };
      }
      try {
        const all = this.getAllStudents();
        return await window.SmileKidsFirebase.batchSaveStudents(all);
      } catch(err) {
        console.warn('[SmileKids DB] خطأ أثناء مزامنة Firestore المجمعة:', err);
        return { success: false, error: err.message };
      }
    },

    saveTimetableToFirestore: async function(teacherId, scheduleData) {
      if (typeof window !== 'undefined' && window.SmileKidsFirebase && window.SmileKidsFirebase.canUseFirestore()) {
        return await window.SmileKidsFirebase.saveTimetableToFirestore(teacherId, scheduleData);
      }
      return { success: false, fallback: true };
    },

    resetToDefault: function() {
      this._cache = this._clone(MASTER_INITIAL_STUDENTS);
      this._ensureStudentFields();
      this.save();
      return this._cache;
    },

    exportJSON: function() {
      const payload = {
        database_info: {
          name: this.DATABASE_NAME,
          code: this.DATABASE_CODE,
          version: this.VERSION,
          storage_key: this.STORAGE_KEY,
          file_name: this.FILE_NAME_JSON,
          exported_at: new Date().toISOString(),
          total_students: this.getAllStudents().length
        },
        students: this.getAllStudents()
      };
      return JSON.stringify(payload, null, 2);
    },

    downloadJSONBackup: function() {
      const jsonStr = this.exportJSON();
      const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'smile_kids_database_backup_' + new Date().toISOString().split('T')[0] + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },

    importJSON: function(jsonStr) {
      try {
        const parsed = JSON.parse(jsonStr);
        let list = null;
        if (Array.isArray(parsed)) {
          list = parsed;
        } else if (parsed && Array.isArray(parsed.students)) {
          list = parsed.students;
        }
        if (list && list.length > 0) {
          this._cache = list;
          this._ensureStudentFields();
          this.save();
          return { success: true, count: list.length };
        }
        return { success: false, error: 'الملف غير صالح أو لا يحتوي على سجلات طلاب' };
      } catch(err) {
        return { success: false, error: err.message };
      }
    },

    _clone: function(obj) {
      return JSON.parse(JSON.stringify(obj));
    },

    _ensureStudentFields: function() {
      if (!this._cache) return;
      this._cache = this._cache.filter(s => !isCanonicalDeletedStudent(s));
      this._cache.forEach(s => {
        enforceCanonicalStudent(s);
        if (!s.enrollmentStatus) s.enrollmentStatus = (s.status === 'withdrawn' ? 'withdrawn' : 'active');
        if (!s.attendanceRecords) s.attendanceRecords = {};
        if (!s.attendanceNotes) s.attendanceNotes = {};
        if (!s.subjectScores) s.subjectScores = {};
        if (!s.termsScores) {
          s.termsScores = {
            t1_m1: null,
            t1_m2: null,
            t1_tasks: null,
            t1_exam: null,
            t1_total: null,
            t2_m1: null,
            t2_m2: null,
            t2_tasks: null,
            t2_exam: null,
            t2_total: null,
            annual_total: null
          };
        }
      });
    },

    _tryMigrateLegacy: function() {
      if (typeof localStorage === 'undefined') return null;
      for (const k of LEGACY_STUDENT_KEYS) {
        try {
          const val = localStorage.getItem(k);
          if (val) {
            const list = JSON.parse(val);
            if (Array.isArray(list) && list.length > 0) {
              try {
                const attVal = localStorage.getItem(LEGACY_ATT_KEY);
                if (attVal) {
                  const attMap = JSON.parse(attVal);
                  list.forEach(st => {
                    if (attMap[st.id]) {
                      st.attendanceRecords = Object.assign(st.attendanceRecords || {}, attMap[st.id]);
                    }
                  });
                }
              } catch(e) {}
              return list;
            }
          }
        } catch(e) {}
      }
      return null;
    }
  };

  if (typeof window !== 'undefined') {
    window.SmileKidsDB = SmileKidsDB.init();
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = SmileKidsDB;
  }
})(typeof window !== 'undefined' ? window : this);
