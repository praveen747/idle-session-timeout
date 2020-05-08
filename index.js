(function () {
    var timer = new IdleTimeout(15, {
        callback: function() {
            console.log("Callback Triggered");
            document.body.innerHTML = `
            <h1>your session has timed out...</h1>
            `
        }
    });
})();