<img align="right" src="https://raw.githubusercontent.com/FuSan21/FriendActivityGrid/main/images/demo.jpg" alt="Preview" width="25%">

<div align="left">
  <img align="left" src="https://raw.githubusercontent.com/FuSan21/FriendActivityGrid/main/images/demo2.jpg" alt="Logo" width="120" height="70">

  <h3 align="left">Friend Activity Grid</h3>
  <p align="left">A theme for Discord that makes the friend activity grid visible on vertical monitor. By default, Discord hides the friend activity when width is below 1200px - this theme lets you choose between responsive mode (shows grid below 1200px) or always-on mode.</p>

  <br/>

<a href="https://gibbu.github.io/ThemePreview/?file=https://raw.githubusercontent.com/FuSan21/FriendActivityGrid/main/dist/responsive.css"><strong>»
Theme Preview</strong></a> ・ <a href="https://github.com/FuSan21/FriendActivityGrid/issues">Report
an issue</a> ・ <a href="https://discord.gg/UGs5fUskUS">Join the support server</a>

</div>
<br/>

## 📥 Installation

<br/>
<div align="left">
    <img align="left" src="https://i.imgur.com/LPH05EO.png" alt="BetterDiscord" width="45" height="45">
    <b><p align="left">BetterDiscord</b>
    <br/>Save the file by right clicking and save link as from <a href="https://fusan21.github.io/FriendActivityGrid/friend-activity-grid.theme.css">here</a>. Copy it to this directory <code>%appdata%/betterdiscord/themes</code> or from Discord's <code>Settings > Themes > Themes folder</code> section</p>
</div>

<div align="left">
    <img align="left" src="https://i.imgur.com/pfS7jdg.png" alt="Replugged" width="45" height="45">
    <b><p align="left">Replugged</b>
    <br/>Click <a href="https://replugged.dev/install?identifier=FuSan21/FriendActivityGrid&source=github">here</a> and confirm the install in the client</p>
</div>

<div align="left">
    <img align="left" src="https://i.imgur.com/fXYKU5q.png" alt="Vencord" width="45" height="45">
    <b><p align="left">Vencord</b>
    <br/>Copy <code>https://raw.githubusercontent.com/FuSan21/FriendActivityGrid/main/friend-activity-grid.theme.css</code> into the box in Settings > Themes > Themes tab </p>
</div><br/>

## 🔧 Configuration

The theme comes with two modes:

- **Responsive Mode** (default): Shows grid layout when window width is below 1200px (instead of
  Discord's default behavior of hiding it)
- **Always-On Mode**: Shows grid layout at all window sizes

To switch between modes, edit the theme file and comment/uncomment the appropriate import lines.

## 🛠️ Development

### Prerequisites
- Node.js >=20.0.0
- pnpm >=8.0.0

### Building from source

1. Clone the repository
```bash
git clone https://github.com/FuSan21/FriendActivityGrid.git
cd FriendActivityGrid
```

2. Install dependencies
```bash
pnpm install
```

3. Build the CSS files
```bash
pnpm run build
```

This will generate two files in the `dist` directory:
- `always.css`: Grid layout applied at all window sizes
- `responsive.css`: Grid layout applied only below 1200px width

### Development commands

- `pnpm run build` - Build CSS files
- `pnpm run watch` - Watch for changes (Replugged)
- `pnpm run bundle` - Bundle theme for distribution
- `pnpm run lint` - Check code style
- `pnpm run lint:fix` - Fix code style issues

## Credits for helping me with the theme

Disease (gonorrhea2@discord)<br/> Barnyard (huderon@discord)<br/> Salternator, the \*
selector(saltssaumure@discord)
