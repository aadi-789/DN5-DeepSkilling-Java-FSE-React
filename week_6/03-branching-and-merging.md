# Git HOL 3 – Branching & Merging

**Objective:** Create a new branch, make changes in it, and merge those changes back into the main branch.

## Branching

```bash
# Navigate to the repository
cd GitDemo

# 1. Create a new branch
git branch GitNewBranch

# 2. View available branches
git branch
git branch -a

# 3. Switch to the new branch
git switch GitNewBranch
# (or: git checkout GitNewBranch)

# 4. Create a new file
echo "feature work" > feature.txt

# 5. Stage and commit the changes
git add feature.txt
git commit -m "Add feature.txt on GitNewBranch"

# 6. Verify repository status
git status
```

## Merging

```bash
# 7. Switch back to the main branch
git switch main
# (Use 'master' instead of 'main' if your repository uses master)

# 8. Compare the branches
git diff main GitNewBranch

# 9. (Optional) Open a visual diff tool
git difftool main GitNewBranch

# 10. Merge the feature branch
git merge GitNewBranch

# 11. View commit history
git log --oneline --graph --decorate

# 12. Delete the merged branch
git branch -d GitNewBranch

# 13. Verify repository status
git status
```

## Folder Structure

```
GitDemo/
├── .git/
├── .gitignore
├── welcome.txt
└── feature.txt
```

## Expected Outcome

- `GitNewBranch` is created successfully.
- `feature.txt` is committed on the new branch.
- The branch is merged into `main` (or `master`).
- `feature.txt` is available in the main branch after merging.
- `git log --oneline --graph --decorate` displays the branch history.
- `GitNewBranch` is deleted successfully after the merge.

## Outcome

Successfully created and switched to a new Git branch, committed changes, merged the branch into the main branch, verified the commit history, and removed the merged branch.