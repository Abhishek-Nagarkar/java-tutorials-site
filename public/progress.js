(function () {
	var KEY = 'sbb-progress';
	function load() { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; } }
	function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }
	function norm(p) { return p.replace(/\/$/, ''); }
	function ticks(data) {
		document.querySelectorAll('.sidebar-content a[href]').forEach(function (a) {
			var done = !!data[norm(new URL(a.href).pathname)];
			var t = a.querySelector('.done-tick');
			if (done && !t) { t = document.createElement('span'); t.className = 'done-tick'; t.textContent = '\u2713'; a.appendChild(t); }
			if (!done && t) t.remove();
		});
	}
	function init() {
		var data = load();
		ticks(data);
		var path = norm(location.pathname);
		var body = document.querySelector('.sl-markdown-content');
		if (!body || path.indexOf('/courses/') === -1) return;
		var btn = document.createElement('button');
		btn.className = 'complete-btn';
		function paint() {
			var on = !!data[path];
			btn.setAttribute('aria-pressed', on);
			btn.textContent = on ? 'Completed \u2713' : 'Mark as complete';
		}
		btn.addEventListener('click', function () {
			if (data[path]) delete data[path]; else data[path] = 1;
			save(data); paint(); ticks(data);
		});
		paint();
		body.appendChild(btn);
	}
	if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
