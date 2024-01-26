'use client'

import '@/styles/header/index.css'
import { NavBarType } from '@/types/header'
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
    const pathName = usePathname()
    const router = useRouter()


    function NavBarList(): React.ReactNode {
        const navBarMap: Array<NavBarType> = [
            { name: 'HOME', icon: 'HOME', href: '/' },
            { name: 'ARCHIVES', icon: 'ARCHIVES', href: '/archives' },
            { name: 'ABOUT', icon: 'ABOUT', href: 'about' }
        ]
        const handleClickNav = (item: NavBarType) => {
            console.log('route', pathName)
            if (pathName === item.href) {
                return
            } else {
                router.push(item.href)
            }
        }

        return navBarMap.map((item: NavBarType) => {
            const isActive: Boolean = pathName === item.href
            return <li key={item.name} onClick={() => handleClickNav(item)} className={` ${isActive ? "text-navBarActive" : ""} group relative text-xl font-medium cursor-pointer hover:text-navBarActive`}>
                <div className={` ${isActive ? "after:block" : "after:hidden"} after:absolute after:h-[2px] after:w-full after:bottom-[-5px]  after:bg-navBarActive group-hover:after:block`}>{item.name}</div>
            </li>
        })
    }

    return (
        <div className="fixed h-20 top-0 right-0 z-1005 w-full pt-1">
            <header className="flex items-center justify-center w-full h-full pt-0.5 bg-gradient-to-r from-[rgba(97,192,191,.208)] to-[rgba(255,182,185,.208)] backdrop-blur-md">
                <div className="relative h-full w-[80%] flex items-center justify-between text-[#323739] font-navbar">
                    <div className="flex items-center">
                        <a href="/" className="text-3xl font-medium  translate-y-px">Mitani's Blog</a>
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
        </div>)
}
