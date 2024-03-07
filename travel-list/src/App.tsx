import './index.css';
import Logo from './Components/Logo';
import Form from './Components/Form';
import ContentList from './Components/ContentList';
import Statistics from './Components/Statistics';
import { useEffect, useState } from 'react';
import { tasks } from './tasks';

export default function App() {
    const [items, setItems] = useState<any>([])

    useEffect(() => {
        setItems(tasks)
    }, [])

    const handleAddItems = (item: []) =>
        setItems((prevItems: any) => [...prevItems, item])

    const handleDeleteItem = (id: number) =>
        setItems((items: any) => items.filter((items: any) => items.id !== id))

    const handleToggleItem = (id: any) =>
        tasks.map((task) =>
            task.id === id ? { ...task, packages: !task.packages } : task
        )

    const handleClearList = () => {
        let answer = window.confirm('Отчистить список?')
        if (answer) setItems([])
    }

    return (
        <div className="App">
            <Logo />
            <Form handleAddItems={handleAddItems} />
            <ContentList
                handleClearList={handleClearList}
                handleToggleItem={handleToggleItem}
                handleDeleteItem={handleDeleteItem}
                items={items}
            />
            <Statistics items={items} />
        </div>
    )
}