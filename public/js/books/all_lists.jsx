import React from 'react';
import Card from './card.jsx';

export default class AllLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: this.props.lists
        };
    }
    componentWillMount() {
      fetch('/all_lists', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }).then (function (response) {return response.json()})
        .then(function (json) {
          this.setState({
            lists : json
          })
        }.bind(this));
    }
    handleClick (item) {
      this.props.showDetails(item);
;    }
    render() {
      var lists = this.state.lists;
      var CardTemplate = lists.map(function(item, index){
        var boundClick = this.handleClick.bind(this, item);
        return(
          <div key={index}>
            <Card list={item} showDetails={boundClick}/>
          </div>
        )
      }.bind(this))
        return (
          <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match">
            {CardTemplate}
          </div>
        )
    }
}
