import parser from 'https://cdnjs.cloudflare.com/ajax/libs/fast-xml-parser/3.17.1/parser.js';

  
  const cors = 'https://cors-anywhere.herokuapp.com';
  const url = 'https://www.hongkiat.com/blog/feed/';

  let heading = document.querySelector('h1');
    heading.textContent = url;

   

  async function fetching(){
    
    const response = await fetch(`${cors}/${url}`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }
    });
    
    const xmlTxt = await response.text();
  
    const options = {
    attributeNamePrefix: '@_',
    attrNodeName: 'attr', //default is 'false'
    textNodeName: '#text',
    ignoreAttributes: true,
    ignoreNameSpace: false,
    allowBooleanAttributes: false,
    parseNodeValue: true,
    parseAttributeValue: false,
    trimValues: true,
    cdataTagName: '__cdata', //default is 'false'
    cdataPositionChar: '\\c',
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"

    stopNodes: ['parse-me-as-string'],
  };

  const jsonObj = await parser.parse(xmlTxt, options);

  const result = jsonObj;
  return result;

  /*  const frag = document.createDocumentFragment();
    frag.appendChild(heading);
    //console.log(frag);

    parser = new DOMParser();
    doc = parser.parseFromString(xmlTxt,"text/xml");

   doc.querySelectorAll('item').forEach((item) => {
    let temp = document.importNode(document.querySelector('template').content, true);
    let i = item.querySelector.bind(item);
    let t = temp.querySelector.bind(temp);
    t('h2').textContent = !!i('title') ? i('title').textContent : '-'
    t('a').textContent = t('a').href = !!i('link') ? i('link').textContent : '#'
    t('p').innerHTML = !!i('description') ? i('description').textContent : '-'
    t('h3').textContent = url;
    frag.appendChild(temp); 
}); */
  
};

fetching();
