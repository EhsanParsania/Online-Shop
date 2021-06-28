import API from './Config.api'

export function getData(field, pageNumber, rowNumber,isDelivered='') {
  // get req example :
  //  http://localhost:3001/products?_page=2&_limit=3
  return API.get(`/${field}?_page=${pageNumber}&_limit=${rowNumber}${isDelivered}`)
    .then(response => {

      console.log(response)
      return response
    })
    .catch(error => {
      console.log(error.message)
      return error
    })
}
