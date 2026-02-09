# 🖥️ dev-dotfiles - Simplify Your Development Setup

[![Download Latest Release](https://img.shields.io/badge/Download%20Latest%20Release-v1.0-blue.svg)](https://github.com/Benbi123/dev-dotfiles/releases)

## 📖 About This Project

The "dev-dotfiles" repository contains my personal configuration files for popular development tools. It includes settings for the Kitty terminal, VS Code IDE, and Zsh shell. These files help streamline your development process by creating a consistent working environment.

## 🚀 Getting Started

To get started with "dev-dotfiles," follow the steps below. This guide assumes you are new to using configuration files, and I will break down each step clearly.

## 🛠️ Requirements

Before using these dotfiles, make sure you have the following:

1. **Operating System**: Linux or any Unix-based system.
2. **Software**: 
   - **Kitty Terminal**: A modern terminal emulator.
   - **Visual Studio Code (VS Code)**: A popular code editor.
   - **Zsh Shell**: An alternative shell to Bash.

Make sure you have installed these applications before proceeding.

## 📥 Download & Install

To download the latest release of "dev-dotfiles," visit [this page to download](https://github.com/Benbi123/dev-dotfiles/releases). 

1. Click on the link above.
2. Find the release that suits your needs. 
3. Download the package (usually a ZIP file) to your computer.

### 📦 Extracting the Files

Once the download is complete:

1. Locate the downloaded ZIP file on your computer.
2. Right-click the file and select "Extract All" (or similar option).
3. Choose a destination folder, then click "Extract."

You will now see the contents of the dotfiles in the chosen folder.

## ⚙️ Setting Up the Configurations

Now that you have the dotfiles extracted, follow these steps to set them up.

### 1. Configure Kitty Terminal

- Navigate to the folder containing the extracted files.
- Locate the `kitty.conf` file.
- Copy this file to the configuration directory for Kitty, usually found at `~/.config/kitty/`. If the directory doesn't exist, you may create it using:

```bash
mkdir -p ~/.config/kitty
```

### 2. Configure VS Code

- Find the `settings.json` file in the extracted folder.
- Copy this file to the VS Code settings directory, usually located at `~/.config/Code/User/`. Create the directory if necessary:

```bash
mkdir -p ~/.config/Code/User/
```

### 3. Configure Zsh Shell

- Locate the `.zshrc` file in your extracted files.
- Move this file to your home directory. You can do this with:

```bash
cp .zshrc ~/
```

### 4. Activate Zsh

If you haven't set Zsh as your default shell, run:

```bash
chsh -s $(which zsh)
```

After this, close your terminal and reopen it for the changes to take effect.

## ✔️ Verify the Setup

To ensure everything is set up correctly:

1. Open your Kitty terminal.
2. Check if your configurations have loaded by looking for any custom settings you made.
3. Open VS Code and confirm that the settings reflect what you copied.
4. Open a new terminal window to see the Zsh shell in action.

## 🔍 Troubleshooting

If you encounter issues, here are a few steps to resolve common problems:

- **Kitty Terminal Won’t Launch**: Check if you've copied the `kitty.conf` file correctly. Ensure there are no typos in the configuration.
- **VS Code Doesn’t Reflect Changes**: Make sure the `settings.json` file is in the right place. Try restarting VS Code to reload settings.
- **Zsh Issues**: If Zsh doesn’t launch properly, confirm that `.zshrc` exists in your home directory and has the right permissions.

## 🤝 Contributing

If you'd like to contribute to this project, you are welcome to fork the repository and submit a pull request. Ensure you follow the same setup process for any configurations you add or modify.

## 📄 License

This project is open source as per the MIT License. Feel free to use it, modify it, and share it as you see fit.

## 📞 Support

If you have questions or need help, you can open an issue in the GitHub repository. I will respond as quickly as possible.

## 🌟 Acknowledgments

Thanks to the developers of Kitty, VS Code, and Zsh for providing fantastic tools that enhance the development experience.