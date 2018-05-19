import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

const request = axios.create({
  baseURL: BASE_URL
})

class ApiManager {
  static getPaths = () => new Promise(async (resolve, reject) => {
    let result
    try {
      result = await request.get('/paths')
    } catch (error) {
      reject(error)
    }
    resolve(result.data)
  })
  static getPathById = pathId => new Promise(async (resolve, reject) => {
    let result
    try {
      result = await request.get(`/paths/${pathId}?_embed=steps`)
    } catch (error) {
      reject(error)
    }
    resolve(result.data)
  })
  static updateStep = step => new Promise(async (resolve, reject) => {
    let result
    try {
      result = await request.patch(`/steps/${step.id}`)
    } catch (error) {
      reject(error)
    }
    resolve(result.data)
  })
  static createStep = (step) => new Promise(async (resolve, reject) => {
    let result
    try {
      result = await request.post(`/steps`, step)
    } catch (error) {
      reject(error)
    }
    resolve(result.data)
  })
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
