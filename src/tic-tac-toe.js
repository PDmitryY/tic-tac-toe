'use strict';

class TicTacToe {
    constructor() {
        this.player1 = 'x';
        this.player2 = 'o';
        this.currentPlayer = this.player1;
        this.rowIndex = 0;
        this.columnIndex = 0;
        this.board = [[null, null, null], [null, null, null], [null, null, null]];
        this.counter = 0;
        }

    getCurrentPlayerSymbol() {
        if (this.currentPlayer === this.player1){
            return 'x';
        } else if (this.currentPlayer === this.player2){
            return 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.getFieldValue(rowIndex, columnIndex)) {
            return;
        } else {
            this.board[this.rowIndex][this.columnIndex] = this.getCurrentPlayerSymbol();
            if(this.currentPlayer === this.player1) {
                this.currentPlayer = this.player2;
            } else {
                this.currentPlayer = this.player1;
            }
            this.counter++;
        }
    }

    isFinished() {
    
    }

    getWinner() {
    
    }

    noMoreTurns() {
        if (this.counter === 9) {
            return true;
        } else return false;
    }

    isDraw() {
        
    }

    getFieldValue(rowIndex, columnIndex) {
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
        return this.board[this.rowIndex][this.columnIndex];  
    }
}

module.exports = TicTacToe;
