import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

const Contact = ({ name, number, onClick }) => (
  <li className={css.item}>
    <p>
      {name}: {number}
    </p>
    <button type="button" className={css.button} onClick={onClick}>
      Delete
    </button>
  </li>
);
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Contact;