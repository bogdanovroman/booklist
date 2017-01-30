import React from 'react';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
    }
    clickHandler(){
      var modal = UIkit.modal('#modal-example');
      modal.hide();
      this.props.onClickHandler();
    }
    render() {
        return (
          <div is id="modal-example" uk-modal>
              <div className="uk-modal-dialog">
                <button is class="uk-modal-close-default" type="button" uk-close></button>
                  <div className="uk-modal-body">
                    <p className="uk-modal-title">Скоро будет работать</p>
                      <button className="uk-button uk-button-primary uk-width-1-1" onClick={this.clickHandler.bind(this)}>
                        <span>facebook</span>
                      </button>
                  </div>
              </div>
          </div>
        )
    }
}
