import { useState } from 'react'

interface ModalState {
  isOpen: boolean
  data?: any
}

export interface UseModalReturn {
  isOpen: boolean
  data?: any
  openModal: (data?: any) => void
  closeModal: () => void
  toggleModal: (data?: any) => void
}

export function useModal(
  initialState: ModalState = { isOpen: false }
): UseModalReturn {
  const [state, setState] = useState<ModalState>(initialState)

  const openModal = (data?: any) => {
    setState({ isOpen: true, data })
  }

  const closeModal = () => {
    setState({ isOpen: false, data: undefined })
  }

  const toggleModal = (data?: any) => {
    setState((prev) => ({ isOpen: !prev.isOpen, data }))
  }

  return {
    isOpen: state.isOpen,
    data: state.data,
    openModal,
    closeModal,
    toggleModal,
  }
}
