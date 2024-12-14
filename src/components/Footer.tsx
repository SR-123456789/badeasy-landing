import { Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="social" className="w-full bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">BadeasyTranslator</h2>
            <p className="text-sm">隙間時間で、世界とつながる英語力を</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="hover:text-green-200">
              <Instagram />
            </Link>
            <Link href="#" className="hover:text-green-200">
              <Youtube />
            </Link>
          </div>
          <div>
            <Link href="#" className="text-sm hover:underline">お問い合わせ</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} BadeasyTranslator. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

