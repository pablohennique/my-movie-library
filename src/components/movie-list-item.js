import styles from './movie-list-item.module.css'

export function MovieListItem({ movie }) {
  return (
    <li className={`${styles.movieListItem} ${movie.featured && styles.featured}`}>{movie.title}</li>
  )
}
