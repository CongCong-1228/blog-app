'use client'

import '@/styles/header/index.css'
import {NavBarType} from '@/types/header'
import {usePathname} from 'next/navigation'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoxArchive, faHouse, faUser} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

export default function Header() {
    const pathName = usePathname()

    function NavBarList(): React.ReactNode {
        const navBarMap: Array<NavBarType> = [
            {name: 'HOME', icon: faHouse, href: '/'},
            {name: 'ARCHIVES', icon: faBoxArchive, href: '/archives'},
            {name: 'ABOUT', icon: faUser, href: '/about'}
        ]
        const handleClickNav = (item: NavBarType) => {
            if (pathName === item.href) {
                return false
            }
        }

        return navBarMap.map((item: NavBarType) => {
            const isActive: Boolean = pathName === item.href
            return <Link href={item.href} key={item.name} onClick={() => handleClickNav(item)}
                         className={` ${isActive ? "text-navBarActive" : ""} group relative text-xl font-medium cursor-pointer hover:text-navBarActive`}>
                <div
                    className={` ${isActive ? "after:block" : "after:hidden"} after:absolute after:h-[2px] after:w-full after:bottom-[-5px]  after:bg-navBarActive group-hover:after:block`}>
                    <FontAwesomeIcon icon={item.icon} className={'fa-regular fa-house fa-fw'}/>
                    {" " + item.name}
                </div>
            </Link>
        })
    }

    return (
        <div className="fixed h-20 top-0 right-0 z-1005 w-full">
            <header
                className="flex items-center justify-center w-full h-full pt-0.5 bg-gradient-to-r from-[rgba(97,192,191,.208)] to-[rgba(255,182,185,.208)] backdrop-blur-md">
                <div className="relative h-full w-[80%] flex items-center justify-between text-[#323739] font-navbar">
                    <div className="flex items-center">
                        <a href="/" className="text-3xl font-medium  translate-y-px">Mitani&apos;s Blog</a>
                    </div>
                    <div>
                        <div className="">
                            <ul className="flex items-center gap-6">
                                {NavBarList()}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
