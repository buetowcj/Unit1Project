$(document).ready (function()
{
    $("form").submit(placeOrder);

    function placeOrder(event)
    {
        // stop the flashing form!
        event.preventDefault();

        // make a meat variable
        var meatsPrice = 0;
        var meatName = "";

        // ask jquery for all selected meat checkboxes
        var selectedMeat = $("input[name=meat]:checked");

        // get each box's data-price value
        selectedMeat.each(function () {
            // add to a meatsPrice variable
            meatsPrice += $(this).data("price");
            meatName += $(this).id;
            meatName += "<br>";
        });

        // make a veggies variable

        var veggiesPrice = 0;
        var veggieName = "";
        var selectedVeggies = $("input[name=veggies]:checked");

        // get each box's data-price value
        selectedVeggies.each(function () {
            // add to a subtotal variable
            veggiesPrice += $(this).data("price");
            veggieName += $(this).id;
            veggieName += "<br>";
        });

        // ask jquery for selected size button
        var selectedSize = $("input[name=size]:checked");
        var sizePrice = selectedSize.data("price");
        var sizeName = selectedSize.id;


        // ask jquery for selected crust button
        var selectedCrust = $("input[name=crust]:checked");
        var crustName = selectedCrust.id;


        // output sizeName, crustName, meatName, veggieName
        $("#sizeOutput").text(sizeName);
        $("#crustOutput").text(crustName);
        $("#meatOutput").text(meatName);
        $("#veggieOutput").text(veggieName);

        // add size + meats + veggies to get grandTotal
        var grandTotal = sizePrice + meatsPrice + veggiesPrice;

        // output NAME, ADDRESS, PHONE
        var customerName = $("#pizza-name").val();
        var customerAddress = $("#pizza-address").val();
        var customerPhone = $("#pizza-myPhone").val();

        $("#nameOutput").text(customerName);
        $("#addressOutput").text(customerAddress);
        $("#myPhoneOutput").text(customerPhone);

        // output grandTotal
        $("#grandTotalOutput").text(grandTotal.toFixed(2));
    }
});