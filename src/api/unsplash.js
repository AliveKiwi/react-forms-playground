import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 1OLothho6Nr77AKRRCSPvBoMMzNPKH5p5rDHivEItqY'
  }
});
