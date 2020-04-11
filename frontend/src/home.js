import React, { Component } from 'react'
import {
  Button,
  Grid,
  Header,
  Message,
} from 'semantic-ui-react'
import {logoutService, getHomeData} from './services'

import { connect } from 'react-redux'
import { logout } from './actions'
class Home extends Component {


  handleLogout = async () => {
    await logoutService()
    this.props.logout()
    this.props.history.push('/login')

  }

  handleHome = async () => {
    const homeData = await getHomeData()

    console.log(homeData)
   
   

  }

  render() {
    return (
      <div style={{ margin: '40px' }}>

        <Grid.Row>
          <Grid.Column>
            <Message>
              <Header as='h1'>Logout</Header>
              <p>
                This is a template for a simple marketing or informational website. It includes a large
                callout called a jumbotron and three supporting pieces of content. Use it as a starting
                point to create something more unique.
          </p>
              <Button color='blue' onClick={this.handleLogout}>Logout</Button>
              <Button color='blue' onClick={this.handleHome}>GetHome</Button>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    currentUser: state.user.currentUser
  }
)
export default connect(mapStateToProps, { logout })(Home)
