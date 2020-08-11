
const baseUrl = 'http://localhost:2003/api'
async function request(url,data={}){
    url = baseUrl + url;
    const result = await fetch(url).then(res => res.json());
    
    return result;
}