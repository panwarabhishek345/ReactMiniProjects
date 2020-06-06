import React, { Component } from 'react';
import Cell from "./Cell";
import "./Board.css";

class Board extends Component{

    constructor(props){
        super(props);

        this.createBoard = this.createBoard.bind(this);
        this.toggleCell = this.toggleCell.bind(this);

        this.state = {
            hasWon:false,
            board: this.createBoard()
        }
    }

    createBoard(){

        const rows = 5;
        const cols = 5;

        let board = new Array(rows);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(cols);
            for(let j = 0; j<board[i].length; j++){
                board[i][j] = Math.floor(Math.random()*2);
            }
        }
        return board;
    }

    toggleCell(r,c){
        
        let toggles = new Set();
        toggles.add(`${r}-${c}`);
        toggles.add(`${r+1}-${c}`);
        toggles.add(`${r}-${c+1}`);
        toggles.add(`${r-1}-${c}`);
        toggles.add(`${r}-${c-1}`);
        
        this.setState(state => (
            {
                board: state.board.map((row,i) => {
                    return row.map((cell,j) => {
                        let id = `${i}-${j}`;
                        if(toggles.has(id)){
                            return cell === 1?0:1;
                        }
                        else{
                            return cell;
                        }
                    });
                })
            }
        ));

        const hasWon = this.state.board.every(row => row.every(cell => cell === 0));
        this.setState(state => {
           return {
            ...state,
            hasWon
           };
        });
    }

    render(){

        const board = 
        <div className="Board-container">
            {
                this.state.board.map((row,i) => {
                    return (
                        <div className="Board-row" key={i}>
                            {row.map((cell,j) => {
                                return <Cell key={`${i}-${j}`} isLit={cell === 1} toggleCell={this.toggleCell} row={i} column={j}/>;
                            })}
                        </div>
                    );
                })
            }        
        </div>
        
    
        const Winner = <h1>You Won!</h1>;

        return (
            <div className="Board">
                {this.state.hasWon?Winner:board}
            </div>
        );
    }
}

export default Board;