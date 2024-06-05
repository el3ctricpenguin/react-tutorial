import React, { Dispatch, SetStateAction, useReducer, useState } from "react";

function CatStatus({ catPoint }: { catPoint: number }) {
    const isCatKing = catPoint >= 100;
    return (
        <>
            cat point: {catPoint}
            <br />
            cat status: {isCatKing ? "👑" : "normal"}
            <br />
            <img src={isCatKing ? "https://i.imgur.com/4xsSgSG.jpeg" : "https://i.imgur.com/DiWMA7i.jpeg"} alt="" height={200} />
        </>
    );
}

interface CatState {
    point: number;
}

type CatPointAction = { type: "reset" } | { type: "setCount"; value: CatState["point"] };

function CatFeed() {
    const initialCatPoint = { point: 0 };

    function catPointReducer(state: CatState, action: CatPointAction) {
        switch (action.type) {
            case "reset":
                return initialCatPoint;
            case "setCount":
                return { point: action.value };
        }
    }

    const [cat, dispatchCat] = useReducer(catPointReducer, initialCatPoint);
    const addCatPoint = (add: number) => dispatchCat({ type: "setCount", value: cat.point + add });
    const resetCatPoint = () => dispatchCat({ type: "reset" });

    return (
        <>
            <h2>cute cat status</h2>
            <CatStatus catPoint={cat.point} />
            <h3>feed cute cat</h3>
            <button onClick={() => addCatPoint(5)}>feed cat (5)</button>
            <button onClick={() => addCatPoint(15)}>feed cat (15)</button>
            <button onClick={() => resetCatPoint()}>reset cat</button>
        </>
    );
}

export default function App() {
    return (
        <>
            <CatFeed />
        </>
    );
}
