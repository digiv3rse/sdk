'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var environments = require('../../dist/environments-ac2ffa95.cjs.dev.js');
var gatedContent = require('@digiv3rse/gated-content');
var web = require('@digiv3rse/gated-content/web');
var storage = require('@digiv3rse/storage');
var metadata = require('@digiv3rse/metadata');
var sharedKernel = require('@digiv3rse/shared-kernel');
var blockchainBindings = require('@digiv3rse/blockchain-bindings');
require('graphql-request');
require('graphql');
require('jwt-decode');
require('@digiv3rse/gated-content/environments');

/**
 * Gated module.
 *
 * @group DiGiClient Modules
 */
var Gated = /*#__PURE__*/function () {
  function Gated(client, authentication) {
    environments._classCallCheck(this, Gated);
    this.client = client;
    this.authentication = authentication;
  }

  /**
   * Encrypts Publication Metadata with the given access condition.
   *
   * ⚠️ Requires authenticated DiGiClient.
   *
   * @example
   * Typical usage:
   * 1) create metadata,
   * 2) encrypt it,
   * 3) upload it to a public location (e.g. IPFS, Arweave),
   * 4) use the resulting contentURI to create a DiGi publication.
   * ```ts
   * // create publication metadata via '@digiv3rse/metadata' helpers
   * const metadata = article({ content: '...' });
   *
   * // encrypt the metadata specifying the access condition
   * const result = await client.gated.encryptPublicationMetadata(
   *   metadata,
   *   eoaOwnershipCondition({
   *     address: signer.address,
   *   }),
   * );
   * const encrypted = result.unwrap();
   *
   * // upload the encrypted metadata your storage of choice
   * const contentURI = await uploadToIPFS(encrypted);
   *
   * // use the contentURI to create a publication
   * ```
   *
   * @example
   * Multiple criteria can be combined using the `orCondition` and `andCondition` helpers.
   * ```ts
   * const result = await client.gated.encryptPublicationMetadata(
   *   metadata,
   *   orCondition([
   *     profileOwnershipCondition({
   *       profileId: profile.id,
   *     }),
   *     eoaOwnershipCondition({
   *       address: signer.address,
   *     }),
   *   ])
   * );
   * ```
   *
   * Supported criteria:
   * - `collectCondition` - the collection of a given publication is required
   * - `eoaOwnershipCondition` - the ownership of a given EOA is required
   * - `erc20OwnershipCondition` - the ownership of a given ERC20 amount is required
   * - `erc721OwnershipCondition` - the ownership of a given ERC721 token is required
   * - `erc1155OwnershipCondition` - the ownership of a given ERC1155 token is required
   * - `profileOwnershipCondition` - the ownership of a given profile is required
   * - `followCondition` - following a given profile is required
   * - `andCondition` - up to 5 conditions can be combined using the AND operator (except `orCondition` and `andCondition`)
   * - `orCondition` - up to 5 conditions can be combined using the OR operator (except `orCondition` and `andCondition`)
   *
   * @see [Metadata helpers](https://digi-protocol.github.io/metadata/) for more information on how to create publication metadata and access conditions.
   */
  environments._createClass(Gated, [{
    key: "encryptPublicationMetadata",
    value: (function () {
      var _encryptPublicationMetadata = environments._asyncToGenerator( /*#__PURE__*/environments._regeneratorRuntime().mark(function _callee2(metadata$1, condition) {
        var _this = this;
        return environments._regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.authentication.requireAuthentication( /*#__PURE__*/function () {
                var _ref = environments._asyncToGenerator( /*#__PURE__*/environments._regeneratorRuntime().mark(function _callee(profileId) {
                  var root;
                  return environments._regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        root = metadata.accessCondition([metadata.profileOwnershipCondition({
                          profileId: profileId
                        }), condition]);
                        return _context.abrupt("return", _this.client.encryptPublicationMetadata(metadata$1, root));
                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x3) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function encryptPublicationMetadata(_x, _x2) {
        return _encryptPublicationMetadata.apply(this, arguments);
      }
      return encryptPublicationMetadata;
    }()
    /**
     * Decrypts a Publication Metadata fragment returned by the DiGi API.
     *
     * ⚠️ Requires authenticated DiGiClient.
     *
     * The fragment MUST be encrypted. Use the {@link isEncryptedPublicationMetadata} type guard to check if the fragment is encrypted.
     *
     * @example
     * Typical usage:
     * 1) fetch a publication via a `DiGiClient` method,
     * 2) determine if the publication metadata is encrypted,
     * 3) decrypt the metadata fragment,
     * ```ts
     * const post = await client.publication.fetch({ forId: '...' });
     *
     * if (isEncryptedPublicationMetadata(post.metadata)) {
     *   const result = await client.gated.decryptPublicationMetadataFragment(post.metadata);
     *
     *   if (result.isSuccess()) {
     *     console.log(result.value);
     *   }
     * }
     * ```
     */
    )
  }, {
    key: "decryptPublicationMetadataFragment",
    value: (function () {
      var _decryptPublicationMetadataFragment = environments._asyncToGenerator( /*#__PURE__*/environments._regeneratorRuntime().mark(function _callee4(encryptedMetadata) {
        var _this2 = this;
        return environments._regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.authentication.requireAtLeastWalletAuthentication( /*#__PURE__*/function () {
                var _ref2 = environments._asyncToGenerator( /*#__PURE__*/environments._regeneratorRuntime().mark(function _callee3(profileId) {
                  var result;
                  return environments._regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _this2.client.decryptPublicationMetadataFragment(encryptedMetadata, {
                          profileId: profileId !== null && profileId !== void 0 ? profileId : undefined
                        });
                      case 2:
                        result = _context3.sent;
                        if (!result.isSuccess()) {
                          _context3.next = 5;
                          break;
                        }
                        return _context3.abrupt("return", sharedKernel.success(result.value));
                      case 5:
                        return _context3.abrupt("return", result);
                      case 6:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function (_x5) {
                  return _ref2.apply(this, arguments);
                };
              }()));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function decryptPublicationMetadataFragment(_x4) {
        return _decryptPublicationMetadataFragment.apply(this, arguments);
      }
      return decryptPublicationMetadataFragment;
    }())
  }]);
  return Gated;
}();

/**
 * The configuration for the DiGiClient
 *
 * @group DiGiClient
 */

/**
 * DiGi Protocol Client with token-gated content support.
 *
 * It provides access to all the core {@link Core.DiGiClient} modules and the {@link Gated} module.
 *
 * @example
 * NodeJS example:
 * ```ts
 * import { Wallet } from 'ethers';
 * import { production } from '@digiv3rse/client';
 * import { DiGiClient } from '@digiv3rse/client/gated';
 *
 * const signer = new Wallet(process.env.PRIVATE_KEY);
 *
 * const client = new DiGiClient({
 *   environment: production,
 *
 *   authentication: {
 *     domain: process.env.DOMAIN,
 *     uri: process.env.URI,
 *   },
 *
 *   signer,
 * });
 * ```
 *
 * @example
 * Browser example with `ethers` v6 and browser wallet (e.g. MetaMask):
 * ```ts
 * import { BrowserProvider } from 'ethers';
 * import { production } from '@digiv3rse/client';
 * import { DiGiClient } from '@digiv3rse/client/gated';
 *
 * const provider = new BrowserProvider(window.ethereum);
 *
 * const client = new DiGiClient({
 *   environment: production,
 *
 *   authentication: {
 *     domain: window.location.hostname,
 *     uri: window.location.href,
 *   },
 *
 *   signer: await provider.getSigner(),
 * });
 * ```
 *
 * @group DiGiClient
 */
var DiGiClient = /*#__PURE__*/function (_core$DiGiClient) {
  environments._inherits(DiGiClient, _core$DiGiClient);
  function DiGiClient(config) {
    var _config$storage, _config$encryption;
    var _this;
    environments._classCallCheck(this, DiGiClient);
    _this = environments._callSuper(this, DiGiClient, [config]);
    _this._gated = new Gated(new gatedContent.GatedClient({
      environment: config.environment.gated,
      authentication: config.authentication,
      signer: config.signer,
      storageProvider: (_config$storage = config.storage) !== null && _config$storage !== void 0 ? _config$storage : new storage.InMemoryStorageProvider(),
      encryptionProvider: (_config$encryption = config.encryption) !== null && _config$encryption !== void 0 ? _config$encryption : web.webCryptoProvider()
    }), _this._authentication);
    return _this;
  }

  /**
   * The Gated module
   */
  environments._createClass(DiGiClient, [{
    key: "gated",
    get: function get() {
      return this._gated;
    }
  }]);
  return DiGiClient;
}(environments.DiGiClient);

exports.Actions = environments.Actions;
exports.Authentication = environments.Authentication;
exports.Bookmarks = environments.Bookmarks;
exports.ChangeProfileManagerActionType = environments.ChangeProfileManagerActionType;
exports.ClaimProfileWithHandleErrorReasonType = environments.ClaimProfileWithHandleErrorReasonType;
exports.CollectOpenActionModuleType = environments.CollectOpenActionModuleType;
exports.CommentRankingFilterType = environments.CommentRankingFilterType;
exports.ComparisonOperatorConditionType = environments.ComparisonOperatorConditionType;
exports.CreateProfileWithHandleErrorReasonType = environments.CreateProfileWithHandleErrorReasonType;
exports.CredentialsExpiredError = environments.CredentialsExpiredError;
exports.CustomFiltersType = environments.CustomFiltersType;
exports.DecryptFailReasonType = environments.DecryptFailReasonType;
exports.DiGiProfileManagerRelayErrorReasonType = environments.DiGiProfileManagerRelayErrorReasonType;
exports.DiGiTransactionFailureType = environments.DiGiTransactionFailureType;
exports.DiGiTransactionStatusType = environments.DiGiTransactionStatusType;
exports.Environment = environments.Environment;
exports.Explore = environments.Explore;
exports.ExploreProfilesOrderByType = environments.ExploreProfilesOrderByType;
exports.ExplorePublicationType = environments.ExplorePublicationType;
exports.ExplorePublicationsOrderByType = environments.ExplorePublicationsOrderByType;
exports.Feed = environments.Feed;
exports.FeedEventItemType = environments.FeedEventItemType;
exports.FollowModuleType = environments.FollowModuleType;
exports.Handle = environments.Handle;
exports.HiddenCommentsType = environments.HiddenCommentsType;
exports.Invites = environments.Invites;
exports.LimitType = environments.LimitType;
exports.MarketplaceMetadataAttributeDisplayType = environments.MarketplaceMetadataAttributeDisplayType;
exports.ModuleType = environments.ModuleType;
exports.Modules = environments.Modules;
exports.Momoka = environments.Momoka;
exports.MomokaValidatorError = environments.MomokaValidatorError;
exports.NftCollectionOwnersOrder = environments.NftCollectionOwnersOrder;
exports.NftContractType = environments.NftContractType;
exports.Nfts = environments.Nfts;
exports.NotAuthenticatedError = environments.NotAuthenticatedError;
exports.NotInterested = environments.NotInterested;
exports.NotificationType = environments.NotificationType;
exports.Notifications = environments.Notifications;
exports.OpenActionCategoryType = environments.OpenActionCategoryType;
exports.OpenActionModuleType = environments.OpenActionModuleType;
exports.PoapTokenLayerType = environments.PoapTokenLayerType;
exports.Poaps = environments.Poaps;
exports.PopularNftCollectionsOrder = environments.PopularNftCollectionsOrder;
exports.Profile = environments.Profile;
exports.ProfileActionHistoryType = environments.ProfileActionHistoryType;
exports.ProfileInterestTypes = environments.ProfileInterestTypes;
exports.ProfileReportingFraudSubreason = environments.ProfileReportingFraudSubreason;
exports.ProfileReportingReason = environments.ProfileReportingReason;
exports.ProfileReportingSpamSubreason = environments.ProfileReportingSpamSubreason;
exports.ProfilesOrderBy = environments.ProfilesOrderBy;
exports.Publication = environments.Publication;
exports.PublicationContentWarningType = environments.PublicationContentWarningType;
exports.PublicationMetadataLicenseType = environments.PublicationMetadataLicenseType;
exports.PublicationMetadataMainFocusType = environments.PublicationMetadataMainFocusType;
exports.PublicationMetadataTransactionType = environments.PublicationMetadataTransactionType;
exports.PublicationReactionType = environments.PublicationReactionType;
exports.PublicationReportingFraudSubreason = environments.PublicationReportingFraudSubreason;
exports.PublicationReportingIllegalSubreason = environments.PublicationReportingIllegalSubreason;
exports.PublicationReportingReason = environments.PublicationReportingReason;
exports.PublicationReportingSensitiveSubreason = environments.PublicationReportingSensitiveSubreason;
exports.PublicationReportingSpamSubreason = environments.PublicationReportingSpamSubreason;
exports.PublicationType = environments.PublicationType;
exports.Reactions = environments.Reactions;
exports.ReferenceModuleType = environments.ReferenceModuleType;
exports.RefreshPublicationMetadataResultType = environments.RefreshPublicationMetadataResultType;
exports.RelayErrorReasonType = environments.RelayErrorReasonType;
exports.RelayRoleKey = environments.RelayRoleKey;
exports.Revenue = environments.Revenue;
exports.Search = environments.Search;
exports.SearchPublicationType = environments.SearchPublicationType;
exports.SupportedFiatType = environments.SupportedFiatType;
exports.TagSortCriteriaType = environments.TagSortCriteriaType;
exports.Transaction = environments.Transaction;
exports.TransactionPollingError = environments.TransactionPollingError;
exports.TriStateValue = environments.TriStateValue;
exports.Wallet = environments.Wallet;
exports.development = environments.development;
exports.isCommentPublication = environments.isCommentPublication;
exports.isCreateMomokaPublicationResult = environments.isCreateMomokaPublicationResult;
exports.isFollowPaidAction = environments.isFollowPaidAction;
exports.isMirrorPublication = environments.isMirrorPublication;
exports.isOpenActionModuleWithReferralFee = environments.isOpenActionModuleWithReferralFee;
exports.isOpenActionPaidAction = environments.isOpenActionPaidAction;
exports.isPostPublication = environments.isPostPublication;
exports.isQuotePublication = environments.isQuotePublication;
exports.isRelaySuccess = environments.isRelaySuccess;
exports.isUnknownFollowModuleSettings = environments.isUnknownFollowModuleSettings;
exports.isUnknownOpenActionModuleSettings = environments.isUnknownOpenActionModuleSettings;
exports.isUnknownReferenceModuleSettings = environments.isUnknownReferenceModuleSettings;
exports.production = environments.production;
exports.staging = environments.staging;
Object.defineProperty(exports, 'isEncryptedPublicationMetadata', {
  enumerable: true,
  get: function () { return gatedContent.isEncryptedPublicationMetadata; }
});
Object.defineProperty(exports, 'decodeData', {
  enumerable: true,
  get: function () { return blockchainBindings.decodeData; }
});
Object.defineProperty(exports, 'encodeData', {
  enumerable: true,
  get: function () { return blockchainBindings.encodeData; }
});
Object.defineProperty(exports, 'isValidHandle', {
  enumerable: true,
  get: function () { return blockchainBindings.isValidHandle; }
});
exports.DiGiClient = DiGiClient;
exports.Gated = Gated;
