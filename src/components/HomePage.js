import React, { Component } from 'react';
import { withRouter, Link} from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { Grid, Cell, Button} from 'react-md';
import img from './../assets/img/carousel3.jpg';
import FeaturedBlog from '../components/FeaturedBlog';
import FeaturedDoctor from '../components/FeaturedDoctor';
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
        const searchTerm = event.target.searchBox.value;
        if (searchTerm.length>0)
        {
            this.props.history.push({pathname: `/search`,state : searchTerm})
        }
    }

    render()
    {
        return (
            <div>
                <Grid className="imageContainer" style={{padding: 0+'px'}}>
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
                    <Cell size={4}>
                        <FeaturedDoctor fDoctor={this.props.fDoctor}/>
                    </Cell>
                    <Cell size={4}>
                        <FeaturedBlog article={this.props.fBlog}/>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default withRouter(HomePage);