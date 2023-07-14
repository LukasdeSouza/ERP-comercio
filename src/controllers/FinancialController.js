import { error } from "highcharts"
import { BASEURL } from "../utils/baseUrl"
import { getToken, headersMethod, headersMethodDELETE, headersMethodGET, headersMethodPATCH, headersMethodPOST } from "../utils/getToken"
import { toast } from "react-hot-toast"

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
      .then((data) => data.json())
      .then(result => {
        callBack()
        toast.success('Salvo com Sucesso!')
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Erro ao Salvar Informações!')
      })
      .finally(() => {
        this.store.setLoading(false)
      })
  }

  async onSaveEdit(body, callBack) {
    const id = this.store.state.financial?._id
    this.store.setLoading(true)

    await fetch(`${BASEURL}/financial/${id}`, {
      ...headersMethodPATCH,
      body
    })
      .then((data) => data.json())
      .then((result) => {
        console.log('UpdateSucessfully', result);
        callBack()
      })
      .catch(error => console.log('Error:', error)
      )
      .finally(() => this.store.setLoading(false))
  }

  async onDelete(callBack) {
    let id = this.store.state.financial?._id

    await fetch(`${BASEURL}/financial/${id}`, headersMethodDELETE)
      .then(response => {
        if (response.ok) {
          toast.error('Excluído com Sucesso!')
          callBack()
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