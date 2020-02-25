import React from 'react'

import useScreenParams from 'common/hooks/useScreenParams'
import Steps from 'common/components/Steps'

import hedgehogImg from 'common/images/hedgehog.png'
import packImg from 'common/images/pack.png'
import actionImg from 'common/images/action.png'
import tableImg from 'common/images/table.png'
import sadochekImg from 'common/images/sadochek.png'
import backgroundImg from 'common/images/background.png'
import backgroundMobImg from 'common/images/background-mob.png'

import '../style/topPage.scss'

const TopPage: React.FC = () => {
  const { device, orientation } = useScreenParams()

  if (!device) {
    return <></>
  }

  return (
    <section
      className={`top-page top-page_${device} top-page_${orientation}`}
    >
      <img
        className="top-page__background-img"
        src={device !== 'mobile' ? backgroundImg : backgroundMobImg}
        alt="background"
      />
      <img
        className="top-page__sadochek-img"
        src={sadochekImg}
        alt="sadochek"
      />
      <img
        className="top-page__table-img"
        src={tableImg}
        alt="table"
      />
      <div className="top-page__action-group">
        <img
          className="top-page__action-img"
          src={actionImg}
          alt="action"
        />
        {
          orientation === 'vertical' || device === 'mobile'
            ? <></>
            : (
              <img
                className="top-page__pack-img"
                src={packImg}
                alt="pack"
              />
            )
        }
        <img
          className="top-page__hedgehog-img"
          src={hedgehogImg}
          alt="hedgehogImg"
        />
      </div>
      <div className="top-page__footer">
        {
          device !== 'mobile'
            ? <Steps />
            : <></>
        }
      </div>
    </section>
  )
}

export default TopPage
