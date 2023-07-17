import { React, useState } from 'react'
import data from "/public/data.json"

const TeamComponent = ({ image, name, profession }) => {
  return (
    <div className='team_item_container'>
      <div className='image_wrapper'>
        <img src={image} alt="team-person-image" />
      </div>
      <div className='team_info_wrapper'>
        <p>{name}</p>
        <p>{profession}</p>
      </div>
    </div>
  )
}

const About_team = () => {

  const [rendercount, setRenderCount] = useState(3);

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
            <TeamComponent 
              key={teamItem.id}
              image={teamItem.image}
              name={teamItem.name}
              profession={teamItem.profession}
            />
          )
        })}
      </div>
      <button onClick={updateRenderCount} className='view_more_btn'>View more</button>
    </section>
  )
}

export default About_team