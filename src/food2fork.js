import axios from "axios";

export default () => 
  axios({
    baseURL: 'food2fork.com',
    method:'get',
    url:'/api/search?key=c0172c962f73f5feeaddc283613ce9ef&q=',
  })
  .catch(console.error)



