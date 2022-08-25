import { FC, useEffect, useState } from "react";
import { useCalculatorContext } from "../../../contexts/calculator/calculator.context";


const PadCalculator: FC = () => {
  const [displayToPad, setDisplayToPad] = useState('0');
  const { inCalculation, result, applyingCalculate } = useCalculatorContext();

  useEffect(() => {
    if (applyingCalculate && result > 0) {
      setDisplayToPad(result.toString());
    }

    if (inCalculation && !applyingCalculate) {
      setDisplayToPad(inCalculation);
    }

  }, [inCalculation, result, applyingCalculate])

  return (
    <div className="flex flex-row justify-end">
      <span className="text-5xl font-semibold py-10 pr-4">
        {displayToPad}
      </span>
    </div>
  );
}


export default PadCalculator;
