import React, { useState, useEffect, useCallback } from 'react';
import GameBoard from './GameBoard';
import { GameState, Direction } from '../types/game';
import {
  initializeGame,
  move,
  addRandomTile,
  canMove,
  boardToTiles,
  getBestScore,
  setBestScore
} from '../utils/gameLogic';

const Game2048: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const initialBoard = initializeGame();
    return {
      board: initialBoard,
      tiles: boardToTiles(initialBoard),
      score: 0,
      bestScore: getBestScore(),
      isGameOver: false,
      isWon: false,
      canUndo: false,
    };
  });

  const handleMove = useCallback((direction: Direction) => {
    if (gameState.isGameOver) return;

    const result = move(gameState.board, direction);
    
    if (!result.moved) return;

    let newBoard = result.board;
    if (result.moved) {
      newBoard = addRandomTile(newBoard);
    }

    const newScore = gameState.score + result.score;
    const newBestScore = Math.max(gameState.bestScore, newScore);
    
    if (newBestScore > gameState.bestScore) {
      setBestScore(newBestScore);
    }

    const gameOver = !canMove(newBoard);
    const won = result.won && !gameState.isWon;

    setGameState({
      board: newBoard,
      tiles: boardToTiles(newBoard),
      score: newScore,
      bestScore: newBestScore,
      isGameOver: gameOver,
      isWon: gameState.isWon || won,
      canUndo: false,
    });
  }, [gameState]);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        event.preventDefault();
        handleMove('up');
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        event.preventDefault();
        handleMove('down');
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        event.preventDefault();
        handleMove('left');
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        event.preventDefault();
        handleMove('right');
        break;
    }
  }, [handleMove]);

  const handleTouchStart = useCallback((event: TouchEvent) => {
    const touch = event.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  }, []);

  const [touchStart, setTouchStart] = useState<{ x: number, y: number } | null>(null);

  const handleTouchEnd = useCallback((event: TouchEvent) => {
    if (!touchStart) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;

    const threshold = 50;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (Math.abs(deltaX) > threshold) {
        handleMove(deltaX > 0 ? 'right' : 'left');
      }
    } else {
      if (Math.abs(deltaY) > threshold) {
        handleMove(deltaY > 0 ? 'down' : 'up');
      }
    }

    setTouchStart(null);
  }, [touchStart, handleMove]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleKeyPress, handleTouchStart, handleTouchEnd]);

  const restartGame = () => {
    const initialBoard = initializeGame();
    setGameState({
      board: initialBoard,
      tiles: boardToTiles(initialBoard),
      score: 0,
      bestScore: getBestScore(),
      isGameOver: false,
      isWon: false,
      canUndo: false,
    });
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <h1 className="game-title">2048</h1>
        <p className="game-subtitle">合并数字，达到2048！</p>
      </div>

      <div className="scores-container">
        <div className="score-container">
          <div className="score-label">分数</div>
          <div className="score-value">{gameState.score}</div>
        </div>
        <div className="score-container">
          <div className="score-label">最高分</div>
          <div className="score-value">{gameState.bestScore}</div>
        </div>
      </div>

      <button className="restart-button" onClick={restartGame}>
        重新开始
      </button>

      <GameBoard tiles={gameState.tiles} />

      <div className="game-instructions">
        <p><strong>操作方法：</strong> 使用方向键或WASD键移动方块</p>
        <p>在手机上可以滑动屏幕</p>
      </div>

      {gameState.isGameOver && (
        <div className="game-message game-over">
          <div className="game-message-content">
            <h2>游戏结束！</h2>
            <p>最终分数:</p>
            <div className="final-score">{gameState.score}</div>
            <button className="restart-button" onClick={restartGame}>
              再来一局
            </button>
          </div>
        </div>
      )}

      {gameState.isWon && (
        <div className="game-message game-won">
          <div className="game-message-content">
            <h2>恭喜！你赢了！</h2>
            <p>你成功达到了2048！</p>
            <div className="final-score">{gameState.score}</div>
            <button className="restart-button" onClick={restartGame}>
              再来一局
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game2048;