import React, { useState } from 'react';
import { DiagnosisResults } from './types';
import Header from './components/Header';
import InputSection from './components/InputSection';
import SolutionSection from './components/SolutionSection';
import ResultsSection from './components/ResultsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [usageAmount, setUsageAmount] = useState<string>('');
    const [prefecture, setPrefecture] = useState<string>('東京都');
    const [results, setResults] = useState<DiagnosisResults | null>(null);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 print:p-0 print:bg-white print:block">
            <div className="slide-container w-full max-w-7xl mx-auto min-h-[720px] bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col print:shadow-none print:min-h-full print:rounded-none">
                <Header />
                <main className="flex-grow flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3 p-4 border-b lg:border-b-0 lg:border-r border-gray-200">
                        <InputSection
                            usageAmount={usageAmount}
                            setUsageAmount={setUsageAmount}
                            prefecture={prefecture}
                            setPrefecture={setPrefecture}
                            setResults={setResults}
                        />
                    </div>
                    <div className="w-full lg:w-1/3 p-4">
                        <SolutionSection />
                    </div>
                    <div className="w-full lg:w-1/3 p-4 border-t lg:border-t-0 lg:border-l border-gray-200">
                        <ResultsSection
                            results={results}
                        />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App;
