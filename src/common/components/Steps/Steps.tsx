import React from 'react'

import useScreenParams from 'common/hooks/useScreenParams'
import './style.scss'

// interface paramsType {
//   device: string,
//   orientation: string | null,
// }

const Steps: React.FC = () => {
  const { device, orientation } = useScreenParams()

  return (
    <div className={`steps steps_${device} steps_${orientation}`}>
      <div className="steps__item-cont">
        <div className="steps__item">
          <div className="steps__num-cont steps__num-cont_first">
            <div className="steps__num steps__num_first">
              1
            </div>
          </div>
          <div className="steps__text steps__text-first">
            ШУКАЙ КОДИ ПІД КРИШЕЧКАМИ АКЦІЙНИХ УПАКОВОК “САДОЧОК”
          </div>
        </div>
        <div className="steps__item">
          <div className="steps__num-cont steps__num-cont_second">
            <div className="steps__num steps__num_second">
              2
            </div>
          </div>
          <div className="steps__text steps__text-second">
            РЕЄСТРУЙ КОДИ НА САЙТІ ЧИ В ЧАТ-БОТІ АБО ВІДПРАВЛЯЙ SMS НА НОМЕР 5828
          </div>
          <span className="steps__info">
            i
          </span>
        </div>
        <div className="steps__item">
          <div className="steps__num-cont steps__num-cont_third">
            <div className="steps__num steps__num_third">
              3
            </div>
          </div>
          <div className="steps__text steps__text-third">
            ВИГРАВАЙ КРУТЕЗНІ ПОДАРУНКИ ДЛЯ ВСІЄЇ СІМ’Ї
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
