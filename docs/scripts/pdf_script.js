
function shiftLines(lines){
    if (lines.length == 1) {
        return ['', lines[0]];
    }
    return lines;
}


function makeAO () {
    var ao = {};
    ao.to_zip = $('#to_zip').val();
    ao.to_zip1 = ao.to_zip.slice(0, 3);
    ao.to_zip2 = ao.to_zip.slice(3, 7);
    ao.to_add = $('#to_add').val().trim().split('\n');
    if (ao.to_add.length == 1) {
        ao.to_add = ['', '', '', ao.to_add[0]];
    } else if (ao.to_add.length == 2) {
        ao.to_add = ['', ao.to_add[0], '', ao.to_add[1]];
    } else if (ao.to_add.length == 3) {
        ao.to_add = ['', ao.to_add[0], ao.to_add[1], ao.to_add[2]];
    }

    ao.to_name = $('#to_name').val().trim().split('\n');
    ao.to_name = shiftLines(ao.to_name);
    ao.to_tel1 = $('#to_tel1').val();
    ao.to_tel2 = $('#to_tel2').val();
    ao.to_tel3 = $('#to_tel3').val();


    ao.from_zip = $('#from_zip').val();
    ao.from_zip1 = ao.from_zip.slice(0, 3);
    ao.from_zip2 = ao.from_zip.slice(3, 7);
    ao.from_add = $('#from_add').val().trim().split('\n');
    ao.from_add = shiftLines(ao.from_add);
    ao.from_name = $('#from_name').val().trim().split('\n');
    ao.from_name = shiftLines(ao.from_name);
    ao.from_tel1 = $('#from_tel1').val();
    ao.from_tel2 = $('#from_tel2').val();
    ao.from_tel3 = $('#from_tel3').val();

    ao.desc = $('#desc').val().trim().split('\n');
    ao.desc = shiftLines(ao.desc);
    ao.df = ao.desc[0] === '' ? 3 : 0;
    console.log(ao);
    return ao;
}


function defineDoc() {

    var ao = makeAO();
    return _defineDoc(ao);

}

