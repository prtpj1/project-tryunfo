import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <sectionn>
          <label htmlFor="inpt-name">
            Name:
            <br />
            <input
              data-testid="name-input"
              id="inpt-name"
              name="inpt-name"
              type="text"
            />
          </label>
          <br />
          <label htmlFor="inpt-desc">
            Description:
            <br />
            <input
              data-testid="description-input"
              id="inpt-desc"
              name="inpt-desc"
              type="textarea"
            />
          </label>
        </sectionn>
        <section>
          <label htmlFor="inpt-attr1">
            Attr1:
            <br />
            <input
              data-testid="attr1-input"
              id="inpt-attr1"
              name="inpt-attr1"
              type="number"
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
              type="number"
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
              type="number"
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
              type="text"
            />
          </label>
        </section>
        <section>
          <select
            data-testid="rare-input"
            id="inpt-rare"
            name="inpt-rare"
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
              type="checkbox"
            />
            Super Trybe Trunfo
          </label>
        </section>
        <section>
          <input
            data-testid="save-button"
            id="btn-save"
            name="btn-save"
            type="submit"
            value="Save"
          />
        </section>
      </form>
    );
  }
}

export default Form;
