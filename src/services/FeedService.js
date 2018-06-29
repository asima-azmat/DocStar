"use strict";

import HttpService from './HttpService';

export default class FeedService 
{
    constructor()
    {
    }

    static baseURL() {return "http://localhost:3000/blog" }

    static getBlogs()
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

    static getBlog(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${FeedService.baseURL()}/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving blog');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static deleteBlog(id) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${FeedService.baseURL()}/${id}`, function(data) {
                if(data.message != undefined) {
                    resolve(data.message);
                }
                else {
                    reject('Error while deleting');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static addComment(comment){
        return new Promise((resolve, reject) => {
            HttpService.post(`${FeedService.baseURL()}/doComment`, comment, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static updateMovie(movie) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${movie._id}`, movie, function(data) {
                resolve(data);
            }, function(textStatus) {
               reject(textStatus);
            });
        });
    }

    static createMovie(movie) {
        movie.id = Math.floor((Math.random() * 100000000) + 1).toString();
        movie.posters = {
            thumbnail: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
            profile: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
            detailed: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
            original: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg"
        };
        return new Promise((resolve, reject) => {
            HttpService.post(MovieService.baseURL(), movie, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}