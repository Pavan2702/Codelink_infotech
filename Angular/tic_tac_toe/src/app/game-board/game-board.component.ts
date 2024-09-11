import { Component } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})
export class GameBoardComponent {
  board: string[] = new Array(9).fill('');
  xIsNext: boolean = true;
  winner: string | null = null;
  draw = false;

  calculateWinner(): string | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return this.board[a];
      }
    }

    if (!this.board.includes('')) {
      this.draw = true;
      return null;
    }

    return null;
  }

  makeMove(index: number) {
    if (!this.winner && !this.board[index]) {
      this.board[index] = this.xIsNext ? 'X' : 'O';
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();
    }
  }

  resetGame() {
    this.board = new Array(9).fill('');
    this.xIsNext = true;
    this.winner = null;
    this.draw = false;
  }
}
