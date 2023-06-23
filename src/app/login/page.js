'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
const login = () => {
    const router = useRouter()

    const navigation = (routeName) => {
        router.push(routeName)
    }
    return (
        <div>
            <h2>login</h2>
            <Link href="/about">Go to About Page</Link>
            <button onClick={() => navigation("/")}>Go to Home Page</button>
            <button onClick={() => navigation("/about")}>Go to About Page</button>
        </div>

    )
}

export default login