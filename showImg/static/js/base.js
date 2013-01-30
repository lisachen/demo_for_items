$(document).ready(function() {
$(".goto-login-btn").live("click",function(){$(this).closest("#auth-popup").addClass("on");return false;});$(".goto-signup-btn").live("click",function(){$(this).closest("#auth-popup").removeClass("on");return false;});$("#search-input-wrapper input").focus(function(){$("#sample-text").fadeOut();})
});
