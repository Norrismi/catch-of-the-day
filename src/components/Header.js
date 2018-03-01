import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="top">
          <h1>
            Catch
            <span className="ofThe">
              <span className="of">Of </span>
              <span className="the">The</span>
            </span>
            Day
          </h1>
          <h3 className="tagline">
            <span>Fresh Seafood Market</span>
          </h3>
        </header>
      </div>
    );
  }
}

export default Header;
