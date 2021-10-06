// Jquery Ekko - galerie.html

$(document).on('click', '[data-toggle="lightbox"]', function(e) 
{
    e.preventDefault();
    $(this).ekkoLightbox();
});