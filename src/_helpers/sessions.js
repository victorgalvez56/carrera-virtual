import i18n from '../_i18n';

const deleteCookie = (name) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

const deleteSessionCookie = () => deleteCookie('connect.sid');
  
const deleteSession = () => {
  localStorage.removeItem('userSession');
  deleteSessionCookie();
};

const getSession = () => {
  var user = localStorage.getItem('userSession');
  if(user == null){
    var userSession = {
      'isLogged':false,
      'user': { }
    };
    user = JSON.stringify(userSession);
    localStorage.setItem('userSession', user);
  }
  user = JSON.parse(user);
  return (user);
};

const updateSession = (item, value) => {
  var user = localStorage.getItem('userSession');
  if(user){
    var userSession = JSON.parse(user);
    userSession['user'][item] = value;
    user = JSON.stringify(userSession);
    localStorage.setItem('userSession', user);
  }
  user = JSON.parse(user);
  return (user);
};

const getLangs = () => { 
  var langs = localStorage.getItem('langs');
  var langsReturn = JSON.parse(langs);
  return (langsReturn);
};

const setLangs = (langs) => { 
  langs = JSON.stringify(langs);
  var langs = localStorage.setItem('langs',langs);
  return (langs);
};

const getLang = () => { 
  var lang = localStorage.getItem('lang');
  var langReturn = JSON.parse(lang);
  return (langReturn);
};

const setLang = (lang) => { 
  lang = JSON.stringify(lang);
  localStorage.setItem('lang',lang);
  return (lang);
};

const setLangById = (langId) => { 
  var langs = getLangs();
  var selectedLang = null;
  langs.map(item => {
    if(item.id==langId){
      selectedLang = item;
      i18n.changeLanguage(item.code);
    }
  })
  if(selectedLang){
    setLang(selectedLang);
  }
  return (true);
};


const getCoupon = () => { 
  var couponReturn = localStorage.getItem('coupon');
  return (couponReturn);
};

const setCoupon = (coupon) => { 
  var couponReturn = localStorage.setItem('coupon',coupon);
  return (couponReturn);
};


function setWithExpiry(key, value, ttl) {
	const now = new Date()

	// `item` is an object which contains the original value
	// as well as the time when it's supposed to expire
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
	}
	localStorage.setItem(key, JSON.stringify(item))
}

function getWithExpiry(key) {
	const itemStr = localStorage.getItem(key)
	// if the item doesn't exist, return null
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)
	const now = new Date()
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem(key)
		return null
	}
	return item.value
}

export {
  deleteSession, getSession, getLangs, setLangs, getLang, setLang, setLangById, updateSession, getCoupon, setCoupon, setWithExpiry, getWithExpiry
}
  