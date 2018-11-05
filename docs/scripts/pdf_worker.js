

onmessage = function (ev) {

    function blobCallback(rBlob){
        // UIスレッド側にメッセージを送付する
        const msg = {err: false, result: rBlob};
        postMessage(msg);
    }


    try {
        var dt = ev.data;
        if(dt.c > 0){return;}
        // なぜか相対URL使えなかった
        // 更新しそうにないスクリプト
        importScripts(dt.baseURL + 'scripts/imagedata_plus.js');
        importScripts(dt.baseURL + 'scripts/imagedata_light.js');
        importScripts(dt.baseURL + 'scripts/pdfmake.min.js');
        // pdfmakeの後
        importScripts(dt.baseURL + 'scripts/mplus-2m-regular.js');
        // こっちもキャッシュ対策
        importScripts(dt.baseURL + 'scripts/position.js' + dt.q);
        importScripts(dt.baseURL + 'scripts/defineDocCore.js' + dt.q);

        var dd = _defineDoc(dt.ao);
        var pdfDocGenerator = pdfMake.createPdf(dd);
        pdfDocGenerator.getBlob(blobCallback);


    } catch(e) {
        console.log(e);
        const msg = {err: true, result: e};
        postMessage(msg);
    }



};


