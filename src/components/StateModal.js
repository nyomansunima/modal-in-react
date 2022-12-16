import { useRef, useEffect } from 'react'
import useModal from '../libs/hooks/modal'

const StateModal = () => {
  const modal = useModal()
  const modalRef = useRef(null)

  // close the modal
  // when the user tyep 'Esc' key
  const closeModalOnEscKeyDown = (e) => {
    if (modal.isShow && e.code == 'Escape') {
      modal.hide()
    }
  }

  // close the modal
  // when the user click outside of the content modal
  const closeModalOnClickOut = (e) => {
    if (
      modal.isShow &&
      e.target &&
      modalRef.current &&
      !modalRef.current.contains(e.target)
    ) {
      modal.hide()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', closeModalOnEscKeyDown)
    document.body.addEventListener('mousedown', closeModalOnClickOut)

    return () => {
      document.removeEventListener('keydown', closeModalOnEscKeyDown)
      document.body.removeEventListener('mousedown', closeModalOnClickOut)
    }
  }, [modal.isShow])

  if (modal.isShow) {
    return (
      <div className='modal-backdrop'>
        <div ref={modalRef} className='modal-content'>
          <div className='modal-header'>
            <h4 className=''>State Modal</h4>
          </div>
          <div className='modal-body'>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati ipsam quidem magnam nam mollitia quaerat nihil quibusdam
              iusto delectus impedit!
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default StateModal
