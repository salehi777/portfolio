import { createAlova } from 'alova'
import adapterFetch from 'alova/fetch'
import ReactHook from 'alova/react'
import toast from 'react-hot-toast'

const alovaInstance = createAlova({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  statesHook: ReactHook,
  requestAdapter: adapterFetch(),
  responded: {
    onSuccess: async (response) => {
      const json = await response.json()

      if (response.status >= 400) {
        throw new Error(json.message || 'Something went wrong')
      }

      return json
    },

    onError: (err) => {
      toast.error(err.message || 'Something went wrong')
      throw err
    },
  },
})

export default alovaInstance
