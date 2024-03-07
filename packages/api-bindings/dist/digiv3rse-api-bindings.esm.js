import { useQuery, fromPromise, from, HttpLink } from '@apollo/client';
import { G as GetPublicationsDocument, S as SearchProfilesDocument, a as SearchPublicationsDocument, b as GetProfileBookmarksDocument, _ as _unsupportedIterableToArray, c as _asyncToGenerator, d as _regeneratorRuntime, C as ContentInsightType, e as SafeApolloClient, f as createDiGiCache, g as createSnapshotCache } from './generated-13a8dc7d.esm.js';
export { di as AddNotInterestedDocument, dD as AddReactionDocument, dm as AddToMyBookmarksDocument, bP as AuthAuthenticateDocument, bM as AuthChallengeDocument, bR as AuthRefreshDocument, e0 as BroadcastOffChainDocument, d_ as BroadcastOnChainDocument, H as ClaimStatus, I as CollectModules, E as CollectState, J as CommentOrderingTypes, K as CommentRankingFilter, C as ContentInsightType, L as ContractType, bT as CreateCollectTypedDataDocument, bV as CreateCommentTypedDataDocument, bX as CreateCommentViaDispatcherDocument, bZ as CreateDataAvailabilityCommentTypedDataDocument, b$ as CreateDataAvailabilityCommentViaDispatcherDocument, cg as CreateDataAvailabilityMirrorTypedDataDocument, ci as CreateDataAvailabilityMirrorViaDispatcherDocument, cx as CreateDataAvailabilityPostTypedDataDocument, cz as CreateDataAvailabilityPostViaDispatcherDocument, ca as CreateFollowTypedDataDocument, cc as CreateMirrorTypedDataDocument, ce as CreateMirrorViaDispatcherDocument, ct as CreatePostTypedDataDocument, cv as CreatePostViaDispatcherDocument, cP as CreateProfileDocument, cB as CreateSetDispatcherTypedDataDocument, cU as CreateSetFollowModuleTypedDataDocument, cW as CreateSetProfileImageUriTypedDataDocument, cY as CreateSetProfileImageUriViaDispatcherDocument, c_ as CreateSetProfileMetadataTypedDataDocument, d0 as CreateSetProfileMetadataViaDispatcherDocument, e2 as CreateUnfollowTypedDataDocument, M as CustomFiltersTypes, N as DecryptFailReason, c1 as EnabledModuleCurrenciesDocument, ck as EnabledModulesDocument, O as EncryptionProvider, c7 as ExploreProfilesDocument, dt as ExplorePublicationsDocument, c4 as FeedDocument, P as FeedEventItemType, Q as FollowModules, aU as FragmentAaveFeeCollectModuleSettings, az as FragmentAndConditionOutput, aA as FragmentAnyConditionOutput, aQ as FragmentAttribute, bJ as FragmentBroadcastOffChainResult, bH as FragmentBroadcastOnChainResult, aw as FragmentCollectConditionOutput, bf as FragmentCollectedEvent, b9 as FragmentComment, b6 as FragmentCommentBase, al as FragmentCreateCommentEip712TypedData, bj as FragmentCreateMirrorEip712TypedData, bt as FragmentCreatePostEip712TypedData, bI as FragmentDataAvailabilityPublicationResult, b4 as FragmentDegreesOfSeparationReferenceModuleSettings, ak as FragmentEip712TypedDataDomain, bd as FragmentElectedMirror, bl as FragmentEnabledModule, bm as FragmentEnabledModules, aD as FragmentEncryptedFieldsOutput, aC as FragmentEncryptedMedia, bi as FragmentEncryptedMediaSet, aE as FragmentEncryptionParamsOutput, at as FragmentEoaOwnershipOutput, bB as FragmentErc20AmountFields, aK as FragmentErc20Fields, as as FragmentErc20OwnershipOutput, aV as FragmentErc4626FeeCollectModuleSettings, aZ as FragmentFeeCollectModuleSettings, aM as FragmentFeeFollowModuleSettings, bh as FragmentFeedItem, av as FragmentFollowConditionOutput, b3 as FragmentFollowOnlyReferenceModuleSettings, bv as FragmentFollower, bw as FragmentFollowing, aY as FragmentFreeCollectModuleSettings, ax as FragmentLeafConditionOutput, a_ as FragmentLimitedFeeCollectModuleSettings, a$ as FragmentLimitedTimedFeeCollectModuleSettings, ao as FragmentMedia, aq as FragmentMetadataAttributeOutput, aF as FragmentMetadataOutput, ba as FragmentMirror, b8 as FragmentMirrorBase, be as FragmentMirrorEvent, aL as FragmentModuleFeeAmount, bk as FragmentModuleInfo, aW as FragmentMultirecipientFeeCollectModuleSettings, bo as FragmentNewCollectNotification, bq as FragmentNewCommentNotification, bn as FragmentNewFollowerNotification, br as FragmentNewMentionNotification, bp as FragmentNewMirrorNotification, bs as FragmentNewReactionNotification, aG as FragmentNftImage, ar as FragmentNftOwnershipOutput, ay as FragmentOrConditionOutput, am as FragmentPaginatedResultInfo, bc as FragmentPendingPost, b7 as FragmentPost, aS as FragmentProfile, aI as FragmentProfileCoverSet, aR as FragmentProfileFields, aN as FragmentProfileFollowModuleSettings, bE as FragmentProfileFollowRevenue, bu as FragmentProfileGuardianResult, au as FragmentProfileOwnershipOutput, aH as FragmentProfilePictureSet, aJ as FragmentProfileStats, by as FragmentProxyActionError, bz as FragmentProxyActionQueued, bx as FragmentProxyActionStatusResult, bb as FragmentPublication, ap as FragmentPublicationMediaSet, bD as FragmentPublicationRevenue, an as FragmentPublicationStats, bg as FragmentReactionEvent, bG as FragmentRelayError, bF as FragmentRelayerResult, bC as FragmentRevenueAggregate, b0 as FragmentRevertCollectModuleSettings, aO as FragmentRevertFollowModuleSettings, aB as FragmentRootConditionOutput, b2 as FragmentSimpleCollectModuleSettings, b1 as FragmentTimedFeeCollectModuleSettings, bL as FragmentTransactionError, bK as FragmentTransactionIndexedResult, aX as FragmentUnknownCollectModuleSettings, aP as FragmentUnknownFollowModuleSettings, b5 as FragmentUnknownReferenceModuleSettings, aT as FragmentWallet, bA as FragmentWhoReactedResult, cM as GetAllProfilesDocument, b as GetProfileBookmarksDocument, cJ as GetProfileDocument, dP as GetProfilePublicationRevenueDocument, dd as GetPublicationDocument, dM as GetPublicationRevenueDocument, G as GetPublicationsDocument, h as GetSnapshotProposalDocument, dX as HasTxHashBeenIndexedDocument, dg as HidePublicationDocument, R as IdKitPhoneVerifyWebhookResultStatusType, W as MomokaValidatorError, cR as MutualFollowersProfilesDocument, X as NotificationTypes, cn as NotificationsDocument, e4 as ProfileAttributeReader, dS as ProfileFollowRevenueDocument, d2 as ProfileFollowersDocument, d5 as ProfileFollowingDocument, cD as ProfileGuardianDocument, dz as ProfilePublicationsForSaleDocument, Y as ProfileSortCriteria, cG as ProfilesToFollowDocument, db as ProxyActionDocument, d8 as ProxyActionStatusDocument, Z as ProxyActionStatusTypes, $ as PublicationContentWarning, a0 as PublicationMainFocus, a1 as PublicationMediaSource, a2 as PublicationMetadataDisplayTypes, a3 as PublicationMetadataStatusType, a4 as PublicationReportingFraudSubreason, a5 as PublicationReportingIllegalSubreason, a6 as PublicationReportingReason, a7 as PublicationReportingSensitiveSubreason, a8 as PublicationReportingSpamSubreason, a9 as PublicationSortCriteria, aa as PublicationTypes, ab as ReactionTypes, ac as ReferenceModules, ad as RelayErrorReasons, ae as RelayRoleKey, dp as RemoveFromMyBookmarksDocument, dk as RemoveNotInterestedDocument, dF as RemoveReactionDocument, dK as ReportPublicationDocument, af as ScalarOperator, S as SearchProfilesDocument, a as SearchPublicationsDocument, ag as SearchRequestTypes, t as SessionType, ah as TagSortCriteria, ai as TransactionErrorReasons, T as TxStatus, cq as UnreadNotificationCountDocument, U as UnspecifiedError, V as ValidationError, dw as WhoCollectedPublicationDocument, dH as WhoReactedPublicationDocument, aj as WorldcoinPhoneVerifyType, x as authenticatedProfile, w as authenticatedWallet, y as authenticatedWith, eg as createCollectRequest, e5 as erc20Amount, k as getAllPendingTransactions, z as getSession, i as hasPendingTransactionWith, j as hasSettledTransactionWith, q as isCollectTransactionFor, e9 as isCommentPublication, ee as isContentPublication, F as isCursor, eb as isDataAvailabilityPublicationId, o as isFollowTransactionFor, ec as isGatedPublication, ea as isMirrorPublication, s as isMirrorTransactionFor, ed as isPollPublication, e8 as isPostPublication, e7 as isProfileOwnedByMe, ef as isPublicationOwnedByMe, p as isUnfollowTransactionFor, e6 as moduleFeeAmountParams, v as notAuthenticated, r as recentTransactionsVar, B as resetSession, eh as resolveCollectPolicy, D as updateSession, dj as useAddNotInterested, dE as useAddReaction, dn as useAddToMyBookmarks, bQ as useAuthAuthenticate, bN as useAuthChallenge, bO as useAuthChallengeLazyQuery, bS as useAuthRefresh, e1 as useBroadcastOffChain, d$ as useBroadcastOnChain, bU as useCreateCollectTypedData, bW as useCreateCommentTypedData, bY as useCreateCommentViaDispatcher, b_ as useCreateDataAvailabilityCommentTypedData, c0 as useCreateDataAvailabilityCommentViaDispatcher, ch as useCreateDataAvailabilityMirrorTypedData, cj as useCreateDataAvailabilityMirrorViaDispatcher, cy as useCreateDataAvailabilityPostTypedData, cA as useCreateDataAvailabilityPostViaDispatcher, cb as useCreateFollowTypedData, cd as useCreateMirrorTypedData, cf as useCreateMirrorViaDispatcher, cu as useCreatePostTypedData, cw as useCreatePostViaDispatcher, cQ as useCreateProfile, cC as useCreateSetDispatcherTypedData, cV as useCreateSetFollowModuleTypedData, cX as useCreateSetProfileImageUriTypedData, cZ as useCreateSetProfileImageUriViaDispatcher, c$ as useCreateSetProfileMetadataTypedData, d1 as useCreateSetProfileMetadataViaDispatcher, e3 as useCreateUnfollowTypedData, c2 as useEnabledModuleCurrencies, c3 as useEnabledModuleCurrenciesLazyQuery, cl as useEnabledModules, cm as useEnabledModulesLazyQuery, c8 as useExploreProfiles, c9 as useExploreProfilesLazyQuery, du as useExplorePublications, dv as useExplorePublicationsLazyQuery, c5 as useFeed, c6 as useFeedLazyQuery, cN as useGetAllProfiles, cO as useGetAllProfilesLazyQuery, cK as useGetProfile, dC as useGetProfileBookmarksLazyQuery, cL as useGetProfileLazyQuery, dQ as useGetProfilePublicationRevenue, dR as useGetProfilePublicationRevenueLazyQuery, de as useGetPublication, df as useGetPublicationLazyQuery, dN as useGetPublicationRevenue, dO as useGetPublicationRevenueLazyQuery, dr as useGetPublications, ds as useGetPublicationsLazyQuery, u as useGetSnapshotProposal, m as useHasPendingTransaction, dY as useHasTxHashBeenIndexed, dZ as useHasTxHashBeenIndexedLazyQuery, dh as useHidePublication, cS as useMutualFollowersProfiles, cT as useMutualFollowersProfilesLazyQuery, co as useNotifications, cp as useNotificationsLazyQuery, dT as useProfileFollowRevenue, dU as useProfileFollowRevenueLazyQuery, d3 as useProfileFollowers, d4 as useProfileFollowersLazyQuery, d6 as useProfileFollowing, d7 as useProfileFollowingLazyQuery, cE as useProfileGuardian, cF as useProfileGuardianLazyQuery, dA as useProfilePublicationsForSale, dB as useProfilePublicationsForSaleLazyQuery, cH as useProfilesToFollow, cI as useProfilesToFollowLazyQuery, dc as useProxyAction, d9 as useProxyActionStatus, da as useProxyActionStatusLazyQuery, l as useRecentTransactionsVar, dq as useRemoveFromMyBookmarks, dl as useRemoveNotInterested, dG as useRemoveReaction, dL as useReportPublication, dW as useSearchProfilesLazyQuery, dV as useSearchPublicationsLazyQuery, A as useSessionVar, cr as useUnreadNotificationCount, cs as useUnreadNotificationCountLazyQuery, n as useWaitUntilTransactionSettled, dx as useWhoCollectedPublication, dy as useWhoCollectedPublicationLazyQuery, dI as useWhoReactedPublication, dJ as useWhoReactedPublicationLazyQuery } from './generated-13a8dc7d.esm.js';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { maybe } from '@apollo/client/utilities';
import { omitDeep, never } from '@digiv3rse/shared-kernel';
import 'graphql-tag';
import '@digiv3rse/domain/use-cases/profile';
import '@digiv3rse/domain/entities';
import '@digiv3rse/domain/use-cases/publications';

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
  return omitDeep(target, '__typename');
}

/**
 * This hooks uses the codegen generated GetPublications query hook so that it
 * can returns paginated results of Comment in a type safe way.
 */
function useGetComments(options) {
  return useQuery(GetPublicationsDocument, options);
}
/**
 * This is a patched version of the codegen generated useSearchProfilesQuery hook.
 * It is patched to return paginated results of Profile instead of union with `{}` type.
 *
 * See: https://github.com/dotansimha/graphql-code-generator/discussions/5567
 */
function useSearchProfiles(options) {
  return useQuery(SearchProfilesDocument, options);
}
/**
 * This is a patched version of the codegen generated useSearchPublicationsQuery hook.
 * It is patched to return paginated results of ContentPublication instead of union with `{}` type.
 *
 * See: https://github.com/dotansimha/graphql-code-generator/discussions/5567
 */
function useSearchPublications(options) {
  return useQuery(SearchPublicationsDocument, options);
}
/**
 * This is a patched version of the codegen generated useGetProfileBookmarks hook.
 * It is patched to return paginated results of ContentPublication instead of union with `{}` type.
 *
 * See: https://github.com/dotansimha/graphql-code-generator/discussions/5567
 */
function useGetProfileBookmarks(options) {
  return useQuery(GetProfileBookmarksDocument, options);
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
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

/**
 * An error code that's coming from `apollo-server-errors` `AuthenticationError`
 */
var AUTHENTICATION_ERROR_CODE = 'UNAUTHENTICATED';
function createAuthLink(accessTokenStorage) {
  var errorLink = onError(function (_ref) {
    var graphQLErrors = _ref.graphQLErrors,
      operation = _ref.operation,
      forward = _ref.forward;
    if (graphQLErrors && graphQLErrors.some(function (error) {
      var _error$extensions;
      return ((_error$extensions = error.extensions) === null || _error$extensions === void 0 ? void 0 : _error$extensions.code) === AUTHENTICATION_ERROR_CODE;
    })) {
      return fromPromise(accessTokenStorage.refreshToken()).flatMap(function () {
        return forward(operation);
      });
    }
    return;
  });
  var authHeaderLink = setContext(function () {
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
  return from([errorLink, authHeaderLink]);
}
var backupFetch = maybe(function () {
  return fetch;
});
function wrapFetch(logger, supportedVersion, fetch) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
    return _regeneratorRuntime().wrap(function _callee$(_context) {
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
  var currentFetch = (_ref4 = (_ref5 = preferredFetch !== null && preferredFetch !== void 0 ? preferredFetch : maybe(function () {
    return fetch;
  })) !== null && _ref5 !== void 0 ? _ref5 : backupFetch) !== null && _ref4 !== void 0 ? _ref4 : never();
  return new HttpLink({
    uri: uri,
    fetch: wrapFetch(logger, supportedVersion, currentFetch)
  });
}
function createSnapshotLink(_ref6) {
  var uri = _ref6.uri;
  return new HttpLink({
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
      type: ContentInsightType.SNAPSHOT_POLL,
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
  return new SafeApolloClient({
    connectToDevTools: true,
    cache: createDiGiCache({
      contentMatchers: contentMatchers
    }),
    link: from([authLink, httpLink]),
    pollingInterval: pollingInterval,
    version: DIGI_API_MINIMAL_SUPPORTED_VERSION
  });
}
function createAuthApolloClient(_ref2) {
  var backendURL = _ref2.backendURL,
    logger = _ref2.logger;
  var uri = "".concat(backendURL, "/graphql");
  return new SafeApolloClient({
    cache: createDiGiCache(),
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
  return new SafeApolloClient({
    cache: createSnapshotCache(),
    link: createSnapshotLink({
      uri: "".concat(backendURL, "/graphql")
    })
  });
}

/**
 * @experimental
 */
var SnapshotVotingSystem;
(function (SnapshotVotingSystem) {
  SnapshotVotingSystem["SINGLE_CHOICE"] = "single-choice";
  SnapshotVotingSystem["APPROVAL"] = "approval";
  SnapshotVotingSystem["QUADRATIC"] = "quadratic";
  SnapshotVotingSystem["RANKED_CHOICE"] = "ranked-choice";
  SnapshotVotingSystem["WEIGHTED"] = "weighted";
  SnapshotVotingSystem["BASIC"] = "basic";
})(SnapshotVotingSystem || (SnapshotVotingSystem = {}));

export { SnapshotVotingSystem, createAuthApolloClient, createDiGiApolloClient, createSnapshotApolloClient, demoSnapshotPoll, isValidHandle, omitTypename, snapshotPoll, useGetComments, useGetProfileBookmarks, useSearchProfiles, useSearchPublications };
