chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("index.html",
    { 
       id: "framelessWinID",
       innerBounds: {
         width: 360,
         height: 300,
         left: 600,
         minWidth: 220,
         minHeight: 220
      }
    }
  );
});
