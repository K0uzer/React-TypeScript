import './App.css';
import './data.js'

function App({content}) {
  return (
    <div className="App">
      <Header />
      <Menu content={content} />
      <Footer />
    </div>
  );
}

const Header = () => {

  const style = {color:"red", fontSize:"48px", textTransform:"uppercase"}

  return (
    <header>
      <h1 style={style} className="header">Fast React Pizza Co.</h1>
    </header>
  )
}

const Menu = ({content}) => {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <div className='pizzas'>
      {
        content.map((item) => {
          <Pizza content={item}/>
        })
      }
      </div>
    </main>
  )
}

const Footer = () => {

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) alert("Were're currently open!")
  // else alert("Sorry we're closed")

  return <footer className='footer'>{new Date().toLocaleTimeString()}. We're currently open</footer>
}

const Pizza = ({name, ingredients, price, photoName, soldOut}) => {
  return (
    <div className='{ soldOut ? {pizza} : {pizza, pizza.sold-out} }'>
      <img src={photoName} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p><p>{price}$</p>
    </div>
  )
}

export default App;
