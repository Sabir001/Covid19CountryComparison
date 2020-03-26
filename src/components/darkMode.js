import React from "react";

class DarkMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      initial: true
    };
  }

  componentDidMount() {
    let darkOrNormal = false;
    if (localStorage.getItem("darkMode") === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        darkOrNormal = true;
      }
    } else {
      // eslint-disable-next-line
      darkOrNormal = localStorage.getItem("darkMode") == "true";
    }
    document.body.className = darkOrNormal ? "dark" : "light";
    this.setState({
      darkMode: darkOrNormal,
      initial: false
    });
  }

  handleTheme = () => {
    localStorage.setItem("darkMode", !this.state.darkMode);
    document.body.className = this.state.darkMode ? "light" : "dark";
    this.setState({
      darkMode: !this.state.darkMode
    });
  };

  render() {
    return (
      <>
        {!this.state.initial && (
          <div className="wrapper">
            <div className="toggle">
              <input
                className="toggle-input"
                checked={this.state.darkMode}
                type="checkbox"
                onChange={this.handleTheme}
              />
              <div className="toggle-bg"></div>
              <div className="toggle-switch">
                <div className="toggle-switch-figure"></div>
                <div className="toggle-switch-figureAlt"></div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default DarkMode;
