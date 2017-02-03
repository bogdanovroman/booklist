import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list
        };
    }
    render() {
        var data = this.state.list;
        var date = this.state.list.date.split('').slice(0, 10).join('').split('-');
        var dateString = date[2] + '.' + date[1] + '.' + date[0];
        
        var bookTemplate = this.state.list.items.map(function(item, index) {
            return (
              <div className="uk-card uk-card-hover uk-card-body" key={index}>
                  <h3 className="uk-card-title uk-margin-remove">{item.title}</h3>
                  <p className="uk-margin-remove">{item.author}</p>
              </div>
            )
        })
        return (
            <div className="uk-child-width-1@m uk-card-hover">
                <div className="uk-card uk-card-default uk-width-1@m">
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle uk-grid">
                            <div className="uk-width-auto">
                                <img class="uk-border-circle uk-svg" width="40" height="40"
                                  title={this.props.list.author} is uk-tooltip src="public/images/user.svg"/></div>
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom">{this.props.list.title}</h3>
                                <p className="uk-text-meta uk-margin-remove-top">
                                    <time>{dateString}</time>
                                </p>
                            </div>
                            <div className="uk-width-expand">
                                {this.props.list.description}
                            </div>
                        </div>
                    </div>
                    <div className="uk-card-body">
                      <div className="uk-grid">
                        {bookTemplate}
                      </div>

                    </div>
                    <div className="uk-card-footer uk-text-center">
                        <a href="#" className="uk-button uk-button-text">комментировать</a>
                    </div>
                </div>
            </div>
        )
    }
}
