var ua = navigator.userAgent.toLowerCase();
var sys = ua.match(/html5plus/);

if (sys != 'html5plus') {
	mui.openWindow = function openWindow(param, target, options) {
		if (param.target == '_blank') {
			window.open(param.url);
		} else {
			window.location.href = param.url;
		}
	}
}
mui.ready(function() {
	// 失去焦点补救
	mui('.mui-inner-wrap').on('tap', 'input,textarea', function() {
		this.focus();
	});
	//跳转链接
	mui('body').on('tap', '.goto', function() {
		mui.openWindow({
			url: this.getAttribute('data-href'),
			id: 'info'
		});
	});

});