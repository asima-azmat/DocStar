import React, { Component } from "react";
import {
  ReactiveBase,
  CategorySearch,
  SingleRange,
  ResultCard,
  RangeSlider
} from "@appbaseio/reactivesearch";
import { Link } from "react-router-dom";
import {Footer} from '../components/Footer'

//import './../assets/css/SearchView.css'

import {
  DataSearch,
  MultiList,
  MultiDataList,
  SelectedFilters,
  MultiDropdownList,
  ResultList
} from "@appbaseio/reactivesearch";

export default class SearchView extends Component {
  onItemClickHandler(event) {
    console.log("test");
    console.log(event.target);
  }

  componentWillMount() {
    if (this.props.searchTerm != null) {
      this.setState({
        searchTerm: this.props.searchTerm
      });
    } else {
    }
  }




  render() {
    return (
      <div className="container">
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
                defaultSelected= {searchTerm}
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
                defaultSelected="4 stars and up"
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

              <MultiDropdownList
                componentId="Specialization"
                dataField="doctorParams.qualification.keyword"
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
                image: "http://www.allwhitebackground.com/images/3/3313.jpg",
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
            />
          </div>
        </ReactiveBase>
          <Footer/>
      </div>
    );
  }
}
