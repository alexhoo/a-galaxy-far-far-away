import { create } from 'apisauce'
import { concat, flip, when } from 'crocks'

const fconcat = flip(concat)

// this will be our star wars api 
const baseUrl = 'https://swapi.co/api'

const api = create({
  baseURL: baseUrl,
})



const getPath = when(x => /^(?!\/)/.test(x), fconcat(baseUrl + '/'))

const get = (path, params, config) => {
  return api.get(getPath(path), params, config)
}

export default function(resourceName) {
  return {
    getAll: (params) => get(resourceName, params),
    getOne: (id, params) => get(`${resourceName}/${id}`, params),
  }
}