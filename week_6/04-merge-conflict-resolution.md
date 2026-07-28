# Git HOL 4 – Resolving a Merge Conflict

**Objective:** Create a merge conflict intentionally, resolve it manually, and complete the merge successfully.

## Steps & Commands

```bash
# Navigate to the repository
cd GitDemo

# 1. Ensure the working tree is clean
git status

# 2. Create a new branch
git branch GitWork
git switch GitWork
# (or: git checkout GitWork)

# 3. Create hello.xml and commit it
echo "<msg>Hello from branch</msg>" > hello.xml
git add hello.xml
git commit -m "Add hello.xml on GitWork"

# 4. Switch back to the main branch
git switch main
# (Use 'master' if your repository uses master)

# 5. Create hello.xml with different content
echo "<msg>Hello from main</msg>" > hello.xml
git add hello.xml
git commit -m "Add hello.xml on main"

# 6. View commit history
git log --oneline --graph --decorate --all

# 7. Merge the branch
git merge GitWork

# A merge conflict will occur.
# Git marks the conflict as:

# <<<<<<< HEAD
# <msg>Hello from main</msg>
# =======
# <msg>Hello from branch</msg>
# >>>>>>> GitWork

# 8. Inspect the conflict
git diff

# Optional: Open a merge tool
git mergetool

# 9. Resolve the conflict manually, then stage and commit
git add hello.xml
git commit -m "Resolve merge conflict in hello.xml"

# 10. Ignore merge backup files
echo "*.orig" >> .gitignore
git add .gitignore
git commit -m "Ignore .orig backup files"

# 11. Delete the merged branch
git branch -d GitWork

# 12. View the final history
git log --oneline --graph --decorate
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

- A merge conflict occurs when merging `GitWork` into `main`.
- `hello.xml` contains Git conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
- After resolving the conflict, the merge completes successfully.
- `.orig` backup files are ignored using `.gitignore`.
- `git log --oneline --graph --decorate` displays the merge commit.
- `GitWork` is deleted successfully after the merge.

## Outcome

Successfully created a merge conflict, resolved it manually, completed the merge, configured Git to ignore merge backup files, and verified the merged history.