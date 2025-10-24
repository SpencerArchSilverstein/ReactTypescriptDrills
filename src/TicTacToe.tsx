import { useState, useEffect } from "react";

export default function TicTacToe() {
  const [TTT, setTTT] = useState(["", "", "", "", "", "", "", "", ""]);
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState("");

  const winConditions = [
    [0, 1, 2], //TL-Right
    [0, 3, 6], //TL-Down
    [0, 4, 8], //TL-Diag
    [1, 4, 7], //TM-Down
    [2, 4, 6], //TR-Diag
    [2, 5, 8], //TR-Down
    [3, 4, 5], //ML-Right
    [6, 7, 8], //DL-Right
  ];
  function handleTurn(index: number) {
    setTTT((values) =>
      values.map((value, i) =>
        i === index && TTT[index] == "" ? (isXTurn ? "X" : "O") : value
      )
    );

    if (isXTurn) {
      setIsXTurn(false);

      return;
    }
    setIsXTurn(true);
  }
  useEffect(() => {
    if (!winner) checkIfWon();
  }, [TTT]);

  function checkIfWon() {
    for (let winCondInd = 0; winCondInd < winConditions.length; winCondInd++) {
      if (
        TTT[winConditions[winCondInd][0]] !== "" &&
        TTT[winConditions[winCondInd][0]] ==
          TTT[winConditions[winCondInd][1]] &&
        TTT[winConditions[winCondInd][1]] == TTT[winConditions[winCondInd][2]]
      ) {
        setWinner(TTT[winConditions[winCondInd][2]]);
        return;
      }
    }
    if (TTT.every((elem) => elem !== "")) {
      setWinner("TIE");
      return;
    }
  }

  function handleNewGame() {
    setTTT(["", "", "", "", "", "", "", "", ""]);
    setWinner("");
  }
  return (
    <>
      <div className="flex justify-center text-center my-[25%]">
        <div>
          <div className="grid grid-cols-3 grid-rows-3 gap-5 ">
            {TTT.map((square, index) => (
              <button
                key={index}
                className="text-center w-50 h-50 outline-5 font-bold text-4xl"
                onClick={() => handleTurn(index)}
                disabled={winner !== ""}
              >
                <h1>{square}</h1>
              </button>
            ))}
          </div>
          <div className="p-10">
            {winner && (
              <>
                <h1 className="text-5xl mb-3">
                  {winner == "X" || winner == "O" ? `${winner} Wins!` : "TIE"}
                </h1>
                <button
                  onClick={handleNewGame}
                  className="outline-5 py-5 px-10 rounded-xl text-2xl bg-gray-200"
                >
                  Reset
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
