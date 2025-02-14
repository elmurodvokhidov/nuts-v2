'use client';

import Products from '@/components/Products';
import { GLOBAL_SERVER_URL } from '@/constants';
import { findProductByTitle } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);
    const t = useTranslations("products");
    const result = findProductByTitle(products, 2);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`${GLOBAL_SERVER_URL}/products`);
            const data = await response.json();
            setProducts(data);
            setIsLoading(false);
        };

        fetchProducts();
    }, []);

    return (
        <div className='w-full px-10 sm:px-14 md:px-32 py-28 space-y-20 text-white bg-black'>
            <div className='w-full md:flex items-center justify-between overflow-hidden rounded-l-xl shadow-[0px_4px_15px_rgba(0,0,0,0.2)]'>
                <h1 className='w-full md:w-1/2 text-2xl sm:text-4xl md:text-6xl laptop:text-7xl pl-10'>
                    {t("title1")}
                </h1>

                <div className='w-full md:w-1/2 h-[280px] laptop:h-[380px] overflow-hidden'>
                    {result && (
                        <img
                            src={result.imgUrl}
                            className="size-full object-cover object-center rounded-tl-full"
                        />
                    )}
                </div>
            </div>

            <Products
                products={products}
                isLoading={isLoading}
            />
        </div>
    )
}