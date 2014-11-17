'use strict';

/**/

(function() {
    var dataClientsPath = 'https://the-ark-dev.firebaseio.com/legion/clients',
    dataClients = new Firebase(dataClientsPath);

    dataClients.on("value", function(snapshot) {
      console.log(snapshot.val());
    });

})();
