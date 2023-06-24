import axios from "axios"
import { BASEURL } from "../utils/baseUrl"
import { toast } from "react-hot-toast"


class LoginController {

  constructor(store) {
    this.store = store
  }

  async fetchList(email, password, callBack) {
    this.store.setLoading(true)

    await axios.post(`${BASEURL}/authentication`, {
      email: email,
      password: password
    })
      .then((data) => {
        if (data.data.msg === 'Senha Incorreta!') {
          toast.error('Usuário ou Senha Incorretos', {
            duration: 3000,
            position: 'top-center',
            icon: '⚠️'
          })
        } else {
          localStorage.setItem('@ERP-token', data.data.token)
          callBack()
        }
      })
      .catch((error) => {
        toast.error('Usuário ou Senha Incorretos', {
          duration: 3000,
          position: 'top-center',
          icon: '⚠️'
        })
      })
      .finally(() => this.store.setLoading(false))
  }
}

export default LoginController