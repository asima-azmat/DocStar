import React, { Component } from 'react';
import { withRouter, Link} from 'react-router-dom';
import { Button, Card, CardTitle, CardText, Avatar} from 'react-md';
import Rater, {Star} from 'react-rater'

class FeaturedDoctor extends Component
{
    constructor(props)
    {
        super(props);
    }

    static getDoctorName(doctor)
    {
        return doctor.firstName+' '+doctor.lastName;
    }

    static getAddress(address)
    {
        return address.addressline+', '+address.city;
    }

    render()
    {
        const fDoctor = this.props.fDoctor;
        return (
            <Card>
                <CardTitle title={FeaturedDoctor.getDoctorName(fDoctor)} subtitle={fDoctor.doctorParams.specialization} avatar={<Avatar random>{fDoctor.firstName.substr(0,1)}</Avatar>}/>
                <CardText>
                    <Rater total={5} rating={fDoctor.doctorParams.reviews.rating} interactive={false}/>
                    <p>Experience: {fDoctor.doctorParams.experience}</p>
                    <p>Address: {FeaturedDoctor.getAddress(fDoctor.address)}</p>
                    <Link to={`/doctor/${fDoctor._id}`}>View Full Profile</Link>
                </CardText>
            </Card>
        );
    }
}

export default withRouter(FeaturedDoctor);