'use strict';

/**/

(function() {
    var dataClientsPath = 'https://the-ark-dev.firebaseio.com/legion/clients',
    dataClients = new Firebase(dataClientsPath),
    template = Handlebars.compile($('#customer-row').html());

    var printCustomers = function(customers){
        $('#client-table tbody .no-data').remove();
        $('#client-table tbody').append(template({customers: customers}));

        var table = $('#client-table').DataTable({
             "paging": false,
             "ordering": false,
             "info": false
        });

        table.on( 'draw', function () {
            var body = $( table.table().body() );

            body.unhighlight();
            body.highlight( table.search() );
        } );

    };

    // $('#client-table').filterTable({
    //     inputSelector: '#filter',
    //     callback: function(term, table) {
    //         console.log('term',term);
    //     }
    // });

    dataClients.once("value", function(snapshot) {
      printCustomers(snapshot.val());
    });
})();

$(document).ready( function () {
} );
