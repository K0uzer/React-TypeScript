const ContainerLevelTip = ({
    children,
    index,
    changeContent,
    firstTip,
    twoTip,
}: {
    children: any
    index: any
    changeContent: any
    firstTip: any
    twoTip: any
}) => {
    return (
        <div className="container">
            <>{children}</>
            <select
                value={index > 0 ? twoTip : firstTip}
                onChange={(s: any) => {
                    changeContent(s.target.value, index)
                }}
            >
                <option value="0">Dissatisfied (0%)</option>
                <option value="10">
                    It was good (10%)
                </option>
                <option value="20">
                    Absolutely amazing (20%)
                </option>
            </select>
        </div>
    )
}

export default ContainerLevelTip
