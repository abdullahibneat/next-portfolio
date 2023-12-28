import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  children?: React.ReactNode
  onClose?: () => void
}

const ModalComponent = ({ onClose = () => {}, children }: Props) => {
  // Because of SSR, "document" is not defined until browser render
  const [isBrowser, setBrowser] = useState(false)
  useEffect(() => {
    setBrowser(true)
  }, [])

  return isBrowser
    ? createPortal(
        <div id="modal-wrapper" onClick={onClose}>
          <div id="modal-content" onClick={(e) => e.stopPropagation()}>
            <div id="modal-close" onClick={onClose}>
              ✖
            </div>
            {children}
          </div>
        </div>,
        document.getElementById('modal-root')
      )
    : null
}

const useModal = (initVisible = false) => {
  const [visible, setVisible] = useState(initVisible)
  const show = () => setVisible(true)
  const hide = () => setVisible(false)
  const toggle = () => setVisible(!visible)

  const Modal = ({ children }: { children?: React.ReactNode }) =>
    visible ? <ModalComponent onClose={hide} children={children} /> : null

  return { show, hide, toggle, Modal }
}

export default useModal
