'use strict';

/**/

(function() {
    var dataClientsPath = 'https://the-ark-dev.firebaseio.com/legion/clients',
    dataClients = new Firebase(dataClientsPath),
    template = Handlebars.compile($('#customer-row').html());

    var printCustomers = function(customers){
        $('#client-table tbody .no-data').remove();

        $('#client-table tbody').append(template({customers: customers}));
    };

    dataClients.on("value", function(snapshot) {
      console.log(snapshot.val());
      printCustomers(snapshot.val());
    });
})();
