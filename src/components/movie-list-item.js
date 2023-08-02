import styles from './movie-list-item.module.css'
import Link from 'next/link'

export function MovieListItem({ movie }) {
  return (
    <li className={`${styles.movieListItem} ${movie.featured && styles.featured}`}>
      <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>
  )
}
