import React from "react";

export const Score = ({ score }) => {
    return (
        <div className={`score-div`}>
            <div className={`text`}>Score : {score}</div>
        </div>
    );
};
