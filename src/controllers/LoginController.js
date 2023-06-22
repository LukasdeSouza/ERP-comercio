import axios from "axios"
import { BASEURL } from "../utils/baseUrl"


class LoginController {

  constructor(store) {
    this.store = store
  }

  async fetchList(email, password) {
    this.store.setLoading(true)

    axios.post(`${BASEURL}/authentication`, {
      email: email,
      password: password
    })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        this.store.setAlert(true, error.msg)
      })
      .finally(() => this.store.setLoading(false))
  }
}

export default LoginController