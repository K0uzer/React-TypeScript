import React, { useState } from "react";

export interface NewItemProps {
    description: string,
    quantity: number,
    packages: boolean,
    id: number,
}

const Form = ({ handleAddItems }:{ handleAddItems:any }) => {

    const [description, setDescription] = useState<string>('')
    const [quantity, setQuantity] = useState<number>(1)

    const handleSubmit = (evt:React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if(!description) return alert('Что-то пошло не так!')

        const newItem:NewItemProps = {
            description,
            quantity,
            packages: false,
            id: Date.now(),
        }

        handleAddItems(newItem)

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