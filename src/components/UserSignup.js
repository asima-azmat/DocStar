"use strict";

import React from "react";
import { Card, Button, TextField, SelectionControlGroup, ExpansionPanel, SelectionControl, SelectField } from "react-md";
import { withRouter } from "react-router-dom";

import { AlertMessage } from "./AlertMessage";
import Page from "./Page";

const style = { maxWidth: 500 };

class UserSignup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            gender: "Male",
            addressline: "",
            postcode: "",
            city: "",
            country: "",
            phoneNo: "",
            age: "",
            languages: [],
            isDoctor: false,

            specialization: "Dentist",
            experience: "",
            isPremium: "",
            reviews: {},
            opening: new Date(),
            closing: new Date()
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangefirstName = this.handleChangefirstName.bind(this);
        this.handleChangelastName = this.handleChangelastName.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.handleChangeAddressLine = this.handleChangeAddressLine.bind(this);
        this.handleChangePostCode = this.handleChangePostCode.bind(this);
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
        this.handleChangeIsDoctor = this.handleChangeIsDoctor.bind(this);
        this.handleChangeExperience = this.handleChangeExperience.bind(this);
        this.handleChangeSpecialization = this.handleChangeSpecialization.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return "success";
        else if (length > 5) return "warning";
        else if (length > 0) return "error";
        return null;
    }

    handleChangeEmail(value) {
        this.setState(Object.assign({}, this.state, { email: value }));
    }

    handleChangePassword(value) {
        this.setState(Object.assign({}, this.state, { password: value }));
    }

    handleChangefirstName(value) {
        this.setState(Object.assign({}, this.state, { firstName: value }));
    }

    handleChangelastName(value) {
        this.setState(Object.assign({}, this.state, { lastName: value }));
    }

    handleChangeGender(value) {
        this.setState(Object.assign({}, this.state, { gender: value }));
    }

    handleChangeAddressLine(value) {
        this.setState(Object.assign({}, this.state, { addressline: value }));
    }

    handleChangePostCode(value) {
        this.setState(Object.assign({}, this.state, { postcode: value }));
    }

    handleChangeCountry(value) {
        this.setState(Object.assign({}, this.state, { country: value }));
    }

    handleChangeCity(value) {
        this.setState(Object.assign({}, this.state, { city: value }));
    }

    handleChangeAge(value) {
        this.setState(Object.assign({}, this.state, { age: value }));
    }

    handleChangePhoneNumber(value) {
        this.setState(Object.assign({}, this.state, { phoneNo: value }));
    }

    handleChangeIsDoctor(value) {
        this.setState(Object.assign({}, this.state, { isDoctor: value }));
    }

    handleChangeExperience(value) {
        this.setState(Object.assign({}, this.state, { experience: value }));
    }

    handleChangeSpecialization(value) {
        this.setState(Object.assign({}, this.state, { specialization: value }));
    }

    handleSubmit(event) {
        const user = {
            email: this.state.email,
            password: this.state.password,

            profileData: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                gender: this.state.gender,
                address: {
                    addressline: this.state.addressline,
                    postcode: this.state.postcode,
                    city: this.state.city,
                    country: this.state.country
                },

                phoneNo: this.state.phoneNo,
                age: this.state.age,
                languages: [],
                isDoctor: this.state.isDoctor,

                doctorParams: {
                    specialization: this.state.specialization,
                    experience: this.state.experience,
                    isPremium: false,
                    reviews: {
                        rating: 0,
                        count: 0,
                        reviewArr: []
                    },
                    openingHours: {
                            opening: this.state.opening,
                            closing: this.state.closing
                    }
                }
            }
        };

        this.props.onSubmit(user);
    }

    shouldBeDisabled()
    {
        if (this.state.email == undefined || this.state.email == "" || this.state.password == undefined || this.state.password == ""
            || this.state.firstName == undefined || this.state.firstName == "" || this.state.lastName == undefined || this.state.lastName == ""
            || this.state.age == undefined || this.state.age == "" || this.state.age <= 0 || this.state.addressline == undefined || this.state.addressline == ""
            || this.state.postcode == undefined || this.state.postcode == "" || this.state.city == undefined || this.state.city == ""
            || this.state.country == undefined || this.state.country == "" || this.state.addressline == undefined || this.state.addressline == "")
            return true;
        if (this.state.isDoctor && (this.state.experience == undefined || this.state.experience == "" || this.state.specialization == undefined || this.state.specialization == ""))
            return true;
        return false;
    }

    render() {
        const Specialization_ITEMS = ["Dentist","Orthopedic","General Physician","Surgeon"];
        return (
            <Page>
                <Card style={style} className="md-block-centered">
                    <form
                        className="md-grid"
                        onSubmit={this.handleSubmit}
                        onReset={() => this.props.history.goBack()}
                    >
                        <TextField
                            label="First Name"
                            id="fnField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.firstName}
                            onChange={this.handleChangefirstName}
                            errorText="First Name is required"
                        />
                        <TextField
                            label="Last Name"
                            id="lnField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.lastName}
                            onChange={this.handleChangelastName}
                            errorText="Last Name is required"
                        />
                        <SelectionControlGroup
                            id="selection-control-group-radio-gender"
                            name="radio-gender"
                            type="radio"
                            className="md-row"
                            label="Gender"
                            defaultValue="Male"
                            onChange={this.handleChangeGender}
                            controls={[{
                                label: 'Male',
                                value: 'Male',
                            }, {
                                label: 'Female',
                                value: 'Female',
                            }]}
                        />
                        <TextField
                            label="Age"
                            id="agField"
                            type="number"
                            className="md-cell"
                            required={true}
                            value={this.state.age}
                            onChange={this.handleChangeAge}
                            errorText="Age is required"
                        />
                        <TextField
                            label="Phone Number"
                            id="pnField"
                            type="text"
                            className="md-cell"
                            value={this.state.phoneNo}
                            onChange={this.handleChangePhoneNumber}
                        />
                        <TextField
                            label="Address Line"
                            id="adField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.addressline}
                            onChange={this.handleChangeAddressLine}
                            errorText="Address is required"
                        />
                        <TextField
                            label="PostCode"
                            id="pcField"
                            type="number"
                            className="md-cell"
                            required={true}
                            value={this.state.postcode}
                            onChange={this.handleChangePostCode}
                            errorText="PostCode is required"
                        />
                        <TextField
                            label="City"
                            id="ctField"
                            type="text"
                            className="md-cell"
                            required={true}
                            value={this.state.city}
                            onChange={this.handleChangeCity}
                            errorText="City is required"
                        />
                        <TextField
                            label="Country"
                            id="cyField"
                            type="text"
                            className="md-cell"
                            required={true}
                            value={this.state.country}
                            onChange={this.handleChangeCountry}
                            errorText="Last Name is required"
                        />

                        <SelectionControl
                            id="isDoctor"
                            type="switch"
                            label="Are you a Doctor?"
                            name="doctorQ"
                            onChange={this.handleChangeIsDoctor}
                        />

                        <TextField
                            label="Experience"
                            id="exField"
                            type="text"
                            className="md-row"
                            value={this.state.experience}
                            onChange={this.handleChangeExperience}
                        />

                        <SelectField
                            id="specialization"
                            label="Specialization"
                            placeholder="Specialization"
                            className="md-row"
                            menuItems={Specialization_ITEMS}
                            onChange={this.handleChangeSpecialization}
                            defaultValue="Dentist"
                        />

                        <TextField
                            label="Email"
                            id="emailField"
                            type="email"
                            className="md-row"
                            required={true}
                            value={this.state.email}
                            onChange={this.handleChangeEmail}
                            errorText="Email is required"
                        />
                        <TextField
                            label="Password"
                            id="passwordField"
                            type="password"
                            className="md-row"
                            required={true}
                            value={this.state.password}
                            onChange={this.handleChangePassword}
                            errorText="Password is required"
                        />

                        <Button
                            id="submit"
                            type="submit"
                            disabled={this.shouldBeDisabled()}
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
