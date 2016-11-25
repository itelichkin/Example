
class Fetch{
    get(url:string):Promise<Response>{
        return fetch(url);
    }
}

export default Fetch;
