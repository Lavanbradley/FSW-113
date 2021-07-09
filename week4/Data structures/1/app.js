const data = require('./data.json');
const _ = require('lodash');

var printElement = function(props){
  props.forEach(element =>{
    const {name,height,mass} = element;
    console.log(name, height,mass)
  })
 
}
 
var result = _.sortBy(data, [function(o) { return o.name; }]);


result = _.sortBy(data, ['name', 'height', 'mass']);
printElement(result);