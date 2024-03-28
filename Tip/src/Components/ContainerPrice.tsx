type ContainerPriceProps = {
    check: number
    setCheck: any
    children: any
}

const ContainerPrice = ({
    check,
    setCheck,
    children,
}: ContainerPriceProps) => {
    return (
        <div className="container">
            {children}
            <input
                type="text"
                value={check}
                onChange={(s) => setCheck(+s.target.value)}
            />
        </div>
    )
}

export default ContainerPrice
