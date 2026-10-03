"""
Smile Kids SIS - Master Grades Backup Generator
Generates a comprehensive CSV master sheet for all 147 students and their subject scores,
saving to Documents, Desktop, and project directories.
"""

import os
import sys
import json
import csv

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# Destination paths requested
BACKUP_PATHS = [
    r"C:\Users\Hisham Abdelfadil\OneDrive\Documents\Smile_Kids_Grades_Master_Backup.csv",
    r"C:\Users\Hisham Abdelfadil\Desktop\Smile_Kids_Grades_Master_Backup.csv",
    r"C:\Users\Hisham Abdelfadil\Downloads\smile_kids_sis\Smile_Kids_Grades_Master_Backup.csv"
]

def load_students_and_grades(sis_dir=r"C:\Users\Hisham Abdelfadil\Downloads\smile_kids_sis", grades_dict=None):
    # 1. Load default students list (147 students)
    students_file = os.path.join(sis_dir, "default_students.json")
    with open(students_file, "r", encoding="utf-8") as f:
        students = json.load(f)

    # 2. Check for optional exported teacher grades file if grades_dict not provided
    if grades_dict is None:
        grades_json_file = os.path.join(sis_dir, "smile_kids_teacher_grades.json")
        if os.path.exists(grades_json_file):
            try:
                with open(grades_json_file, "r", encoding="utf-8") as f:
                    grades_dict = json.load(f)
            except Exception:
                grades_dict = {}
        else:
            grades_dict = {}

    return students, grades_dict

def get_appreciation(percentage):
    if percentage >= 85:
        return "ممتاز 🌟"
    elif percentage >= 75:
        return "جيد جداً 🟢"
    elif percentage >= 65:
        return "جيد 🔵"
    elif percentage >= 50:
        return "مقبول 🟡"
    else:
        return "دون المستوى 🔴"

def generate_backup_csv(students, grades_dict, target_paths=BACKUP_PATHS):
    headers = [
        "م",
        "كود الطالب (ID)",
        "اسم الطالب بالعربية (Name AR)",
        "اسم الطالب بالإنجليزية (Name EN)",
        "الصف (Grade)",
        "المسار (Track)",
        "النوع (Gender)",
        "لغة عربية (ش1)",
        "لغة عربية (ترم1)",
        "لغة إنجليزية OL (ش1)",
        "لغة إنجليزية OL (ترم1)",
        "لغة إنجليزية AL Connect Plus (ش1)",
        "لغة إنجليزية AL Connect Plus (ترم1)",
        "رياضيات / Math (ش1)",
        "رياضيات / Math (ترم1)",
        "علوم / Science (ش1)",
        "علوم / Science (ترم1)",
        "دراسات اجتماعية (ش1)",
        "دراسات اجتماعية (ترم1)",
        "تكنولوجيا ICT (ش1)",
        "تكنولوجيا ICT (ترم1)",
        "تربية دينية (ش1)",
        "تربية دينية (ترم1)",
        "لغة ألمانية German (ش1)",
        "لغة ألمانية German (ترم1)",
        "مجموع درجات الترم الأول (T1 Total)",
        "مجموع درجات الترم الثاني (T2 Total)",
        "المجموع السنوي العام (Annual Total)",
        "النسبة المئوية (%)",
        "التقدير العام (Status)"
    ]

    rows = []
    for idx, st in enumerate(students, 1):
        st_id = st.get("id", "")
        name_ar = st.get("nameAr", "")
        name_en = st.get("nameEn", "")
        grade = st.get("grade", 1)
        track = "لغات" if st.get("track") == "languages" else "عربي"
        gender = "أنثى" if st.get("gender") == "F" else "ذكر"

        terms_scores = st.get("termsScores", {})
        subj_scores = st.get("subjectScores", {})

        def resolve_score(subj_id, term="t1", fld="m1"):
            # Check teacher grades dictionary first
            key = f"st_{st_id}_{term}_{subj_id}"
            if key in grades_dict and fld in grades_dict[key]:
                return float(grades_dict[key][fld])
            # Check student.subjectScores
            if subj_id in subj_scores:
                entry = subj_scores[subj_id]
                scores_map = entry.get("scores", {})
                p_key = f"{term}_{fld}"
                if p_key in scores_map:
                    val = scores_map[p_key]
                    if isinstance(val, dict):
                        return float(val.get("score", 0))
                    return float(val)
                if fld in entry:
                    return float(entry[fld])
            # Check default fallback termsScores
            if fld == "m1":
                return float(terms_scores.get(f"{term}_m1", 0))
            elif fld == "exam":
                return float(terms_scores.get(f"{term}_exam", 0))
            return 0.0

        # Resolve subject marks
        ar_m1 = resolve_score("arabic", "t1", "m1")
        ar_exam = resolve_score("arabic", "t1", "exam")
        en_ol_m1 = resolve_score("english_ol", "t1", "m1")
        en_ol_exam = resolve_score("english_ol", "t1", "exam")
        
        # English AL only for language track
        en_al_m1 = resolve_score("english_al", "t1", "m1") if st.get("track") == "languages" else "-"
        en_al_exam = resolve_score("english_al", "t1", "exam") if st.get("track") == "languages" else "-"

        math_m1 = resolve_score("math", "t1", "m1")
        math_exam = resolve_score("math", "t1", "exam")

        # Upper grades subjects
        sci_m1 = resolve_score("science", "t1", "m1") if grade >= 4 else "-"
        sci_exam = resolve_score("science", "t1", "exam") if grade >= 4 else "-"

        soc_m1 = resolve_score("social", "t1", "m1") if grade >= 4 else "-"
        soc_exam = resolve_score("social", "t1", "exam") if grade >= 4 else "-"

        ict_m1 = resolve_score("ict", "t1", "m1") if grade >= 4 else "-"
        ict_exam = resolve_score("ict", "t1", "exam") if grade >= 4 else "-"

        rel_m1 = resolve_score("religion", "t1", "m1")
        rel_exam = resolve_score("religion", "t1", "exam")

        ger_m1 = resolve_score("german", "t1", "m1") if grade >= 7 else "-"
        ger_exam = resolve_score("german", "t1", "exam") if grade >= 7 else "-"

        t1_total = float(terms_scores.get("t1_total", 98))
        t2_total = float(terms_scores.get("t2_total", 98))
        annual_total = float(terms_scores.get("annual_total", 98))
        pct = round((annual_total / 100.0) * 100, 1) if annual_total <= 100 else round((annual_total / 300.0) * 100, 1)
        if pct > 100: pct = 100.0
        status = get_appreciation(pct)

        row = [
            idx,
            st_id,
            name_ar,
            name_en,
            f"Grade {grade}",
            track,
            gender,
            ar_m1,
            ar_exam,
            en_ol_m1,
            en_ol_exam,
            en_al_m1,
            en_al_exam,
            math_m1,
            math_exam,
            sci_m1,
            sci_exam,
            soc_m1,
            soc_exam,
            ict_m1,
            ict_exam,
            rel_m1,
            rel_exam,
            ger_m1,
            ger_exam,
            t1_total,
            t2_total,
            annual_total,
            f"{pct}%",
            status
        ]
        rows.append(row)

    saved_paths = []
    for path in target_paths:
        try:
            os.makedirs(os.path.dirname(path), exist_ok=True)
            with open(path, "w", newline="", encoding="utf-8-sig") as csv_file:
                writer = csv.writer(csv_file)
                writer.writerow(headers)
                writer.writerows(rows)
            saved_paths.append(path)
            print(f"✓ Backup CSV saved successfully to: {path} ({len(rows)} students)")
        except Exception as e:
            print(f"⚠️ Error saving to {path}: {e}")

    return saved_paths

if __name__ == "__main__":
    sis_dir = r"C:\Users\Hisham Abdelfadil\Downloads\smile_kids_sis"
    students, grades = load_students_and_grades(sis_dir)
    print(f"Loaded {len(students)} students.")
    res = generate_backup_csv(students, grades)
    print(f"Successfully generated backups at {len(res)} locations.")
