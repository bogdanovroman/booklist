import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.list != this.props.list) {
            this.setState({list: nextProps.list});
        }
        this.forceUpdate();
    }
    onDetailsButtonClickHandler() {
        this.props.showDetails();
    }
    render() {
        var data = this.state.list;
        var date = this.state.list.date.split('').slice(0, 10).join('').split('-');
        var dateString = date[2] + '.' + date[1] + '.' + date[0];
        return (
            <div>
                <div className="uk-margin uk-card uk-card-default uk-card-hover">
                    <div className="uk-card-header">
                        <div className="uk-grid uk-grid-small uk-flex-middle">
                            <div className="uk-width-auto">
                                <img class="uk-border-circle uk-svg" title={data.userData.name} is uk-tooltip width="40" height="40" src={data.userData.url}/>
                            </div>
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom">{data.title}</h3>
                                <p className="uk-text-meta uk-margin-remove-top">
                                    <time>{dateString}</time>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="uk-card-body">
                        <p>{data.description}</p>
                    </div>
                    <div className="uk-card-footer uk-text-right">
                        <button className="uk-button uk-button-text" onClick={this.onDetailsButtonClickHandler.bind(this)}>детали</button>
                    </div>
                </div>
            </div>
        )
    }
}
