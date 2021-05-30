import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getTrendingMovies } from '../lib/tmdb'

export default function Home({list}) {
  return (
    <div>
      <ul>
        {list.map((item, id) => (
          <li key={id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/trending")
  const json = await res.json()

  return {
    props: {
      list: json.list
    }
  }
}
