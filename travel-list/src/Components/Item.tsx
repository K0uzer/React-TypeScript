const styleBlock = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const Item = ({
    handleToggleItem,
    handleDeleteItem,
    item,
}: {
    handleToggleItem: any
    handleDeleteItem: any
    item: any
}) => {
    return (
        <li style={styleBlock}>
            <input
                type="checkbox"
                value={item.packages}
                onChange={() => {
                    handleToggleItem(item.id)
                }}
            >
                {}
            </input>
            <p style={item.packages ? { textDecoration: 'line-through' } : {}}>
                {item.description}: {item.quantity}
            </p>
            <button onClick={() => handleDeleteItem(item.id)}>📛</button>
        </li>
    )
}

export default Item
