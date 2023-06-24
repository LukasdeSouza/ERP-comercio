import { createContext } from "react"
import LoginStore from '../stores/LoginStore'
import CommerceStore from "../stores/CommerceStore"

class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
    this.commerceStore = new CommerceStore()
  }
}

export { RootStore }

const RootStoreContext = createContext(new RootStore())

export default RootStoreContext