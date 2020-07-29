function srr(){
  const cors = 'https://cors-anywhere.herokuapp.com';
  const url = new URL ('https://www.hongkiat.com/blog/feed/');
  let heading = document.querySelector('h1');
    heading.textContent = url.host;

  async function fetching(){
    const response = await fetch(`${cors}/${url}`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }
    });
    
    const xmlTxt = await response.text();
    parser = new DOMParser();
    docXml = parser.parseFromString(xmlTxt,"application/xml");
    
    for (let i = 2; i < 12; i++) {
    let namber = i - 1;
    let idDiv = document.getElementById(namber);
    let tit =  docXml.getElementsByTagName("title")[i].childNodes[0].nodeValue; 
    let url = docXml.getElementsByTagName('link')[i].childNodes[0].nodeValue; 
    
    idDiv.querySelector('h2').innerHTML = `Article №${namber}  «${tit}»`;
    idDiv.querySelector('a').innerHTML = url; 
    idDiv.querySelector('a').href = url; 
    idDiv.querySelector('p').innerHTML = docXml.getElementsByTagName('description')[i].childNodes[0].nodeValue; 
    };
  };
  fetching();
};


