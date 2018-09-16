<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script language="JavaScript">
$(document).ready( function () {
   $("a[href^='http']:not([href*='" + location.hostname + "'])").attr('target', '_blank');
});
</script>

Letterpack Label Maker
====

Letterpack label maker on client side Javascript.

## Description

Make address label PDF for 
[Letterpack](https://www.post.japanpost.jp/service/letterpack/).  
Only using web browser.

## Requirement

Tested on Safari 11 and Google Chrome.

## Usage

Open  
<https://hamada2029.github.io/letterpack_label/form_plus.html>  
on your browser and input form.

## Credits

This software uses code from several libraries.

- [jQuery](https://jquery.com/)
- [pdfmake](http://pdfmake.org/)
- [ajaxzip3](https://github.com/ajaxzip3)
- [Ricty Diminished](https://github.com/edihbrandon/RictyDiminished)

## Author

[hamada2029](https://github.com/hamada2029)