'use client';

import MainLoader from '@/components/MainLoader';
import { GLOBAL_SERVER_URL } from '@/constants';
import { getVideoByType } from '@/lib/actions/video.actions';
import { findProductByTitle } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function Page() {
    const [videoUrl, setVideoUrl] = useState();
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const t = useTranslations("about");
    const result = findProductByTitle(products, 1);

    useEffect(() => {
        // Videoni yuklash
        const getVideo = async () => {
            try {
                const url = await getVideoByType('about');
                setVideoUrl(url);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        getVideo();

        // Mahsulotlarni yuklash
        const fetchProducts = async () => {
            const response = await fetch(`${GLOBAL_SERVER_URL}/products`);
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, [])

    return (
        <>
            {isLoading && <MainLoader />}
            <div className='w-full px-10 sm:px-14 md:px-32 py-28 text-white bg-black'>
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

                <div className='w-full mt-20 flex flex-col md:flex-row gap-32'>
                    <div className='w-full md:w-[35%] h-[280px] laptop:h-[380px] relative z-10 about_video_container'>
                        <video
                            src={videoUrl}
                            autoPlay
                            loop
                            muted
                            className="size-full object-cover object-center"
                        />
                    </div>

                    <div className='w-full md:w-3/5 space-y-2'>
                        <h1 className='text-base sm:text-lg md:text-xl laptop:text-2xl'>
                            {t("title2")}
                        </h1>
                        <p className='text-sm sm:text-base md:text-lg laptop:text-xl text-slate-400 text-justify'>
                            {t("des1")}
                        </p>
                        <p className='text-sm sm:text-base md:text-lg laptop:text-xl text-slate-400 text-justify'>
                            {t("des2")}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}