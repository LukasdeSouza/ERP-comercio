import axios from "axios"
import { BASEURL } from "../utils/baseUrl"
import { toast } from "react-hot-toast"


class LoginController {

  constructor(store) {
    this.store = store
  }

  async fetchList(email, password) {
    this.store.setLoading(true)

    await axios.post(`${BASEURL}/authentication`, {
      email: email,
      password: password
    })
      .then((data) => {
        toast.success('Login Efetuado com Sucesso', {
          duration: 2000,
          position: 'top-center',
          icon: '❇️'
        })
        alert('Login efetuado com Sucesso')
      })
      .catch((error) => {
        toast.error('Erro ao Fazer Login, contacte o Administrador', {
          duration: 3000,
          position: 'top-center',
          icon: '⚠️'
        })
        alert('Erro ao efetuar Login')
      })
      .finally(() => this.store.setLoading(false))
  }
}

export default LoginController