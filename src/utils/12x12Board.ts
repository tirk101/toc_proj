import { Board } from './types';
function generateDefaultBoard(rows: number, columns: number): Board[] {
    const board: Board[] = [];
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const cell: Board = {
          id: String.fromCharCode(97 + i) + (j + 1).toString(), 
          tileId: 'null',
          tileType: 'null',
        };
        board.push(cell);
      }
    }
  
    return board;
  }
  
export const defaultBoard12x12: Board[] = generateDefaultBoard(12, 12);


