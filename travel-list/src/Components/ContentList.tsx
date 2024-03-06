import { useState } from 'react'
import Item from './Item'

const ContentList = ({
    handleClearList,
    handleToggleItem,
    handleDeleteItem,
    items,
}: {
    handleClearList: any
    handleToggleItem: any
    handleDeleteItem: any
    items: any
}) => {
    const [sortBy, setSortBy] = useState('input')
    let sortedItems: any

    if (sortBy === 'input') sortedItems = items
    if (sortBy === 'description')
        sortedItems = items
            .splice()
            .sort((a: any, b: any) => a.description.localCompare(b.description))
    if (sortBy === 'packed')
        sortedItems = items
            .slice()
            .sort((a: any, b: any) => Number(a.packages) - Number(b.packages))

    return (
        <section className="list">
            {items.length > 0 ? (
                <ul>
                    {items.map((item: any) => (
                        <Item
                            key={item.id}
                            item={item}
                            handleDeleteItem={handleDeleteItem}
                            handleToggleItem={handleToggleItem}
                        />
                    ))}
                </ul>
            ) : (
                <p>Список задач пуст.</p>
            )}
            <div className="action">
                <select
                    value={sortBy}
                    onChange={(s) => setSortBy(s.target.value)}
                >
                    <option value="'input'">Sort by input order</option>
                    <option value="'description'">Sort by description</option>
                    <option value="'packed'">Sort by packed status</option>
                </select>
                <button onClick={handleClearList}>Очистить список</button>
            </div>
        </section>
    )
}

export default ContentList
