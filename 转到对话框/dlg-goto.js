var $dlgGoto =(function(){
    var $dlg = $(''
            + '<div class="notepad-dlg-goto">'
                +'<div class="dialogbox">'
                    +'<div class="titlebar">'
                        +'<p class="title">转到指定行</p>'
                        +'<span class="close-btn">×</span> '   
                    +'</div>'
                    +'<div class="main">'
                        +'<label>行号(L):</label>'
                        +'<br>'
                        +'<input type="text" class="txt-line-num" autofocus>'
                        +'<br>'
                        +'<input type="button" value="转到" class="btn-goto">'
                        +'<input type="button" value="取消" class="btn-cancel">'
                    +'</div>'
                +'</div>'
            +'</div>');
    var $close = $dlg.find('.close-btn'),
        $cancel = $dlg.find('.btn-cancel'),
        $goto = $dlg.find('.btn-goto'),
        $num = $dlg.find('.txt-line-num'),
        $titlebar = $dlg.find('.titlebar');
        cfg = {
            container:'body',
            num:1,
            max:7,
            gotoHandler: null
        };

    function close() { 
        $dlg.remove();
    }
    function gotoHandler(){
        if(!validate()){
            return;
        }
        cfg.gotoHandler($num.val()); 
        close();
    }
    function filterKey(e) {
        if(!/[0-9]/.test(e.key)) {
          e.preventDefault();
          alert('你只能在此输入数字！');
        }
      }
    function validate(){
        var num = $num.val();
        if(num == ''){
            alert('请输入行号');
            return false;
        }
        if(num > cfg.max){
            alert('超过了总行数');
            $num.select();
            return false;
        }
        return true;
    }
    function show(conf){
        $(cfg.container).append($dlg);
        $.extend(cfg,conf);
        $dlg.find('.dialogbox').draggable({handle: $titlebar});

        $close.click(close);
        $cancel.click(close);
        $goto.click(gotoHandler);
        $num.keypress(filterKey);
        $num.val(cfg.num);
        $num.select();
    }

    return{
        show:show
    }
}());
