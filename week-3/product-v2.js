btnOrder.addEventListener("click", getChecks);

function getChecks() {
    let add_list = [];
    let del_list = [];
    for (var inputs = document.getElementsByTagName('input'), cb, i = inputs.length;
        i--;)
        if ((cb = inputs[i]).type === 'checkbox') {
            // cb.id = cb.id.replace(/^menuItem/, '');
            (cb.checked ? add_list : del_list).push(parseFloat(cb.value));
        }
    console.log(add_list);
    // console.log(del_list);
    let sum = 0;
    for (var value of add_list) {
        sum = value + sum;
    }
    console.log(sum);
    document.getElementById("order-total").innerHTML = "Your Order Total is" + " $" + sum
}