import { useEffect, useState } from 'react'
import Header from './Components/Header';
import Card from './Components/Card';
import './App.css';


const App = () => {

  console.log('render');
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([])
  const [title, setTitle] = useState('')

  console.log(searchField)

  const searchChange = (event) => {
    const searchvalue = event.target.value.toLocaleLowerCase()
    setSearchField(searchvalue)
  }

      const filteredMonsters = monsters.filter((monster) => {
      return (monster.name.toLowerCase().includes(searchField) || monster.email.toLowerCase().includes(searchField))
    });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users))
  }, [])

  const titleChange = (event) =>{
        const titlevalue =  event.target.value.toLocaleLowerCase()
       setTitle(titlevalue)
  }
  return (
    <div className="App">
      <Header  searchField={searchField}  searchChange={searchChange} />
        <input  type='text'  onChange={titleChange}/> 
        <h1>{title}</h1>
        <Card monsters={filteredMonsters}/>
    </div>
  )
}
export default App;
