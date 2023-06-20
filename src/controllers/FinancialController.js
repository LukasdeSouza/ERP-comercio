import { BASEURL } from "../utils/baseUrl"

class FinancialController {

  constructor(store) {
    this.store = store
  }

  async fetchList() {
    fetch(`${BASEURL}/financial`)
      .then((data) => data.json())
      .then((products) => console.log(products))
  }
}

export default FinancialController