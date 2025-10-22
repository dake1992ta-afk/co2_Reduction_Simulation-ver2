import React, { useCallback } from 'react';
import { DiagnosisResults } from '../types';
import { CO2_REDUCTION_FACTOR, TREE_ABSORPTION_PER_YEAR, CAR_EMISSION_PER_KM } from '../constants';
import { disposalUnitPrices, prefectures } from '../data/prefectureData';

interface InputSectionProps {
    usageAmount: string;
    setUsageAmount: React.Dispatch<React.SetStateAction<string>>;
    prefecture: string;
    setPrefecture: React.Dispatch<React.SetStateAction<string>>;
    setResults: React.Dispatch<React.SetStateAction<DiagnosisResults | null>>;
}

const InputSection: React.FC<InputSectionProps> = ({ usageAmount, setUsageAmount, prefecture, setPrefecture, setResults }) => {

    const handleCalculate = useCallback(() => {
        const amount = parseFloat(usageAmount) || 0;
        if (amount <= 0) {
            alert('有効な総使用量（kg）を正の数値で入力してください。');
            setResults(null);
            return;
        }

        if (!prefecture) {
            alert('都道府県を選択してください。');
            return;
        }

        // CO2 Calculation
        const co2Reduction = amount * CO2_REDUCTION_FACTOR;
        const treeEquivalent = Math.round(co2Reduction / TREE_ABSORPTION_PER_YEAR);
        const carEquivalent = Math.round(co2Reduction / CAR_EMISSION_PER_KM);

        // Cost Calculation
        const prices = disposalUnitPrices[prefecture];
        const plasticCostMin = Math.round(amount * prices.plastic.min);
        const plasticCostMax = Math.round(amount * prices.plastic.max);
        const mixedCostMin = Math.round(amount * prices.mixed.min);
        const mixedCostMax = Math.round(amount * prices.mixed.max);

        setResults({
            co2: {
                co2Reduction,
                treeEquivalent,
                carEquivalent,
            },
            cost: {
                plasticCostMin,
                plasticCostMax,
                mixedCostMin,
                mixedCostMax
            }
        });
    }, [usageAmount, prefecture, setResults]);
    
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleCalculate();
        }
    };


    return (
        <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
            <div className="bg-blue-600 text-white font-bold text-lg p-3 rounded-t-lg flex items-center">
                <i className="fas fa-search-plus text-xl mr-3"></i>
                <span>貴社の現状を診断</span>
            </div>
            <div className="p-4 flex-grow">
                <div className="mb-4">
                    <label htmlFor="usage-amount" className="block text-gray-700 text-sm font-bold mb-2">
                        年間のブルーシート総使用量
                    </label>
                    <div className="flex items-center">
                        <input
                            id="usage-amount"
                            type="number"
                            className="input-box border-2 border-blue-600 rounded-md p-2 w-full bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            placeholder="例: 5000"
                            value={usageAmount}
                            onChange={(e) => setUsageAmount(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <span className="ml-3 text-gray-600 font-semibold">kg</span>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="prefecture" className="block text-gray-700 text-sm font-bold mb-2">
                        都道府県
                    </label>
                    <div className="relative">
                        <select
                            id="prefecture"
                            className="input-box border-2 border-blue-600 rounded-md p-2 w-full bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:outline-none appearance-none"
                            value={prefecture}
                            onChange={(e) => setPrefecture(e.target.value)}
                        >
                            {prefectures.map((pref) => (
                                <option key={pref} value={pref}>
                                    {pref}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                           <i className="fas fa-chevron-down text-xs"></i>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleCalculate}
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 transform hover:scale-105"
                >
                    <i className="fas fa-calculator mr-2"></i>
                    診断を開始する
                </button>
            </div>
        </div>
    );
};

export default InputSection;
