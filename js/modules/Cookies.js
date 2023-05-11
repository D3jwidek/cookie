export class Cookies{

    constructor() {
        this.checkCookiesEnabled();
    }
    checkCookiesEnabled(){
        // console.log(navigator.cookieEnabled);
        if(navigator.cookieEnabled === false) {
            alert('Masz wylacozna oblsuge ciasteczek');
            return;
        }
    }

    SetCookie(options) {};

    getCookie (name) {};

    removeCookie(name) {};
}