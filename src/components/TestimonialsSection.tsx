'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Card, CardContent, CardHeader, CardTitle } from './card'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: '田中さん',
      comment: 'この アプリのおかげで、通勤時間が有効活用できるようになりました。英語力が着実に上がっています！',
    },
    {
      name: '佐藤さん',
      comment: '単語帳機能が本当に便利です。覚えたい単語をすぐに登録できて、効率的に学習できています。',
    },
    {
      name: '鈴木さん',
      comment: 'ワンタップで意味がわかるので、英字新聞を読むのが楽しくなりました。毎日の習慣になっています。',
    },
  ]

  return (
    <section className="w-full py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">ユーザーの声</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card>
                <CardHeader>
                  <CardTitle>{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{testimonial.comment}</p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

