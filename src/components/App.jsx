import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import loader from '../images/loader.gif'
import { fetchFormsRequest } from '../redux/actions';

import LoginButton from './LoginButton';

import Button from './ui/Button';

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
      { this.props.loading && <div><img src={loader} width="100"/></div> }
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
