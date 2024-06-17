import { useEffect, useState } from "react"
import { APIResponse, Character } from "../types"
import { Card } from "./card"
import { Loader } from "./loader"

const URL = 'https://rickandmortyapi.com/api/character'

export const ContainerCards = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchCharacters()
  }, [])

  const fetchCharacters = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${URL}?page=${page}`)
      const data = await res.json() as APIResponse
      setCharacters(data.results)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className="container-cards">
      {
        characters && (
          characters.map(character => <Card key={character.id} {...character} />)
        )
      }
      {
        loading && <Loader />
      }
    </section>
  )
}
