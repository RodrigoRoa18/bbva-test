import { LitElement, html, css } from 'lit-element';

class TableComponent  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      
    `;
  }
}

customElements.define('table-component', TableComponent);