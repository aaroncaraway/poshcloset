function onExecuted(result) {
  console.log(`We executed in tab 2`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const executing = chrome.tabs.executeScript(
  1, {
    file: "/getPoshIds.js"
});
executing.then(onExecuted, onError);