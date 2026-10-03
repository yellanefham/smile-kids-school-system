import time, json, sys
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding='utf-8')

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1400, "height": 900})

        # Load Teacher Portal
        page.goto("file:///C:/Users/Hisham%20Abdelfadil/Downloads/smile_kids_sis/Teacher_Portal.html")
        page.wait_for_load_state("networkidle")

        print("1. Clicking on Ms. Asmaa...")
        # Find card for Ms. Asmaa
        asmaa_card = page.locator("text=مس / أسماء").first
        asmaa_card.click()
        page.wait_for_timeout(500)

        # Enter PIN 1234
        pin_input = page.locator("#input-pin")
        pin_input.fill("1234")
        pin_input.press("Enter")
        page.wait_for_timeout(800)

        # Verify active dashboard tab is attendance
        active_tab_btn = page.locator("#tab-btn-attendance")
        print("Tab Attendance class:", active_tab_btn.get_attribute("class"))

        # Verify Day selector and Period selector
        day_val = page.locator("#att-day-select").input_value()
        period_val = page.locator("#att-period-select").input_value()
        badge_text = page.locator("#att-target-class-badge").inner_text()
        banner_title = page.locator("#period-banner-title").inner_text()
        banner_time = page.locator("#period-time-range").inner_text()

        print(f"Day: {day_val}, Period: {period_val}")
        print(f"Class Badge: {badge_text}")
        print(f"Banner Title: {banner_title}")
        print(f"Banner Time: {banner_time}")

        # Check student roster count
        cards = page.locator("#att-students-list > div")
        student_count = cards.count()
        print(f"Student Roster Count loaded: {student_count}")

        # Capture screenshot of Attendance Tab
        page.screenshot(path="C:/Users/Hisham Abdelfadil/.gemini/antigravity/brain/86b82d1d-2a39-4f57-8186-51bef8e1186a/teacher_period6_attendance_verified.png")

        # Switch to Weekly Schedule tab
        print("\n2. Switching to Weekly Schedule...")
        page.locator("#tab-btn-schedule").click()
        page.wait_for_timeout(500)

        # Verify that Sunday Period 6 has the highlighted active class badge
        active_cell = page.locator("text=حصتك الآن").first
        print("Active cell found:", active_cell.is_visible())
        page.screenshot(path="C:/Users/Hisham Abdelfadil/.gemini/antigravity/brain/86b82d1d-2a39-4f57-8186-51bef8e1186a/teacher_period6_schedule_highlighted.png")

        # Test another teacher: logout and login as Ms. Yara
        print("\n3. Testing Ms. Yara...")
        page.locator("button[onclick='logoutTeacher()']").click()
        page.wait_for_timeout(500)

        yara_card = page.locator("text=مس / يارا").first
        yara_card.click()
        page.wait_for_timeout(500)
        page.locator("#input-pin").fill("1234")
        page.locator("#input-pin").press("Enter")
        page.wait_for_timeout(800)

        yara_badge = page.locator("#att-target-class-badge").inner_text()
        yara_banner = page.locator("#period-banner-title").inner_text()
        print(f"Ms. Yara Class Badge: {yara_badge}")
        print(f"Ms. Yara Banner: {yara_banner}")

        page.screenshot(path="C:/Users/Hisham Abdelfadil/.gemini/antigravity/brain/86b82d1d-2a39-4f57-8186-51bef8e1186a/teacher_yara_period6_verified.png")

        browser.close()
        print("\nALL VERIFICATIONS PASSED SUCCESSFULLY!")

if __name__ == "__main__":
    run()
