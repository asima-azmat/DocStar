import React, { Component } from 'react';
import { withRouter, Link} from 'react-router-dom';
import { Carousel, FormGroup, FormControl, Image} from 'react-bootstrap';
import { Media, MediaOverlay, Grid, Cell } from 'react-md';
import img from './../assets/img/carousel3.jpg';
import FeaturedBlog from '../components/FeaturedBlog';

class HomePage extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                <Image alt="HomeImage" src={img} responsive={true}/>
                <Grid>
                    <Cell size={4}>4</Cell>
                    <Cell size={4}>4</Cell>
                    <Cell size={4}>
                        <FeaturedBlog/>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default withRouter(HomePage);