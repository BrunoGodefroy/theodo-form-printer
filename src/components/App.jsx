import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchFormsRequest } from '../redux/actions';
import LoginButton from './LoginButton';
import Button from './ui/Button';
import Loader from './ui/Loader';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(event) {
    event.preventDefault();
    this.props.fetchFormsRequest();
  }

  render() {
    return <div>
      <h1>Theodo Project Form - Print Me</h1>
      { this.props.isClientLoaded && <LoginButton /> }
      { this.props.loggedIn && <Button onClick={ this.handleUpdate }>Uptade latest forms</Button> }
      <Loader loading={ this.props.loading } />
      <ul>
        { Object.keys(this.props.forms).map(project =>
          <li key={ `key-${project}` }>
            <a target="_blank" href={ this.props.forms[project] }>{ project }</a>
          </li>
        ) }
      </ul>
    </div>;
  }
}

App.propTypes = {
  isClientLoaded: React.PropTypes.bool.isRequired,
  forms: React.PropTypes.object.isRequired,
  loggedIn: React.PropTypes.bool.isRequired,
  loading: React.PropTypes.bool.isRequired,
  fetchFormsRequest: React.PropTypes.func.isRequired,
}

const mapStateToProps = ({ loggedIn, loading, forms, isClientLoaded }) => ({
  isClientLoaded,
  forms,
  loggedIn,
  loading,
});

const mapDispatchToProps = {
  fetchFormsRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
