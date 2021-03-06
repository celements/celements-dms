Event.observe(window, 'load', function(){
  getUploadToken();
  $$('#celdms_upload_Form .celfileupload').each(function(elem) {
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
  $('celdms_upload_Form').getInputs().each(function(inputElem) {
    inputElem.addClassName('celIgnoreDirty');
  });
  if (uploadResult && uploadResult.success && (uploadResult.success == 1)) {
    var newAttElem = new Element('div').addClassName('attachment');
    newAttElem.update(new Element('span').addClassName('mime'));
    var infoElem = new Element('div').addClassName('information');
    newAttElem.update(infoElem);
    infoElem.update(new Element('span').addClassName('name').update(
        uploadResult.attfilename + ' erfolgreich hochgeladen.'));
    $('_attachments').insert({ top :  infoElem });
  } else {
    alert('failed to upload document.');
  }
};
