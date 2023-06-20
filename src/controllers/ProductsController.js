import { BASEURL } from "../utils/baseUrl"

class ProductsController {

  constructor(store) {
    this.store = store
  }

  async fetchList() {
    fetch(`${BASEURL}/residents`)
      .then((data) => data.json())
      .then((products) => console.log(products))
  }
}

export default ProductsController