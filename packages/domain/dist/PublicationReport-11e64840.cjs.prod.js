'use strict';

var createClass = require('./createClass-a52f56fd.cjs.prod.js');

var Profile = /*#__PURE__*/function () {
  function Profile(id, handle) {
    createClass._classCallCheck(this, Profile);
    this.id = id;
    this.handle = handle;
  }
  createClass._createClass(Profile, null, [{
    key: "create",
    value: function create(_ref) {
      var id = _ref.id,
        handle = _ref.handle;
      return new Profile(id, handle);
    }
  }]);
  return Profile;
}();

var PublicationReportReason = /*#__PURE__*/function (PublicationReportReason) {
  PublicationReportReason["ANIMAL_ABUSE"] = "ANIMAL_ABUSE";
  PublicationReportReason["HARASSMENT"] = "HARASSMENT";
  PublicationReportReason["VIOLENCE"] = "VIOLENCE";
  PublicationReportReason["SELF_HARM"] = "SELF_HARM";
  PublicationReportReason["DIRECT_THREAT"] = "DIRECT_THREAT";
  PublicationReportReason["HATE_SPEECH"] = "HATE_SPEECH";
  PublicationReportReason["NUDITY"] = "NUDITY";
  PublicationReportReason["OFFENSIVE"] = "OFFENSIVE";
  PublicationReportReason["SCAM"] = "SCAM";
  PublicationReportReason["UNAUTHORIZED_SALE"] = "UNAUTHORIZED_SALE";
  PublicationReportReason["IMPERSONATION"] = "IMPERSONATION";
  PublicationReportReason["MISLEADING"] = "MISLEADING";
  PublicationReportReason["MISUSE_HASHTAGS"] = "MISUSE_HASHTAGS";
  PublicationReportReason["UNRELATED"] = "UNRELATED";
  PublicationReportReason["REPETITIVE"] = "REPETITIVE";
  PublicationReportReason["FAKE_ENGAGEMENT"] = "FAKE_ENGAGEMENT";
  PublicationReportReason["MANIPULATION_ALGO"] = "MANIPULATION_ALGO";
  PublicationReportReason["SOMETHING_ELSE"] = "SOMETHING_ELSE";
  return PublicationReportReason;
}({});

exports.Profile = Profile;
exports.PublicationReportReason = PublicationReportReason;
