import { FC, useState } from "react";

const Form:FC = () => {

    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(1)

    const handleSubmit = (evt:any) => {
        evt.preventDefault();

        if(!description) return

        const newItem = {
            description, 
            quantity, 
            package: false, 
            id: Date.now(),
        }

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