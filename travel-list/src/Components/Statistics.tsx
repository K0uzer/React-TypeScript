
const Statistics = ({ items }: { items: any }) => {
    if (!items.length)
        return (
            <p className="footer">
                <em>Start adding some items to your packing list 🚀</em>
            </p>
        )
    const packaged = items.filter((item: any) => item.packages === true).length
    const percentPackaged =
        Math.round(
            items.filter((item: any) => item.packages === true).length /
                items.length
        ) * 100

    return (
        <footer className="footer">
            <em
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '10px',
                }}
            >
                {percentPackaged === 100
                    ? 'You got everything! Ready to go 🤩'
                    : `🧮 You have ${items.length} items on your list, and you already packed ${packaged} (${percentPackaged}%)`}
            </em>
        </footer>
    )
}

export default Statistics
