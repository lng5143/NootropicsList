'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavLink({href, children}) {
    const path = usePathname();

    if (path.startsWith(href)) {

    }

    return (
        <Link href={href}>
            {children}
        </Link>
    )
}