import React, { Component } from 'react';
import { withRouter, Link} from 'react-router-dom';
import { Carousel, FormGroup, FormControl, Image} from 'react-bootstrap';
import { Media, MediaOverlay, Grid, Cell, Button, Card, CardTitle, CardText, Avatar} from 'react-md';
import img from './../assets/img/carousel3.jpg';
import FeaturedBlog from '../components/FeaturedBlog';
import './../assets/css/Cell.css'
import Rater, {Star} from 'react-rater'

class HomePage extends Component
{
    constructor(props)
    {
        super(props);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchSubmit(event)
    {
        alert(event.target.searchBox.value);
    }

    render()
    {
        return (
            <div>
                <Grid className="imageContainer">
                    <Image alt="HomeImage" src={img} responsive={true}/>
                    <div className="centeredSearchDiv">
                        <form onSubmit={this.handleSearchSubmit}>
                            <Button icon primary swapTheming className="centeredSearchButton" type='submit'>search</Button>
                            <input id='searchBox' className="centeredSearch" placeholder="Search Doctors by Name, Specialization or Area"/>
                        </form>
                    </div>
                </Grid>
                <Grid>
                    <Cell size={4} className="cellClass" style={{margin: 2+'px'}}>4</Cell>
                    <Cell size={4} className="cellClass" style={{margin: 2+'px'}}>
                        <Card>
                            <CardTitle title={this.props.fDoctor.firstName} subtitle={this.props.fDoctor.doctorParams.qualification} avatar={<Avatar random>{this.props.fDoctor.firstName.substr(0,1)}</Avatar>}/>
                            <CardText>
                                <Rater total={5} rating={this.props.fDoctor.doctorParams.reviews.rating} interactive={false}/>
                                <p>
                                    The <code>CardText</code> component is really just useful for displaying any
                                    content with some additional padding.
                                </p>
                            </CardText>
                        </Card>
                    </Cell>
                    <Cell size={4} className="cellClass" style={{margin: 2+'px'}}>
                        <FeaturedBlog article={this.props.fBlog}/>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default withRouter(HomePage);