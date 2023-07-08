
const getToken = () => {
  return localStorage.getItem('@ERP-token') || null;
}

const headersMethodGET = {
  method: 'GET',
  headers: {
    "Authorization": getToken()
  },
  cache: 'default'
}

const headersMethodPOST = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    "Authorization": getToken()
  }
}

const headersMethodDELETE = {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    "Authorization": getToken()
  }
}

export { getToken, headersMethodGET, headersMethodPOST, headersMethodDELETE }