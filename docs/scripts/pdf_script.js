
function shiftLines(lines){
    if (lines.length == 1) {
        return ['', lines[0]];
    }
    return lines;
}


function makeAO () {
    var ao = {};
    ao.to_zip = document.getElementById('to_zip').value;
    ao.to_zip1 = ao.to_zip.slice(0, 3);
    ao.to_zip2 = ao.to_zip.slice(3, 7);
    ao.to_add = document.getElementById('to_add').value.trim().split('\n');
    if (ao.to_add.length == 1) {
        ao.to_add = ['', '', '', ao.to_add[0]];
    } else if (ao.to_add.length == 2) {
        ao.to_add = ['', ao.to_add[0], '', ao.to_add[1]];
    } else if (ao.to_add.length == 3) {
        ao.to_add = ['', ao.to_add[0], ao.to_add[1], ao.to_add[2]];
    }
    ao.to_add1 = ao.to_add[0];
    ao.to_add2 = ao.to_add[1];
    ao.to_add3 = ao.to_add[2];
    ao.to_add4 = ao.to_add[3];

    ao.to_name = document.getElementById('to_name').value.trim().split('\n');
    ao.to_name = shiftLines(ao.to_name);
    ao.to_name1 = ao.to_name[0];
    ao.to_name2 = ao.to_name[1];
    ao.to_tel1 = document.getElementById('to_tel1').value;
    ao.to_tel2 = document.getElementById('to_tel2').value;
    ao.to_tel3 = document.getElementById('to_tel3').value;


    ao.from_zip = document.getElementById('from_zip').value;
    ao.from_zip1 = ao.from_zip.slice(0, 3);
    ao.from_zip2 = ao.from_zip.slice(3, 7);
    ao.from_add = document.getElementById('from_add').value.trim().split('\n');
    ao.from_add = shiftLines(ao.from_add);
    ao.from_add1 = ao.from_add[0];
    ao.from_add2 = ao.from_add[1];
    ao.from_name = document.getElementById('from_name').value.trim().split('\n');
    ao.from_name = shiftLines(ao.from_name);
    ao.from_name1 = ao.from_name[0];
    ao.from_name2 = ao.from_name[1];
    ao.from_tel1 = document.getElementById('from_tel1').value;
    ao.from_tel2 = document.getElementById('from_tel2').value;
    ao.from_tel3 = document.getElementById('from_tel3').value;

    ao.desc = document.getElementById('desc').value.trim().split('\n');
    ao.desc = shiftLines(ao.desc);
    ao.desc1 = ao.desc[0];
    ao.desc2 = ao.desc[1];
    // 1行のときちょっと上げる
    ao.df = ao.desc[0] === '' ? 3 : 0;
    ao.isLight = location.search == '?light';
    console.log(ao);
    return ao;
}


function defineDoc() {
    var ao = makeAO();
    return _defineDoc(ao);
}


function maskButtonsEnable() {
    q2n('#mask button').forEach(        
        function(e, i){
            e.style.visibility = 'visible';
        }
    ); 
}
function maskButtonsDisable() {
    q2n('#mask button').forEach(        
        function(e, i){
            e.style.visibility = 'hidden';
        }
    ); 
}



function makePDF() {
    toStorage();
    var mask = document.getElementById('mask');
    mask.style.visibility = 'visible';
    mask.style['z-index'] = 100;
    maskButtonsDisable();
    sp.spin(document.getElementById('spin'));

    if(! window.Worker){  // （1）ワーカーの実装チェック
        alert('このブラウザでは利用できません。');
        throw(window.Worker);
    }
    var baseURL = window.location.href.replace(/\\/g, '/').replace(/\/[^\/]*$/, '/');
    var q = '?' + locUpdated;  // キャッシュ対策
    if (baseURL.indexOf('file://') === 0) {
        q = '?' + Math.random();  // debug and local
    }
    // ローカル環境のセキュリティエラー回避
    // http://d.hatena.ne.jp/tshino/20180106/1515218776
    var newWorkerViaBlob = function(relativePath) {
        var array = [
            'importScripts("' + baseURL + relativePath + q + '");'
        ];
        var blob = new Blob(array, {type: 'text/javascript'});
        var url = window.URL.createObjectURL(blob);
        return new Worker(url);
    };
    var newWorker = function(relativePath) {
        try {
            return newWorkerViaBlob(relativePath);
        } catch (e) {
            console.log(e);
            return new Worker(relativePath);
        }
    };

    var worker = newWorker('scripts/pdf_worker.js');
    var c = 0;  // 重複実行を避ける
    // 入力値を送る
    worker.postMessage(
        {ao: makeAO(), baseURL: baseURL, q: q, c:c}
    );
    c++;

    // メッセージ取得時の処理
    worker.onmessage = function (ev) {
        if(ev.data.err){
            sp.stop();
            alert('Error: ' + ev.data.result);
            throw('error: ' + ev.data.result);
        }

        var urlCreator = window.URL || window.webkitURL;
        var pdfUrl = urlCreator.createObjectURL(ev.data.result);
        frame1.location.href = pdfUrl;
        maskButtonsEnable();
        sp.stop();
        c = 0;
    };
    return false;
}




