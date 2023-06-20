import { BASEURL } from "../utils/baseUrl"

class CommerceController {

  constructor(store) {
    this.store = store
  }

  async fetchList() {
    fetch(`${BASEURL}/commerces`)
      .then((data) => data.json())
      .then((commerces) => console.log(commerces))
  }
}

export default CommerceController