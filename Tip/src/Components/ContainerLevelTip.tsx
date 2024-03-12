import { useEffect, useState } from 'react'

const ContainerLevelTip = ({
    children,
    arrayTip,
    setArrayTip,
    index,
}: {
    children: any
    arrayTip: any
    setArrayTip: any
    index: number
}) => {
    const [percent, setPercent] = useState('0')

    useEffect(() => {
        const getContent = () => {
            setArrayTip([
                (arrayTip[index] = { percent: percent }),
                ...arrayTip,
            ])
            arrayTip.length = 2
        }
        getContent()
    }, [percent])

    return (
        <div className="container">
            <>{children}</>
            <select
                onChange={(s: any) => {
                    setPercent(s.target.value)
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
