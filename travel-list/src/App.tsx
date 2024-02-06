import './index.css';
import Logo from './Components/Logo';
import Form from './Components/Form';
import ContentList from './Components/ContentList';
import Statistics from './Components/Statistics';
// import { useState } from 'react';
// import { tasks } from './tasks'


export default function App() {

  // const [task, setTask] = useState('');
  // const handleAddTask = () => setTask([...tasks, task])

  return (
    <div className="App">
      <Logo />
      <Form />
      <ContentList />
      <Statistics />
    </div>
  );
}