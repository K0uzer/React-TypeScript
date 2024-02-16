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

  const handleAddItems = (item:[]) => {
    setItems((prevItems: any) => [...prevItems, item])
  }

  const handleDeleteItem = (id:any) => setItems((e:any)=> e.filter(e.id !== id))

  return (
    <div className="App">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <ContentList handleDeleteItem={handleDeleteItem} items={items} />
      <Statistics />
    </div>
  );
}