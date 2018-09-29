

onmessage = function (ev) {

    function blobCallback(rBlob){
        // UIスレッド側にメッセージを送付する
       postMessage(rBlob);
    }


    try {
        var dt = ev.data;
        if(dt.c > 0){return;}
        // なぜか相対URL使えなかった
        // 更新しそうにないスクリプト
        importScripts(dt.baseURL + 'script/mplus-2m-regular.js');
        importScripts(dt.baseURL + 'script/imagedata_plus.js');
        importScripts(dt.baseURL + 'script/imagedata_light.js');
        importScripts(dt.baseURL + 'script/pdfmake.min.js');
        // こっちもキャッシュ対策
        importScripts(dt.baseURL + 'script/position.js' + dt.q);
        importScripts(dt.baseURL + 'script/defineDocCore.js' + dt.q);

        var dd = _defineDoc(dt.ao);
        var pdfDocGenerator = pdfMake.createPdf(dd);
        pdfDocGenerator.getBlob(blobCallback);


    } catch(e) {
        console.log(e);
        postMessage(false);
    }



};


