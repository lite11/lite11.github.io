 
 //home
     var CACHE_VERSION = 6;
          var CURRENT_CACHES111 = {
           prefetch: 'prefetch-cache-v' + CACHE_VERSION
                                };
                                var cacheName=CURRENT_CACHES111;

var urlstocache1=[

   
   'app_1.js',
   
   'icons/myholidays.json',
   
   'index.html',
   'signup.html',
  
   'icons/newlogo.png',
   'icons/1457957259_Profile01.png',
   'icons/1457957246_shopping-cart.png',
   
   'icons/3dots.png',
   
//added
   'icons/1457957259_Profile01.png',
   'icons/1460037806_Hamburger.png',
   
   'icons/smalllogo.png',
   'menu.html',
   'appshell.html',
   'appshell.html?val=0',
   'appshell.html?val=1',
   'appshell.html?val=2',
   'appshell.html?val=3',
   'appshell.html?val=4',
   'appshell.html?val=5',
   'appshell.html?val=6',
   'appshell.html?val=7',
   'appshell.html?val=8',
   'appshell.html?val=9',
   'icons/m7.jpg',
   'icons/default-avatar-250x250.png'
];



//index menu
 var CACHE_VERSION = 6;
          var CURRENT_CACHES222 = {
           prefetch: 'prefetch-cache-v' + CACHE_VERSION
                                };
                                var cacheName1=CURRENT_CACHES222;

var urlstocache2=[
    
    'icons/logo.jpg',
   'holiday.json',
  'icons/blueplane.gif'
  
   //'index.html',
    //  'indexcss.css'

   
   
  
];

///////////////////////////////////////////////

//default
 var CACHE_VERSION = 6;
          var CURRENT_CACHES333 = {
           prefetch: 'prefetch-cache-v' + CACHE_VERSION
                                };
                                var cacheName2=CURRENT_CACHES333;

var urlstocache3=[
    
   
   
   'default.html',
   'icons/portraitmode.png',
   
   //manifest icons
   'icons/newlogo - Copy (2).png',
   'icons/newlogo - Copy (3).png',
   'icons/newlogo - Copy.png',
   'icons/newlogo - Copy (4).png',
   'icons/newlogo144x144.png',
   'icons/newlogo.png',
   'icons/newlogo225x225.png',
   
   //new signup
   
   'signup.html'
   
];

self.addEventListener('install', function(event) {
    console.log('Installing:');
  event.waitUntil(
    caches.open('CURRENT_CACHES111').then(function(cache) {
         console.log('Added to cache:');
      return cache.addAll(urlstocache1);
       
    }),
             caches.open('CURRENT_CACHES222').then(function(cache) {
         console.log('Added to cache:');
      return cache.addAll(urlstocache2);
       
    }),
    
      caches.open('CURRENT_CACHES333').then(function(cache) {
         console.log('Added to cache:');
      return cache.addAll(urlstocache3);
       
    })
  );
});



self.addEventListener('activate', function(event) {
     var expectedCacheNames1 = Object.keys(CURRENT_CACHES111).map(function(key) {
    return CURRENT_CACHES111[key];
  });

 var expectedCacheNames2 = Object.keys(CURRENT_CACHES222).map(function(key) {
    return CURRENT_CACHES222[key];
  });
  
   var expectedCacheNames3 = Object.keys(CURRENT_CACHES333).map(function(key) {
    return CURRENT_CACHES333[key];
  });
  
  /*event.waitUntil(
    caches.keys().then(function(cacheName) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
        
            return caches.delete(cacheName);
          
        })
      );
    })
  );*/
    
    
    
});



self.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for', event.request.url);

  event.respondWith(
   
   
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Found response in cache:', response);

        return response;
      }
  
     
     return fetch(event.request,{ mode: 'no-cors' }).then(function(response) {
        console.log('Response from network is:', response.url);
//
       return caches.open('CURRENT_CACHES333').then(function(cache) {
            cache.put(event.request.url, response.clone());
            console.log('[ServiceWorker] Fetched&Cached Data');
            return response;
        });
      }).catch(function(error) {
       
        console.error('Fetching failed:', error);

        throw error;
      });
  })
  );
});


self.addEventListener('push', function(event) {  
  console.log('Received a push message', event);
  

var title = 'Kerala Back Waters';  
  var body = 'Enjoy the Holidays with your family on the back waters of Kerala , Hurry up and Book now on your Thomas Cook Lite App!';  
  var icon = 'icons/newlogo144x144.png';  
  

  event.waitUntil(  
    self.registration.showNotification(title, {  
      body: body,  
      icon: icon  
       
    })  
  );  

  });  
