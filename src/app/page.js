'use client'
import { useState } from 'react'
import Link from 'next/link'
// always at the top
// no need to include it into child files/ components
import styles from './page.module.css'

//importing useRouter hook
import { useRouter } from 'next/navigation'

export default function Home() {
  //calling useRouter hook
  const router = useRouter();


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

  const navigate = (route) => {
    router.push(route)
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


      {/* Linking & Navigation */}
      <Link href="/login">Go to Login Page</Link>
      <Link href="/about">Go to About Page</Link>
      <button onClick={() => router.push("/login")}>Go to Login</button>
      <button onClick={() => navigate("/about")}>Go to About</button>

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

