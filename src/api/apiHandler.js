const axios = require("axios");


class apiHandler{
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.headers = {"Content-Type": "application/json"}
        this.instance = axios.create({
            baseURL: this.baseUrl,
            headers: this.headers,
            timeout: 1000,
        })
    }

    async get(endpoint) {
        try {
            const response = await this.instance(endpoint, this.headers);
            if (response.status === 200) {
                return await  response.data;
            }

        }
        catch (err) {
            console.log(err)
        }

    }

}

export default class WebApiHandler extends apiHandler {
    constructor() {
        super("http://144.172.71.12:8000");
    }

    async getProjects(){
        return await this.instance.get("/projects/")
    }

    async getProject(slug){
        return await this.instance.get(`/projects/${slug}`)
    }

    async getEvents(){
        return await this.instance.get("/events/")
    }
    async getEvent(slug){
        return await this.instance.get(`/events/${slug}`)
    }
}