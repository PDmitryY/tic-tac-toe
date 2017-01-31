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
        if (this.getWinner() || this.isDraw()){
            return true;
        } else return false;
    }

    getWinner() {
        if (this.board[0][0] === this.board[1][0] === this.board[2][0] === 'x'){
            return 'x';
        } else if (this.board[0][1] === this.board[1][1] === this.board[2][1] === 'x'){
            return 'x';
        } else if (this.board[0][2] === this.board[1][2] === this.board[2][2] === 'x'){
            return 'x';
        } else if (this.board[0][0] === this.board[0][1] === this.board[0][2] === 'x'){
            return 'x';
        } else if (this.board[1][0] === this.board[1][1] === this.board[1][2] === 'x'){
            return 'x';
        } else if (this.board[2][0] === this.board[2][1] === this.board[2][2] === 'x'){
            return 'x';
        } else if (this.board[0][0] === this.board[1][1] === this.board[2][2] === 'x'){
            return 'x';
        } else if (this.board[0][2] === this.board[1][1] === this.board[2][0] === 'x'){
            return 'x';
        } else if (this.board[0][0] === this.board[1][0] === this.board[2][0] === 'o'){
            return 'o';
        } else if (this.board[0][1] === this.board[1][1] === this.board[2][1] === 'o'){
            return 'o';
        } else if (this.board[0][2] === this.board[1][2] === this.board[2][2] === 'o'){
            return 'o';
        } else if (this.board[0][0] === this.board[0][1] === this.board[0][2] === 'o'){
            return 'o';
        } else if (this.board[1][0] === this.board[1][1] === this.board[1][2] === 'o'){
            return 'o';
        } else if (this.board[2][0] === this.board[2][1] === this.board[2][2] === 'o'){
            return 'o';
        } else if (this.board[0][0] === this.board[1][1] === this.board[2][2] === 'o'){
            return 'o';
        } else if (this.board[0][2] === this.board[1][1] === this.board[2][0] === 'o'){
            return 'o';
        } else return null;
    }

    noMoreTurns() {
        if (this.counter === 9) {
            return true;
        } else return false;
    }

    isDraw() {
        if (this.noMoreTurns() && (this.getWinner() === null)){
            return true;
        } else return false;
    }

    getFieldValue(rowIndex, columnIndex) {
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
        return this.board[this.rowIndex][this.columnIndex];  
    }
}

module.exports = TicTacToe;
