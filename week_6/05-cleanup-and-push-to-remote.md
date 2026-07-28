# Git HOL 5 – Clean Up & Push to Remote Repository

**Objective:** Synchronize the local repository with the remote repository and push all pending commits to GitHub.

## Steps & Commands

```bash
# Navigate to the repository
cd GitDemo

# 1. Verify the working tree is clean
git status

# 2. View all local and remote branches
git branch -a

# 3. Verify the configured remote
git remote -v

# 4. Add a remote repository (only if it does not already exist)
git remote add origin https://github.com/<your-username>/GitDemo.git

# 5. Pull the latest changes from the remote repository
git pull origin main
# (Use 'master' instead of 'main' if your repository uses master)

# 6. Push local commits to the remote repository
git push origin main

# 7. Verify the remote commit history
git log --oneline origin/main
```

## Folder Structure

```
GitDemo/
├── .git/
├── .gitignore
├── welcome.txt
├── feature.txt
└── hello.xml
```

## Expected Outcome

- The local repository is synchronized with the remote repository.
- `git pull` retrieves and merges any new commits from the remote branch.
- `git push` uploads all local commits successfully.
- The latest commits are visible in the GitHub repository.
- `git log --oneline origin/main` matches the local commit history.

## Outcome

Successfully synchronized the local repository with the remote repository, verified the branch status, pulled the latest changes, pushed all local commits to GitHub, and confirmed that both repositories are up to date.