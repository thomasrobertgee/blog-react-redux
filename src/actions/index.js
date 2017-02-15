import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=nfuiernuiewr'

// reach out to the api and make the request
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

// return the action with the request on the payload
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

// redux promise will unwrap the promise and flow the data through to the reducers
