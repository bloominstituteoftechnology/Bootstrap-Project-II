window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});

function validateForm() {
    const x = document.forms["myForm"]["fname"].value;
    const y = document.forms["myForm"]["fphone"].value;
    const z = document.forms["myForm"]["femail"].value;
    if (x === "") {
        alert("Name must be filled out");
        return false;
    }

    if (y === "") {
        alert("Phone must be filled out");
        return false;
    }

    if (z === "") {
        alert("Email must be filled out");
        return false;
    }
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})