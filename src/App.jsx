/* eslint-disable no-unused-vars */
import { useState } from "react"
// import "./App.css"

function App() {

  const [color, setColor] = useState("olive")


  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center shadow-xl gap-3 bg-white px-2 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={()=> setColor("red")} style={{ backgroundColor: "red" }}>red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("green")} style={{ backgroundColor: "green" }}>green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("blue")} style={{ backgroundColor: "blue" }}>blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("yellow")} style={{ backgroundColor: "yellow", color: "black" }}>yellow</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("brown")} style={{ backgroundColor: "brown" }}>brown</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("black")} style={{ backgroundColor: "black" }}>black</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("pink")} style={{ backgroundColor: "pink", color: "black" }}>pink</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("white")} style={{ backgroundColor: "white", color: "black" }}>white</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
