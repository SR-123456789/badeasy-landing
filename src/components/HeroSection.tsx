"use client";

import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { appleAppStoreUrl, googlePlayStoreUrl } from "@/constants/urls";

export default function HeroSection() {
  const heroContent = [
    {
      title: "英字記事での学習を気軽に！",
      description: "ワンタップで意味表示・辞書検索・単語帳登録。",
      screenshot: "/hero/１１１.png",
      video: "/hero/5905282-hd_1920_1080_24fps.mp4",
    },
    {
      title: "隙間時間で英語力アップ！",
      description: "スマホだけで完結、通勤や待ち時間を有効活用",
      screenshot: "/hero/222.png",
      video: "/hero/3335296-hd_1920_1080_30fps.mp4",
    },
    {
      title: "ワンタップで単語帳作成",
      description: "わからなかった単語は繰り返し復習",
      screenshot: "/hero/dft.png",
      video: "/hero/855390-uhd_3840_2160_25fps.mp4",
    },
  ];

  return (
    <section className="w-full bg-green-50 relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-[700px] md:h-[800px] relative z-10"
      >
        {heroContent.map((content, index) => (
          <SwiperSlide key={index} className="relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={content.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-4 md:px-10">
              {/* テキストコンテンツ */}
              <div className="md:w-1/2 flex flex-col items-center md:text-left mb-8 md:mb-0 transform md:translate-y-0 translate-y-[200px]">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {content.title}
                </h2>
                <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl text-center">
                  {content.description}
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <Button
                    onClick={() => (window.location.href = appleAppStoreUrl)}
                    size="lg"
                  >
                    App Store
                  </Button>
                  <Button
                    onClick={() =>
                      (window.location.href = googlePlayStoreUrl)
                    }
                    size="lg"
                    variant="outline"
                  >
                    Google Play
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center items-center transform md:translate-y-0 translate-y-1/3">
                <Image
                  src={content.screenshot}
                  alt="App screenshot"
                  width={300}
                  height={600}
                  className="rounded-lg shadow-xl"
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
