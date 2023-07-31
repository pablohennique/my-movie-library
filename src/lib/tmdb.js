export async function fetchPopularMovies() {
  const apiKey = process.env.TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  const moviesObject = { movies: [], success: true, error: ""}
  try {
    const res = await fetch(url)

    // Case 2 - the status code is different from 200
    if (res.status !== 200) {
      moviesObject.success = false
      moviesObject.error = "There was a problem with the API response"
    }

    const data = await res.json()
    moviesObject.movies = data.results

    console.log(moviesObject)
    return moviesObject
  } catch (err) {
    // Case 1 - the API couldn’t be reached
    console.error(err)
    moviesObject.error = "API could not be reached"
    moviesObject.success = false
    console.log(moviesObject)
    return moviesObject
  }
}
