import { TipCalculationProps } from '../Types/TypeOfTipCalculation'

const TipCalculation = ({
    check,
    arrayTip,
}: {
    check: any
    arrayTip: number[]
}) => {
    let tip
    if (arrayTip[0] !== 0 && arrayTip[1] !== 0)
        tip = check * arrayTip[0] + check * arrayTip[1]
    if (arrayTip[0] !== 0 && arrayTip[1] === 0)
        tip = check * arrayTip[0]
    if (arrayTip[0] === 0 && arrayTip[1] !== 0)
        tip = check * arrayTip[1]
    if (arrayTip[0] === 0 && arrayTip[1] === 0) tip = 0
    const result = check + tip
    return (
        <div>
            <h2 style={{ margin: '20px' }}>
                You pay ${result} (${check} + ${tip} tip)
            </h2>
            <button style={{ margin: '0 0 0 20px' }}>
                Reset
            </button>
        </div>
    )
}

export default TipCalculation
