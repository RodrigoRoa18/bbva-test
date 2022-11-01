import { LitElement, html, css } from 'lit-element';
import "../table-component/table-component.js";
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
        dataRecords: {type: String},
        dataTest: {type: String},
        dataTestArray: {type: Array},
        id: {type: Array}
    };
  }

  constructor() {
    super();
    this.dataUrl="https://api.datos.gob.mx/v2/Records";
    this.dataRecords="";
    this.id=[];
    this.dataTestArray=[];
  }

  connection = () =>{
    let i=0;
    fetch(this.dataUrl)
    .then(res => res.json())
    .then(data => {
        this.dataRecords = data.results;
        /*En este momento se utilizo unicamente un registro de todos los que se encuentran en el JSON regresado
          sin embargo ya que se comprobo que el modelo empleado para la representacion de este solo bastaria con
          agregar una funcion extra que vaya realizando los cambios de numero en el registro para asi poder generar
          una tabla del mismo tipo para cada registro en el apartado de results.
        */
        this.dataTest = this.dataRecords[1].releases[0].contracts[0].implementation.budgetBreakdown[0].budgetClassification;
      })

  }

  firstUpdated(){
    this.connection();
  }

  render() {

    return html`
      <table-component .data=${this.dataTest}></table-component>
    `
    ;
  }
}

customElements.define('data-manager-component', DataManagerComponent);