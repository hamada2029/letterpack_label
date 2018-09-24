
function getVs () {
    var j = {
        to_zip: $('#to_zip').val(),
        to_add: $('#to_add').val(),
        to_name: $('#to_name').val(),
        to_tel1: $('#to_tel1').val(),
        to_tel2: $('#to_tel2').val(),
        to_tel3: $('#to_tel3').val(),
        from_zip: $('#from_zip').val(),
        from_add: $('#from_add').val(),
        from_name: $('#from_name').val(),
        from_tel1: $('#from_tel1').val(),
        from_tel2: $('#from_tel2').val(),
        from_tel3: $('#from_tel3').val(),
        desc: $('#desc').val()
    };
    var tn = j.to_name.trim().split('\n');
    tn = tn[tn.length - 1];
    j.file_name = tn === '' ? 'output.json' : tn + '.json';
    return j;
}



function fileDL() {
    var mimeType = 'application/json';
    var o = getVs();
    var fileName = o.file_name;
    var js = JSON.stringify(o, null, 4);
    var blob = new Blob([js], {type: mimeType});

    // DL
    if (window.navigator.msSaveBlob) {  // IE
        window.navigator.msSaveBlob(blob, fileName);
    } else if (window.URL || window.webkitURL) {
        window.URL = window.URL || window.webkitURL;
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
    }

}


function toStorage () {
    var o = getVs();
    var js = JSON.stringify(o, null, 4);
    sessionStorage.address = js;
}


