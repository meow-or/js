function WarningBanner(props) {
  if(!props.warn) {
    return null;
  }

  return (
    <div className="warning">
        Warning!
    </div>
  );
}

class Page extends React.Component {
    constructor(props) {
      super(props);

      this.state = { showWarning: true };
      this.handkeToggleClick = this.handkeToggleClick.bind(this);
    }

    handkeToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }

    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handkeToggleClick}>
            {this.state.showWarning ? 'Hide': 'Show'}
          </button>
        </div>
      );
    }
}

ReactDOM.render(
  <Page/>,
  document.querySelector('#root')
);