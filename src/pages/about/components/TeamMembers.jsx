import PropTypes from 'prop-types';

const TeamMembers = ({ image, name, profession }) => {
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
  );
};

TeamMembers.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
};

export default TeamMembers;