import React, { useState } from 'react';

const TicTakToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXtrue, setIsXtrue] = useState(true);
    const [winner, setWinner] = useState(null);

    const ShowButton = (index) => {
        return (
            
            <button onClick={() => handleClick(index)}>{board[index]}</button>
        );
    };

    const handleClick = (index) => {
        if (board[index] || winner) return; // Prevent clicking on already filled or after game is won
        const newBoard = [...board];
        newBoard[index] = isXtrue ? 'X' : 'O';
        setBoard(newBoard);
        setIsXtrue(!isXtrue);
        const winnerCombination = checkWinner(newBoard);
        if (winnerCombination) {
            setWinner(newBoard[winnerCombination[0]]);
        }
    };

    const checkWinner = (newBoard) => {
        const combinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < combinations.length; i++) {
            const [a, b, c] = combinations[i];
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
                console.log(`Winning combination: ${combinations[i]}`);
                return combinations[i];
            }
        }
        return null;
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXtrue(true);
        setWinner(null);
    };


    return (
        <>
         <h1>Tic Tac Toe</h1>
            <div className="board">
                <div className="row">
                    {ShowButton(0)}
                    {ShowButton(1)}
                    {ShowButton(2)}
                </div>
                <div className="row">
                    {ShowButton(3)}
                    {ShowButton(4)}
                    {ShowButton(5)}
                </div>
                <div className="row">
                    {ShowButton(6)}
                    {ShowButton(7)}
                    {ShowButton(8)}
                </div>
            </div>
            {winner && <div className='win'>{winner} wins the game.
            <button className='again' onClick={resetGame}>restart</button>
            </div>
                       
}
        </>
    );
};

export default TicTakToe;

