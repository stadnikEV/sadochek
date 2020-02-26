import React from 'react'

import useScreenParams from 'common/hooks/useScreenParams'
import Steps from 'common/components/Steps'

import boutiqueImg from 'common/images/boutique.png'
import bagImg from 'common/images/bag.png'
import consoleImg from 'common/images/console.png'
import carImg from 'common/images/car.png'


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
      <div className="bottom-page__prizes">
        <div className="bottom-page__prizes-holder">

          <div className="bottom-page__prizes-item bottom-page__prizes-item_boutique">
            <img
              className="bottom-page__boutique-img"
              src={boutiqueImg}
              alt="boutique"
            />
            <div className="bottom-page__prizes-item-txt-cont">
              <div className="bottom-page__prizes-item-txt-head">
                ПОДАРУНОК ПІД КОЖНОЮ КРИШЕЧКОЮ
              </div>
              <div className="bottom-page__prizes-item-txt-top">
                Знижка 10%
              </div>
              <div className="bottom-page__prizes-item-txt-btm">
                на сімейні покупки
              </div>
            </div>
          </div>

          <div className="bottom-page__prizes-item bottom-page__prizes-item_bag">
            <img
              className="bottom-page__boutique-img"
              src={bagImg}
              alt="boutique"
            />
            <div className="bottom-page__prizes-item-txt-cont">
              <div className="bottom-page__prizes-item-txt-head">
                ГАРАНТОВАНО
              </div>
              <div className="bottom-page__prizes-item-txt-top">
                Сумка-бананка
              </div>
              <div className="bottom-page__prizes-item-txt-btm">
                щоб звільнити руки для обіймів
              </div>
            </div>
          </div>

          <div className="bottom-page__prizes-item bottom-page__prizes-item_console">
            <img
              className="bottom-page__boutique-img"
              src={consoleImg}
              alt="boutique"
            />
            <div className="bottom-page__prizes-item-txt-cont">
              <div className="bottom-page__prizes-item-txt-head">
                РОЗІГРАШ ЩОДНЯ
              </div>
              <div className="bottom-page__prizes-item-txt-top">
                Ігрова приставка
              </div>
              <div className="bottom-page__prizes-item-txt-btm">
                для сімейних розваг
              </div>
            </div>
          </div>

          <div className="bottom-page__prizes-item bottom-page__prizes-item_car">
            <img
              className="bottom-page__boutique-img"
              src={carImg}
              alt="boutique"
            />
            <div className="bottom-page__prizes-item-txt-cont">
              <div className="bottom-page__prizes-item-txt-head">
                ГОЛОВНИЙ ПРИЗ
              </div>
              <div className="bottom-page__prizes-item-txt-top">
                Авто Сitroёn C3
              </div>
              <div className="bottom-page__prizes-item-txt-btm">
                для сімейних подорожей
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default TopPage
