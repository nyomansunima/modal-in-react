import React, { createContext, useContext, useState } from 'react'

// define the context of modal
// to provide inthe children
const ModalContext = createContext({})
const { Provider } = ModalContext

// define the provider of
// modal that contain the state to manage the modals
const ModalProvider = ({ children }) => {
  const [isShow, setIsShow] = useState(false)

  // if you need multiple modal use this
  // and will use the key option to manage multiple modal
  /**
   * const [showModal, setShowModal] = useState()
   *
   * const show = (key: string) => {
   *    setShowModal(key)
   * }
   * const hide = (key: string) => {
   *    setShowModal(null)
   * }
   */

  // hide the modal
  const hide = () => {
    setIsShow(false)
  }

  // show the modal
  const show = () => {
    setIsShow(true)
  }

  return <Provider value={{ isShow, show, hide }}>{children}</Provider>
}

// create the context of modal
// that will call in each of modal children components
const useModalContext = () => {
  const context = useContext(ModalContext)
  return context
}

export { useModalContext, ModalContext, ModalProvider }
