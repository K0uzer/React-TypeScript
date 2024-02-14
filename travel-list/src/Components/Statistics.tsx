import { tasks } from "../tasks"

let count = tasks.filter((item) => item.ready === true).length
let percent = (tasks.filter((item) => item.ready === true).length / tasks.length) * 100

const Statistics = () => {
    if(count === 0) percent = 0

    return (
        <footer className='footer'>
            🧮 You have {tasks.length} items on your list, and you already packed {count} ({percent}%)
        </footer>
    )
}

export default Statistics