
const getToken = () => {
  return localStorage.getItem('@ERP-token') || null;
}

const headersMethodGET = {
  method: 'GET',
  headers: {
    "Authorization": getToken()
  },
}

const headersMethodPOST = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    "Authorization": getToken()
  }
}

const headersMethodPATCH = {
  method: 'PATCH',
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

export { getToken, headersMethodGET, headersMethodPOST, headersMethodPATCH, headersMethodDELETE }