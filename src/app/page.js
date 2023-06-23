import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <User name="Anil Sindhus" />
      <User name="Salman" />
      <User name="Peter" />

    </main>
  )
}

// Made a function in the same file and passed data through props
const User = (props) => {
  return (
    <div>
      <h2>User name is {props.name}</h2>
    </div>
  )
}

