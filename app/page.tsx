'use client';

import MainLoader from "@/components/MainLoader";
import { useToast } from "@/hooks/use-toast";
import { getVideoByType } from "@/lib/actions/video.actions";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Home() {
  const [videoUrl, setVideoUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const t = useTranslations('home');

  useEffect(() => {
    // Asosiy videoni yuklash
    const getVideo = async () => {
      try {
        const url = await getVideoByType('home');
        setVideoUrl(url);
      } catch (error) {
        toast({ title: "Asosiy videoni yuklashda xatolik yuzaga keldi." });
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getVideo();
  }, []);

  return (
    <>
      {isLoading && <MainLoader />}
      <div className="relative -z-10 h-dvh w-screen overflow-hidden">
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
        />

        <h1 className="absolute top-52 laptop:top-60 left-10 md:left-32 w-[90%] sm:w-4/5 lg:w-3/6 font-bold text-white text-4xl sm:text-5xl md:text-7xl laptop:text-8xl">
          {t("text1")}
        </h1>
      </div>
    </>
  );
}