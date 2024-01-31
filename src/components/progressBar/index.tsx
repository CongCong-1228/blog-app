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
        height="0.25rem"
        color="#fffd00"
        options={{ showSpinner: false }}
        shallowRouting
    />

}
