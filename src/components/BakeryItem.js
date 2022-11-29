import Checkbox from "../components/Checkbox.js";

export default function BakeryItem({item, name, filters, description, price, image, addItem, removeItem, cardValues, cardToggle}) {


    function toggle(checked) {
        cardToggle(name);
        if (cardValues[name]) {
            addItem(item);
        } else {
            removeItem(item);
        }
      }

    return (
        <ul class ="card"> 
            <h3>{name}</h3> 
            <p>{filters}</p>
            <p>{description}</p>
            <p>{price}</p>
            <img className="item-image" src={image} alt={"item image"} width="200" height="200"/>
            <Checkbox toggle={toggle} value={cardValues[name]} id="select" checkedText="Selected" uncheckedText="Not Selected"></Checkbox>
        </ul>
    );
}