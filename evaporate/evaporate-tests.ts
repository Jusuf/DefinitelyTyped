

function test_upload() {
  var evaporate = new Evaporate({});
  var uploadId = evaporate.add({});
  evaporate.cancel(uploadId);
}
