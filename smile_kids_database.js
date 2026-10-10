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

  const STORAGE_KEY = 'SMILE_KIDS_MASTER_DATABASE_2026_V5';
  const LEGACY_STUDENT_KEYS = ['SMILE_KIDS_MASTER_DATABASE_2026_V3', 'SMILE_KIDS_MASTER_DATABASE_2026_V2', 'SMILE_KIDS_MASTER_DATABASE_2026', 'smile_kids_students_v7_custom', 'smilekids_school_v6'];
  const LEGACY_ATT_KEY = 'smile_kids_attendance_v7_data';

  // Master Initial Verified Students (147 Students across 9 Grades)
  const MASTER_INITIAL_STUDENTS = [
  {
    "id": "SK-G1-AR-001",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "3051",
    "password": "3051"
  },
  {
    "id": "SK-G1-AR-002",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "6334",
    "password": "6334"
  },
  {
    "id": "SK-G1-AR-003",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9333",
    "password": "9333"
  },
  {
    "id": "SK-G1-AR-004",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9485",
    "password": "9485"
  },
  {
    "id": "SK-G1-AR-005",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "phone": "",
    "notes": "",
    "subjectScores": {},
    "pin": "2781",
    "password": "2781"
  },
  {
    "id": "SK-G1-AR-006",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "4758",
    "password": "4758"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "7991",
    "password": "7991"
  },
  {
    "id": "SK-G1-LN-001",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "سارة رضا عبد المقصود",
    "nameEn": "Sara Reda Abdel Maksoud",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9142",
    "password": "9142"
  },
  {
    "id": "SK-G1-LN-002",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "كنده السيد علي",
    "nameEn": "Kenda Elsayed Ali",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8326",
    "password": "8326"
  },
  {
    "id": "SK-G1-LN-003",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ريحانة عبد الرحمن عاطف",
    "nameEn": "Rihana Abdel Rahman Atef",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "5031",
    "password": "5031"
  },
  {
    "id": "SK-G1-LN-004",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "لي لي أحمد محمد يسرى",
    "nameEn": "Lili Ahmed Mohamed Yousry",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "phone": "",
    "notes": "",
    "subjectScores": {},
    "pin": "1141",
    "password": "1141"
  },
  {
    "id": "SK-G1-LN-005",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "حمزة إبراهيم زيدان",
    "nameEn": "Hamza Ibrahim Zeidan",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "2422",
    "password": "2422"
  },
  {
    "id": "SK-G1-LN-006",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "حمزة محمد البنا",
    "nameEn": "Hamza Mohamed Elbanna",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "2914",
    "password": "2914"
  },
  {
    "id": "SK-G1-LN-007",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مروان أشرف رمضان",
    "nameEn": "Marwan Ashraf Ramadan",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "5806",
    "password": "5806"
  },
  {
    "id": "SK-G1-LN-008",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "يوسف عمرو محمد",
    "nameEn": "Youssef Amr Mohamed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "2706",
    "password": "2706"
  },
  {
    "id": "SK-G1-LN-009",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "علي محمد علاء الدين",
    "nameEn": "Ali Mohamed Alaa El-Din",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8467",
    "password": "8467"
  },
  {
    "id": "SK-G1-LN-010",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "زين الدين محمود عبد الحميد",
    "nameEn": "Zein El-Din Mahmoud Abdel Hamid",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "1288",
    "password": "1288"
  },
  {
    "id": "SK-G2-AR-001",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "مهدي أحمد محمد",
    "nameEn": "Mahdi Ahmed Mohamed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9132",
    "password": "9132"
  },
  {
    "id": "SK-G2-AR-002",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "6248",
    "password": "6248"
  },
  {
    "id": "SK-G2-AR-003",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "4544",
    "password": "4544"
  },
  {
    "id": "SK-G2-AR-004",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 22,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T08:19:25.280Z"
          }
        },
        "sep": 22
      }
    },
    "pin": "7608",
    "password": "7608"
  },
  {
    "id": "SK-G2-AR-005",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 25,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T08:25:16.314Z"
          }
        },
        "sep": 25
      }
    },
    "pin": "5220",
    "password": "5220"
  },
  {
    "id": "SK-G2-AR-006",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "phone": "",
    "notes": "",
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 23,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T08:25:23.128Z"
          }
        },
        "sep": 23
      }
    },
    "pin": "6796",
    "password": "6796"
  },
  {
    "id": "SK-G2-AR-007",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "إيلين أحمد زيران",
    "nameEn": "Ellen Ahmed Zayran",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "arabic": {
        "subjectId": "arabic",
        "scores": {
          "t1_sep": {
            "score": 18,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T08:26:16.197Z"
          }
        },
        "sep": 18
      }
    },
    "pin": "6943",
    "password": "6943"
  },
  {
    "id": "SK-G2-AR-008",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "7266",
    "password": "7266"
  },
  {
    "id": "SK-G2-LN-001",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "نوح عبد الحميد سمير",
    "nameEn": "Noah Abdel Hamid Samir",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9514",
    "password": "9514"
  },
  {
    "id": "SK-G2-LN-002",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "طارق السيد عبد الغني",
    "nameEn": "Tarek Elsayed Abdel Ghani",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "2350",
    "password": "2350"
  },
  {
    "id": "SK-G2-LN-003",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "سليم محمد السعيد",
    "nameEn": "Selim Mohamed El-Saeed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "6677",
    "password": "6677"
  },
  {
    "id": "SK-G2-LN-004",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "معتز محمد عطاها",
    "nameEn": "Moataz Mohamed Ataha",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "2569",
    "password": "2569"
  },
  {
    "id": "SK-G2-LN-005",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "راشد عبد الكريم بشير",
    "nameEn": "Rashed Abdel Karim Basheer",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "5886",
    "password": "5886"
  },
  {
    "id": "SK-G2-LN-006",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "أنس أحمد محمد",
    "nameEn": "Anas Ahmed Mohamed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "5812",
    "password": "5812"
  },
  {
    "id": "SK-G2-LN-007",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "عصام محمد عصام",
    "nameEn": "Essam Mohamed Essam",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8594",
    "password": "8594"
  },
  {
    "id": "SK-G2-LN-008",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مالك أحمد عبد المؤمن",
    "nameEn": "Malek Ahmed Abdel Moemen",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "3408",
    "password": "3408"
  },
  {
    "id": "SK-G2-LN-010",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "arabic",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "فيروز محمد النجار",
    "nameEn": "Fayrouz Mohamed El-Naggar",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "6162",
    "password": "6162"
  },
  {
    "id": "SK-G2-LN-012",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ليا هيثم رشوان",
    "nameEn": "Lia Haitham Rashwan",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "1505",
    "password": "1505"
  },
  {
    "id": "SK-G2-LN-014",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "حبيبة أحمد حسين",
    "nameEn": "Habiba Ahmed Hussein",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "7143",
    "password": "7143"
  },
  {
    "id": "SK-G2-LN-015",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "تالا هشام محمد",
    "nameEn": "Tala Hesham Mohamed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "7056",
    "password": "7056"
  },
  {
    "id": "SK-G2-LN-016",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "زينة عبد الله سيد",
    "nameEn": "Zeina Abdullah Sayed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8654",
    "password": "8654"
  },
  {
    "id": "SK-G2-LN-017",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "سجى جمال إسماعيل",
    "nameEn": "Saja Gamal Ismail",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8017",
    "password": "8017"
  },
  {
    "id": "SK-G2-LN-018",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "جاد محمد عباس",
    "nameEn": "Jad Mohamed Abbas",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "2585",
    "password": "2585"
  },
  {
    "id": "SK-G2-LN-019",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "إيلين أحمد محمود",
    "nameEn": "Ellen Ahmed Mahmoud",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "7633",
    "password": "7633"
  },
  {
    "id": "SK-G3-AR-001",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9266",
    "password": "9266"
  },
  {
    "id": "SK-G3-AR-002",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "أرين أشرف مجدى",
    "nameEn": "Areen Ashraf Magdy",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "3007",
    "password": "3007"
  },
  {
    "id": "SK-G3-AR-003",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8070",
    "password": "8070"
  },
  {
    "id": "SK-G3-AR-004",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9396",
    "password": "9396"
  },
  {
    "id": "SK-G3-AR-005",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9145",
    "password": "9145"
  },
  {
    "id": "SK-G3-LN-001",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "لين محمد عبد الحليم",
    "nameEn": "Leen Mohamed Abdel Halim",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "7623",
    "password": "7623"
  },
  {
    "id": "SK-G3-LN-002",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "آسية أحمد مصطفى",
    "nameEn": "Asiya Ahmed Mostafa",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9695",
    "password": "9695"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "5337",
    "password": "5337"
  },
  {
    "id": "SK-G3-LN-004",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ليان سامح بسيوني",
    "nameEn": "Layan Sameh Basiouny",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "7980",
    "password": "7980"
  },
  {
    "id": "SK-G3-LN-005",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8951",
    "password": "8951"
  },
  {
    "id": "SK-G3-LN-006",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "آدم محمد صبحي",
    "nameEn": "Adam Mohamed Sobhy",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9504",
    "password": "9504"
  },
  {
    "id": "SK-G3-LN-007",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "زين سليمان محمد",
    "nameEn": "Zein Soliman Mohamed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9586",
    "password": "9586"
  },
  {
    "id": "SK-G3-LN-008",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "آدم خالد عبد الله",
    "nameEn": "Adam Khaled Abdullah",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "1515",
    "password": "1515"
  },
  {
    "id": "SK-G3-LN-009",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "أدهم مصطفى وحيد",
    "nameEn": "Adham Mostafa Waheed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "4778",
    "password": "4778"
  },
  {
    "id": "SK-G3-LN-010",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "يوسف محمد عبد اللطيف",
    "nameEn": "Youssef Mohamed Abdel Latif",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "3213",
    "password": "3213"
  },
  {
    "id": "SK-G3-LN-011",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "عبد الرحمن خالد رجب",
    "nameEn": "Abdel Rahman Khaled Ragab",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "1900",
    "password": "1900"
  },
  {
    "id": "SK-G3-LN-012",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9672",
    "password": "9672"
  },
  {
    "id": "SK-G3-LN-013",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "زين محمد نبيل نوار",
    "nameEn": "Zein Mohamed Nabil Nawar",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "2780",
    "password": "2780"
  },
  {
    "id": "SK-G3-LN-014",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "رائد عبد الكريم بشير",
    "nameEn": "Raed Abdel Karim Basheer",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8135",
    "password": "8135"
  },
  {
    "id": "SK-G3-LN-015",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8801",
    "password": "8801"
  },
  {
    "id": "SK-G3-LN-016",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "3433",
    "password": "3433"
  },
  {
    "id": "SK-G3-LN-017",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "ريمان جمال الحسين",
    "nameEn": "Reman Gamal El-Hussein",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8998",
    "password": "8998"
  },
  {
    "id": "SK-G3-LN-018",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مصطفى عبد السلام مصطفى",
    "nameEn": "Mostafa Abdel Salam Mostafa",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "4850",
    "password": "4850"
  },
  {
    "id": "SK-G4-AR-001",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "3099",
    "password": "3099"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8584",
    "password": "8584"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8790",
    "password": "8790"
  },
  {
    "id": "SK-G4-AR-004",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "5212",
    "password": "5212"
  },
  {
    "id": "SK-G4-AR-005",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "7687",
    "password": "7687"
  },
  {
    "id": "SK-G4-AR-006",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "6140",
    "password": "6140"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9323",
    "password": "9323"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8946",
    "password": "8946"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "7685",
    "password": "7685"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8195",
    "password": "8195"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "4418",
    "password": "4418"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "5923",
    "password": "5923"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "5507",
    "password": "5507"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "1251",
    "password": "1251"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "1642",
    "password": "1642"
  },
  {
    "id": "SK-G4-LN-010",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "ميرا محمد عطاها",
    "nameEn": "Mira Mohamed Ataha",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "3555",
    "password": "3555"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8607",
    "password": "8607"
  },
  {
    "id": "SK-G4-LN-012",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "لوجين وليد محمد",
    "nameEn": "Lojain Walid Mohamed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9667",
    "password": "9667"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9120",
    "password": "9120"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "subjectScores": {},
    "sampleScores": {},
    "pin": "6997",
    "password": "6997"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "sampleScores": {},
    "pin": "4374",
    "password": "4374"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "sampleScores": {},
    "pin": "5361",
    "password": "5361"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "sampleScores": {},
    "pin": "9055",
    "password": "9055"
  },
  {
    "id": "SK-G5-AR-001",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T11:59:30.960Z"
          }
        },
        "sep": 29
      }
    },
    "pin": "8745",
    "password": "8745"
  },
  {
    "id": "SK-G5-AR-002",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T11:58:32.417Z"
          }
        },
        "sep": 29
      }
    },
    "pin": "9476",
    "password": "9476"
  },
  {
    "id": "SK-G5-AR-003",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9245",
    "password": "9245"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8214",
    "password": "8214"
  },
  {
    "id": "SK-G5-AR-005",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T11:58:46.416Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "1650",
    "password": "1650"
  },
  {
    "id": "SK-G5-AR-006",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T11:59:36.764Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "5852",
    "password": "5852"
  },
  {
    "id": "SK-G5-AR-007",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T11:58:38.500Z"
          }
        },
        "sep": 29
      }
    },
    "pin": "6288",
    "password": "6288"
  },
  {
    "id": "SK-G5-AR-008",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:00:00.429Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "8598",
    "password": "8598"
  },
  {
    "id": "SK-G5-AR-009",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 27,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T11:57:10.371Z"
          }
        },
        "sep": 27
      }
    },
    "pin": "2711",
    "password": "2711"
  },
  {
    "id": "SK-G5-AR-010",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T11:57:58.384Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "8283",
    "password": "8283"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T11:59:04.621Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "9540",
    "password": "9540"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T11:59:51.312Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "5340",
    "password": "5340"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T11:59:44.682Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "8520",
    "password": "8520"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T11:57:48.360Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "4099",
    "password": "4099"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T11:58:13.980Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "8075",
    "password": "8075"
  },
  {
    "id": "SK-G5-LN-006",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مليكة محمد نوار",
    "nameEn": "Malika Mohamed Nawar",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T11:58:56.993Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "8950",
    "password": "8950"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T11:59:15.114Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "2153",
    "password": "2153"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T11:58:19.386Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "5465",
    "password": "5465"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T11:59:20.995Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "7164",
    "password": "7164"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "2683",
    "password": "2683"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "4288",
    "password": "4288"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "7838",
    "password": "7838"
  },
  {
    "id": "SK-G6-AR-004",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "أسيل حمد أحمد",
    "nameEn": "Aseel Hamad Ahmed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "3497",
    "password": "3497"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8462",
    "password": "8462"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "1329",
    "password": "1329"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "2610",
    "password": "2610"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "1103",
    "password": "1103"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8492",
    "password": "8492"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "2460",
    "password": "2460"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "4357",
    "password": "4357"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "5160",
    "password": "5160"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "3079",
    "password": "3079"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "1831",
    "password": "1831"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "5499",
    "password": "5499"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "6953",
    "password": "6953"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T10:02:40.048Z"
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:06:10.020Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "3635",
    "password": "3635"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T09:59:21.519Z"
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:07:24.912Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "1184",
    "password": "1184"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T09:59:32.835Z"
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:02:55.769Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "6235",
    "password": "6235"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T10:01:17.819Z"
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:06:41.332Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "9160",
    "password": "9160"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T10:00:38.938Z"
          }
        },
        "sep": 29
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 29,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:07:20.735Z"
          }
        },
        "sep": 29
      }
    },
    "pin": "3309",
    "password": "3309"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T10:03:22.747Z"
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:03:01.216Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "4752",
    "password": "4752"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T10:00:55.650Z"
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:06:46.045Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "8849",
    "password": "8849"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T10:03:28.450Z"
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:07:09.265Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "3249",
    "password": "3249"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T10:02:16.455Z"
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:06:18.015Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "9369",
    "password": "9369"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T10:03:32.251Z"
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:03:07.316Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "5862",
    "password": "5862"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T09:59:44.130Z"
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:07:16.297Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "2483",
    "password": "2483"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T10:01:41.400Z"
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:06:31.987Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "7944",
    "password": "7944"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:07:42.990Z"
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:07:02.203Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "3723",
    "password": "3723"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T10:01:58.761Z"
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:06:25.185Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "3317",
    "password": "3317"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "6113",
    "password": "6113"
  },
  {
    "id": "SK-G8-AR-002",
    "grade": 8,
    "gradeNameAr": "الصف الثاني الإعدادي",
    "gradeNameEn": "Grade 8 (Prep 2)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "سجد محمود منصور",
    "nameEn": "Saged Mahmoud Mansour",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9418",
    "password": "9418"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "7850",
    "password": "7850"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "7496",
    "password": "7496"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "3533",
    "password": "3533"
  },
  {
    "id": "SK-G9-AR-001",
    "grade": 9,
    "gradeNameAr": "الصف الثالث الإعدادي",
    "gradeNameEn": "Grade 9 (Prep 3)",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "ساره محمد عطاها",
    "nameEn": "Sara Mohamed Ataha",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:11:20.317Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "9620",
    "password": "9620"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:11:24.044Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "4322",
    "password": "4322"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "7260",
    "password": "7260"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:10:50.952Z"
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:11:27.639Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "1331",
    "password": "1331"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {
      "english_al": {
        "subjectId": "english_al",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:10:55.236Z"
          }
        },
        "sep": 30
      },
      "english_ol": {
        "subjectId": "english_ol",
        "scores": {
          "t1_sep": {
            "score": 30,
            "maxScore": 30,
            "isRecorded": true,
            "updatedAt": "2026-10-10T12:11:31.250Z"
          }
        },
        "sep": 30
      }
    },
    "pin": "2838",
    "password": "2838"
  },
  {
    "id": "SK-G2-LN-020",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ليان محمود أمين",
    "nameEn": "Layan Mahmoud Amin",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "7479",
    "password": "7479"
  },
  {
    "id": "SK-G2-LN-021",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "محمد أحمد ضاحي",
    "nameEn": "Mohamed Ahmed Dhahi",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "2303",
    "password": "2303"
  },
  {
    "id": "SK-G2-LN-022",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "يزن حسام عطية",
    "nameEn": "Yazan Hossam Atteya",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "1941",
    "password": "1941"
  },
  {
    "id": "SK-G2-LN-023",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ريماس أحمد محمد",
    "nameEn": "Remas Ahmed Mohamed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "6785",
    "password": "6785"
  },
  {
    "id": "SK-G2-LN-024",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "أمنية محمد عبد الرحمن",
    "nameEn": "Omnia Mohamed Abdel Rahman",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "6890",
    "password": "6890"
  },
  {
    "id": "SK-G2-LN-025",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "فريدة محمود إبراهيم",
    "nameEn": "Farida Mahmoud Ibrahim",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "1522",
    "password": "1522"
  },
  {
    "id": "SK-G2-AR-009",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "1519",
    "password": "1519"
  },
  {
    "id": "SK-G1-LN-011",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ليان محمود احمد",
    "nameEn": "Layan Mahmoud Ahmed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9462",
    "password": "9462"
  },
  {
    "id": "SK-G1-LN-012",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "لوجين ياسر محمد",
    "nameEn": "Loujain Yasser Mohamed",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8899",
    "password": "8899"
  },
  {
    "id": "SK-G1-LN-013",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "سيلا محمد صبحي",
    "nameEn": "Sila Mohamed Sobhi",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "6470",
    "password": "6470"
  },
  {
    "id": "SK-G1-LN-014",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "روز احمد فواد",
    "nameEn": "Rose Ahmed Fouad",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "6075",
    "password": "6075"
  },
  {
    "id": "SK-G1-LN-015",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "بسمة محمد ابو فراج",
    "nameEn": "Basma Mohamed Abou Farag",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8475",
    "password": "8475"
  },
  {
    "id": "SK-G1-LN-016",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مليكة محمد رفعت",
    "nameEn": "Malika Mohamed Refaat",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "6441",
    "password": "6441"
  },
  {
    "id": "SK-G1-LN-017",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "لوجين محمد رمضان",
    "nameEn": "Loujain Mohamed Ramadan",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "3088",
    "password": "3088"
  },
  {
    "id": "SK-G1-LN-018",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "أدم عبدالرحمن السيد",
    "nameEn": "Adam Abdel Rahman El-Sayed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9252",
    "password": "9252"
  },
  {
    "id": "SK-G1-LN-019",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "سفيان محمد رمضان",
    "nameEn": "Sofian Mohamed Ramadan",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8744",
    "password": "8744"
  },
  {
    "id": "SK-G1-AR-008",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
    "gradeNameEn": "Grade 1",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "ماريا قطيبه علي",
    "nameEn": "Maria Qutaiba Ali",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "3897",
    "password": "3897"
  },
  {
    "id": "SK-G1-AR-009",
    "grade": 1,
    "gradeNameAr": "الصف الأول الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "3621",
    "password": "3621"
  },
  {
    "id": "SK-G3-LN-019",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مالك محمود ابراهيم",
    "nameEn": "Malek Mahmoud Ibrahim",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "9613",
    "password": "9613"
  },
  {
    "id": "SK-G3-LN-020",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مؤيد أحمد سيد",
    "nameEn": "Moayad Ahmed Sayed",
    "gender": "male",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "4491",
    "password": "4491"
  },
  {
    "id": "SK-G3-LN-021",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ريتال محمد عسل",
    "nameEn": "Retal Mohamed Asal",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8204",
    "password": "8204"
  },
  {
    "id": "SK-G3-LN-022",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "تالين أحمد محمود",
    "nameEn": "Taleen Ahmed Mahmoud",
    "gender": "female",
    "sampleScores": {},
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "6611",
    "password": "6611"
  },
  {
    "id": "SK-G3-AR-006",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "pin": "8617",
    "password": "8617"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "sampleScores": {},
    "pin": "4922",
    "password": "4922"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "sampleScores": {},
    "pin": "2238",
    "password": "2238"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "sampleScores": {},
    "pin": "7639",
    "password": "7639"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "sampleScores": {},
    "pin": "1659",
    "password": "1659"
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
      "t1_m1": null,
      "t1_m2": null,
      "t1_tasks": null,
      "t1_exam": null,
      "t1_total": null,
      "t2_m1": null,
      "t2_m2": null,
      "t2_tasks": null,
      "t2_exam": null,
      "t2_total": null,
      "annual_total": null
    },
    "subjectScores": {},
    "sampleScores": {},
    "pin": "4302",
    "password": "4302"
  }
];

  const SmileKidsDB = {
    DATABASE_NAME: 'قاعدة بيانات مدرسة Smile Kids الموحدة 2025/2026',
    DATABASE_CODE: 'SMILE_KIDS_MASTER_DB',
    VERSION: '2.0.0',
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
        MASTER_INITIAL_STUDENTS.forEach(defSt => {
          if (!existingIds.has(defSt.id) && !this._deletedIds.has(defSt.id)) {
            this._cache.push(this._clone(defSt));
            addedCount++;
          }
        });
        if (addedCount > 0) {
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
                  if (cloudSt.nameEn && cloudSt.nameEn !== localSt.nameEn) {
                    localSt.nameEn = cloudSt.nameEn;
                    hasChanges = true;
                  }
                  if (cloudSt.nameAr && cloudSt.nameAr !== localSt.nameAr) {
                    localSt.nameAr = cloudSt.nameAr;
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
        payload.students = this.getAllStudents();

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
      this._cache.forEach(s => {
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
