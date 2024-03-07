import { aD as _createClass, aE as _classCallCheck, aF as _asyncToGenerator, aG as _regeneratorRuntime, aH as _inherits, aI as _callSuper, D as DiGiClient$1 } from '../../dist/environments-e1f569c2.esm.js';
export { av as Actions, A as Authentication, as as Bookmarks, a as ChangeProfileManagerActionType, b as ClaimProfileWithHandleErrorReasonType, c as CollectOpenActionModuleType, e as CommentRankingFilterType, f as ComparisonOperatorConditionType, g as CreateProfileWithHandleErrorReasonType, C as CredentialsExpiredError, h as CustomFiltersType, i as DecryptFailReasonType, n as DiGiProfileManagerRelayErrorReasonType, o as DiGiTransactionFailureType, q as DiGiTransactionStatusType, E as Environment, a7 as Explore, j as ExploreProfilesOrderByType, l as ExplorePublicationType, k as ExplorePublicationsOrderByType, a8 as Feed, F as FeedEventItemType, m as FollowModuleType, ab as Handle, H as HiddenCommentsType, ac as Invites, L as LimitType, M as MarketplaceMetadataAttributeDisplayType, r as ModuleType, ad as Modules, ah as Momoka, t as MomokaValidatorError, u as NftCollectionOwnersOrder, v as NftContractType, ai as Nfts, N as NotAuthenticatedError, au as NotInterested, w as NotificationType, aj as Notifications, O as OpenActionCategoryType, x as OpenActionModuleType, P as PoapTokenLayerType, ak as Poaps, y as PopularNftCollectionsOrder, al as Profile, z as ProfileActionHistoryType, B as ProfileInterestTypes, G as ProfileReportingFraudSubreason, I as ProfileReportingReason, J as ProfileReportingSpamSubreason, K as ProfilesOrderBy, am as Publication, Q as PublicationContentWarningType, R as PublicationMetadataLicenseType, S as PublicationMetadataMainFocusType, T as PublicationMetadataTransactionType, U as PublicationReactionType, V as PublicationReportingFraudSubreason, W as PublicationReportingIllegalSubreason, X as PublicationReportingReason, Y as PublicationReportingSensitiveSubreason, Z as PublicationReportingSpamSubreason, _ as PublicationType, at as Reactions, $ as ReferenceModuleType, a0 as RefreshPublicationMetadataResultType, a1 as RelayErrorReasonType, a2 as RelayRoleKey, aw as Revenue, ax as Search, a3 as SearchPublicationType, a4 as SupportedFiatType, a5 as TagSortCriteriaType, az as Transaction, ay as TransactionPollingError, a6 as TriStateValue, aC as Wallet, d as development, ao as isCommentPublication, aB as isCreateMomokaPublicationResult, a9 as isFollowPaidAction, ap as isMirrorPublication, ar as isOpenActionModuleWithReferralFee, aa as isOpenActionPaidAction, an as isPostPublication, aq as isQuotePublication, aA as isRelaySuccess, af as isUnknownFollowModuleSettings, ae as isUnknownOpenActionModuleSettings, ag as isUnknownReferenceModuleSettings, p as production, s as staging } from '../../dist/environments-e1f569c2.esm.js';
import { GatedClient } from '@digiv3rse/gated-content';
export { isEncryptedPublicationMetadata } from '@digiv3rse/gated-content';
import { webCryptoProvider } from '@digiv3rse/gated-content/web';
import { InMemoryStorageProvider } from '@digiv3rse/storage';
import { accessCondition, profileOwnershipCondition } from '@digiv3rse/metadata';
import { success } from '@digiv3rse/shared-kernel';
export { decodeData, encodeData, isValidHandle } from '@digiv3rse/blockchain-bindings';
import 'graphql-request';
import 'graphql';
import 'jwt-decode';
import '@digiv3rse/gated-content/environments';

/**
 * Gated module.
 *
 * @group DiGiClient Modules
 */
var Gated = /*#__PURE__*/function () {
  function Gated(client, authentication) {
    _classCallCheck(this, Gated);
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
  _createClass(Gated, [{
    key: "encryptPublicationMetadata",
    value: (function () {
      var _encryptPublicationMetadata = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(metadata, condition) {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.authentication.requireAuthentication( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(profileId) {
                  var root;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        root = accessCondition([profileOwnershipCondition({
                          profileId: profileId
                        }), condition]);
                        return _context.abrupt("return", _this.client.encryptPublicationMetadata(metadata, root));
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
      var _decryptPublicationMetadataFragment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(encryptedMetadata) {
        var _this2 = this;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.authentication.requireAtLeastWalletAuthentication( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(profileId) {
                  var result;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
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
                        return _context3.abrupt("return", success(result.value));
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
  _inherits(DiGiClient, _core$DiGiClient);
  function DiGiClient(config) {
    var _config$storage, _config$encryption;
    var _this;
    _classCallCheck(this, DiGiClient);
    _this = _callSuper(this, DiGiClient, [config]);
    _this._gated = new Gated(new GatedClient({
      environment: config.environment.gated,
      authentication: config.authentication,
      signer: config.signer,
      storageProvider: (_config$storage = config.storage) !== null && _config$storage !== void 0 ? _config$storage : new InMemoryStorageProvider(),
      encryptionProvider: (_config$encryption = config.encryption) !== null && _config$encryption !== void 0 ? _config$encryption : webCryptoProvider()
    }), _this._authentication);
    return _this;
  }

  /**
   * The Gated module
   */
  _createClass(DiGiClient, [{
    key: "gated",
    get: function get() {
      return this._gated;
    }
  }]);
  return DiGiClient;
}(DiGiClient$1);

export { DiGiClient, Gated };
