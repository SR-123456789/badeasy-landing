import Link from 'next/link';
import { appleAppStoreUrl, googlePlayStoreUrl } from '@/constants/urls';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">BadeasyTranslator</h1>
          <p className="ml-4 text-sm text-gray-600 hidden md:block">
            隙間時間で、世界とつながる英語力を
          </p>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="#features" className="text-gray-600 hover:text-primary">
            特徴
          </Link>
          <Link href="#download" className="text-gray-600 hover:text-primary">
            ダウンロード
          </Link>
          <Link href="#social" className="text-gray-600 hover:text-primary">
            ソーシャルメディア
          </Link>
        </nav>
        <div className="flex space-x-2">
          <Link href={appleAppStoreUrl}>
            <div className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:text-primary">
              App Store
            </div>
          </Link>
          <Link href={googlePlayStoreUrl}>
            <div className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:text-primary">
              Google Play
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
