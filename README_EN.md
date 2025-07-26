# 2048 Game

English | [中文](./README.md)

🎮 Classic 2048 number puzzle game built with Gatsby + TypeScript

## ✨ Features

- 🎯 Complete 2048 game logic
- 📱 Keyboard and touch screen support
- 💾 Auto-save best score
- 🎨 Beautiful UI design
- ⚡ Built with React + TypeScript
- 📦 Powered by Gatsby

## 🎮 Game Controls

- **Keyboard**: Use arrow keys ↑↓←→ or WASD keys to move tiles
- **Touch**: Swipe on mobile screens to move tiles
- **Goal**: Merge tiles with the same number to reach 2048!

## 🚀 Quick Start

1. **Install dependencies**

   ```shell
   npm install
   ```

2. **Start development server**

   ```shell
   npm run develop
   ```

3. **Open the game**

   Visit http://localhost:8000 in your browser to start playing!

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Game2048.tsx    # Main game component
│   ├── GameBoard.tsx   # Game board component
│   └── Tile.tsx        # Tile component
├── pages/              # Gatsby pages
│   ├── index.tsx       # Main page
│   └── 404.tsx         # 404 page
├── styles/             # Style files
│   └── game.css        # Game styles
├── types/              # TypeScript type definitions
│   └── game.ts         # Game-related types
└── utils/              # Utility functions
    └── gameLogic.ts    # Game logic implementation
```

## 🛠️ Tech Stack

- **Framework**: Gatsby
- **Language**: TypeScript
- **UI**: React
- **Styling**: CSS
- **State Management**: React Hooks
- **Local Storage**: localStorage

## 📦 Build & Deploy

```shell
# Build for production
npm run build

# Preview production build locally
npm run serve
```