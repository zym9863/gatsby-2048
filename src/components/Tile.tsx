import React from 'react';
import { Tile as TileType } from '../types/game';

interface TileProps {
  tile: TileType;
}

const Tile: React.FC<TileProps> = ({ tile }) => {
  const GRID_SPACING = 121; // 与CSS变量 --grid-spacing 保持同步

  const getTileClass = (value: number): string => {
    return `tile tile-${value}`;
  };

  const getTilePosition = (row: number, col: number): React.CSSProperties => {
    return {
      transform: `translate(${col * GRID_SPACING}px, ${row * GRID_SPACING}px)`,
    };
  };

  return (
    <div 
      className={getTileClass(tile.value)}
      style={getTilePosition(tile.row, tile.col)}
    >
      {tile.value}
    </div>
  );
};

export default Tile;