import { useEffect, useRef } from 'react'

const SimpleModal = ({ show, onConfirm, onCancel, onClose }) => {
  const modalRef = useRef(null)

  // when the cancel button
  // clicked we need to hide the modal
  // and start running the cancel following func
  const onCancelClicked = () => {
    if (onClose) onClose()
    if (onCancel) onCancel()
  }

  // when the confim
  // close the modal, following with confirm func
  const onConfirmClicked = () => {
    if (onClose) onClose()
    if (onConfirm) onConfirm()
  }

  // close the modal
  // when the user tyep 'Esc' key
  const closeModalOnEscKeyDown = (e) => {
    if (show && e.code == 'Escape' && onClose) {
      onClose()
    }
  }

  // close the modal
  // when the user click outside of the content modal
  const closeModalOnClickOut = (e) => {
    if (
      show &&
      e.target &&
      modalRef.current &&
      !modalRef.current.contains(e.target) &&
      onClose
    ) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', closeModalOnEscKeyDown)
    document.body.addEventListener('mousedown', closeModalOnClickOut)

    return () => {
      document.removeEventListener('keydown', closeModalOnEscKeyDown)
      document.body.removeEventListener('mousedown', closeModalOnClickOut)
    }
  }, [show])

  // only showing the modal if
  // the show props is true
  if (show) {
    return (
      <div className='modal-backdrop'>
        <div ref={modalRef} className='modal-content'>
          <div className='modal-header'>
            <h4 className=''>Simple Modal</h4>
          </div>
          <div className='modal-body'>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati ipsam quidem magnam nam mollitia quaerat nihil quibusdam
              iusto delectus impedit!
            </span>
          </div>

          <div className='modal-footer'>
            <button onClick={onCancelClicked} className='text-button'>
              Cancel
            </button>
            <button onClick={onConfirmClicked} className='flat-button'>
              OK
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleModal
