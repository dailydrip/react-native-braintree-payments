const BASE_URL = "http://localhost:3000";

const api = {
  pay: function(amount) {
    const nonce = {
      amount: amount,
      payment_method_nonce: "fake-valid-nonce",
      options: {
        submit_for_settlement: true
      }
    };
    return fetch(`${BASE_URL}/pay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nonce })
    });
  }
};

export default api;
