#rint.jquery.textWithInterval.js
Set text with interval times.

## method
+ `text`: string
+ `interval`: number(milliseconds), string(`10ms`) or string(`0.2sec`)
+ `callback`: function

```javascript
$(selector).textWithInterval(text, interval[, callback])
$(selector).textWithInterval({
    text: text,
    interval: interval, 
    callback: function () { }
})
```

## basic use
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        * { margin: 0; padding: 0; font-family: Helvetica; }
    </style>
    <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
    <script src="lib/rint.jquery.textWithInterval.js"></script>
    <script>
        $(document).ready(function () {
            $('h1').textWithInterval('Lorem ipsum dolor sit amet', '0.1sec', function () {
                $(this).css('background', 'blue');
            });
            $('h2').textWithInterval({
                text: 'Lorem ipsum dolor sit amet',
                interval: '100ms',
                callback: function () {
                    $(this).css('background', 'red');
                }
            })
        });
    </script>
</head>
<body>
    <h1></h1>
    <h2></h2>
</body>
</html>
```
