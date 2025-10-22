
import React from 'react';

const SolutionSection: React.FC = () => {
    return (
        <div className="h-full flex flex-col items-center justify-around">
            <div className="text-center w-full mb-4">
                <div className="relative h-16 flex items-center justify-center">
                    <div className="absolute w-full h-1 bg-blue-600 top-1/2 transform -translate-y-1/2"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-16 border-l-blue-600 border-t-transparent border-b-transparent"></div>
                     <span className="relative bg-white px-4 py-1 font-bold text-blue-600 text-lg z-10 border-2 border-blue-600 rounded-md">
                        その課題、ReVALUE+で解決へ
                    </span>
                </div>
            </div>

            <div className="flex justify-center w-full my-4">
                <img alt="ReVALUE+ ロゴ" className="h-20 object-contain" src="https://page.gensparksite.com/slides_images/6330fcf6db6ac483dd35dfcaf5809304.png" />
            </div>

            <div className="relative w-full h-64 flex items-center justify-center my-4">
                <img alt="リサイクルプロセス" className="w-full h-full object-contain opacity-10" src="https://page.gensparksite.com/slides_images/4d145f4118891a74f574c8562b6fb1f7.png" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center p-4">
                    <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">
                        使用済みブルーシートを新しいブルーシートに再生
                    </h3>
                    <div className="grid grid-cols-3 gap-3 w-full text-center">
                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                            <i className="fas fa-recycle text-green-600 text-2xl"></i>
                            <p className="text-sm mt-2 font-semibold text-blue-800">資源の有効活用</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                            <i className="fas fa-leaf text-green-600 text-2xl"></i>
                            <p className="text-sm mt-2 font-semibold text-blue-800">環境負荷の低減</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                            <i className="fas fa-dollar-sign text-orange-600 text-2xl"></i>
                            <p className="text-sm mt-2 font-semibold text-blue-800">廃棄コスト削減</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-auto">
                <img alt="水平リサイクル" className="h-36 object-contain" src="https://page.gensparksite.com/slides_images/dfe059b09bf7bd9e734b4d3b006f10b5.png" />
            </div>
        </div>
    );
};

export default SolutionSection;
