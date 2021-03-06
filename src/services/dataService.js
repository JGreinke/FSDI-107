import axios from "axios"; 

var catalog = [
    {
        id: "123123123123",
        title: "Balloon Experience", 
        image: "balloons.jpeg",
        description: "product description",
        price: 200, 
        category: "Sky's The Limit"
    },
    {
        id: "123123123123",
        title: "Kayaking Experience", 
        image: "kayak.jpg",
        description: "product description",
        price: 100, 
        category: "Water Experience"
    },
    {
        id: "123123123123",
        title: "Gondola Experience", 
        image: "gondola.jpg",
        description: "product description",
        price: 100, 
        category: "Water Experience"
    },
    {
        id: "123123123123",
        title: "Train Experience", 
        image: "train.jpg",
        description: "product description",
        price: 300, 
        category: "Travel Experience"
    },
    {
        id: "123123123123",
        title: "Glamping Experience", 
        image: "glamping.jpg",
        description: "product description",
        price: 400, 
        category: "Local Experience"
    },
    {
        id: "123123123123",
        title: "Boat / Jet Ski Experience", 
        image: "jetski.jpg",
        description: "product description",
        price: 200, 
        category: "Water Experience"
    },
    {
        id: "123123123123",
        title: "Pottery Experience", 
        image: "pottery.jpg",
        description: "product description",
        price: 50, 
        category: "Local Experience"
    },
    {
        id: "123123123123",
        title: "VR Experience", 
        image: "VR.jpg",
        description: "product description",
        price: 150, 
        category: "Local Experience"
    },
    {
        id: "123123123123",
        title: "Helicopter Experience", 
        image: "helicopter.jpg",
        description: "product description",
        price: 200, 
        category: "Sky's The Limit"
    },
    
]

class DataService{

    async getCatalog() {
        // this is called Async / await function - you can't use "await" without async
        let response = await axios.get("http://127.0.0.1:5000/api/catalog"); 
        console.log("test", response.data); 
        return response.data; 

        // return mock data without server
        // return catalog; 
    }
    async getWeather(lat, lon){
        let apiKey ="20b39ad898448a59e4c56dc3337cc9b1";
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

        let response = await axios.get(url);
        // console.log(response.data);
        return response.data;
    }
    registerProduct() {

    }
}

export default DataService;