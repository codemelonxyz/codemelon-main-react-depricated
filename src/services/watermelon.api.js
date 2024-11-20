import axios from 'axios';

// curl --location 'https://ai.api.codemelon.xyz/api/v1/ai/code/generate-key' \
// --header 'SERVER_KEY: Mun1C3mX70' \
// --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5MGMwMDMyLTRmNjEtNDg3OS1iZmNlLWYwMTg5YTU1NWUyZCIsInVzZXJuYW1lIjoiYWRtaW4xMjMiLCJlbWFpbCI6InZhaWRpdHlhLnQyM2NzYWlAbnN0LnJpc2hpaG9vZC5lZHUuaW4iLCJpYXQiOjE3MzIxMDE0OTAsImV4cCI6MTczMjE4Nzg5MH0.rzv31JCF0iQPEhNfbHdi6FoIWccCaJm-CbvaUOpCXfQ' \
// --data ''


// curl --location 'https://ai.api.codemelon.xyz/api/v1/ai/code/get-key' \
// --header 'SERVER_KEY: Mun1C3mX70' \
// --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5MGMwMDMyLTRmNjEtNDg3OS1iZmNlLWYwMTg5YTU1NWUyZCIsInVzZXJuYW1lIjoiYWRtaW4xMjMiLCJlbWFpbCI6InZhaWRpdHlhLnQyM2NzYWlAbnN0LnJpc2hpaG9vZC5lZHUuaW4iLCJpYXQiOjE3MzIxMDE0OTAsImV4cCI6MTczMjE4Nzg5MH0.rzv31JCF0iQPEhNfbHdi6FoIWccCaJm-CbvaUOpCXfQ' \
// --data ''


// curl --location 'https://ai.api.codemelon.xyz/api/v1/ai/code/get-remaining-quota' \
// --header 'SERVER_KEY: Mun1C3mX70' \
// --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5MGMwMDMyLTRmNjEtNDg3OS1iZmNlLWYwMTg5YTU1NWUyZCIsInVzZXJuYW1lIjoiYWRtaW4xMjMiLCJlbWFpbCI6InZhaWRpdHlhLnQyM2NzYWlAbnN0LnJpc2hpaG9vZC5lZHUuaW4iLCJpYXQiOjE3MzIxMDE0OTAsImV4cCI6MTczMjE4Nzg5MH0.rzv31JCF0iQPEhNfbHdi6FoIWccCaJm-CbvaUOpCXfQ' \
// --data ''


// curl --location 'https://ai.api.codemelon.xyz/api/v1/ai/code/chat/create' \
// --header 'SERVER_KEY: Mun1C3mX70' \
// --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5MGMwMDMyLTRmNjEtNDg3OS1iZmNlLWYwMTg5YTU1NWUyZCIsInVzZXJuYW1lIjoiYWRtaW4xMjMiLCJlbWFpbCI6InZhaWRpdHlhLnQyM2NzYWlAbnN0LnJpc2hpaG9vZC5lZHUuaW4iLCJpYXQiOjE3MzIxMDE0OTAsImV4cCI6MTczMjE4Nzg5MH0.rzv31JCF0iQPEhNfbHdi6FoIWccCaJm-CbvaUOpCXfQ' \
// --data ''


// curl --location 'https://ai.api.codemelon.xyz/api/v1/ai/code/chats' \
// --header 'SERVER_KEY: Mun1C3mX70' \
// --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5MGMwMDMyLTRmNjEtNDg3OS1iZmNlLWYwMTg5YTU1NWUyZCIsInVzZXJuYW1lIjoiYWRtaW4xMjMiLCJlbWFpbCI6InZhaWRpdHlhLnQyM2NzYWlAbnN0LnJpc2hpaG9vZC5lZHUuaW4iLCJpYXQiOjE3MzIxMDE0OTAsImV4cCI6MTczMjE4Nzg5MH0.rzv31JCF0iQPEhNfbHdi6FoIWccCaJm-CbvaUOpCXfQ' \
// --data ''


// curl --location --request DELETE 'https://ai.api.codemelon.xyz/api/v1/ai/code/chat/delete?id=01286e5f-23f3-4189-bc8d-3c613ef48aba' \
// --header 'SERVER_KEY: Mun1C3mX70' \
// --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5MGMwMDMyLTRmNjEtNDg3OS1iZmNlLWYwMTg5YTU1NWUyZCIsInVzZXJuYW1lIjoiYWRtaW4xMjMiLCJlbWFpbCI6InZhaWRpdHlhLnQyM2NzYWlAbnN0LnJpc2hpaG9vZC5lZHUuaW4iLCJpYXQiOjE3MzIxMDE0OTAsImV4cCI6MTczMjE4Nzg5MH0.rzv31JCF0iQPEhNfbHdi6FoIWccCaJm-CbvaUOpCXfQ' \
// --data ''


// curl --location 'https://ai.api.codemelon.xyz/api/v1/ai/code/chat/getQuestions?id=null' \
// --header 'SERVER_KEY: Mun1C3mX70' \
// --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk5MGMwMDMyLTRmNjEtNDg3OS1iZmNlLWYwMTg5YTU1NWUyZCIsInVzZXJuYW1lIjoiYWRtaW4xMjMiLCJlbWFpbCI6InZhaWRpdHlhLnQyM2NzYWlAbnN0LnJpc2hpaG9vZC5lZHUuaW4iLCJpYXQiOjE3MzIxMDE0OTAsImV4cCI6MTczMjE4Nzg5MH0.rzv31JCF0iQPEhNfbHdi6FoIWccCaJm-CbvaUOpCXfQ' \
// --header 'Content-Type: application/json' \
// --data '{ 
//     "language" : "js", 
//     "framework": "React Js",
//     "uiLibrary" : "Material", 
//     "componentType" : "Card"
// }'

class WatermelonAPI {

  // key generate karega
  static async generateKey(token) {
    try {
      const response = await axios.get(`http://ai.api.codemelon.xyz/api/v1/ai/code/generate-key`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      // console.log(response)
      return response.data;
    } catch (error) {
      // console.error('Error generating key:', error);
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
