import React from 'react';
import { DiagnosisResults } from '../types';
import ResultCard from './ResultCard';

interface ResultsSectionProps {
    results: DiagnosisResults | null;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ results }) => {
    if (!results) {
        return (
            <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
                <div className="bg-green-600 text-white font-bold text-lg p-3 rounded-t-lg">
                    ReVALUE+導入による効果
                </div>
                <div className="p-4 flex-grow flex items-center justify-center">
                    <div className="text-center text-gray-500">
                        <i className="fas fa-arrow-left text-2xl mb-2"></i>
                        <p>左の欄に情報を入力して</p>
                        <p>診断を開始してください。</p>
                    </div>
                </div>
            </div>
        );
    }
    
    const { co2, cost } = results;

    return (
        <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
            <div className="bg-green-600 text-white font-bold text-lg p-3 rounded-t-lg">
                診断結果
            </div>
            <div className="p-4 flex-grow overflow-y-auto">
                <ResultCard
                    icon="fa-leaf"
                    title="環境貢献メリット（CO2削減）"
                    value={co2.co2Reduction}
                    unit="kg 削減！"
                    treeEquivalent={co2.treeEquivalent}
                    carEquivalent={co2.carEquivalent}
                />
                
                <div className="mt-5">
                    <h3 className="text-md font-bold text-gray-800 flex items-center mb-2">
                         <div className="w-8 h-8 rounded-full bg-gray-600 text-white flex items-center justify-center mr-3 flex-shrink-0">
                            <i className="fas fa-yen-sign"></i>
                        </div>
                        経済的メリット（廃棄コスト目安）
                    </h3>
                    <div className="space-y-2">
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                             <h4 className="font-semibold text-gray-700 mb-1 text-sm">廃プラスチックとして処分した場合</h4>
                             <p className="text-2xl font-bold text-red-600 text-center">
                                {cost.plasticCostMin.toLocaleString()} ~ {cost.plasticCostMax.toLocaleString()}
                                <span className="text-base font-medium text-gray-700 ml-1">円</span>
                             </p>
                        </div>
                         <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                             <h4 className="font-semibold text-gray-700 mb-1 text-sm">混載ごみとして処分した場合</h4>
                              <p className="text-2xl font-bold text-red-600 text-center">
                                {cost.mixedCostMin.toLocaleString()} ~ {cost.mixedCostMax.toLocaleString()}
                                <span className="text-base font-medium text-gray-700 ml-1">円</span>
                             </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 text-center text-xs p-2 bg-gray-100 rounded-lg">
                     <p>
                        コスト単価出典：<a href="https://recyclehub.jp/column/haiki_shori_hiyo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">リサイクルハブ</a>
                        <span className="text-gray-500">（公表データを基に作成）</span>
                    </p>
                </div>

                <div className="mt-4 text-xs text-gray-500 p-2 border-t border-gray-200 space-y-1">
                    <p>※CO2算出：年間使用量(kg) × 0.92kgで算出（リサイクル率25%と仮定）。製品の原料調達と使用後の廃棄・リサイクル段階におけるCO2排出量のみを対象としています。</p>
                    <p>※コスト算出：廃プラスチックの単価は「30～80円/kg」、混載ごみは「45円～120円/kg」を基準に地域差を考慮。実際の費用は廃棄物の状態、量、処理業者との契約内容によって大きく変動します。正確な費用は必ず複数の業者から見積もりを取得してください。</p>
                </div>
            </div>
        </div>
    );
};

export default ResultsSection;
