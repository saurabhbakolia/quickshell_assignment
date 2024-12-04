import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import "./App.css"
import { loadGrid } from './loadGrid';
import Board from './components/Board';
const API_ADDRESS = "https://api.quicksell.co/v1/internal/frontend-assignment";

function App() {
  
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState("");
  const [sorting, setSorting] = useState("");
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    // API  data fetch
    const fetchData = async () => {
      const response = await fetch(API_ADDRESS);
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);

      // Load saved view state
      const savedGrouping = localStorage.getItem("grouping") || "status";
      const savedSorting = localStorage.getItem("sorting") || "priority";
      setGrouping(savedGrouping);
      setSorting(savedSorting);
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("sorting", sorting);
    loadGrid(sorting, grouping, setGrid, tickets);

    console.log(tickets, users);
  }, [sorting, grouping]);


  return (
    <div className='app'>
      <NavBar grouping = {grouping} sorting={sorting} setGrouping={setGrouping} setSorting={setSorting}/>
      <Board grid={grid}/>
    </div>
  )
}

export default App