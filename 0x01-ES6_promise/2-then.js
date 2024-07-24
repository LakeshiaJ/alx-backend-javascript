function handleResponseFromAPI(promise) {
   return Promise
   .then({ status: 200, body: 'success'})
   .catch(new Error(''))
   .finally('Got a response from the API')
}