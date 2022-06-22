import axios from 'axios';

const SERV_URL = "http://localhost:8080/stockall";

class InventoryService {

    getAllInventory(){
        return axios.get(SERV_URL);
    }

    addInventory(inventory){
        return axios.post(SERV_URL, inventory);
    }

}

export default new InventoryService()