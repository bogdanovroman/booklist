import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <nav is class="uk-navbar-container uk-margin-bottom" uk-navbar>
              <div className="uk-navbar-left">
                  <a className="uk-navbar-item uk-logo" href="#">
                    <img is src="public/images/open-book.svg" alt="" />
                  </a>
              </div>
              <div className="uk-navbar-right">
                <div className="uk-navbar-item">
                  <button is class="uk-button uk-button-text" uk-toggle="target: #modal-example">войти</button>
                </div>
              </div>
          </nav>
        )
    }
}
