import { tasks } from '../tasks'
import Item from './Item'

const getContent = tasks.map(({id, task, quantity, ready}, index) => <Item key={index} id={id} quantity={quantity} task={task} ready={ready}/>)

const ContentList = () => {
    return (
        <section className='list'>
            <ul>{getContent}</ul>
        </section>
    )
}

export default ContentList