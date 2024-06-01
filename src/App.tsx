import React, { Dispatch, SetStateAction, useState } from "react";

interface MyButtonProps {
    title: string;
    disabled: boolean;
    isCatKing: boolean;
    setIsCatKing: Dispatch<SetStateAction<boolean>>;
}

function CatStatus({ isCatKing }: { isCatKing: boolean }) {
    return <>cat status: {String(isCatKing)}</>;
}

function MyButton({ title, disabled, isCatKing, setIsCatKing }: MyButtonProps) {
    return (
        <button disabled={disabled} onClick={() => setIsCatKing(!isCatKing)}>
            {title}
        </button>
    );
}

export default function App() {
    const [isCatKing, setIsCatKing] = useState(false);
    return (
        <>
            <h2>cute cat status</h2>
            <CatStatus isCatKing={isCatKing} />
            <h3>cute cat</h3>
            <MyButton title={"cute cat button"} disabled={false} isCatKing={isCatKing} setIsCatKing={setIsCatKing} />
            <h3>cute disabled cat</h3>
            <MyButton title={"cute disabled cat button"} disabled={true} isCatKing={isCatKing} setIsCatKing={setIsCatKing} />
        </>
    );
}
