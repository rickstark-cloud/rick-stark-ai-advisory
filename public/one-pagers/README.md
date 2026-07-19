# One-Pager Drop Folder

Drop a PDF into this folder, commit, and push — it shows up in the One-Pager Library automatically. No manifest or metadata file needed.

## Naming convention

The title shown on the site is derived from the filename:

- The extension is stripped.
- A leading date prefix like `2026-07-19_` is stripped (and used to sort newest-first).
- A trailing version suffix like `_v2` is stripped.
- Remaining `_` and `-` characters become spaces, and each word is capitalized.

Example: `2026-07-19_AI_Readiness_Checklist_v2.pdf` becomes **"AI Readiness Checklist"**, dated 2026-07-19.

Files without a date prefix still work — they just sort by their file date instead, and are titled the same way.
