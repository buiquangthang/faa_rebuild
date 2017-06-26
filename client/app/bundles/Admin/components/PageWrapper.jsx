import React from 'react';
import PageHeader from './PageHeader.jsx';
import CertificationList from './certifications/CertificationList';
import CourseList from './courses/CourseList';
import EditCourse from './courses/EditCourse';
import NewCourse from './courses/NewCourse';
import EditCertification from './certifications/EditCertification';
import NewCertification from './certifications/NewCertification';
import NewsCategoryIndex from './news_categories/NewsCategoryIndex';
import NewsCategoryEdit from './news_categories/NewsCategoryEdit';
import NewsCategoryNew from './news_categories/NewsCategoryNew';
import CourseCategoriesList from './course_categories/CourseCategoriesList';
import EditCourseCategory from './course_categories/EditCourseCategory';
import NewCourseCategory from './course_categories/NewCourseCategory';
import UserList from './users/UserList';
import EditUser from './users/EditUser';
import NewUser from './users/NewUser';
import User from './users/User';
import FeedbacksList from './feedbacks/FeedbacksList';
import NewsList from './newses/NewsList';
import EditNews from './newses/EditNews';
import NewNews from './newses/NewNews';
import RegistrationCourseIndex from './registration_courses/RegistrationCourseIndex';
import {Route, Switch} from 'react-router-dom';

export default class PageWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <Switch>
            <Route exact path="/admin/certifications" component={CertificationList}/>
            <Route path="/admin/certifications/:id/edit" component={EditCertification}/>
            <Route exact path="/admin/certifications/new" component={NewCertification}/>
            <Route exact path="/admin/news_categories" component={NewsCategoryIndex}/>
            <Route exact path="/admin/news_categories/:id/edit" component={NewsCategoryEdit}/>
            <Route exact path="/admin/news_categories/new" component={NewsCategoryNew}/>
            <Route exact path="/admin/feedbacks" component={FeedbacksList}/>
            <Route exact path="/admin/courses" component={CourseList}/>
            <Route exact path="/admin/courses/:id/edit" component={EditCourse}/>
            <Route exact path="/admin/courses/new" component={NewCourse}/>
            <Route exact path="/admin/course_categories" component={CourseCategoriesList}/>
            <Route exact path="/admin/course_categories/:id/edit" component={EditCourseCategory}/>
            <Route exact path="/admin/course_categories/new" component={NewCourseCategory}/>
            <Route exact path="/admin/users" component={UserList}/>
            <Route exact path="/admin/users/new" component={NewUser}/>
            <Route path="/admin/users/:id/edit" component={EditUser}/>
            <Route exact path="/admin/newses" component={NewsList}/>
            <Route exact path="/admin/newses/:id/edit" component={EditNews}/>
            <Route exact path="/admin/newses/new" component={NewNews}/>
            <Route exact path="/admin" component={CourseList}/>
            <Route exact path="/admin/registration_courses" component={RegistrationCourseIndex}/>
          </Switch>
        </div>
      </div>
    );
  }
}
