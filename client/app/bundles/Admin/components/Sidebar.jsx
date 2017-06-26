import React from 'react';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import {defaultMessages} from '../../../libs/i18n/default';
import {Link} from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {formatMessage} = this.props.intl;
    return (
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav side-nav">
          <li>
            <Link to="/admin/certifications">
              <i className="fa fa-fw fa-dashboard" />
              {formatMessage(defaultMessages.adminSidebarDashboard)}
            </Link>
          </li>
          <li>
            <Link to="/admin/news_categories">
              <i className="fa fa-fw fa-newspaper-o" />
              {formatMessage(defaultMessages.adminSidebarNewsCategories)}
            </Link>
          </li>
          <li>
            <Link to="/admin/courses">
              <i className="fa fa-fw fa-calendar" />
              {formatMessage(defaultMessages.adminSidebarCourses)}
            </Link>
          </li>
          <li>
            <Link to="/admin/course_categories">
              <i className="fa fa-fw fa-dashboard" />
              {formatMessage(defaultMessages.adminSidebarCourseCategories)}
            </Link>
          </li>
          <li>
            <Link to="/admin/users">
              <i className="fa fa-fw fa-user" />
              {formatMessage(defaultMessages.adminSidebarUsers)}
            </Link>
          </li>
          <li>
            <Link to="/admin/registration_courses">
              <i className="fa fa-fw fa-table" />
              {formatMessage(defaultMessages.adminSidebarRegistrationCourses)}
            </Link>
          </li>
          <li>
            <Link to="/admin/feedbacks">
              <i className="fa fa-fw fa-envelope-o"/>
              {formatMessage(defaultMessages.adminSidebarFeedbacks)}
            </Link>
          </li>
          <li>
            <Link to="/admin/newses">
              <i className="fa fa-fw fa-pencil" />
              {formatMessage(defaultMessages.adminSidebarNewses)}
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default injectIntl(Sidebar);
