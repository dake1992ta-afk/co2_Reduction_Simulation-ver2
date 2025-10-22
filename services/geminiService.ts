
import { GoogleGenAI } from "@google/genai";
import { CO2CalculationResults, DisposalCostResults } from "../types";

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. AI features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const generateReport = async (
    usageAmount: number,
    co2Results: CO2CalculationResults,
    costResults: DisposalCostResults
): Promise<string> => {
    const prompt = `
あなたは、環境コンサルティングとサステナビリティ推進を専門とするAIアシスタントです。
日本の企業「萩原工業」が開発した、使用済みブルーシートを新しいブルーシートにリサイクルする「ReVALUE+」という画期的な技術をプロモーションする役割を担っています。

以下のデータに基づき、クライアント企業向けの短く、専門的で、説得力のある診断レポートを作成してください。

# クライアントデータ
- ブルーシートの年間総使用量: ${usageAmount.toLocaleString()} kg
- ReVALUE+導入による年間CO2削減ポテンシャル: ${Math.round(co2Results.co2Reduction).toLocaleString()} kg
- 参考：現状の年間廃棄物処理コスト（目安）:
  - 廃プラスチックとして処分: ${costResults.plasticCostMin.toLocaleString()}円～${costResults.plasticCostMax.toLocaleString()}円
  - 混載ごみとして処分: ${costResults.mixedCostMin.toLocaleString()}円～${costResults.mixedCostMax.toLocaleString()}円

# レポート作成の指示
- 形式: 診断レポートの要約として記述してください。
- トーン: ポジティブ、協力的、そしてプロフェッショナルに。
- 目的: クライアントがReVALUE+を導入することの環境的および経済的メリットを明確に伝え、導入を前向きに検討してもらうこと。
- 内容に含めるべき要素:
  1. 冒頭で、クライアントの現状の取り組みに敬意を表しつつ、さらなる環境貢献とコスト最適化の可能性を提示します。
  2. CO2削減ポテンシャル（${Math.round(co2Results.co2Reduction).toLocaleString()} kg）が、企業の環境目標達成やサステナビリティ報告において、いかに重要であるかを強調します。
  3. ReVALUE+が、表示されている廃棄コストの削減に直接繋がるだけでなく、サーキュラーエコノミーへの貢献という企業価値向上にも繋がる「一石二鳥」のソリューションであることを示唆します。
  4. 最後に、萩原工業がパートナーとして、この変革を全面的にサポートする姿勢を伝えて、締めくくります。
- 文字数: 全体で250〜350字程度にまとめてください。
- 出力形式: テキストのみ。マークダウンは使用しないでください。
`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                temperature: 0.6,
                topP: 0.95,
            }
        });
        return response.text;
    } catch (error) {
        console.error("Gemini API call failed:", error);
        throw new Error("Failed to generate report from Gemini API.");
    }
};
