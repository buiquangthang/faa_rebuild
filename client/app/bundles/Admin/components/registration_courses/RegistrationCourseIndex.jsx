import React from 'react';
import RegistrationCourse from './RegistrationCourse';
import {Link} from 'react-router-dom';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import {defaultMessages} from '../../../../libs/i18n/default';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import axios from 'axios';

class RegistrationCourseIndex extends React.Component {

  constructor(props, _railsContext) {
    super(props);
    this.state = {
      registration_courses: [],
      showModal: false,
      email_content: ""
    };
    this.handleDeleted = this.handleDeleted.bind(this);
    this.myCallback = this.myCallback.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleDeleted(id, message) {
    const {formatMessage} = this.props.intl;

    this.setState({
      registration_courses: this.state.registration_courses.filter(registration_course => {
        return registration_course.id !== id
      })
    });
    $.growl.notice({message: message});
  }

  myCallback(dataFromChild) {
    this.setState({ showModal: dataFromChild.showModal, id_register: dataFromChild.id_register,
      status: dataFromChild.status });
  }

  closeModal() {
    this.setState({showModal: false});
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let {id_register} = this.state;
    axios.patch(`/v1/registration_courses/${id_register}.json`,
      {
        status: this.state.status,
        email_content: this.state.email_content
      },
      {
        responseType: 'json'
      })
      .then((response) => {
        const {status, message, content} = response.data;
        if(status === 200) {
          this.setState({status: content.status, showModal: false,
            registration_courses: this.state.registration_courses.map((registration) => {
              return (registration.id === content.id) ? content : registration;
            })
          });
          $.growl.notice({message: message});
        } else {
          this.setState({errors: content});
          $.growl.notice({message: message});
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInputChange(e) {
    this.setState({ email_content: e.target.value });
  }

  componentDidMount() {
    $.getJSON('/v1/registration_courses.json', (response) => {
      this.setState({ registration_courses: response.content });
    });
  }
  render() {
    const {formatMessage} = this.props.intl;
    return (
      <div className="row">
        <div className="col-md-9 col-md-offset-2">
          <div className="certifications-table-header">
            <h2>{formatMessage(defaultMessages.adminRegistrationCoursesRegistration)}</h2>
          </div>
          <div className="table-responsive col-md-12">
            <table className="table table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th>{formatMessage(defaultMessages.adminRegistrationCoursesName)}</th>
                  <th>{formatMessage(defaultMessages.adminRegistrationCoursesEmail)}</th>
                  <th>{formatMessage(defaultMessages.adminRegistrationCoursesPhone)}</th>
                  <th>{formatMessage(defaultMessages.adminRegistrationCoursesAddress)}</th>
                  <th>{formatMessage(defaultMessages.adminRegistrationCoursesCourse)}</th>
                  <th>{formatMessage(defaultMessages.adminRegistrationCoursesStatus)}</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.registration_courses.map(registration_course => (
                    <RegistrationCourse {...registration_course} key={registration_course.id} handleDeleted={this.handleDeleted} callbackFromParent={this.myCallback}/>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form role="form" onSubmit={this.handleFormSubmit} id="edit-certification-form">
              <div className="form-group">
                <label className="control-label">
                  Noi dung lien lac
                </label>
                <textarea form="edit-certification-form" rows="5" ref="email_content"
                  name="email_content" type="text" className="form-control"
                  value={this.state.email_content} onChange={this.handleInputChange}/>
              </div>
              <div className="form-group submit-group">
                <button type="submit" className="btn btn-primary">
                  Gui
                </button>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default injectIntl(RegistrationCourseIndex);
