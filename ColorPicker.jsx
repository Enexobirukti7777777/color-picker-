import React, {useState} from "react"


function ColorPicker(){
const[color, setColor]= useState("#ffffff");
function handleChangeColor(event){
    setColor(event.target.value)
};
return(
    <div className="color-container">
        <h1>Color Picker</h1>
        <div className="color-display"  style={{backgroundColor: color}}>
        <p > Select Color : {color}</p>
        </div>
              <lable>pick a Color:</lable> 
        <input type="color" value={color} onChange={handleChangeColor}></input>
    </div>
);
}
export default ColorPicker