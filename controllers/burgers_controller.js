const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();


//get burger || working
router.get("/", function (req, res) {
    burger.all(function (data) {
        const bgrObj = {
            burgers: data
        };
        console.log(bgrObj);
        res.render("index", bgrObj);
    });
});

//post burger || not working
router.post("/api/burgers/", function (req, res) {


    burger.add(req.body.data, function (result) {

        res.json({ id: result.insertId })
    });

});


router.put("/api/burgers/:id", function (req, res) {

    burger.update(req.body.devoured, req.params.id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
module.exports = router;