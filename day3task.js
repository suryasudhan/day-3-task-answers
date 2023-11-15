
// // ans:2 , display all the country flags in the country 

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","true");
request.send(); 
request.onload = function ()
{
    var data = request.response;
    var result = JSON.parse(data);
    console.log(result);
   
    for (var i = 0; i < result.length; i++)
    {
        console.log(result[i].flag);
    }
}
 
//  ans : 3 , display all the countries names

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all","true");
request1.send(); 
request1.onload = function ()
{
    var data = request1.response;
    var result = JSON.parse(data);
    console.log(result);
    
    for (var i = 0; i < result.length; i++)
    {
        console.log(result[i].name.common);
    }

}
  // display all the region

  
var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all","true");
request2.send(); 
request2.onload = function ()
{
    var data = request2.response;
    var result = JSON.parse(data);
    console.log(result);
    
    for (var i = 0; i < result.length; i++)
    {
        console.log(result[i].region);
    }
}

// display all the subregion

var request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all","true");
request3.send(); 
request3.onload = function ()
{
    var data = request3.response;
    var result = JSON.parse(data);
    console.log(result);
    
    for (var i = 0; i < result.length; i++)
    {
        console.log(result[i].subregion);
    }
}

// display all the population

var request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all","true");
request4.send(); 
request4.onload = function ()
{
    var data = request4.response;
    var result = JSON.parse(data);
    console.log(result);
    
    for (var i = 0; i < result.length; i++)
    {
        console.log(result[i].population);
    }
}


// qustion 1
let object1 = {name: "person 1", age : 5};
   
      
let object2 = {age :5, name: "person 1"}
      
  JSON.stringify(object1) === JSON.stringify(object2)
  // false
      
//   _.isEqual(object1, object2)
  // true






