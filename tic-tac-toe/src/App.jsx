import React, { useEffect, useState } from 'react';

const App = () => {
   const [xturn, setXturn] = useState(true);
   const [win, setWin] = useState(false);
   const [data, setData] = useState(Array(9).fill(""));

   const showMove = (num) => {
       if (!win && data[num] === "") {
           const newData = [...data];
           newData[num] = xturn ? '❌' : '🟢';
           setData(newData);
           setXturn(!xturn);
           checkWin(newData);
       }
   }

   const checkWin = (currentData) => {
       const winConditions = [
           [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
           [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
           [0, 4, 8], [2, 4, 6] // Diagonals
       ];

       for (let condition of winConditions) {
           const [a, b, c] = condition;
           if (currentData[a] && currentData[a] === currentData[b] && currentData[a] === currentData[c]) {
               setWin(true);
               return;
           }
       }

       if (!currentData.includes("")) {
           setWin(true); // If no empty cells, it's a draw
       }
   }

   const resetGame = () => {
       setData(Array(9).fill(""));
       setWin(false);
       setXturn(true);
   }

   useEffect(() => {
       if (win) {
           alert('Game Over! Player ' + (!xturn ? '❌' : '🟢') + ' wins!');
       }
   }, [win]);

   return (
       <div className='container'>
           <div className="game">
               {data.map((cell, index) => (
                   <div key={index} className="box" onClick={() => showMove(index)}>{cell}</div>
               ))}
           </div>
           <button onClick={resetGame}>Reset</button>
       </div>
   );
}

export default App;
