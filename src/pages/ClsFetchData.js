import { PARSE_APPLICATION_ID, PARSE_HOST_URL, PARSE_JAVASCRIPT_KEY } from '../data/keys';
import Parse from 'parse/dist/parse.min.js';

// reference: https://youtu.be/0jwnn9sKICg
// npm install parse <-- install parse library
// Your Parse initialization configuration goes here
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

class ClsFetchData {

  // fetch json data from github
  async fetchFromGit() {
    let url = ['https://raw.githubusercontent.com/kachun8051/project-fruit/main/src/data/fruitlist.json', 
               'https://hh68057a.github.io/demo/product_demo1.json']
    let idx = 0;    
    console.log('Data source: ' + url[idx]);
    let mydata = await fetch(url[idx])
      .then((Res) => Res.json())
      .then(data => data)
      .catch((rej) => {
        console.log(rej);
    }); 
    return mydata;         
  }

  // fetch data from back4app
  async fetchFromB4A() { 
    console.log('Data source: Back4App.');
    const query = new Parse.Query('fruitlist');
    // find all rows of fruitlist
    const lstQueried = await query.find();
    // for debug
    lstQueried.forEach(
      (item) => { console.log('forEach: ' + item.attributes.name) }
    );
    let lstTmp = [];      
    let result = new Promise(
      (resolve, reject) => {
        lstQueried.forEach(
          (item, idx) => {
            let obj = {
                'id': item.attributes.seq,
                'name': item.attributes.name,
                'price': item.attributes.price,
                'image': item.attributes.image,
                'description': item.attributes.description,
                'url': item.attributes.url
            }
            lstTmp.push(obj);
            if (idx === lstQueried.length-1) {
              resolve(lstTmp);
            }
          }
        ); 
      }
    );
    result.then( 
      (value) => value
    );    
    return result;  
  }
}

export default ClsFetchData;