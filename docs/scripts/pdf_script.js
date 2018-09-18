
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


function _defineDoc (ao) {
    pdfMake.fonts = {
        RictyDiminished: {
            normal: 'RictyDiminished-Regular.ttf',
        }
    };
    // 1pt = 0.35278mm
    var pr = 1 / 0.35278;  // pt ratio
    var docDefinition = {
            pageSize: 'A4',
            content: [
                {
                    image: imagedata,
                    absolutePosition: {x:0, y:0},
                    width: 594.35
                },
                {   // to_zip1
                    text: ao.to_zip1,
                    absolutePosition: {x: 102 * pr, y: 42 * pr},
                    // color:'red',
                    fontSize: 45,
                    characterSpacing: 12
                },
                {   // to_zip2
                    text: ao.to_zip2,
                    absolutePosition: {x: 139 * pr, y: 42 * pr},
                    fontSize: 45,
                    characterSpacing: 11.5
                },
                {   // to_add1
                    text: ao.to_add[0],
                    absolutePosition: {x: 86 * pr, y: (297 - 219) * pr},
                    fontSize: 19
                },
                {   // to_add2
                    text: ao.to_add[1],
                    absolutePosition: {x: 86 * pr, y: (297 - 211) * pr},
                    fontSize: 19
                },
                {   // to_add3
                    text: ao.to_add[2],
                    absolutePosition: {x: 86 * pr, y: (297 - 200) * pr},
                    fontSize: 19
                },
                {   // to_add4
                    text: ao.to_add[3],
                    absolutePosition: {x: 86 * pr, y: (297 - 192) * pr},
                    fontSize: 19
                },
                {   // to_name1
                    text: ao.to_name[0],
                    absolutePosition: {x: 86 * pr, y: (297 - 181) * pr},
                    fontSize: 19
                },
                {   // to_name2
                    text: ao.to_name[1],
                    absolutePosition: {x: 86 * pr, y: (297 - 173) * pr},
                    fontSize: 19
                },
                {   // to_tel1
                    text: ao.to_tel1,
                    absolutePosition: {x: 98 * pr, y: (297 - 162.5) * pr},
                    fontSize: 21
                },
                {   // to_tel2
                    text: ao.to_tel2,
                    absolutePosition: {x: 126 * pr, y: (297 - 162.5) * pr},
                    fontSize: 21
                },
                {   // to_tel3
                    text: ao.to_tel3,
                    absolutePosition: {x: 154 * pr, y: (297 - 162.5) * pr},
                    fontSize: 21
                },
                {   // from_zip1
                    text: ao.from_zip1,
                    absolutePosition: {x: 78.2 * pr, y: (297 - 150.8) * pr},
                    fontSize: 20,
                    characterSpacing: 5.2
                },
                {   // from_zip2
                    text: ao.from_zip2,
                    absolutePosition: {x: 94.8 * pr, y: (297 - 150.8) * pr},
                    fontSize: 20,
                    characterSpacing: 5.23
                },
                {   // from_add1
                    text: ao.from_add[0],
                    absolutePosition: {x: 86 * pr, y: (297 - 136.5) * pr},
                    fontSize: 13.5
                },
                {   // from_add2
                    text: ao.from_add[1],
                    absolutePosition: {x: 86 * pr, y: (297 - 130.5) * pr},
                    fontSize: 13.5
                },
                {   // from_name1
                    text: ao.from_name[0],
                    absolutePosition: {x: 86 * pr, y: (297 - 122.5) * pr},
                    fontSize: 13.5
                },
                {   // from_name2
                    text: ao.from_name[1],
                    absolutePosition: {x: 86 * pr, y: (297 - 116.5) * pr},
                    fontSize: 13.5
                },
                {   // from_tel1
                    text: ao.from_tel1,
                    absolutePosition: {x: 98 * pr, y: (297 - 108.5) * pr},
                    fontSize: 21
                },
                {   // from_tel2
                    text: ao.from_tel2,
                    absolutePosition: {x: 126 * pr, y: (297 - 108.5) * pr},
                    fontSize: 21
                },
                {   // from_tel3
                    text: ao.from_tel3,
                    absolutePosition: {x: 154 * pr, y: (297 - 108.5) * pr},
                    fontSize: 21
                },
                {   // desc1
                    text: ao.desc[0],
                    absolutePosition: {x: 86 * pr, y: (297 - 86) * pr},
                    fontSize: 13.5
                },
                {   // desc2
                    text: ao.desc[1],
                    absolutePosition: {
                        x: 86 * pr, y: (297 - 80 - ao.df) * pr
                    },
                    fontSize: 13.5
                }
            ],
            defaultStyle: {
                font: 'RictyDiminished'
            }
    };
    return docDefinition;
}


function defineDoc() {

    var ao = makeAO();
    return _defineDoc(ao);

}

