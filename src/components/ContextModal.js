import { useEffect, useRef } from 'react'
import { useModalContext } from '../libs/context/modal'

const ContextModal = () => {
  const modalRef = useRef(null)
  const { isShow, hide } = useModalContext()

  // close the modal
  // when the user tyep 'Esc' key
  const closeModalOnEscKeyDown = (e) => {
    if (isShow && e.code == 'Escape') {
      hide()
    }
  }

  // close the modal
  // when the user click outside of the content modal
  const closeModalOnClickOut = (e) => {
    if (
      isShow &&
      e.target &&
      modalRef.current &&
      !modalRef.current.contains(e.target)
    ) {
      hide()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', closeModalOnEscKeyDown)
    document.body.addEventListener('mousedown', closeModalOnClickOut)

    return () => {
      document.removeEventListener('keydown', closeModalOnEscKeyDown)
      document.body.removeEventListener('mousedown', closeModalOnClickOut)
    }
  }, [isShow])

  // only showing the modal if
  // the show props is true
  if (isShow) {
    return (
      <div className='modal-backdrop'>
        <div ref={modalRef} className='modal-content'>
          <div className='modal-header'>
            <h4 className=''>Context Modal</h4>
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

export default ContextModal
