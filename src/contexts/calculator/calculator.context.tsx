import React, { createContext, useContext, useMemo } from "react";
import { CalculatorActions as Actions } from "./calculator.actions";
import calculatorReducer from './calculator.reducers';

interface IContextCalculatorProps {
  children: React.ReactNode;
}


export interface CalculatorState {
  inCalculation: string;
  result: number;
  applyingCalculate: boolean;
}

export interface ICalculatorContext extends CalculatorState {
  calculate: () => void;
  gatherOperations: (inCalculation: string) => void;
}


export const CalculatorContext = createContext<ICalculatorContext>({
  inCalculation: '',
  result: 0,
  applyingCalculate: false,
  calculate: () => { },
  gatherOperations: () => { },
});

CalculatorContext.displayName = 'CalculatorContext'

export const CalculatorProvider = ({ children }: IContextCalculatorProps) => {
  const [state, dispatch] = React.useReducer(calculatorReducer, {
    inCalculation: '',
    applyingCalculate: false,
    result: 0,
  })

  const calculate = () => dispatch({ type: Actions.CALCULATE });
  const gatherOperations = (inCalculation: string) => dispatch({ type: Actions.GATHER_OPERATIONS, inCalculation })

  const value = useMemo(
    () => ({
      ...state,
      calculate,
      gatherOperations,
    }),
    [state]
  )

  return <CalculatorContext.Provider value={value}>
    {children}
  </CalculatorContext.Provider>
}

export const useCalculatorContext = () => useContext(CalculatorContext);
