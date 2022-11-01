import { LitElement, html, css } from 'lit-element';

class DataManagerComponent  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
        dataUrl: {type: String},
        dataRecords: {type: Array},
        id: {type: String}
    };
  }

  constructor() {
    super();
    this.dataUrl="https://api.datos.gob.mx/v2/Records";
    this.dataRecords=[];
    this.id="";
  }

  connection = () =>{
    let i=0;
    fetch(this.dataUrl)
    .then(res => res.json())
    .then(data => {
      for(i=0; i < 10; i++){
          this.id+=(JSON.stringify(data.results[i]["_id"]).slice(1,-1) + " , ");
        }
    }) 

  }
  render() {
    
    return html`
      <button @click=${this.connection()} > Crear conexión </button>
      <p> Esto es un ejemplo:  ${this.id} </p>
    `;
  }
}

customElements.define('data-manager-component', DataManagerComponent);