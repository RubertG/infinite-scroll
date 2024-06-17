/* eslint-disable react-hooks/exhaustive-deps */
import { Card } from "./card"
import { Loader } from "./loader"
import { useInfiniteScroll } from "../hooks/useInfiniteScroll"

const URL = 'https://rickandmortyapi.com/api/character'

export const ContainerCards = () => {
  const {characters, loading, lastCharacterElementRef} = useInfiniteScroll({ url: URL })

  return (
    <>
      <section className="container-cards">
        {
          characters && (
            <>
              {
                characters.map((character, i) => {
                  if (characters.length === i + 1) {
                    return (
                      <div key={i} ref={lastCharacterElementRef}>
                        <Card {...character} />
                      </div>
                    )
                  }
                  return (
                    <Card {...character} key={i} />
                  )
                }
                )
              }
            </>
          )
        }
      </section>
      {
        loading && <Loader />
      }
    </>
  )
}
