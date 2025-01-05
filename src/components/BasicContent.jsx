// import PropTypes from 'prop-types';


// const BasicContent = ({imageUrl, smallText,smallerText, bigText,}) => {
//     return ( 
//         <div className="basicContainer">
//         <div className="container">
//       <div className="dFlex ">

//       <img src={imageUrl} alt="Hero Background" className="heroImage" />
//       <div className="basicTextContent">
     
//       <div className="margin-bottom margin-tiny"><h2 className="heading-style-h4">{smallText}</h2></div>
//         <h2 className="heading-style-h2">{smallerText}</h2>
//         <div className=' dFlex dFlexe'>
//       <div className='info-line-p_line margin-top margin-xsmall'></div>
        
//         <p className="basicTextBig">{bigText}</p>
//         </div>
//       </div>
//       </div>
//         </div>
//     </div>
//      );
// }
//  BasicContent.propTypes ={
//     imageUrl: PropTypes.string.isRequired,
//   bigText: PropTypes.string.isRequired,
//   smallerText: PropTypes.string.isRequired,
//   smallText: PropTypes.string.isRequired,
//  }
// export default BasicContent;

import PropTypes from 'prop-types';

const BasicContent = ({ imageUrl, smallText, smallerText, bigText, optionalBasic, TertiaryText, secondaryText }) => {
    return (
        <div className={`basicContainer ${optionalBasic ? optionalBasic : ''}`}>
            <div className="container">
                <div className="dFlex">
                    <img src={imageUrl} alt="Hero Background" className="heroImage" />
                    <div className="basicTextContent">
                        <div className="margin-bottom margin-tiny">
                            <h2 className="heading-style-h4">{smallText}</h2>
                        </div>
                        <h2 className="heading-style-h2">{smallerText}</h2>
                        <div className='dFlex dFlexe'>
                            <div className='info-line-p_line margin-top margin-xsmall'></div>
                            <div>

                            <p className="basicTextBig">{bigText}</p>
                            <br />
                            <p className="basicTextBig">{secondaryText}</p>
                            <br />
                            <p className="basicTextBig">{TertiaryText}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

BasicContent.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    bigText: PropTypes.string.isRequired,
    smallerText: PropTypes.string.isRequired,
    smallText: PropTypes.string.isRequired,
    secondaryText:  PropTypes.string,
    TertiaryText : PropTypes.string,
    optionalBasic: PropTypes.string,
}

export default BasicContent;
