 
 //home
     var CACHE_VERSION = 6;
          var CURRENT_CACHES11 = {
           prefetch: 'prefetch-cache-v' + CACHE_VERSION
                                };
                                var cacheName=CURRENT_CACHES11;

var urlstocache1=[

   
   'app_1.js',
   //'sw.js',
   //'manifest.json',
   'home.html',
   'homecss.css',
   
  
   'icons/newlogo.png',
   'icons/1457957259_Profile01.png',
   'icons/1457957246_shopping-cart.png',
   //'icons/holiday-palm-isle-icon.png',
   'icons/3dots.png',
   
//added
   'icons/1457957259_Profile01.png',
   'icons/1460037806_Hamburger.png',
   'icons/1457957246_shopping-cart.png',
   'icons/smalllogo.png',
   'menu.html',
   'appshell.html',
   'icons/m7.jpg'
];

//////////////////////////////

//index menu
 var CACHE_VERSION = 6;
          var CURRENT_CACHES22 = {
           prefetch: 'prefetch-cache-v' + CACHE_VERSION
                                };
                                var cacheName1=CURRENT_CACHES22;

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
          var CURRENT_CACHES33 = {
           prefetch: 'prefetch-cache-v' + CACHE_VERSION
                                };
                                var cacheName2=CURRENT_CACHES33;

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
   'icons/newlogo225x225.png'
   
];

self.addEventListener('install', function(event) {
    console.log('Installing:');
  event.waitUntil(
    caches.open('CURRENT_CACHES11').then(function(cache) {
         console.log('Added to cache:');
      return cache.addAll(urlstocache1);
       
    }),
             caches.open('CURRENT_CACHES22').then(function(cache) {
         console.log('Added to cache:');
      return cache.addAll(urlstocache2);
       
    }),
    
      caches.open('CURRENT_CACHES33').then(function(cache) {
         console.log('Added to cache:');
      return cache.addAll(urlstocache3);
       
    })
  );
});



self.addEventListener('activate', function(event) {
     var expectedCacheNames1 = Object.keys(CURRENT_CACHES11).map(function(key) {
    return CURRENT_CACHES11[key];
  });

 var expectedCacheNames2 = Object.keys(CURRENT_CACHES22).map(function(key) {
    return CURRENT_CACHES22[key];
  });
  
   var expectedCacheNames3 = Object.keys(CURRENT_CACHES33).map(function(key) {
    return CURRENT_CACHES33[key];
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
       return caches.open('CURRENT_CACHES33').then(function(cache) {
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
  
  


















