
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
        var e = document.getElementById(k);
        if(e === null){continue;}
        e.value = j[k];
    }
    document.getElementById('load_file').value = null;
}


function fromStorage () {
    if('address' in sessionStorage){
        var j = JSON.parse(sessionStorage.address);
        for (var k in j) {
            var e = document.getElementById(k);
            if(e === null){continue;}
            e.value = j[k];
        }
    }
}
