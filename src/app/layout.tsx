import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BadeasyTranslator 英字記事での学習をスマホで完結 隙間時間を活用",
  description:
    "どんな英字記事でもワンタップで意味表示・辞書検索・単語帳登録できるアプリ。通勤や待ち時間を活用して英語力を効率的にアップ。",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  keywords:
    "好きな文章, 興味のある文章, 英語学習, 英字新聞, 辞書, 単語帳, 効率的な英語学習, 英語勉強アプリ, 隙間時間, 通勤, 待ち時間, ニュース英語, 初心者向け英語",
  robots: "index, follow",
  author: "BadeasyTranslator Team",
  canonical: "https://yourdomain.com", // あなたのドメインをここに設定
  openGraph: {
    title:
      "BadeasyTranslator | ワンタップで単語の意味を表示して隙間時間で英語学習を効率化",
    description:
      "英字新聞を手軽に読んで効率的に学ぶ。ワンタップで辞書検索、単語帳登録。忙しい人のための英語学習アプリ。",
    url: "https://yourdomain.com",
    type: "website",
    images: [
      {
        url: "/icon.png", // 適切なOG画像を用意
        width: 1200,
        height: 630,
        alt: "BadeasyTranslatorアプリ画面",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BadeasyTranslator | 英語学習を効率化",
    description:
      "英字新聞を手軽に読んで効率的に学ぶ。辞書検索や単語帳機能付き。通勤時間を有効活用！",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
