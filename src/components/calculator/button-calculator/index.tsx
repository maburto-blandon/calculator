import clsx from "clsx";
import { FC } from "react";
import { useCalculatorContext } from "../../../contexts/calculator/calculator.context";
import { TypeOfButton } from "../../../models";

interface ButtonCalulatorProps {
  type: TypeOfButton,
  text: string;
}

const ButtonCalulator: FC<ButtonCalulatorProps> = ({ type, text }) => {
  const { gatherOperations, calculate } = useCalculatorContext();

  const backgrounStyle = clsx('border rounded-full w-24 h-24 ', {
    'bg-orange-400 hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out text-white text-2xl': type === TypeOfButton.OPERATOR,
    'bg-gray-300 hover:bg-gray-400 hover:shadow-lg focus:bg-gray-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out text-black text-2xl': type === TypeOfButton.DECIMAL,
  });
  const buttonStyle = clsx(backgrounStyle)

  const onClickButton = () => {
    if (text === '=') {
      calculate();
    } else {
      gatherOperations(text);
    }
  }

  return (
    <button className={buttonStyle} onClick={onClickButton}>
      {text}
    </button>
  )
};


export default ButtonCalulator;
