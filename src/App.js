import './App.css';
import Table from './Table';
import { Users } from "./Users";
import {  useState } from "react";

function App() {
  const [query,setQuery]= useState("")
  return (
    <div className="App">
    <input type="text" 
     placeholder="Seach..."
     className="search" 
     onChange={(e) => setQuery(e.target.value)}
     />
    {/* <ul className="list">
      {Users.filter((user) =>
      user.first_name.toLowerCase().includes(query)).
    map((user) => (
      <li key={user.id} className="listItem">{user.first_name}</li>
      ))}
      </ul> */}
    <Table data={Users}/> 
    </div>
  );
}

export default App;
