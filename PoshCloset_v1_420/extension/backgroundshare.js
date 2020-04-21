
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



chrome.tabs.executeScript(null, {
    file: "getPoshIds.js"
  }, function(result) {
    console.log('RESULT!', result)
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

  var content = "<body><h1>My Closet!</h1></body>"
  chrome.tabs.create({url:'javascript:document.write("'+ content +'")'});

// var getText = Array();
// chrome.tabs.executeScript(null, {
//     "code": "document.getElementsByClassName(\"share\")"
// }, function (result) {
//     for (i = 0; i < result.length; i++)
//         console.log(result)
// });