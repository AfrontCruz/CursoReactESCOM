import HOST from '../host';

class Request{
    constructor(method, body, isAuth, url){
        this.method = method;
        this.body = body;
        this.isAuth = isAuth;
        this.url = url;
    }

    async exec() {
        return await this.myFetch(HOST + this.url);
    }

    async myFetch(uri) {
        let myHeaders;
        let config;
        if( this.isAuth ){
            let auth = JSON.parse(sessionStorage.getItem('auth'));
            if( auth != null )
                myHeaders = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + auth.token }
            else
                myHeaders = { 'Content-Type': 'application/json' }
        }
        else
            myHeaders = { 'Content-Type': 'application/json' }

        if( this.method === 'GET' )
            config = { method: this.method }
        else
            config = { method: this.method, headers: myHeaders, body: JSON.stringify( this.body ) }

        let response = await fetch(uri, config);
        return await response.json();
    }
}

export default Request;