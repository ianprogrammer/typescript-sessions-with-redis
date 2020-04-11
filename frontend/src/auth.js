import React from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      
      if (this.props.currentUser === null) {
        
        this.props.history.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.currentUser) {
        this.props.history.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }
  const mapStateToProps = state => (
    {
      currentUser: state.user.currentUser
    }
  )

  return connect(mapStateToProps, {  })(Authenticate);
}