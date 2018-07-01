"use strict";

import React from "react";
import { Card, Button, TextField } from "react-md";
import { withRouter } from "react-router-dom";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Checkbox,
  Radio
} from "react-bootstrap";

import { AlertMessage } from "./AlertMessage";
import Page from "./Page";

const style = { maxWidth: 500 };

class UserSignup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      gender: "",
      addressline: "",
      postcode: "",
      city: "",
      country: "",
      phoneNo: "",
      age: "",
      languages: [],

      specialization: {},
      experience: "",
      isPremium: "",
      reviews: {},
      opening: "",
      closing: ""
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangefirstName = this.handleChangefirstName.bind(this);
    this.handleChangelastName = this.handleChangelastName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangegender = this.handleChangePhone.bind(this);
    this.handleChangeaddressline = this.handleChangePhone.bind(this);
    this.handleChangepostcode = this.handleChangePhone.bind(this);
    this.handleChangecity = this.handleChangePhone.bind(this);
    this.handleChangelanguages = this.handleChangePhone.bind(this);
    this.handleChangeexperience = this.handleChangePhone.bind(this);
    this.handleChangeopening = this.handleChangePhone.bind(this);
    this.handleChangeclosing = this.handleChangePhone.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  handleChangeUsername(value) {
    this.setState(Object.assign({}, this.state, { username: value }));
  }

  handleChangePassword(value) {
    this.setState(Object.assign({}, this.state, { password: value }));
  }

  handleChangefirstName(e) {
    this.setState({ firstName: e.target.value });
  }

  handleChangelastName(e) {
    this.setState({ lastName: e.target.value });
  }

  handleChangePhone(e) {
    this.setState({ phoneNo: e.target.value });
  }

  handleChangeAddress(e) {
    this.setState({ address: e.target.value });
  }

  handleChangeAge(e) {
    this.setState({ age: e.target.value });
  }

  handleChangegender(e) {
    this.setState({ gender: e.target.value });
  }

  handleChangeaddressline(e) {
    this.setState({ addressline: e.target.value });
  }

  handleChangepostcode(e) {
    this.setState({ postcode: e.target.value });
  }
  handleChangelanguages(e) {
    this.setState({ languages: e.target.value });
  }
  handleChangeexperience(e) {
    this.setState({ experience: e.target.value });
  }
  handleChangeopening(e) {
    this.setState({ opening: e.target.value });
  }
  handleChangeclosing(e) {
    this.setState({ closing: e.target.value });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password,

      profileData: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        gender: this.state.gender,
        address: {
          addressline: this.state.address,
          postcode: this.state.postcode,
          city: this.state.password,
          country: this.state.country
        },

        phoneNo: this.state.phoneNo,
        age: this.state.age,
        languages: [],
        isDoctor: "",

        doctorParams: {
          specialization: {},
          experience: this.state.experience,
          isPremium: "",
          reviews: {},
          openingHours: [
            {
              opening: "",
              closing: ""
            }
          ]
        }
      }
    };
    console.log(user);

    this.props.onSubmit(user);
  }

  render() {
    return (
      <Page>
        <Card style={style} className="md-block-centered">
          <form
            className="md-grid"
            onSubmit={this.handleSubmit}
            onReset={() => this.props.history.goBack()}
          >
            <TextField
              label="Username"
              id="UsernameField"
              type="text"
              className="md-row"
              required={true}
              value={this.state.username}
              onChange={this.handleChangeUsername}
              errorText="Username is required"
            />
            <TextField
              label="Password"
              id="PasswordField"
              type="password"
              className="md-row"
              required={true}
              value={this.state.password}
              onChange={this.handleChangePassword}
              errorText="Password is required"
            />

            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange}
                />

                <ControlLabel>First Name</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.firstName}
                  placeholder="Enter firstName"
                  onChange={this.handleChangefirstName}
                />
                <FormControl.Feedback />
              </FormGroup>

              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <ControlLabel>Last Name</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.lastName}
                  placeholder="Enter lastName"
                  onChange={this.handleChangelastName}
                />
                <FormControl.Feedback />
              </FormGroup>

              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <ControlLabel>Age</ControlLabel>
                <FormControl
                  type="number"
                  value={this.state.age}
                  placeholder="Enter"
                  onChange={this.handleChangeAge}
                />
                <FormControl.Feedback />
              </FormGroup>

              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <ControlLabel>Phone Number</ControlLabel>
                <FormControl
                  type="number"
                  value={this.state.phoneNo}
                  placeholder="Enter"
                  onChange={this.handleChangePhone}
                />
                <FormControl.Feedback />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Select Langugaes you can speak</ControlLabel>
                {"    "}
                <Checkbox inline>English</Checkbox>{" "}
                <Checkbox inline>German</Checkbox>{" "}
                <Checkbox inline>Urdu</Checkbox>{" "}
              </FormGroup>
              <FormGroup>
                <ControlLabel>Gender</ControlLabel>
                {"    "}
                <Radio name="Gender" inline>
                  Male
                </Radio>{" "}
                <Radio name="Gender" inline>
                  Female
                </Radio>{" "}
              </FormGroup>
            </form>

            <Button
              id="submit"
              type="submit"
              disabled={
                this.state.username == undefined ||
                this.state.username == "" ||
                this.state.password == undefined ||
                this.state.password == ""
                  ? true
                  : false
              }
              raised
              primary
              className="md-cell md-cell--2"
            >
              Register
            </Button>
            <Button
              id="reset"
              type="reset"
              raised
              secondary
              className="md-cell md-cell--2"
            >
              Dismiss
            </Button>
            <AlertMessage className="md-row md-full-width">
              {this.props.error ? `${this.props.error}` : ""}
            </AlertMessage>
          </form>
        </Card>
      </Page>
    );
  }
}

export default withRouter(UserSignup);
