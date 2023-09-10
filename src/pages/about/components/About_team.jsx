import { useState } from 'react'
import data from "../../../data.json"
import TeamMembers from './TeamMembers'

const About_team = () => {

  const [rendercount, setRenderCount] = useState(3);
  console.log(rendercount);

  function updateRenderCount() {
    if (rendercount < 10) {
      setRenderCount(prevCount => prevCount + 3);
    }
  }

  return (
    <section className="about_team_section">
      <div className="header">
        <p>Evergreen florist, Evelyn Greenleaf</p>
        <p>Meet the Team that makes miracles happen</p>
      </div>
      <div className="team_container">
        {data.team_data.slice(0, rendercount).map((teamItem) => {
          return(
            <TeamMembers 
              key={teamItem.id}
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