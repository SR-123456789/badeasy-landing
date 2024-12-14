import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'
import { Search, BookOpen, Zap } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: 'ワンタップで意味表示',
      description: '気になる単語をタップするだけで、すぐに意味が表示されます。',
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      title: '単語帳機能で効率学習',
      description: '覚えたい単語を簡単に単語帳に追加し、効率的に復習できます。',
    },
    {
      icon: <Search className="h-6 w-6 text-blue-500" />,
      title: '辞書検索でサポート',
      description: '詳細な意味や用例を調べたいときは、内蔵の辞書で簡単に検索できます。',
    },
  ]

  return (
    <section id="features" className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">アプリの特徴</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {feature.icon}
                  <span className="ml-2">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

