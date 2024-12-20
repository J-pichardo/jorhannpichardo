document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

function lti_launch( vars, target ) {
						var query = '';
						var new_tab = false;

						for(var key in vars) {
							if(query.length == 0) {
								query += '?' + key + '=' + encodeURIComponent(vars[key]);
							}
							else {
								query += '&' + key + '=' + encodeURIComponent(vars[key]);
							}
						}

						var url = '/d2l/customization/pearsonlti/6606/Launch' + query;(target == '_blank') ? window.open( url, '_blank' ) : location.replace( url );}</script><script src="./Non-Responsive Layout_files/iframe-client.js.download"></script><script src="./Non-Responsive Layout_files/embeds.js.download" type="module"></script><script>document.addEventListener('DOMContentLoaded', function() {
					window.D2L.EmbedRenderer.renderEmbeds(document.body);
				});</script><script src="./Non-Responsive Layout_files/mathjax.js.download" type="module"></script><script>document.addEventListener('DOMContentLoaded', function() {
						if (document.querySelector('math') || /\$\$|\\\(|\\\[|\\begin{|\\ref{|\\eqref{/.test(document.body.innerHTML)) {
							document.querySelectorAll('mspace[linebreak="newline"]').forEach(elm => {
								elm.setAttribute('style', 'display: block; height: 0.5rem;');
							});

							window.D2L.MathJax.loadMathJax({
								outputScale: 1.5,
								renderLatex: true,
								enableMML3Support: false
							});
						}
					});</script><script src="./Non-Responsive Layout_files/prism.js.download" type="module"></script><script>document.addEventListener('DOMContentLoaded', function() {
					document.querySelectorAll('.d2l-code').forEach(code => {
						window.D2L.Prism.formatCodeElement(code);
					});
				});</script><script src="./Non-Responsive Layout_files/creator.js.download" type="module"></script><script>document.addEventListener('DOMContentLoaded', async () => {
					const activities = [];
					const practices = [];
					const allPractices = document.querySelectorAll('.d2l-practice');
					const elements = document.querySelectorAll('.d2l-element');
					let layouts = [...document.querySelectorAll('.d2l-cplus-layout')];
					const tables = document.querySelectorAll('table');
					const contentStylerStyleLinks = document.querySelectorAll('head > link[href="https://templates.lcs.brightspace.com/lib/assets/css/styles.min.css"]');
					const contentStylerOverides = document.querySelectorAll('head > link[href^="/d2l/le/contentstyler/"][data-override="override"]');

					layouts = layouts.filter((layout) => layout.closest('.d2l-element.mceNonEditable') === null);

					for (const practice of allPractices) {
						const activityContainer = practice.hasAttribute('data-d2l-activity-href');
						if (activityContainer) {
							activities.push(practice);
						}
						else {
							practices.push(practice);
						}
					}

					if (layouts.length > 0) {
						window.D2L.Creator.convertLayouts(layouts);
					}
					if (elements.length > 0) {
						window.D2L.Creator.convertElements(elements, 6606, '/content/', 'True');
					}
					if (activities.length > 0) {
						window.D2L.Creator.convertPracticeActivities(activities, 6606, '/content/');
					}
					if (practices.length > 0) {
						window.D2L.Creator.convertPractices(practices, 6606, '/content/');
					}
					if (contentStylerStyleLinks.length > 0 && contentStylerOverides.length > 0 && tables.length > 0) {
						window.D2L.Creator.wrapTables(tables);
					}
				});</script><script>document.addEventListener('DOMContentLoaded', function() {
						if (document.documentElement.hasAttribute('lang')) return;
						document.documentElement.setAttribute('lang', 'en-us'); 						
					});</script><script>document.addEventListener('DOMContentLoaded', function() {
						if (document.head.querySelector('title')) return;
						var handleAppendTitle = function(evt) {
							if (!evt || !evt.data) return;

							try {
								var data = JSON.parse(evt.data);
								if (data.handler !== 'd2l.iframe.requestPageTitle' || !data.pageTitle) return;

								window.removeEventListener('message', handleAppendTitle, false);

								var titleElm = document.createElement('title');
								titleElm.textContent = data.pageTitle;
								document.head.appendChild(titleElm);
							} catch (e) {}	
						};

						window.addEventListener('message', handleAppendTitle, false);
						window.parent.postMessage(JSON.stringify({ handler: 'd2l.iframe.requestPageTitle' }), '*');
					});</script><script>window.addEventListener('message', function(event) { 
					if( !event.data ) {
						return;
					}

					let params;
					try {
						params = JSON.parse( event.data );
					}
					catch {
						return;
					}
					if( !params.subject || params.subject !== 'lti.frameResize' ) {
						return;
					}

					const MAX_FRAME_HEIGHT = 10000;
					if( !params.height || params.height < 1 || params.height > MAX_FRAME_HEIGHT ) {
						console.warn( 'Invalid height value received, aborting' );
						return;
					}
					const el = document.getElementsByTagName( 'iframe' );
					for ( let i=0; i < el.length; i++ ) {
						if( el[i].contentWindow === event.source ) {
							el[i].style.height = params.height + 'px';

							console.info( 'Setting iFrame height to ' + params.height );

							if( el[i].getAttribute('lockwidth') !== 'true'){
								el[i].style.width = '100%';
								console.info( 'Setting iFrame width to 100%' );
							}
						}
					}
				});