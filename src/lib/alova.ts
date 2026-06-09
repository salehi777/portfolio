import { createAlova } from 'alova'
import { xhrRequestAdapter } from '@alova/adapter-xhr'
import ReactHook from 'alova/react'
import toast from 'react-hot-toast'

const alova = createAlova({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  statesHook: ReactHook,
  requestAdapter: xhrRequestAdapter(),
  cacheFor: null,

  responded: {
    onSuccess: async (response) => {
      if (response.status >= 400) {
        const message = response.data?.message || 'Something went wrong'
        toast.error(message)
        throw new Error(message)
      }

      return response.data
    },

    onError: () => {
      toast.error('Failed to connect to server')
      throw new Error('Failed to connect to server')
    },
  },
})

export default alova
