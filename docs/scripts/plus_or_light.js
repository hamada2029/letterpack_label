

if (location.search == '?light') {
    document.title = '続・レターパックライトラベルメイカー';
    document.querySelector('h1 a').innerText ='レターパックライト';
    var overview_a = document.querySelector('#overview a');
    overview_a.innerText = 'プラスはこちら';
    overview_a.href = 'form.html?plus';
    document.querySelector('#base_img').src = './imgs/light_base.png';

    var lightColor1 = '#366bb4';
    var lightColor2 = '#214478';

    document.querySelector('#head1').style['background-color'] = lightColor1;
    document.querySelector('#head1').style.border = 'medium solid ' + lightColor1;
    q2n('.h_button').forEach(
        function(e, i) {
            e.style.background = lightColor2;
        }
    );
    q2n('.f_button').forEach(
        function(e, i) {e.style.background = lightColor1;}
    );
    q2n('#mask button').forEach(
        function(e, i) {e.style.background = lightColor1;}
    );
    var donate = document.querySelector('#donate');
    donate.src = donate.src.replace('ff5555', lightColor1.slice(1));
    var blogger = document.querySelector('#blogger');
    blogger.src = blogger.src.replace('ff5555', lightColor1.slice(1));

}

