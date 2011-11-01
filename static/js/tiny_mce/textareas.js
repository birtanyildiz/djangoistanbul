tinyMCE.init({
    plugins: "paste,searchreplace,inlinepopups,spellchecker,safari,advlink,table,layer",
    mode : "textareas",
    theme : "advanced",
    content_css: "/static/css/admin.css",
    theme_advanced_buttons1 : "mylistbox,bold,italic,underline,separator,strikethrough,justifyleft,justifycenter,justifyright,justifyfull,bullist,numlist,undo,redo,link,unlink,",
    theme_advanced_buttons2 : "code,|,styleselect,formatselect,fontselect,fontsizeselect,tablecontrols",
    theme_advanced_buttons3 : "",
    theme_advanced_toolbar_location : "top",
    theme_advanced_toolbar_align : "left",
    theme_advanced_statusbar_location : "bottom",
    style_formats: [
        //{title: 'Resim Sağa', block: 'div', classes: 'clip-float-right'},
        {title: 'Başlık (H2)', block: 'h2'},
        {title: 'Alt Başlık (H3)', block: 'h3'},
        {title: 'Liste', selector: 'ul', classes: 'general-list'},
        // {title: 'Uydu', selector: 'div', classes: 'links-float-right'}
    ]



// tinyMCE.init({
//     mode : "textareas",
//     width : "800",
//     height : "500",
//     theme : "advanced",
//     language : 'en',
//     theme_advanced_toolbar_location : "top",
//     theme_advanced_toolbar_align : "left",
//     plugins : "preview, searchreplace, paste, table, insertdatetime, media",
//     theme_advanced_buttons1 :
//     "preview,undo,redo,|,cut,copy,paste,|,bullist,numlist,|,outdent,indent,blockquote,|,link,unlink,anchor, image,cleanup,help,code",
//     theme_advanced_buttons2 :
//     "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,fontselect,fontsizeselect,|,forecolor,backcolor,|,sub,sup,|,charmap,,media,|,tabl econtrols",
//     theme_advanced_buttons3 :"",
//     theme_concrete_blockformats : "p,h1,h2,h3,h4,blockquote",
});