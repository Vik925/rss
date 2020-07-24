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

        const DOMPARSER = new DOMParser().parseFromString.bind(new DOMParser())
        var frag = document.createDocumentFragment()
        //console.log('frag', frag);

        let doc = DOMPARSER(xmlTxt, "text/xml")
        console.log('doc', doc);
        let heading = document.createElement('h1')
        heading.textContent = url.hostname
        frag.appendChild(heading);
        doc.querySelectorAll('item').forEach((item) => {
            let temp = document.importNode(document.querySelector('template').content, true);
            let i = item.querySelector.bind(item)
            let t = temp.querySelector.bind(temp)
            t('h2').textContent = !!i('title') ? i('title').textContent : '-'
            t('a').textContent = t('a').href = !!i('link') ? i('link').textContent : '#'
            t('p').innerHTML = !!i('description') ? i('description').textContent : '-'
            t('h3').textContent = url.hostname
            frag.appendChild(temp) 
        });
      
 };