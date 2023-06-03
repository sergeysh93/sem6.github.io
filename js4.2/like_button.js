'use strict';

const e = React.createElement;

class ExampleComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return <div>
      <h1>Hi!</h1>
    </div>;
  }
}

const domContainer = document.querySelector('#example');
const root = ReactDOM.createRoot(domContainer);
root.render(e(ExampleComp));