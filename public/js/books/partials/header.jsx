import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name : this.props.userName,
            user_url : this.props.userUrl
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.user_name != this.props.user_name) {
            this.setState({user_name: nextProps.user_name});
        }
        if (nextProps.user_url != this.props.user_url) {
            this.setState({user_url: nextProps.user_url});
        }
        this.forceUpdate();
    }
    render() {
        if (this.state.user_name.length > 0) {
          console.log(this.state.user_name, ' is user');
          var auth = <div>{this.state.user_name}</div>
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
