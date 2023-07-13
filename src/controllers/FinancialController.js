import { BASEURL } from "../utils/baseUrl"
import { getToken, headersMethod, headersMethodDELETE, headersMethodGET, headersMethodPOST } from "../utils/getToken"

class FinancialController {

  constructor(store) {
    this.store = store
  }


  async fetchList() {
    this.store.setLoading(true)

    await fetch(`${BASEURL}/financial`, headersMethodGET)
      .then((data) => data.json())
      .then((financial) => {
        this.store.setState('financialList', financial)
        this.store.setLoading(false)

      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.store.setLoading(false)
      })
  }

  async fetchListById(id) {
    this.store.setLoading(true)

    await fetch(`${BASEURL}/financial/${id}`, headersMethodGET)
      .then((data) => data.json())
      .then((financial) => {
        this.store.setState('financial', financial)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.store.setLoading(false)
      })
  }

  async onSave(body, callBack) {
    this.store.setLoading(true)

    await fetch(`${BASEURL}/financial`, {
      ...headersMethodPOST,
      body
    })
      .then((data) => data.json)
      .then(result => {
        console.log('Success:', result);
        callBack()
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        this.store.setLoading(false)
      })
  }

  async onDelete(id) {
    await fetch(`${BASEURL}/financial/${id}`, headersMethodDELETE)
      .then(response => {
        if (response.ok) {
          alert('Deletado com Sucesso');
        } else {
          throw new Error('Erro ao Deletar');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}

export default FinancialController