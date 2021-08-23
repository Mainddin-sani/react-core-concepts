import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let friends = ['Kuddus', 'muddus', 'saleka', 'maleka', 'sani'];

  let products = [
    {name: 'Monitor', price: '$'+500, description: 'Googles free service instantly translates words',title: "UI/UX Designer"},
    {name: 'Tv', price: '$'+ 1000, description: 'Googles free service instantly translates words', title: "web Designer"},
    {name: 'PC', price: '$'+ 1500, description: 'Googles free service instantly translates words', title: "web Designer"},
  ]

  let users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    }
  ]


  const productsName = products.map(product => {
      return product.name
  })
  console.log(productsName);


  return (
    <div className="App">
      <header className="App-header">
        {
          products.map(product => <Products  key={product} title={product}></Products>)
        }
        {
          friends.map((friendsName,index) => {
            return <DivElement  key={index} friendsName={friendsName}></DivElement>
          })
        }
        {
          users.map((Data,index) => {
           return <Users key={index} usersData={Data}></Users>
          })
        }
        {
          <Counter></Counter>
        }
        {
          <UserData></UserData>
        }
        {
          <Photos></Photos>
        }
      </header>

    </div>
  );
}

function UserData() {
  let [user, setUser] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setUser(data))
  })
  return (
    <ul>
      {
        user.map((user,index)=> <li key={index}>{user.title}</li>)
      }
    </ul>
  )
}

function Photos() {
  let [photos, setPhoto] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => setPhoto(data))
  })

  return(
    <div>
      <ul>
        <li>
          {
            photos.map((pic,index) => <img key={index} src={pic.url} alt="" />)
          }
        </li>
      </ul>
    </div>
  )
  
}

function Counter() {
  let [count, setCount] = useState(10);
  const increseHandler = () => {
    const newCount = count + 1
    setCount(newCount)
  }
  const decreseHandler = () => {
    const newCount = count - 1
    setCount(newCount)
  }
  return(
    <div>
      <p>Count: {count}</p>
      <button onClick={increseHandler}>Increse</button>
      <button onClick={decreseHandler} disabled={count===0? true: false}>decrese</button>
    </div>
  )
}

function Users(Props) {
  let usersStyle = {
    border: '1px solid #fff',
    padding: '10px',
    margin: '10px',
  }
  return (
    <div style={usersStyle} >
      <p>Id: {Props.usersData.id}</p>
      <p>User Name: {Props.usersData.name}</p>
      <p>Company: {Props.usersData.username}</p>
      <p>Company: {Props.usersData.email}</p>
    </div>
  )
}

function Products(Props){
  console.log(Props.title.name);
  // console.log(Props.productsInfo.name);
  // let {name, price, description} = Props.productsInfo;
  return (
    <section>
      <div className="ic-products-items">
        <h4>{Props.title.name}</h4>
        <p><b>{Props.title.price}</b></p>
        <p>{Props.title.description}</p>
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
            <p>Hello, My Name is {Props.friendsName}  </p>
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
