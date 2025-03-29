import Cookies from "js-cookie";

export function writeCookie(cookie) {
    Cookies.set("name", cookie.name);
    Cookies.set("email", cookie.email);
    Cookies.set("token", cookie.token);

    console.log(`${document.cookie}`);
  }

export function readCookie() {
    var searchName = "email=";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var c = cookies[i];
      while (c.charAt(0) == ` `) c = c.substring(1, c.length);
      if (c.indexOf(searchName) == 0)
        return c.substring(searchName.length, c.length);
    }
    return null;
}