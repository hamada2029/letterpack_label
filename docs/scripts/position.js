
var Pos = function(ao){
    // 1pt = 0.35278mm
    this.pr = 1 / 0.35278;  // pt ratio

    this.x_pt_ratio = function(e_pos){
        for (var nm in e_pos) {
            e_pos[nm].position.x = e_pos[nm].position.x * this.pr;
            e_pos[nm].position.y = e_pos[nm].position.y * this.pr;
        }
        return e_pos;
    };

    var RictyDiminishedDiscord = {
        to_zip1: {
            position: {x: 102, y: 42},
            size: 45,
            space: 12
        },
        to_zip2: {
            position: {x: 139, y: 42},
            size: 45,
            space: 11.5
        },
        to_add1: {
            position: {x: 86, y: (297 - 219)},
            size: 19
        },
        to_add2: {
            position: {x: 86, y: (297 - 211)},
            size: 19
        },
        to_add3: {   // 
            position: {x: 86, y: (297 - 200)},
            size: 19
        },
        to_add4: {
            position: {x: 86, y: (297 - 192)},
            size: 19
        },
        to_name1: {
            position: {x: 86, y: (297 - 181)},
            size: 19
        },
        to_name2: {   // 
            position: {x: 86, y: (297 - 173)},
            size: 19
        },
        to_tel1: {
            position: {x: 98, y: (297 - 162.5)},
            size: 21
        },
        to_tel2: {
            position: {x: 126, y: (297 - 162.5)},
            size: 21
        },
        to_tel3: {   // 
            position: {x: 154, y: (297 - 162.5)},
            size: 21
        },

        from_zip1: {
            position: {x: 78.2, y: (297 - 150.8)},
            size: 20,
            space: 5.2
        },
        from_zip2: {
            position: {x: 94.8, y: (297 - 150.8)},
            size: 20,
            space: 5.23
        },
        from_add1: {
            position: {x: 86, y: (297 - 136.5)},
            size: 13.5
        },
        from_add2: {
            position: {x: 86, y: (297 - 130.5)},
            size: 13.5
        },
        from_name1: {
            position: {x: 86, y: (297 - 122.5)},
            size: 13.5
        },
        from_name2: {
            position: {x: 86, y: (297 - 116.5)},
            size: 13.5
        },
        from_tel1: {
            position: {x: 98, y: (297 - 108.5)},
            size: 21
        },
        from_tel2: {
            position: {x: 126, y: (297 - 108.5)},
            size: 21
        },
        from_tel3: {
            position: {x: 154, y: (297 - 108.5)},
            size: 21
        },
        desc1: {
            position: {x: 86, y: (297 - 86)},
            size: 13.5
        },
        desc2: {
            position: {
                x: 86, y: (297 - 80 - ao.df)
            },
            size: 13.5
        }
    };
    this.RictyDiminishedDiscord = this.x_pt_ratio(RictyDiminishedDiscord);

    var mplus_2m = {
        to_zip1: {
            position: {x: 102.61, y: 40.2},  // mm
            size: 40,  // pt
            space: 14  // pt
        },
        to_zip2: {
            position: {x: 139.58, y: 40.2},
            size: 40,
            space: 13.9  // 2byte文字には効かなさそう
        },
        to_add1: {
            position: {x: 86, y: (297 - 220.5)},
            size: 18.5
        },
        to_add2: {
            position: {x: 86, y: (297 - 212.5)},  // -8
            size: 18.5
        },
        to_add3: {   // 
            position: {x: 86, y: (297 - 201.5)},
            size: 18.5,
        },
        to_add4: {
            position: {x: 86, y: (297 - 193.5)},  // -8
            size: 18.5
        },
        to_name1: {
            position: {x: 86, y: (297 - 182.5)},
            size: 18.5
        },
        to_name2: {   // 
            position: {x: 86, y: (297 - 174.5)},
            size: 18.5
        },
        to_tel1: {
            position: {x: 98, y: (297 - 163.9)},
            size: 21
        },
        to_tel2: {
            position: {x: 126, y: (297 - 163.9)},
            size: 21
        },
        to_tel3: {   // 
            position: {x: 154, y: (297 - 163.9)},
            size: 21
        },

        from_zip1: {
            position: {x: 78.27, y: (297 - 151.65)},
            size: 18,
            space: 6.2
        },
        from_zip2: {
            position: {x: 95, y: (297 - 151.65)},
            size: 18,
            space: 6.2
        },
        from_add1: {
            position: {x: 86, y: (297 - 137.5)},
            size: 13.2
        },
        from_add2: {
            position: {x: 86, y: (297 - 131.5)},  // -6
            size: 13.2
        },
        from_name1: {
            position: {x: 86, y: (297 - 123.5)},
            size: 13.2
        },
        from_name2: {
            position: {x: 86, y: (297 - 117.5)},
            size: 13.2
        },
        from_tel1: {
            position: {x: 98, y: (297 - 109.9)},
            size: 21
        },
        from_tel2: {
            position: {x: 126, y: (297 - 109.9)},
            size: 21
        },
        from_tel3: {
            position: {x: 154, y: (297 - 109.9)},
            size: 21
        },
        desc1: {
            position: {x: 86, y: (297 - 86)},
            size: 13
        },
        desc2: {
            position: {
                x: 86, y: (297 - 80 - ao.df)
            },
            size: 13
        }
    };
    this.mplus_2m = this.x_pt_ratio(mplus_2m);
};

// var pos = new Pos({ao: 3});
// alert(pos.RictyDiminishedDiscord.to_zip1.position.x);





