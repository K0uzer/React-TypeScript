const TipCalculation = ({
    check,
    arrayTip,
}: {
    check: any
    arrayTip: any
}) => {
    let tip
    if (arrayTip[0] !== 0 && arrayTip[1] !== 0)
        tip =
            check * (+arrayTip[0].percent / 100) +
            check * (+arrayTip[1].percent / 100)
    if (arrayTip[0] !== 0 && arrayTip[1] === 0)
        tip = check * (arrayTip[0].percent / 100)
    if (arrayTip[0] === 0 && arrayTip[1] !== 0)
        tip = check * (arrayTip[1].percent / 100)
    if (arrayTip[0] === 0 && arrayTip[1] === 0) tip = 0
    const result = check + tip
    console.log(arrayTip[0])
    return (
        <div>
            <h2 style={{ margin: '20px' }}>
                You pay ${result} (${check} + ${tip} tip)
            </h2>
        </div>
    )
}

export default TipCalculation
