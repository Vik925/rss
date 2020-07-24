function srr(){
    const DOMPARSER = new DOMParser().parseFromString.bind(new DOMParser())


    const cors = 'https://cors-anywhere.herokuapp.com'
    const config = {
        method:'POST',
        mode: 'no-cors'
    }

    const url = 'https://hacks.mozilla.org'


    /* Fetch URLs from JSON */
   
                fetch(`${cors}/${url}`, config).then((res) => {
                    res.text().then((htmlTxt) => {
                        /* Extract the RSS Feed URL from the website */
                        try {
                            let doc = DOMPARSER(htmlTxt, 'text/html')
                            var feedUrl = doc.querySelector('link[type="application/rss+xml"]').href
                        } catch (e) {
                            console.error('Error in parsing the website');
                            return
                        }
                        /* Fetch the RSS Feed */
                        fetch(feedUrl).then((res) => {
                            res.text().then((xmlTxt) => {
                                /* Parse the RSS Feed and display the content */
                                try {
                                    let doc = DOMPARSER(xmlTxt, "text/xml")
                                    let heading = document.createElement('h1')
                                    heading.textContent = url.hostname
                                    frag.appendChild(heading)
                                    doc.querySelectorAll('item').forEach((item) => {
                                        let temp = document.importNode(document.querySelector('template').content, true);
                                        let i = item.querySelector.bind(item)
                                        let t = temp.querySelector.bind(temp)
                                        t('h2').textContent = !!i('title') ? i('title').textContent : '-'
                                        t('a').textContent = t('a').href = !!i('link') ? i('link').textContent : '#'
                                        t('p').innerHTML = !!i('description') ? i('description').textContent : '-'
                                        t('h3').textContent = url.hostname
                                        frag.appendChild(temp)
                                    })
                                } catch (e) {
                                    console.error('Error in parsing the feed')
                                }
                                if(hasBegun) {
                                    document.querySelector('output').textContent = ''; 
                                    hasBegun = false;
                                }
                                document.querySelector('output').appendChild(frag)
                            })
                        }).catch(() => console.error('Error in fetching the RSS feed'))
                    })
                }).catch(() => console.error('Error in fetching the website'))
  
};


