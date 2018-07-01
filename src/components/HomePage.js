import React, { Component } from 'react';
import { withRouter, Link} from 'react-router-dom';
import { Carousel, FormGroup, FormControl, Image} from 'react-bootstrap';
import { Media, MediaOverlay, Grid, Cell, Button} from 'react-md';
import img from './../assets/img/carousel3.jpg';
import FeaturedBlog from '../components/FeaturedBlog';
import './../assets/css/Cell.css'

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
                    <Cell size={4} className="cellClass" style={{margin: 2+'px'}}>4</Cell>
                    <Cell size={4} className="cellClass" style={{margin: 2+'px'}}>
                        <FeaturedBlog/>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default withRouter(HomePage);