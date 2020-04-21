
// console.log(arr)
// var diyhtml = arr.toString()
// var content = "<body><h1>A Record of Your Distractions!!</h1>" + diyhtml.replace(/,/g,"</br>") + "</body>"
// chrome.tabs.create({url:'javascript:document.write("'+ content +'")'});
// console.log(arr)

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