import React from 'react';

export default () => {
    return(
      <nav className="navbar fixed-top navbar-expand-lg navbar-light">
      <a className="navbar-brand reem-kufi-font dark-text" href="#">nowfeed.</a>
      <button className="navbar-toggler toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link reem-kufi-font" href='#outlets'>Outlets</a>
          </li>
          <li>
            <a className="nav-link reem-kufi-font" href='#topstories'>Top Stories</a>
          </li>
        </ul>
      </div>
    </nav>
    )
  }
