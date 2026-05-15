## Set up your git profile
Git allows you not just to pull the local copy of this code to your machine, but also to edit and contribute to it. To do that, you need to set up an identity.

Usually, you set these things up in a global way -- so that you use the same identity and email address across all your work. However, if you want to keep things separate (say, your professional git history from your Hytale contributions), you want to set up an identity _just_ for this project.

You can do this by opening this project folder in VS Code and typing in the terminal:
```
git config user.name "your name here"
git config user.email "you@example.com"
```
This is the user name and email address that will show up on your contributions back to this repo and will be publicly visible.

Typing these commands will return the info you set for your `git config` if you ever want to review it:
```
git config user.name
git config user.email
```

## Your first git push
The first time you push code from VS Code to GitHub, you will see a popup that authorizes a connection with GitHub. This serves to connect your local identity with your GitHub profile.