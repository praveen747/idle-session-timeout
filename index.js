(function () {
    var timer = new IdleTimeout(5, {
        callback: function() {
            console.log("Callback Triggered");
        }
    });
})();