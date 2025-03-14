import Modal from 'react-modal'

const customModalStyles = ( height ) => ({
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    minWidth: "350px",
    maxWidth: "70%",
    height: height,
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    overflow: "auto",
  },
})

export default function ModalComponent({ isOpen, setIsOpen, height, modalContent}) {
  const customStyles = customModalStyles(height)

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      ariaHideApp={true}
      shouldCloseOnOverlayClick={true}
    >{modalContent}</Modal>
  )
}