import React from 'react';
import { Tile as TileType } from '../types/game';

interface TileProps {
  tile: TileType;
}

const Tile: React.FC<TileProps> = ({ tile }) => {
  const getTileColor = (value: number): string => {
    switch (value) {
      case 2: return '#eee4da';
      case 4: return '#ede0c8';
      case 8: return '#f2b179';
      case 16: return '#f59563';
      case 32: return '#f67c5f';
      case 64: return '#f65e3b';
      case 128: return '#edcf72';
      case 256: return '#edcc61';
      case 512: return '#edc850';
      case 1024: return '#edc53f';
      case 2048: return '#edc22e';
      default: return '#cdc1b4';
    }
  };

  const getTextColor = (value: number): string => {
    return value <= 4 ? '#776e65' : '#f9f6f2';
  };

  const getFontSize = (value: number): string => {
    if (value < 100) return '55px';
    if (value < 1000) return '45px';
    return '35px';
  };

  const style: React.CSSProperties = {
    position: 'absolute',
    width: '107px',
    height: '107px',
    backgroundColor: getTileColor(tile.value),
    borderRadius: '3px',
    fontWeight: 'bold',
    fontSize: getFontSize(tile.value),
    color: getTextColor(tile.value),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.15s ease-in-out',
    transform: `translate(${tile.col * 121}px, ${tile.row * 121}px)`,
    zIndex: 2,
  };

  return (
    <div style={style}>
      {tile.value}
    </div>
  );
};

export default Tile;