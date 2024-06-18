export class RevenuesServices{
    constructor(connectionApi, url){
        this.connectionApi = connectionApi;
        this.url = url;
    }

    async getAllCategory() {
        return await this.connectionApi.get(`${this.url}/categories/getAllCategories`);
    }
}