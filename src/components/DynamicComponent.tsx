import { cookies } from 'next/headers';

// 動的コンポーネント - リクエスト時に生成される
export async function DynamicComponent() {
  // 動的レンダリングの遅延をシミュレート（API呼び出しやデータベースクエリを表現）
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // cookiesを使用して動的レンダリングを強制
  const cookieStore = await cookies();
  const userSession = cookieStore.get('session')?.value || 'ゲスト';
  
  const dynamicTimestamp = new Date().toISOString();
  const randomData = Math.floor(Math.random() * 1000);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-orange-600 mb-3">
        ⚡ 動的コンテンツ (リクエスト時生成)
      </h2>
      <p className="text-gray-700 mb-4">
        この部分は各リクエストで動的に生成されます。
        PPRでは、Suspenseのfallbackが表示された後にストリーミングされます。
      </p>
      
      <div className="bg-orange-50 border border-orange-200 rounded p-4 mb-4">
        <h3 className="font-semibold text-orange-800 mb-2">動的データ:</h3>
        <ul className="text-sm text-orange-700 space-y-1">
          <li><strong>生成時刻:</strong> {dynamicTimestamp}</li>
          <li><strong>ランダム値:</strong> {randomData}</li>
          <li><strong>ユーザーセッション:</strong> {userSession}</li>
        </ul>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded p-4">
        <p className="text-sm text-orange-700">
          <strong>特徴:</strong>
        </p>
        <ul className="text-sm text-orange-700 mt-2 ml-4 list-disc">
          <li>リクエストごとに異なるデータ</li>
          <li>パーソナライズされたコンテンツ</li>
          <li>リアルタイム情報の表示</li>
          <li>動的遅延: 2秒 (API呼び出しシミュレート)</li>
        </ul>
      </div>
    </div>
  );
}