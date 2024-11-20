class waitlistApi {
  // ...existing code...

  static async joinWaitlist(token, data) {
    return fetch('http://api.codemelon.xyz/api/v1/waitlist/watermelon/join', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json());
  }

  static async checkUser(token, data) {
    return fetch('http://api.codemelon.xyz/api/v1/waitlist/watermelon/checkUser', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json());
  }
}

export default waitlistApi;