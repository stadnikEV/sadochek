import ReactGA from 'react-ga'
import { KEY_GA } from 'common/constants'

const initGA = () => {
  ReactGA.initialize(KEY_GA)
  ReactGA.pageview('/')
}

export default initGA
