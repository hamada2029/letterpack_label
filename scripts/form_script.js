function isHalfCode(c) {
    return (
        (c >= 0x0 && c < 0x81) ||
        (c == 0xf8f0) ||
        (c >= 0xff61 && c < 0xffa0) ||
        (c >= 0xf8f1 && c < 0xf8f4)
    );
}

var wRatio = 0.5;  // 全角半角の比率

function CountWidth(str) {
    var r = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (isHalfCode(c)) {
            r += wRatio;
        } else {
            r += 1;
        }
    }
    return r;
}


function checkLen(){

    var limits = {
        to_zip: 7 * wRatio,
        to_tel1: 4 * wRatio,
        to_tel2: 4 * wRatio,
        to_tel3: 4 * wRatio,
        from_zip: 7 * wRatio,
        from_tel1: 4 * wRatio,
        from_tel2: 4 * wRatio,
        from_tel3: 4 * wRatio
    };

    $('input[type="text"]').each(
        function(i, e){
            if(CountWidth(e.value) > limits[e.id]){
                e.style.backgroundColor='#eeabaf';
            }else{
                e.style.backgroundColor='';
            }
        }
    );

}


function checkAreaLen() {
    var limits = {
        to_add: [14, 4],
        to_name: [13, 2],
        from_add: [20, 2],
        from_name: [20, 2],
        desc: [19, 2]
    };

    $('textarea').each(
        function(i, e){
            var lines = e.value.split('\n');

            if(lines.length > limits[e.id][1]){
                e.style.backgroundColor='#eeabaf';
                return;
            }

            for (var ii = 0; ii < lines.length; ii++) {
                if(CountWidth(lines[ii]) > limits[e.id][0]){
                    e.style.backgroundColor='#eeabaf';
                    return;
                }
            }

            e.style.backgroundColor='';

        }
    );
}


function clearAll() {
    if(! confirm('全て削除します。')){
        return;
    }
    $('input[type="text"]').each(
        function (i, e) {
            e.value = '';
        }
    );
     $('textarea').each(
        function (i, e) {
            e.value = '';
        }
    );
}

function reverse() {
    var ar = ['zip', 'add', 'name', 'tel1', 'tel2', 'tel3'];
    for (var i = 0; i < ar.length; i++) {
        var e = ar[i];
        var to_val = $('#to_' + e).val();
        var from_val = $('#from_' + e).val();
        $('#from_' + e).val(to_val);
        $('#to_' + e).val(from_val);
    }
}

