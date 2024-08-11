import Link from "next/link";
import NavLink from "@/app/components/main-header/nav-link";

export default function MainHeader() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink href="vendors">Vendors</NavLink>
                    </li>
                    <li>
                        <NavLink href="nootropics">Nootropics</NavLink>
                    </li>
                    <li>
                        <NavLink href="blogs">Blogs</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}