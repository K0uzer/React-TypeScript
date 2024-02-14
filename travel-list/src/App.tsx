import './index.css';
import Logo from './Components/Logo';
import Form, { NewItemProps } from './Components/Form';
import ContentList from './Components/ContentList';
import Statistics from './Components/Statistics';
import { useState } from 'react';

export default function App() {

  const [items, setItems] = useState<NewItemProps[]>([])

  return (
    <div className="App">
      <Logo />
      <Form setItems={setItems} />
      <ContentList />
      <Statistics />
    </div>
  );
}