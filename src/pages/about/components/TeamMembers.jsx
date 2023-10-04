import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const TeamMembers = ({ id, image, name, profession }) => {
  const delay = (id % 3.1) * 0.2;
  const framerMotionKitchenTeam = {
    initial: { top: 100, opacity: 0 },
    whileInView: { top: 0, opacity: 1 },
    transition: { duration: 0.5, delay: delay },
    viewport: { once: true }
  }

  return (
    <motion.div {...framerMotionKitchenTeam} className='team_item_container'>
      <div className='image_wrapper'>
        <img src={image} alt="team-person-image" />
      </div>
      <div className='team_info_wrapper'>
        <p>{name}</p>
        <p>{profession}</p>
      </div>
    </motion.div>
  );
};

TeamMembers.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
};

export default TeamMembers;