
function getImagedata (isLight) {
    if (isLight) {
        return imagedata_light;
    }
    return imagedata_plus;
}


function _defineDoc (ao) {
    pdfMake.fonts = {
        // RictyDiminishedDiscord: {
        //     normal: 'RictyDiminishedDiscord-Regular.ttf',
        // }
        mplus_2m: {
            normal: 'mplus-2m-regular.ttf',
        }
    };
    var dd = {
            pageSize: 'A4',
            defaultStyle: {
                // font: 'RictyDiminishedDiscord'
                font: 'mplus_2m'
            },
            content: [
                {
                    image: getImagedata(ao.isLight),
                    absolutePosition: {x:0, y:0},
                    width: 594.35
                }
            ]
    };
    // var pos = new Pos(ao).RictyDiminishedDiscord;
    var pos = new Pos(ao).mplus_2m;
    for (var nm in pos) {
        var t_o = {
            text: ao[nm],
            absolutePosition: pos[nm].position,
            fontSize: pos[nm].size
        };
        if('space' in pos[nm]){
            t_o.characterSpacing = pos[nm].space;
        }
        dd.content.push(t_o);
    }
    return dd;
}

