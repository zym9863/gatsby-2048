import React from 'react';
import { Tile as TileType } from '../types/game';
import Tile from './Tile';

interface GameBoardProps {
  tiles: TileType[];
}

const GameBoard: React.FC<GameBoardProps> = ({ tiles }) => {
  const GRID_SPACING = 121; // 与CSS变量 --grid-spacing 保持同步

  const renderGrid = () => {
    const cells = [];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        cells.push(
          <div
            key={`${row}-${col}`}
            className="grid-cell"
            style={{
              transform: `translate(${col * GRID_SPACING}px, ${row * GRID_SPACING}px)`,
            }}
          />
        );
      }
    }
    return cells;
  };

  return (
    <div className="game-board">
      <div className="grid-container">
        {renderGrid()}
      </div>
      <div className="tile-container">
        {tiles.map(tile => (
          <Tile key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;