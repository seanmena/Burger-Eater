//add
$("#submit-btn").on("click", function (event) {
    event.preventDefault();
    const newBurger = $("#new-burger").val().trim();
    const newBurgerObj = {
        data: newBurger
    }
    $.ajax("/api/burgers/", {
        method: "POST",
        data: newBurgerObj
    }).then(function (res) {
        location.reload();
    });
});

//devou
$("#devour-btn").on("click", function (event) {

    event.preventDefault();
    const id = $(this).data("id")
    const devouredObj = {
        devoured: 1
    }

    $.ajax("/api/burgers/" + id, {
        method: "PUT",
        data: devouredObj
    }).then(function (res) {
        location.reload();
    });
});
