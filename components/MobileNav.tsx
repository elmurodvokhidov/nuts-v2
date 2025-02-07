"use client";

import Image from "next/image";
import LocaleSwitcher from "./LocaleSwitcher";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "./ui/sheet";
import { X } from "lucide-react";

export default function MobileNav() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const t = useTranslations('navbar');

    return (
        <div className={cn(pathname === "/" ? "bg-[#222222b1]" : "bg-black", "lg:hidden flex fixed top-0 z-50 w-full px-8 py-4 items-center laptop:gap-28 sm:gap-20 gap-10 font-sans shadow-[0px_4px_10px_rgba(0,0,0,0.25)]")}>
            <div className="flex items-center gap-4">
                <LocaleSwitcher />

                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger>
                        <Image
                            src="/icons/menu.svg"
                            width={30}
                            height={30}
                            alt="menu"
                        />
                    </SheetTrigger>
                    <SheetContent className="h-screen px-3">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 text-white"
                        >
                            <X size={20} />
                        </button>

                        <nav className="flex flex-col gap-8 justify-center items-start pl-10">
                            <Link href="/" onClick={() => setOpen(false)} className={cn(pathname === "/" && "active", "text-lg text-white capitalize")}>
                                {t('link1')}
                            </Link>
                            <Link href="/about" onClick={() => setOpen(false)} className={cn(pathname === "/products" && "active", "text-lg text-white capitalize")}>
                                {t('link2')}
                            </Link>
                            <Link href="/products" onClick={() => setOpen(false)} className={cn(pathname === "/about" && "active", "text-lg text-white capitalize")}>
                                {t('link3')}
                            </Link>
                            <Link href="/contact" onClick={() => setOpen(false)} className={cn(pathname === "/contact" && "active", "text-lg text-white capitalize")}>
                                {t('link4')}
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}