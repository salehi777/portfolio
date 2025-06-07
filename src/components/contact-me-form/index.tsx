import alovaInstance from '@/api'
import Input from '@/components/form/input'
import { Backdrop, Box, Button, Grid } from '@mui/material'
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { StyledTooltip } from './styles'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'

export default function ContactMeForm({ closeModal }) {
  const { t } = useTranslation()
  const methods = useForm()
  const [infoStatus, setInfoStatus] = useState<'not_shown' | 'show' | 'shown'>(
    'not_shown'
  )

  const onSubmit = async ({ info, message }) => {
    if (!info && infoStatus === 'not_shown') {
      setInfoStatus('show')
      methods.setFocus('info')
      return
    }

    try {
      await alovaInstance.Post('/contact-via-telegram', {
        contact_info: info,
        message: encodeURIComponent(message),
      })
      toast.success(t('contact_me.success_message'))
      closeModal?.()
    } catch (error) {}
  }

  return (
    <>
      <Box sx={{ p: 2 }}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
            <Grid container spacing={3} justifyContent={'flex-end'}>
              <Grid size={12}>
                <StyledTooltip
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  arrow
                  open={infoStatus === 'show'}
                  title={
                    <div>
                      <div>{t('contact_me.tooltip.text')}</div>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => setInfoStatus('shown')}
                      >
                        {t('contact_me.tooltip.ok')}
                      </Button>
                    </div>
                  }
                >
                  <Box
                    sx={{
                      position: 'relative',
                      bgcolor: 'white',
                      borderRadius: '8px',
                      zIndex: (theme) =>
                        infoStatus === 'show'
                          ? theme.zIndex.tooltip
                          : undefined,
                    }}
                  >
                    <Input
                      name="info"
                      label={t('contact_me.info.label')}
                      placeholder={t('contact_me.info.placeholder')}
                    />
                  </Box>
                </StyledTooltip>
              </Grid>
              <Grid size={12}>
                <Input
                  name="message"
                  label={t('contact_me.message.label')}
                  rules={{ required: true }}
                  multiline
                  minRows={4}
                />
              </Grid>
              <Grid>
                <Button type="submit" variant="contained" size="large">
                  {t('contact_me.submit')}
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Box>

      <Backdrop
        open={infoStatus === 'show'}
        onClick={() => setInfoStatus('shown')}
      />
    </>
  )
}
