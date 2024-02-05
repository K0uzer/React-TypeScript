import './App.css';
import './index.css';

interface Task {
  readonly id: number,
  task: string,
  ready: boolean,
}

const tasks: Task[] = [
  {
    id: 1,
    task: 'Купить воды',
    ready: false,
  },
]


export default function App() {

  return (
    <section className="App">
      <Logo />
      <Form />
      <ContentList />
      <Statistics />
    </section>
  );
}

const Logo = () => {
  return (
    <h1>💕Far Away🎶</h1>
  )
}

const Form = () => {
  return (
    <section className='add-form'>
      <h3>What do you need for your 🤩 trip?</h3>
    </section>
  )
}

const ContentList = () => {
  return (
    <section className='list'>
      <ul>{tasks.map((task:any) => <Item />)}</ul>
    </section>
  )
}

const Item = ({task, ready}:{task:string, ready:boolean}) => {
  return (
    <li style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
      <p>{task}</p><button style={{cursor:'pointer', background: 'none'}}>✔️</button>
    </li>
  )
}

const Statistics = () => {



  return (
    <footer className='footer'>
      🧮 You have {content.length} items on your list, and you already packed {} ({}%)
    </footer>
  )
}
