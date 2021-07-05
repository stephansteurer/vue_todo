import axios from 'axios'
const PATH = '/iirdsPackages'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getPackages () {
    return apiClient.get(PATH)
  }
}
