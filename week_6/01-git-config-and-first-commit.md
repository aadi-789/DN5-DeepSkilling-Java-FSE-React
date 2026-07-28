# Git HOL 1 – Configuration & First Commit

## Objective

Configure Git with user information, optionally set Notepad++ as the default editor, initialize a Git repository, create a file, stage it, and make the first commit.

## Prerequisites

- Git for Windows installed
- Git Bash
- GitHub account
- (Optional) Notepad++

## Steps & Commands

```bash
# 1. Verify Git installation
git --version

# 2. Configure Git identity
git config --global user.name "Aditya Singh"
git config --global user.email "your-email@example.com"

# 3. (Optional) Set Notepad++ as the default editor
git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"

# 4. Verify configuration
git config --global --list

# 5. Create a repository
mkdir GitDemo
cd GitDemo

git init

# 6. Create a file
echo "Hello Git" > welcome.txt

# 7. Check repository status
git status

# 8. Stage the file
git add welcome.txt

# 9. Verify staged changes
git status

# 10. Commit
git commit -m "Initial commit: add welcome.txt"

# 11. View commit history
git log
```

## Folder Structure

```
GitDemo/
├── .git/
└── welcome.txt
```

## Outcome

- Configured Git username and email.
- Initialized a local Git repository.
- Created and staged a file.
- Made the first commit successfully.
- Verified the commit using `git log`.