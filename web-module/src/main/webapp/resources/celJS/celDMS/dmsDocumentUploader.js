Event.observe(window, 'load', function(){
  getUploadToken();
  $$('#imagePickerUploadArea .celfileupload').each(function(elem) {
    elem.observe('celements:uploadfinished', pickerUploadFinshed);
  });
});

var getUploadToken = function() {
  new Ajax.Request(getCelHost(), {
    method: 'post',
    parameters: {
       xpage : 'celements_ajax',
       'ajax_mode' : 'TokenFileUploader',
       'tfu_mode' : 'getTokenForCurrentUser'
    },
    onSuccess: function(transport) {
      jsonStr = transport.responseText;
      if (jsonStr.isJSON()) {
        jsonResponse = jsonStr.evalJSON();
        if (jsonResponse.hasUploadRights) {
          $('celfileuploadToken').value = jsonResponse.token;
          $('celdms_getTokenNotice').hide();
          $('celdms_getTokenNotice').previous('.celSupressAttachmentList').show();
        }
      }
    }
  });
};

var pickerUploadFinshed = function(event) {
  var uploadResult = event.memo.uploadResult;
  if (uploadResult && uploadResult.success && (uploadResult.success == 1)) {
    $('attachmentscontent').insert({ top : loadingImg });
        alert('upload done.' + event.memo.uploadResult);
  } else {
    alert('failed to upload document.');
  }
};
