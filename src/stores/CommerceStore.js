import { action, makeAutoObservable, observable } from "mobx";

class CommerceStore {
  state = {
    commerce: {},
    commerceList: []
  }
  loading = false
  // alert = {
  //   open: false,
  //   message: '',
  //   type: 'success'
  // }

  constructor() {
    makeAutoObservable(this, {
      state: observable,

      setState: action,
      setAlert: action,
      setLoading: action,
    })
  }

  setState(key, value) {
    this.state[key] = value
  }

  setLoading(value) {
    this.loading = value
  }

  setAlert(open, type, message) {
    this.alert.open = open;

    if (type) {
      this.alert.type = type;
      this.alert.message = message;
    }
  }
}

export default CommerceStore
