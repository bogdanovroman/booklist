import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            url: ''
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.name != this.props.name) {
            this.setState({name: nextProps.name});
        }
        if (nextProps.url != this.props.url) {
            this.setState({url: nextProps.url});
        }
        this.forceUpdate();
    }
    render() {
        var auth = <button is class="uk-button uk-button-text" uk-toggle="target: #modal-example">войти</button>

        return (
            <nav is class="uk-navbar-container uk-margin-bottom" uk-navbar>
                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="#">
                        <img is src="public/images/open-book.svg" alt=""/>
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
