## 4/20/20

1. Get all ids
2. Create share links with ids
3. Click the share links


## ASANA

[NOTION](https://www.notion.so/e47219b1ee95404f983fee31ba6b42ba?v=c46d85b986264cfc81636a2889210b2a)


## Get everything with classname share

```JavaScript
var x = document.getElementsByClassName("share");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = "red";
}
```

## Get all share ids on a page
```JavaScript
var x = document.getElementsByClassName("share");
var i;
var arr = []
for (i = 0; i < x.length; i++) {
    arr.push(x[i].getAttribute('data-pa-attr-listing_id'))
    //  console.log()
}
console.log(arr)
```


https://poshmark.com/listing/share?post_id=5a1ca6ce4e8d17ad920e0d97


### HELPFUL STACK OVERFLOWS

[Click Events](https://stackoverflow.com/questions/26390322/clicking-an-element-on-a-page-through-chrome-extension/26391692)


[Background jobs](https://stackoverflow.com/questions/11684454/getting-the-source-html-of-the-current-page-from-chrome-extension)


[Getting info back from script](https://stackoverflow.com/questions/14790389/return-value-from-chrome-tabs-executescript)

[Sample Extensions](https://developer.chrome.com/extensions/samples)




## DUMPING GROUND

https://di2ponv0v5otw.cloudfront.net/posts/2020/01/23/5e2a7e088557af914f57096e/s_5e2a7e1b138e189dd85fdfb8.jpg

https://poshmark.com/listing/J-Crew-Grey-Suede-Anya-Ballet-Flats-5e2a7e088557af914f57096e

function runningThings(){
    var x = document.getElementsByClassName("share");
    var i;
    var arr = []
    for (i = 0; i < x.length; i++) {
        arr.push(x[i].getAttribute('data-pa-attr-listing_id'))

    //  console.log()
    }
    console.log(arr)

    return(arr)
}

runningThings()


https://poshmark.com/listing/share?post_id=5e2a7e088557af914f57096e



var div = document.createElement('button');
div.textContent = "Sup, y'all?";
div.setAttribute('class', 'note');
div.
document.body.appendChild(div);var div = document.createElement('div');
div.textContent = "Sup, y'all?";
div.setAttribute('class', 'note');
document.body.appendChild(div);


<a href="/listing/share?post_id=5cbfde5cbb22e33c3ada9d52" class="pm-followers-share-link grey" data-ajax-method="post" data-ajax="true" data-pa-name="share_poshmark" targeturl="/listing/share"><div class="share-wrapper-con"><div class="icon-con"><i class="icon pm-logo-white"></i></div><span class="share-title">To My Followers</span></div></a>
for(const b of buttons){
    var b_id = b.getAttribute('data-pa-attr-listing_id')
    var new_href= "/listing/share?post_id=" + b_id
    var new_button = document.createElement('button')
    new_button.setAttribute('class', 'PCshare')
    new_button.setAttribute('data-ajax-method', 'post')
    new_button.setAttribute('data-ajax', 'true')
    new_button.setAttribute('href', new_href)
    document.body.appendChild(new_button)
    
    }
