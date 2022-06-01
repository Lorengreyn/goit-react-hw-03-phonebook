import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        const { name, number } = this.state;

        return (
            <form className={css.form} onSubmit={this.handleSubmit}>
                <label className={css.label}>
                    Name
                    <input
                        type="text"
                        name="name"
                        className={css.input}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={name}
                        onChange={this.handleInputChange} />
                </label>
                <label className={css.label}>
                    Number
                    <input
                        type="tel"
                        name="number"
                        className={css.input}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки, и может начинаться с +"
                        required
                        value={number}
                        onChange={this.handleInputChange}
                    />
                </label>
                <button type="submit" className={css.button}>
                    Add contact
                </button>
            </form>
        );
    }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;