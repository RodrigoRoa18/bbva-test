import { LitElement, html, css } from 'lit-element';
import {unsafeHTML} from 'https://unpkg.com/lit-html@latest/directives/unsafe-html.js?module';
import { TableComponentStyles } from './table-component-style';

class TableComponent  extends LitElement {

    static get styles() {
        return [
          TableComponentStyles
        ];
      }

  static get properties() {
    return {
        data: {type: Object},
        header: {type: Array},
        rows: {type: Array},
        htmlTable: {type: String}
    };
  }

  constructor() {
    super();
    this.data=[];
    this.header=[];
    this.rows=[];
    this.htmlTable="";
  }

  setTable(){
    this.header=[];
    this.rows=[];
    let i=0;
    let j=0;
    this.header.push(JSON.stringify(Object.keys(this.data[0])[1]));
    for(i=0; i< Object.keys(this.data).length ;i++){
        
        this.header.push(JSON.stringify(Object.keys(this.data[0])[i+2]));
        for(j=1; j < Object.keys(this.data[i]).length ; j++)
        {            
            this.rows.push(JSON.stringify(Object.values(this.data[i])[j]));

        }
    }
    this.htmlTable=this.makeTableHTML(this.header,(this.rows))
  }

  makeTableHTML(header, rows) {
    var result ="<table>"
        result += "<tr>";
        for(var i=0; i<header.length; i++){
            result+="<th>" + header[i] + "</th>";
        }
        console.log(result +"Hasta aqui")
        result += "</tr>" + "<tr>";
        for(var j=0; j  < rows.length; j++){

            result+="<td>"+ rows[j] +"</td>"
            if((j+1)%5 == 0 && j>0)
            {
                result += "</tr>" + "<tr>";
                console.log(result)
            }
            
        }
         result += "</table>";

        return result;
    }

  render() {
    return html`
      <button @click=${this.setTable}>show table data</button>
      ${unsafeHTML(this.htmlTable)}
    `;
  }


}

customElements.define('table-component', TableComponent);