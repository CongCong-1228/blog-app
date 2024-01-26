"use client"

import { usePathname, useRouter } from "next/navigation";
import NextTopLoader from "nextjs-toploader"
import * as NProgress from "nprogress";
import { useEffect } from "react";


export default function ProgressBar() {
    const pathname = usePathname()
    const router = useRouter()
    // useEffect(() => {
    //     NProgress.done();
    // }, [pathname, router]);
    return <NextTopLoader
        color="#2299DD"
        initialPosition={0.08}
        crawlSpeed={200}
        height={4}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD" />
}
