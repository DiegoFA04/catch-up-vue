// News API Service

// Axios import connectivity
import axios from "axios";
import {LogoApiService} from "../../shared/services/logo-api.service.js";

// Create axios instance with predefined properties
const http = axios.create({
    baseURL: 'https://newsapi.org/v2'
});

// Define news api service

export class NewsApiService {
    apiKey = '60870502b5e84822b89188ed8b1992b4';
    logoApi = new LogoApiService();

    getSources(){
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
    }

    getArticlesForSource(sourceId) {
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`)
    }

    getUrlToLogo(source) {
        return this.logoApi.getUrlToLogo(source);
    }
}