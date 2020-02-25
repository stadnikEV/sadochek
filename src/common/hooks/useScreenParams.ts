import { useState, useEffect } from 'react'
import debounce from 'debounce'

import { TABLET_WIDTH, MOBILE_WIDTH } from 'common/constants'


interface paramsType {
  device: string | null,
  orientation: string | null,
  aspectRatio: string | null,
}


const useScreenParams = () => {
  const [params, setParams]: [paramsType, any] = useState({
    device: null,
    orientation: null,
    aspectRatio: null,
  })


  const getDevice = (width: number) => {
    if (width > TABLET_WIDTH) {
      return 'desktop'
    }
    if (width >= MOBILE_WIDTH) {
      return 'tablet'
    }
    return 'mobile'
  }


  const onResize = debounce(() => {
    const width = window.innerWidth
    const height = window.innerHeight

    setParams({
      device: getDevice(width),
      orientation: (width > height) ? 'horizontal' : 'vertical',
      aspectRatio: width / height,
    })
  }, 20)


  useEffect(() => {
    onResize()
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return params
}

export default useScreenParams
