'use client'

import styles from './movie-poster.module.css'

export function MoviePoster(posterPathObject) {
  return (
    <img
      src={posterPathObject.posterPath}
      className={styles.poster}
      onClick={(event) => {
        // console.log(event.target);
        event.target.classList.toggle('zoom')
      }}
    >
    </img>
  )
}
