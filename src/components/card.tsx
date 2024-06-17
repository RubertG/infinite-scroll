import { FC } from "react"
import { Character } from "../types"

export const Card: FC<Character> = ({ image, name, species, status, gender, origin: { name: origin }, location: { name: location } }) => {

  return (
    <article className="card">
      <img
        src={image}
        alt={`Image of ${name}`}
        className="card-img" />
      <div className="card-body">
        <h2>{name}</h2>
        <hr />
        <div className="card-body-datos">
          <p>Species: {species}</p>
          <p>Status: {status}</p>
          <p>Gender: {gender}</p>
          <p>Origin: {origin}</p>
          <p>Location: {location}</p>
        </div>
      </div>
    </article>
  )
}

