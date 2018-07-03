import React, { Component } from "react";
import {
  ReactiveBase,
  CategorySearch,
  SingleRange,
  ResultCard,
  RangeSlider,
    SingleList
} from "@appbaseio/reactivesearch";
import { Link } from "react-router-dom";
import {Footer} from '../components/Footer';
import Header from '../components/HeaderNav';
import Rater from 'react-rater'

//import './../assets/css/SearchView.css'

import {
  DataSearch,
  MultiList,
  MultiDataList,
  SelectedFilters,
  SingleDropdownList,
  MultiDropdownList,
  ResultList
} from "@appbaseio/reactivesearch";

export default class SearchView extends Component {
  onItemClickHandler(event) {
    console.log("test");
    console.log(event.target);
  }

  componentWillMount() {
     if(this.props.location.state != undefined) {
      this.setState({
        searchTerm: this.props.location.state
      });
    } else 
    {
 this.setState({
        searchTerm: ""
      });
    }
  }




  render() {
    return (
      <div className="container">
      <Header/>
        <ReactiveBase
          app="DocSearchBlog"
          credentials="5sgqwdXSN:bfe7ee53-4eee-4f12-b729-96dd299670c7"
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "40%" }}
            >
              <CategorySearch
                componentId="namesearchbox"
                dataField="firstName"
                defaultSelected= {this.state.searchTerm}
                placeholder="Search by name"
                style={{
                  padding: "5px",
                  marginTop: "40px",
                  marginRight: "50px"
                }}
              />

                <div style={{display: "none"}}>
                <SingleList
                    componentId="doctorSensor"
                    dataField="isDoctor"
                    defaultSelected={true}
                    title="Doctors"
                />
                </div>

                <SingleRange
                componentId="ratingsfilter"
                title="Filter by ratings"
                dataField="doctorParams.reviews.rating"
                data={[
                  { start: "4", end: "5", label: "4 stars and up" },
                  { start: "3", end: "5", label: "3 stars and up" },
                  { start: "2", end: "5", label: "2 stars and up" },
                    { start: "1", end: "5", label: "1 star and up" },
                  { start: "0", end: "5", label: "see all ratings" }
                ]}
                defaultSelected="see all ratings"
                style={{
                  padding: "5px",
                  marginTop: "10px"
                }}
                style={{
                  padding: "5px",
                  marginTop: "40px",
                  marginRight: "50px"
                }}
              />

              <MultiDropdownList
                componentId="CitySensor"
                dataField="address.city.keyword"
                title="Cities"
                style={{
                  padding: "5px",
                  marginTop: "40px",
                  marginRight: "50px"
                }}
                showCount={false}
              />

              <MultiDropdownList
                componentId="PostCode"
                dataField="address.postcode"
                title="Post Code"
                style={{
                  padding: "5px",
                  marginTop: "40px",
                  marginRight: "50px"
                }}
                showCount={false}
              />

              <MultiDropdownList
                componentId="Country"
                dataField="address.country.keyword"
                title="Country"
                style={{
                  padding: "5px",
                  marginTop: "40px",
                  marginRight: "50px"
                }}
                showCount={false}
              />

              <MultiDropdownList
                componentId="Languages"
                dataField="languages.keyword"
                title="Languages"
                style={{
                  padding: "5px",
                  marginTop: "40px",
                  marginRight: "50px"
                }}
                showCount={false}
              />

              <SingleDropdownList
                componentId="Specialization"
                dataField="doctorParams.specialization.keyword"
                title="Specialization"
                style={{
                  padding: "5px",
                  marginTop: "40px",
                  marginRight: "50px"
                }}
                showCount={false}
              />


            </div>
            <ResultList
              componentId="results"
              dataField="original_title"
              react={{
                and: [
                  "namesearchbox",
                  "Category_Profile",
                    "ratingsfilter",
                  "Languages",
                  "PostCode",
                  "Country",
                  "CitySensor",
                  "Specialization",
                    "doctorSensor"
                ]
              }}
              pagination={true}
              from={0}
              size={8}
              onData={res => ({
                title: (
                  <h3>
                    <Link to={`/doctor/${res._id}`}>
                      {res.firstName + " " + res.lastName || " "}
                    </Link>
                  </h3>
                ),
                image: `https://ui-avatars.com/api/?background=0D8ABC&color=fff&size=160&name=${res.firstName}+${res.lastName}`,
                description: (
                  <div style={{ lineHeight: "18px" }}>
                    <h4>{res.address.addressline}</h4>
                    <h3>{res.doctorParams.specialization}</h3>
                      <p><Rater total={5} rating={res.doctorParams.reviews.rating} interactive={false}/></p>
                  </div>
                )
              })}
              className="result-data"
              innerClass={{
                image: "result-image",
                resultStats: "result-stats"
              }}
        style={{
                  marginTop: "40px",
                }}            />
          </div>
        </ReactiveBase>
          <Footer/>
      </div>
    );
  }
}
