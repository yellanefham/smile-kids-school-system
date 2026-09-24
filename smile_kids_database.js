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

  const STORAGE_KEY = 'SMILE_KIDS_MASTER_DATABASE_2026';
  const LEGACY_STUDENT_KEYS = ['smile_kids_students_v7_custom', 'smilekids_school_v6'];
  const LEGACY_ATT_KEY = 'smile_kids_attendance_v7_data';

  // Master Initial Verified Students (131 Students across 9 Grades)
  // Master Initial Verified Students (136 Students across 9 Grades)
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "nameEn": "Egy Ahmed Mostafa",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    },
    "phone": "",
    "notes": ""
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    },
    "phone": "",
    "notes": ""
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    },
    "phone": "",
    "notes": ""
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G2-LN-004",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "معتز محمد طاها",
    "nameEn": "Moataz Mohamed Taha",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G2-LN-009",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "فريد أحمد حمدى",
    "nameEn": "Farid Ahmed Hamdy",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G2-LN-011",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ريتال محمد مجدى",
    "nameEn": "Retal Mohamed Magdy",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G2-LN-013",
    "grade": 2,
    "gradeNameAr": "الصف الثاني الابتدائي",
    "gradeNameEn": "Grade 2",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ليان محمد أمين",
    "nameEn": "Layan Mohamed Amin",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "nameEn": "Arsen Ashraf Magdy",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G3-LN-005",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ماريا خالد فهما",
    "nameEn": "Maria Khaled Fahma",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G3-LN-012",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "شهم محمد أنور",
    "nameEn": "Shahm Mohamed Anwar",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G3-LN-015",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "أمير السيد أحمد",
    "nameEn": "Amir Elsayed Ahmed",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G3-LN-016",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "نور أحمد عصام",
    "nameEn": "Nour Ahmed Essam",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G3-LN-017",
    "grade": 3,
    "gradeNameAr": "الصف الثالث الابتدائي",
    "gradeNameEn": "Grade 3",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ريان جمال الحسين",
    "nameEn": "Rayan Gamal El-Hosseiny",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G4-AR-001",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "هيا رضوان شتون",
    "nameEn": "Haya Radwan Shatoun",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G4-AR-003",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "جيلان أحمد",
    "nameEn": "Geelan Ahmed",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G4-LN-002",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مهيب جمال",
    "nameEn": "Moheb Gamal",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G4-LN-010",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ميرا محمد",
    "nameEn": "Mira Mohamed",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G4-LN-011",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "فيروز هشام",
    "nameEn": "Fayrouz Hesham",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G4-LN-012",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "لوجين وليد",
    "nameEn": "Lojain Walid",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G4-LN-013",
    "grade": 4,
    "gradeNameAr": "الصف الرابع الابتدائي",
    "gradeNameEn": "Grade 4",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "جنة عمرو",
    "nameEn": "Janna Amr",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G5-AR-001",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "ليندا هشام أحمد",
    "nameEn": "Linda Hesham Ahmed",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G5-AR-003",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "عبد الله محمود الصياد",
    "nameEn": "Abdullah Mahmoud El-Sayad",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G5-AR-004",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "سامح طه حسين",
    "nameEn": "Sameh Taha Hussein",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G5-AR-005",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "مصطفى أحمد مصطفى",
    "nameEn": "Mostafa Ahmed Mostafa",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G5-AR-006",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "زياد مصطفى فرج",
    "nameEn": "Ziad Mostafa Farag",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G5-LN-001",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "arabic",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "رفيدة خالد رجب",
    "nameEn": "Rofayda Khaled Ragab",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    },
    "phone": "",
    "notes": ""
  },
  {
    "id": "SK-G5-LN-002",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "عائشة محمد علاء",
    "nameEn": "Aisha Mohamed Alaa",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G5-LN-003",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مليكة محمد نوار",
    "nameEn": "Malika Mohamed Nawar",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G5-LN-004",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "رودينة عبد الله السيد",
    "nameEn": "Rodaina Abdullah El-Sayed",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G5-LN-005",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مريم حمدى أحمد",
    "nameEn": "Mariam Hamdy Ahmed",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G5-LN-006",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "آيسل محمد السعيد",
    "nameEn": "Aysel Mohamed El-Saeed",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G5-LN-007",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "رقية رضا شوشة",
    "nameEn": "Roqaya Reda Shousha",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G5-LN-008",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "لينا أحمد شوقى",
    "nameEn": "Lina Ahmed Shawky",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G5-LN-009",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "محمد أدهم حزين",
    "nameEn": "Mohamed Adham Hazeen",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G5-LN-010",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "أحمد عمرو محمد",
    "nameEn": "Ahmed Amr Mohamed",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G6-AR-001",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "ياسين إسلام محمد",
    "nameEn": "Yaseen Islam Mohamed",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G6-AR-002",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "باسم حسن العمري",
    "nameEn": "Bassem Hassan El-Omari",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G6-LN-001",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مالك محمود عبد الحميد",
    "nameEn": "Malek Mahmoud Abdel Hamid",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G6-LN-003",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "محمد مصطفى وحيد",
    "nameEn": "Mohamed Mostafa Waheed",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G6-LN-004",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "أروى محمد أحمد",
    "nameEn": "Arwa Mohamed Ahmed",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G6-LN-005",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ليان السيد على",
    "nameEn": "Layan Elsayed Ali",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G6-LN-006",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "لورين وليد محمد",
    "nameEn": "Loreen Walid Mohamed",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G6-LN-007",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ماسة محمد أنور حرب",
    "nameEn": "Massa Mohamed Anwar Harb",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G6-LN-008",
    "grade": 6,
    "gradeNameAr": "الصف السادس الابتدائي",
    "gradeNameEn": "Grade 6",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "أفنان أحمد حسن",
    "nameEn": "Afnan Ahmed Hassan",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G7-AR-001",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "نورسان إسلام",
    "nameEn": "Noursan Islam",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G7-AR-002",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "ليان محمود",
    "nameEn": "Layan Mahmoud",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G7-AR-003",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "سارة أحمد",
    "nameEn": "Sara Ahmed",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G7-AR-004",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "بلال محمد",
    "nameEn": "Belal Mohamed",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G7-LN-001",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مريم أدهم حربى",
    "nameEn": "Mariam Adham Harby",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G7-LN-002",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مايا هيثم",
    "nameEn": "Maya Haitham",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G7-LN-003",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "جودى خالد",
    "nameEn": "Judy Khaled",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G7-LN-004",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "أدهم عبد المجيد",
    "nameEn": "Adham Abdel Majeed",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G7-LN-005",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "ياسين سليمان",
    "nameEn": "Yaseen Soliman",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G7-LN-006",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "مالك أدهم",
    "nameEn": "Malek Adham",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G8-AR-001",
    "grade": 8,
    "gradeNameAr": "الصف الثاني الإعدادي",
    "gradeNameEn": "Grade 8 (Prep 2)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "محمد حسن",
    "nameEn": "Mohamed Hassan",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G8-AR-002",
    "grade": 8,
    "gradeNameAr": "الصف الثاني الإعدادي",
    "gradeNameEn": "Grade 8 (Prep 2)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "عبد الغنى عصام",
    "nameEn": "Abdel Ghany Essam",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G8-LN-001",
    "grade": 8,
    "gradeNameAr": "الصف الثاني الإعدادي",
    "gradeNameEn": "Grade 8 (Prep 2)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "أنس أحمد حسن",
    "nameEn": "Anas Ahmed Hassan",
    "gender": "male",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G8-LN-002",
    "grade": 8,
    "gradeNameAr": "الصف الثاني الإعدادي",
    "gradeNameEn": "Grade 8 (Prep 2)",
    "track": "languages",
    "trackNameAr": "لغات (Math)",
    "trackNameEn": "Languages Track",
    "nameAr": "بسملة عبد الله",
    "nameEn": "Basmala Abdullah",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "id": "SK-G9-AR-001",
    "grade": 9,
    "gradeNameAr": "الصف الثالث الإعدادي",
    "gradeNameEn": "Grade 9 (Prep 3)",
    "track": "arabic",
    "trackNameAr": "عربي (رياضيات)",
    "trackNameEn": "Arabic Track",
    "nameAr": "ساره محمد أبو طه باشي",
    "nameEn": "Sara Mohamed Abu Taha Bashy",
    "gender": "female",
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
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
    "sampleScores": {
      "month1": 19.5,
      "month2": 20,
      "midterm": 29.5,
      "final": 30,
      "attendance": 99
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 19.5,
      "t1_m2": 20,
      "t1_exam": 29.5,
      "t1_total": 98,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 98,
      "annual_total": 98
    }
  },
  {
    "grade": 1,
    "track": "languages",
    "nameAr": "عبد الحميد محمد الجزار",
    "nameEn": "Abdelhamid Mohamed Elgazar",
    "phone": "",
    "gender": "female",
    "notes": "",
    "id": "SK-G1-EN-5941",
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 20,
      "t1_m2": 20,
      "t1_exam": 30,
      "t1_total": 100,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 100,
      "annual_total": 100
    }
  },
  {
    "grade": 2,
    "track": "arabic",
    "nameAr": "فريد أحمد حمدي",
    "nameEn": "Farid Ahmed Hamdy",
    "phone": "",
    "gender": "female",
    "notes": "",
    "id": "SK-G2-AR-6576",
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 20,
      "t1_m2": 20,
      "t1_exam": 30,
      "t1_total": 100,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 100,
      "annual_total": 100
    }
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
      "t1_m1": 20,
      "t1_m2": 20,
      "t1_exam": 30,
      "t1_total": 100,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 100,
      "annual_total": 100
    }
  },
  {
    "grade": 5,
    "track": "arabic",
    "nameAr": "ملك محمد مجدي",
    "nameEn": "Malak Mohamed Magdy",
    "phone": "",
    "gender": "female",
    "notes": "",
    "id": "SK-G5-AR-1570",
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 20,
      "t1_m2": 20,
      "t1_exam": 30,
      "t1_total": 100,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 100,
      "annual_total": 100
    }
  },
  {
    "grade": 5,
    "track": "arabic",
    "nameAr": "جودي مهند خضرو",
    "nameEn": "Judi Mohannad Khidro",
    "phone": "",
    "gender": "female",
    "notes": "",
    "id": "SK-G5-AR-0468",
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 20,
      "t1_m2": 20,
      "t1_exam": 30,
      "t1_total": 100,
      "t2_m1": 20,
      "t2_m2": 20,
      "t2_exam": 30,
      "t2_total": 100,
      "annual_total": 100
    }
  }
];

  const SmileKidsDB = {
    DATABASE_NAME: 'قاعدة بيانات مدرسة Smile Kids الموحدة 2025/2026',
    DATABASE_CODE: 'SMILE_KIDS_MASTER_DB',
    VERSION: '2.0.0',
    STORAGE_KEY: STORAGE_KEY,
    FILE_NAME_JS: 'smile_kids_database.js',
    FILE_NAME_JSON: 'smile_kids_database.json',

    _cache: null,
    _listeners: [],

    init: function() {
      let raw = null;
      if (typeof localStorage !== 'undefined') {
        try {
          raw = localStorage.getItem(STORAGE_KEY);
        } catch(e) {
          console.warn('localStorage read error:', e);
        }
      }

      if (raw) {
        try {
          this._cache = JSON.parse(raw);
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

      this._ensureStudentFields();
      this._setupStorageListener();
      this._setupCloudSync();
      return this;
    },

    
    _setupCloudSync: function() {
      if (typeof window === 'undefined') return;

      // Initial cloud sync
      setTimeout(() => {
        this.syncFromCloud();
      }, 200);

      // Re-sync when returning to tab
      if (window.addEventListener) {
        window.addEventListener('focus', () => {
          this.syncFromCloud();
        });
      }

      // Background periodic sync every 40 seconds
      setInterval(() => {
        if (!this._isSyncingToCloud) {
          this.syncFromCloud();
        }
      }, 40000);
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

    syncFromCloud: async function(callback) {
      if (!this.CLOUD_API_URL || typeof fetch === 'undefined') return;
      try {
        this._setSyncStatus('syncing');
        const resp = await fetch(this.CLOUD_API_URL);
        if (resp.ok) {
          const data = await resp.json();
          let studentsList = null;
          if (Array.isArray(data)) studentsList = data;
          else if (data && Array.isArray(data.students)) studentsList = data.students;

          if (studentsList && studentsList.length > 0) {
            this._cache = studentsList;
            this._ensureStudentFields();
            if (typeof localStorage !== 'undefined') {
              try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this._cache));
              } catch(e) {}
            }
            this._setSyncStatus('online', studentsList.length + ' طالب');
            this._notifyListeners('cloud_pull');
            if (callback) callback({ success: true, count: studentsList.length });
            return;
          }
        }
        this._setSyncStatus('offline', 'لم يتم استرجاع بيانات');
      } catch(err) {
        console.warn('Google Drive syncFromCloud error (working offline):', err);
        this._setSyncStatus('offline', err.message);
      }
    },

    syncToCloud: async function() {
      if (!this.CLOUD_API_URL || typeof fetch === 'undefined') return;
      this._isSyncingToCloud = true;
      this._setSyncStatus('syncing');
      try {
        const payload = {
          database_info: {
            name: this.DATABASE_NAME,
            version: this.VERSION,
            exported_at: new Date().toISOString(),
            total_students: this.getAllStudents().length
          },
          students: this.getAllStudents()
        };
        const resp = await fetch(this.CLOUD_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload)
        });
        const res = await resp.json();
        if (res && res.success) {
          this._setSyncStatus('online', 'تم الحفظ في Google Drive');
        } else {
          this._setSyncStatus('error', res ? res.error : 'خطأ حفظ');
        }
      } catch(err) {
        console.warn('Google Drive syncToCloud error:', err);
        this._setSyncStatus('offline', err.message);
      } finally {
        this._isSyncingToCloud = false;
      }
    },

    _setupStorageListener: function() {
      if (typeof window === 'undefined' || !window.addEventListener) return;
      window.addEventListener('storage', (e) => {
        if (e.key === STORAGE_KEY && e.newValue) {
          try {
            this._cache = JSON.parse(e.newValue);
            this._ensureStudentFields();
            this._notifyListeners('remote_storage_sync');
          } catch(err) {
            console.error('Remote storage sync error:', err);
          }
        }
      });
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
      if (typeof localStorage !== 'undefined') {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(this._cache));
          // Keep legacy storage keys synchronized for backward safety
          localStorage.setItem('smilekids_school_v6', JSON.stringify(this._cache));
          localStorage.setItem('smile_kids_students_v7_custom', JSON.stringify(this._cache));
        } catch(e) {
          console.warn('DB Save failed:', e);
        }
      }
      this._notifyListeners('local_save');
      // Trigger debounced cloud sync to Google Drive
      if (this._syncDebounceTimer) clearTimeout(this._syncDebounceTimer);
      this._syncDebounceTimer = setTimeout(() => {
        this.syncToCloud();
      }, 600);
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
      this._ensureStudentFields();
      this.save();
      return st;
    },

    addStudent: function(studentData) {
      const grade = parseInt(studentData.grade) || 1;
      const track = studentData.track || 'arabic';
      const trackCode = track === 'languages' ? 'EN' : 'AR';
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
      return studentData;
    },

    deleteStudent: function(id) {
      const idx = this.getAllStudents().findIndex(s => s.id === id);
      if (idx !== -1) {
        const removed = this.getAllStudents().splice(idx, 1)[0];
        this.save();
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
      return true;
    },

    setBatchAttendance: function(studentIds, dateStr, status) {
      const all = this.getAllStudents();
      studentIds.forEach(id => {
        const st = all.find(s => s.id === id);
        if (st) {
          if (!st.attendanceRecords) st.attendanceRecords = {};
          st.attendanceRecords[dateStr] = status;
        }
      });
      this.save();
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
        if (!s.termsScores) {
          s.termsScores = {
            t1_m1: (s.sampleScores && s.sampleScores.month1) || 20,
            t1_m2: (s.sampleScores && s.sampleScores.month2) || 20,
            t1_exam: (s.sampleScores && s.sampleScores.midterm) || 30,
            t1_total: 98,
            t2_m1: 20,
            t2_m2: 20,
            t2_exam: 30,
            t2_total: 98,
            annual_total: 98
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
