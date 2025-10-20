export function setCookie(name, value, minute = 1, path = "/") {
  let seconds = minute * 60;
  document.cookie = `${name}=${value}; max-age=${seconds}; path=${path}`;
}

export function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

export function deleteCookie(name, path = "/") {
  document.cookie = `${name}=; max-age=0; path=${path}`;
}
