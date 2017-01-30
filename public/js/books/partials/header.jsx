import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : this.props.user,
            logged : this.props.logged
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.user != this.props.user) {
            this.setState({user: nextProps.user});
        }
        this.forceUpdate();
    }
    render() {
        if (this.state.user.length) {
          console.log('is user');
          var auth = <div>is user</div>
        } else {
          var auth = <button is class="uk-button uk-button-text" uk-toggle="target: #modal-example">войти</button>
        }
        return (
          <nav is class="uk-navbar-container uk-margin-bottom" uk-navbar>
              <div className="uk-navbar-left">
                  <a className="uk-navbar-item uk-logo" href="#">
                    <img is src="public/images/open-book.svg" alt="" />
                  </a>
              </div>
              <div className="uk-navbar-right">
                <div className="uk-navbar-item">
                  {auth}
                </div>
              </div>
          </nav>
        )
    }
}
