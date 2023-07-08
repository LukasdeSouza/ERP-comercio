import { createContext } from "react"
import LoginStore from '../stores/LoginStore'
import CommerceStore from "../stores/CommerceStore"
import FinancialStore from "../stores/FinancialStore"

class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
    this.commerceStore = new CommerceStore()
    this.financialStore = new FinancialStore()
  }
}

export { RootStore }

const RootStoreContext = createContext(new RootStore())

export default RootStoreContext