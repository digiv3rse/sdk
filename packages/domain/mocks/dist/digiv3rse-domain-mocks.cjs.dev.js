'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var inherits = require('../../dist/inherits-820eeba3.cjs.dev.js');
var wrapNativeSuper = require('../../dist/wrapNativeSuper-c2c9eee5.cjs.dev.js');
var asyncToGenerator = require('../../dist/asyncToGenerator-ba66657c.cjs.dev.js');
var createClass = require('../../dist/createClass-ed62e2bc.cjs.dev.js');
var faker = require('@faker-js/faker');
var globals = require('@jest/globals');
var sharedKernel = require('@digiv3rse/shared-kernel');
var mocks = require('@digiv3rse/shared-kernel/mocks');
var jestMockExtended = require('jest-mock-extended');
var PublicationReport = require('../../dist/PublicationReport-fdaa0678.cjs.dev.js');
var Transactions = require('../../dist/Transactions-84b0c7a3.cjs.dev.js');
var jestWhen = require('jest-when');
var FollowPolicy = require('../../dist/FollowPolicy-55b9e77b.cjs.dev.js');
var ReferencePolicyConfig = require('../../dist/ReferencePolicyConfig-361b759c.cjs.dev.js');
var waitFor = require('wait-for-expect');
var TokenAllowance = require('../../dist/TokenAllowance-067890dc.cjs.dev.js');
require('../../dist/SponsorshipReady-3bbadba2.cjs.dev.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var waitFor__default = /*#__PURE__*/_interopDefault(waitFor);

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      wrapNativeSuper._defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

function mockProfileId() {
  return faker.faker.datatype.hexadecimal({
    length: 2
  });
}
function mockPublicationId() {
  var profileId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mockProfileId();
  return "".concat(profileId, "-").concat(faker.faker.datatype.hexadecimal({
    length: 2
  }));
}
function mockWallet() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$address = _ref.address,
    address = _ref$address === void 0 ? mocks.mockEvmAddress() : _ref$address;
  return jestMockExtended.mock({
    address: address
  });
}
function mockCredentials(overrides) {
  return jestMockExtended.mock(_objectSpread2({
    address: mocks.mockEvmAddress(),
    profileId: mockProfileId()
  }, overrides));
}
function mockSignature() {
  return mocks.mock32BytesHexString();
}
function mockAnyTransactionRequestModel(overrides) {
  return _objectSpread2({
    kind: Transactions.TransactionKind.CREATE_POST
  }, overrides);
}
function mockProtocolTransactionRequestModel(overrides) {
  return _objectSpread2({
    kind: Transactions.TransactionKind.CREATE_POST
  }, overrides);
}
var MockedUnsignedProtocolCall = /*#__PURE__*/function () {
  function MockedUnsignedProtocolCall(id, request) {
    var nonce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : mockNonce();
    createClass._classCallCheck(this, MockedUnsignedProtocolCall);
    this.id = id;
    this.request = request;
    this.nonce = nonce;
  }
  createClass._createClass(MockedUnsignedProtocolCall, [{
    key: "update",
    value: function () {
      var _update = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee(data) {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new MockedUnsignedProtocolCall(this.id, this.request, data.nonce));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function update(_x) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }]);
  return MockedUnsignedProtocolCall;
}();
function mockIUnsignedProtocolCall(request, overrides) {
  return new MockedUnsignedProtocolCall(faker.faker.datatype.uuid(), request, overrides === null || overrides === void 0 ? void 0 : overrides.nonce);
}
var MockedSignedProtocolCall = /*#__PURE__*/createClass._createClass(function MockedSignedProtocolCall(id, signature, request, nonce) {
  createClass._classCallCheck(this, MockedSignedProtocolCall);
  this.id = id;
  this.signature = signature;
  this.request = request;
  this.nonce = nonce;
});
function mockISignedProtocolCall() {
  var unsignedCall = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mockIUnsignedProtocolCall(mockAnyTransactionRequestModel());
  return new MockedSignedProtocolCall(unsignedCall.id, mockSignature(), unsignedCall.request, unsignedCall.nonce);
}
function mockUnsignedTransaction() {
  var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mockAnyTransactionRequestModel();
  return new Transactions.UnsignedTransaction(faker.faker.datatype.uuid(), sharedKernel.ChainType.POLYGON, request);
}
function mockTransactionHash() {
  return mocks.mock32BytesHexString();
}
function mockNonce() {
  return faker.faker.datatype.number();
}
var MockedMetaTransaction = /*#__PURE__*/function (_MetaTransaction) {
  inherits._inherits(MockedMetaTransaction, _MetaTransaction);
  function MockedMetaTransaction(_ref2) {
    var _this;
    var _ref2$chainType = _ref2.chainType,
      chainType = _ref2$chainType === void 0 ? sharedKernel.ChainType.POLYGON : _ref2$chainType,
      _ref2$id = _ref2.id,
      id = _ref2$id === void 0 ? faker.faker.datatype.uuid() : _ref2$id,
      _ref2$hash = _ref2.hash,
      hash = _ref2$hash === void 0 ? mockTransactionHash() : _ref2$hash,
      request = _ref2.request,
      _ref2$nonce = _ref2.nonce,
      nonce = _ref2$nonce === void 0 ? mockNonce() : _ref2$nonce;
    var instructions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      withUpdatesSequence: []
    };
    createClass._classCallCheck(this, MockedMetaTransaction);
    _this = inherits._callSuper(this, MockedMetaTransaction);
    _this.instructions = instructions;
    _this.chainType = chainType;
    _this.id = id;
    _this.request = request;
    _this.nonce = nonce;
    _this.hash = hash;
    return _this;
  }
  createClass._createClass(MockedMetaTransaction, [{
    key: "waitNextEvent",
    value: function () {
      var _waitNextEvent = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee2() {
        var _item$txHash;
        var item;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              item = this.instructions.withUpdatesSequence.shift();
              if (item) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return", sharedKernel.success(Transactions.TransactionEvent.SETTLED));
            case 3:
              if (!('error' in item)) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return", sharedKernel.failure(item.error));
            case 5:
              this.hash = (_item$txHash = item.txHash) !== null && _item$txHash !== void 0 ? _item$txHash : this.hash;
              return _context2.abrupt("return", sharedKernel.success(item.event));
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function waitNextEvent() {
        return _waitNextEvent.apply(this, arguments);
      }
      return waitNextEvent;
    }()
  }], [{
    key: "fromSignedCall",
    value: function fromSignedCall(signedCall) {
      return new MockedMetaTransaction({
        chainType: sharedKernel.ChainType.POLYGON,
        hash: mockTransactionHash(),
        id: signedCall.id,
        request: signedCall.request
      });
    }
  }, {
    key: "fromRawData",
    value: function fromRawData(data, instructions) {
      return new MockedMetaTransaction(data, instructions);
    }
  }]);
  return MockedMetaTransaction;
}(Transactions.MetaTransaction);
var MockedNativeTransaction = /*#__PURE__*/function (_NativeTransaction) {
  inherits._inherits(MockedNativeTransaction, _NativeTransaction);
  function MockedNativeTransaction(_ref3) {
    var _this2;
    var _ref3$chainType = _ref3.chainType,
      chainType = _ref3$chainType === void 0 ? sharedKernel.ChainType.POLYGON : _ref3$chainType,
      _ref3$hash = _ref3.hash,
      hash = _ref3$hash === void 0 ? mockTransactionHash() : _ref3$hash,
      _ref3$id = _ref3.id,
      id = _ref3$id === void 0 ? faker.faker.datatype.uuid() : _ref3$id,
      request = _ref3.request;
    createClass._classCallCheck(this, MockedNativeTransaction);
    _this2 = inherits._callSuper(this, MockedNativeTransaction);
    wrapNativeSuper._defineProperty(inherits._assertThisInitialized(_this2), "waitNextEvent", globals.jest.fn());
    _this2.chainType = chainType;
    _this2.id = id;
    _this2.request = request;
    _this2.hash = hash;
    return _this2;
  }
  createClass._createClass(MockedNativeTransaction, null, [{
    key: "fromUnsignedTransaction",
    value: function fromUnsignedTransaction(unsignedTransaction) {
      return new MockedNativeTransaction({
        chainType: sharedKernel.ChainType.POLYGON,
        id: unsignedTransaction.id,
        request: unsignedTransaction.request
      });
    }
  }, {
    key: "fromRequest",
    value: function fromRequest(request) {
      return new MockedNativeTransaction({
        request: request,
        hash: mockTransactionHash()
      });
    }
  }]);
  return MockedNativeTransaction;
}(Transactions.NativeTransaction);
function mockProfile() {
  return PublicationReport.Profile.create({
    id: mockProfileId(),
    handle: faker.faker.internet.userName()
  });
}
function mockTransactionError() {
  return new Transactions.TransactionError(Transactions.TransactionErrorReason.MINING_TIMEOUT);
}
var MockedDataTransaction = /*#__PURE__*/function (_DataTransaction) {
  inherits._inherits(MockedDataTransaction, _DataTransaction);
  function MockedDataTransaction(_ref4) {
    var _this3;
    var _ref4$id = _ref4.id,
      id = _ref4$id === void 0 ? faker.faker.datatype.uuid() : _ref4$id,
      request = _ref4.request;
    createClass._classCallCheck(this, MockedDataTransaction);
    _this3 = inherits._callSuper(this, MockedDataTransaction);
    _this3.id = id;
    _this3.request = request;
    return _this3;
  }
  createClass._createClass(MockedDataTransaction, [{
    key: "waitNextEvent",
    value: function () {
      var _waitNextEvent2 = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee3() {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", sharedKernel.success(Transactions.TransactionEvent.SETTLED));
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function waitNextEvent() {
        return _waitNextEvent2.apply(this, arguments);
      }
      return waitNextEvent;
    }()
  }], [{
    key: "fromSignedCall",
    value: function fromSignedCall(signedCall) {
      return new MockedDataTransaction({
        id: signedCall.id,
        request: signedCall.request
      });
    }
  }]);
  return MockedDataTransaction;
}(Transactions.DataTransaction);
function mockAppId() {
  return faker.faker.commerce.productName();
}

function mockProfileLoginRequest(overrides) {
  return _objectSpread2({
    address: mocks.mockEvmAddress(),
    profileId: mockProfileId()
  }, overrides);
}
function mockJustWalletLoginRequest(overrides) {
  return _objectSpread2({
    address: mocks.mockEvmAddress()
  }, overrides);
}
function mockActiveWallet() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$wallet = _ref.wallet,
    wallet = _ref$wallet === void 0 ? mockWallet() : _ref$wallet;
  var activeWallet = jestMockExtended.mock();
  jestWhen.when(activeWallet.requireActiveWallet).mockResolvedValue(wallet);
  return activeWallet;
}

function mockChargeFollowConfig(overrides) {
  return _objectSpread2(_objectSpread2({
    amount: mocks.mockUsdcAmount(42),
    recipient: mocks.mockEvmAddress()
  }, overrides), {}, {
    type: FollowPolicy.FollowPolicyType.CHARGE
  });
}
function mockCreateProfileRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    localName: faker.faker.internet.userName(),
    approveSignless: true,
    to: mocks.mockEvmAddress()
  }, overrides), {}, {
    kind: Transactions.TransactionKind.CREATE_PROFILE
  });
}
function mockUpdateFollowPolicyRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    policy: mockChargeFollowConfig(),
    signless: true,
    sponsored: true
  }, overrides), {}, {
    kind: Transactions.TransactionKind.UPDATE_FOLLOW_POLICY
  });
}
function mockSetProfileMetadataRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    signless: true,
    sponsored: true,
    metadataURI: faker.faker.internet.url()
  }, overrides), {}, {
    kind: Transactions.TransactionKind.UPDATE_PROFILE_DETAILS
  });
}
function mockUpdateProfileManagersRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    approveSignless: true,
    sponsored: true
  }, overrides), {}, {
    kind: Transactions.TransactionKind.UPDATE_PROFILE_MANAGERS
  });
}
function mockFreeFollowRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    profileId: mockProfileId(),
    signless: true,
    sponsored: true
  }, overrides), {}, {
    kind: Transactions.TransactionKind.FOLLOW_PROFILE
  });
}
function mockPaidFollowRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    profileId: mockProfileId(),
    fee: {
      amount: mocks.mockDaiAmount(1, sharedKernel.ChainType.POLYGON),
      contractAddress: mocks.mockEvmAddress(),
      recipient: mocks.mockEvmAddress()
    },
    sponsored: true,
    signless: false
  }, overrides), {}, {
    kind: Transactions.TransactionKind.FOLLOW_PROFILE
  });
}
function mockUnknownFollowRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    profileId: mockProfileId(),
    address: mocks.mockEvmAddress(),
    data: mocks.mockData(),
    sponsored: true,
    signless: false
  }, overrides), {}, {
    kind: Transactions.TransactionKind.FOLLOW_PROFILE
  });
}
function mockUnfollowRequest() {
  return {
    profileId: mockProfileId(),
    kind: Transactions.TransactionKind.UNFOLLOW_PROFILE,
    sponsored: true,
    signless: true
  };
}
function mockFullHandle() {
  var localName = faker.faker.internet.userName();
  var namespace = faker.faker.internet.domainWord();
  return "".concat(localName, "/").concat(namespace);
}
function mockLinkHandleRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    fullHandle: mockFullHandle(),
    profileId: mockProfileId(),
    signless: true,
    sponsored: true
  }, overrides), {}, {
    kind: Transactions.TransactionKind.LINK_HANDLE
  });
}
function mockUnlinkHandleRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    fullHandle: mockFullHandle(),
    profileId: mockProfileId(),
    signless: true,
    sponsored: true
  }, overrides), {}, {
    kind: Transactions.TransactionKind.UNLINK_HANDLE
  });
}
function mockClaimHandleRequest() {
  return {
    localName: faker.faker.internet.userName(),
    kind: Transactions.TransactionKind.CLAIM_HANDLE
  };
}
function mockBlockProfilesRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    signless: true,
    profileIds: [mockProfileId()],
    sponsored: true
  }, overrides), {}, {
    kind: Transactions.TransactionKind.BLOCK_PROFILE
  });
}
function mockUnblockProfilesRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    signless: true,
    profileIds: [mockProfileId()],
    sponsored: true
  }, overrides), {}, {
    kind: Transactions.TransactionKind.UNBLOCK_PROFILE
  });
}

function mockCreateMirrorRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    mirrorOn: mockPublicationId(),
    signless: false,
    sponsored: true
  }, overrides), {}, {
    kind: Transactions.TransactionKind.MIRROR_PUBLICATION
  });
}
function mockCreatePostRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    signless: false,
    sponsored: true,
    metadata: faker.faker.internet.url(),
    actions: [mockUnknownOpenActionConfig()],
    reference: mockAnyoneReferencePolicyConfig()
  }, overrides), {}, {
    kind: Transactions.TransactionKind.CREATE_POST
  });
}
function mockCreateCommentRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    signless: false,
    sponsored: true,
    metadata: faker.faker.internet.url(),
    actions: [mockUnknownOpenActionConfig()],
    reference: mockAnyoneReferencePolicyConfig(),
    commentOn: mockPublicationId()
  }, overrides), {}, {
    kind: Transactions.TransactionKind.CREATE_COMMENT
  });
}
function mockCreateQuoteRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    signless: false,
    sponsored: true,
    metadata: faker.faker.internet.url(),
    actions: [mockUnknownOpenActionConfig()],
    reference: mockAnyoneReferencePolicyConfig(),
    quoteOn: mockPublicationId()
  }, overrides), {}, {
    kind: Transactions.TransactionKind.CREATE_QUOTE
  });
}
function mockTogglePropertyRequest(overrides) {
  return _objectSpread2({
    publicationId: mockPublicationId()
  }, overrides);
}
function mockHidePublicationRequest(overrides) {
  return _objectSpread2({
    publicationId: mockPublicationId()
  }, overrides);
}
function mockReportPublicationRequest(overrides) {
  return _objectSpread2({
    publicationId: mockPublicationId(),
    reason: PublicationReport.PublicationReportReason.FAKE_ENGAGEMENT,
    additionalComments: faker.faker.lorem.sentence()
  }, overrides);
}
function mockUnknownOpenActionConfig() {
  return {
    type: ReferencePolicyConfig.OpenActionType.UNKNOWN_OPEN_ACTION,
    address: mocks.mockEvmAddress(),
    data: '0x'
  };
}
function mockAnyoneReferencePolicyConfig() {
  return {
    type: ReferencePolicyConfig.ReferencePolicyType.ANYONE
  };
}
function mockCollectFee(overrides) {
  return _objectSpread2({
    amount: mocks.mockDaiAmount(1, sharedKernel.ChainType.POLYGON),
    contractAddress: mocks.mockEvmAddress()
  }, overrides);
}
function mockLegacyCollectRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    publicationId: mockPublicationId(),
    "public": false,
    signless: true,
    sponsored: true
  }, overrides), {}, {
    type: ReferencePolicyConfig.AllOpenActionType.LEGACY_COLLECT,
    kind: Transactions.TransactionKind.ACT_ON_PUBLICATION
  });
}
function mockSimpleCollectRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    publicationId: mockPublicationId(),
    "public": false,
    signless: true,
    sponsored: true
  }, overrides), {}, {
    type: ReferencePolicyConfig.AllOpenActionType.SIMPLE_COLLECT,
    kind: Transactions.TransactionKind.ACT_ON_PUBLICATION
  });
}
function mockMultirecipientCollectRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    publicationId: mockPublicationId(),
    fee: mockCollectFee(),
    "public": false,
    signless: true,
    sponsored: true
  }, overrides), {}, {
    type: ReferencePolicyConfig.AllOpenActionType.MULTIRECIPIENT_COLLECT,
    kind: Transactions.TransactionKind.ACT_ON_PUBLICATION
  });
}
function mockUnknownActionRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    publicationId: mockPublicationId(),
    address: mocks.mockEvmAddress(),
    data: '0x',
    "public": false,
    signless: true,
    sponsored: true
  }, overrides), {}, {
    type: ReferencePolicyConfig.AllOpenActionType.UNKNOWN_OPEN_ACTION,
    kind: Transactions.TransactionKind.ACT_ON_PUBLICATION
  });
}

function mockIOnChainRelayer(_ref) {
  var signedCall = _ref.signedCall,
    result = _ref.result;
  var relayer = jestMockExtended.mock();
  jestWhen.when(relayer.relayProtocolCall).calledWith(signedCall).mockResolvedValue(result);
  return relayer;
}
function mockIMomokaRelayer(_ref2) {
  var signedCall = _ref2.signedCall,
    result = _ref2.result;
  var relayer = jestMockExtended.mock();
  jestWhen.when(relayer.relaySignedMomoka).calledWith(signedCall).mockResolvedValue(result);
  return relayer;
}
function mockTransactionQueue() {
  return jestMockExtended.mock();
}
function mockTransactionData(overrides) {
  return _objectSpread2({
    id: faker.faker.datatype.uuid(),
    request: jestMockExtended.mock()
  }, overrides);
}
function mockIMetaTransactionNonceGateway() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref3$nonce = _ref3.nonce,
    nonce = _ref3$nonce === void 0 ? mockNonce() : _ref3$nonce;
  var gateway = jestMockExtended.mock();
  jestWhen.when(gateway.getNextMetaTransactionNonceFor).mockResolvedValue(nonce);
  return gateway;
}
function mockISignedOnChainGateway(_ref4) {
  var request = _ref4.request,
    nonce = _ref4.nonce,
    unsignedCall = _ref4.unsignedCall;
  var gateway = jestMockExtended.mock();
  jestWhen.when(gateway.createUnsignedProtocolCall).calledWith(request, nonce).mockResolvedValue(unsignedCall);
  return gateway;
}
function mockISignedMomokaGateway(_ref5) {
  var request = _ref5.request,
    unsignedCall = _ref5.unsignedCall;
  var gateway = jestMockExtended.mock();
  jestWhen.when(gateway.createUnsignedProtocolCall).calledWith(request).mockResolvedValue(unsignedCall);
  return gateway;
}
function mockIDelegatedTransactionGateway(_ref6) {
  var request = _ref6.request,
    result = _ref6.result;
  var gateway = jestMockExtended.mock();
  jestWhen.when(gateway.createDelegatedTransaction).calledWith(request).mockResolvedValue(result);
  return gateway;
}
function mockDelegableProtocolTransactionRequestModel(_ref7) {
  var signless = _ref7.signless;
  return {
    kind: Transactions.TransactionKind.CREATE_POST,
    signless: signless
  };
}
function mockProtocolTransactionRequestModelWithOffChainFlag() {
  return {
    kind: Transactions.TransactionKind.CREATE_POST,
    offChain: true
  };
}
function mockITransactionCompletionPresenter() {
  return {
    present: jest.fn().mockResolvedValue(undefined),
    waitForSuccess: function waitForSuccess() {
      var _this = this;
      return asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee() {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return waitFor__default["default"](function () {
                expect(_this.present).toBeCalledWith(sharedKernel.success(expect.anything()));
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    waitForFailure: function waitForFailure() {
      var _this2 = this;
      return asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee2() {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return waitFor__default["default"](function () {
                expect(_this2.present).toBeCalledWith(sharedKernel.failure(expect.any(Transactions.TransactionError)));
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
  };
}
function mockTokenAllowanceRequest() {
  var override = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread2(_objectSpread2({
    amount: mocks.mockDaiAmount(1, sharedKernel.ChainType.POLYGON),
    spender: mocks.mockEvmAddress(),
    limit: TokenAllowance.TokenAllowanceLimit.EXACT
  }, override), {}, {
    kind: Transactions.TransactionKind.APPROVE_MODULE
  });
}
function mockAnyBroadcastingError() {
  return new TokenAllowance.BroadcastingError(TokenAllowance.BroadcastingErrorReason.UNKNOWN);
}
function mockIPaidTransactionGateway(_ref8) {
  var request = _ref8.request,
    wallet = _ref8.wallet,
    unsignedTransaction = _ref8.unsignedTransaction;
  var gateway = jestMockExtended.mock();
  jestWhen.when(gateway.createUnsignedTransaction).calledWith(request, wallet).mockResolvedValue(unsignedTransaction);
  return gateway;
}

function mockIBalanceGateway(_ref) {
  var wallet = _ref.wallet,
    asset = _ref.asset,
    balance = _ref.balance;
  var gateway = jestMockExtended.mock();
  jestWhen.when(gateway.getBalanceFor).calledWith(wallet, asset).mockResolvedValue(balance);
  return gateway;
}
function mockITokenGateway(_ref2) {
  var owner = _ref2.owner,
    asset = _ref2.asset,
    spender = _ref2.spender,
    allowance = _ref2.allowance;
  var gateway = jestMockExtended.mock();
  jestWhen.when(gateway.getTransferAllowanceFor).calledWith(asset, owner, spender).mockResolvedValue(allowance);
  return gateway;
}
function mockTokenAvailabilityRequest() {
  var override = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread2({
    amount: mocks.mockDaiAmount(1),
    spender: mocks.mockEvmAddress()
  }, override);
}
function mockTokeAvailability(_ref3) {
  var _ref3$request = _ref3.request,
    request = _ref3$request === void 0 ? expect.any(Object) : _ref3$request,
    result = _ref3.result;
  var tokenAvailability = jestMockExtended.mock();
  jestWhen.when(tokenAvailability.checkAvailability).calledWith(request).mockResolvedValue(result);
  return tokenAvailability;
}

exports.MockedDataTransaction = MockedDataTransaction;
exports.MockedMetaTransaction = MockedMetaTransaction;
exports.MockedNativeTransaction = MockedNativeTransaction;
exports.mockActiveWallet = mockActiveWallet;
exports.mockAnyBroadcastingError = mockAnyBroadcastingError;
exports.mockAnyTransactionRequestModel = mockAnyTransactionRequestModel;
exports.mockAnyoneReferencePolicyConfig = mockAnyoneReferencePolicyConfig;
exports.mockAppId = mockAppId;
exports.mockBlockProfilesRequest = mockBlockProfilesRequest;
exports.mockChargeFollowConfig = mockChargeFollowConfig;
exports.mockClaimHandleRequest = mockClaimHandleRequest;
exports.mockCollectFee = mockCollectFee;
exports.mockCreateCommentRequest = mockCreateCommentRequest;
exports.mockCreateMirrorRequest = mockCreateMirrorRequest;
exports.mockCreatePostRequest = mockCreatePostRequest;
exports.mockCreateProfileRequest = mockCreateProfileRequest;
exports.mockCreateQuoteRequest = mockCreateQuoteRequest;
exports.mockCredentials = mockCredentials;
exports.mockDelegableProtocolTransactionRequestModel = mockDelegableProtocolTransactionRequestModel;
exports.mockFreeFollowRequest = mockFreeFollowRequest;
exports.mockHidePublicationRequest = mockHidePublicationRequest;
exports.mockIBalanceGateway = mockIBalanceGateway;
exports.mockIDelegatedTransactionGateway = mockIDelegatedTransactionGateway;
exports.mockIMetaTransactionNonceGateway = mockIMetaTransactionNonceGateway;
exports.mockIMomokaRelayer = mockIMomokaRelayer;
exports.mockIOnChainRelayer = mockIOnChainRelayer;
exports.mockIPaidTransactionGateway = mockIPaidTransactionGateway;
exports.mockISignedMomokaGateway = mockISignedMomokaGateway;
exports.mockISignedOnChainGateway = mockISignedOnChainGateway;
exports.mockISignedProtocolCall = mockISignedProtocolCall;
exports.mockITokenGateway = mockITokenGateway;
exports.mockITransactionCompletionPresenter = mockITransactionCompletionPresenter;
exports.mockIUnsignedProtocolCall = mockIUnsignedProtocolCall;
exports.mockJustWalletLoginRequest = mockJustWalletLoginRequest;
exports.mockLegacyCollectRequest = mockLegacyCollectRequest;
exports.mockLinkHandleRequest = mockLinkHandleRequest;
exports.mockMultirecipientCollectRequest = mockMultirecipientCollectRequest;
exports.mockNonce = mockNonce;
exports.mockPaidFollowRequest = mockPaidFollowRequest;
exports.mockProfile = mockProfile;
exports.mockProfileId = mockProfileId;
exports.mockProfileLoginRequest = mockProfileLoginRequest;
exports.mockProtocolTransactionRequestModel = mockProtocolTransactionRequestModel;
exports.mockProtocolTransactionRequestModelWithOffChainFlag = mockProtocolTransactionRequestModelWithOffChainFlag;
exports.mockPublicationId = mockPublicationId;
exports.mockReportPublicationRequest = mockReportPublicationRequest;
exports.mockSetProfileMetadataRequest = mockSetProfileMetadataRequest;
exports.mockSignature = mockSignature;
exports.mockSimpleCollectRequest = mockSimpleCollectRequest;
exports.mockTogglePropertyRequest = mockTogglePropertyRequest;
exports.mockTokeAvailability = mockTokeAvailability;
exports.mockTokenAllowanceRequest = mockTokenAllowanceRequest;
exports.mockTokenAvailabilityRequest = mockTokenAvailabilityRequest;
exports.mockTransactionData = mockTransactionData;
exports.mockTransactionError = mockTransactionError;
exports.mockTransactionHash = mockTransactionHash;
exports.mockTransactionQueue = mockTransactionQueue;
exports.mockUnblockProfilesRequest = mockUnblockProfilesRequest;
exports.mockUnfollowRequest = mockUnfollowRequest;
exports.mockUnknownActionRequest = mockUnknownActionRequest;
exports.mockUnknownFollowRequest = mockUnknownFollowRequest;
exports.mockUnknownOpenActionConfig = mockUnknownOpenActionConfig;
exports.mockUnlinkHandleRequest = mockUnlinkHandleRequest;
exports.mockUnsignedTransaction = mockUnsignedTransaction;
exports.mockUpdateFollowPolicyRequest = mockUpdateFollowPolicyRequest;
exports.mockUpdateProfileManagersRequest = mockUpdateProfileManagersRequest;
exports.mockWallet = mockWallet;
