import { createAlova } from 'alova'
import adapterFetch from 'alova/fetch'
import toast from 'react-hot-toast'

const alovaInstance = createAlova({
  baseURL: 'https://portfolio-back-sage.vercel.app',
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
