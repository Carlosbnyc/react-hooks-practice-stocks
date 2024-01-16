import React from "react";
import Stock from "./Stock";



function StockContainer({stocks, handleAddStock,sortBy, filterBy}) {

  const displayStocks = stocks
  .filter(stock => filterBy === ""||stock.type.toUpperCase()=== filterBy.toUpperCase())
  .sort((stock_one, stock_two)=>{
    if (sortBy === "Alphabetically"){
      const nameA = stock_one.name.toUpperCase();
      const nameB = stock_two.name.toUpperCase();
      if (nameA < nameB ){
        return -1
      }
      if (nameA > nameB){
        return 1
      }
    
    return 0;
  }else {
      return stock_one.price - stock_two.price

    }
  })
 .map(stock => <Stock key={stock.id} {...stock} handleStock={handleAddStock} />);

  return (
    <div>
      <h2>Stocks</h2>
      {displayStocks}
    </div>
  );
}

export default StockContainer;
