var $dlgReplace =(function(){
    var $dlg = $(''
            +'<div class="notepad-dlg-replace">'
                +'<div class="dialogbox">'
                    +'<div class="titlebar">'
                        +'<p class="title">替换</p>'
                        +'<span class="close-btn">✖</span>'
                    +'</div>'
                    +'<div class="main">'
                        +'<label>查找内容(N):<input class="txt-search" type="text"><br></label>'
                        +'<label>替换为(P):<input class="txt-replace" type="text"><br></label>'
                        +'<label><input type="checkbox" value="capital-sense">区分大小写(C)</label>'
                        +'<input class="search" type="button" value="查找下一个(F)">'
                        +'<input class="replace" type="button" value="替换(R)">'
                        +'<input class="replace-all" type="button" value="全部替换(A)">'
                        +'<input class="cancel" type="button" value="取消">'
                    +'</div>'
                +'</div>'
            +'</div>');
    var cfg = {
        searchHandle:null,
        replaceHandle:null,
        replaceAllHandle:null
    };
    var $close = $dlg.find('.close-btn'),
        $cancel = $dlg.find('.cancel'),
        $txtSearch= $dlg.find('.txt-search'),
        $txtReplace = $dlg.find('.txt-replace'),
        $search = $dlg.find('.search'),
        $replace = $dlg.find('.replace'),
        $replaceAll = $dlg.find('.replace-all'),
        $titlebar = $dlg.find('.titlebar')

    function close(){
        $dlg.remove();
    }
    function test() {
        if($txtSearch.val() !== '') {
          setBtnEnabled(true);
        } else {
          setBtnEnabled(false);
        }
    }
    function setBtnEnabled(enabled) {
        if(enabled) {
          $search.removeAttr('disabled');
          $replace.removeAttr('disabled');
          $replaceAll.removeAttr('disabled');
        } else {
          $search.attr('disabled', 'disabled');
          $replace.attr('disabled', 'disabled');
          $replaceAll.attr('disabled', 'disabled');
        }
    }
    function init() {
        $dlg.find('.dialogbox').draggable({handle: $titlebar});
        $txtSearch.val('');
        $txtReplace.val('');
        $txtSearch.focus();
        $dlg.find('input[value="capital-sense"]')[0].checked = false;
        setBtnEnabled(false);
    }
    function get() {
        return {
          search: $txtSearch.val(),
          replace: $txtReplace.val(),
          capitalSense: $dlg.find('input[type="checkbox"]:checked').val() === 'capital-sense'
        };
    }
    function searchHandle() { 
        cfg.searchHandle(get()); 
    }
    function replaceHandle() { 
        cfg.replaceHandle(get()); 
    }
    function replaceAllHandle() { 
        cfg.replaceAllHandle(get()); 
    }
    function show(conf){
        $.extend(cfg,conf);
        $('body').append($dlg);
        init();
        $close.click(close);
        $cancel.click(close);
        $txtSearch.keyup(test);
        $search.click(searchHandle);
        $replace.click(replaceHandle);
        $replaceAll.click(replaceAllHandle);
    }
    return{
        show:show
    }
}());
