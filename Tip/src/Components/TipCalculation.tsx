export type TipCalculationProps = {
    result: number
    price: number
    firstTip: any
    SetFirstTip: any
    twoTip: any
    setTwoTip: any
}

const TipCalculation = ({
    check,
    firstTip,
    twoTip,
}: {
    check: any
    firstTip: any
    twoTip: any
}) => {
    let tip = 0
    if (firstTip !== 0 && twoTip !== 0)
        tip =
            check * (firstTip / 100) +
            check * (twoTip / 100)
    if (firstTip !== 0 && twoTip === 0)
        tip = (check * (firstTip / 100)) / 2
    if (firstTip === 0 && twoTip !== 0)
        tip = (check * (twoTip / 100)) / 2
    if (firstTip === 0 && twoTip === 0) tip = 0

    return (
        <div>
            <h2 style={{ margin: '20px' }}>
                You pay ${check + tip} (${check} + ${~~tip}{' '}
                tip)
            </h2>
        </div>
    )
}

export default TipCalculation
