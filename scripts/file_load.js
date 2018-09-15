
function loadData (ev) {
    var targetFile = ev.target.files[0];
    var reader = new FileReader();
    reader.onload = setData;
    reader.readAsText(targetFile);
}


function setData(ev) {
    var bin = ev.target.result;
    var j = JSON.parse(bin);
    console.log(j);
    for (var k in j) {
        var e = $('#' + k);
        if(e.length == 0){continue;}
        e.val(j[k]);
    }
}

