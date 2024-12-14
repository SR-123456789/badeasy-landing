import { appleAppStoreUrl, googlePlayStoreUrl } from "@/constants/urls";
import { Button } from "./ui/button";
import { Smartphone, Tablet } from "lucide-react";
import Link from "next/link";

export default function DownloadSection() {
  return (
    <section id="download" className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">
          今すぐダウンロード
        </h2>
        <div className="flex justify-center space-x-4 mb-8">
          <Link href={appleAppStoreUrl}>
            <Button size="lg" variant="outline">
              App Store
            </Button>
          </Link>
          <Link href={googlePlayStoreUrl}>
            <Button size="lg" variant="outline">
              Google Play
            </Button>
          </Link>
        </div>
        <div className="flex justify-center space-x-8">
          <div className="flex items-center">
            <Smartphone className="h-8 w-8 text-primary mr-2" />
            <span>スマートフォン対応</span>
          </div>
          <div className="flex items-center">
            <Tablet className="h-8 w-8 text-primary mr-2" />
            <span>タブレット対応</span>
          </div>
        </div>
      </div>
    </section>
  );
}
