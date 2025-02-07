'use client';

import Products from '@/components/Products';
import { useTranslations } from 'next-intl';

export default function Page() {
    const t = useTranslations("products");

    return (
        <div className='w-full px-10 sm:px-14 md:px-32 py-28 space-y-20 text-white bg-black'>
            <div className='w-full md:flex items-center justify-between overflow-hidden rounded-l-xl shadow-[0px_4px_15px_rgba(0,0,0,0.2)]'>
                <h1 className='w-full md:w-1/2 text-2xl sm:text-4xl md:text-6xl laptop:text-7xl pl-10'>
                    {t("title1")}
                </h1>

                <div className='w-full md:w-1/2 h-[280px] laptop:h-[380px] overflow-hidden'>
                    <img
                        src="/images/products_nuts.png"
                        className="size-full object-cover object-center rounded-tl-full"
                    />
                </div>
            </div>

            <Products />
        </div>
    )
}