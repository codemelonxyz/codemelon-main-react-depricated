class waitlistApi {
  // ...existing code...

  static async joinWaitlist(token) {
    return fetch('https://api.codemelon.xyz/api/v1/waitlist/watermelon/join', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json());
  }

  static async checkUser(token) {
    return fetch('https://api.codemelon.xyz/api/v1/waitlist/watermelon/checkUser', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json());
  }
}

export default waitlistApi;
