# Git HOL 2 – Ignoring Unwanted Files with .gitignore

**Objective:** Learn how to use `.gitignore` to exclude unnecessary files and folders from version control.

## Steps & Commands

```bash
# Move to the existing repository
cd GitDemo

# 1. Create files and folders to ignore
touch app.log
mkdir log
touch log/server.log

# 2. Create a .gitignore file
cat > .gitignore << EOF
# Ignore all log files
*.log

# Ignore the log directory
log/
EOF

# 3. Verify ignored files
git status

# 4. Stage and commit the .gitignore file
git add .gitignore
git commit -m "Add .gitignore for log files"

# 5. Attempt to stage an ignored file
git add app.log

# 6. Verify status
git status
```

## Folder Structure

```
GitDemo/
├── .git/
├── .gitignore
├── welcome.txt
├── app.log        (ignored)
└── log/           (ignored)
    └── server.log
```

## Expected Outcome

- `.gitignore` is tracked by Git.
- `app.log` and the `log/` directory are ignored.
- `git status` does not list ignored files.
- Attempting `git add app.log` displays a message that the file is ignored and it is not staged.

## Outcome

Successfully configured `.gitignore` to exclude log files and directories from version control while tracking only the required project files.