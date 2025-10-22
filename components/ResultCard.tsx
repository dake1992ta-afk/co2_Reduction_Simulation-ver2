
import React from 'react';

interface ResultCardProps {
    icon: string;
    title: string;
    value: number;
    unit: string;
    treeEquivalent: number;
    carEquivalent: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ icon, title, value, unit, treeEquivalent, carEquivalent }) => {
    return (
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center mr-3">
                    <i className={`fas ${icon}`}></i>
                </div>
                <h3 className="text-md font-bold text-green-800">{title}</h3>
            </div>
            
            <p className="text-sm text-gray-600">年間のCO2排出量を...</p>
            <p className="text-3xl font-bold text-green-700 text-center my-2">
                約 <span className="text-4xl">{Math.round(value).toLocaleString()}</span> {unit}
            </p>

            <div className="space-y-3 mt-4">
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center mr-3 flex-shrink-0">
                        <i className="fas fa-tree"></i>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-green-900">杉の木 約 {treeEquivalent.toLocaleString()} 本分</p>
                        <p className="text-xs text-gray-600">の年間吸収量に相当します</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center mr-3 flex-shrink-0">
                        <i className="fas fa-car"></i>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-green-900">自動車の走行距離 約 {carEquivalent.toLocaleString()} km分</p>
                        <p className="text-xs text-gray-600">の排出量に相当します</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;
