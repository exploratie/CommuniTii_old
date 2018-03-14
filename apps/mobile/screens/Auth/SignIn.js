import React from "react"
import { func, object } from "prop-types"
import {
  Container,
  Item,
  Input,
  Content,
  Button,
  Text,
  Form,
  Label
} from "native-base"
import { Field, reduxForm } from "redux-form"
import { withFirebase } from "react-redux-firebase"

const formValidator = values => {
  const error = {}
  error.email = ""
  error.password = ""
  let ema = values.email
  let pass = values.password
  if (values.email === undefined) {
    ema = ""
  }
  if (values.password === undefined) {
    pass = ""
  }
  if (ema.length < 8 && ema !== "") {
    error.email = "too short"
  }
  if (!ema.includes("@") && ema !== "") {
    error.email = "@ not included"
  }
  if (pass.length > 8) {
    error.name = "max 8 characters"
  }
  return error
}

@withFirebase
@reduxForm({ form: "SignIn", validate: formValidator })
class SignInScreen extends React.PureComponent {
  static navigationOptions = () => ({
    header: null
  })

  static propTypes = {
    handleSubmit: func,
    reset: func,
    firebase: object
  }

  _renderInput = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => {
    let hasError = false
    if (error !== undefined) {
      hasError = true
    }
    return (
      <Item style={{ margin: 10 }} error={hasError} floatingLabel>
        <Label>{label}</Label>
        <Input {...input} />
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    )
  }

  _handleLogin = ({ email, password }) => {
    console.log(email, password)
    this.props.firebase.login({ email, password })
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Field label="Email" name="email" component={this._renderInput} />
            <Field
              label="Password"
              name="password"
              component={this._renderInput}
            />
          </Form>
          <Button
            style={{ margin: 10 }}
            block
            primary
            onPress={this.props.handleSubmit(this._handleLogin)}
          >
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default SignInScreen

// TODO: [REFACTOR] Break out login form into seperate container
// TODO: [REFACTOR] Create login handler container
