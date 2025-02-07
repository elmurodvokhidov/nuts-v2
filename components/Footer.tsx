import Image from 'next/image'
import logo from '@/public/images/logo.png'
import Link from 'next/link'
import {
    Facebook,
    Instagram,
    Linkedin,
    Youtube
} from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Footer() {
    const t = useTranslations("footer");

    return (
        <footer className='w-full flex flex-col md:flex-row items-center justify-between px-10 sm:px-14 lg:px-32 py-4  font-sans bg-black shadow-[0px_0px_14px_1px_rgba(0,0,0,0.5)]'>
            <div className='w-full md:w-fit flex items-center justify-between md:justify-normal gap-10 laptop:gap-14'>
                <Image
                    width={80}
                    height={80}
                    src={logo}
                    alt="logo"
                />

                <p className='w-3/5 text-xl laptop:text-2xl text-main'>
                    {t("text1")}
                </p>
            </div>


            <div className='w-full md:w-fit flex justify-between md:justify-normal items-center gap-4 laptop:gap-6'>
                <p className='text-xl laptop:text-2xl text-main mr-10'>
                    +(998) 99 438 01 10
                </p>

                <div className='flex items-center gap-4'>
                    <Link href="#">
                        <Instagram strokeWidth={1.5} className='size-5 laptop:size-6 text-main' />
                    </Link>
                    <Link href="#">
                        <Facebook strokeWidth={1.5} className='size-5 laptop:size-6 text-main' />
                    </Link>
                    <Link href="#">
                        <Linkedin strokeWidth={1.5} className='size-5 laptop:size-6 text-main' />
                    </Link>
                    <Link href="#">
                        <Youtube strokeWidth={1.5} className='size-5 laptop:size-6 text-main' />
                    </Link>
                </div>
            </div>
        </footer>
    )
}