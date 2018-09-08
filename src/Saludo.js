import React, { Component } from "react";

class Saludo extends Component {
  //const {nombre} = this.props;
  render() {
    return <div>Hola {this.props.nombre}</div>;
  }
}

export default Saludo;
