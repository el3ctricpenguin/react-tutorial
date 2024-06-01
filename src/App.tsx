import React, { Dispatch, SetStateAction, useReducer, useState } from "react";

interface MyButtonProps {
    title: string;
    disabled: boolean;
    isCatKing: boolean;
    setIsCatKing: Dispatch<SetStateAction<boolean>>;
}

function CatStatus({ catPoint }: { catPoint: number }) {
    return (
        <>
            cat point: {catPoint}
            <br />
            cat status: {catPoint >= 100 ? "👑" : "normal"}
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
