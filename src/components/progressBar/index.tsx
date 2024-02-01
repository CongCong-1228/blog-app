"use client"
import { AppProgressBar as TopLoaderBar } from 'next-nprogress-bar';

import { usePathname, useRouter } from "next/navigation";


export default function ProgressBar() {
    const pathname = usePathname()
    const router = useRouter()
    // useEffect(() => {
    //     NProgress.done();
    // }, [pathname, router]);
    return <TopLoaderBar
        height="0.15rem"
        color="linear-gradient(45deg, #f10006, #ef5b00, #e59c01, #19ca05, #00cab5, #0264c8, #c303c3)"
        options={{ showSpinner: false }}
        shallowRouting
    />

}
