
const Statistics = ({items}:{items:any}) => {

    let count = items.filter((item:any) => item.packages === true).length
    let percent = Math.round(items.filter((item:any) => item.packages === true).length / items.length) * 100

    if(count === 0) percent = 0

    return (
        <footer className='footer'>
            <em style={{display:"flex", justifyContent: "center", padding: '10px'}}>
                {
                    percent === 100 ? 'You got everything! Ready to go 🤩' :
                    `🧮 You have ${items.length} items on your list, and you already packed ${count} (${percent}%)`
                }
            </em>
        </footer>
    )
}

export default Statistics