import { useState, useEffect } from 'react'
import { API } from '../ApiService'
import { useCookies } from 'react-cookie'
const useFetch = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [token] = useCookies(['mr-token'])
  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError()

      const fetchedData = await API.getMovies(token['mr-token']).catch((err) =>
        setError(err)
      )
      setData(fetchedData)
      setLoading(false)
    }

    fetchData()
  }, [])

  return [data, loading, error]
}
export default useFetch
