import React, { useState } from "react"

function SearchMovies() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {
    e.preventDefault()
    console.log("submitting")

    const url = `https://api.themoviedb.org/3/movie/550?api_key=7295fcad03e80ab64a068dbc07764ee4&language=en-US&query=${query}&page=1`

    try {
      const res = await fetch(url)
      const data = res.json()
      console.log(data.original_title)
      setMovies(data.original_title)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="James Bond.."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </>
  )
}

export default SearchMovies
