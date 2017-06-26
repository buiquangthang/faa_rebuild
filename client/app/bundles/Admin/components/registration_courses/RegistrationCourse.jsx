import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import ReactOnRails from 'react-on-rails';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import {defaultMessages} from '../../../../libs/i18n/default';

export default class RegistrationCourse extends React.Component {
  constructor(props, _railsContext) {
    super(props);
    this.onDeleteHandle = this.onDeleteHandle.bind(this);
    this.onClickAccept = this.onClickAccept.bind(this);
    this.onClickReject = this.onClickReject.bind(this);
  }

  onDeleteHandle(e) {
    let {id} = this.props;
    axios.delete(`/v1/registration_courses/${id}.json`, null,
      {
        headers: {'X-CSRF-Token': csrfToken},
        responseType: 'json'
      }
    )
    .then((response) => {
      const {status, message, content} = response.data;
      if(status === 200) {
        this.props.handleDeleted(response.data.content.id, message);
      } else {
        $.growl.error({message: message});
      }
    });
  }

  onClickAccept(e) {
    this.props.callbackFromParent({showModal: true, id_register: this.props.id,
      status: 1});
  }

  onClickReject(e) {
    this.props.callbackFromParent({showModal: true, id_register: this.props.id,
      status: 2});
  }

  render() {
    const {name, email, phone, address, status, course_name, id} = this.props;
    return (
      <tr className="active">
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{address}</td>
        <td>{course_name}</td>
        <td>{status}</td>
        <td>
          {
            status == "pending" &&
              <div>
                <a href="#" className="btn btn-success" onClick={this.onClickAccept}>
                  Accept
                </a>
                <a href="#" className="btn btn-danger" onClick={this.onClickReject}>
                  Reject
                </a>
              </div>
          }
          {
            status == "contacted" &&
              <div>
                <a href="#" className="btn btn-danger" onClick={this.onClickReject}>
                  Reject
                </a>
              </div>
          }
          {
            status == "rejected" &&
              <div>
                <a href="#" className="btn btn-success" onClick={this.onClickAccept}>
                  Accept
                </a>
              </div>
          }                    
        </td>
        <td>
          <a href="#" className="btn btn-danger" onClick={this.onDeleteHandle}><i className="fa fa-times" aria-hidden="true"></i></a>
        </td>
      </tr>
    );
  }
}
