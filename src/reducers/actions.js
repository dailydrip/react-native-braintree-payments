import API from "../api";

function pay(amount) {
  return dispatch => {
    API.pay(amount)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          dispatch(gotSuccessfulResponse());
        } else {
          dispatch(gotErrorResponse());
        }
      })
      .catch(err => console.log(err));
  };
}

function gotSuccessfulResponse() {
  return {
    type: "SUCCESS_RESPONSE"
  };
}

function gotErrorResponse() {
  return {
    type: "ERROR_RESPONSE"
  };
}

export default {
  pay,
  gotSuccessfulResponse,
  gotErrorResponse
};
