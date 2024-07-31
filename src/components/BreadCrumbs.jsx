import PropTypes from 'prop-types';

const BreadCrumbs = ({ home, links, pageName }) => {
  return (
    <div className="breadCrumbs">
      <div className="container">
        <div className="crumbsWrap">
          <p>{pageName}</p>
          <span>
            <a className="hyper-link" href={home.href}>{home.label}</a> / {links}
          </span>
        </div>
      </div>
    </div>
  );
};

BreadCrumbs.propTypes = {
  home: PropTypes.shape({
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  links: PropTypes.string.isRequired, 
  pageName: PropTypes.string.isRequired
};

export default BreadCrumbs;
