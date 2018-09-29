

if (location.search == '?light') {
    document.title = '続・レターパックライトラヴェルメイカー';
    document.getElementById('head_title').innerText ='続・レターパックライトラヴェルメイカー';
    var overview_a = document.querySelector('#overview a');
    overview_a.innerText = 'プラスはこちら';
    overview_a.href = 'form.html?plus';
    document.querySelector('#base_img').src = 'imgs/light_base.png';

    var lightColor1 = '#366bb4';
    var lightColor2 = '#214478';

    var head1 = document.getElementById('head1');
    head1.style.backgroundColor = lightColor2;
    head1.style.backgroundImage = 'url("imgs/logo_light.svg")';

    q2n('.h_btn:nth-child(odd)').forEach(
        function(e, i) {e.style.background = lightColor2;}
    );
    q2n('.h_btn:nth-child(even)').forEach(
        function(e, i) {e.style.background = lightColor1;}
    );
    q2n('.f_btn:nth-child(odd)').forEach(
        function(e, i) {e.style.background = lightColor1;}
    );
    q2n('.f_btn:nth-child(even)').forEach(
        function(e, i) {e.style.background = lightColor2;}
    );
    q2n('#mask button').forEach(
        function(e, i) {e.style.background = lightColor1;}
    );
}

