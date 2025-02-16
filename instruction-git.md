# Git

### Step 1

To be ensure that your codebase is updated open your terminal and write the next command:

```
git pull
```

Then you need to create new `branch` for each your next task. To achieve that you should use your terminal again. Try the command:

```
git switch -c branch-name
```

- `git` - is an application
- `switch` - is a command
- `-c` - is a flag that means creating new branch
- `branch-name` - is any task-related name you could use

### Step 2

Start work on your task. You could create `commit` whenever you want to fix your changes in `repository` as a separate history step. For example

```
git add .
git commit -m "header added"
git push
```

Your `target` is resolve the task and send the whole solution to the `repository`.

When the task will be done - send it to repository with commands above.

### Step 3

When the task is finished and code was sent to repository then open it https://github.com/ValeryiaPraslova/test and create the **`Pull Request`**

If you don't see the **Pull Request** button, try to google "how to create pull request on github"

It will makes possible to check your code by your teammates and leave the comments on your branch if something might be improved.

Code reviewers are able to approve your changes if everything looks fine, then the code will be merged with general codebase.
