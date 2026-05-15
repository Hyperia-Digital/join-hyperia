# join-hyperia
The public-facing website for Hyperia, a RP-focused Hytale server

# How to get started with this site
The following instructions assume
1. minimal set up and coding experience
2. using Windows 10 or later

Please let me know if anything is unclear or could be improved.

If you have already installed the Linux environment on your Windows machine ([WSL](https://learn.microsoft.com/en-us/windows/wsl/)), you can also use that, but will need some slightly different instructions. Let me know if you need instructions for this use case.

## Prerequisites

# Install VS Code
https://code.visualstudio.com/download

# Install winget (optional)
You may already have this! In your terminal (you can do this in VS Code by opening the app and going to View > Terminal).

Then type: `winget -v`
If a version number returns, you already have winget and are good to go.

Otherwise, see these instructions: https://learn.microsoft.com/en-us/windows/package-manager/winget/

# Install git
As before, you can see if this is already on your system by typing: `git -v` If git is not installed, you will see an error like this
![git: The term 'git' is not recognized as a name of a cmdlet, function, script file, or executable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.](/howto/git-error.png)

https://git-scm.com/install/windows

Note the instructions for using winget, assuming you got that working.
`winget install --id Git.Git -e --source winget`

After installing git, completely shut down VS Code, reopen it and test it out by typing `git -v` again. You should now see the version number.

# Switch your terminal to git bash
On Windows, your default terminal may be either Command Prompt or PowerShell. For working in this project, you will likely want to open a Git Bash terminal instead.
![Select your terminal and choose git bash](/howto/git-bash.png)

You can also create a profile or setting so you do not need to do this consistently. See more info here: https://code.visualstudio.com/docs/terminal/profiles

# Create a space to save your web projects
If this is your first web project, I recommend creating a folder that is a peer to the Documents, etc. folders in your Windows userprofile named **Sites**.

If you open any file manager window and in the address bar type `%userprofile%` and press ENTER, it will take you to your user window.

![%userprofile%](/howto/userprofile.png)

In that window, create a new folder named **Sites**.

## Install this project
1. Right click on the **Sites** folder and choose open with VS Code. This will open a new Code instance that is already focused on the **Sites** folder.
2. Open the VS Code integrated terminal and make sure it is set to Git Bash.
3. In the terminal, type `git clone https://github.com/Hyperia-Digital/join-hyperia.git`
4. This will create a new folder **join-hyperia** with this repos' files in it. 🙌

Going forward, you can click on that folder (instead of **Sites**) and use it to open up the VS Code editor focused only on this project. Try doing that now.
