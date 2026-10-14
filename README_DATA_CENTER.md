# 🏫 مركز بيانات وأنظمة مدرسة Smile Kids الخاصة للغات
# Official Smile Kids SIS Data Center Architecture & Operations Manual

---

## 📌 نظرة عامة | System Overview
تم تصميم وتوثيق هذا المركز ليكون المرجع الشامل والنهائي لكافة قواعد البيانات، البوابات الإلكترونية، محركات المزامنة السحابية، ونسخ الاحتياط لمدرسة **Smile Kids Language School**.
يوفر هذا الهيكل تكاملاً سلساً بين العمل الميداني الأوفلاين (Offline-First عبر LocalStorage / IndexedDB) والمزامنة الحية عبر السحابة (Google Cloud Firebase Firestore & Google Apps Script).

---

## 📂 الهيكل المعماري المعتمد | Official Data Center Structure

```text
📁 Smile_Kids_Data_Center/
│
├── 📁 01_Live_Portals/                   # بوابات النظام التفاعلية الحية
│   ├── 🌐 Student_Roster_Dashboard.html  # لوحة التحكم المركزية للطلاب والإدارة والرصد
│   ├── 🌐 Teacher_Portal.html            # بوابة المعلمات لرصد الدرجات والغياب والشهادات
│   ├── 🌐 Parent_Portal.html             # بوابة أولياء الأمور للاستعلام بالـ PIN
│   ├── 🌐 staff_login.html               # بوابة تسجيل الدخول السريع لأعضاء الهيئة التعليمية
│   └── 🌐 index.html                     # الصفحة الرئيسية ومدخل البوابات الموحد
│
├── 📁 02_Database_Master/                # قواعد البيانات المركزية المعتمدة
│   ├── 📄 smile_kids_database.json       # قاعدة البيانات الكاملة الشاملة لتعديلات 13 أكتوبر
│   ├── 📄 smile_kids_database.js         # محرك البيانات البرمجي الداعم للتشغيل المحلي
│   ├── 📄 smile_kids_database_174_master.json # كشف 174 طالباً الفعلي مع الدرجات وكلمات السر
│   ├── 📊 Smile_Kids_Grades_Master_Backup.csv  # الشيت العام لدرجات المواد والغياب
│   └── 📗 Smile_Kids_Grades_Master_Backup.xlsx # ملف الإكسل الرسمي للدرجات والتقارير
│
├── 📁 03_Cloud_Sync_Engines/             # محركات المزامنة السحابية وقواعد الحماية
│   ├── ⚙️ firebase_config.js             # إعدادات اتصال Google Firebase Firestore
│   ├── ⚙️ google_apps_script_backend.gs  # المحرك الخلفي لربط البيانات مع Google Drive/Sheets
│   ├── 🔒 firestore.rules                # قواعد الأمان والصلاحيات السحابية
│   └── 📋 firebase.json                  # ملف تكوين النشر والاستضافة
│
├── 📁 04_Monthly_Backups/                # لقطات الأرشيف والنسخ الشهرية
│   ├── 📁 September_2026/                # أرشيف سبتمبر (137 طالباً + التقارير الوزارية)
│   │   ├── smile_kids_database_backup_137_students.json
│   │   ├── كشف_طلاب_مدرسة_Smile_Kids_المحدث_137_طالب.csv
│   │   ├── تقرير_متابعة_الغياب_والدرجات_الضعيفة_سبتمبر_2026.docx
│   │   └── تقرير_متابعة_الغياب_والدرجات_الضعيفة_سبتمبر_2026_النسخة_المعتمدة.docx
│   │
│   └── 📁 October_2026_Post_Oct13/       # أرشيف أكتوبر المعتمد بعد تعديلات 13 أكتوبر (174 طالباً)
│       ├── smile_kids_database.json
│       ├── smile_kids_database.js
│       ├── smile_kids_database_174_master.json
│       ├── Smile_Kids_Grades_Master_Backup.csv
│       ├── Smile_Kids_Grades_Master_Backup.xlsx
│       ├── Students_Credentials_Sheet.csv
│       ├── تقرير_متابعة_الغياب_والدرجات_المعتمد_نهائي_2026.docx
│       └── معلومات_النسخة_الاحتياطية.txt
│
├── 📁 05_Credentials_And_Reports/        # بيانات الدخول والكشوف الرسمية
│   ├── 📋 Students_Credentials_Sheet.csv # كشف بيانات الطلاب ورموز المرور (PIN) لـ 174 طالباً
│   ├── 🌐 Teachers_Credentials_Sheet.html # كشف بيانات وكلمات مرور المعلمات المعتمد
│   ├── 📄 teachers_catalog.json          # دليل المعلمات والمواد والصفوف
│   └── 📄 teachers_full_schedules.json   # الجدول المدرسي وتوزيع الحصص الأسبوعي
│
└── 📁 06_Documentation/                  # التوثيق الفني والأدلة التشغيلية
    └── 📘 README_DATA_CENTER.md          # الدليل الشامل والمفاتيح المعتمدة (هذا الملف)
```

---

## 👥 التوزيع العددي المعتمد للطلاب | Official Student Roster (174 Students)

| الصف الدراسي | عربي (حساب) | لغات (Math & Science) | إجمالي الصف |
| :--- | :---: | :---: | :---: |
| **الصف الأول الابتدائي (Grade 1)** | 6 | 23 | **29** |
| **الصف الثاني الابتدائي (Grade 2)** | 13 | 20 | **33** |
| **الصف الثالث الابتدائي (Grade 3)** | 6 | 23 | **29** |
| **الصف الرابع الابتدائي (Grade 4)** | 8 | 16 | **24** |
| **الصف الخامس الابتدائي (Grade 5)** | 6 | 13 | **19** |
| **الصف السادس الابتدائي (Grade 6)** | 3 | 13 | **16** |
| **الصف الأول الإعدادي (Grade 7)** | 1 | 13 | **14** |
| **الصف الثاني الإعدادي (Grade 8)** | 0 | 5 | **5** |
| **الصف الثالث الإعدادي (Grade 9)** | 0 | 5 | **5** |
| **الإجمالي العام المعتمد** | **43** | **131** | **174** |

> [!NOTE]
> يتطابق هذا الإحصاء بنسبة 100% مع مؤشرات الأداء الرئيسية (KPIs) في لوحة التحكم الإدارية، وتم عزل وتثبيت السجلات الملغاة والمعلقة في قوائم الاستبعاد الرسمية (`BLACKLIST_DELETED_STUDENTS`).

---

## 🔑 مفاتيح الأمان والوصول السري | Security & Recovery Keys

| الخاصية / البوابة | المفتاح / الرمز المعتمد | الوصف والغرض |
| :--- | :--- | :--- |
| **الرمز الإداري الرئيسي (Admin PIN)** | `9999` | فك قفل الإدارة، حذف السجلات، تعديل البيانات الحساسة |
| **كود المدرسة السحابي (Master Code)** | `SMILE_KIDS_MASTER_DATABASE_2026` | ترخيص الاتصال بقاعدة بيانات Firebase و Google Script |
| **مشروع Firebase السحابي** | `smile-kids-database` | قاعدة بيانات Cloud Firestore الرسمية |
| **معرف مجلد Google Drive الرئيسي** | `Smile_Kids_Master_Backups` | المجلد السحابي لحفظ النسخ الاحتياطية وسجلات التدقيق |
| **بوابة المعلمات** | كود المعلمة + الـ PIN الفردي | مسجل تفصيلياً في `Teachers_Credentials_Sheet.html` |
| **بوابة أولياء الأمور** | كود الطالب (ID) + الـ PIN الفردي | مسجل تفصيلياً في `Students_Credentials_Sheet.csv` |

---

## 🔄 محركات المزامنة وآلية الاستعادة | Cloud Sync & Recovery Procedures

### 1. وضع التشغيل الهجين (Hybrid Architecture)
- **أوفلاين أولاً (Offline-First):** تعمل البوابات محلياً بدون اتصال بالإنترنت عبر التخزين في الذاكرة المحلية للمتصفح.
- **مزامنة خلفية تلقائية (Real-Time Background Sync):** بمجرد توفر الإنترنت، يتم دفع التعديلات تلقائياً عبر Firestore REST API إلى السحابة.

### 2. إجراءات الاستعادة في حالات الطوارئ (Disaster Recovery)
1. **استعادة كاملة لقاعدة البيانات:**
   - انسخ ملف `02_Database_Master/smile_kids_database.json` إلى مجلد العمل.
   - افتح `Student_Roster_Dashboard.html`، اضغط على زر **استيراد قاعدة بيانات**، واختر الملف.
2. **استعادة شهرية سابقة:**
   - لاستعادة كشف شهر سبتمبر، استخدم مجلد `04_Monthly_Backups/September_2026/`.
   - لاستعادة نسخة أكتوبر بعد التحديثات، استخدم مجلد `04_Monthly_Backups/October_2026_Post_Oct13/`.

---

## 🧹 الأرشيف المعزول للأدوات | Tools Archive Isolation
تم نقل كافة أدوات التحليل والاسترجاع القديمة المستعادة بواسطة Kaspersky إلى مجلد معزول تحت اسم:
`C:\Users\Hisham Abdelfadil\Downloads\smile_kids_sis\_tools_archive\`
وتشمل:
- `apply_updates.js`
- `extract_chrome.js`
- `inspect_leveldb.js`
- `search_grades_leveldb.js`
- `language_server.exe`

وذلك لمنع أي تداخل برمجي أو تشويش على ملفات الإنتاج المعتمدة.

---
*تم إنشاء هذا الأرشيف وتدقيقه رسمياً بتاريخ: 14 أكتوبر 2026*  
*Smile Kids Language School - Information Systems Division*
