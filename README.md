# join-hyperia
The public-facing website for Hyperia, a RP-focused Hytale server.

Built using the [Eleventy](https://www.11ty.dev/) static site generator and the [ZeroPoint](https://getzeropoint.com/) starter kit.

---

# How to get started with this site

<details>
<summary><strong>🆕 Is this your first time working with this codebase? If so, click here!</strong></summary>

The following instructions assume you:
1. are using Windows 10 or later and do _not_ have [WSL](https://learn.microsoft.com/en-us/windows/wsl/) set up.
2. have minimal coding experience and likely do not have some standard tools already installed.

If, at any point, you run into an error, 🛑 stop 🛑 and do not proceed through the additional steps. It's important during setup to solve problems as they come up.

Also, if you are attempting to use this codebase in another environment, like WSL or macOS and require instructions for that, please open [an issue](https://github.com/Hyperia-Digital/join-hyperia/issues) and include information about what would help you out.

## Prerequisites
Before you can work with this codebase, you need a few things:
1. A code editor (VS Code)
2. winget
3. git
4. node

This section will walk you through installing each of those And some other basics to get to work with this codebase.

### Create a space to save your web projects
If this is your first web project, I recommend creating a folder that is a **peer** to the Documents, Music, Downloads, etc. folders in your Windows userprofile named **Sites**.

If you open any file manager window and in the address bar type `%userprofile%` and press ENTER, it will take you to your user window.

![%userprofile%](/howto/userprofile.png)

In that window, create a new folder named **Sites**. Later, when you're ready to download this project, you can save it in your **Sites** folder.

### VS Code
https://code.visualstudio.com/download

👉 Important Note: While it's possible to use different terminal/command line applications, VS Code includes a [fully integrated terminal](https://code.visualstudio.com/docs/terminal/basics). Going forward, any time the instructions mention the terminal, you can use this integrated terminal.

💡 There's A LOT that can be done to configure your code editor (as well as other code editor options). For simplicity and to help with instructions, I recommend using VS Code, but also want to note that screenshots and instruction videos for VS Code may not look _exactly_ like your code editor, since everyone has their own extensions, fonts, and other changes to make their code editor work for them.

### winget
Before installing, check if you already have this in your system. You can do this by:
1. Opening up VS Code
2. Opening up the integrated terminal in VS Code by going to View > Terminal.
3. In the terminal, type: `winget -v`

If a version number returns, you already have winget and are good to go.

Otherwise, see these instructions: https://learn.microsoft.com/en-us/windows/package-manager/winget/

### git
As before, you can see if this is already on your system by typing: `git -v`

If git is not installed, you will see an error like this:
![git: The term 'git' is not recognized as a name of a cmdlet, function, script file, or executable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.](/howto/git-error.png)

To install git, see this page: https://git-scm.com/install/windows and 👉 make sure to note the instructions for using winget, assuming you got that working in the previous step:
`winget install --id Git.Git -e --source winget`

After your git installation is complete (note that it may prompt you with permissions popups/alerts), completely shut down VS Code to reset your terminal. Then, reopen it and verify your installation by typing `git -v` again. You should now see the version number.

### Switch your terminal to git bash
On Windows, your default terminal may be either **Command Prompt** or **PowerShell**. For working in this project, you will likely want to open a **Git Bash** terminal instead.
![Select your terminal and choose git bash](/howto/git-bash.png)

💡 You can also create a profile or setting so you do not need to do make this change consistently. See more info here: https://code.visualstudio.com/docs/terminal/profiles

👉 Important Note: There's nothing wrong with the other two options, but, for simplicity, I'm only testing out commands going forward using **Git Bash**.

### Install node
`winget search OpenJS.NodeJS` to see all available Node versions
`winget install -e --id OpenJS.NodeJS.LTS` to install the long-term support (LTS) version 

⚠️ After installing Node, you will need to shut down VS Code entirely to allow your terminal to refresh its config.

After restarting VS Code, use the integrated terminal to verify that Node installed correctly:
```
node -v
npm -v
```

should both return version numbers.

## Install this project
1. Right click on the **Sites** folder and choose open with VS Code. This will open a new Code instance that is already focused on the **Sites** folder.
2. Open the VS Code integrated terminal and make sure it is set to Git Bash.
3. In the terminal, type `git clone https://github.com/Hyperia-Digital/join-hyperia.git`
4. This will create a new folder **join-hyperia** with this repos' files in it. 🙌

Going forward, you can click on that folder (instead of **Sites**) and use it to open up the VS Code editor focused only on this project.

## Complete project setup
1. Open the project folder in VS Code. This means your topmost folder in the [Explorer view](https://code.visualstudio.com/docs/getstarted/userinterface#_explorer-view) should be `join-hyperia`.
2. Install the project dependencies by typing `npm i` into your terminal.

After the dependencies are installed, you're readyk to go! 🎉
</details>
<br>

---

# Running the project
The project can be run in three different modes:
- development: for working on the site locally either to view it or to make changes
- staging: a preview of production; it is The same as production except every page is flagged `noindex`
- production: how the site is built for deploying to a web server

## Run the project locally

```bash
npm run dev
```

While running locally, you'll see a regular stream of updates and, sometimes, error messages in your terminal.

When you want to stop the server, click the terminal window and type press the **CONTROL** key and the **C** key together.

## Build for staging

```bash
npm run staging
```

## Build for production

```bash
npm run production
```

---

# Start building your website

Create and edit your site **right from this readme file!**.

🪐 Or edit your entire site in a web-based editor by [clicking here](https://github.com/Hyperia-Digital/join-hyperia/).

<details>
  <summary><strong>📝 Creating and editing pages</strong></summary>

## Creating and editing pages and content

### Pages

Create your site's main content! Pages can be written in HTML or [Markdown](https://www.markdownguide.org/basic-syntax/)!

* [Edit the homepage](https://github.com/Hyperia-Digital/join-hyperia/edit/main/src/content/pages/index.md)
* [Create a new page](https://github.com/Hyperia-Digital/join-hyperia/new/main/?filename=/src/content/pages/&value=---%0Atitle%3A%20Enter%20page%20title%20here%0A---)

<!--

---
#### Posts
Blog posts
* [Create a new post](https://github.com/Hyperia-Digital/join-hyperia/new/main/?filename=/src/content/posts/&value=----%0Atitle%3A%20%22Enter%20post%20title%22%0Adate%3A%20%222025-01-01%0A---)

-->
</details>

<details>
  <summary><strong>🎨 Look and Feel</strong></summary>

## Look and Feel

### Navigation

Your site's navigation is how your users will get around! Edit the site's navigation menu in [JSON format](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)!

* [Edit the navigation](https://github.com/Hyperia-Digital/join-hyperia/edit/main/src/data/navigation.json)

### Styles

Colors, spacing, and fonts, oh my! You can edit your branding and styles here using CSS, SCSS, and CSS variables! 

* [Edit your branding](https://github.com/Hyperia-Digital/join-hyperia/edit/main/src/assets/styles/_branding.scss)
* [Edit your overall styles](https://github.com/Hyperia-Digital/join-hyperia/edit/main/src/assets/styles/styles.scss)

Learning CSS can be daunting but there are a ton of useful resources on the web. Check out [SmolCSS](https://smolcss.dev) to get started!

### Javascript

**Optional!** Add javascript functionality to your site

* [Add Javascript](https://github.com/Hyperia-Digital/join-hyperia/edit/main/src/assets/scripts/main.js)

</details>

---

# Deploying the site

Once you set up deployment, any time you commit to your repository's `main` branch, GitHub will build and deploy your site.

<details>
  <summary><strong>Deploy to GitHub Pages</strong></summary>

## Setup:

1. [Enable GitHub Pages](https://github.com/Hyperia-Digital/join-hyperia/settings/pages) in your repository settings, choose "GitHub Actions" as the source.
2. [Allow "Read and write permissions" for GitHub Workflows](https://github.com/Hyperia-Digital/join-hyperia/settings/actions) in your repository settings for the GitHub Actions workflow to run.

</details>

<details>
  <summary><strong>Deploy to Netlify</strong></summary>

## Setup:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Hyperia-Digital/join-hyperia/)


</details>

---

# Project structure

Ready to go deeper? Here's how the project files are organized

```sh
example.com                 # → Root of your project
├── src/                    # → Source directory
│   ├── assets/             # → Site assets
│   │   ├── fonts/
│   │   ├── images/
│   │   ├── scripts/
│   │   ├── styles/
│   │   ├── views/
│   │   │   └── layouts/
│   │   │   └── partials/
│   │   └── assets.json     # → Shared attributes for files in the assets directory
│   ├── config/             # → Eleventy configuration
│   │   ├── build.js        # → Javascript and CSS build and bundler configuration 
│   │   ├── collections.js  # → Add and configure collections (https://www.11ty.dev/docs/collections/)
│   │   ├── filters.js      # → Add and configure filters (https://www.11ty.dev/docs/filters/)
│   │   ├── passthroughs.js # → Add and configure passthroughs (https://www.11ty.dev/docs/copy/)
│   │   ├── plugins.js      # → Add and configure plugins (https://www.11ty.dev/docs/plugins/)
│   │   ├── shortcodes.js   # → Add and configure shortcodes (https://www.11ty.dev/docs/shortcodes/)
│   │   ├── templateLanguages.js   # → Configure custom template languages (https://www.11ty.dev/docs/languages/custom/)
│   │   ├── watchtargets.js # → Add and configure watch targets (https://www.11ty.dev/docs/watch-serve/)
│   │   └── config.json     # → Shared attributes for files in the config directory
│   ├── content             # → A nice, organized, recommended place for all site content
│   │   └── pages           # → Add "pages" collection items here
│   └── data                # → Customize site data (https://www.11ty.dev/docs/data/)
│       ├── navigation.json # → Site navigation configuration
│       └── site.json       # → Site branding configuration
├── .eleventy.js            # → Eleventy config file
├── netlify.toml            # → Netlify deployment and plugin configuration (optional)
├── README.ZeroPoint.md     # → Template repository readme
└── README.md
```

## Eleventy Configuration

The Eleventy configuration is abstracted from the typical `.eleventy.js` file and moved to `/src/config/` for easy organization and configuration of collections, filters, passthroughs, etc.
