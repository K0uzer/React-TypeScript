import { useState } from 'react';
import { Task } from '../tasks';
import { tasks } from '../tasks'

const styleBlock = {display:'flex', justifyContent: 'center', alignItems: 'center'}

const Item = ({id, task, ready, quantity}:Task) => {

    const [state, setState] = useState(ready)
    let styleTask;

    const event = tasks.map((e) => e).filter((e) => e.id === id).map((e) => e.ready = !e.ready)[0]
    const condition = () => state === true ? `❌` : `✔️`
    const changeCondition = () => setState(event)

    if(state === true) styleTask = {textDecoration:'line-through', textDecorationColor:'#9f246e'};

    return (
        <li style={styleBlock}>
            <button onClick={changeCondition}>{condition()}</button>
            <p style={styleTask}>{task}: {quantity}</p>
        </li>
        )
    }

export default Item