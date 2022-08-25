import { calculateNumberFromString } from "../../utils/calculation-numbers";
import { CalculatorActions as Actions, Action } from "./calculator.actions";
import { CalculatorState } from "./calculator.context";

type Reducer = (prevState: CalculatorState, action: Action) => CalculatorState;

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case Actions.CALCULATE:
      return {
        ...state,
        applyingCalculate: true,
        result: calculateNumberFromString(state.inCalculation),
      };

    case Actions.GATHER_OPERATIONS: {
      return {
        ...state,
        applyingCalculate: false,
        inCalculation: `${state.inCalculation}${action.inCalculation}`.trim(),
      };
    }
  }
};

export default reducer;
