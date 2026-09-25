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

  const STORAGE_KEY = 'SMILE_KIDS_MASTER_DATABASE_2026_V2';
  const LEGACY_STUDENT_KEYS = ['smile_kids_students_v7_custom', 'smilekids_school_v6'];
  const LEGACY_ATT_KEY = 'smile_kids_attendance_v7_data';

  // Master Initial Verified Students (137 Students across 9 Grades)
  // Master Initial Verified Students (137 Students across 9 Grades)
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
    "nameEn": "Yahia Ahmed Mostafa",
    "gender": "male",
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
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
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
    "nameEn": "Areen Ashraf Magdy",
    "gender": "female",
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
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
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
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
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
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
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
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
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
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
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
    "nameAr": "مها رضوان تسون",
    "nameEn": "Maha Radwan Tsoun",
    "gender": "female",
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
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
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
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
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
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
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
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
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
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
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
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
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
  },
  {
    "id": "SK-G5-LN-003",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "مليكة محمد نبيل نوار",
    "nameEn": "Malika Mohamed Nabil Nawar",
    "gender": "female",
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
  },
  {
    "id": "SK-G5-LN-004",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "رودينة عبد الله سيد",
    "nameEn": "Rodaina Abdullah Sayed",
    "gender": "female",
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
  },
  {
    "id": "SK-G5-LN-009",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "محمد أدهم حربي",
    "nameEn": "Mohamed Adham Harby",
    "gender": "male",
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
  },
  {
    "id": "SK-G5-LN-010",
    "grade": 5,
    "gradeNameAr": "الصف الخامس الابتدائي",
    "gradeNameEn": "Grade 5",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "محمد عمرو محمد",
    "nameEn": "Mohamed Amr Mohamed",
    "gender": "male",
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
  },
  {
    "id": "SK-G7-AR-004",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "arabic",
    "trackNameAr": "عربي (حساب)",
    "trackNameEn": "Arabic Track",
    "nameAr": "بلال محمد عادل",
    "nameEn": "Belal Mohamed Adel",
    "gender": "male",
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
  },
  {
    "id": "SK-G7-LN-004",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "أدم عبد الحميد",
    "nameEn": "Adam Abdel Hamid",
    "gender": "male",
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
  },
  {
    "id": "SK-G7-LN-006",
    "grade": 7,
    "gradeNameAr": "الصف الأول الإعدادي",
    "gradeNameEn": "Grade 7 (Prep 1)",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "مالك أدهم حربي",
    "nameEn": "Malek Adham Harby",
    "gender": "male",
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
  },
  {
    "id": "SK-G8-LN-002",
    "grade": 8,
    "gradeNameAr": "الصف الثاني الإعدادي",
    "gradeNameEn": "Grade 8 (Prep 2)",
    "track": "languages",
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "nameAr": "بسملة عبد الله سيد",
    "nameEn": "Basmala Abdullah Sayed",
    "gender": "female",
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
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
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
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
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    },
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    }
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
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    },
    "trackNameAr": "لغات (Math & Science)",
    "trackNameEn": "Languages Track",
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    }
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
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    },
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
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
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    },
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
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
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    },
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
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
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    },
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    }
  },
  {
    "grade": 6,
    "track": "arabic",
    "nameAr": "لينا هشام أحمد",
    "nameEn": "Lina Hesham Ahmed",
    "phone": "",
    "gender": "female",
    "notes": "",
    "id": "SK-G6-AR-2866",
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    },
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    }
  },
  {
    "grade": 6,
    "track": "arabic",
    "nameAr": "أسيل محمد أحمد",
    "nameEn": "Aseel Mohamed Ahmed",
    "phone": "",
    "gender": "female",
    "notes": "",
    "id": "SK-G6-AR-4511",
    "attendanceRecords": {},
    "attendanceNotes": {},
    "termsScores": {
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    },
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
    }
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
      "t1_m1": 0,
      "t1_m2": 0,
      "t1_exam": 0,
      "t1_total": 0,
      "t2_m1": 0,
      "t2_m2": 0,
      "t2_exam": 0,
      "t2_total": 0,
      "annual_total": 0
    },
    "sampleScores": {
      "month1": 0,
      "month2": 0,
      "midterm": 0,
      "final": 0,
      "attendance": 0
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
    CLOUD_API_URL: 'https://script.google.com/macros/s/AKfycbw3NIQ9nrVF3CHVQ7wChc0QYElIAQx2SHRnGs236x-yuIrBBuFiMqKiDDv3to0g1rnu/exec',
    _isSyncingToCloud: false,
    _syncDebounceTimer: null,
    _syncStatus: 'idle',
    _lastModified: 0,
    _bc: null,

    _cache: null,
    _listeners: [],

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
            this._cache = parsed;
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

      this._ensureStudentFields();
      this._setupStorageListener();
      this._setupCloudSync();
      return this;
    },

    
    _setupCloudSync: function() {
      if (typeof window === 'undefined') return;

      // Safe, single initial cloud check after startup (non-destructive)
      setTimeout(() => {
        this.syncFromCloud();
      }, 500);

      // NOTE: Destructive 20-second interval polling and window focus listeners
      // have been permanently removed so newly recorded grades and attendance
      // are never overwritten or erased.
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
      // Do not pull from cloud if a local edit is pending cloud push
      if (this._isSyncingToCloud) return;

      try {
        this._setSyncStatus('syncing');
        const resp = await fetch(this.CLOUD_API_URL);
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
            // Guard 1: If local edits were made more recently than cloud timestamp, push local to cloud instead
            if (this._lastModified > 0 && cloudTimestamp > 0 && this._lastModified > cloudTimestamp + 1000) {
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

              studentsList.forEach(cloudSt => {
                const localSt = localMap.get(cloudSt.id);
                if (!localSt) {
                  this._cache.push(cloudSt);
                  hasChanges = true;
                } else {
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
        console.warn('Google Drive syncFromCloud error (working offline):', err);
        this._setSyncStatus('offline', err.message);
      }
    },

    syncToCloud: async function() {
      if (!this.CLOUD_API_URL || typeof fetch === 'undefined') return;
      this._isSyncingToCloud = true;
      this._setSyncStatus('syncing');
      try {
        const now = Date.now();
        if (!this._lastModified || this._lastModified < now) {
          this._lastModified = now;
        }
        const payload = {
          database_info: {
            name: this.DATABASE_NAME,
            version: this.VERSION,
            last_modified: this._lastModified,
            exported_at: new Date(this._lastModified).toISOString(),
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
        if (!s.subjectScores) s.subjectScores = {};
        if (!s.termsScores) {
          s.termsScores = {
            t1_m1: (s.sampleScores && s.sampleScores.month1) || 0,
            t1_m2: (s.sampleScores && s.sampleScores.month2) || 0,
            t1_exam: (s.sampleScores && s.sampleScores.midterm) || 0,
            t1_total: 0,
            t2_m1: 0,
            t2_m2: 0,
            t2_exam: 0,
            t2_total: 0,
            annual_total: 0
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
