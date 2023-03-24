import axios from '../../axios'

export const getItems = async (term) => {
  const response = await axios.get(`/api/items?q=${term}`)
  return response.data
}

export const getItemDetail = async (id) => {
  const response = await axios.get(`/api/items/${id}`)
  return response.data
}