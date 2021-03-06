'use strict'; // code generated by pbf v3.1.0

// AuthorizeRequest ========================================

var AuthorizeRequest = exports.AuthorizeRequest = {};

AuthorizeRequest.read = function (pbf, end) {
  return pbf.readFields(AuthorizeRequest._readField, {session_token: '', wwn_access_token: '', service_access_key: '', olive_token: ''}, end);
};
AuthorizeRequest._readField = function (tag, obj, pbf) {
  if (tag === 1) obj.session_token = pbf.readString();
  else if (tag === 2) obj.wwn_access_token = pbf.readString();
  else if (tag === 2) obj.service_access_key = pbf.readString();
  else if (tag === 2) obj.olive_token = pbf.readString();
};
AuthorizeRequest.write = function (obj, pbf) {
  if (obj.session_token) pbf.writeStringField(1, obj.session_token);
  if (obj.wwn_access_token) pbf.writeStringField(2, obj.wwn_access_token);
  if (obj.service_access_key) pbf.writeStringField(3, obj.service_access_key);
  if (obj.olive_token) pbf.writeStringField(4, obj.olive_token);
};
