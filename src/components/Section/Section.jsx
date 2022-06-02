import PropTypes from 'prop-types';
import css from "./Section.module.css";

function Section({ title, children }) {
  return (
    <section className={css.section}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  );
}
Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
