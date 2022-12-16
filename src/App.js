import { useState } from 'react'
import ContextModal from './components/ContextModal'
import SimpleModal from './components/SimpleModal'
import StateModal from './components/StateModal'
import { ModalProvider, useModalContext } from './libs/context/modal'
import useModal from './libs/hooks/modal'

/**
 * # App
 *
 * the application level component
 * to showing all pages below
 */
const App = () => {
  const modal = useModal()
  const modalContext = useModalContext() // ensure to add the provider for modal before this component
  const [isShowSimpleModal, setShowSimpleModal] = useState(false)

  const showSimpleModal = () => {
    setShowSimpleModal(true)
  }
  const hideSimpleModal = () => {
    setShowSimpleModal(false)
  }

  const showStateModal = () => {
    modal.show()
  }

  const showContextModal = () => {
    modalContext.show()
  }

  return (
    <div className='container'>
      <div className='modal-button-wrapper'>
        <button onClick={showStateModal} className='modal-button'>
          State Modal
        </button>
        <button onClick={showSimpleModal} className='modal-button'>
          Simple Modal
        </button>
        <button onClick={showContextModal} className='modal-button'>
          Context Modal
        </button>
      </div>

      {/* the modal components is here */}
      <SimpleModal show={isShowSimpleModal} onClose={hideSimpleModal} />
      <ContextModal />
      <StateModal />
    </div>
  )
}

export default App
