
function getVs () {
    var j = {
        to_zip: document.getElementById('to_zip').value,
        to_add: document.getElementById('to_add').value,
        to_name: document.getElementById('to_name').value,
        to_tel1: document.getElementById('to_tel1').value,
        to_tel2: document.getElementById('to_tel2').value,
        to_tel3: document.getElementById('to_tel3').value,
        from_zip: document.getElementById('from_zip').value,
        from_add: document.getElementById('from_add').value,
        from_name: document.getElementById('from_name').value,
        from_tel1: document.getElementById('from_tel1').value,
        from_tel2: document.getElementById('from_tel2').value,
        from_tel3: document.getElementById('from_tel3').value,
        desc: document.getElementById('desc').value
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


