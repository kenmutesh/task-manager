import PropTypes from 'prop-types';

const Button = ({text, color, onClick}) => {

  return <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>

  };

Button.defaultProps = {
    color: 'steelBlue'
}

Button.protoTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}
export default Button;
