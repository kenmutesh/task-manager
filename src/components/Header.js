import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({title, onAdd}) => { 


  return (
  <header className = 'header'>


   <h1>{title}</h1> 
    <Button onClick={onAdd} color='green' text='Add'/>
  </header>
  ) 
}
Header.defaultProps = {
  title:'Task Manager',
}

Header.propTypes={

title: PropTypes.string,
}
export default Header;
