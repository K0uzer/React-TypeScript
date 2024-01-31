import './App.css';
import './data.js'

function App({Pizzas}) {
  return (
    <div className="App">
      <Header />
      <Menu content={Pizzas} />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

const Menu = ({content}) => {
  const contentCount = content.length;

  return (
    <main className='menu'>
      <h2>Our menu</h2>
      { contentCount > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
          </p>
          <div className="container">
            <PizzaList content={content} />
          </div>
        </>
      ) : (
        <div>
          <p>Pizza to cook.</p>
        </div>
      )}
    </main>
  )
}

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      { isOpen ? <Order closeHour={closeHour} openHour={openHour} /> : (
        <div>
          <p>We closed.</p>
        </div>
      )}
    </footer>
  )
}

const Order = ({closeHour, openHour}) => {
  return (
    <div className='order'>
        <p>We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
        <button className='btn'>Order</button>
    </div>
  )
}

const PizzaList = ({content}) => {
  return (
    <ul className='pizzas'>
    { content.map((item) => <Pizza key={item.name} pizzaContent={item}/>) }
    </ul>
  )
}

const Pizza = (pizzaContent) => {
  const content = pizzaContent.pizzaContent;
  return (
    <li className={`pizza ${content.soldOut ? 'sold-out' : "" }`}>
      <img src={content.photoName} alt={content.name} />
      <div>
        <h3>{content.name}</h3>
        <p>{content.ingredients}</p><span>{content.price}$</span>
        <span>{content.soldOut ? "SOLD OUT" : content.price}</span>
      </div>
    </li>
  )
}

export default App;
