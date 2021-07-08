import API from './Config.api'

export function getData(group, pageNumber, rowNumber, isDelivered = '') {
  // get req example :
  //  http://localhost:3001/products?_page=2&_limit=3
  return API.get(`/${group}?_page=${pageNumber}&_limit=${rowNumber}${isDelivered}`)
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
  return API({ method: "post", url: '/groceries', data: bodyFormData, headers: { "Content-Type": "multipart/form-data" } })
    .then(response => {
      console.log('formData posted --> ', response)
      return response
    })
    .catch(error => {
      console.log(error.message)
      return error
    })

}


export const editProducts = (data, group, id) => {
  return API({ method: "patch", url: `/${group}/${id}`, data: data, headers: { "Content-Type": "multipart/form-data" } })
    .then(response => {
      console.log('The product edited  --> ', response)
      return response
    })
    .catch(error => {
      console.log('The product not edited --> ', error.message)
      return error
    })
}


export const deleteProducts = async (id, group) => {
  const url = `/${group}/${id}`
  return API.delete(url)
    .then(response => {
      console.log('The product deleted --> ', response)
      return response
    })
    .catch(error => {
      console.log('The product not deleted --> ', error.message)
    })
}



export const getFilteredProducts = (group, subGroup, limit, pageNumber) => {
  const address = `/${group}?_page=${pageNumber}&_limit=${limit}&subgroup=${subGroup}`
  return API.get(address)
    .then(response => {
      console.log('get filtered products for list menu ===> ', response)
      return response
    })
    .catch(error => {
      console.log('get filtered products for list had error ===> ', error.message)
      return error
    })

}




export const getOneProduct = (group, id) => {
  return API.get(`/${group}/${id}`)
    .then(response => {
      console.log('The product fetched')
      return response
    })
    .catch(error => {
      console.log('The product fetch had an error', error.message)
      return error

    })
}

export const finalizeCart = (data) => {
  return API.post(`/orders`, data)
    .then(response => {
      console.log('Order sent')
      return response
    })
    .catch(error => {
      console.log('Order not sent', error)
      return error

    })
}