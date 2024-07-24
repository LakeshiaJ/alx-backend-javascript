function getFullResponseFromAPI(success) {
    if (success) {
        return Promise.resolve({status: 200, body: 'success'})
    } else {
        return Promise.reject(new Error('The fake API is not working currently'));
    }
}

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));