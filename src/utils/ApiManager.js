import axios from 'axios'

const BASE_URL = 'http://10.0.0.114:3001'

const request = axios.create({
  baseURL: BASE_URL
})

class ApiManager {
  static getCommentsByStep = stepId => new Promise(async (resolve, reject) => {
    let result
    try {
      result = await request.get(`/comments?stepId=${stepId}`)
    } catch (error) {
      console.error(error)
    }
    resolve(result.data)
  })
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
      result = await request.get(`/paths/${pathId}?_embed=steps&_embed=comments`)
    } catch (error) {
      reject(error)
    }
    resolve(result.data)
  })
  static updateStep = step => new Promise(async (resolve, reject) => {
    let result
    try {
      result = await request.patch(`/steps/${step.id}`, step)
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
  static createComment = comment => new Promise(async (resolve, reject) => {
    let result
    try {
      result = await request.post('/comments', comment)
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
