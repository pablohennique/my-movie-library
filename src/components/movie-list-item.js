export function MovieListItem({ movie }) {
  return (
    <li className={movie.featured && "featured"}>{movie.title}</li>
  )
}
