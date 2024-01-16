import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";


function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [mysStocks, setMyStocks]= useState([])
  const [sortBy, setSortBy]= useState("")
  const [filterBy, setFilterBy]=useState("")

  useEffect (()=>{
    fetch ("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(stocks => {setStocks(stocks)})
    .catch(err => alert(err))
  },[]);

  const handleAddStock = (stockToAdd) => {
    setMyStocks(currentMyStocks => [...currentMyStocks,stockToAdd] )

  }
 
  const handleRemoveStock = (stockToRemove) => {
    setMyStocks(currentMyStocks => currentMyStocks.filter(stock=> stock.id !== stockToRemove.id))
  }

  const handleToggleSort = (e) => {
    setSortBy(e.target.value)
  }

  const handleFilter = (e) => {
    setFilterBy(e.target.value)
  }
  return ( 
    <div>
      <SearchBar sortBy={sortBy} handleToggleSort={handleToggleSort} handleFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
        <StockContainer stocks={stocks} handleAddStock={handleAddStock} sortBy={sortBy} filterBy={filterBy}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={mysStocks} handleRemoveStock={handleRemoveStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
