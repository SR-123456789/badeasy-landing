import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BadeasyTranslator - 隙間時間で、世界とつながる英語力を',
  description: '英字新聞を手軽に、効率よく。ワンタップで意味表示・辞書検索・単語帳登録。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

