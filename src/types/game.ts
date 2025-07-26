export type TileValue = 0 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096;

export interface Tile {
  id: string;
  value: TileValue;
  row: number;
  col: number;
  isNew?: boolean;
  isMerged?: boolean;
}

export type Board = TileValue[][];

export interface GameState {
  board: Board;
  tiles: Tile[];
  score: number;
  bestScore: number;
  isGameOver: boolean;
  isWon: boolean;
  canUndo: boolean;
}

export type Direction = 'up' | 'down' | 'left' | 'right';

export interface MoveResult {
  board: Board;
  tiles: Tile[];
  score: number;
  moved: boolean;
  won: boolean;
}