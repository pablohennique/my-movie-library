import { fetchMovie } from '../../../lib/tmdb'
import styles from './page.module.css'

export default async function MoviePage({ params }) {
  const apiResponse = await fetchMovie(params.movieId)
  const movie = apiResponse.content
  const error = apiResponse.error

  if (movie === null) {
    return <p>{error}</p>
  }

  return (
    <>
      <h1>
        {movie.title} <small>({movie.release_date.split('-')[0]})</small>
      </h1>
        <p>
          <em>{movie.tagline}</em>
        </p>
        <div className={styles.containerOverviewPoster}>
          <div className={styles.overview}>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} className={styles.poster}></img>
        </div>
    </>
  )
}

export async function generateMetadata({ params }) {
  const movie = await fetchMovie(params.movieId)
  if (!movie) {
    return { title: 'Movie not found' }
  }
  return { title: movie.title}
}
