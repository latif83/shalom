import Image from "next/image"
import Link from "next/link"

export const Header  = ({cPage})=>{

    return (
        <header className="sm:px-12 px-3 py-2 flex justify-between items-center bg-blue-400">
        <Image
          src="/logo.jpg"
          width={200}
          height={200}
          className="w-20 h-20 rounded-full"
          alt=""
        />
        <nav className="flex gap-4">
        <Link href="/admin" className={`${cPage=='home' && 'text-gray-200 font-bold'} hover:text-red-700`}>
            Dashboard
          </Link>
        <Link href="/admin/events" className={`${cPage=='events' && 'text-gray-200 font-bold'} hover:text-red-700`}>
            Events
          </Link>
          <Link href="/admin/pastors" className={`${cPage=='pastors' && 'text-gray-200 font-bold'} hover:text-red-700`}>
            Pastors
          </Link>
          <Link href="/admin/members" className={`${cPage=='members' && 'text-gray-200 font-bold'} hover:text-red-700`}>
            Members
          </Link>
        </nav>
      </header>
    )
}