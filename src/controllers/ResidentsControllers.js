import { BASEURL } from "../utils/baseUrl"

class ResidentsController {

  constructor(store) {
    this.store = store
  }

  async fetchList() {
    fetch(`${BASEURL}/residents`)
      .then((data) => data.json())
      .then((residents) => console.log(residents))
  }
}

export default ResidentsController