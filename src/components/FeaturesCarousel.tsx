'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'
import { Search, BookOpen, Zap } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function FeaturesCarousel() {
  const features = [
        {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: '辞書なしで英長文学習ができる',
      description: 'わからない単語はワンタップで意味を表示し、辞書検索も可能です。',
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: 'ワンタップで意味表示',
      description: '単語をタップするだけで意味が表示！辞書を引く手間を省いて、英語学習がスムーズに。',
    },
    {
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      title: '単語帳機能で効率学習',
      description: '気になる単語を簡単登録。いつでも見返せる自分だけの単語帳を作成。',
    },
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: '辞書検索でサポート',
      description: '分からない単語もすぐに検索！英語初心者でも安心して学習できます。',
    },
  ]

  return (
    <section id="features" className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">アプリの特徴</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="mySwiper"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    {feature.icon}
                    <span className="ml-4 text-2xl">{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-lg">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

