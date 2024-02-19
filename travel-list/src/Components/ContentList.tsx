import Item from "./Item"
import Sort from "./Sort"

const ContentList = ({handleClearList, handleToggleItem, handleDeleteItem, items}:{handleClearList:any, handleToggleItem:any, handleDeleteItem: any, items:any}) => {
    return (
        <section className='list'>
            {
                items.length > 0 ? <ul>
                    { items?.map((item:any, index:any) => <Item key={index} item={item} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem} />) }
                </ul> : <p>Список задач пуст.</p>
            }
            <Sort handleClearList={handleClearList} items={items} />
        </section>
    )
}

export default ContentList