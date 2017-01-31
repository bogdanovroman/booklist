import React from 'react';
import Book from './book.jsx';

export default class NewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    'author': '',
                    'title': ''
                }
            ],
            title: "",
            author: "",
            description: ""
        };
    }
    incrementStateItems() {
        var newBooks = this.state.books;
        var obj = {
            'author': '',
            'title': ''
        }
        newBooks.push(obj);
        this.setState({books: newBooks})
    }
    setValue(field, event) {
        var object = {};
        object[field] = event.target.value;
        this.setState(object);
    }

    backToListsHandler() {
        this.props.backToLists();
    }
    updateStateBooks(books) {
        this.setState({books: books});
    }
    handleSubmit(event) {
        event.preventDefault();
        var data = {};
        data.title = this.state.title;
        data.description = this.state.description;
        data.author = this.state.author;
        data.books = this.state.books;
        $.ajax({
            url: '/new_list',
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            complete: function() {
                this.backToListsHandler();
            }.bind(this)
        });
    }
    render() {
        return (
            <div className="uk-card uk-card-default uk-card-hover">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="uk-card-header">
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="newlist_title">Название</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" onChange={this.setValue.bind(this, 'title')} id="newlist_title" name="newlist_title" type="text" placeholder=""/>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="newlist_description">Описание</label>
                            <div className="uk-form-controls">
                                <textarea className="uk-textarea" onChange={this.setValue.bind(this, 'description')} rows="2" id="newlist_description" name="newlist_description" type="text" placeholder=""/>
                            </div>
                        </div>
                    </div>
                    <div className="uk-card-body">
                        <Book books={this.state.books} updateStateBooks={this.updateStateBooks.bind(this)}/>
                        <div className="uk-text-center">
                            <button type="button" className="uk-button uk-button-text" onClick={this.incrementStateItems.bind(this)}>добавить еще</button>
                        </div>

                    </div>
                    <div className="uk-card-footer uk-text-right">
                        <button className="uk-button uk-button-default uk-margin-right" type="button" onClick={this.backToListsHandler.bind(this)}>охрана отмена :D</button>
                        <button className="uk-button uk-button-primary" type="submit">готово</button>
                    </div>
                </form>
            </div>
        )
    }
}
