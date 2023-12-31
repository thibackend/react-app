import axios from 'axios';

class ApiService {
  constructor() {
    this.baseUrl = 'https://jsonplaceholder.typicode.com'; // Replace with your API base URL
  }

  get = async (endpoint) => {
    try {
      const response = await axios.get(`${this.baseUrl}${endpoint}`);
      return response.data;
    } catch (error) {
      console.error('GET error:', error);
      throw error;
    }
  }

  post = async (endpoint, data) => {
    try {
      const response = await axios.post(`${this.baseUrl}${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error('POST error:', error);
      throw error;
    }
  }

  patch = async (endpoint, data) => {
    try {
      const response = await axios.patch(`${this.baseUrl}${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error('PATCH error:', error);
      throw error;
    }
  }

  delete = async (endpoint) => {
    try {
      const response = await axios.delete(`${this.baseUrl}${endpoint}`);
      return response.data;
    } catch (error) {
      console.error('DELETE error:', error);
      throw error;
    }
  }
}

export default new ApiService();