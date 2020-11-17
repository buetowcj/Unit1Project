$(document).ready(function()
{
    $("form").submit(placeOrder);

    function placeOrder(event)
    {
        // stop the flashing form!
        event.preventDefault();

        // make a subtotal variable
        var subtotal = 0;

        // make a soap name variable
        var soapNames = "";

        // ask jquery for all selected soap checkboxes
        var selectedBoxes = $("input[name=soap]:checked");

        // get each box's data-price value
        selectedBoxes.each(function () {
            // add to a subtotal variable
            subtotal += $(this).data("price");
            soapNames += $(this).val();
            soapNames += "<br>";
        });

        // ask jquery for selected shipping button
        var selectedButton = $("input[name=shipping]:checked");

        // find its data-shipping-fee value
        var shippingCost = selectedButton.data("shipping-fee");

        var grandTotal = subtotal + shippingCost;

        // output soap names to table
        $("#soapNamesOutput").html(soapNames);

        // add shipping to table
        $("#shippingOutput").text(shippingCost.toFixed(2));


        // put subtotal in the table
        $("#subtotalOutput").text(subtotal.toFixed(2));

        $("#grandTotalOutput").text(grandTotal.toFixed(2));
    }

    function updateButton()
    {
        // ask jquery for all selected soap checkboxes
        var selectedBoxes = $("input[name=soap]:checked");

        // get the number selected
        var numSelections = selectedBoxes.length;

        // update button's span with number
        $("#quantity").text(numSelections);
    }
});