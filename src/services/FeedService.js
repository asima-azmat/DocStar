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

    static updateBlog(id,blog) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${FeedService.baseURL()}/${id}`, blog, function(data) {
                resolve(data);
            }, function(textStatus) {
               reject(textStatus);
            });
        });
    }

    static createBlog(blog)
    {
        return new Promise((resolve, reject) => {
            HttpService.post(`${FeedService.baseURL()}/create`, blog, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}