import clsx from "clsx";
import { FC } from "react";
import { TypeOfButton } from "../../../models";
import ButtonCalculator from '../button-calculator';
import PadCalculator from "../pad-calculator";

const WrapperCalculator: FC = () => {
  const onlyPaddingInY = clsx('py-1.5');
  const buttonPaddingStyle = clsx('px-4 pt-2 pb-1');

  return (
    <div className="bg-neutral-100 border border-gray-600 shadow-lg rounded-md">
      <div className='flex flex-col'>
        <div className="">
          <PadCalculator />

        </div>
        <hr />
        <div className='grid grid-cols-5 mt-2.5 py-1.5'>
          <div className='col-span-3'>
            <div className='flex flex-col'>

              <div className={buttonPaddingStyle}>
                <ButtonCalculator type={TypeOfButton.OPERATOR} text={'Clear'}></ButtonCalculator>
              </div>

              <div className='flex flex-col'>
                <div className='flex flex-row'>
                  <div className={buttonPaddingStyle}>
                    <ButtonCalculator type={TypeOfButton.DECIMAL} text={'7'}></ButtonCalculator>
                  </div>

                  <div className={buttonPaddingStyle}>
                    <ButtonCalculator type={TypeOfButton.DECIMAL} text={'8'}></ButtonCalculator>
                  </div>

                  <div className={buttonPaddingStyle}>
                    <ButtonCalculator type={TypeOfButton.DECIMAL} text={'9'}></ButtonCalculator>
                  </div>
                </div>

                <div className='flex flex-row'>
                  <div className={buttonPaddingStyle}>
                    <ButtonCalculator type={TypeOfButton.DECIMAL} text={'4'}></ButtonCalculator>
                  </div>

                  <div className={buttonPaddingStyle}>
                    <ButtonCalculator type={TypeOfButton.DECIMAL} text={'5'}></ButtonCalculator>
                  </div>

                  <div className={buttonPaddingStyle}>
                    <ButtonCalculator type={TypeOfButton.DECIMAL} text={'6'}></ButtonCalculator>
                  </div>
                </div>


                <div className='flex flex-row'>
                  <div className={buttonPaddingStyle}>
                    <ButtonCalculator type={TypeOfButton.DECIMAL} text={'1'}></ButtonCalculator>
                  </div>

                  <div className={buttonPaddingStyle}>
                    <ButtonCalculator type={TypeOfButton.DECIMAL} text={'2'}></ButtonCalculator>
                  </div>

                  <div className={buttonPaddingStyle}>
                    <ButtonCalculator type={TypeOfButton.DECIMAL} text={'3'}></ButtonCalculator>
                  </div>
                </div>

                <div className='flex flex-row'>
                  <div className={buttonPaddingStyle}>
                    <ButtonCalculator type={TypeOfButton.DECIMAL} text={'0'}></ButtonCalculator>
                  </div>

                  <div className={buttonPaddingStyle}>
                    <ButtonCalculator type={TypeOfButton.DECIMAL} text={'.'}></ButtonCalculator>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className='col-span-2'>
            <div className='flex flex-col items-end pr-2.5'>
              <div className={onlyPaddingInY}>
                <ButtonCalculator type={TypeOfButton.OPERATOR} text={'/'}></ButtonCalculator>
              </div>

              <div className={onlyPaddingInY}>
                <ButtonCalculator type={TypeOfButton.OPERATOR} text={'*'}></ButtonCalculator>
              </div>


              <div className={onlyPaddingInY}>
                <ButtonCalculator type={TypeOfButton.OPERATOR} text={'-'}></ButtonCalculator>
              </div>


              <div className={onlyPaddingInY}><ButtonCalculator type={TypeOfButton.OPERATOR} text={'+'}></ButtonCalculator></div>

              <div className={onlyPaddingInY}>
                <ButtonCalculator type={TypeOfButton.OPERATOR} text={'='}></ButtonCalculator>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}


export default WrapperCalculator;
