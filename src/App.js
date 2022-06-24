import './App.css';
import { Component } from 'react';
import MonsterContainer from './components/monsterlist/MonsterContainer';
import SearchBox from './components/searchbar/SearchBox';


class App extends Component {
  constructor() {
    super();

//initial State
    this.state = {
      monsters: [], 
      searchfield: ""
    }
  }

  //access API (lifecycle methods):
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    //pull json data from API, and that data will fill the monsters array
    .then((users) => {
      this.setState(
        () => {return ({monsters: users})}
          )})
    }

  onSearchChange = (e) => {
    const searchfield = e.target.value.toLowerCase()
      this.setState(() => {
        return {searchfield}
      })}
      
//what to show
  render() {

    const { monsters, searchfield } = this.state
    const { onSearchChange } = this

    const filterMonsters = monsters.filter(
    monst => {return monst.name.toLowerCase().includes(searchfield)})

  return (
    <div className="App">
     
      <h3 className="app-title">Monsters Rolodex (Hooks)</h3>
        <SearchBox onSearchChange={onSearchChange} placeholder="search monsters..." className="search-box" />
        <MonsterContainer monsters={filterMonsters} />

     {/* {filterMonsters.map((monst) => {
          return (
            <div key={monst.id}>
              <h1>{monst.name} from {monst.address.city}</h1>
            </div>)
        })} */}
    </div>
  );
}
}

export default App;
