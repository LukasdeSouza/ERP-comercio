import { BASEURL } from "../utils/baseUrl"
import { getToken, headersMethod, headersMethodDELETE, headersMethodGET, headersMethodPOST } from "../utils/getToken"

class FinancialController {

  constructor(store) {
    this.store = store
  }


  async fetchList() {
    fetch(`${BASEURL}/financial`, headersMethodGET)
      .then((data) => data.json())
      .then((financial) => {
        this.store.setState('financialList', financial)
      })
      .catch((err) => console.log(err))
  }

  async fetchListById(id) {
    fetch(`${BASEURL}/financial/${id}`, headersMethodGET)
      .then((data) => data.json())
      .then((financialId) => {
        this.store.setState('financial', financialId)
      })
      .catch((err) => console.log(err))
  }

  async onSave(body) {
    fetch(`${BASEURL}/financial`, {
      ...headersMethodPOST,
      body: this.store.state.financial
    })
      .then((data) => data.json)
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      })
  }

  async onDelete(id) {
    fetch(`${BASEURL}/financial/${id}`, headersMethodDELETE)
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