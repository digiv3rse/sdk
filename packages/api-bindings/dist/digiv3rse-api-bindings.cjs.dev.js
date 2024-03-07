'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Apollo = require('@apollo/client');
var generated = require('./generated-131b02fb.cjs.dev.js');
var context = require('@apollo/client/link/context');
var error = require('@apollo/client/link/error');
var utilities = require('@apollo/client/utilities');
var sharedKernel = require('@digiv3rse/shared-kernel');
require('graphql-tag');
require('@digiv3rse/domain/use-cases/profile');
require('@digiv3rse/domain/entities');
require('@digiv3rse/domain/use-cases/publications');

function semVer(value) {
  // for now just asserts the type, in future it will enforce a format
  return value;
}

var DIGI_API_MINIMAL_SUPPORTED_VERSION = semVer('1.49');

var validationRegex = /^[a-z](?:[a-z0-9_]{4,25})$/;

/**
 * @group Helpers
 */
function isValidHandle(handle) {
  return validationRegex.test(handle);
}

function omitTypename(target) {
  return sharedKernel.omitDeep(target, '__typename');
}

/**
 * This hooks uses the codegen generated GetPublications query hook so that it
 * can returns paginated results of Comment in a type safe way.
 */
function useGetComments(options) {
  return Apollo.useQuery(generated.GetPublicationsDocument, options);
}
/**
 * This is a patched version of the codegen generated useSearchProfilesQuery hook.
 * It is patched to return paginated results of Profile instead of union with `{}` type.
 *
 * See: https://github.com/dotansimha/graphql-code-generator/discussions/5567
 */
function useSearchProfiles(options) {
  return Apollo.useQuery(generated.SearchProfilesDocument, options);
}
/**
 * This is a patched version of the codegen generated useSearchPublicationsQuery hook.
 * It is patched to return paginated results of ContentPublication instead of union with `{}` type.
 *
 * See: https://github.com/dotansimha/graphql-code-generator/discussions/5567
 */
function useSearchPublications(options) {
  return Apollo.useQuery(generated.SearchPublicationsDocument, options);
}
/**
 * This is a patched version of the codegen generated useGetProfileBookmarks hook.
 * It is patched to return paginated results of ContentPublication instead of union with `{}` type.
 *
 * See: https://github.com/dotansimha/graphql-code-generator/discussions/5567
 */
function useGetProfileBookmarks(options) {
  return Apollo.useQuery(generated.GetProfileBookmarksDocument, options);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || generated._unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

/**
 * An error code that's coming from `apollo-server-errors` `AuthenticationError`
 */
var AUTHENTICATION_ERROR_CODE = 'UNAUTHENTICATED';
function createAuthLink(accessTokenStorage) {
  var errorLink = error.onError(function (_ref) {
    var graphQLErrors = _ref.graphQLErrors,
      operation = _ref.operation,
      forward = _ref.forward;
    if (graphQLErrors && graphQLErrors.some(function (error) {
      var _error$extensions;
      return ((_error$extensions = error.extensions) === null || _error$extensions === void 0 ? void 0 : _error$extensions.code) === AUTHENTICATION_ERROR_CODE;
    })) {
      return Apollo.fromPromise(accessTokenStorage.refreshToken()).flatMap(function () {
        return forward(operation);
      });
    }
    return;
  });
  var authHeaderLink = context.setContext(function () {
    var token = accessTokenStorage.getAccessToken();
    if (token) {
      return {
        headers: {
          authorization: "Bearer ".concat(token)
        }
      };
    }
    return;
  });
  return Apollo.from([errorLink, authHeaderLink]);
}
var backupFetch = utilities.maybe(function () {
  return fetch;
});
function wrapFetch(logger, supportedVersion, fetch) {
  return /*#__PURE__*/generated._asyncToGenerator( /*#__PURE__*/generated._regeneratorRuntime().mark(function _callee() {
    var response,
      apiVersion,
      _apiVersion$split,
      _apiVersion$split2,
      apiMajor,
      apiMinor,
      _supportedVersion$spl,
      _supportedVersion$spl2,
      clientMajor,
      clientMinor,
      _args = arguments;
    return generated._regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch.apply(void 0, _args);
        case 2:
          response = _context.sent;
          if (!(response.status === 200)) {
            _context.next = 17;
            break;
          }
          apiVersion = response.headers.get('x-api-version');
          if (!apiVersion) {
            _context.next = 17;
            break;
          }
          if (!(apiVersion < supportedVersion)) {
            _context.next = 9;
            break;
          }
          logger.error("The DiGi API ".concat(apiVersion, " is outside of the DiGi SDK support range ^").concat(supportedVersion));
          return _context.abrupt("return", response);
        case 9:
          _apiVersion$split = apiVersion.split('.'), _apiVersion$split2 = _slicedToArray(_apiVersion$split, 2), apiMajor = _apiVersion$split2[0], apiMinor = _apiVersion$split2[1];
          _supportedVersion$spl = supportedVersion.split('.'), _supportedVersion$spl2 = _slicedToArray(_supportedVersion$spl, 2), clientMajor = _supportedVersion$spl2[0], clientMinor = _supportedVersion$spl2[1];
          if (!(apiMajor && clientMajor && apiMajor > clientMajor)) {
            _context.next = 14;
            break;
          }
          logger.warn("The DiGi API ".concat(apiVersion, " is NOT supported by the DiGi SDK support range ^").concat(supportedVersion, ". Update your DiGi SDK client to the latest version."));
          return _context.abrupt("return", response);
        case 14:
          if (!(apiMinor && clientMinor && apiMinor > clientMinor)) {
            _context.next = 17;
            break;
          }
          logger.info("The DiGi API ".concat(apiVersion, " is ahead of the DiGi SDK support range ^").concat(supportedVersion, ". Check for a new version of the DiGi SDK client, if available."));
          return _context.abrupt("return", response);
        case 17:
          return _context.abrupt("return", response);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
}
function createDiGiLink(_ref3) {
  var _ref4, _ref5;
  var preferredFetch = _ref3.fetch,
    logger = _ref3.logger,
    supportedVersion = _ref3.supportedVersion,
    uri = _ref3.uri;
  // see https://github.com/apollographql/apollo-client/blob/4bf773f64b78f15419f07676f434fa33e058404e/src/link/http/createHttpLink.ts#L160-L165
  var currentFetch = (_ref4 = (_ref5 = preferredFetch !== null && preferredFetch !== void 0 ? preferredFetch : utilities.maybe(function () {
    return fetch;
  })) !== null && _ref5 !== void 0 ? _ref5 : backupFetch) !== null && _ref4 !== void 0 ? _ref4 : sharedKernel.never();
  return new Apollo.HttpLink({
    uri: uri,
    fetch: wrapFetch(logger, supportedVersion, currentFetch)
  });
}
function createSnapshotLink(_ref6) {
  var uri = _ref6.uri;
  return new Apollo.HttpLink({
    uri: uri
  });
}

var snapshotRegExp = /https:\/\/snapshot\.org\/#\/([^/]+)\/proposal\/(0x[a-fA-F0-9]+)/;
var snapshotDemoRegExp = /https:\/\/demo\.snapshot\.org\/#\/([^/]+)\/proposal\/(0x[a-fA-F0-9]+)/;
function snapshotUrlMatcher(pattern, url) {
  var _pattern$exec;
  var _ref = (_pattern$exec = pattern.exec(url)) !== null && _pattern$exec !== void 0 ? _pattern$exec : [],
    _ref2 = _slicedToArray(_ref, 3),
    spaceId = _ref2[1],
    proposalId = _ref2[2];
  if (spaceId && proposalId) {
    return {
      type: generated.ContentInsightType.SNAPSHOT_POLL,
      spaceId: spaceId,
      proposalId: proposalId,
      url: url
    };
  }
  return null;
}
function snapshotPoll(url) {
  return snapshotUrlMatcher(snapshotRegExp, url);
}
function demoSnapshotPoll(url) {
  return snapshotUrlMatcher(snapshotDemoRegExp, url);
}

function createDiGiApolloClient(_ref) {
  var accessTokenStorage = _ref.accessTokenStorage,
    backendURL = _ref.backendURL,
    logger = _ref.logger,
    pollingInterval = _ref.pollingInterval,
    contentMatchers = _ref.contentMatchers;
  var uri = "".concat(backendURL, "/graphql");
  var authLink = createAuthLink(accessTokenStorage);
  var httpLink = createDiGiLink({
    uri: uri,
    logger: logger,
    supportedVersion: DIGI_API_MINIMAL_SUPPORTED_VERSION
  });
  return new generated.SafeApolloClient({
    connectToDevTools: true,
    cache: generated.createDiGiCache({
      contentMatchers: contentMatchers
    }),
    link: Apollo.from([authLink, httpLink]),
    pollingInterval: pollingInterval,
    version: DIGI_API_MINIMAL_SUPPORTED_VERSION
  });
}
function createAuthApolloClient(_ref2) {
  var backendURL = _ref2.backendURL,
    logger = _ref2.logger;
  var uri = "".concat(backendURL, "/graphql");
  return new generated.SafeApolloClient({
    cache: generated.createDiGiCache(),
    link: createDiGiLink({
      uri: uri,
      logger: logger,
      supportedVersion: DIGI_API_MINIMAL_SUPPORTED_VERSION
    }),
    version: DIGI_API_MINIMAL_SUPPORTED_VERSION
  });
}
function createSnapshotApolloClient(_ref3) {
  var backendURL = _ref3.backendURL;
  return new generated.SafeApolloClient({
    cache: generated.createSnapshotCache(),
    link: createSnapshotLink({
      uri: "".concat(backendURL, "/graphql")
    })
  });
}

/**
 * @experimental
 */
exports.SnapshotVotingSystem = void 0;
(function (SnapshotVotingSystem) {
  SnapshotVotingSystem["SINGLE_CHOICE"] = "single-choice";
  SnapshotVotingSystem["APPROVAL"] = "approval";
  SnapshotVotingSystem["QUADRATIC"] = "quadratic";
  SnapshotVotingSystem["RANKED_CHOICE"] = "ranked-choice";
  SnapshotVotingSystem["WEIGHTED"] = "weighted";
  SnapshotVotingSystem["BASIC"] = "basic";
})(exports.SnapshotVotingSystem || (exports.SnapshotVotingSystem = {}));

exports.AddNotInterestedDocument = generated.AddNotInterestedDocument;
exports.AddReactionDocument = generated.AddReactionDocument;
exports.AddToMyBookmarksDocument = generated.AddToMyBookmarksDocument;
exports.AuthAuthenticateDocument = generated.AuthAuthenticateDocument;
exports.AuthChallengeDocument = generated.AuthChallengeDocument;
exports.AuthRefreshDocument = generated.AuthRefreshDocument;
exports.BroadcastOffChainDocument = generated.BroadcastOffChainDocument;
exports.BroadcastOnChainDocument = generated.BroadcastOnChainDocument;
Object.defineProperty(exports, 'ClaimStatus', {
  enumerable: true,
  get: function () { return generated.ClaimStatus; }
});
Object.defineProperty(exports, 'CollectModules', {
  enumerable: true,
  get: function () { return generated.CollectModules; }
});
Object.defineProperty(exports, 'CollectState', {
  enumerable: true,
  get: function () { return generated.CollectState; }
});
Object.defineProperty(exports, 'CommentOrderingTypes', {
  enumerable: true,
  get: function () { return generated.CommentOrderingTypes; }
});
Object.defineProperty(exports, 'CommentRankingFilter', {
  enumerable: true,
  get: function () { return generated.CommentRankingFilter; }
});
Object.defineProperty(exports, 'ContentInsightType', {
  enumerable: true,
  get: function () { return generated.ContentInsightType; }
});
Object.defineProperty(exports, 'ContractType', {
  enumerable: true,
  get: function () { return generated.ContractType; }
});
exports.CreateCollectTypedDataDocument = generated.CreateCollectTypedDataDocument;
exports.CreateCommentTypedDataDocument = generated.CreateCommentTypedDataDocument;
exports.CreateCommentViaDispatcherDocument = generated.CreateCommentViaDispatcherDocument;
exports.CreateDataAvailabilityCommentTypedDataDocument = generated.CreateDataAvailabilityCommentTypedDataDocument;
exports.CreateDataAvailabilityCommentViaDispatcherDocument = generated.CreateDataAvailabilityCommentViaDispatcherDocument;
exports.CreateDataAvailabilityMirrorTypedDataDocument = generated.CreateDataAvailabilityMirrorTypedDataDocument;
exports.CreateDataAvailabilityMirrorViaDispatcherDocument = generated.CreateDataAvailabilityMirrorViaDispatcherDocument;
exports.CreateDataAvailabilityPostTypedDataDocument = generated.CreateDataAvailabilityPostTypedDataDocument;
exports.CreateDataAvailabilityPostViaDispatcherDocument = generated.CreateDataAvailabilityPostViaDispatcherDocument;
exports.CreateFollowTypedDataDocument = generated.CreateFollowTypedDataDocument;
exports.CreateMirrorTypedDataDocument = generated.CreateMirrorTypedDataDocument;
exports.CreateMirrorViaDispatcherDocument = generated.CreateMirrorViaDispatcherDocument;
exports.CreatePostTypedDataDocument = generated.CreatePostTypedDataDocument;
exports.CreatePostViaDispatcherDocument = generated.CreatePostViaDispatcherDocument;
exports.CreateProfileDocument = generated.CreateProfileDocument;
exports.CreateSetDispatcherTypedDataDocument = generated.CreateSetDispatcherTypedDataDocument;
exports.CreateSetFollowModuleTypedDataDocument = generated.CreateSetFollowModuleTypedDataDocument;
exports.CreateSetProfileImageUriTypedDataDocument = generated.CreateSetProfileImageUriTypedDataDocument;
exports.CreateSetProfileImageUriViaDispatcherDocument = generated.CreateSetProfileImageUriViaDispatcherDocument;
exports.CreateSetProfileMetadataTypedDataDocument = generated.CreateSetProfileMetadataTypedDataDocument;
exports.CreateSetProfileMetadataViaDispatcherDocument = generated.CreateSetProfileMetadataViaDispatcherDocument;
exports.CreateUnfollowTypedDataDocument = generated.CreateUnfollowTypedDataDocument;
Object.defineProperty(exports, 'CustomFiltersTypes', {
  enumerable: true,
  get: function () { return generated.CustomFiltersTypes; }
});
Object.defineProperty(exports, 'DecryptFailReason', {
  enumerable: true,
  get: function () { return generated.DecryptFailReason; }
});
exports.EnabledModuleCurrenciesDocument = generated.EnabledModuleCurrenciesDocument;
exports.EnabledModulesDocument = generated.EnabledModulesDocument;
Object.defineProperty(exports, 'EncryptionProvider', {
  enumerable: true,
  get: function () { return generated.EncryptionProvider; }
});
exports.ExploreProfilesDocument = generated.ExploreProfilesDocument;
exports.ExplorePublicationsDocument = generated.ExplorePublicationsDocument;
exports.FeedDocument = generated.FeedDocument;
Object.defineProperty(exports, 'FeedEventItemType', {
  enumerable: true,
  get: function () { return generated.FeedEventItemType; }
});
Object.defineProperty(exports, 'FollowModules', {
  enumerable: true,
  get: function () { return generated.FollowModules; }
});
exports.FragmentAaveFeeCollectModuleSettings = generated.FragmentAaveFeeCollectModuleSettings;
exports.FragmentAndConditionOutput = generated.FragmentAndConditionOutput;
exports.FragmentAnyConditionOutput = generated.FragmentAnyConditionOutput;
exports.FragmentAttribute = generated.FragmentAttribute;
exports.FragmentBroadcastOffChainResult = generated.FragmentBroadcastOffChainResult;
exports.FragmentBroadcastOnChainResult = generated.FragmentBroadcastOnChainResult;
exports.FragmentCollectConditionOutput = generated.FragmentCollectConditionOutput;
exports.FragmentCollectedEvent = generated.FragmentCollectedEvent;
exports.FragmentComment = generated.FragmentComment;
exports.FragmentCommentBase = generated.FragmentCommentBase;
exports.FragmentCreateCommentEip712TypedData = generated.FragmentCreateCommentEip712TypedData;
exports.FragmentCreateMirrorEip712TypedData = generated.FragmentCreateMirrorEip712TypedData;
exports.FragmentCreatePostEip712TypedData = generated.FragmentCreatePostEip712TypedData;
exports.FragmentDataAvailabilityPublicationResult = generated.FragmentDataAvailabilityPublicationResult;
exports.FragmentDegreesOfSeparationReferenceModuleSettings = generated.FragmentDegreesOfSeparationReferenceModuleSettings;
exports.FragmentEip712TypedDataDomain = generated.FragmentEip712TypedDataDomain;
exports.FragmentElectedMirror = generated.FragmentElectedMirror;
exports.FragmentEnabledModule = generated.FragmentEnabledModule;
exports.FragmentEnabledModules = generated.FragmentEnabledModules;
exports.FragmentEncryptedFieldsOutput = generated.FragmentEncryptedFieldsOutput;
exports.FragmentEncryptedMedia = generated.FragmentEncryptedMedia;
exports.FragmentEncryptedMediaSet = generated.FragmentEncryptedMediaSet;
exports.FragmentEncryptionParamsOutput = generated.FragmentEncryptionParamsOutput;
exports.FragmentEoaOwnershipOutput = generated.FragmentEoaOwnershipOutput;
exports.FragmentErc20AmountFields = generated.FragmentErc20AmountFields;
exports.FragmentErc20Fields = generated.FragmentErc20Fields;
exports.FragmentErc20OwnershipOutput = generated.FragmentErc20OwnershipOutput;
exports.FragmentErc4626FeeCollectModuleSettings = generated.FragmentErc4626FeeCollectModuleSettings;
exports.FragmentFeeCollectModuleSettings = generated.FragmentFeeCollectModuleSettings;
exports.FragmentFeeFollowModuleSettings = generated.FragmentFeeFollowModuleSettings;
exports.FragmentFeedItem = generated.FragmentFeedItem;
exports.FragmentFollowConditionOutput = generated.FragmentFollowConditionOutput;
exports.FragmentFollowOnlyReferenceModuleSettings = generated.FragmentFollowOnlyReferenceModuleSettings;
exports.FragmentFollower = generated.FragmentFollower;
exports.FragmentFollowing = generated.FragmentFollowing;
exports.FragmentFreeCollectModuleSettings = generated.FragmentFreeCollectModuleSettings;
exports.FragmentLeafConditionOutput = generated.FragmentLeafConditionOutput;
exports.FragmentLimitedFeeCollectModuleSettings = generated.FragmentLimitedFeeCollectModuleSettings;
exports.FragmentLimitedTimedFeeCollectModuleSettings = generated.FragmentLimitedTimedFeeCollectModuleSettings;
exports.FragmentMedia = generated.FragmentMedia;
exports.FragmentMetadataAttributeOutput = generated.FragmentMetadataAttributeOutput;
exports.FragmentMetadataOutput = generated.FragmentMetadataOutput;
exports.FragmentMirror = generated.FragmentMirror;
exports.FragmentMirrorBase = generated.FragmentMirrorBase;
exports.FragmentMirrorEvent = generated.FragmentMirrorEvent;
exports.FragmentModuleFeeAmount = generated.FragmentModuleFeeAmount;
exports.FragmentModuleInfo = generated.FragmentModuleInfo;
exports.FragmentMultirecipientFeeCollectModuleSettings = generated.FragmentMultirecipientFeeCollectModuleSettings;
exports.FragmentNewCollectNotification = generated.FragmentNewCollectNotification;
exports.FragmentNewCommentNotification = generated.FragmentNewCommentNotification;
exports.FragmentNewFollowerNotification = generated.FragmentNewFollowerNotification;
exports.FragmentNewMentionNotification = generated.FragmentNewMentionNotification;
exports.FragmentNewMirrorNotification = generated.FragmentNewMirrorNotification;
exports.FragmentNewReactionNotification = generated.FragmentNewReactionNotification;
exports.FragmentNftImage = generated.FragmentNftImage;
exports.FragmentNftOwnershipOutput = generated.FragmentNftOwnershipOutput;
exports.FragmentOrConditionOutput = generated.FragmentOrConditionOutput;
exports.FragmentPaginatedResultInfo = generated.FragmentPaginatedResultInfo;
exports.FragmentPendingPost = generated.FragmentPendingPost;
exports.FragmentPost = generated.FragmentPost;
exports.FragmentProfile = generated.FragmentProfile;
exports.FragmentProfileCoverSet = generated.FragmentProfileCoverSet;
exports.FragmentProfileFields = generated.FragmentProfileFields;
exports.FragmentProfileFollowModuleSettings = generated.FragmentProfileFollowModuleSettings;
exports.FragmentProfileFollowRevenue = generated.FragmentProfileFollowRevenue;
exports.FragmentProfileGuardianResult = generated.FragmentProfileGuardianResult;
exports.FragmentProfileOwnershipOutput = generated.FragmentProfileOwnershipOutput;
exports.FragmentProfilePictureSet = generated.FragmentProfilePictureSet;
exports.FragmentProfileStats = generated.FragmentProfileStats;
exports.FragmentProxyActionError = generated.FragmentProxyActionError;
exports.FragmentProxyActionQueued = generated.FragmentProxyActionQueued;
exports.FragmentProxyActionStatusResult = generated.FragmentProxyActionStatusResult;
exports.FragmentPublication = generated.FragmentPublication;
exports.FragmentPublicationMediaSet = generated.FragmentPublicationMediaSet;
exports.FragmentPublicationRevenue = generated.FragmentPublicationRevenue;
exports.FragmentPublicationStats = generated.FragmentPublicationStats;
exports.FragmentReactionEvent = generated.FragmentReactionEvent;
exports.FragmentRelayError = generated.FragmentRelayError;
exports.FragmentRelayerResult = generated.FragmentRelayerResult;
exports.FragmentRevenueAggregate = generated.FragmentRevenueAggregate;
exports.FragmentRevertCollectModuleSettings = generated.FragmentRevertCollectModuleSettings;
exports.FragmentRevertFollowModuleSettings = generated.FragmentRevertFollowModuleSettings;
exports.FragmentRootConditionOutput = generated.FragmentRootConditionOutput;
exports.FragmentSimpleCollectModuleSettings = generated.FragmentSimpleCollectModuleSettings;
exports.FragmentTimedFeeCollectModuleSettings = generated.FragmentTimedFeeCollectModuleSettings;
exports.FragmentTransactionError = generated.FragmentTransactionError;
exports.FragmentTransactionIndexedResult = generated.FragmentTransactionIndexedResult;
exports.FragmentUnknownCollectModuleSettings = generated.FragmentUnknownCollectModuleSettings;
exports.FragmentUnknownFollowModuleSettings = generated.FragmentUnknownFollowModuleSettings;
exports.FragmentUnknownReferenceModuleSettings = generated.FragmentUnknownReferenceModuleSettings;
exports.FragmentWallet = generated.FragmentWallet;
exports.FragmentWhoReactedResult = generated.FragmentWhoReactedResult;
exports.GetAllProfilesDocument = generated.GetAllProfilesDocument;
exports.GetProfileBookmarksDocument = generated.GetProfileBookmarksDocument;
exports.GetProfileDocument = generated.GetProfileDocument;
exports.GetProfilePublicationRevenueDocument = generated.GetProfilePublicationRevenueDocument;
exports.GetPublicationDocument = generated.GetPublicationDocument;
exports.GetPublicationRevenueDocument = generated.GetPublicationRevenueDocument;
exports.GetPublicationsDocument = generated.GetPublicationsDocument;
exports.GetSnapshotProposalDocument = generated.GetSnapshotProposalDocument;
exports.HasTxHashBeenIndexedDocument = generated.HasTxHashBeenIndexedDocument;
exports.HidePublicationDocument = generated.HidePublicationDocument;
Object.defineProperty(exports, 'IdKitPhoneVerifyWebhookResultStatusType', {
  enumerable: true,
  get: function () { return generated.IdKitPhoneVerifyWebhookResultStatusType; }
});
Object.defineProperty(exports, 'MomokaValidatorError', {
  enumerable: true,
  get: function () { return generated.MomokaValidatorError; }
});
exports.MutualFollowersProfilesDocument = generated.MutualFollowersProfilesDocument;
Object.defineProperty(exports, 'NotificationTypes', {
  enumerable: true,
  get: function () { return generated.NotificationTypes; }
});
exports.NotificationsDocument = generated.NotificationsDocument;
exports.ProfileAttributeReader = generated.ProfileAttributeReader;
exports.ProfileFollowRevenueDocument = generated.ProfileFollowRevenueDocument;
exports.ProfileFollowersDocument = generated.ProfileFollowersDocument;
exports.ProfileFollowingDocument = generated.ProfileFollowingDocument;
exports.ProfileGuardianDocument = generated.ProfileGuardianDocument;
exports.ProfilePublicationsForSaleDocument = generated.ProfilePublicationsForSaleDocument;
Object.defineProperty(exports, 'ProfileSortCriteria', {
  enumerable: true,
  get: function () { return generated.ProfileSortCriteria; }
});
exports.ProfilesToFollowDocument = generated.ProfilesToFollowDocument;
exports.ProxyActionDocument = generated.ProxyActionDocument;
exports.ProxyActionStatusDocument = generated.ProxyActionStatusDocument;
Object.defineProperty(exports, 'ProxyActionStatusTypes', {
  enumerable: true,
  get: function () { return generated.ProxyActionStatusTypes; }
});
Object.defineProperty(exports, 'PublicationContentWarning', {
  enumerable: true,
  get: function () { return generated.PublicationContentWarning; }
});
Object.defineProperty(exports, 'PublicationMainFocus', {
  enumerable: true,
  get: function () { return generated.PublicationMainFocus; }
});
Object.defineProperty(exports, 'PublicationMediaSource', {
  enumerable: true,
  get: function () { return generated.PublicationMediaSource; }
});
Object.defineProperty(exports, 'PublicationMetadataDisplayTypes', {
  enumerable: true,
  get: function () { return generated.PublicationMetadataDisplayTypes; }
});
Object.defineProperty(exports, 'PublicationMetadataStatusType', {
  enumerable: true,
  get: function () { return generated.PublicationMetadataStatusType; }
});
Object.defineProperty(exports, 'PublicationReportingFraudSubreason', {
  enumerable: true,
  get: function () { return generated.PublicationReportingFraudSubreason; }
});
Object.defineProperty(exports, 'PublicationReportingIllegalSubreason', {
  enumerable: true,
  get: function () { return generated.PublicationReportingIllegalSubreason; }
});
Object.defineProperty(exports, 'PublicationReportingReason', {
  enumerable: true,
  get: function () { return generated.PublicationReportingReason; }
});
Object.defineProperty(exports, 'PublicationReportingSensitiveSubreason', {
  enumerable: true,
  get: function () { return generated.PublicationReportingSensitiveSubreason; }
});
Object.defineProperty(exports, 'PublicationReportingSpamSubreason', {
  enumerable: true,
  get: function () { return generated.PublicationReportingSpamSubreason; }
});
Object.defineProperty(exports, 'PublicationSortCriteria', {
  enumerable: true,
  get: function () { return generated.PublicationSortCriteria; }
});
Object.defineProperty(exports, 'PublicationTypes', {
  enumerable: true,
  get: function () { return generated.PublicationTypes; }
});
Object.defineProperty(exports, 'ReactionTypes', {
  enumerable: true,
  get: function () { return generated.ReactionTypes; }
});
Object.defineProperty(exports, 'ReferenceModules', {
  enumerable: true,
  get: function () { return generated.ReferenceModules; }
});
Object.defineProperty(exports, 'RelayErrorReasons', {
  enumerable: true,
  get: function () { return generated.RelayErrorReasons; }
});
Object.defineProperty(exports, 'RelayRoleKey', {
  enumerable: true,
  get: function () { return generated.RelayRoleKey; }
});
exports.RemoveFromMyBookmarksDocument = generated.RemoveFromMyBookmarksDocument;
exports.RemoveNotInterestedDocument = generated.RemoveNotInterestedDocument;
exports.RemoveReactionDocument = generated.RemoveReactionDocument;
exports.ReportPublicationDocument = generated.ReportPublicationDocument;
Object.defineProperty(exports, 'ScalarOperator', {
  enumerable: true,
  get: function () { return generated.ScalarOperator; }
});
exports.SearchProfilesDocument = generated.SearchProfilesDocument;
exports.SearchPublicationsDocument = generated.SearchPublicationsDocument;
Object.defineProperty(exports, 'SearchRequestTypes', {
  enumerable: true,
  get: function () { return generated.SearchRequestTypes; }
});
Object.defineProperty(exports, 'SessionType', {
  enumerable: true,
  get: function () { return generated.SessionType; }
});
Object.defineProperty(exports, 'TagSortCriteria', {
  enumerable: true,
  get: function () { return generated.TagSortCriteria; }
});
Object.defineProperty(exports, 'TransactionErrorReasons', {
  enumerable: true,
  get: function () { return generated.TransactionErrorReasons; }
});
Object.defineProperty(exports, 'TxStatus', {
  enumerable: true,
  get: function () { return generated.TxStatus; }
});
exports.UnreadNotificationCountDocument = generated.UnreadNotificationCountDocument;
exports.UnspecifiedError = generated.UnspecifiedError;
exports.ValidationError = generated.ValidationError;
exports.WhoCollectedPublicationDocument = generated.WhoCollectedPublicationDocument;
exports.WhoReactedPublicationDocument = generated.WhoReactedPublicationDocument;
Object.defineProperty(exports, 'WorldcoinPhoneVerifyType', {
  enumerable: true,
  get: function () { return generated.WorldcoinPhoneVerifyType; }
});
exports.authenticatedProfile = generated.authenticatedProfile;
exports.authenticatedWallet = generated.authenticatedWallet;
exports.authenticatedWith = generated.authenticatedWith;
exports.createCollectRequest = generated.createCollectRequest;
exports.erc20Amount = generated.erc20Amount;
exports.getAllPendingTransactions = generated.getAllPendingTransactions;
exports.getSession = generated.getSession;
exports.hasPendingTransactionWith = generated.hasPendingTransactionWith;
exports.hasSettledTransactionWith = generated.hasSettledTransactionWith;
exports.isCollectTransactionFor = generated.isCollectTransactionFor;
exports.isCommentPublication = generated.isCommentPublication;
exports.isContentPublication = generated.isContentPublication;
exports.isCursor = generated.isCursor;
exports.isDataAvailabilityPublicationId = generated.isDataAvailabilityPublicationId;
exports.isFollowTransactionFor = generated.isFollowTransactionFor;
exports.isGatedPublication = generated.isGatedPublication;
exports.isMirrorPublication = generated.isMirrorPublication;
exports.isMirrorTransactionFor = generated.isMirrorTransactionFor;
exports.isPollPublication = generated.isPollPublication;
exports.isPostPublication = generated.isPostPublication;
exports.isProfileOwnedByMe = generated.isProfileOwnedByMe;
exports.isPublicationOwnedByMe = generated.isPublicationOwnedByMe;
exports.isUnfollowTransactionFor = generated.isUnfollowTransactionFor;
exports.moduleFeeAmountParams = generated.moduleFeeAmountParams;
exports.notAuthenticated = generated.notAuthenticated;
exports.recentTransactionsVar = generated.recentTransactionsVar;
exports.resetSession = generated.resetSession;
exports.resolveCollectPolicy = generated.resolveCollectPolicy;
exports.updateSession = generated.updateSession;
exports.useAddNotInterested = generated.useAddNotInterested;
exports.useAddReaction = generated.useAddReaction;
exports.useAddToMyBookmarks = generated.useAddToMyBookmarks;
exports.useAuthAuthenticate = generated.useAuthAuthenticate;
exports.useAuthChallenge = generated.useAuthChallenge;
exports.useAuthChallengeLazyQuery = generated.useAuthChallengeLazyQuery;
exports.useAuthRefresh = generated.useAuthRefresh;
exports.useBroadcastOffChain = generated.useBroadcastOffChain;
exports.useBroadcastOnChain = generated.useBroadcastOnChain;
exports.useCreateCollectTypedData = generated.useCreateCollectTypedData;
exports.useCreateCommentTypedData = generated.useCreateCommentTypedData;
exports.useCreateCommentViaDispatcher = generated.useCreateCommentViaDispatcher;
exports.useCreateDataAvailabilityCommentTypedData = generated.useCreateDataAvailabilityCommentTypedData;
exports.useCreateDataAvailabilityCommentViaDispatcher = generated.useCreateDataAvailabilityCommentViaDispatcher;
exports.useCreateDataAvailabilityMirrorTypedData = generated.useCreateDataAvailabilityMirrorTypedData;
exports.useCreateDataAvailabilityMirrorViaDispatcher = generated.useCreateDataAvailabilityMirrorViaDispatcher;
exports.useCreateDataAvailabilityPostTypedData = generated.useCreateDataAvailabilityPostTypedData;
exports.useCreateDataAvailabilityPostViaDispatcher = generated.useCreateDataAvailabilityPostViaDispatcher;
exports.useCreateFollowTypedData = generated.useCreateFollowTypedData;
exports.useCreateMirrorTypedData = generated.useCreateMirrorTypedData;
exports.useCreateMirrorViaDispatcher = generated.useCreateMirrorViaDispatcher;
exports.useCreatePostTypedData = generated.useCreatePostTypedData;
exports.useCreatePostViaDispatcher = generated.useCreatePostViaDispatcher;
exports.useCreateProfile = generated.useCreateProfile;
exports.useCreateSetDispatcherTypedData = generated.useCreateSetDispatcherTypedData;
exports.useCreateSetFollowModuleTypedData = generated.useCreateSetFollowModuleTypedData;
exports.useCreateSetProfileImageUriTypedData = generated.useCreateSetProfileImageUriTypedData;
exports.useCreateSetProfileImageUriViaDispatcher = generated.useCreateSetProfileImageUriViaDispatcher;
exports.useCreateSetProfileMetadataTypedData = generated.useCreateSetProfileMetadataTypedData;
exports.useCreateSetProfileMetadataViaDispatcher = generated.useCreateSetProfileMetadataViaDispatcher;
exports.useCreateUnfollowTypedData = generated.useCreateUnfollowTypedData;
exports.useEnabledModuleCurrencies = generated.useEnabledModuleCurrencies;
exports.useEnabledModuleCurrenciesLazyQuery = generated.useEnabledModuleCurrenciesLazyQuery;
exports.useEnabledModules = generated.useEnabledModules;
exports.useEnabledModulesLazyQuery = generated.useEnabledModulesLazyQuery;
exports.useExploreProfiles = generated.useExploreProfiles;
exports.useExploreProfilesLazyQuery = generated.useExploreProfilesLazyQuery;
exports.useExplorePublications = generated.useExplorePublications;
exports.useExplorePublicationsLazyQuery = generated.useExplorePublicationsLazyQuery;
exports.useFeed = generated.useFeed;
exports.useFeedLazyQuery = generated.useFeedLazyQuery;
exports.useGetAllProfiles = generated.useGetAllProfiles;
exports.useGetAllProfilesLazyQuery = generated.useGetAllProfilesLazyQuery;
exports.useGetProfile = generated.useGetProfile;
exports.useGetProfileBookmarksLazyQuery = generated.useGetProfileBookmarksLazyQuery;
exports.useGetProfileLazyQuery = generated.useGetProfileLazyQuery;
exports.useGetProfilePublicationRevenue = generated.useGetProfilePublicationRevenue;
exports.useGetProfilePublicationRevenueLazyQuery = generated.useGetProfilePublicationRevenueLazyQuery;
exports.useGetPublication = generated.useGetPublication;
exports.useGetPublicationLazyQuery = generated.useGetPublicationLazyQuery;
exports.useGetPublicationRevenue = generated.useGetPublicationRevenue;
exports.useGetPublicationRevenueLazyQuery = generated.useGetPublicationRevenueLazyQuery;
exports.useGetPublications = generated.useGetPublications;
exports.useGetPublicationsLazyQuery = generated.useGetPublicationsLazyQuery;
exports.useGetSnapshotProposal = generated.useGetSnapshotProposal;
exports.useHasPendingTransaction = generated.useHasPendingTransaction;
exports.useHasTxHashBeenIndexed = generated.useHasTxHashBeenIndexed;
exports.useHasTxHashBeenIndexedLazyQuery = generated.useHasTxHashBeenIndexedLazyQuery;
exports.useHidePublication = generated.useHidePublication;
exports.useMutualFollowersProfiles = generated.useMutualFollowersProfiles;
exports.useMutualFollowersProfilesLazyQuery = generated.useMutualFollowersProfilesLazyQuery;
exports.useNotifications = generated.useNotifications;
exports.useNotificationsLazyQuery = generated.useNotificationsLazyQuery;
exports.useProfileFollowRevenue = generated.useProfileFollowRevenue;
exports.useProfileFollowRevenueLazyQuery = generated.useProfileFollowRevenueLazyQuery;
exports.useProfileFollowers = generated.useProfileFollowers;
exports.useProfileFollowersLazyQuery = generated.useProfileFollowersLazyQuery;
exports.useProfileFollowing = generated.useProfileFollowing;
exports.useProfileFollowingLazyQuery = generated.useProfileFollowingLazyQuery;
exports.useProfileGuardian = generated.useProfileGuardian;
exports.useProfileGuardianLazyQuery = generated.useProfileGuardianLazyQuery;
exports.useProfilePublicationsForSale = generated.useProfilePublicationsForSale;
exports.useProfilePublicationsForSaleLazyQuery = generated.useProfilePublicationsForSaleLazyQuery;
exports.useProfilesToFollow = generated.useProfilesToFollow;
exports.useProfilesToFollowLazyQuery = generated.useProfilesToFollowLazyQuery;
exports.useProxyAction = generated.useProxyAction;
exports.useProxyActionStatus = generated.useProxyActionStatus;
exports.useProxyActionStatusLazyQuery = generated.useProxyActionStatusLazyQuery;
exports.useRecentTransactionsVar = generated.useRecentTransactionsVar;
exports.useRemoveFromMyBookmarks = generated.useRemoveFromMyBookmarks;
exports.useRemoveNotInterested = generated.useRemoveNotInterested;
exports.useRemoveReaction = generated.useRemoveReaction;
exports.useReportPublication = generated.useReportPublication;
exports.useSearchProfilesLazyQuery = generated.useSearchProfilesLazyQuery;
exports.useSearchPublicationsLazyQuery = generated.useSearchPublicationsLazyQuery;
exports.useSessionVar = generated.useSessionVar;
exports.useUnreadNotificationCount = generated.useUnreadNotificationCount;
exports.useUnreadNotificationCountLazyQuery = generated.useUnreadNotificationCountLazyQuery;
exports.useWaitUntilTransactionSettled = generated.useWaitUntilTransactionSettled;
exports.useWhoCollectedPublication = generated.useWhoCollectedPublication;
exports.useWhoCollectedPublicationLazyQuery = generated.useWhoCollectedPublicationLazyQuery;
exports.useWhoReactedPublication = generated.useWhoReactedPublication;
exports.useWhoReactedPublicationLazyQuery = generated.useWhoReactedPublicationLazyQuery;
exports.createAuthApolloClient = createAuthApolloClient;
exports.createDiGiApolloClient = createDiGiApolloClient;
exports.createSnapshotApolloClient = createSnapshotApolloClient;
exports.demoSnapshotPoll = demoSnapshotPoll;
exports.isValidHandle = isValidHandle;
exports.omitTypename = omitTypename;
exports.snapshotPoll = snapshotPoll;
exports.useGetComments = useGetComments;
exports.useGetProfileBookmarks = useGetProfileBookmarks;
exports.useSearchProfiles = useSearchProfiles;
exports.useSearchPublications = useSearchPublications;
