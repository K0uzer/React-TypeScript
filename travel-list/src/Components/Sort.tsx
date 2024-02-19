import { useState } from 'react'

const Sort = ({handleClearList, items}:{handleClearList:any, items:any}) => {

    const [sortBy, setSortBy] = useState('input')

    let sortedItems:any;

    if(sortBy === 'input') sortedItems = items
    if(sortBy === 'description') sortedItems = items.splice().sort((a:any, b:any) => a.description.localCompare(b.description))
    if(sortBy === 'packed') sortedItems = items

    return (
        <div className='action'>
            <select value={sortBy} onChange={(s) => setSortBy(s.target.value)}>
                <option value="value='input'">Sort by input order</option>
                <option value="value='description'">Sort by description</option>
                <option value="value='packed'">Sort by packed status</option>
            </select>
            <button onClick={handleClearList}>Очистить список</button>
        </div>
    )
}

export default Sort