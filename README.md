# 2048 游戏

[English](./README_EN.md) | 中文

🎮 基于 Gatsby + TypeScript 构建的经典 2048 数字游戏

## ✨ 特性

- 🎯 完整的 2048 游戏逻辑
- 📱 支持键盘和触屏操作
- 💾 自动保存最高分
- 🎨 精美的 UI 设计
- ⚡ 基于 React + TypeScript 开发
- 📦 使用 Gatsby 构建

## 🎮 游戏操作

- **键盘操作**: 使用方向键 ↑↓←→ 或 WASD 键移动方块
- **触屏操作**: 在手机上滑动屏幕移动方块
- **游戏目标**: 合并相同数字的方块，努力达到 2048！

## 🚀 快速开始

1. **安装依赖**

   ```shell
   npm install
   ```

2. **启动开发服务器**

   ```shell
   npm run develop
   ```

3. **打开游戏**

   在浏览器中访问 http://localhost:8000 开始游戏！

## 📁 项目结构

```
src/
├── components/          # React 组件
│   ├── Game2048.tsx    # 主游戏组件
│   ├── GameBoard.tsx   # 游戏面板组件
│   └── Tile.tsx        # 方块组件
├── pages/              # Gatsby 页面
│   ├── index.tsx       # 主页面
│   └── 404.tsx         # 404 页面
├── styles/             # 样式文件
│   └── game.css        # 游戏样式
├── types/              # TypeScript 类型定义
│   └── game.ts         # 游戏相关类型
└── utils/              # 工具函数
    └── gameLogic.ts    # 游戏逻辑实现
```

## 🛠️ 技术栈

- **框架**: Gatsby
- **语言**: TypeScript
- **UI**: React
- **样式**: CSS
- **状态管理**: React Hooks
- **本地存储**: localStorage

## 📦 构建与部署

```shell
# 构建生产版本
npm run build

# 本地预览构建结果
npm run serve
```
