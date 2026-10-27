# Attendance and grade save update - 27 October 2026

- Attendance is for a whole school day, selected by date, grade and section.
- An ordinary local save no longer uploads every student's record.
- Grade saves update one student, subject and assessment period. Attendance saves update only selected changed students for the chosen date.
- Each grade or daily attendance change atomically updates its record and the existing student's matching field. Unrelated subjects, periods, photos and profile fields are preserved.
- A green confirmation means the server write completed. A red warning means cloud confirmation failed or timed out. The pending edit stays on the same device for explicit retry after checking the connection.
- Pending edits are tied to the account that made them. Another account cannot replay them.
- Profile saves cannot carry attendance or grade snapshots. The REST profile fallback uses update masks so unrelated fields are preserved.
- Existing September marks and attendance are not migrated, rewritten or deleted by this update. There is no new policy locking future staff edits to September.

## Verification

`node tests/sync_safety.cjs` runs isolated synthetic tests without network access.
`tests/firestore_emulator_safety.cjs` is for a local Firestore emulator with `firebase` and `@firebase/rules-unit-testing` installed. It uses the demo project `demo-school-safety`, never production.

Local checks covered separate staff sessions, concurrent different subjects, listeners, fresh-session readback, failed writes, pending/retry after reload, account ownership, cleared grades, daily attendance and unchanged unrelated records.

These checks do not replace a live staff-account test. Live readiness still requires sign-in, temporary isolated test records, save/reopen and second-account verification, followed by complete test-data cleanup. Existing pupil records must not be used as test data.
