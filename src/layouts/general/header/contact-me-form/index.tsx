import alovaInstance from '@/api'
import Input from '@/components/form/input'
import { Backdrop, Box, Button, Grid } from '@mui/material'
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { StyledTooltip } from './styles'
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast'
import { useRequest } from 'alova/client'

export default function ContactMeForm({ closeModal }) {
  const { t } = useTranslation()
  const methods = useForm()
  const [tooltipStatus, setTooltipStatus] = useState<
    'not_shown' | 'show' | 'shown'
  >('not_shown')

  const { loading, send } = useRequest(
    (data) => alovaInstance.Post('/contact-via-telegram', data),
    { immediate: false }
  )

  const onSubmit = async ({ info, message }) => {
    if (!info && tooltipStatus === 'not_shown') {
      setTooltipStatus('show')
      methods.setFocus('info')
      return
    }

    try {
      await send({ info, message: encodeURIComponent(message) })
      toast.success(t('contact_me.success_message'))
      closeModal?.()
    } catch (error) {}
  }

  return (
    <>
      <Box sx={{ p: '40px 32px 24px' }}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
            <Grid container spacing={3} justifyContent={'flex-end'}>
              <Grid size={12}>
                <Input
                  name="message"
                  placeholder={t('contact_me.message.label')}
                  rules={{ required: true }}
                  multiline
                  minRows={4}
                  maxRows={8}
                />
              </Grid>
              <Grid size={12}>
                <StyledTooltip
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  arrow
                  open={tooltipStatus === 'show'}
                  title={
                    <div>
                      <div>{t('contact_me.tooltip.text')}</div>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => setTooltipStatus('shown')}
                      >
                        {t('contact_me.tooltip.ok')}
                      </Button>
                    </div>
                  }
                >
                  <Box
                    sx={{
                      position: 'relative',
                      bgcolor: (theme) => theme.palette.background.paper,
                      backgroundImage: 'var(--Paper-overlay)',
                      borderRadius: '8px',
                      zIndex: (theme) =>
                        tooltipStatus === 'show'
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
              <Grid>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  loading={loading}
                  sx={{ mt: 1 }}
                >
                  {t('contact_me.submit')}
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Box>

      <Backdrop
        open={tooltipStatus === 'show'}
        onClick={() => setTooltipStatus('shown')}
      />
    </>
  )
}
