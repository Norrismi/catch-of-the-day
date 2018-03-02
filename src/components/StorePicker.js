import React from "react";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <div>
        <p>I am the store picker!!!</p>
      </div>
    );
  }
}

export default StorePicker;
