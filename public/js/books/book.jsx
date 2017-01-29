import React from 'react';

export default class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books : this.props.books
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.items != this.props.items) {
            this.setState({items: nextProps.items});
        }
        this.forceUpdate();
    }
    setBookAuthor(item, index, event){
      var books = this.state.books;
      books[index].author = event.target.value;
      this.setState({
        books: books
      }, this.props.updateStateBooks(this.state.books))
    }
    setBookTitle(item, index, event){
      var books = this.state.books;
      books[index].title = event.target.value;
      this.setState({
        books: books
      }, this.props.updateStateBooks(this.state.books))
    }
    render() {
        var books = this.state.books;
        var bookTemplate = books.map(function(item, index){
          var boundAuthorChange = this.setBookAuthor.bind(this, item, index);
          var boundTitleChange = this.setBookTitle.bind(this, item, index);
          return(
            <div className="uk-margin uk-grid" key={index}>
              <div className="uk-width-1-2@m">
                <label className="uk-form-label" htmlFor={"newbook_author-" + index}>Фамилия автора</label>
                <div className="uk-form-controls">
                    <input
                      className="uk-input uk-width-1"
                      id={"newbook_author-" + index}
                      name={"newbook_author-" + index}
                      onChange={boundAuthorChange}
                      type="text" placeholder=""/>
                </div>
              </div>
              <div className="uk-width-1-2@m">
                <label className="uk-form-label" htmlFor={"newbook_title-" + index}>Название книги</label>
                <div className="uk-form-controls">
                    <input
                      className="uk-input uk-width-1"
                      id={"newbook_title-" + index}
                      name={"newbook_title-" + index}
                      type="text"
                      onChange={boundTitleChange}
                      placeholder=""/>
                </div>
              </div>
            </div>
          )
        }.bind(this));
        return (
          <div>
            {bookTemplate}
          </div>
        )
    }
}
