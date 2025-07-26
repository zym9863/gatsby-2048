import { Board, Tile, TileValue, Direction, MoveResult } from '../types/game';

const BOARD_SIZE = 4;

export const createEmptyBoard = (): Board => {
  return Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(0));
};

export const generateRandomTile = (): TileValue => {
  return Math.random() < 0.9 ? 2 : 4;
};

export const getEmptyPositions = (board: Board): Array<[number, number]> => {
  const positions: Array<[number, number]> = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (board[row][col] === 0) {
        positions.push([row, col]);
      }
    }
  }
  return positions;
};

export const addRandomTile = (board: Board): Board => {
  const emptyPositions = getEmptyPositions(board);
  if (emptyPositions.length === 0) return board;
  
  const newBoard = board.map(row => [...row]);
  const randomIndex = Math.floor(Math.random() * emptyPositions.length);
  const [row, col] = emptyPositions[randomIndex];
  newBoard[row][col] = generateRandomTile();
  
  return newBoard;
};

export const initializeGame = (): Board => {
  let board = createEmptyBoard();
  board = addRandomTile(board);
  board = addRandomTile(board);
  return board;
};

const moveLeft = (row: TileValue[]): { row: TileValue[], score: number, moved: boolean } => {
  const filtered = row.filter(val => val !== 0);
  const merged: TileValue[] = [];
  let score = 0;
  let i = 0;
  
  while (i < filtered.length) {
    if (i < filtered.length - 1 && filtered[i] === filtered[i + 1]) {
      const mergedValue = (filtered[i] * 2) as TileValue;
      merged.push(mergedValue);
      score += mergedValue;
      i += 2;
    } else {
      merged.push(filtered[i]);
      i += 1;
    }
  }
  
  while (merged.length < BOARD_SIZE) {
    merged.push(0);
  }
  
  const moved = !row.every((val, index) => val === merged[index]);
  
  return { row: merged, score, moved };
};

const rotateBoard = (board: Board): Board => {
  const size = board.length;
  const rotated: Board = Array(size).fill(null).map(() => Array(size).fill(0));
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      rotated[j][size - 1 - i] = board[i][j];
    }
  }
  
  return rotated;
};

const reverseBoard = (board: Board): Board => {
  return board.map(row => [...row].reverse());
};

export const move = (board: Board, direction: Direction): MoveResult => {
  let workingBoard = board.map(row => [...row]);
  let totalScore = 0;
  let moved = false;
  let won = false;
  
  switch (direction) {
    case 'left':
      break;
    case 'right':
      workingBoard = reverseBoard(workingBoard);
      break;
    case 'up':
      workingBoard = rotateBoard(rotateBoard(rotateBoard(workingBoard)));
      break;
    case 'down':
      workingBoard = rotateBoard(workingBoard);
      break;
  }
  
  for (let i = 0; i < BOARD_SIZE; i++) {
    const result = moveLeft(workingBoard[i]);
    workingBoard[i] = result.row;
    totalScore += result.score;
    moved = moved || result.moved;
    
    if (result.row.includes(2048)) {
      won = true;
    }
  }
  
  switch (direction) {
    case 'left':
      break;
    case 'right':
      workingBoard = reverseBoard(workingBoard);
      break;
    case 'up':
      workingBoard = rotateBoard(workingBoard);
      break;
    case 'down':
      workingBoard = rotateBoard(rotateBoard(rotateBoard(workingBoard)));
      break;
  }
  
  const tiles = boardToTiles(workingBoard);
  
  return {
    board: workingBoard,
    tiles,
    score: totalScore,
    moved,
    won
  };
};

export const canMove = (board: Board): boolean => {
  if (getEmptyPositions(board).length > 0) return true;
  
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      const current = board[row][col];
      if (
        (row < BOARD_SIZE - 1 && board[row + 1][col] === current) ||
        (col < BOARD_SIZE - 1 && board[row][col + 1] === current)
      ) {
        return true;
      }
    }
  }
  
  return false;
};

export const boardToTiles = (board: Board): Tile[] => {
  const tiles: Tile[] = [];
  let id = 0;
  
  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      if (board[row][col] !== 0) {
        tiles.push({
          id: `tile-${id++}`,
          value: board[row][col],
          row,
          col
        });
      }
    }
  }
  
  return tiles;
};

export const getBestScore = (): number => {
  if (typeof window !== 'undefined') {
    return parseInt(localStorage.getItem('bestScore') || '0', 10);
  }
  return 0;
};

export const setBestScore = (score: number): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('bestScore', score.toString());
  }
};