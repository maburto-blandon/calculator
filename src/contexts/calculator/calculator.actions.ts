export enum CalculatorActions {
  CALCULATE = "CALCULATE",
  GATHER_OPERATIONS = "GATHER_OPERATIONS",
}

export type Action =
  | { type: CalculatorActions.CALCULATE }
  | { type: CalculatorActions.GATHER_OPERATIONS; inCalculation: string };
