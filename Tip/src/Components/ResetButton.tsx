const ResetButton = ({
    setCheck,
    changeContent,
    children,
}: {
    setCheck: any
    changeContent: any
    children: any
}) => {
    const clearSets = () => {
        setCheck(0)
        changeContent(0, 0)
        changeContent(0, 1)
    }
    return (
        <button
            onClick={clearSets}
            style={{ margin: '0 0 0 20px' }}
        >
            {children}
        </button>
    )
}

export default ResetButton
