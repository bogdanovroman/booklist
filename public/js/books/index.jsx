import React from 'react';
import ReactDOM from 'react-dom';
import AllLists from './all_lists.jsx';
import List from './list.jsx';
import NewList from './new_list.jsx';
import Header from './partials/header.jsx';
import Modal from './partials/modal.jsx';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            show: 'lists',
            user: {
              "id" : "",
              "name" : "",
              "url" : ""
            },
        };
    }
    componentDidMount () {
      window.fbAsyncInit = function() {
          FB.init({
              appId: '592619720942995',
              xfbml: false,
              status: true,
              version: 'v2.8'
          });
          FB.AppEvents.logPageView();
      };

      (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {
              return;
          }
          js = d.createElement(s);
          js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
    authHandler(){
      FB.login(function(response) {
          var user = {};
          if (response.status === 'connected') {
              FB.api("/me", function(response) {
                  if (response && !response.error) {
                      user.id   = response.id;
                      user.name = response.name;
                  }
              });
              FB.api("/me/picture", function(response) {
                  if (response && !response.error) {
                      user.url = response.data.url;
                  }
              });
          } else if (response.status === 'not_authorized') {
              console.log('The person is logged into Facebook, but not your app.');
          }
          this.someFunc(user);
      }.bind(this), {scope: 'public_profile,email'});
    }
    someFunc(user){
      this.setState({
        user : user,
        logged : true
      })
    }
    showDetails(list) {
        this.setState({show: 'list', list: list})
    }
    setStateToLists() {
        this.setState({show: 'lists'})
    }
    setStateToNewList() {
        this.setState({show: 'newlist'})
    }
    render() {
        var data;
        switch (this.state.show) {
            case 'lists':
                data = <div className="uk-container uk-margin-large-bottom">
                    <h2 className="uk-heading-bullet">
                        Все списки
                        <button className="uk-button uk-button-primary uk-position-center-right" onClick={this.setStateToNewList.bind(this)}>
                            <span is uk-icon="icon: plus"></span>
                            <span className="uk-margin-small-left">создать</span>
                        </button>
                    </h2>
                    <AllLists lists={this.state.lists} showDetails={this.showDetails.bind(this)}/>
                </div>
                break;
            case 'list':
                data = <div className="uk-container uk-margin-large-bottom">
                    <h2 className="">
                        <button className="uk-button uk-button-default" onClick={this.setStateToLists.bind(this)} id="back-to-lists-btn">
                            <span is uk-icon="icon: chevron-left"></span>
                            <span className="uk-text-middle">назад</span>
                        </button>
                    </h2>
                    <List list={this.state.list}/>
                </div>
                break;
            case 'newlist':
                data = <div className="uk-container uk-margin-large-bottom">
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
        return (
            <div>
                <Header name={this.state.user.name} url={this.state.user.url}/>
                {data}
                <Modal onClickHandler={this.authHandler.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Container/>, document.getElementById('root'));
