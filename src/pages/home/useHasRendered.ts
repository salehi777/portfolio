// When component is in view it get rendered ans remain same

import { useState, useEffect } from 'react'

export default function useHasRendered(isInView: boolean) {
  const [hasRendered, setHasRendered] = useState(false)

  useEffect(() => {
    if (isInView && !hasRendered) {
      setHasRendered(true)
    }
  }, [isInView, hasRendered])

  return { hasRendered }
}
