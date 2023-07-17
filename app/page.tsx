"use client"
import styles from './page.module.css'
import { Link } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href='google'>Search Engine</Link>
    </main>
  )
}
