
export interface CO2CalculationResults {
  co2Reduction: number;
  treeEquivalent: number;
  carEquivalent: number;
}

export interface DisposalCostResults {
  plasticCostMin: number;
  plasticCostMax: number;
  mixedCostMin: number;
  mixedCostMax: number;
}

export interface DiagnosisResults {
  co2: CO2CalculationResults;
  cost: DisposalCostResults;
}
