
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="mt-auto p-3 bg-gray-100 flex justify-between items-center border-t border-gray-200">
            <div>
                <img alt="萩原工業株式会社 ロゴ" className="h-8" src="https://www.hagihara.co.jp/wp/wp-content/themes/hagihara/assets/images/common/logo.svg" />
            </div>
            <div className="text-xs text-gray-500">
                © HAGIHARA INDUSTRIES INC.
            </div>
        </footer>
    );
};

export default Footer;
