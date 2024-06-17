import './App.css'
import { ContainerCards } from './components/container-cards'

export default function App() {
  return (
    <>
      <main className="container">
        <h1>Rick and Morty characters<span /></h1>
        <ContainerCards />
      </main>
    </>
  )
}
