"use strict";

var NewProjectPage = function() {
  var bindEvents = function() {
    $('[data-action="add-photo"]').on('click', function(event) {
      event.preventDefault();
      addPhoto();
    });

    $('.photos-wrapper').delegate('a[data-action="delete-photo"]', 'click', function(event) {
      event.preventDefault();
      deletePhoto($(event.target));
    });

    $('input[data-action="update-project"]').on('click', function(event) {
      $(event.target).val("Updating Project...");
      $(event.target).prop('disabled', true);
      $(event.target).parents('form').submit();
    });
  };

  var addPhoto = function() {
    var identifier = Date.now();
    var link = '<a href="#" data-action="delete-photo">delete</a>';
    var destroyInput = '<input type="hidden" name="project[photos_attributes][' + identifier + '][_destroy]" value="project_photos_attributes_' + identifier + '__destroy" />';
    $('.photos-wrapper').prepend('<div class="photo"><div class="form-group file optional project_photos_photo"><label class="file optional control-label" for="project_photos_attributes_' + identifier + '_photo"></label><input class="file optional" type="file" name="project[photos_attributes][' + identifier + '][photo]" id="project_photos_attributes_' + identifier + '_photo" value="" />' + destroyInput + '</div>' + link + '</div>');
  };

  var deletePhoto = function(link) {
    if (link.data('id') != "") {
      // handles already saved photos
      link.parents('.photo').hide();
      link.parents('.photo').find('input[type="hidden"]').val("true");
    } else {
      //handles new entries
      link.parents('.photo').hide();
    }
  };

  $(document).ready(function() {
    bindEvents();
  });
};
