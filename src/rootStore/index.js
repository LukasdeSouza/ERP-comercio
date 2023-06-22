import { createContext } from "react"
import LoginStore from '../stores/LoginStore'

class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
  }
}

export { RootStore }

const RootStoreContext = createContext(new RootStore())

export default RootStoreContext