import { Suspense } from 'react';
import { StaticShell } from '../../components/StaticShell';
import { DynamicComponent } from '../../components/DynamicComponent';
import { LoadingFallback } from '../../components/LoadingFallback';

// PPRを有効にする
export const experimental_ppr = true;

export default function PPRPage() {
  return (
    <StaticShell>
      {/* PPR説明セクション */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">
          🚀 Partial Prerendering (PPR) デモ
        </h2>
        <p className="text-gray-700 mb-4">
          このページはPartial Prerendering (PPR)を使用しています。
          静的シェルは即座に表示され、動的コンテンツはSuspenseを使用してストリーミングされます。
        </p>
        
        <div className="bg-purple-50 border border-purple-200 rounded p-4 mb-4">
          <h3 className="font-semibold text-purple-800 mb-2">PPRの流れ:</h3>
          <ol className="text-sm text-purple-700 space-y-1 ml-4 list-decimal">
            <li>静的シェル（ナビゲーション、ヘッダー、フッター）が即座に表示</li>
            <li>動的コンテンツの部分にローディング状態を表示</li>
            <li>動的コンテンツがサーバーで生成完了後、ストリーミングで更新</li>
            <li>ユーザーは初期表示を見ながら動的コンテンツの完了を待つ</li>
          </ol>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded p-4">
          <p className="text-sm text-blue-700">
            <strong>性能上のメリット:</strong> 
            ユーザーは動的コンテンツの生成を待つ必要がなく、静的部分をすぐに操作できます。
            これにより、体感的なページ読み込み速度が大幅に向上します。
          </p>
        </div>
      </div>

      {/* Suspenseで動的コンテンツをラップ */}
      <Suspense fallback={<LoadingFallback />}>
        <DynamicComponent />
      </Suspense>

      {/* 追加の静的コンテンツ */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-green-600 mb-3">
          ✅ 追加の静的コンテンツ
        </h3>
        <p className="text-gray-700 mb-3">
          この部分も静的シェルの一部として即座に表示されます。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded p-3">
            <h4 className="font-medium text-green-800">高速表示</h4>
            <p className="text-sm text-green-700 mt-1">
              静的コンテンツは事前に生成されているため、CDNから高速配信
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-3">
            <h4 className="font-medium text-green-800">SEO最適化</h4>
            <p className="text-sm text-green-700 mt-1">
              検索エンジンは静的コンテンツを即座にインデックス可能
            </p>
          </div>
        </div>
      </div>
    </StaticShell>
  );
}
