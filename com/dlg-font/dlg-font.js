var $dlgFont =(function(){
    var $dlg = $(''
        +'<div class="notepad-dlg-font">'
            +'<div class="dialogbox">'
                +'<div class="titlebar">'
                    +'<p class="title">字体</p>'
                    +'<span class="close-btn">✖</span>'
                +'</div>'
                +'<div class="main notepad-dlg-main">'
                    +'<div class="font-family"><p>字体(F):</p></div>'
                    +'<div class="font-style"><p>字形(Y):</p></div>'
                    +'<div class="font-size"><p>大小(S):</p></div>'
                    +'<fieldset class="sample">'
                        +'<legend>示例</legend>'
                        +'<p>AaBbYyZz</p>'
                    +'</fieldset>'
                    +'<div class="script">'
                        +'<label>'
                            +'脚本(R):<br>'
                            +'<select>'
                                +'<option value="西欧语言">西欧语言</option>'
                                +'<option value="中文 GB2312">中文 GB2312</option>'
                            +'</select>'
                        +'</label>'
                    +'</div>'
                    +'<input class="ok" type="button" value="确定">'
                    +'<input class="cancel" type="button" value="取消">'
                +'</div>'
            +'</div>'
        +'</div>');
    var $close = $dlg.find('.close-btn'),
        $cancel = $dlg.find('.cancel'),
        $ok = $dlg.find('.ok'),
        $titlebar = $dlg.find('.titlebar');

    function close() { 
        $dlg.remove();
    }
    function init() {
        var fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
            styles = ['常规', '斜体', '粗体', '粗偏斜体'],
            sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];
    
        var l1 = new comList();
        l1.show({
            container: '.notepad-dlg-font .font-family',
            width: '176px',
            list: fonts,
            isFont: true,
            selectHandler: function(e) { 
                console.log(fonts[e]); 
            }
        });
    
        var l2 = new comList();
        l2.show({
            container: '.notepad-dlg-font .font-style',
            select: 3,
            width: '132px',
            list: styles,
            isFontStyle: true,
            selectHandler: function(e) { 
                console.log(styles[e]); 
            }
        });
    
        var l3 = new comList();
        l3.show({
            container: '.notepad-dlg-font .font-size',
            width: '64px',
            list: sizes,
            selectHandler: function(e) { 
                console.log(sizes[e]); 
            }
        });
    }
    
    function show(){
        $('body').append($dlg);
        init();
        $dlg.find('.dialogbox').draggable({handle: $titlebar});
        $close.click(close);
        $cancel.click(close);
        $ok.click(close);
    }
    return{
        show:show
    }
}());
