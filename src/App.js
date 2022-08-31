
import './App.css';
import {useState} from 'react'

function App() {
  const [data,setData] = useState("")

  return (
          <div className="App">
            <div className="input-type" >
              <input type="text" value={data} placeholder="0" />
            </div>

            <div className="button-type">
                <button id="clear" onClick={()=>{setData("")}}>Clear</button>
                <button onClick={()=>{setData(data.slice(0,-1))}}>Del</button>
                <button onClick={()=>{setData(data.concat("/"))}}>/</button>
                <button onClick={()=>{setData(data.concat("7"))}}>7</button>
                <button onClick={()=>{setData(data.concat("8"))}}>8</button>
                <button onClick={()=>{setData(data.concat("9"))}}>9</button>
                <button onClick={()=>{setData(data.concat("*"))}}>*</button>
                <button onClick={()=>{setData(data.concat("4"))}}>4</button>
                <button onClick={()=>{setData(data.concat("5"))}}>5</button>
                <button onClick={()=>{setData(data.concat("6"))}}>6</button>
                <button onClick={()=>{setData(data.concat("-"))}}>-</button>
                <button onClick={()=>{setData(data.concat("1"))}}>1</button>
                <button onClick={()=>{setData(data.concat("2"))}}>2</button>
                <button onClick={()=>{setData(data.concat("3"))}}>3</button>
                <button onClick={()=>{setData(data.concat("+"))}}>+</button>
                <button onClick={()=>{setData(data.concat("0"))}}>0</button>
                <button onClick={()=>{setData(data.concat("."))}}>.</button>
                <button id="equal" onClick={()=>{setData(eval(data).toString())}}>=</button>
            </div>
          </div>
  );
}

export default App;
