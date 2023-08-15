export function fetchPopularMovies() {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  return fetchPopular(url)
}

export async function fetchPopularPeople() {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY
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

export async function fetchMovie(movieId) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
  try {
    const res = await fetch(url)

    if (res.status !== 200) {
      return { content: null, success: false, error: "There was a problem with the API response" }
    }

    const data = await res.json()
    return { content: data, success: true, error: null }
  } catch(err) {
    console.error(err)
    return { content: null, success: false, error: "API could not be reached" }
  }
}

export async function searchMovies(query) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY
  const encodedQuery = encodeURIComponent(query)
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&api_key=${apiKey}`
  try {
    const res = await fetch(url)
    if (res.status != 200) return null
    const data = await res.json()
    return data.results
  } catch ({err}) {
    console.error(err)
    return null
  }
}
