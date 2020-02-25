import React from 'react'

import useScreenParams from 'common/hooks/useScreenParams'
import Steps from 'common/components/Steps'

import '../style/bottomPage.scss'


const TopPage: React.FC = () => {
  const { device, orientation } = useScreenParams()

  if (!device) {
    return <></>
  }

  return (
    <section
      className={`bottom-page bottom-page_${device} bottom-page_${orientation}`}
    >
      <div className="bottom-page__header">
        {
          device === 'mobile' ? <Steps /> : <></>
        }
      </div>
    </section>
  )
}

export default TopPage
