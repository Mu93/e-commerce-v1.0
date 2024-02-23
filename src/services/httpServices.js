import axios from 'axios'
import { log } from './logService'

// Common HTTP status codes include:
// 2xx: Success
// 3xx: Redirection
// 4xx: Client errors
// 5xx: Server errors
axios.interceptors.response.use(
  (response) => {
    // If the response is successful, return it without any changes
    return response
  },
  (error) => {
    const ErrRes = error.response
    const expectedError = ErrRes && ErrRes.status >= 400 && ErrRes.status < 500
    if (!expectedError) {
      log(error)
      console.log('interceptors Server errors =>', error.message)
    }
    return Promise.reject(error)
  },
)

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
}

// Expected Error:

// An expected error refers to a situation where a client anticipates that an error might occur and has mechanisms in place to handle it.
// For example, when making an API request, the server might respond with a 404 status code if the requested resource is not found. 
// In this case, the client expects the possibility of a 404 error and can handle it gracefully.

// Unexpected Error:

// An unexpected error occurs when the client encounters an issue that it did not anticipate or handle. 
// This could be due to server problems, network issues, or other unforeseen circumstances.
// Handling unexpected errors often involves generic error handling or logging to capture information for debugging purposes.