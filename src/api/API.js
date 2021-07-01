import API from './Config.api'

export function getData(field, pageNumber, rowNumber, isDelivered = '') {
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


export const postProducts = (bodyFormData) => {
  return API({ method: "post", url: '/products', data: bodyFormData, headers: { "Content-Type": "multipart/form-data" } })
    .then(response => {
      console.log('formData posted --> ', response)
      return response
    })
    .catch(error => {
      console.log(error.message)
      return error
    })

}


export const editProducts = (bodyFormData, id) => {
  return API({ method: "patch", url: `/products/${id}`, data: bodyFormData, headers: { "Content-Type": "multipart/form-data" } })
    .then(response => {
      console.log('The product edited  --> ', response)
      return response
    })
    .catch(error => {
      console.log('The product not edited --> ', error.message)
      return error
    })

}


export const deleteProducts = async (id, field) => {
  const address = `/${field}/${id}`
  return API.delete(address)
    .then(response => {
      console.log('The product deleted --> ', response)
      return response
    })
    .catch(error => {
      console.log('The product not deleted --> ', error.message)
    })
}
