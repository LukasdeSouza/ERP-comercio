
const getToken = () => {
  return localStorage.getItem('@ERP-token') || null;
}

export { getToken }