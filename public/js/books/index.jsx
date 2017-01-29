import React from 'react';
import ReactDOM from 'react-dom';
import AllLists from './all_lists.jsx';
import List from './list.jsx';
import NewList from './new_list.jsx';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            show: 'lists'
        };
    }
    showDetails (list) {
      this.setState({
        show: 'list',
        list: list
      })
    }
    setStateToLists () {
      this.setState({
        show: 'lists'
      })
    }
    setStateToNewList () {
      this.setState({
        show: 'newlist'
      })
    }
    render() {
        var data;
        switch (this.state.show) {
            case 'lists':
                data =
                <div>
                    <h2 className="uk-heading-bullet">
                      Все списки
                      <button className="uk-button uk-button-primary uk-position-center-right"
                        onClick={this.setStateToNewList.bind(this)}>
                        <span is uk-icon="icon: plus"></span>
                        <span className="uk-margin-small-left">создать</span>
                        </button>
                    </h2>
                    <AllLists
                      lists={this.state.lists}
                      showDetails={this.showDetails.bind(this)}
                      />
                </div>
                break;
            case 'list':
                data = <div>
                    <h2 className="">
                      <button className="uk-button uk-button-default"
                              onClick={this.setStateToLists.bind(this)}
                              id="back-to-lists-btn"
                              >
                        <span is uk-icon="icon: chevron-left"></span>
                        <span className="uk-text-middle">назад</span>
                        </button>
                    </h2>
                    <List list={this.state.list}/>
                </div>
                break;
            case 'newlist' :
            data = <div>
                <h2 className="uk-heading-bullet">
                  Создать новый
                </h2>
                <NewList backToLists={this.setStateToLists.bind(this)}/>
            </div>
            break;
            default:
                data = <div>dasdasd</div>
                break;
        }
        return (data)
    }
}

ReactDOM.render(
    <Container/>, document.getElementById('root'));
