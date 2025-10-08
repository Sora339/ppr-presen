// ローディングフォールバックコンポーネント
export function LoadingFallback() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 animate-pulse">
      <h2 className="text-xl font-semibold text-gray-400 mb-3">
        🔄 動的コンテンツを読み込み中...
      </h2>
      <p className="text-gray-500 mb-4">
        動的コンテンツが生成されています。少々お待ちください。
      </p>
      
      <div className="bg-gray-100 border border-gray-200 rounded p-4 mb-4">
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-3 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-300 rounded w-1/3"></div>
          <div className="h-3 bg-gray-300 rounded w-2/3"></div>
        </div>
      </div>

      <div className="bg-gray-100 border border-gray-200 rounded p-4">
        <div className="space-y-2">
          <div className="h-3 bg-gray-300 rounded w-1/4"></div>
          <div className="space-y-1 ml-4">
            <div className="h-2 bg-gray-300 rounded w-5/6"></div>
            <div className="h-2 bg-gray-300 rounded w-3/4"></div>
            <div className="h-2 bg-gray-300 rounded w-4/5"></div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-blue-500 bg-blue-100 transition ease-in-out duration-150 cursor-not-allowed">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          動的データを生成中...
        </div>
      </div>
    </div>
  );
}