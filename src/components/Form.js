import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <section>
          <label htmlFor="inpt-name">
            Name:
            <br />
            <input
              data-testid="name-input"
              id="inpt-name"
              name="inpt-name"
              onChange={ onInputChange }
              type="text"
              value={ cardName }
            />
          </label>
          <br />
          <label htmlFor="inpt-desc">
            Description:
            <br />
            <textarea
              data-testid="description-input"
              id="inpt-desc"
              name="inpt-desc"
              onChange={ onInputChange }
              value={ cardDescription }
            />
          </label>
        </section>
        <section>
          <label htmlFor="inpt-attr1">
            Attr1:
            <br />
            <input
              data-testid="attr1-input"
              id="inpt-attr1"
              name="inpt-attr1"
              onChange={ onInputChange }
              type="number"
              value={ cardAttr1 }
            />
          </label>
          <br />
          <label htmlFor="inpt-attr2">
            Attr2:
            <br />
            <input
              data-testid="attr2-input"
              id="inpt-attr2"
              name="inpt-attr2"
              onChange={ onInputChange }
              type="number"
              value={ cardAttr2 }
            />
          </label>
          <br />
          <label htmlFor="inpt-attr3">
            Attr3:
            <br />
            <input
              data-testid="attr3-input"
              id="inpt-attr3"
              name="inpt-attr3"
              onChange={ onInputChange }
              type="number"
              value={ cardAttr3 }
            />
          </label>
        </section>
        <section>
          <label htmlFor="inpt-image">
            Image:
            <br />
            <input
              data-testid="image-input"
              id="inpt-image"
              name="inpt-image"
              onChange={ onInputChange }
              type="text"
              value={ cardImage }
            />
          </label>
        </section>
        <section>
          <select
            data-testid="rare-input"
            id="inpt-rare"
            name="inpt-rare"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </section>
        <section>
          <label htmlFor="inpt-trunfo">
            <input
              data-testid="trunfo-input"
              id="inpt-trunfo"
              name="inpt-trunfo"
              onChange={ onInputChange }
              type="checkbox"
              checked={ cardTrunfo }
            />
            Super Trybe Trunfo
          </label>
        </section>
        <section>
          <button
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            id="btn-save"
            name="btn-save"
            onClick={ onSaveButtonClick }
            type="submit"
          >
            Save
          </button>
        </section>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
