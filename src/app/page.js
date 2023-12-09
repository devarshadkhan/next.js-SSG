import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>SSR (Server Side Rendring)</h1>
      <h1>SSG (Server Side Generation)</h1>
      <Link href={"/users"}>User</Link>
    </main>
  )
}
