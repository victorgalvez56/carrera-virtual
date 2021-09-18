import { deleteSession, getSession, updateSession } from './sessions';
import config from './config';

const API_URL = config.get('apiUrl');

const baseRequestOptions = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'},
};

const postRequest = (url, body) => {
  console.log(url);
  console.log(baseRequestOptions);
  console.log(body);
  var session = getSession();
  if(session.isLogged){
    baseRequestOptions['headers']['Authorization'] = 'JWT ' + session.user.token;
  }
  const requestOptions = {
    ...baseRequestOptions,
    method: 'POST',
    body: JSON.stringify(body),
  };
  return fetch(`${API_URL}${url}`, requestOptions).then(handleResponse);
};

const getRequest = (url, params) => {
  var session = getSession();
  console.log(`${API_URL}${url}`);

  if(session.isLogged){
    baseRequestOptions['headers']['Authorization'] = 'JWT ' + session.user.token;
  }
  const requestOptions = {
    ...baseRequestOptions,
    method: 'GET',
  };
  var paramsSerialized = serializeParams(params);
  if(paramsSerialized!=""){
    paramsSerialized = '?'+paramsSerialized;
  }
  return fetch(`${API_URL}${url}${paramsSerialized}`, requestOptions).then(handleResponse);
};

const getRequestWithController = (url, params, abortController) => {
  var session = getSession();
  console.log(url);
  if(session.isLogged){
    baseRequestOptions['headers']['Authorization'] = 'JWT ' + session.user.token;
  }
  if(abortController){
    console.log("ABORT");
    console.log(abortController);
    baseRequestOptions['signal'] = abortController.signal;
  }
  const requestOptions = {
    ...baseRequestOptions,
    method: 'GET',
  };
  var paramsSerialized = serializeParams(params);
  if(paramsSerialized!=""){
    paramsSerialized = '?'+paramsSerialized;
  }
  return fetch(`${API_URL}${url}${paramsSerialized}`, requestOptions).then(handleResponse);
};

const serializeParams = (params) => {
  var str = [];
  for (var p in params) {
    if (params.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]));
    }
  }
  return str.join("&");
}

const handleResponse = (response) => {
  var session = getSession();
  const data = response.json();
  if (!response.ok) {
    console.log('[API] response is NOT OK.');
    console.log(response);
    if (response.status === 401) {
      if(session && 'user' in session && 'token' in session.user){
        var url = '/v1/users/refresh-token';
        console.log(url);

        const requestOptions = {
          ...baseRequestOptions,
          method: 'POST',
          body: JSON.stringify({
            token: session.user.token,
            email: session.user.email
          }),
        };
        return fetch(`${API_URL}${url}`, requestOptions).then(refreshToken);
      }else{
        deleteSession();
        window.location.reload(false);
      }
      return Promise.reject('Sesión expirada');
    }
  }
  else {
    console.log('[API] response OK.');
    console.log(response);
  }
  return data;
}

const handleSimpleResponse = response => {
  if (response && !response.error) {
    return(response);
  } else {
    return Promise.reject(response.error);
  }
};

const refreshToken = async (response) =>{
  const data = await response.json();
  if(response.status === 400){
    deleteSession();
    window.location.reload(false);
  }else{
    updateSession('token', data.newToken);
    window.location.reload(false);
  }
  return Promise.reject('Sesión expirada');
}

export {
  postRequest,
  getRequest,
  getRequestWithController,
  handleSimpleResponse
};
