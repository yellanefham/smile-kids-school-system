"""
Comprehensive Playwright Verification Script for Smile Kids SIS Grading Pipeline
Tests:
1. Teacher A (Ms. Asmaa) entering Arabic grades
2. Teacher B (Ms. Yara) entering English grades
3. Verification that both grades exist simultaneously in localStorage without overwriting
4. Master Admin (admin_master PIN 9999) verifying all grades across all subjects
5. Student_Roster_Dashboard.html verifying certificate and scores tab display both subjects
"""

import os
import sys
import json
import time
from playwright.sync_api import sync_playwright

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

TEACHER_PORTAL_URL = "file:///C:/Users/Hisham%20Abdelfadil/Downloads/smile_kids_sis/Teacher_Portal.html"
ROSTER_URL = "file:///C:/Users/Hisham%20Abdelfadil/Downloads/smile_kids_sis/Student_Roster_Dashboard.html"

def run_verification():
    print("==================================================")
    print("🚀 STARTING SMILE KIDS SIS FULL VERIFICATION SUITE")
    print("==================================================")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1400, "height": 950})
        page = context.new_page()

        # ----------------------------------------------------
        # TEST 1: TEACHER A (MS. ASMAA) - ARABIC GRADE ENTRY
        # ----------------------------------------------------
        print("\n--- STEP 1: Teacher A (Ms. Asmaa) entering Arabic grades ---")
        page.goto(TEACHER_PORTAL_URL)
        page.wait_for_timeout(1000)

        # Select Ms. Asmaa card & enter PIN 1234
        page.evaluate("selectTeacherForLogin('t_asmaa')")
        page.wait_for_timeout(300)
        page.fill("#input-pin", "1234")
        page.evaluate("verifyTeacherPin()")
        page.wait_for_timeout(800)

        # Verify login success
        teacher_name = page.inner_text("#logged-teacher-name")
        print(f"Logged in as: {teacher_name}")
        assert "أسماء" in teacher_name, f"Expected Ms. Asmaa, got {teacher_name}"

        # Switch to Grades tab
        page.click("#tab-btn-grades")
        page.wait_for_timeout(500)

        # Switch to Grade 2, Arabic, Month October (t1_m1)
        page.select_option("#grade-select", "2")
        page.wait_for_timeout(300)
        page.select_option("#subject-select", "arabic")
        page.wait_for_timeout(300)
        page.select_option("#exam-month-select", "t1_m1")
        page.wait_for_timeout(500)

        # Locate grade input for student SK-G2-AR-001
        target_student_id = "SK-G2-AR-001"
        input_selector = f"input[data-student-id='{target_student_id}'][data-subject-id='arabic']"
        page.wait_for_selector(input_selector)

        # Enter Arabic grade: 19.5
        page.fill(input_selector, "19.5")
        page.dispatch_event(input_selector, "input")
        page.dispatch_event(input_selector, "change")
        page.wait_for_timeout(600)

        # Take screenshot
        page.screenshot(path="test_step1_asmaa_arabic.png")
        print(f"✓ Arabic grade 19.5 entered for {target_student_id} by Ms. Asmaa")

        # Logout Ms. Asmaa
        page.evaluate("logoutTeacher()")
        page.wait_for_timeout(500)
        print("✓ Ms. Asmaa logged out cleanly")

        # ----------------------------------------------------
        # TEST 2: TEACHER B (MS. YARA) - ENGLISH GRADE ENTRY
        # ----------------------------------------------------
        print("\n--- STEP 2: Teacher B (Ms. Yara) entering English grades ---")
        page.evaluate("selectTeacherForLogin('t_yara')")
        page.wait_for_timeout(300)
        page.fill("#input-pin", "1234")
        page.evaluate("verifyTeacherPin()")
        page.wait_for_timeout(800)

        teacher_name = page.inner_text("#logged-teacher-name")
        print(f"Logged in as: {teacher_name}")
        assert "يارا" in teacher_name, f"Expected Ms. Yara, got {teacher_name}"

        # Switch to Grades tab
        page.click("#tab-btn-grades")
        page.wait_for_timeout(500)

        # Switch to Grade 2, English OL, Month October (t1_m1)
        page.select_option("#grade-select", "2")
        page.wait_for_timeout(300)
        page.select_option("#subject-select", "english_ol")
        page.wait_for_timeout(300)
        page.select_option("#exam-month-select", "t1_m1")
        page.wait_for_timeout(500)

        # Locate grade input for student SK-G2-AR-001
        input_selector_en = f"input[data-student-id='{target_student_id}'][data-subject-id='english_ol']"
        page.wait_for_selector(input_selector_en)

        # Enter English grade: 18.5
        page.fill(input_selector_en, "18.5")
        page.dispatch_event(input_selector_en, "input")
        page.dispatch_event(input_selector_en, "change")
        page.wait_for_timeout(600)

        # Take screenshot
        page.screenshot(path="test_step2_yara_english.png")
        print(f"✓ English OL grade 18.5 entered for {target_student_id} by Ms. Yara")

        # Logout Ms. Yara
        page.evaluate("logoutTeacher()")
        page.wait_for_timeout(500)
        print("✓ Ms. Yara logged out cleanly")

        # ----------------------------------------------------
        # TEST 3: VERIFY LOCALSTORAGE COEXISTENCE & NO OVERWRITE
        # ----------------------------------------------------
        print("\n--- STEP 3: Verifying localStorage data integrity ---")
        grades_raw = page.evaluate("localStorage.getItem('smile_kids_teacher_grades')")
        assert grades_raw is not None, "smile_kids_teacher_grades not found in localStorage"
        grades = json.loads(grades_raw)

        arabic_key = f"st_{target_student_id}_t1_arabic"
        english_key = f"st_{target_student_id}_t1_english_ol"

        assert arabic_key in grades, f"Key {arabic_key} missing from teacher grades!"
        assert english_key in grades, f"Key {english_key} missing from teacher grades!"

        ar_score = grades[arabic_key].get("m1")
        en_score = grades[english_key].get("m1")

        print(f"Stored Arabic grade: {ar_score} (Key: {arabic_key})")
        print(f"Stored English grade: {en_score} (Key: {english_key})")

        assert float(ar_score) == 19.5, f"Expected 19.5 for Arabic, got {ar_score}"
        assert float(en_score) == 18.5, f"Expected 18.5 for English, got {en_score}"
        print("✓ CONFIRMED: Both grades exist simultaneously and did NOT overwrite each other!")

        # ----------------------------------------------------
        # TEST 4: MASTER ADMIN LOGIN (PIN 9999) - ALL ACCESS
        # ----------------------------------------------------
        print("\n--- STEP 4: Simulating Master Admin login (PIN 9999) ---")
        page.evaluate("openAdminModal()")
        page.wait_for_timeout(300)
        page.fill("#input-admin-pin", "9999")
        page.evaluate("verifyAdminPin()")
        page.wait_for_timeout(800)

        admin_role = page.inner_text("#logged-teacher-role")
        print(f"Admin Role banner: {admin_role}")
        assert "مدير النظام" in admin_role, f"Expected Admin mode, got {admin_role}"

        # Switch to Grades tab
        page.click("#tab-btn-grades")
        page.wait_for_timeout(500)

        # Admin selects Grade 2, Arabic
        page.select_option("#grade-select", "2")
        page.wait_for_timeout(300)
        page.select_option("#subject-select", "arabic")
        page.wait_for_timeout(300)
        page.select_option("#exam-month-select", "t1_m1")
        page.wait_for_timeout(500)

        admin_ar_val = page.input_value(input_selector)
        print(f"Master Admin reads Arabic score: {admin_ar_val}")
        assert float(admin_ar_val) == 19.5, f"Admin expected 19.5 for Arabic, got {admin_ar_val}"

        # Admin selects Grade 2, English OL
        page.select_option("#subject-select", "english_ol")
        page.wait_for_timeout(500)

        admin_en_val = page.input_value(input_selector_en)
        print(f"Master Admin reads English OL score: {admin_en_val}")
        assert float(admin_en_val) == 18.5, f"Admin expected 18.5 for English, got {admin_en_val}"

        page.screenshot(path="test_step3_admin_verified.png")
        print("✓ CONFIRMED: Master Admin successfully accessed and verified all subjects across all teachers!")

        # ----------------------------------------------------
        # TEST 5: STUDENT ROSTER DASHBOARD - CERTIFICATES & SCORES
        # ----------------------------------------------------
        print("\n--- STEP 5: Verifying Student_Roster_Dashboard.html ---")
        page2 = context.new_page()
        page2.goto(ROSTER_URL)
        page2.wait_for_timeout(1500)

        # Force sync teacher grades
        page2.evaluate("syncAllTeacherGradesIntoStudents(false)")
        page2.wait_for_timeout(500)

        # Test 5A: Certificates Tab
        print("\nTesting Student Certificate Preview...")
        page2.evaluate("switchMainTab('certificates')")
        page2.wait_for_timeout(500)

        # Select Grade 2 and target student SK-G2-AR-001
        page2.evaluate(f"currentGrade = 2; certCurrentStudentId = '{target_student_id}';")
        page2.select_option("#cert-period-select", "t1_m1")
        page2.wait_for_timeout(500)
        page2.evaluate("renderCertificatePreview()")
        page2.wait_for_timeout(500)

        cert_content = page2.inner_text("#certificate-preview-container")
        print(f"Certificate rendered for student {target_student_id}.")

        # Verify Arabic and English scores are visible in certificate
        assert "19.5" in cert_content, "Arabic score 19.5 not found in certificate!"
        assert "18.5" in cert_content, "English score 18.5 not found in certificate!"
        page2.screenshot(path="test_step4_certificate_preview.png")
        print("✓ CONFIRMED: Certificate displays both Arabic (19.5) and English (18.5)!")

        # Test 5B: Grades / Scores Tab
        print("\nTesting Scores / Grades Tab...")
        page2.evaluate("switchMainTab('grades')")
        page2.wait_for_timeout(500)
        page2.evaluate("currentGrade = 2; currentGradesPeriod = 't1_m1'; renderGradesModule();")
        page2.wait_for_timeout(500)

        row_selector = f"#row-st-{target_student_id}"
        page2.wait_for_selector(row_selector)
        row_text = page2.inner_html(row_selector)

        assert 'value="19.5"' in row_text or '>19.5<' in row_text or '19.5' in row_text, "Arabic score 19.5 missing from scores table!"
        assert 'value="18.5"' in row_text or '>18.5<' in row_text or '18.5' in row_text, "English score 18.5 missing from scores table!"
        page2.screenshot(path="test_step5_scores_tab.png")
        print("✓ CONFIRMED: Scores tab displays both Arabic (19.5) and English (18.5) in student row!")

        # Save exported grades dictionary for backup generation
        with open("smile_kids_teacher_grades.json", "w", encoding="utf-8") as f:
            json.dump(grades, f, ensure_ascii=False, indent=2)
        print("✓ Dumped current live teacher grades to smile_kids_teacher_grades.json")

        browser.close()

    # Re-run master backup script with the newly recorded grades
    print("\n--- STEP 6: Generating updated Master CSV Backup ---")
    import generate_master_backup
    students, grades = generate_master_backup.load_students_and_grades()
    generate_master_backup.generate_backup_csv(students, grades)

    print("\n==================================================")
    print("🎉 ALL TESTS PASSED SUCCESSFULLY WITH 100% ACCURACY!")
    print("==================================================")

if __name__ == "__main__":
    run_verification()
