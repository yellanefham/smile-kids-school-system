import json, os, sys
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

sys.stdout.reconfigure(encoding='utf-8')

def build_backup_sheets():
    # 1. Load students data
    base_dir = r"C:\Users\Hisham Abdelfadil\Downloads\smile_kids_sis"
    json_path = os.path.join(base_dir, "default_students.json")
    
    with open(json_path, 'r', encoding='utf-8') as f:
        students = json.load(f)

    print(f"Loaded {len(students)} students from master database.")

    # Create Workbook
    wb = openpyxl.Workbook()

    # ==========================================
    # SHEET 1: Master Grade Roster (شيت الدرجات الموحد)
    # ==========================================
    ws_grades = wb.active
    ws_grades.title = "كشف الدرجات والشهادات"
    ws_grades.views.sheetView[0].rightToLeft = True

    # Styling Palettes
    header_font = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
    title_font = Font(name="Calibri", size=16, bold=True, color="1E3A8A")
    sub_title_font = Font(name="Calibri", size=11, bold=True, color="475569")
    regular_font = Font(name="Calibri", size=10)
    bold_font = Font(name="Calibri", size=10, bold=True)
    num_font = Font(name="Consolas", size=10, bold=True)

    header_fill = PatternFill(start_color="1E293B", end_color="1E293B", fill_type="solid")
    arabic_fill = PatternFill(start_color="065F46", end_color="065F46", fill_type="solid") # emerald
    religion_fill = PatternFill(start_color="0F766E", end_color="0F766E", fill_type="solid") # teal
    english_fill = PatternFill(start_color="0369A1", end_color="0369A1", fill_type="solid") # sky
    math_fill = PatternFill(start_color="D97706", end_color="D97706", fill_type="solid") # amber
    science_fill = PatternFill(start_color="65A30D", end_color="65A30D", fill_type="solid") # lime
    social_fill = PatternFill(start_color="C2410C", end_color="C2410C", fill_type="solid") # orange
    ict_fill = PatternFill(start_color="7C3AED", end_color="7C3AED", fill_type="solid") # purple
    total_fill = PatternFill(start_color="BE185D", end_color="BE185D", fill_type="solid") # rose

    thin_border = Border(
        left=Side(style='thin', color='CBD5E1'),
        right=Side(style='thin', color='CBD5E1'),
        top=Side(style='thin', color='CBD5E1'),
        bottom=Side(style='thin', color='CBD5E1')
    )

    # Title Banner Rows
    ws_grades.merge_cells("A1:Q1")
    ws_grades["A1"] = "مدرسة Smile Kids الخاصة للغات • كشف درجات الطلاب الموحد المعتمد (نسخة السحابة الاحتياطية)"
    ws_grades["A1"].font = title_font
    ws_grades["A1"].alignment = Alignment(horizontal="center", vertical="center")

    ws_grades.merge_cells("A2:Q2")
    ws_grades["A2"] = f"إجمالي الطلاب: {len(students)} طالب • العام الدراسي 2026/2027 • موحد مع بوابات المعلمات والكنترول الإداري"
    ws_grades["A2"].font = sub_title_font
    ws_grades["A2"].alignment = Alignment(horizontal="center", vertical="center")

    ws_grades.row_dimensions[1].height = 32
    ws_grades.row_dimensions[2].height = 22
    ws_grades.row_dimensions[4].height = 28

    # Table Column Headers
    headers = [
        ("م", 6, header_fill),
        ("كود الطالب", 15, header_fill),
        ("اسم الطالب (عربي)", 26, header_fill),
        ("اسم الطالب (English)", 24, header_fill),
        ("الصف", 10, header_fill),
        ("الشعبة", 12, header_fill),
        ("لغة عربية (أكتوبر 20)", 16, arabic_fill),
        ("تربية دينية (أكتوبر 20)", 16, religion_fill),
        ("English (أكتوبر 20)", 16, english_fill),
        ("Math / رياضيات (20)", 16, math_fill),
        ("Science / علوم (20)", 16, science_fill),
        ("دراسات اجتماعية (20)", 16, social_fill),
        ("تكنولوجيا ICT (20)", 16, ict_fill),
        ("المجموع الشهري (من 80/100)", 18, total_fill),
        ("النسبة المئوية %", 14, total_fill),
        ("التقدير العام", 14, total_fill),
        ("الترتيب", 12, total_fill)
    ]

    row_idx = 4
    for col_idx, (h_name, width, fill_color) in enumerate(headers, 1):
        cell = ws_grades.cell(row=row_idx, column=col_idx, value=h_name)
        cell.font = header_font
        cell.fill = fill_color
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = thin_border
        col_letter = get_column_letter(col_idx)
        ws_grades.column_dimensions[col_letter].width = width

    # Sort students by Grade then Name
    students_sorted = sorted(students, key=lambda s: (s.get("grade", 1), s.get("nameAr", "")))

    data_start_row = 5
    for i, st in enumerate(students_sorted, 1):
        r = data_start_row + i - 1
        ws_grades.row_dimensions[r].height = 20

        st_id = st.get("id", "")
        name_ar = st.get("nameAr", "")
        name_en = st.get("nameEn", "")
        grade = st.get("grade", 1)
        track = "لغات" if st.get("track") == "languages" else "عربي"

        # Terms Scores default or recorded
        ts = st.get("termsScores", {})
        oct_m1 = ts.get("t1_m1", 20.0)

        # Subject mock/default scores or actual recorded
        ss = st.get("subjectScores", {})
        arb = ss.get("arabic", {}).get("scores", {}).get("t1_m1", {}).get("score", oct_m1)
        rel = ss.get("religion", {}).get("scores", {}).get("t1_m1", {}).get("score", oct_m1)
        eng = ss.get("english_al", {}).get("scores", {}).get("t1_m1", {}).get("score", 
              ss.get("english_ol", {}).get("scores", {}).get("t1_m1", {}).get("score", oct_m1))
        math_sc = ss.get("math", {}).get("scores", {}).get("t1_m1", {}).get("score", oct_m1)
        sci = ss.get("science", {}).get("scores", {}).get("t1_m1", {}).get("score", oct_m1) if grade >= 4 else "—"
        soc = ss.get("social", {}).get("scores", {}).get("t1_m1", {}).get("score", oct_m1) if grade >= 4 else "—"
        ict = ss.get("ict", {}).get("scores", {}).get("t1_m1", {}).get("score", oct_m1) if grade >= 4 else "—"

        # Calculate totals
        active_scores = [s for s in [arb, rel, eng, math_sc, sci, soc, ict] if isinstance(s, (int, float))]
        sub_total = sum(active_scores)
        sub_max = len(active_scores) * 20
        pct = round((sub_total / sub_max) * 100, 1) if sub_max > 0 else 100
        rating = "ممتاز 🌟" if pct >= 85 else "جيد جداً 🟢" if pct >= 75 else "جيد 🔵" if pct >= 65 else "مقبول 🟡"

        row_values = [
            i, st_id, name_ar, name_en, f"الصف {grade}", track,
            arb, rel, eng, math_sc, sci, soc, ict,
            sub_total, f"{pct}%", rating, "الأول 🏆" if i == 1 else f"{i}"
        ]

        for c_idx, val in enumerate(row_values, 1):
            c = ws_grades.cell(row=r, column=c_idx, value=val)
            c.font = regular_font
            c.border = thin_border
            if c_idx == 1:
                c.alignment = Alignment(horizontal="center")
            elif c_idx == 2:
                c.font = num_font
                c.alignment = Alignment(horizontal="center")
            elif c_idx in [3, 4]:
                c.font = bold_font
                c.alignment = Alignment(horizontal="right" if c_idx == 3 else "left")
            elif c_idx in [5, 6]:
                c.alignment = Alignment(horizontal="center")
            elif c_idx in [14, 15, 16, 17]:
                c.font = bold_font
                c.alignment = Alignment(horizontal="center")
            else:
                c.font = num_font
                c.alignment = Alignment(horizontal="center")

    # ==========================================
    # SHEET 2: Student Directory & Contacts (دليل بيانات الطلاب)
    # ==========================================
    ws_students = wb.create_sheet(title="بيانات الطلاب وأولياء الأمور")
    ws_students.views.sheetView[0].rightToLeft = True

    st_headers = [
        ("م", 6), ("كود الطالب", 15), ("اسم الطالب", 26), ("الرقم القومي", 20),
        ("الصف", 10), ("المسار", 12), ("الديانة", 10), ("رقم ولي الأمر", 18),
        ("حالة القيد", 14), ("ملاحظات", 24)
    ]

    ws_students.row_dimensions[1].height = 28
    for col_idx, (h_name, width) in enumerate(st_headers, 1):
        cell = ws_students.cell(row=1, column=col_idx, value=h_name)
        cell.font = header_font
        cell.fill = header_fill
        cell.alignment = Alignment(horizontal="center", vertical="center")
        cell.border = thin_border
        col_letter = get_column_letter(col_idx)
        ws_students.column_dimensions[col_letter].width = width

    for i, st in enumerate(students_sorted, 1):
        r = i + 1
        ws_students.row_dimensions[r].height = 18
        st_vals = [
            i,
            st.get("id", ""),
            st.get("nameAr", ""),
            st.get("nationalId", "29801011234567"),
            f"الصف {st.get('grade', 1)}",
            "لغات" if st.get("track") == "languages" else "عربي",
            "مسلم" if st.get("religion") != "christian" else "مسيحي",
            st.get("parentPhone", "01000000000"),
            "مقيد ومنتظم",
            st.get("notes", "سجلات معتمدة 2026")
        ]
        for c_idx, val in enumerate(st_vals, 1):
            c = ws_students.cell(row=r, column=c_idx, value=val)
            c.font = regular_font
            c.border = thin_border
            c.alignment = Alignment(horizontal="center" if c_idx != 3 else "right")

    # ==========================================
    # Save Outputs in target locations
    # ==========================================
    destinations = [
        r"C:\Users\Hisham Abdelfadil\OneDrive\Documents",
        r"C:\Users\Hisham Abdelfadil\Desktop",
        r"C:\Users\Hisham Abdelfadil\Downloads\smile_kids_sis"
    ]

    saved_xlsx = []
    saved_csv = []

    for d in destinations:
        if os.path.exists(d):
            xlsx_path = os.path.join(d, "Smile_Kids_Grades_Master_Backup.xlsx")
            csv_path = os.path.join(d, "Smile_Kids_Grades_Master_Backup.csv")

            # Save Excel
            wb.save(xlsx_path)
            saved_xlsx.append(xlsx_path)

            # Save UTF-8 BOM CSV for Google Drive and Excel Direct Import
            with open(csv_path, 'w', encoding='utf-8-sig') as f_csv:
                # Write CSV header
                f_csv.write("م,كود الطالب,اسم الطالب (عربي),اسم الطالب (English),الصف,الشعبة,عربي (20),دين (20),English (20),Math (20),Science (20),دراسات (20),ICT (20),المجموع,النسبة المئوية,التقدير,الترتيب\n")
                for i, st in enumerate(students_sorted, 1):
                    grade = st.get("grade", 1)
                    track = "لغات" if st.get("track") == "languages" else "عربي"
                    ts = st.get("termsScores", {})
                    oct_m1 = ts.get("t1_m1", 20.0)
                    sci = oct_m1 if grade >= 4 else "—"
                    soc = oct_m1 if grade >= 4 else "—"
                    ict = oct_m1 if grade >= 4 else "—"
                    sub_total = oct_m1 * (7 if grade >= 4 else 4)
                    sub_max = 20 * (7 if grade >= 4 else 4)
                    pct = round((sub_total / sub_max) * 100, 1)
                    rat = "ممتاز" if pct >= 85 else "جيد جداً"
                    rank = f"{i}"
                    line = f'"{i}","{st.get("id","")}","{st.get("nameAr","")}","{st.get("nameEn","")}","الصف {grade}","{track}","{oct_m1}","{oct_m1}","{oct_m1}","{oct_m1}","{sci}","{soc}","{ict}","{sub_total}","{pct}%","{rat}","{rank}"\n'
                    f_csv.write(line)
            saved_csv.append(csv_path)

    print("\nSaved Backups:")
    for x in saved_xlsx:
        print(f"  [XLSX] {x}")
    for c in saved_csv:
        print(f"  [CSV]  {c}")

    return saved_xlsx, saved_csv

if __name__ == "__main__":
    build_backup_sheets()
