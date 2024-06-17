/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";
import { APIResponse, Character } from "../types";

interface Props {
  url: string
}

export const useInfiniteScroll = ({ url }: Props) => {
  const [characters, setCharacters] = useState<Character[]>([])
  const observer = useRef<IntersectionObserver | null>(null)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchCharacters()
  }, [page])

  const fetchCharacters = useCallback(async () => {
    if (loading || !hasMore) return
    setLoading(true)
    try {
      const res = await fetch(`${url}?page=${page}`)

      if (res.status !== 200) throw new Error('Error al cargar los personajes')

      const data = await res.json() as APIResponse
      setCharacters(prevState => [...prevState, ...data.results])
    } catch (error) {
      console.error(error)
      setHasMore(false)
    } finally {
      setLoading(false)
    }
  }, [loading, hasMore])

  const lastCharacterElementRef = useCallback((node: HTMLDivElement) => {
    // Si ya se está cargando, no es necesario observar el último elemento.
    if (loading) return;

    // Si ya se ha instanciado el IntersectionObserver, desconecta el observer actual.
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      // Si el elemento está visible, incrementa el número de página.
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1);
      }
    }, {
      threshold: 1,
      rootMargin: '0px 0px 200px 0px'
    });

    // Si se ha proporcionado un nodo, observa el nodo con el IntersectionObserver.
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  return {
    characters,
    loading,
    hasMore,
    page,
    lastCharacterElementRef
  }
}