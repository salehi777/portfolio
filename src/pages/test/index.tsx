import { StyledTest } from './styles'
import { Box, Button } from '@mui/material'
import { useModal } from '@/hooks/useModal'
import Modal from '@/components/modal'
import ContactMeForm from '@/layouts/general/header/contact-me-form'

export default function TestPage() {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <StyledTest>
      <Box p={20}>
        <Button onClick={() => openModal()}>open modal</Button>
      </Box>

      <Modal onClose={() => closeModal()} open={isOpen} maxWidth={'xs'}>
        <ContactMeForm closeModal={closeModal} />
      </Modal>
    </StyledTest>
  )
}
