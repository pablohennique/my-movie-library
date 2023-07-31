export function fetchPopularMovies() {
  const apiKey = process.env.TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  return fetchPopular(url)
}

export async function fetchPopularPeople() {
  const apiKey = process.env.TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}`
  return fetchPopular(url)
}

export async function fetchPopular(url) {
  try {
    const res = await fetch(url)

    // Case 2 - the status code is different from 200
    if (res.status !== 200) {
      return { content: null, success: false, error: "There was a problem with the API response" }
    }

    const data = await res.json()
    return { content: data.results, success: true, error: null }
  } catch (err) {
    // Case 1 - the API couldn’t be reached
    console.error(err)
    return { content: null, success: false, error: "API could not be reached" }
  }
}
