import axios from 'axios';

class WatermelonAPI {
  static async generateKey(token) {
    try {
      const response = await axios.get(`http://ai.api.codemelon.xyz/api/v1/ai/code/generate-key`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.log("key already exists")
    }
  }

  static async getKey(token) {
    try {
      const response = await axios.post(`http://ai.api.codemelon.xyz/api/v1/ai/code/get-key`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error getting key:', error);
    }
  }

  static async getRemainingQuota(token) {
    try {
      const response = await axios.post(`http://ai.api.codemelon.xyz/api/v1/ai/code/get-remaining-quota`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error getting remaining quota:', error);
    }
  }

  static async createChat(token) {
    try {
      const response = await axios.get(`http://ai.api.codemelon.xyz/api/v1/ai/code/chat/create`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error creating chat:', error);
    }
  }

  static async getChats(token) {
    try { 
      const response = await axios.get(`http://ai.api.codemelon.xyz/api/v1/ai/code/chats`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error getting chats:', error);
    }
  }

  static async getChat(id, token) {
    try { 
      const response = await axios.get(`http://ai.api.codemelon.xyz/api/v1/ai/code/chat?id=${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error getting chats:', error);
    }
  }

  static async deleteChat(chatId, token) {
    try {
      const response = await axios.delete(`http://ai.api.codemelon.xyz/api/v1/ai/code/chat/delete`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        params: {
          id: chatId
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error deleting chat:', error);
    }
  }

  static async getQuestions(id, token, data) {
    try {
      const response = await axios.post(
        `http://ai.api.codemelon.xyz/api/v1/ai/code/chat/getQuestions?id=${id}`,
        data,
        { 
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error getting questions:', error);
    }
  }
}

export default WatermelonAPI;
