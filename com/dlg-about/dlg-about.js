var $dlgAbout =(function(){
    var $dlg = $(''
        +'<div class="notepad-dlg-about">'
            +'<div class="dialogbox">'
                +'<div class="titlebar">'
                    +'<p class="title">关于"记事本"</p>'
                    +'<span class="close-btn">✖</span>'
                +'</div>'
                +'<div class="main">'
                    +'<h1 class="slogan">JSNotePad</h1>'
                    +'<hr>'
                    +'<img class="app-logo" src="../../images/1.png">'
                    +'<div class="info">'
                        +'<p>作者：yd</p>'
                        +'<p>QQ：</p>'
                        +'<p>仓库地址：<a href="https://github.com/YangDiaa/jsnotepad">https://github.com/YangDiaa/jsnotepad</a></p>'
                    +'</div>'
                    +'<input class="btn" type="button" value="确定">'
                +'</div>'
            +'</div>'
        +'</div>');
    
    var $close = $dlg.find('.close-btn'),
        $ok = $dlg.find('.btn'),
        $titlebar = $dlg.find('.titlebar');
    
    function close(){
        $dlg.remove();
    } 
    function show(conf){
        $('body').append($dlg);
        $dlg.find('.dialogbox').draggable({handle: $titlebar});//设置拖拽范围
        $ok.focus();

        $close.click(close);
        $ok.click(close);
    }

    return{
        show:show
    }
}());
