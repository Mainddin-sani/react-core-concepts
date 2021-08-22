import logo from './logo.svg';
import './App.css';

function App() {
  let friends = ['Kuddus', 'muddus', 'saleka', 'maleka'];

  let products = [
    {name: 'Monitor', price: '$'+500, description: 'Googles free service instantly translates words' },
    {name: 'Tv', price: '$'+ 1000, description: 'Googles free service instantly translates words' },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <DivElement name={friends[0]} title="UI/UX Designer"></DivElement>
        <DivElement name={friends[1]} title="Software Engineer"></DivElement>
        <DivElement name={friends[2]} title="Networking Engineer"></DivElement>
        <DivElement name={friends[3]} title="Software Engineer"></DivElement>
      </header>
      {/* <Products name={products[0].name} price={products[0].price} dis={products[0].description}></Products> */}
      <Products productsInfo={products[0]}></Products>
      <Products productsInfo={products[1]}></Products>
    </div>
  );
}

function Products(Props){
  console.log(Props.productsInfo.name);
  let {name, price, description} = Props.productsInfo;
  return (
    <section>
      <div className="ic-products-items">
        <h4>{name}</h4>
        <p><b>{price}</b></p>
        <p>{description}</p>
      </div>
    </section>
  )
}

function DivElement(Props) {
  let person = {
    name: "Mianuddin Sani",
    job: "Front-End Developer"
  }
  let style = {
    border: '1px solid #fff',
    padding: '30px',
    margin: '10px',
  }
  return (
          <div className="ic-div" style={style}>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello, My Name is {Props.name} </p>
            <p>I am a {Props.title} </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        </div>
  )
}

export default App;
