"use strict";

import HttpService from "./HttpService";

export default class UserService {

    constructor() {
    }

    static baseURL() {return "http://localhost:3000/auth"; }

    static register(user, pass) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/register`, {
                username: user,
                password: pass
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static login(user, pass) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/login`, {
                email: user,
                password: pass
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static logout(){
        window.localStorage.removeItem('jwtToken');
    }

    static getCurrentUser() {
        let token = window.localStorage['jwtToken'];
        if (!token) return {};

        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return {
            id : JSON.parse(window.atob(base64)).id,
            username: JSON.parse(window.atob(base64)).email,
            isDoctor: JSON.parse(window.atob(base64)).isDoctor
        };
    }

    static getCurrentUserDetails()
    {
        const userCreds = this.getCurrentUser();
        if (userCreds.id != null)
        {
            return new Promise((resolve, reject) => {
                HttpService.get(`${UserService.baseURL()}/me`, function(data) {
                    resolve(data);
                }, function(textStatus) {
                    reject(textStatus);
                });
            });
        }
        else {

        }
    }

    static isAuthenticated() {
        return !!window.localStorage['jwtToken'];
    }
}