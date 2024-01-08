// script.js

$(document).ready(function () {
    const loginLink = $("#loginLink");
    const bookNowBtn = $("#bookNowBtn");
    const loginFormContainer = $("#loginForm");

    // Hide the login form container initially
    loginFormContainer.hide();

    bookNowBtn.on("click", function () {
        // Show the login form when "Book Now" is clicked
        loginFormContainer.show();
    });

    // Assume login logic here, and update the login link accordingly
    $("#loginBtn").on("click", function () {
        // For demonstration purposes, just hide the login form and change login link to logout
        loginFormContainer.hide();
        updateLoginLink(true);
    });

    // Assume logout logic here, and update the login link accordingly
    $("#logoutBtn").on("click", function () {
        // For demonstration purposes, change logout link to login
        updateLoginLink(false);
    });

    function updateLoginLink(isLoggedIn) {
        if (isLoggedIn) {
            // Change login link to logout
            loginLink.text("Logout").off("click").on("click", function () {
                // Assume logout logic here, and update the login link accordingly
                loginLink.text("Login").off("click").on("click", function () {
                    // Show the login form when login link is clicked
                    loginFormContainer.show();
                });
            });
        } else {
            // Change logout link to login
            loginLink.text("Login").off("click").on("click", function () {
                // Show the login form when login link is clicked
                loginFormContainer.show();
            });
        }
    }
});
