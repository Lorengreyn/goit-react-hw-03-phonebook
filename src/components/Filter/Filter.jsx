import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        className={css.input}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;