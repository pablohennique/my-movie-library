import styles from './movie-list-item.module.css'
import Link from 'next/link'

export function MovieListItem({ movie }) {
  return (
    <Link href={`/movies/${movie.id}`} className={styles.clickable}>
      <li className={`${styles.movieListItem} ${movie.featured && styles.featured}`}>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className={styles.poster}></img>
        <p>{movie.title}</p>
      </li>
    </Link>
  )
}
