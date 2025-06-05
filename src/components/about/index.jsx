import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../animatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import { faGitAlt, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons/faCss3'
import Loader from 'react-loaders'

function About() {
  const [letterClass, setLetterClass] = useState('test-animate')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          architecto fugit neque laudantium doloremque provident eaque deserunt
          laboriosam. Tempore, quos!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          pariatur!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat
          iusto sunt omnis cupiditate inventore impedit id amet quaerat autem,
          eum consequatur provident maxime quae quidem alias quos facere
          aliquam.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faJava} color="#F89820" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About
