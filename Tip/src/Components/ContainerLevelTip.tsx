import { useEffect, useState } from 'react'

const ContainerLevelTip = ({
    children,
    arrayTip,
    setArrayTip,
}: {
    children: any
    arrayTip: number[]
    setArrayTip: any
}) => {
    const [percent, setPercent] = useState<number>(0)
    useEffect(() => {
        const getContent = () => {
            setArrayTip(arrayTip.push(percent))
            console.log(arrayTip)
        }
        getContent()
    }, [percent])

    return (
        <div className="container">
            <>{children}</>
            <select
                onChange={(s) => {
                    setPercent(Number(s.target.value))
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
