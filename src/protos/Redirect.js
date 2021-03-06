'use strict'; // code generated by pbf v3.1.0

// Redirect ========================================

var Redirect = exports.Redirect = {};

Redirect.read = function (pbf, end) {
  return pbf.readFields(Redirect._readField, {new_host: '', is_transcode: false}, end);
};
Redirect._readField = function (tag, obj, pbf) {
  if (tag === 1) obj.new_host = pbf.readString();
  else if (tag === 2) obj.is_transcode = pbf.readBoolean();
};
Redirect.write = function (obj, pbf) {
  if (obj.new_host) pbf.writeStringField(1, obj.new_host);
  if (obj.is_transcode) pbf.writeBooleanField(2, obj.is_transcode);
};
