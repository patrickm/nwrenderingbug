	document.addEventListener("DOMContentLoaded", function(event) {
		var isNw = typeof nw !== 'undefined';
		var openWindow = function(url, callback) {
			if (isNw) {
				nw.Window.open(url, {}, callback);
			} else {
				chrome.app.window.create(url, {}, callback);
			}
		};
		
		var runTest = function(windowFile) {
			document.querySelector('div.intro').style.display = 'none';
			document.querySelector('div.outro').style.display = 'block';
			openWindow(windowFile + '.html', function(appWin) {
				setTimeout(function() {
					if (appWin) {
						appWin.close();
					}
					[].forEach.call(document.querySelectorAll('div.test p'), function(el) {
						el.style.display = 'block';
					});
				}, 500);
			});
		};
		
		document.querySelector('a.start-test-fail').addEventListener('click', function(evt) {
			evt.preventDefault();
			runTest('window-fail');
		});
		document.querySelector('a.start-test-pass').addEventListener('click', function(evt) {
			evt.preventDefault();
			runTest('window-pass');
		});
		document.querySelector('a.restart').addEventListener('click', function(evt) {
			evt.preventDefault();
			if (isNw) {
				chrome.runtime.reload();
			} else {
				window.location = window.location;
			}
		});
	});
