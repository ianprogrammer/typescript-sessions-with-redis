import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image,  Segment } from 'semantic-ui-react'
import { loginService } from './services'
import { connect } from 'react-redux'
import { login } from './actions'
class Login extends Component {


  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  loginUser = async (event) => {
    event.preventDefault()

    const { email, password } = this.state
    const authData = await loginService(email, password)
    
    if(authData.status === 200){
      this.props.login(authData.data)
      this.props.history.push('/home')
      
    }


  }

  render() {

    const { email, password } = this.state

    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Log-in to your account
        </Header>
          <Form size='large' onSubmit={this.loginUser}>
            <Segment stacked>
              <Form.Input fluid icon='user'  type="email"
                name="email" iconPosition='left' onChange={this.handleChange} value={email} placeholder='E-mail address' />
              <Form.Input
                fluid
                icon='lock'
                name="password"
                onChange={this.handleChange}
                value={password}
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Button color='teal' fluid size='large'>
                Login
            </Button>
            </Segment>
          </Form>
          {/* <Message>
          New to us? <a href='#' alt=''>Sign Up</a>
        </Message> */}
        </Grid.Column>
      </Grid>
    )
  }
}



const mapStateToProps = state => (
  {
    currentUser: state.user.currentUser
  }
)


export default connect(mapStateToProps, { login })(Login)