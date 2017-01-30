class TicTacToe {
    constructor() {
        this.player1 = null;
        this.player2 = null;
        this.currentPlayer = null;
        this.rowIndex = null;
        this.columnIndex = null;
        this.counter = 1;
    }

    getCurrentPlayerSymbol() {
        if(this.currentPlayer = this.player1){
            return 'x';
        } else if (this.currentPlayer === this.player2){
            return 'o';
        };
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.rowIndex === this.columnIndex === 0){
            this.currentPlayer = player1;
        }

    }

    isFinished() {
        if (counter === 9){
            return true;
        } else return false;
    }

    getWinner() {
        if(isFinished()){

        } else return null
    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, columnIndex) {

    }
}

module.exports = TicTacToe;
