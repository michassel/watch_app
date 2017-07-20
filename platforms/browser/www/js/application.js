
// datatables example
$(document).ready(function() {
    var urlPolishjson = "lib/DataTables/Polish.json";

    $('#datatables-example').DataTable( {
        language: {
            "url": (urlPolishjson)
        },
        "processing": false,
        "serverSide": false,
        "searching": false,
        responsive: true,
        "ajax": "data/objects.txt",
        "columns": [
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "extn" },
            { "data": "start_date" },
            { "data": "salary" }
        ]
    } );
} );

// alerts
window.setTimeout(function() {
    $(".timeout").fadeTo(500, 0).slideUp(500, function(){
        $(this).remove(); 
    });
}, 6000);
$( ".close" ).click(function() {
    $(".alert").fadeTo(500, 0).slideUp(500, function(){
        $(this).remove(); 
    });
});

// session
window.setTimeout(function() {
    $.post("models/session.model.php",
    {
        check_session_time: 1
    },
    function(data, status){
        console.log(data);
        if (data == '1') {
            window.location.href = "index.php?controller=login&action=logout&timeout";
        }
    });
}, 6000000);

// obsługa powiadomienia cookies
jQuery(function($) {
    checkCookie_eu();
    
    function checkCookie_eu()
    {
        var consent = getCookie_eu("cookies_consent");

        if (consent == null || consent == "" || consent == undefined)
        {
            // show notification bar
            $('#cookie_directive_container').show();
        }
    }
    
    function setCookie_eu(c_name,value,exdays)
    {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie = c_name + "=" + c_value+"; path=/";

        $('#cookie_directive_container').hide('slow');
    }

    function getCookie_eu(c_name)
    {
        var i,x,y,ARRcookies=document.cookie.split(";");
        for (i=0;i<ARRcookies.length;i++)
        {
            x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
            y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
            x=x.replace(/^\s+|\s+$/g,"");
            if (x==c_name)
            {
                return unescape(y);
            }
        }
    }

    $("#cookie_accept_button").click(function(){
        setCookie_eu("cookies_consent", 1, 30);
    });

});