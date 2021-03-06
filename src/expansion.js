(function(){
    
    "use strict"
    
    // chrome expansion
    
    MANDARIN.received_a_request(function(msg, port){
        MANDARIN.bookmarks_chrome(function(google_bookmarks){
            
            var google_bookmarks = google_bookmarks;
            
            var google_bookmarks_link = (msg.obj).filter(function(value, i, arr){
                if(google_bookmarks.indexOf(value) !== -1){
                    return value
                }
            });
            
            port.postMessage({question: google_bookmarks_link});
            
        });
        
    });
      
}());