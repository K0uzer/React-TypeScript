import './App.css';

function App() {
  return (
    <div className="App">
      <Pizza />
    </div>
  );
}

const Pizza = () => {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  )
}

export default App;
