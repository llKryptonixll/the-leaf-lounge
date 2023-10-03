import { useState, useContext } from 'react'
import AnimationContext from '../../../context/AnimationContext'
import { motion } from 'framer-motion'
import data from "../../../data.json"
import TeamMembers from './TeamMembers'

const About_team = () => {
  const { textAnimation1, textAnimation2 } = useContext(AnimationContext)

  const [rendercount, setRenderCount] = useState(3);

  function updateRenderCount() {
    if (rendercount < 10) {
      setRenderCount(prevCount => prevCount + 3);
    }
  }

  return (
    <section className="about_team_section">
      <div className="header">
        <motion.p {...textAnimation1}>Evergreen florist, Evelyn Greenleaf</motion.p>
        <motion.p {...textAnimation2}>Meet the Team that makes miracles happen</motion.p>
      </div>
      <div className="team_container">
        {data.team_data.slice(0, rendercount).map((teamItem) => {
          return(
            <TeamMembers 
              key={teamItem.id}
              id={teamItem.id}
              image={teamItem.image}
              name={teamItem.name}
              profession={teamItem.profession}
            />
          )
        })}
      </div>
      <button disabled={rendercount > 10} onClick={updateRenderCount} className='view_more_btn'>View more</button>
    </section>
  )
}

export default About_team