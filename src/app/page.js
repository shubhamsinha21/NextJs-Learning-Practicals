'use client'
import { useState } from 'react'
// always at the top
// no need to include it into child files/ components
import styles from './page.module.css'

export default function Home() {

  // creating function
  //1st way
  const apple = () => {
    alert("i m boss")
  }
  // 2nd way
  const mango = (item) =>
    alert(item)


  const [name, setName] = useState("anil")
  const updateName = () => {
    setName("siddhu")
  }

  // creating component inside component
  const InnerComponent = () => {
    return (
      <h2>Inner Component</h2>
    )
  }
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <User name="Anil Sindhu" />
      <User name="Salman" />
      <User name="Peter" />
      {/* Events , functions & state  */}
      <button onClick={apple} style={{ padding: "4px", color: "red", backgroundColor: "black" }}
      >Click me</button>
      <button onClick={() => mango("size")} style={{ padding: "4px", color: "yellow", backgroundColor: "black" }}
      >Click me</button>

      <h3>{name}</h3>
      <button onClick={updateName} style={{ padding: "4px", color: "green", backgroundColor: "black" }}
      >Click me</button>

      {/* calling componeny=t created inside the main component */}
      <InnerComponent />
      {/* calling the component as a function  */}
      {InnerComponent()}

    </main>
  )
}


const User = (props) => {
  return (
    <div>
      {/* Made a function in the same file and passed data through props */}
      <h2>User name is {props.name}</h2>
    </div>
  )
}

