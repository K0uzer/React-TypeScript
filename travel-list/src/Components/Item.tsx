import { useState } from 'react'

const styleBlock = {display:'flex', justifyContent: 'center', alignItems: 'center'}

const Item = ({handleToggleItem, handleDeleteItem, item}:{handleToggleItem:any, handleDeleteItem:any, item:any}) => {

    let styleTask;

    const [state, setState] = useState(item.packages)
    const condition = state === true ? `❌` : `✔️`

    if(state === true) styleTask = {textDecoration:'line-through', textDecorationColor:'#9f246e'};
    return (
        <li style={styleBlock}>
            <button onClick={() => setState(handleToggleItem(item.id))}>{condition}</button>
            <p style={styleTask}>{item.description}: {item.quantity}</p>
            <button onClick={() => handleDeleteItem(item.id)}>📛</button>
        </li>
        )
    }

export default Item