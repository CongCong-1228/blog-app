'use client'

import '@/styles/header/index.css'
import { NavBarType } from '@/types/header'

export default function Header() {

    function NavBarList(): React.ReactNode {
        const navBarMap: Array<NavBarType> = [
            { name: 'HOME', icon: 'HOME' },
            { name: 'ARCHIVES', icon: 'ARCHIVES' },
            { name: 'ME', icon: 'ABOUT' }
        ]
        return navBarMap.map((item: NavBarType) => {
            return <li key={item.name} className="group relative text-xl font-medium cursor-pointer hover:text-navBarActive">
                <a href="/" className="after:absolute after:h-[2px] after:w-full after:hidden after:bottom-[-5px]  after:bg-navBarActive group-hover:after:block active:text-navBarActive">{item.name}</a>
                {/* <div className="absolute bottom-[-5px] lef-[50%] w-full h-[2px] hidden bg-navBarActive group-hover:block group-active:block"></div> */}
            </li>
        })
    }

    return (
        <div className="fixed h-20 top-0 right-0 z-1005 w-full">
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
