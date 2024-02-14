import React, { FC, useState } from "react";

export interface NewItemProps {
    description: string,
    quantity: number,
    package: boolean,
    id: number,
}

const Form:FC = ({ setItems }) => {

    const [description, setDescription] = useState<string>('')
    const [quantity, setQuantity] = useState<number>(1)

    const handleAddItems = (item:any) => {
        setItems((prevItems: any) => [...prevItems, item])
    }

    const handleSubmit = (evt:React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if(!description) return

        const newItem:NewItemProps = {
            description,
            quantity,
            package: false,
            id: Date.now(),
        }

        handleAddItems(newItem)

        console.log(newItem)

        setDescription('')
        setQuantity(1)
    }


    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <input type="text" placeholder="Наименование задачи" value={description} onChange={(e) => setDescription(e.target.value)} />
            <select name="countElement" onChange={(e) => setQuantity(+e.target.value)} value={quantity}>
                {Array.from({length:20}, (_, index) => index + 1).map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
            <button>Добавить</button>
        </form>
    )
}

export default Form