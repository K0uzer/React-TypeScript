import Item from "./Item"

const ContentList = ({handleToggleItem, handleDeleteItem, items}:{handleToggleItem:any, handleDeleteItem: any, items:any}) => {
    return (
        <section className='list'>
            {
                items.length > 0 ? <ul>
                    { items?.map((item:any, index:any) => <Item key={index} item={item} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem} />) }
                </ul> : <p>Список задач пуст.</p>
            }
        </section>
    )
}

export default ContentList