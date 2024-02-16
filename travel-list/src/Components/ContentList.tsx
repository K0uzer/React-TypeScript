import Item from "./Item"

const ContentList = ({handleDeleteItem, items}:{handleDeleteItem: any, items:any}) => {
    return (
        <section className='list'>
            <ul>
                { items?.map((item:any, index:any) => <Item key={index} item={item} handleDeleteItem={handleDeleteItem} />) ?? `Что-то пошло не так....` }
            </ul>
        </section>
    )
}

export default ContentList