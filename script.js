function atualizaRelogio(){var a=new Date,b=a.getHours(),c=a.getMinutes(),d=a.getSeconds();10>b&&(b="0"+b),10>c&&(c="0"+c),10>d&&(d="0"+d),horaFormat=b+" : "+c+" : "+d,document.getElementById("hora").innerHTML=horaFormat,setTimeout("atualizaRelogio()",1e3)}
jQuery(window).load(function($){
    atualizaRelogio();
});
