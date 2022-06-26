import './App.css';
import { useState, useEffect } from 'react';
import MonsterContainer from './components/monsterlist/MonsterContainer';
import SearchBox from './components/searchbar/SearchBox';

import React from 'react'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  console.log("rendered")

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    //pull json data from API, and that data will fill the monsters array
    .then((users) => setMonsters(users))
  }, [])   //array of depency is left blank b/c we don't want it to fetch again
  
  const onSearchChange = (e) => {
    console.log(searchField)
    const searchfieldString = e.target.value.toLowerCase()
    setSearchField(searchfieldString)
      }

  useEffect(()=>{
        setFilteredMonsters(monsters.filter(monst => {
          return monst.name.toLowerCase().includes(searchField)
        }))
      }, [searchField, monsters])
    

  return (
    <div className="App">
     
      <h3 className="app-title">Monsters Rolodex (Hooks)</h3>
      <SearchBox 
        onSearchChange={onSearchChange} 
        placeholder="search monsters..." 
        className="search-box" />

      <MonsterContainer monsters={filteredMonsters} />
    </div>
  )
}
export default App

