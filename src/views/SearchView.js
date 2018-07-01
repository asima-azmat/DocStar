import React, { Component } from "react";
import {
  ReactiveBase,
  CategorySearch,
  SingleRange,
  ResultCard,
  RangeSlider
} from "@appbaseio/reactivesearch";
import { Link } from "react-router-dom";
import {Footer} from '../components/Footer';
import Header from '../components/HeaderNav';

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
          app="docsearch"
          credentials="0cchhVQ1S:c86f3050-ffeb-493d-b540-ccea2b52ccc1"
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

              <SingleRange
                componentId="ratingsfilter"
                title="Filter by ratings"
                dataField="age"
                data={[
                  { start: "4", end: "5", label: "4 stars and up" },
                  { start: "3", end: "5", label: "3 stars and up" },
                  { start: "2", end: "5", label: "2 stars and up" },
                  { start: "1", end: "5", label: "see all ratings" }
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
                dataField="addres.city.keyword"
                title="Cities"
                style={{
                  padding: "5px",
                  marginTop: "40px",
                  marginRight: "50px"
                }}
              />

              <MultiDropdownList
                componentId="PostCode"
                dataField="addres.postcode.keyword"
                title="Post Code"
                style={{
                  padding: "5px",
                  marginTop: "40px",
                  marginRight: "50px"
                }}
              />

              <MultiDropdownList
                componentId="Country"
                dataField="addres.country.keyword"
                title="Country"
                style={{
                  padding: "5px",
                  marginTop: "40px",
                  marginRight: "50px"
                }}
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
                  "Specialization"
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
                    <h4>{res.address}</h4>
                    <h3>{res.doctorParams.q}</h3> {"★".repeat(res.age)}
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
