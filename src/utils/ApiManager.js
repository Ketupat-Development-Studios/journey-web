import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

const request = axios.create({
  baseURL: BASE_URL
})

class ApiManager {
  static getStepById = stepId => new Promise(async (resolve, reject) => {
    let result
    try {
      result = await request.get(`/steps/${stepId}`)
    } catch (error) {
      reject(error)
    }
    resolve(result.data)
  })
}

export default ApiManager
