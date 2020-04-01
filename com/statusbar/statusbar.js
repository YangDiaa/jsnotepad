var $statusBar =(function(){
    var $bar = $(''
            +'<div class="notepad-statusbar">'
                +'<div class="left-panel"></div>'
                +'<div class="right-panel">'
                    +'<p class="row-col"></p>'
                +'</div>'
            +'</div>');
    
    var $rowCol = $bar.find('.row-col'),
        strRowCol = '第&nbsp;x&nbsp;行，第&nbsp;y&nbsp;列',
        cfg = {
            row: 1, 
            col: 1
        };

        function check(isVisable) {
            if(isVisable) {
              $bar.css('display', 'block');
            } 
            else {
              $bar.css('display', 'none');
            }
        }
        
        function setRowCol(r, c) {
            $rowCol.html(strRowCol.replace('x', r).replace('y', c));
        }
        
        function show(conf) {
            $.extend(cfg, conf);
            setRowCol(cfg.row, cfg.col);
            $('body').append($bar);
        }
        
        return {
            show: show, 
            setRowCol: setRowCol,
            check: check
        };
}());
