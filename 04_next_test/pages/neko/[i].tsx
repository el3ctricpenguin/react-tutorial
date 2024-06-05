import type { ReactElement } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NekoPage2 = (i: number) => {
    const router = useRouter();
    return (
        <>
            <h1>neko page {router.query.i} 🐈‍⬛</h1>
            <ul>
                <li>
                    <Link href="/neko">neko</Link>
                </li>
            </ul>
        </>
    );
};

export default NekoPage2;
