import { createContext } from "react";

class RootStore {
  constructor() {

  }
}

export { RootStore }

const RootStoreContext = createContext(new RootStore());

export default RootStoreContext;