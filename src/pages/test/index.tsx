import { useTranslation } from 'react-i18next'
import { StyledTest } from './styles'

export default function TestPage() {
  const { t } = useTranslation()

  return (
    <StyledTest>
      <div>{t('home.titles.0')}</div>
    </StyledTest>
  )
}
