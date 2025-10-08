import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Image
            className="mx-auto mb-8 dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={150}
            height={30}
            priority
          />
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Next.js PPR Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Partial Prerendering (PPR)と従来のSSG（Static Site Generation）の違いを体験できるデモアプリケーションです。
            それぞれのレンダリング方式の特徴とパフォーマンスの違いを確認してください。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* PPRカード */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-purple-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h2 className="text-2xl font-bold text-purple-600 mb-3">
                Partial Prerendering (PPR)
              </h2>
              <p className="text-gray-700 mb-6">
                静的シェルと動的コンテンツを組み合わせた最新のレンダリング方式
              </p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">高速な初期表示</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">パーソナライゼーション対応</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">リアルタイムデータ表示</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">ストリーミング対応</span>
              </div>
            </div>

            <Link 
              href="/ppr"
              className="block w-full text-center bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              PPR デモを見る
            </Link>
          </div>

          {/* SSGカード */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-green-200 hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📄</span>
              </div>
              <h2 className="text-2xl font-bold text-green-600 mb-3">
                Static Site Generation (SSG)
              </h2>
              <p className="text-gray-700 mb-6">
                すべてのコンテンツをビルド時に生成する従来の静的サイト生成
              </p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">最高の初期表示速度</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">CDNキャッシング効率</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-sm">SEO最適化</span>
              </div>
              <div className="flex items-center">
                <span className="text-orange-500 mr-2">△</span>
                <span className="text-sm">動的コンテンツ非対応</span>
              </div>
            </div>

            <Link 
              href="/ssg"
              className="block w-full text-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              SSG デモを見る
            </Link>
          </div>
        </div>

        {/* 説明セクション */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            このデモについて
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-purple-600 mb-3">PPRページの特徴</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• 静的シェル（500ms遅延）が即座に表示</li>
                <li>• 動的コンテンツ（2秒遅延）はストリーミングで後から表示</li>
                <li>• cookies APIを使用してリクエスト時データを生成</li>
                <li>• Suspenseによるローディング状態の表示</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-600 mb-3">SSGページの特徴</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• すべてのコンテンツがビルド時に生成（1秒遅延）</li>
                <li>• すべてのユーザーに同じコンテンツを配信</li>
                <li>• リロードしても同じデータが表示</li>
                <li>• 更新にはビルドの再実行が必要</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
