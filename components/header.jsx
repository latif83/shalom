import Image from "next/image"
import Link from "next/link"
import styles from './header.module.css'

export const Header=()=>{
    return (
        <div className={`flex h-full justify-between border-b-4 border-red-500 items-center shadow-lg sm:px-12 px-3 ${styles.container}`}>
<div className="h-full py-2">
<Image src="/logo.jpg" width={500} height={500} className="w-auto h-full rounded-full bg-white" />
</div>
<nav className="text-white text-sm font-semibold sm:flex hidden gap-2 h-full">
    <Link className="border-red-300 hover:text-red-600 hover:border-b p-2 flex items-center" href="/">
    HOME
    </Link>
    <Link className="border-red-300 hover:text-red-600 hover:border-b p-2 flex items-center" href="/">
    ABOUT
    </Link>
    <Link className="border-red-300 hover:text-red-600 hover:border-b p-2 flex items-center" href="/">
    CONTACT
    </Link>
    <Link className="border-red-300 hover:text-red-600 hover:border-b p-2 flex items-center" href="/">
    EVENTS
    </Link>
    <Link className="border-red-300 hover:text-red-600 hover:border-b p-2 flex items-center" href="/">
    LOCATION
    </Link>
</nav>
        </div>
    )
}