// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict'

// Script code to inject on page
// Selects images then returns array of their currentSrc
const scriptCode =
  `(function() {
      let images = document.getElementsByClassName("covershot");
      let srcArray =
           Array.from(images).map(function(image) {
             return image.currentSrc;
           });
      return srcArray
    })();`;

// Declare add image function to save downloaded images
function addImage(url) {
  
  console.log('getting here to addImage')
  chrome.storage.local.get('savedImages', function(result) {
    // Check if storage has exsisting arrays
    // If array found, blank array is replaced with found array
    // If no array, we add to created blank array
    let downloadsArray = result.savedImages || [];
    // Images are added
    downloadsArray.push(url);
    // Chrome stores the new array with the new image
    chrome.storage.local.set({'savedImages': downloadsArray}, function() {
      if (chrome.runtime.lastError) {
        console.log(chrome.runtime.lastError);
      } else {
        console.log('Image saved successfully');
      };
    });
  });
};

// Grabs the imageDiv from the popup
let imageDiv = document.getElementById('image_div');
function setUp(array) {

  chrome.storage.local.get(
      ['saveImages', 'thumbnails'], function(config) {
    for (let src of array) {
      let newImage = document.createElement('img');
      let lineBreak = document.createElement('br');
      let newButton = document.createElement('a');
      newImage.src = src;

      const imageIdArray = src.split("/")

      newButton.href = imageIdArray[imageIdArray.length - 2]
      

      console.log(newImage)
      // Add an onclick event listener
      newImage.addEventListener('click', function() {

        newImage.href = "https://poshmark.com/listing/share?post_id=5e8049ef9c33781153441879"
        alert(newButton.href)

        
        
        // // Downloads and image when it is clicked on
        // chrome.downloads.download({url: newImage.src});
        // // Checks if extension is set to store images
        // if (config.saveImages === true) {
        //   // If true, call addImage function
        //   addImage(newImage.src);
        // };
      });
      // Checks extension thumbnail settings
      if (config.thumbnails === true) {
        // If on, popup displays images as thumnails
        let newDiv = document.createElement('div');
        newDiv.className = 'square';
        newDiv.appendChild(newImage);
        new
        imageDiv.appendChild(newDiv);

      } else {
        // If off, images are displayed at full size
        imageDiv.appendChild(newImage);
      };
      imageDiv.appendChild(lineBreak);
    };
  });
};

// Runs script when popup is opened
chrome.tabs.executeScript({code: scriptCode}, function(result) {
  
  setUp(result[0]);
});


