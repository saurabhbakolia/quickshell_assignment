import "./App.css";
import { useCallback, useEffect, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import { loadGrid, mapUsersByUserId } from "./utils";
import Header from "./component/Header/Header";
import Loader from "./component/Loader/Loader";
import Grid from "./component/Grid/Grid";

function App() {
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");
  const [ticketsData, setTicketsData] = useState([]);
  const [userData, setUserData] = useState({});
  const [gridData, setGridData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

    loadSettings();
    async function fetchData() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const { tickets, users } = await response.json();
        setTicketsData(tickets);
        setUserData(mapUsersByUserId(users));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (!ticketsData.length) return;
    setGridData(loadGrid(ticketsData, grouping, ordering));
    setLoading(false);
  }, [grouping, ordering, ticketsData]);

  const onSetGrouping = useCallback((value) => {
    console.log("onSetGrouping", value);
    setLoading(true);
    setGrouping(value);
    saveSettings({grouping: value});
  }, []);

  const onSetOrdering = useCallback((value) => {
    setLoading(true);
    setOrdering(value);
    saveSettings({ ordering: value });
  }, []);

  const saveSettings = useCallback((data) => {
    for (let key in data) localStorage.setItem(key, data[key]);
  }, []);

  const loadSettings = useCallback(() => {
    setGrouping(localStorage.getItem("grouping") || "status");
    setOrdering(localStorage.getItem("ordering") || "priority");
  }, []);

  return (
    <div className="App">
      <Header
        grouping={grouping}
        setGrouping={onSetGrouping}
        ordering={ordering}
        setOrdering={onSetOrdering}
      />
      {loading ? (
        <Loader />
      ) : (
        <Grid gridData={gridData} grouping={grouping} userIdToData={userData} />
      )}
    </div>
  );
}

export default App;
