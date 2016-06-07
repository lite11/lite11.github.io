

if ('serviceWorker' in navigator) {
     
    var _API_KEY="AIzaSyBWOyG2WTttRhUh8l5IDpkGudRiQJ0bFpE";

  navigator.serviceWorker.register('sw.js').then(function(r) {
      console.log(r);
   console.log("Registeration successful");
  }).catch(function(r) {
       console.log(r);
    console.log("Registeration unsuccessful");
  });
}

$(document).ready(function(){
                        $("#check").click(function(){
                            $("#beforeclick").hide();
                                if($("#check").is(':checked'))
                        {
                            navigator.serviceWorker.ready.then(function(r) {  
                            
                            console.log("sw ready,got perm will suscribe");
                            //subscribe
                           
                            r.pushManager.subscribe({userVisibleOnly: true})
            .then(function(subscription) {
                if(subscription.endpoint.startsWith("https://android.googleapis.com/gcm/send")){
                    var parts = subscription.endpoint.split("/");
                    var registrationId = parts[parts.length -1];
                    console.log("RegistrationId:");
                    console.log(registrationId);
                    
                    sendPushMessage(subscription);
                }
            })
            .catch(function(e) {
                console.log('Something unfortunate happened: ' + e);
            });

  /////
  function sendPushMessage(subscription) {
 if (subscription.endpoint.indexOf(
 'https://android.googleapis.com/gcm/send') === 0) {
 useGCMProtocol(subscription);
 } else {
 useWebPushProtocol(subscription);
 }
 }

 function useGCMProtocol(subscription) {
 console.log('Sending XHR to GCM Protocol endpoint');

 var headers = new Headers();
 headers.append('Content-Type', 'application/json');
 headers.append('Authorization', 'key=' + _API_KEY);

 var endpointSections = subscription.endpoint.split('/');
 var subscriptionId = endpointSections[endpointSections.length - 1];

 fetch('https://android.googleapis.com/gcm/send', {
 method: 'post',
 headers: headers,
 body: JSON.stringify({
 registration_ids: [subscriptionId] // eslint-disable-line camelcase
 })
 })
 .then(function(response) {
 return response.json();
 })
 .then(function(responseObj)  {
 if (responseObj.failure !== 0) {
 console.log('Failed GCM response: ', responseObj);
 throw new Error('Failed to send push message via GCM');
 }
 })
 .catch(function(err) {
 console.log(err);});
 }

 function useWebPushProtocol(subscription) {
 console.log('Sending XHR to Web Push Protocol endpoint');

 fetch(subscription.endpoint, {
 method: 'post',
 headers: {
 TTL: '60'
 }
 })
 .then(function(response) {
 if (response.status >= 400 && response.status < 500) {
 console.log('Failed web push response: ', response, response.status);
 throw new Error('Failed to send push message via web push protocol');
 }
 })
 .catch(function(err) {
 console.log(err);
 });
 }

 function produceGCMProprietaryCURLCommand(subscription) {
 var curlEndpoint = 'https://android.googleapis.com/gcm/send';
 var endpointSections = subscription.endpoint.split('/');
 var subscriptionId = endpointSections[endpointSections.length - 1];
 var curlCommand = 'curl --header "Authorization: key=' +
 this._API_KEY + '" --header Content-Type:"application/json" ' +
 curlEndpoint + ' -d "{\\"registration_ids\\":[\\"' +
 subscriptionId + '\\"]}"';
 return curlCommand;
 }

 function produceWebPushProtocolCURLCommand(subscription) {
 var curlEndpoint = subscription.endpoint;
 var curlCommand = 'curl -H "TTL: 60" --request POST ' + curlEndpoint;
 return curlCommand;
 }

 






  /////
  
  }).catch(function(r) {
       console.log(r);
    console.log("Registeration unsuccessful");

});

                            
                            $("#statusn").hide();
                            $("#statusy").show();
                        
                    }
                        else
                        {
                            //unsubscribe
                            console.log("sw ready,not got perm will not suscribe");
                            $("#statusy").hide();
                            $("#statusn").show();
                        }
                    
                        });
                        
  
                    
                    });


