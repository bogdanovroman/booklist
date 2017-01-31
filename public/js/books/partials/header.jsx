import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            url: this.props.url,
            isLogged : this.props.isLogged
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.name != this.props.name) {
            this.setState({name: nextProps.name});
        }
        if (nextProps.url != this.props.url) {
            this.setState({url: nextProps.url});
        }
        if (nextProps.isLogged != this.props.isLogged) {
            this.setState({isLogged: nextProps.isLogged});
        }
        this.forceUpdate();
    }
    render() {
      
        var authTemplate; 
        if (this.state.isLogged == 'yes') {
          authTemplate = <div>
              <div>{this.state.name}</div>
              <div className="uk-margin-left">
                <img className="uk-border-circle" src={this.state.url} width="50" height="50"/>
              </div>
            </div>
        } else if (this.state.isLogged == 'no') {
          authTemplate = <button is class="uk-button uk-button-text" uk-toggle="target: #modal-example">войти</button>
        } else {
          authTemplate = <span></span>
        }
        return (
            <nav is class="uk-navbar-container uk-margin-bottom" uk-navbar>
                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="#">
                        <img is src="public/images/open-book.svg" alt=""/>
                    </a>
                </div>
                <div className="uk-navbar-right"> 
                    <div className="uk-navbar-item">
                        {authTemplate}
                    </div>
                </div>
            </nav>
        )
    }
}
