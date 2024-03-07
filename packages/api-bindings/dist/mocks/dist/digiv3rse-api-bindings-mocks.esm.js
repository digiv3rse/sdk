import { ei as _objectSpread2, a0 as PublicationMainFocus, ej as _arrayLikeToArray, _ as _unsupportedIterableToArray, e as SafeApolloClient, f as createDiGiCache, g as createSnapshotCache, ek as ApolloServerErrorCode, T as TxStatus, D as updateSession, w as authenticatedWallet, x as authenticatedProfile, v as notAuthenticated, ab as ReactionTypes, L as ContractType, af as ScalarOperator, O as EncryptionProvider, E as CollectState, e5 as erc20Amount, el as _taggedTemplateLiteral, am as FragmentPaginatedResultInfo, cG as ProfilesToFollowDocument, cJ as GetProfileDocument, cM as GetAllProfilesDocument, dX as HasTxHashBeenIndexedDocument, d8 as ProxyActionStatusDocument, c1 as EnabledModuleCurrenciesDocument, dw as WhoCollectedPublicationDocument, cR as MutualFollowersProfilesDocument, G as GetPublicationsDocument, c4 as FeedDocument, dt as ExplorePublicationsDocument, dM as GetPublicationRevenueDocument, dP as GetProfilePublicationRevenueDocument, dz as ProfilePublicationsForSaleDocument, dH as WhoReactedPublicationDocument, dS as ProfileFollowRevenueDocument, S as SearchProfilesDocument, c7 as ExploreProfilesDocument, a as SearchPublicationsDocument, dd as GetPublicationDocument, ck as EnabledModulesDocument, b as GetProfileBookmarksDocument, Z as ProxyActionStatusTypes, cP as CreateProfileDocument, d_ as BroadcastOnChainDocument, e0 as BroadcastOffChainDocument, dg as HidePublicationDocument, dD as AddReactionDocument, dF as RemoveReactionDocument, db as ProxyActionDocument, cW as CreateSetProfileImageUriTypedDataDocument, c_ as CreateSetProfileMetadataTypedDataDocument, d0 as CreateSetProfileMetadataViaDispatcherDocument, bV as CreateCommentTypedDataDocument, bZ as CreateDataAvailabilityCommentTypedDataDocument, bX as CreateCommentViaDispatcherDocument, b$ as CreateDataAvailabilityCommentViaDispatcherDocument, cc as CreateMirrorTypedDataDocument, cg as CreateDataAvailabilityMirrorTypedDataDocument, ce as CreateMirrorViaDispatcherDocument, ci as CreateDataAvailabilityMirrorViaDispatcherDocument, ct as CreatePostTypedDataDocument, cx as CreateDataAvailabilityPostTypedDataDocument, cv as CreatePostViaDispatcherDocument, cz as CreateDataAvailabilityPostViaDispatcherDocument, cY as CreateSetProfileImageUriViaDispatcherDocument, dK as ReportPublicationDocument, di as AddNotInterestedDocument, dk as RemoveNotInterestedDocument, dm as AddToMyBookmarksDocument, dp as RemoveFromMyBookmarksDocument, h as GetSnapshotProposalDocument } from '@digiv3rse/api-bindings/dist/generated-13a8dc7d.esm.js';
import { faker } from '@faker-js/faker';
import { mockSingleLink } from '@apollo/client/testing';
import { GraphQLError } from 'graphql';
import { mockCreatePostRequest, mockWalletData, mockProfileId, mockTransactionHash, mockPublicationId, mockAppId, mockNonce } from '@digiv3rse/domain/mocks';
import { gql } from '@apollo/client';
import { FollowPolicyType } from '@digiv3rse/domain/use-cases/profile';
import { ReferencePolicyType, CollectPolicyType } from '@digiv3rse/domain/use-cases/publications';
import { mockEthereumAddress, mockDaiAmount } from '@digiv3rse/shared-kernel/mocks';
import '@apollo/client/utilities';
import '@digiv3rse/shared-kernel';
import 'graphql-tag';
import '@digiv3rse/domain/entities';

function mockPublicationMetadata(overrides) {
  return _objectSpread2({
    version: '2.0.0',
    metadata_id: faker.datatype.uuid(),
    content: faker.lorem.paragraph(),
    locale: 'en',
    attributes: [],
    name: 'Test publication',
    mainContentFocus: PublicationMainFocus.TextOnly
  }, overrides);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function mockDiGiApolloClient() {
  var mocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new SafeApolloClient({
    cache: createDiGiCache(),
    link: mockSingleLink.apply(void 0, _toConsumableArray(mocks)).setOnError(function (error) {
      throw error;
    }),
    pollingInterval: 1 // FAST
  });
}

function mockSnapshotApolloClient(mocks) {
  return new SafeApolloClient({
    cache: createSnapshotCache(),
    link: mockSingleLink.apply(void 0, _toConsumableArray(mocks)).setOnError(function (error) {
      throw error;
    }),
    pollingInterval: 1 // FAST
  });
}

function createGraphQLError(_ref) {
  var code = _ref.code,
    _ref$message = _ref.message,
    message = _ref$message === void 0 ? 'No pings please!' : _ref$message;
  return new GraphQLError(message, {
    extensions: {
      code: code
    }
  });
}
function createGraphQLValidationError() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'No pings please!';
  return createGraphQLError({
    message: message,
    code: ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED
  });
}
function mockValidationErrorResponse(document) {
  return {
    request: {
      query: document
    },
    result: {
      errors: [createGraphQLValidationError()]
    }
  };
}
function mockGenericSuccessResponse(document, data) {
  return {
    request: {
      query: document
    },
    result: {
      data: data
    }
  };
}
function mockGenericErrorResponse(document) {
  return {
    request: {
      query: document
    },
    result: {
      errors: [createGraphQLError({
        message: 'No pings please!',
        code: ApolloServerErrorCode.INTERNAL_SERVER_ERROR
      })]
    }
  };
}
function createHttpJsonResponse(status, body) {
  var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Response(JSON.stringify(body), {
    status: status,
    headers: _objectSpread2(_objectSpread2({}, headers), {}, {
      'Content-Type': 'application/json'
    })
  });
}
function createUnauthenticatedHttpResponse() {
  return createHttpJsonResponse(401, {
    data: null,
    errors: [createGraphQLError({
      message: 'Authentication required',
      code: 'UNAUTHENTICATED'
    })]
  });
}

function mockDiGiCache() {
  return createDiGiCache();
}
function mockTransactionState(partial) {
  return _objectSpread2({
    id: faker.datatype.uuid(),
    status: TxStatus.BROADCASTING,
    request: mockCreatePostRequest()
  }, partial);
}
function simulateAuthenticatedWallet() {
  var wallet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mockWalletData();
  updateSession(authenticatedWallet(wallet));
}
function simulateAuthenticatedProfile(profile) {
  var wallet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mockWalletData();
  updateSession(authenticatedProfile(wallet, profile));
}
function simulateNotAuthenticated() {
  updateSession(notAuthenticated());
}

function mockMediaFragment(overrides) {
  return _objectSpread2(_objectSpread2({
    altTag: faker.lorem.sentence(),
    cover: faker.image.imageUrl(),
    mimeType: 'image/jpeg',
    url: faker.image.imageUrl()
  }, overrides), {}, {
    __typename: 'Media'
  });
}
function mockProfilePictureMediaFragment(overrides) {
  return _objectSpread2(_objectSpread2({
    original: mockMediaFragment(),
    optimized: mockMediaFragment(),
    thumbnail: mockMediaFragment()
  }, overrides), {}, {
    __typename: 'MediaSet'
  });
}
function mockProfileCoverPictureMediaFragment(overrides) {
  return _objectSpread2(_objectSpread2({
    original: mockMediaFragment(),
    optimized: mockMediaFragment()
  }, overrides), {}, {
    __typename: 'MediaSet'
  });
}
function mockAttributeFragment(overrides) {
  return _objectSpread2(_objectSpread2({
    key: 'answer',
    value: '42',
    displayType: 'string'
  }, overrides), {}, {
    __typename: 'Attribute'
  });
}
function mockAnyoneFollowPolicy() {
  return {
    type: FollowPolicyType.ANYONE
  };
}
function mockWalletFragment() {
  return {
    __typename: 'Wallet',
    defaultProfile: mockProfileFragment(),
    address: mockEthereumAddress()
  };
}
function mockProfileStatsFragment(overrides) {
  return _objectSpread2(_objectSpread2({
    totalCollects: 0,
    totalComments: 0,
    totalFollowers: 0,
    totalFollowing: 0,
    totalMirrors: 0,
    totalPosts: 0,
    totalPublications: 0,
    commentsCount: 0,
    mirrorsCount: 0,
    postsCount: 0
  }, overrides), {}, {
    __typename: 'ProfileStats'
  });
}
function mockProfileFragment(overrides) {
  var firstName = faker.name.firstName();
  var lastName = faker.name.lastName();
  return _objectSpread2(_objectSpread2({
    id: mockProfileId(),
    name: "".concat(firstName, " ").concat(lastName),
    bio: faker.lorem.sentence(),
    handle: faker.internet.userName(firstName, lastName),
    ownedBy: mockEthereumAddress(),
    followNftAddress: mockEthereumAddress(),
    interests: [],
    picture: mockProfilePictureMediaFragment(),
    coverPicture: mockProfileCoverPictureMediaFragment(),
    stats: mockProfileStatsFragment(overrides === null || overrides === void 0 ? void 0 : overrides.stats),
    dispatcher: null,
    onChainIdentity: {
      proofOfHumanity: false,
      ens: null,
      sybilDotOrg: {
        verified: false,
        source: {
          twitter: {
            handle: null
          }
        }
      },
      worldcoin: {
        isHuman: false
      }
    },
    followModule: null,
    followPolicy: mockAnyoneFollowPolicy(),
    isFollowedByMe: false,
    isFollowingObserver: false,
    followStatus: null,
    ownedByMe: false,
    __attributes: [],
    attributes: {},
    invitedBy: null,
    observedBy: null
  }, overrides), {}, {
    __typename: 'Profile'
  });
}
function mockProfileOwnedByMeFragment(overrides) {
  return mockProfileFragment(_objectSpread2(_objectSpread2({}, overrides), {}, {
    ownedByMe: true
  }));
}
function mockRelayerResultFragment() {
  var txHash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mockTransactionHash();
  return {
    __typename: 'RelayerResult',
    txHash: txHash,
    txId: faker.datatype.uuid()
  };
}
function mockRelayErrorFragment(reason) {
  return {
    __typename: 'RelayError',
    reason: reason
  };
}
function mockDataAvailabilityPublicationResult() {
  return {
    id: mockPublicationId(),
    dataAvailabilityId: faker.datatype.uuid(),
    __typename: 'CreateDataAvailabilityPublicationResult'
  };
}
function mockPublicationStatsFragment(overrides) {
  return _objectSpread2(_objectSpread2({
    totalAmountOfMirrors: faker.datatype.number({
      max: 42000,
      min: 0,
      precision: 1
    }),
    totalAmountOfCollects: faker.datatype.number({
      max: 42000,
      min: 0,
      precision: 1
    }),
    totalAmountOfComments: faker.datatype.number({
      max: 42000,
      min: 0,
      precision: 1
    }),
    totalUpvotes: faker.datatype.number({
      max: 42000,
      min: 0,
      precision: 1
    }),
    totalDownvotes: faker.datatype.number({
      max: 42000,
      min: 0,
      precision: 1
    }),
    commentsCount: faker.datatype.number({
      max: 42000,
      min: 0,
      precision: 1
    }),
    totalBookmarks: faker.datatype.number({
      max: 42000,
      min: 0,
      precision: 1
    })
  }, overrides), {}, {
    __typename: 'PublicationStats'
  });
}
function mockEncryptedFieldsOutputFragment(overrides) {
  return _objectSpread2(_objectSpread2({
    animation_url: null,
    content: null,
    external_url: null,
    image: null,
    media: null
  }, overrides), {}, {
    __typename: 'EncryptedFieldsOutput'
  });
}
function mockFreeCollectModuleSettings() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$followerOnly = _ref.followerOnly,
    followerOnly = _ref$followerOnly === void 0 ? false : _ref$followerOnly;
  return {
    __typename: 'FreeCollectModuleSettings',
    contractAddress: '0x96351D3cE872903EBf4c2D77dd625992CCFdf8c9',
    followerOnly: followerOnly
  };
}

// Use this to test the handling of collect modules that are already whitelisted by backend but not yet support by sdk
function mockNotYetKnownCollectModuleSettings() {
  return {
    __typename: 'NotYetKnownCollectModuleSettings'
  };
}
function mockMetadataOutputFragment(overrides) {
  return _objectSpread2(_objectSpread2({
    animatedUrl: faker.internet.url(),
    attributes: [],
    content: faker.lorem.words(5),
    contentWarning: null,
    description: null,
    encryptionParams: null,
    image: faker.internet.url(),
    locale: null,
    mainContentFocus: PublicationMainFocus.TextOnly,
    media: [],
    name: faker.commerce.productName(),
    tags: []
  }, overrides), {}, {
    __typename: 'MetadataOutput'
  });
}
function mockNoFeeCollectPolicy(overrides) {
  return _objectSpread2({
    type: CollectPolicyType.FREE,
    state: CollectState.CAN_BE_COLLECTED,
    followerOnly: false,
    collectNftAddress: mockEthereumAddress(),
    contractAddress: mockEthereumAddress(),
    endTimestamp: null,
    collectLimit: null
  }, overrides);
}
function mockPostFragment(overrides) {
  return _objectSpread2(_objectSpread2({
    id: mockPublicationId(),
    appId: mockAppId(),
    createdAt: faker.datatype.datetime().toISOString(),
    stats: mockPublicationStatsFragment(),
    metadata: mockMetadataOutputFragment(),
    profile: mockProfileFragment(),
    collectedBy: null,
    collectModule: mockFreeCollectModuleSettings(),
    collectNftAddress: mockEthereumAddress(),
    collectPolicy: mockNoFeeCollectPolicy(),
    referenceModule: null,
    hasCollectedByMe: false,
    hasOptimisticCollectedByMe: false,
    isOptimisticMirroredByMe: false,
    isMirroredByMe: false,
    mirrors: [],
    reaction: null,
    hidden: false,
    notInterested: false,
    bookmarked: false,
    isGated: false,
    decryptionCriteria: null,
    observedBy: null,
    canComment: {
      result: true
    },
    canMirror: {
      result: true
    },
    canObserverDecrypt: {
      result: true,
      reasons: null
    },
    referencePolicy: {
      type: ReferencePolicyType.ANYONE
    }
  }, overrides), {}, {
    __typename: 'Post'
  });
}
function mockCommentFragment(overrides) {
  var mainPost = mockPostFragment();
  return _objectSpread2(_objectSpread2({
    id: mockPublicationId(),
    appId: mockAppId(),
    stats: mockPublicationStatsFragment(),
    metadata: mockMetadataOutputFragment(),
    profile: mockProfileFragment(),
    createdAt: faker.date.past().toISOString(),
    collectedBy: null,
    commentOn: mainPost,
    mainPost: mainPost,
    collectModule: mockFreeCollectModuleSettings(),
    collectNftAddress: mockEthereumAddress(),
    collectPolicy: mockNoFeeCollectPolicy(),
    referenceModule: null,
    hasCollectedByMe: false,
    hasOptimisticCollectedByMe: false,
    isOptimisticMirroredByMe: false,
    isMirroredByMe: false,
    mirrors: [],
    reaction: null,
    hidden: false,
    notInterested: false,
    bookmarked: false,
    isGated: false,
    decryptionCriteria: null,
    observedBy: null,
    canComment: {
      result: true
    },
    canMirror: {
      result: true
    },
    canObserverDecrypt: {
      result: false,
      reasons: null
    },
    referencePolicy: {
      type: ReferencePolicyType.ANYONE
    },
    firstComment: null
  }, overrides), {}, {
    __typename: 'Comment'
  });
}
function mockMirrorFragment(overrides) {
  var mainPost = mockPostFragment();
  return _objectSpread2(_objectSpread2({
    id: mockPublicationId(),
    profile: mockProfileFragment(),
    createdAt: faker.date.past().toISOString(),
    mirrorOf: mainPost,
    hidden: false
  }, overrides), {}, {
    __typename: 'Mirror'
  });
}
function mockFeedItemFragment(overrides) {
  return _objectSpread2(_objectSpread2({
    root: mockPostFragment(),
    comments: null,
    mirrors: [],
    electedMirror: null,
    reactions: [],
    collects: []
  }, overrides), {}, {
    __typename: 'FeedItem'
  });
}
function mockErc20FieldsFragment(overrides) {
  return _objectSpread2({
    __typename: 'Erc20',
    name: 'Wrapped MATIC',
    symbol: 'WMATIC',
    decimals: 18,
    address: mockEthereumAddress()
  }, overrides);
}
function mockErc20AmountFieldsFragment() {
  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mockDaiAmount(42);
  return {
    __typename: 'Erc20Amount',
    asset: mockErc20FieldsFragment({
      name: amount.asset.name,
      symbol: amount.asset.symbol,
      decimals: amount.asset.decimals,
      address: amount.asset.address
    }),
    value: amount.toSignificantDigits()
  };
}
function mockRevenueAggregateFragment(amount) {
  var total = mockErc20AmountFieldsFragment(amount);
  return {
    __typename: 'RevenueAggregate',
    __total: total,
    totalAmount: erc20Amount({
      from: total
    })
  };
}
function mockPublicationRevenueFragment() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref2$publication = _ref2.publication,
    publication = _ref2$publication === void 0 ? mockPostFragment() : _ref2$publication,
    amount = _ref2.amount;
  return {
    __typename: 'PublicationRevenue',
    publication: publication,
    revenue: mockRevenueAggregateFragment(amount)
  };
}
function mockProfileFollowRevenueFragment() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    amount = _ref3.amount;
  return {
    __typename: 'FollowRevenueResult',
    revenues: [mockRevenueAggregateFragment(amount)]
  };
}
function mockWhoReactedResultFragment(overrides) {
  return _objectSpread2({
    __typename: 'WhoReactedResult',
    reactionId: faker.datatype.uuid(),
    reaction: ReactionTypes.Upvote,
    reactionAt: faker.date.past().toISOString(),
    profile: mockProfileFragment()
  }, overrides);
}
function mockModuleInfoFragment(overrides) {
  return _objectSpread2({
    __typename: 'ModuleInfo',
    name: faker.datatype.string(),
    type: faker.datatype.string()
  }, overrides);
}
function mockEnabledModuleFragment(overrides) {
  return _objectSpread2({
    __typename: 'EnabledModule',
    moduleName: faker.datatype.string(),
    contractAddress: mockEthereumAddress(),
    inputParams: [mockModuleInfoFragment()],
    redeemParams: [mockModuleInfoFragment()],
    returnDataParams: [mockModuleInfoFragment()]
  }, overrides);
}
function mockEnabledModulesFragment(overrides) {
  return _objectSpread2({
    __typename: 'EnabledModules',
    collectModules: [mockEnabledModuleFragment()],
    followModules: [mockEnabledModuleFragment()],
    referenceModules: [mockEnabledModuleFragment()]
  }, overrides);
}
function mockNftOwnershipAccessCondition(overrides) {
  return {
    __typename: 'AccessConditionOutput',
    nft: _objectSpread2(_objectSpread2({
      chainID: 1,
      contractAddress: mockEthereumAddress(),
      contractType: ContractType.Erc721,
      tokenIds: [faker.datatype.number().toString()]
    }, overrides), {}, {
      __typename: 'NftOwnershipOutput'
    }),
    and: null,
    collect: null,
    eoa: null,
    follow: null,
    or: null,
    profile: null,
    token: null
  };
}
function mockErc20OwnershipAccessCondition(overrides) {
  return {
    __typename: 'AccessConditionOutput',
    token: _objectSpread2(_objectSpread2({
      amount: '100',
      chainID: 1,
      condition: ScalarOperator.Equal,
      contractAddress: mockEthereumAddress(),
      decimals: 18,
      name: 'Dai Stablecoin',
      symbol: 'DAI'
    }, overrides), {}, {
      __typename: 'Erc20OwnershipOutput'
    }),
    and: null,
    collect: null,
    eoa: null,
    follow: null,
    nft: null,
    or: null,
    profile: null
  };
}
function mockEoaOwnershipAccessCondition(overrides) {
  return {
    __typename: 'AccessConditionOutput',
    eoa: _objectSpread2(_objectSpread2({
      address: mockEthereumAddress()
    }, overrides), {}, {
      __typename: 'EoaOwnershipOutput'
    }),
    and: null,
    collect: null,
    follow: null,
    nft: null,
    or: null,
    profile: null,
    token: null
  };
}
function mockProfileOwnershipAccessCondition(overrides) {
  return {
    __typename: 'AccessConditionOutput',
    profile: _objectSpread2(_objectSpread2({
      profileId: mockProfileId()
    }, overrides), {}, {
      __typename: 'ProfileOwnershipOutput'
    }),
    and: null,
    collect: null,
    eoa: null,
    follow: null,
    nft: null,
    or: null,
    token: null
  };
}
function mockFollowConditionAccessCondition(overrides) {
  return {
    __typename: 'AccessConditionOutput',
    follow: _objectSpread2(_objectSpread2({
      profileId: mockProfileId()
    }, overrides), {}, {
      __typename: 'FollowConditionOutput'
    }),
    and: null,
    collect: null,
    eoa: null,
    nft: null,
    or: null,
    profile: null,
    token: null
  };
}
function mockCollectConditionAccessCondition() {
  var condition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    publicationId: mockPublicationId(),
    thisPublication: null
  };
  return {
    __typename: 'AccessConditionOutput',
    collect: _objectSpread2(_objectSpread2({}, condition), {}, {
      __typename: 'CollectConditionOutput'
    }),
    and: null,
    eoa: null,
    follow: null,
    nft: null,
    or: null,
    profile: null,
    token: null
  };
}
function mockOrAccessCondition() {
  var criteria = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    __typename: 'AccessConditionOutput',
    or: {
      __typename: 'OrConditionOutput',
      criteria: criteria
    },
    and: null,
    collect: null,
    eoa: null,
    follow: null,
    nft: null,
    profile: null,
    token: null
  };
}
function mockAndAccessCondition() {
  var criteria = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    __typename: 'AccessConditionOutput',
    and: {
      __typename: 'AndConditionOutput',
      criteria: criteria
    },
    collect: null,
    eoa: null,
    follow: null,
    nft: null,
    or: null,
    profile: null,
    token: null
  };
}
function mockPublicationOwnerAccessCondition(overrides) {
  return {
    __typename: 'AccessConditionOutput',
    profile: _objectSpread2({
      __typename: 'ProfileOwnershipOutput',
      profileId: mockProfileId()
    }, overrides),
    and: null,
    collect: null,
    eoa: null,
    follow: null,
    nft: null,
    or: null,
    token: null
  };
}
function mockRootConditionFragment(_ref4) {
  var others = _ref4.others,
    ownerId = _ref4.ownerId;
  return {
    __typename: 'AccessConditionOutput',
    or: {
      criteria: [mockPublicationOwnerAccessCondition({
        profileId: ownerId
      })].concat(_toConsumableArray(others))
    }
  };
}
function mockEncryptionParamsOutputFragment(_ref5) {
  var others = _ref5.others,
    ownerId = _ref5.ownerId,
    _ref5$encryptedFields = _ref5.encryptedFields,
    encryptedFields = _ref5$encryptedFields === void 0 ? mockEncryptedFieldsOutputFragment() : _ref5$encryptedFields,
    _ref5$encryptionKey = _ref5.encryptionKey,
    encryptionKey = _ref5$encryptionKey === void 0 ? '0x123' : _ref5$encryptionKey;
  return {
    __typename: 'EncryptionParamsOutput',
    accessCondition: mockRootConditionFragment({
      others: others,
      ownerId: ownerId
    }),
    encryptionProvider: EncryptionProvider.LitProtocol,
    encryptedFields: encryptedFields,
    providerSpecificParams: {
      encryptionKey: encryptionKey
    }
  };
}
function mockPaginatedResultInfo() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread2({
    __typename: 'PaginatedResultInfo',
    moreAfter: false,
    prev: null,
    next: null,
    totalCount: null
  }, overrides);
}

var _templateObject;
var AnyPaginatedQueryDocument = gql(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query GetHero($cursor: String!) {\n    result: hero(cursor: $cursor) {\n      items {\n        name\n      }\n      pageInfo {\n        ...PaginatedResultInfo\n      }\n    }\n  }\n  ", "\n"])), FragmentPaginatedResultInfo);
function mockAnyPaginatedItem() {
  return {
    name: faker.helpers.arrayElement(['Luke Skywalker', 'Darth Vader', 'Han Solo'])
  };
}
function mockAnyPaginatedQueryResult() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [mockAnyPaginatedItem()] : _ref$items,
    _ref$next = _ref.next,
    next = _ref$next === void 0 ? null : _ref$next,
    _ref$prev = _ref.prev,
    prev = _ref$prev === void 0 ? null : _ref$prev;
  return {
    items: items,
    pageInfo: mockPaginatedResultInfo({
      next: next,
      prev: prev
    })
  };
}
function mockAnyPaginatedQueryResponse(_ref2) {
  var _ref2$variables = _ref2.variables,
    variables = _ref2$variables === void 0 ? {} : _ref2$variables,
    result = _ref2.result;
  return {
    request: {
      query: AnyPaginatedQueryDocument,
      variables: variables
    },
    result: {
      data: {
        result: result
      }
    }
  };
}

function mockSources() {
  return ['foobar'];
}
function mockCursor() {
  return faker.random.alphaNumeric(10);
}
function mockProfilesToFollowResponse(_ref) {
  var variables = _ref.variables,
    profiles = _ref.profiles;
  return {
    request: {
      query: ProfilesToFollowDocument,
      variables: variables
    },
    result: {
      data: {
        result: profiles
      }
    }
  };
}
function mockGetProfileResponse(_ref2) {
  var variables = _ref2.variables,
    _ref2$profile = _ref2.profile,
    profile = _ref2$profile === void 0 ? mockProfileFragment() : _ref2$profile;
  return {
    request: {
      query: GetProfileDocument,
      variables: variables
    },
    result: {
      data: {
        result: profile
      }
    }
  };
}
function mockGetAllProfilesData(profiles) {
  return {
    result: {
      items: profiles,
      pageInfo: mockPaginatedResultInfo()
    }
  };
}
function mockGetAllProfilesResponse(_ref3) {
  var variables = _ref3.variables,
    _ref3$profiles = _ref3.profiles,
    profiles = _ref3$profiles === void 0 ? [mockProfileFragment()] : _ref3$profiles;
  return {
    request: {
      query: GetAllProfilesDocument,
      variables: variables
    },
    result: {
      data: mockGetAllProfilesData(profiles)
    }
  };
}
function mockHasTxHashBeenIndexedData(result) {
  return {
    result: 'reason' in result ? _objectSpread2({
      __typename: 'TransactionError'
    }, result) : _objectSpread2({
      __typename: 'TransactionIndexedResult'
    }, result)
  };
}
function mockHasTxHashBeenIndexedResponse(_ref4) {
  var variables = _ref4.variables,
    data = _ref4.data;
  return {
    request: {
      query: HasTxHashBeenIndexedDocument,
      variables: variables
    },
    result: {
      data: data
    }
  };
}
function mockProxyActionError(overrides) {
  return _objectSpread2({
    __typename: 'ProxyActionError',
    reason: 'UNKNOWN',
    lastKnownTxId: '0x123'
  }, overrides);
}
function mockProxyActionStatusResult(overrides) {
  return _objectSpread2(_objectSpread2({
    txHash: '0x123',
    txId: '1',
    status: ProxyActionStatusTypes.Minting
  }, overrides), {}, {
    __typename: 'ProxyActionStatusResult'
  });
}
function mockProxyActionStatusResponse(instructions) {
  return {
    request: {
      query: ProxyActionStatusDocument,
      variables: instructions.variables
    },
    result: {
      data: {
        result: 'reason' in instructions.result ? mockProxyActionError(instructions.result) : mockProxyActionStatusResult(instructions.result)
      }
    }
  };
}
function mockEnabledModuleCurrenciesResponse(currencies) {
  return {
    request: {
      query: EnabledModuleCurrenciesDocument
    },
    result: {
      data: {
        result: currencies.map(function (currency) {
          return {
            __typename: 'Erc20',
            address: currency.address,
            decimals: currency.decimals,
            name: currency.name,
            symbol: currency.symbol
          };
        })
      }
    }
  };
}
function mockWhoCollectedPublicationResponse(args) {
  return {
    request: {
      query: WhoCollectedPublicationDocument,
      variables: args.variables
    },
    result: {
      data: {
        result: {
          items: args.wallets,
          pageInfo: mockPaginatedResultInfo({
            totalCount: args.wallets.length
          })
        }
      }
    }
  };
}
function mockMutualFollowersResponse(args) {
  return {
    request: {
      query: MutualFollowersProfilesDocument,
      variables: args.variables
    },
    result: {
      data: {
        result: {
          items: args.profiles,
          pageInfo: mockPaginatedResultInfo({
            totalCount: args.profiles.length
          })
        }
      }
    }
  };
}
function mockGetPublicationsResponse(_ref5) {
  var variables = _ref5.variables,
    publications = _ref5.publications,
    _ref5$info = _ref5.info,
    info = _ref5$info === void 0 ? mockPaginatedResultInfo() : _ref5$info;
  return {
    request: {
      query: GetPublicationsDocument,
      variables: variables
    },
    result: {
      data: {
        result: {
          items: publications,
          pageInfo: info
        }
      }
    }
  };
}
function mockFeedResponse(args) {
  return {
    request: {
      query: FeedDocument,
      variables: args.variables
    },
    result: {
      data: {
        result: {
          items: args.items,
          pageInfo: mockPaginatedResultInfo({
            totalCount: args.items.length
          })
        }
      }
    }
  };
}
function mockExplorePublicationsResponse(args) {
  return {
    request: {
      query: ExplorePublicationsDocument,
      variables: args.variables
    },
    result: {
      data: {
        result: {
          items: args.items,
          pageInfo: mockPaginatedResultInfo({
            totalCount: args.items.length
          })
        }
      }
    }
  };
}
function mockGetPublicationRevenueResponse(args) {
  return {
    request: {
      query: GetPublicationRevenueDocument,
      variables: args.variables
    },
    result: {
      data: {
        result: args.revenue
      }
    }
  };
}
function mockGetProfilePublicationRevenueResponse(args) {
  return {
    request: {
      query: GetProfilePublicationRevenueDocument,
      variables: args.variables
    },
    result: {
      data: {
        result: {
          items: args.items,
          pageInfo: mockPaginatedResultInfo({
            totalCount: args.items.length
          })
        }
      }
    }
  };
}
function mockProfilePublicationsForSaleResponse(args) {
  return {
    request: {
      query: ProfilePublicationsForSaleDocument,
      variables: args.variables
    },
    result: {
      data: {
        result: {
          items: args.items,
          pageInfo: mockPaginatedResultInfo({
            totalCount: args.items.length
          })
        }
      }
    }
  };
}
function mockWhoReactedPublicationResponse(args) {
  return {
    request: {
      query: WhoReactedPublicationDocument,
      variables: args.variables
    },
    result: {
      data: {
        result: {
          items: args.items,
          pageInfo: mockPaginatedResultInfo({
            totalCount: args.items.length
          })
        }
      }
    }
  };
}
function mockProfileFollowRevenueResponse(_ref6) {
  var variables = _ref6.variables,
    revenues = _ref6.revenues;
  return {
    request: {
      query: ProfileFollowRevenueDocument,
      variables: variables
    },
    result: {
      data: {
        result: revenues
      }
    }
  };
}
function mockSearchProfilesResponse(args) {
  return {
    request: {
      query: SearchProfilesDocument,
      variables: args.variables
    },
    result: {
      data: {
        result: {
          __typename: 'ProfileSearchResult',
          items: args.items,
          pageInfo: mockPaginatedResultInfo({
            totalCount: args.items.length
          })
        }
      }
    }
  };
}
function mockExploreProfilesResponse(args) {
  return {
    request: {
      query: ExploreProfilesDocument,
      variables: args.variables
    },
    result: {
      data: {
        result: {
          items: args.items,
          pageInfo: mockPaginatedResultInfo({
            totalCount: args.items.length
          })
        }
      }
    }
  };
}
function mockSearchPublicationsResponse(args) {
  return {
    request: {
      query: SearchPublicationsDocument,
      variables: args.variables
    },
    result: {
      data: {
        result: {
          __typename: 'PublicationSearchResult',
          items: args.items,
          pageInfo: mockPaginatedResultInfo({
            totalCount: args.items.length
          })
        }
      }
    }
  };
}
function mockGetPublicationData() {
  var publication = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mockPostFragment();
  return {
    result: publication
  };
}
function mockGetPublicationResponse(_ref7) {
  var variables = _ref7.variables,
    publication = _ref7.publication;
  return {
    request: {
      query: GetPublicationDocument,
      variables: variables
    },
    result: {
      data: mockGetPublicationData(publication)
    }
  };
}
function mockEnabledModulesResponse() {
  var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref8$data = _ref8.data,
    data = _ref8$data === void 0 ? mockEnabledModulesFragment() : _ref8$data;
  return {
    request: {
      query: EnabledModulesDocument
    },
    result: {
      data: {
        result: data
      }
    }
  };
}
function mockGetProfileBookmarksResponse(_ref9) {
  var variables = _ref9.variables,
    publications = _ref9.publications;
  return {
    request: {
      query: GetProfileBookmarksDocument,
      variables: variables
    },
    result: {
      data: {
        result: {
          items: publications,
          pageInfo: mockPaginatedResultInfo()
        }
      }
    }
  };
}

function mockCreateProfileResponse(_ref) {
  var request = _ref.request,
    result = _ref.result;
  return {
    request: {
      query: CreateProfileDocument,
      variables: {
        request: request
      }
    },
    result: {
      data: {
        result: result
      }
    }
  };
}
function mockBroadcastOnChainData(result) {
  return {
    result: result
  };
}
function mockBroadcastOnChainResponse(_ref2) {
  var result = _ref2.result,
    variables = _ref2.variables;
  return {
    request: {
      query: BroadcastOnChainDocument,
      variables: variables
    },
    result: {
      data: mockBroadcastOnChainData(result)
    }
  };
}
function mockBroadcastOffChainData(result) {
  return {
    result: result
  };
}
function mockBroadcastOffChainResponse(_ref3) {
  var result = _ref3.result,
    variables = _ref3.variables;
  return {
    request: {
      query: BroadcastOffChainDocument,
      variables: variables
    },
    result: {
      data: mockBroadcastOffChainData(result)
    }
  };
}
function mockCreateTypedDataResult(__typename, typedData) {
  return {
    __typename: __typename,
    id: faker.datatype.uuid(),
    expiresAt: faker.date.future().toISOString(),
    typedData: typedData
  };
}
function mockEIP712TypedDataField() {
  return {
    __typename: 'EIP712TypedDataField',
    name: 'nonce',
    type: 'uint256'
  };
}
function mockEIP712TypedDataDomain() {
  return {
    __typename: 'EIP712TypedDataDomain',
    name: 'DiGi',
    version: '1',
    chainId: 0,
    verifyingContract: mockEthereumAddress()
  };
}
function mockCreatePostTypedDataData() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref4$nonce = _ref4.nonce,
    nonce = _ref4$nonce === void 0 ? mockNonce() : _ref4$nonce;
  return {
    result: mockCreateTypedDataResult('CreatePostBroadcastItemResult', {
      __typename: 'CreatePostEIP712TypedData',
      types: {
        __typename: 'CreatePostEIP712TypedDataTypes',
        PostWithSig: [mockEIP712TypedDataField()]
      },
      domain: mockEIP712TypedDataDomain(),
      message: {
        __typename: 'CreatePostEIP712TypedDataValue',
        nonce: nonce,
        deadline: 1644303500,
        profileId: mockProfileId(),
        contentURI: 'ipfs://QmR5V6fwKWzoa9gevmYaQ11eMQsAahsjfWPz1rCoNJjN1K.json',
        collectModule: '0xd6072BB2ABc0a9d1331c7d0B83AE6C47f2Cb86A3',
        collectModuleInitData: '0x',
        referenceModule: '0x0000000000000000000000000000000000000000',
        referenceModuleInitData: '0x'
      }
    })
  };
}
function mockCreateCommentTypedDataData() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref5$nonce = _ref5.nonce,
    nonce = _ref5$nonce === void 0 ? mockNonce() : _ref5$nonce;
  return {
    result: mockCreateTypedDataResult('CreateCommentBroadcastItemResult', {
      __typename: 'CreateCommentEIP712TypedData',
      types: {
        __typename: 'CreateCommentEIP712TypedDataTypes',
        CommentWithSig: [mockEIP712TypedDataField()]
      },
      domain: mockEIP712TypedDataDomain(),
      message: {
        __typename: 'CreateCommentEIP712TypedDataValue',
        profileIdPointed: mockProfileId(),
        pubIdPointed: faker.datatype.hexadecimal({
          length: 2
        }),
        nonce: nonce,
        deadline: 1644303500,
        profileId: mockProfileId(),
        contentURI: 'ipfs://QmR5V6fwKWzoa9gevmYaQ11eMQsAahsjfWPz1rCoNJjN1K.json',
        collectModule: '0xd6072BB2ABc0a9d1331c7d0B83AE6C47f2Cb86A3',
        collectModuleInitData: '0x',
        referenceModuleData: '0x0000000000000000000000000000000000000000',
        referenceModule: '0x0000000000000000000000000000000000000000',
        referenceModuleInitData: '0x'
      }
    })
  };
}
function mockCreateMirrorTypedDataData() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref6$nonce = _ref6.nonce,
    nonce = _ref6$nonce === void 0 ? mockNonce() : _ref6$nonce;
  return {
    result: mockCreateTypedDataResult('CreateMirrorBroadcastItemResult', {
      __typename: 'CreateMirrorEIP712TypedData',
      types: {
        __typename: 'CreateMirrorEIP712TypedDataTypes',
        MirrorWithSig: [mockEIP712TypedDataField()]
      },
      domain: mockEIP712TypedDataDomain(),
      message: {
        __typename: 'CreateMirrorEIP712TypedDataValue',
        profileIdPointed: mockProfileId(),
        pubIdPointed: faker.datatype.hexadecimal({
          length: 2
        }),
        nonce: nonce,
        deadline: 1644303500,
        profileId: mockProfileId(),
        referenceModuleData: '0x0000000000000000000000000000000000000000',
        referenceModule: '0x0000000000000000000000000000000000000000',
        referenceModuleInitData: '0x'
      }
    })
  };
}
function mockHidePublicationResponse(args) {
  return {
    request: {
      query: HidePublicationDocument,
      variables: args.variables
    },
    result: {
      data: {
        hidePublication: null
      }
    }
  };
}
function mockAddReactionResponse(args) {
  return {
    request: {
      query: AddReactionDocument,
      variables: args.variables
    },
    result: {
      data: {
        addReaction: null
      }
    }
  };
}
function mockRemoveReactionResponse(args) {
  return {
    request: {
      query: RemoveReactionDocument,
      variables: args.variables
    },
    result: {
      data: {
        removeReaction: null
      }
    }
  };
}
function mockRemoveReactionResponseWithGraphqlValidationError(args) {
  return {
    request: {
      query: RemoveReactionDocument,
      variables: args.variables
    },
    result: {
      errors: [createGraphQLValidationError("You have not reacted to this publication with action ".concat(args.variables.reaction, "}"))]
    }
  };
}
function mockCreateFollowTypedDataData() {
  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref7$nonce = _ref7.nonce,
    nonce = _ref7$nonce === void 0 ? mockNonce() : _ref7$nonce;
  return {
    result: mockCreateTypedDataResult('CreateFollowBroadcastItemResult', {
      __typename: 'CreateFollowEIP712TypedData',
      types: {
        __typename: 'CreateFollowEIP712TypedDataTypes',
        FollowWithSig: [mockEIP712TypedDataField()]
      },
      domain: mockEIP712TypedDataDomain(),
      message: {
        __typename: 'CreateFollowEIP712TypedDataValue',
        nonce: nonce,
        deadline: '0',
        profileIds: [mockProfileId()],
        datas: [faker.datatype.hexadecimal({
          length: 2
        })]
      }
    })
  };
}
function mockCreateSetProfileMetadataTypedDataData() {
  var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref8$nonce = _ref8.nonce,
    nonce = _ref8$nonce === void 0 ? mockNonce() : _ref8$nonce;
  return {
    result: mockCreateTypedDataResult('CreateSetProfileMetadataURIBroadcastItemResult', {
      __typename: 'CreateSetProfileMetadataURIEIP712TypedData',
      types: {
        __typename: 'CreateSetProfileMetadataURIEIP712TypedDataTypes',
        SetProfileMetadataURIWithSig: [mockEIP712TypedDataField()]
      },
      domain: mockEIP712TypedDataDomain(),
      message: {
        __typename: 'CreateSetProfileMetadataURIEIP712TypedDataValue',
        nonce: nonce,
        deadline: '0',
        profileId: mockProfileId(),
        metadata: faker.internet.url()
      }
    })
  };
}
function mockCreateUnfollowTypedDataData() {
  var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref9$nonce = _ref9.nonce,
    nonce = _ref9$nonce === void 0 ? mockNonce() : _ref9$nonce;
  return {
    result: mockCreateTypedDataResult('CreateUnfollowBroadcastItemResult', {
      __typename: 'CreateBurnEIP712TypedData',
      types: {
        __typename: 'CreateBurnEIP712TypedDataTypes',
        BurnWithSig: [mockEIP712TypedDataField()]
      },
      domain: mockEIP712TypedDataDomain(),
      message: {
        __typename: 'CreateBurnEIP712TypedDataValue',
        nonce: nonce,
        deadline: '0',
        tokenId: faker.datatype.hexadecimal({
          length: 2
        })
      }
    })
  };
}
function mockBroadcastProxyActionCallResponse(instructions) {
  return {
    request: {
      query: ProxyActionDocument,
      variables: instructions.variables
    },
    result: {
      data: {
        result: instructions.result
      }
    }
  };
}
function createBroadcastProxyActionCallMockedError(instructions) {
  return {
    request: {
      query: ProxyActionDocument,
      variables: instructions.variables
    },
    result: {
      errors: [new GraphQLError(instructions.errorMessage)]
    }
  };
}
function mockCreateSetFollowModuleTypedDataData() {
  var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref10$nonce = _ref10.nonce,
    nonce = _ref10$nonce === void 0 ? mockNonce() : _ref10$nonce;
  return {
    result: mockCreateTypedDataResult('CreateSetFollowModuleBroadcastItemResult', {
      __typename: 'CreateSetFollowModuleEIP712TypedData',
      types: {
        __typename: 'CreateSetFollowModuleEIP712TypedDataTypes',
        SetFollowModuleWithSig: [mockEIP712TypedDataField()]
      },
      domain: mockEIP712TypedDataDomain(),
      message: {
        __typename: 'CreateSetFollowModuleEIP712TypedDataValue',
        nonce: nonce,
        deadline: '0',
        profileId: mockProfileId(),
        followModule: mockEthereumAddress(),
        followModuleInitData: '0x00'
      }
    })
  };
}
function mockCreateSetProfileImageUriTypedDataData() {
  var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref11$nonce = _ref11.nonce,
    nonce = _ref11$nonce === void 0 ? mockNonce() : _ref11$nonce;
  return {
    result: mockCreateTypedDataResult('CreateSetProfileImageUriBroadcastItemResult', {
      __typename: 'CreateSetProfileImageUriEIP712TypedData',
      types: {
        __typename: 'CreateSetProfileImageUriEIP712TypedDataTypes',
        SetProfileImageURIWithSig: [mockEIP712TypedDataField()]
      },
      domain: mockEIP712TypedDataDomain(),
      message: {
        __typename: 'CreateSetProfileImageUriEIP712TypedDataValue',
        nonce: nonce,
        deadline: 1644303500,
        profileId: mockProfileId(),
        imageURI: faker.internet.url()
      }
    })
  };
}
function mockCreateSetProfileImageUriTypedDataResponse(_ref12) {
  var variables = _ref12.variables,
    data = _ref12.data;
  return {
    request: {
      query: CreateSetProfileImageUriTypedDataDocument,
      variables: variables
    },
    result: {
      data: data
    }
  };
}
function mockCreateSetDispatcherTypedDataData() {
  var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref13$nonce = _ref13.nonce,
    nonce = _ref13$nonce === void 0 ? mockNonce() : _ref13$nonce;
  return {
    result: mockCreateTypedDataResult('CreateSetDispatcherBroadcastItemResult', {
      __typename: 'CreateSetDispatcherEIP712TypedData',
      types: {
        __typename: 'CreateSetDispatcherEIP712TypedDataTypes',
        SetDispatcherWithSig: [mockEIP712TypedDataField()]
      },
      domain: mockEIP712TypedDataDomain(),
      message: {
        __typename: 'CreateSetDispatcherEIP712TypedDataValue',
        nonce: nonce,
        deadline: '0',
        profileId: mockProfileId(),
        dispatcher: mockEthereumAddress()
      }
    })
  };
}
function mockCreateSetProfileMetadataTypedDataResponse(_ref14) {
  var request = _ref14.request,
    overrideSigNonce = _ref14.overrideSigNonce,
    _ref14$data = _ref14.data,
    data = _ref14$data === void 0 ? mockCreateSetProfileMetadataTypedDataData({
      nonce: overrideSigNonce
    }) : _ref14$data;
  return {
    request: {
      query: CreateSetProfileMetadataTypedDataDocument,
      variables: {
        request: request,
        options: overrideSigNonce ? {
          overrideSigNonce: overrideSigNonce
        } : undefined
      }
    },
    result: {
      data: data
    }
  };
}
function mockCreateSetProfileMetadataViaDispatcherResponse(_ref15) {
  var variables = _ref15.variables,
    data = _ref15.data;
  return {
    request: {
      query: CreateSetProfileMetadataViaDispatcherDocument,
      variables: variables
    },
    result: {
      data: data
    }
  };
}
function mockCreateCommentTypedDataResponse(_ref16) {
  var variables = _ref16.variables,
    data = _ref16.data;
  return {
    request: {
      query: CreateCommentTypedDataDocument,
      variables: variables
    },
    result: {
      data: data
    }
  };
}
function mockCreateDataAvailabilityCommentTypedDataResponse(_ref17) {
  var variables = _ref17.variables,
    data = _ref17.data;
  return {
    request: {
      query: CreateDataAvailabilityCommentTypedDataDocument,
      variables: variables
    },
    result: {
      data: data
    }
  };
}
function mockCreateCommentViaDispatcherResponse(_ref18) {
  var variables = _ref18.variables,
    data = _ref18.data;
  return {
    request: {
      query: CreateCommentViaDispatcherDocument,
      variables: variables
    },
    result: {
      data: data
    }
  };
}
function mockCreateDataAvailabilityCommentViaDispatcherDataResponse(_ref19) {
  var variables = _ref19.variables,
    data = _ref19.data;
  return {
    request: {
      query: CreateDataAvailabilityCommentViaDispatcherDocument,
      variables: variables
    },
    result: {
      data: data
    }
  };
}
function mockCreateMirrorTypedDataResponse(_ref20) {
  var variables = _ref20.variables,
    data = _ref20.data;
  return {
    request: {
      query: CreateMirrorTypedDataDocument,
      variables: variables
    },
    result: {
      data: data
    }
  };
}
function mockCreateDataAvailabilityMirrorTypedDataResponse(_ref21) {
  var variables = _ref21.variables,
    data = _ref21.data;
  return {
    request: {
      query: CreateDataAvailabilityMirrorTypedDataDocument,
      variables: variables
    },
    result: {
      data: data
    }
  };
}
function mockCreateMirrorViaDispatcherResponse(_ref22) {
  var variables = _ref22.variables,
    data = _ref22.data;
  return {
    request: {
      query: CreateMirrorViaDispatcherDocument,
      variables: variables
    },
    result: {
      data: data
    }
  };
}
function mockCreateDataAvailabilityMirrorViaDispatcherDataResponse(_ref23) {
  var variables = _ref23.variables,
    data = _ref23.data;
  return {
    request: {
      query: CreateDataAvailabilityMirrorViaDispatcherDocument,
      variables: variables
    },
    result: {
      data: data
    }
  };
}
function mockCreatePostTypedDataResponse(_ref24) {
  var variables = _ref24.variables,
    data = _ref24.data;
  return {
    request: {
      query: CreatePostTypedDataDocument,
      variables: variables
    },
    result: {
      data: data
    }
  };
}
function mockCreateDataAvailabilityPostTypedDataResponse(_ref25) {
  var variables = _ref25.variables,
    data = _ref25.data;
  return {
    request: {
      query: CreateDataAvailabilityPostTypedDataDocument,
      variables: variables
    },
    result: {
      data: data
    }
  };
}
function mockCreatePostViaDispatcherResponse(_ref26) {
  var variables = _ref26.variables,
    data = _ref26.data;
  return {
    request: {
      query: CreatePostViaDispatcherDocument,
      variables: variables
    },
    result: {
      data: data
    }
  };
}
function mockCreateDataAvailabilityPostViaDispatcherDataResponse(_ref27) {
  var variables = _ref27.variables,
    data = _ref27.data;
  return {
    request: {
      query: CreateDataAvailabilityPostViaDispatcherDocument,
      variables: variables
    },
    result: {
      data: data
    }
  };
}
function mockSetProfileImageURIViaDispatcherResponse(_ref28) {
  var variables = _ref28.variables,
    data = _ref28.data;
  return {
    request: {
      query: CreateSetProfileImageUriViaDispatcherDocument,
      variables: variables
    },
    result: {
      data: data
    }
  };
}
function mockCreateCollectTypedDataData() {
  var _ref29 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref29$nonce = _ref29.nonce,
    nonce = _ref29$nonce === void 0 ? mockNonce() : _ref29$nonce;
  return {
    result: mockCreateTypedDataResult('CreateCollectBroadcastItemResult', {
      __typename: 'CreateCollectEIP712TypedData',
      types: {
        __typename: 'CreateCollectEIP712TypedDataTypes',
        CollectWithSig: [mockEIP712TypedDataField()]
      },
      domain: mockEIP712TypedDataDomain(),
      message: {
        __typename: 'CreateCollectEIP712TypedDataValue',
        nonce: nonce,
        deadline: '0',
        profileId: mockProfileId(),
        pubId: faker.datatype.hexadecimal({
          length: 2
        }),
        data: faker.datatype.hexadecimal({
          length: 2
        })
      }
    })
  };
}
function mockReportPublicationResponse(args) {
  return {
    request: {
      query: ReportPublicationDocument,
      variables: args.variables
    },
    result: {
      data: {
        reportPublication: null
      }
    }
  };
}
function mockAddNotInterestedResponse(variables) {
  return {
    request: {
      query: AddNotInterestedDocument,
      variables: variables
    },
    result: {
      data: {
        result: null
      }
    }
  };
}
function mockRemoveNotInterestedResponse(variables) {
  return {
    request: {
      query: RemoveNotInterestedDocument,
      variables: variables
    },
    result: {
      data: {
        result: null
      }
    }
  };
}
function mockAddToMyBookmarksResponse(variables) {
  return {
    request: {
      query: AddToMyBookmarksDocument,
      variables: variables
    },
    result: {
      data: {
        result: null
      }
    }
  };
}
function mockRemoveFromMyBookmarksResponse(variables) {
  return {
    request: {
      query: RemoveFromMyBookmarksDocument,
      variables: variables
    },
    result: {
      data: {
        result: null
      }
    }
  };
}

function mockSnapshotSpaceId() {
  return faker.internet.domainName();
}
function mockSnapshotProposalId() {
  return faker.datatype.hexadecimal();
}
function mockSnapshotPollUrl() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$baseUrl = _ref.baseUrl,
    baseUrl = _ref$baseUrl === void 0 ? 'https://snapshot.org' : _ref$baseUrl,
    _ref$spaceId = _ref.spaceId,
    spaceId = _ref$spaceId === void 0 ? mockSnapshotSpaceId() : _ref$spaceId,
    _ref$proposalId = _ref.proposalId,
    proposalId = _ref$proposalId === void 0 ? mockSnapshotProposalId() : _ref$proposalId;
  return "".concat(baseUrl, "/#/").concat(spaceId, "/proposal/").concat(proposalId);
}
function mockSnapshotProposal(overrides) {
  return _objectSpread2(_objectSpread2({
    id: mockSnapshotProposalId(),
    author: mockEthereumAddress(),
    state: 'active',
    title: faker.lorem.sentence(),
    choices: ['yes', 'no'],
    scores: [1, 0],
    scores_total: 1,
    snapshot: '1234567890',
    symbol: 'BRA',
    privacy: '',
    network: '1',
    type: 'single-choice',
    start: faker.date.past().getTime(),
    end: faker.date.future().getTime(),
    quorum: 1,
    space: {
      id: faker.internet.domainName(),
      name: faker.commerce.productName()
    },
    strategies: [],
    flagged: null
  }, overrides), {}, {
    __typename: 'Proposal'
  });
}

function mockGetSnapshotProposalDataResponse(_ref) {
  var _proposal$space;
  var proposal = _ref.proposal;
  return {
    request: {
      query: GetSnapshotProposalDocument,
      variables: {
        proposalId: proposal.id,
        spaceId: (_proposal$space = proposal.space) === null || _proposal$space === void 0 ? void 0 : _proposal$space.id,
        includeVotes: false,
        voterAddress: '0x000'
      }
    },
    result: {
      data: {
        proposal: proposal
      }
    }
  };
}

export { AnyPaginatedQueryDocument, createBroadcastProxyActionCallMockedError, createGraphQLError, createGraphQLValidationError, createHttpJsonResponse, createUnauthenticatedHttpResponse, mockAddNotInterestedResponse, mockAddReactionResponse, mockAddToMyBookmarksResponse, mockAndAccessCondition, mockAnyPaginatedQueryResponse, mockAnyPaginatedQueryResult, mockAnyoneFollowPolicy, mockAttributeFragment, mockBroadcastOffChainResponse, mockBroadcastOnChainResponse, mockBroadcastProxyActionCallResponse, mockCollectConditionAccessCondition, mockCommentFragment, mockCreateCollectTypedDataData, mockCreateCommentTypedDataData, mockCreateCommentTypedDataResponse, mockCreateCommentViaDispatcherResponse, mockCreateDataAvailabilityCommentTypedDataResponse, mockCreateDataAvailabilityCommentViaDispatcherDataResponse, mockCreateDataAvailabilityMirrorTypedDataResponse, mockCreateDataAvailabilityMirrorViaDispatcherDataResponse, mockCreateDataAvailabilityPostTypedDataResponse, mockCreateDataAvailabilityPostViaDispatcherDataResponse, mockCreateFollowTypedDataData, mockCreateMirrorTypedDataData, mockCreateMirrorTypedDataResponse, mockCreateMirrorViaDispatcherResponse, mockCreatePostTypedDataData, mockCreatePostTypedDataResponse, mockCreatePostViaDispatcherResponse, mockCreateProfileResponse, mockCreateSetDispatcherTypedDataData, mockCreateSetFollowModuleTypedDataData, mockCreateSetProfileImageUriTypedDataData, mockCreateSetProfileImageUriTypedDataResponse, mockCreateSetProfileMetadataTypedDataData, mockCreateSetProfileMetadataTypedDataResponse, mockCreateSetProfileMetadataViaDispatcherResponse, mockCreateUnfollowTypedDataData, mockCursor, mockDataAvailabilityPublicationResult, mockEnabledModuleCurrenciesResponse, mockEnabledModuleFragment, mockEnabledModulesFragment, mockEnabledModulesResponse, mockEncryptedFieldsOutputFragment, mockEncryptionParamsOutputFragment, mockEoaOwnershipAccessCondition, mockErc20AmountFieldsFragment, mockErc20OwnershipAccessCondition, mockExploreProfilesResponse, mockExplorePublicationsResponse, mockFeedItemFragment, mockFeedResponse, mockFollowConditionAccessCondition, mockFreeCollectModuleSettings, mockGenericErrorResponse, mockGenericSuccessResponse, mockGetAllProfilesResponse, mockGetProfileBookmarksResponse, mockGetProfilePublicationRevenueResponse, mockGetProfileResponse, mockGetPublicationResponse, mockGetPublicationRevenueResponse, mockGetPublicationsResponse, mockGetSnapshotProposalDataResponse, mockHasTxHashBeenIndexedData, mockHasTxHashBeenIndexedResponse, mockHidePublicationResponse, mockDiGiApolloClient, mockDiGiCache, mockMediaFragment, mockMetadataOutputFragment, mockMirrorFragment, mockModuleInfoFragment, mockMutualFollowersResponse, mockNftOwnershipAccessCondition, mockNotYetKnownCollectModuleSettings, mockOrAccessCondition, mockPaginatedResultInfo, mockPostFragment, mockProfileCoverPictureMediaFragment, mockProfileFollowRevenueFragment, mockProfileFollowRevenueResponse, mockProfileFragment, mockProfileOwnedByMeFragment, mockProfileOwnershipAccessCondition, mockProfilePictureMediaFragment, mockProfilePublicationsForSaleResponse, mockProfileStatsFragment, mockProfilesToFollowResponse, mockProxyActionStatusResponse, mockPublicationMetadata, mockPublicationRevenueFragment, mockPublicationStatsFragment, mockRelayErrorFragment, mockRelayerResultFragment, mockRemoveFromMyBookmarksResponse, mockRemoveNotInterestedResponse, mockRemoveReactionResponse, mockRemoveReactionResponseWithGraphqlValidationError, mockReportPublicationResponse, mockSearchProfilesResponse, mockSearchPublicationsResponse, mockSetProfileImageURIViaDispatcherResponse, mockSnapshotApolloClient, mockSnapshotPollUrl, mockSnapshotProposal, mockSnapshotProposalId, mockSnapshotSpaceId, mockSources, mockTransactionState, mockValidationErrorResponse, mockWalletFragment, mockWhoCollectedPublicationResponse, mockWhoReactedPublicationResponse, mockWhoReactedResultFragment, simulateAuthenticatedProfile, simulateAuthenticatedWallet, simulateNotAuthenticated };
