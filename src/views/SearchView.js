import React, { Component } from 'react';
import { ReactiveBase, CategorySearch, SingleRange, ResultCard ,RangeSlider} from '@appbaseio/reactivesearch';
import { Link} from 'react-router-dom';

import './SearchView.css';

import {
  DataSearch,
  MultiList,
  SelectedFilters,
  ResultList
} from '@appbaseio/reactivesearch';



export default class SearchView extends Component {

    onItemClickHandler(event){
    console.log("test");
    console.log(event.target);
  }


  render() {
    return (
          <div className="container">

           <ReactiveBase
        app="docsearch"
        credentials="0cchhVQ1S:c86f3050-ffeb-493d-b540-ccea2b52ccc1">
          <div style={{ display: "flex", "flexDirection": "row" }}>
            <div style={{ display: "flex", "flexDirection": "column", "width": "40%" }}>
              <CategorySearch
                componentId="namesearchbox"
                dataField="firstName"
                placeholder="Search for Doctors"
                style={{
                  padding: "5px",
                  "marginTop": "40px",
                 "marginRight": "20px"

                }}
              />


               <CategorySearch
                componentId="city"
                dataField="name"
                categoryField="address.raw"
                placeholder="City"
                style={{
                  padding: "5px",
                  "marginTop": "10px"
                }}
              />


 <SingleRange
                componentId="ratingsfilter"
                title="Filter by ratings"
                dataField="age"
                data={[
                  {"start": "4", "end": "5", "label": "4 stars and up"},
                  {"start": "3", "end": "5", "label": "3 stars and up"},
                  {"start": "2", "end": "5", "label": "2 stars and up"},
                  {"start": "1", "end": "5", "label": "see all ratings"},
                ]}
                defaultSelected="4 stars and up"
                style={{
                  padding: "5px",
                  "marginTop": "10px"
                }}
              />






               <CategorySearch
                componentId="Speciality"
                dataField="name"
                categoryField="address.raw"
                placeholder="Speciality"
                style={{
                  padding: "5px",
                  "marginTop": "10px"
                }}
              />





                <RangeSlider
                    componentId="PriceSensor"
                    dataField="price"
                    title="Opening Hours"
                    range={{
                        start: 10,
                        end: 250,
                    }}
                    rangeLabels={{
                        start: '$10',
                        end: '$250',
                    }}
                    defaultSelected={{
                        start: 10,
                        end: 50,
                    }}
                    stepValue={10}
                    interval={20}
                    react={{
                        and: ['DateRangeSensor'],
                    }}
                />





           
            </div>
          <ResultList
              componentId="results"
              dataField="original_title"
              react={{
                "and": ["namesearchbox", "Category_Profile" , "ratingsfilter"]
              }}
              pagination={true}
                            from={0}

              size={8}
              onData={(res)=>(
                {

                  "title": <h3><Link to={`/doctor/${res.id}`}>{res.firstName + " " + res.lastName || " "}</Link></h3> ,
                  "image" : "http://www.allwhitebackground.com/images/3/3313.jpg",


                  "description":  (<div style={{ lineHeight: '18px' }}>
                    <h4>{res.address}</h4>
                    <h3>Speciality</h3> {+ " " + "★".repeat(res.age)}




                  </div>),


                }
              )}
              className="result-data"
              innerClass={{
                "image": "result-image",
                "resultStats": "result-stats"
              }}
            />
          </div>
        </ReactiveBase>
            </div>

    );
  }
}

