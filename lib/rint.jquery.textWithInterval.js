$.fn.textWithInterval = function (text, interval, callback) {
    // 변수를 선언합니다.
    var self = this;
    var $self = $(this);
    var time = 0;

    
    // 조건을 사용합니다.
    if ($.isPlainObject(text) && text.text && text.interval) {
        // 변수를 선언합니다.
        var _text = text.text || '';
        var interval = text.interval;
        var callback = text.callback;

        // 호출합니다.
        $(this).textWithInterval(_text, interval, callback);

        // 리턴합니다.
        return;
    } else if ($.isNumeric(interval)) {
        time = interval;
    } else if (interval && $.type(interval) == 'string' && interval.indexOf('sec') != -1) {
        time = parseFloat(interval) * 1000;
    } else if (interval && $.type(interval) == 'string' && interval.indexOf('ms') != -1) {
        time = parseFloat(interval);
    } else {
        throw 'Unknown Exception';
    }

    // 시간을 제어합니다.
    var current = 1;
    function loop() {
        // 변수를 선언합니다.
        var currentText = text.substr(0, current++);

        // 글자를 입력합니다.
        $self.text(currentText);

        // 재귀를 수행합니다.
        if (current < text.length) {
            setTimeout(loop, time);
        } else if(current == text.length) {
            setTimeout(function () {
                loop();
                callback && callback.bind(self)();
            }, time);
        }
    }
    loop();
};