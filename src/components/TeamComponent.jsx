import PropTypes from 'prop-types';

const TeamComponent = ({ name, jobTitle, teamTitle, imageUrl }) => {
  return (
    <div className="teamContainer">
      <div className="teamMember">
        <img src={imageUrl} alt={`${name}'s Avatar`} className="teamImage" />
        <div className="teamMemberContent">
          <h3 className="teamMemberName">{name}</h3>
          <h4 className="teamMemberJobTitle">{jobTitle}</h4>
          <p className="teamTitle">{teamTitle}</p>
        </div>
      </div>
    </div>
  );
};

TeamComponent.propTypes = {
  name: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  teamTitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default TeamComponent;
