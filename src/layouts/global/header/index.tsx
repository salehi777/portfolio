import useSettingsStore from '@/stores/useSettingsStore'
import { StyledLangButton, StyledLogo, StyledThemeButton } from './styles'
import { motion } from 'motion/react'
import SvgBox from '@/components/ui/svg-box'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { ClickAwayListener, Fab } from '@mui/material'
import { languages } from '@/i18n'
import { useModal } from '@/hooks/useModal'
import Modal from '@/components/ui/modal'
import ContactMeForm from './contact-me-form'
import MotionIconRotate from '@/components/ui/motion-icon/motion-icon-rotate'
import useLanguageChange from '@/hooks/useLanguageChange'

const modeList = ['system', 'light', 'dark'] as const

export default function Header() {
  // language
  const { i18n } = useTranslation()
  const [showLang, setShowLang] = useState(false)
  const direction = useSettingsStore((state) => state.direction)
  const onLanguageChange = useLanguageChange()

  // mode
  const mode = useSettingsStore((s) => s.mode)
  const setMode = useSettingsStore((s) => s.setMode)
  const changeMode = (event: React.MouseEvent) =>
    setMode(modeList[(modeList.indexOf(mode) + 1) % 3], event)

  // contact
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <StyledLogo>
        <img
          src="/images/logo.png"
          width={60}
          height={60}
          alt="رزومه"
          loading="lazy"
        />
      </StyledLogo>
      <StyledThemeButton onClick={changeMode}>
        <MotionIconRotate
          index={mode === 'system' ? 0 : mode === 'light' ? 1 : 2}
          srcs={['/icons/monitor.svg', '/icons/sun.svg', '/icons/moon.svg']}
        />
      </StyledThemeButton>

      <ClickAwayListener onClickAway={() => setShowLang(false)}>
        <StyledLangButton>
          <span onClick={() => setShowLang(!showLang)}>
            <SvgBox src="/icons/globe.svg" />
          </span>
          <motion.div
            initial={false}
            style={{ y: '-50%' }}
            variants={{
              show: {
                x: direction === 'ltr' ? -40 : 40,
                opacity: 1,
                display: 'block',
              },
              hide: {
                x: direction === 'ltr' ? -24 : 24,
                opacity: 0,
                display: 'none',
              },
            }}
            animate={showLang ? 'show' : 'hide'}
          >
            {languages.map(({ code, title }) => (
              <span
                key={code}
                onClick={() => onLanguageChange(code)}
                data-active={i18n.language === code}
              >
                {title}
              </span>
            ))}
          </motion.div>
        </StyledLangButton>
      </ClickAwayListener>

      <Fab
        sx={{ position: 'fixed', bottom: 16, insetInlineEnd: 16 }}
        onClick={openModal}
      >
        <SvgBox src="/icons/message-square.svg" />
      </Fab>

      <Modal onClose={closeModal} open={isOpen} title="Contact Me">
        <ContactMeForm closeModal={closeModal} />
      </Modal>
    </>
  )
}
