import type { ReactElement } from "react";
import Link from "next/link";

const NekoPage = () => {
    return (
        <>
            <h1>neko page 🐈‍⬛</h1>
            <ul>
                <li>
                    <Link href="/neko/2">neko2</Link>
                </li>
                <li>
                    back to <Link href="/">/</Link>
                </li>
            </ul>
        </>
    );
};

export default NekoPage;
