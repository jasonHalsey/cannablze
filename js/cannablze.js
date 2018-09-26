jQuery(document).ready(function() {

addHeaderCTA();

}); 

//Add CTA to header above navigation
function addHeaderCTA() {
  jQuery( ".x-nav-wrap" ).append( "<a href='#' class='work_together_cta'>Lets Work Together</a>" );
}