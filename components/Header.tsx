import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-50 py-3 px-6 border-b-4 border-blue-600 flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 text-center lg:text-left">
                【貴社向け】ブルーシート運用におけるCO2削減 無料診断レポート
            </h1>
            <button
                onClick={() => window.print()}
                className="print:hidden ml-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center"
                aria-label="レポートをPDFとして出力"
            >
                <i className="fas fa-file-pdf mr-2"></i>
                <span>PDF出力</span>
            </button>
        </header>
    );
};

export default Header;