import React from "react";

interface MyButtonProps {
    title: string;
    disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
    return <button disabled={disabled}>{title}</button>;
}

export default function App() {
    return (
        <>
            <h3>cute cat</h3>
            <MyButton title={"cute cat button"} disabled={false} />
            <h3>cute disabled cat</h3>
            <MyButton title={"cute disabled cat button"} disabled={true} />
        </>
    );
}
