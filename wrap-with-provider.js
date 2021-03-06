import React from "react"
import store from "app/store"
import { Provider } from "react-redux"

// eslint-disable-next-line react/display-name,react/prop-types
const wrapWithProvider = ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  return <Provider store={store}>{element}</Provider>
}

export default wrapWithProvider
