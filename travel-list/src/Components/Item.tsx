import { useState } from 'react';
import { tasks } from '../tasks'

const styleBlock = {display:'flex', justifyContent: 'center', alignItems: 'center'}

const Item = ({handleDeleteItem, item}:{handleDeleteItem:any, item:any}) => {
    let styleTask;
    const [state, setState] = useState(item.packages)
    const event = tasks.filter((e) => e.id === item.id).map((e) => e.packages = !e.packages)
    const condition = () => state === true ? `❌` : `✔️`
    const changeCondition = () => setState(event)
    console.log(event)

    if(state === true) styleTask = {textDecoration:'line-through', textDecorationColor:'#9f246e'};

    return (
        <li style={styleBlock}>
            <button onClick={changeCondition}>{condition()}</button>
            <p style={styleTask}>{item.description}: {item.quantity}</p>
            <button onClick={() => handleDeleteItem(item.id)}>📛</button>
        </li>
        )
    }

export default Item