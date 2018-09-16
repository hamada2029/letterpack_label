
function shiftLines(lines){
    if (lines.length == 1) {
        return ['', lines[0]];
    }
    return lines;
}


function defineDoc() {

    var to_zip = $('#to_zip').val();
    var to_zip1 = to_zip.slice(0, 3);
    var to_zip2 = to_zip.slice(3, 7);
    var to_add = $('#to_add').val().trim().split('\n');
    if (to_add.length == 1) {
        to_add = ['', '', '', to_add[0]];
    } else if (to_add.length == 2) {
        to_add = ['', to_add[0], '', to_add[1]];
    } else if (to_add.length == 3) {
        to_add = ['', to_add[0], to_add[1], to_add[2]];
    }

    var to_name = $('#to_name').val().trim().split('\n');
    to_name = shiftLines(to_name);
    var to_tel1 = $('#to_tel1').val();
    var to_tel2 = $('#to_tel2').val();
    var to_tel3 = $('#to_tel3').val();


    var from_zip = $('#from_zip').val();
    var from_zip1 = from_zip.slice(0, 3);
    var from_zip2 = from_zip.slice(3, 7);
    var from_add = $('#from_add').val().trim().split('\n');
    from_add = shiftLines(from_add);
    var from_name = $('#from_name').val().trim().split('\n');
    from_name = shiftLines(from_name);
    var from_tel1 = $('#from_tel1').val();
    var from_tel2 = $('#from_tel2').val();
    var from_tel3 = $('#from_tel3').val();


    var desc = $('#desc').val().trim().split('\n');
    desc = shiftLines(desc);
    var df = desc[0] === '' ? 3 : 0;


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
                    text: to_zip1,
                    absolutePosition: {x: 102 * pr, y: 42 * pr},
                    // color:'red',
                    fontSize: 45,
                    characterSpacing: 12
                },
                {   // to_zip2
                    text: to_zip2,
                    absolutePosition: {x: 139 * pr, y: 42 * pr},
                    fontSize: 45,
                    characterSpacing: 11.5
                },
                {   // to_add1
                    text: to_add[0],
                    absolutePosition: {x: 86 * pr, y: (297 - 219) * pr},
                    fontSize: 19
                },
                {   // to_add2
                    text: to_add[1],
                    absolutePosition: {x: 86 * pr, y: (297 - 211) * pr},
                    fontSize: 19
                },
                {   // to_add3
                    text: to_add[2],
                    absolutePosition: {x: 86 * pr, y: (297 - 200) * pr},
                    fontSize: 19
                },
                {   // to_add4
                    text: to_add[3],
                    absolutePosition: {x: 86 * pr, y: (297 - 192) * pr},
                    fontSize: 19
                },
                {   // to_name1
                    text: to_name[0],
                    absolutePosition: {x: 86 * pr, y: (297 - 181) * pr},
                    fontSize: 19
                },
                {   // to_name2
                    text: to_name[1],
                    absolutePosition: {x: 86 * pr, y: (297 - 173) * pr},
                    fontSize: 19
                },
                {   // to_tel1
                    text: to_tel1,
                    absolutePosition: {x: 98 * pr, y: (297 - 162.5) * pr},
                    fontSize: 21
                },
                {   // to_tel2
                    text: to_tel2,
                    absolutePosition: {x: 126 * pr, y: (297 - 162.5) * pr},
                    fontSize: 21
                },
                {   // to_tel3
                    text: to_tel3,
                    absolutePosition: {x: 154 * pr, y: (297 - 162.5) * pr},
                    fontSize: 21
                },
                {   // from_zip1
                    text: from_zip1,
                    absolutePosition: {x: 78.2 * pr, y: (297 - 150.8) * pr},
                    fontSize: 20,
                    characterSpacing: 5.2
                },
                {   // from_zip2
                    text: from_zip2,
                    absolutePosition: {x: 94.8 * pr, y: (297 - 150.8) * pr},
                    fontSize: 20,
                    characterSpacing: 5.23
                },
                {   // from_add1
                    text: from_add[0],
                    absolutePosition: {x: 86 * pr, y: (297 - 136.5) * pr},
                    fontSize: 13.5
                },
                {   // from_add2
                    text: from_add[1],
                    absolutePosition: {x: 86 * pr, y: (297 - 130.5) * pr},
                    fontSize: 13.5
                },
                {   // from_name1
                    text: from_name[0],
                    absolutePosition: {x: 86 * pr, y: (297 - 122.5) * pr},
                    fontSize: 13.5
                },
                {   // from_name2
                    text: from_name[1],
                    absolutePosition: {x: 86 * pr, y: (297 - 116.5) * pr},
                    fontSize: 13.5
                },
                {   // from_tel1
                    text: from_tel1,
                    absolutePosition: {x: 98 * pr, y: (297 - 108.5) * pr},
                    fontSize: 21
                },
                {   // from_tel2
                    text: from_tel2,
                    absolutePosition: {x: 126 * pr, y: (297 - 108.5) * pr},
                    fontSize: 21
                },
                {   // from_tel3
                    text: from_tel3,
                    absolutePosition: {x: 154 * pr, y: (297 - 108.5) * pr},
                    fontSize: 21
                },
                {   // desc1
                    text: desc[0],
                    absolutePosition: {x: 86 * pr, y: (297 - 86) * pr},
                    fontSize: 13.5
                },
                {   // desc2
                    text: desc[1],
                    absolutePosition: {
                        x: 86 * pr, y: (297 - 80 - df) * pr
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

