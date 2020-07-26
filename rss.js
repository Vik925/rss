/*function addScript(src){
  var script = document.createElement('script');
  script.src = src;
  script.async = false; // чтобы гарантировать порядок
  document.head.appendChild(script);
}

addScript('https://cdnjs.cloudflare.com/ajax/libs/fast-xml-parser/3.17.1/parser.js'); */

async function srr(){

    const cors = 'https://cors-anywhere.herokuapp.com';
    const url = 'https://www.hongkiat.com/blog/feed/';

  
        const response = await fetch(`${cors}/${url}`, {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json'
                }
              });
             
       // console.log('response', response);
        const xmlTxt = await response.text();
      //  console.log('xmlTxt', xmlTxt);

      var jsonObj = parser.parse(xmlTxt, [options] );
      var parser = require('fast-xml-parser');
      var he = require('he');
       
      var options = {
          attributeNamePrefix : "@_",
          attrNodeName: "attr", //default is 'false'
          textNodeName : "#text",
          ignoreAttributes : true,
          ignoreNameSpace : false,
          allowBooleanAttributes : false,
          parseNodeValue : true,
          parseAttributeValue : false,
          trimValues: true,
          cdataTagName: "__cdata", //default is 'false'
          cdataPositionChar: "\\c",
          parseTrueNumberOnly: false,
          arrayMode: false, //"strict"
          attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
          tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
          stopNodes: ["parse-me-as-string"]
      };
       
      if( parser.validate(xmlData) === true) { //optional (it'll return an object in case it's not valid)
          var jsonObj = parser.parse(xmlData,options);
      }
       
      // Intermediate obj
      var tObj = parser.getTraversalObj(xmlData,options);
      var jsonObj = parser.convertToJson(tObj,options);
       
    
  
      
 };



 

 