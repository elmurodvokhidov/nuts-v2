'use client';

import Link from 'next/link'
import LocaleSwitcher from './LocaleSwitcher'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import MobileNav from './MobileNav';

export default function Navbar() {
    const t = useTranslations('navbar');
    const pathname = usePathname();

    return (
        <>
            <nav className={cn(pathname === "/" ? "bg-[#222222b1]" : "bg-black", "navbar hidden lg:flex fixed top-0 z-50 w-full px-8 items-center laptop:gap-28 sm:gap-20 gap-10 font-sans shadow-[0px_4px_10px_rgba(0,0,0,0.25)]")}>
                <div className="w-full flex justify-center gap-16 laptop:gap-40 whitespace-nowrap laptop:h-20">
                    <Link
                        href="/"
                        className={cn(pathname === "/" && "active", "w-56 h-16 laptop:h-20 flex items-center justify-center px-8 text-xl text-white uppercase laptop:text-2xl")}
                    >
                        {t('link1')}
                    </Link>
                    <Link
                        href="/about"
                        className={cn(pathname === "/about" && "active", "w-56 h-16 laptop:h-20 flex items-center justify-center px-8 text-xl text-white uppercase laptop:text-2xl")}
                    >
                        {t('link2')}
                    </Link>
                    <Link
                        href="/products"
                        className={cn(pathname === "/products" && "active", "w-56 h-16 laptop:h-20 flex items-center justify-center px-8 text-xl text-white uppercase laptop:text-2xl")}
                    >
                        {t('link3')}
                    </Link>
                    <Link
                        href="/contact"
                        className={cn(pathname === "/contact" && "active", "w-56 h-16 laptop:h-20 flex items-center justify-center px-8 text-xl text-white uppercase laptop:text-2xl")}
                    >
                        {t('link4')}
                    </Link>
                </div>

                <LocaleSwitcher />
            </nav>

            {/* Mobile Navbar */}
            <MobileNav />
        </>
    )
}