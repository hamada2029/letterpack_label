
function getImagedata () {
    if (location.search == '?light') {
        return imagedata_light;
    }
    return imagedata_plus;
}


function _defineDoc (ao) {
    pdfMake.fonts = {
        RictyDiminishedDiscord: {
            normal: 'RictyDiminishedDiscord-Regular.ttf',
        }
        // mplus_2m: {
        //     normal: 'mplus-2m-regular.ttf',
        // }
    };
    // 1pt = 0.35278mm
    var pr = 1 / 0.35278;  // pt ratio
    var docDefinition = {
            pageSize: 'A4',
            content: [
                {
                    image: getImagedata(),
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
                font: 'RictyDiminishedDiscord'
            }
    };
    return docDefinition;
}

