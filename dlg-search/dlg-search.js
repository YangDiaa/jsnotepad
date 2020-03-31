var $dlgSearch =(function(){
    var $dlg = $(''
            +'<div class="notepad-dlg-search">'
                +'<div class="dialogbox">'
                    +'<div class="titlebar">'
                        +'<p class="title">查找</p>'
                        +'<span class="close-btn">✖</span>'
                    +'</div>'
                    +'<div class="main">'
                        +'<label for="">查找内容(N):</label>'
                        +'<input class="txt-content" type="text"><br>'
                        +'<input type="checkbox" value="capital-sense">区分大小写(C)'
                        +'<fieldset class="search-direction">'
                            +'<legend>方向</legend>'
                            +'<input type="radio" name="direction" value="up">向上(U)'
                            +'<input type="radio" name="direction" value="down" checked>向下(D)'
                        +'</fieldset>'
                        +'<input class="search" type="button" value="查找下一个(F)">'
                        +'<input class="cancel" type="button" value="取消">'
                    +'</div>'
                +'</div>'
            +'</div>');
        var $search = $dlg.find('.search'),
            $close = $dlg.find('.close-btn'),
            $cancel = $dlg.find('.cancel'),
            $content = $dlg.find('.txt-content'),
            $titlebar = $dlg.find('.titlebar');

    function close(){
        $dlg.remove();
    }
    function verify() {
        if($content.val() !== '') {
            $search.removeAttr('disabled');
        }
    }
    function init(){
        $dlg.find('.dialogbox').draggable({handle: $titlebar});
        $dlg.find('input[value="up"]').removeAttr('checked');
        $dlg.find('input[value="down"]')[0].checked = true;
        $dlg.find('input[type="checkbox"]').removeAttr('checked');
        $search.attr('disabled', 'disabled');
        $content.val('');
        $content.focus();
    }
    function show(searchHandler){
        $('body').append($dlg);
        init();
        $close.click(close);
        $cancel.click(close);
        $content.keyup(verify);
        $search.click(function() {
            searchHandler({
              content: $content.val(),
              capitalSense: $dlg.find('input[type="checkbox"]:checked').val() === 'capital-sense',
              direction: $dlg.find('input[name="direction"]:checked').val()
            });
        });
    }

    return{
        show:show
    }
}());
