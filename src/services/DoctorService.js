"use strict";

import HttpService from './HttpService';

export default class DoctorService
{
    constructor()
    {
    }

    static baseURL() {return "http://localhost:3000/doctor" }

    static getAllDoctors()
    {
        return new Promise((resolve, reject) =>
        {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getHighestRatedDoctor() {
        return new Promise((resolve, reject) => {
            HttpService.get(`${DoctorService.baseURL()}/best`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving doctor');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getDoctor(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${DoctorService.baseURL()}/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving doctor');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static addReview(id) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${DoctorService.baseURL()}/${id}/review`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving doctor');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

}