import React from 'react';
import { Tile as TileType } from '../types/game';
import Tile from './Tile';

interface GameBoardProps {
  tiles: TileType[];
}

const GameBoard: React.FC<GameBoardProps> = ({ tiles }) => {
  const boardStyle: React.CSSProperties = {
    position: 'relative',
    width: '500px',
    height: '500px',
    backgroundColor: '#bbada0',
    borderRadius: '6px',
    padding: '14px',
    margin: '0 auto',
  };

  const gridStyle: React.CSSProperties = {
    position: 'absolute',
    top: '14px',
    left: '14px',
    width: '472px',
    height: '472px',
    zIndex: 1,
  };

  const cellStyle: React.CSSProperties = {
    position: 'absolute',
    width: '107px',
    height: '107px',
    backgroundColor: 'rgba(238, 228, 218, 0.35)',
    borderRadius: '3px',
  };

  const renderGrid = () => {
    const cells = [];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        cells.push(
          <div
            key={`${row}-${col}`}
            style={{
              ...cellStyle,
              transform: `translate(${col * 121}px, ${row * 121}px)`,
            }}
          />
        );
      }
    }
    return cells;
  };

  return (
    <div style={boardStyle}>
      <div style={gridStyle}>
        {renderGrid()}
      </div>
      {tiles.map(tile => (
        <Tile key={tile.id} tile={tile} />
      ))}
    </div>
  );
};

export default GameBoard;