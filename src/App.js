import './App.css';
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Checkbox from "./components/Checkbox.js";
import Cart from "./components/Aggregator.js";

function App() {

  const [cart, setCart] = useState([]);


  function addItem(item) {
    setCart([...cart, item]);
  }

  function removeItem(card) {
    const name = card.name;
    setCart(cart.filter(item => item.name !== name));
  }

  function calc() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    return total;
  }

  const [values, setValues] = useState({"nuts": false, "fav": false, "sort": false})
 const[cardValues, setCardValues] = useState({"Chocolate Chip Cookies": false, "Matcha Mille Crepe Cake": false, "Egg Custard Bun": false,
 "Steamed Taro Buns": false, "Chocolate Fudge Brownie": false, "Macarons": false, "Multigrain Bread": false, "Croissant": false, "Toast with Butter": false,
 "Tiramisu": false, "Egg Tart": false, "Everything Bagel": false, "Gingerbread Man": false, "Cheesecake": false, "Cream Puff": false})

  function toggle(value) {
    values[value] = !values[value];
    let filtered = bakeryData.filter(valueFilter);
    if (values.sort) {
      priceSort(filtered);
    } else {
      setFilteredData(filtered);
    }
  }

  function cardToggle(value) {
    cardValues[value] = !cardValues[value];
  }

  const valueFilter = item => {
    if (!values.fav && !values.nuts) {
      return true;
    }
    if (values.fav && values.nuts) {
      let bool = null;
      if (item.value === "nf")  {
        bool = true;
      } else {
        bool = false;
      }
      return bool;
    } else if (values.nuts && !values.fav) {
      let bool = null;
      if (item.value === "n" || item.value === "nf") {
        bool = true;
      } else {
        bool = false;
      }
      return bool;
    } else if (!values.nuts && values.fav) {
      let bool = null;
      if (item.value === "f" || item.value == "nf") {
        bool = true;
      } else {
        bool = false;
      }
      return bool;
    } else {
      return false;
    }
  }

  const [filteredData, setFilteredData] = useState(bakeryData.filter(valueFilter));

  function priceSort(arr) {
    let tempList = arr;
    let emptyList = [];
    for (let i=0; i<tempList.length; i++) {
      let pushed = tempList[i];
      emptyList.push(pushed);
      let index = emptyList.indexOf(pushed);
      while (index > 0) {
        let a = emptyList[index - 1];
        let b = emptyList[index];
        if (a.price > b.price) {
          let temp = a;
          emptyList[index - 1] = b;
          emptyList[index] = temp;
          index -= 1;
        } else {
          break;
        }
      }
     setFilteredData(emptyList);
    } 
  }

  return (
    <div className="App">
      <header className="App-header">
        Jesse We Need To Bake
      </header>

        <div>
            <Checkbox toggle={toggle} name="nuts" value={values["nuts"]} id="filter" checkedText="Nut Free Options" uncheckedText="Nut Free Options" values={values}></Checkbox>
            <Checkbox toggle={toggle} name="fav" value={values["fav"]} id="filter" checkedText="Customer Favorite Options" uncheckedText="Customer Favorite Options" values={values}></Checkbox>
            <Checkbox toggle={toggle} name="sort" value={values["sort"]} id="filter" checkedText="Sort by Lowest Price" uncheckedText="Sort by Lowest Price" values={values}></Checkbox>
        </div>
        
      <ul class="card-list">
        {filteredData.map((item, index) => (
          <p>
            <BakeryItem item= {item} name={item.name} filters={item.filters} description={item.description} price={item.price} image={item.image} addItem={addItem}
             removeItem={removeItem} cardValues={cardValues} cardToggle={cardToggle}/>
          </p> 
        ))}
      </ul>

      <div>
          <Cart cart={cart} calcFunc={calc}></Cart>
      </div>
    </div>
  );
}

export default App;
