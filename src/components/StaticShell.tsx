import { ReactNode } from 'react';
import Link from 'next/link';

interface StaticShellProps {
  children: ReactNode;
}

// 静的シェルコンポーネント - ビルド時に生成される
export async function StaticShell({ children }: StaticShellProps) {
  // 静的シェルの遅延をシミュレート（ビルド時間を表現）
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  const staticTimestamp = new Date().toISOString();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 静的ナビゲーション */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">PPR Demo - Next.js</h1>
          <nav className="mt-2 space-x-4">
            <Link href="/ppr" className="hover:underline">PPR Page</Link>
            <Link href="/ssg" className="hover:underline">SSG Page</Link>
            <Link href="/" className="hover:underline">Home</Link>
          </nav>
          <p className="text-sm text-blue-200 mt-2">
            静的シェル生成時刻: {staticTimestamp}
          </p>
        </div>
      </header>

      {/* 静的コンテンツエリア */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-green-600 mb-3">
            ✅ 静的コンテンツ (ビルド時生成)
          </h2>
          <p className="text-gray-700 mb-4">
            この部分は静的シェルとしてビルド時に生成されます。
            PPRでは、この部分が即座にユーザーに表示されます。
          </p>
          <div className="bg-green-50 border border-green-200 rounded p-4">
            <p className="text-sm text-green-700">
              <strong>特徴:</strong>
            </p>
            <ul className="text-sm text-green-700 mt-2 ml-4 list-disc">
              <li>高速な初期表示</li>
              <li>SEOに優しい</li>
              <li>CDNでキャッシュ可能</li>
            </ul>
          </div>
        </div>

        {/* 動的コンテンツプレースホルダー */}
        {children}
      </div>

      {/* 静的フッター */}
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 PPR Demo - 静的フッター (ビルド時生成)</p>
          <p className="text-sm text-gray-400 mt-2">
            静的シェル遅延: 500ms (ビルド時のみ)
          </p>
        </div>
      </footer>
    </div>
  );
}