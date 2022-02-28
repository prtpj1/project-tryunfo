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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <section>
          <label htmlFor="inptName">
            Name:
            <br />
            <input
              data-testid="name-input"
              id="inptName"
              name="inptName"
              onChange={ onInputChange }
              type="text"
              value={ cardName }
            />
          </label>
          <br />
          <label htmlFor="inptDesc">
            Description:
            <br />
            <textarea
              data-testid="description-input"
              id="inptDesc"
              name="inptDesc"
              onChange={ onInputChange }
              value={ cardDescription }
            />
          </label>
        </section>
        <section>
          <label htmlFor="inptAttr1">
            Attr1:
            <br />
            <input
              data-testid="attr1-input"
              id="inptAttr1"
              name="inptAttr1"
              onChange={ onInputChange }
              type="number"
              value={ cardAttr1 }
            />
          </label>
          <br />
          <label htmlFor="inptAttr2">
            Attr2:
            <br />
            <input
              data-testid="attr2-input"
              id="inptAttr2"
              name="inptAttr2"
              onChange={ onInputChange }
              type="number"
              value={ cardAttr2 }
            />
          </label>
          <br />
          <label htmlFor="inptAttr3">
            Attr3:
            <br />
            <input
              data-testid="attr3-input"
              id="inptAttr3"
              name="inptAttr3"
              onChange={ onInputChange }
              type="number"
              value={ cardAttr3 }
            />
          </label>
        </section>
        <section>
          <label htmlFor="inptImage">
            Image:
            <br />
            <input
              data-testid="image-input"
              id="inptImage"
              name="inptImage"
              onChange={ onInputChange }
              type="text"
              value={ cardImage }
            />
          </label>
        </section>
        <section>
          <select
            data-testid="rare-input"
            id="inptRare"
            name="inptRare"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </section>
        <section>
          {hasTrunfo
            ? (
              <div htmlFor="inptTrunfo">
                <input
                  data-testid="trunfo-input"
                  id="inptTrunfo"
                  name="inptTrunfo"
                  onChange={ onInputChange }
                  type="checkbox"
                  checked={ cardTrunfo }
                />
                <span>Você já tem um Super Trunfo em seu baralho</span>
              </div>)
            : (
              <label htmlFor="inptTrunfo">
                <input
                  data-testid="trunfo-input"
                  id="inptTrunfo"
                  name="inptTrunfo"
                  onChange={ onInputChange }
                  type="checkbox"
                  checked={ cardTrunfo }
                />
                Super Trybe Trunfo
              </label>
            )}
        </section>
        <section>
          <button
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            id="btnSave"
            name="btnSave"
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
