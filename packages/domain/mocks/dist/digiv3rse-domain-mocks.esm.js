import { _ as _inherits, a as _callSuper, b as _assertThisInitialized } from '../../dist/inherits-241db0b5.esm.js';
import { _ as _defineProperty } from '../../dist/wrapNativeSuper-2b6372d3.esm.js';
import { _ as _asyncToGenerator, a as _regeneratorRuntime } from '../../dist/asyncToGenerator-0859ab5c.esm.js';
import { _ as _classCallCheck, a as _createClass } from '../../dist/createClass-ec354b47.esm.js';
import { faker } from '@faker-js/faker';
import { jest as jest$1 } from '@jest/globals';
import { ChainType, success, failure } from '@digiv3rse/shared-kernel';
import { mockEvmAddress, mock32BytesHexString, mockUsdcAmount, mockDaiAmount, mockData } from '@digiv3rse/shared-kernel/mocks';
import { mock } from 'jest-mock-extended';
import { P as Profile, a as PublicationReportReason } from '../../dist/PublicationReport-26df5202.esm.js';
import { T as TransactionKind, U as UnsignedTransaction, M as MetaTransaction, N as NativeTransaction, a as TransactionError, b as TransactionErrorReason, D as DataTransaction, c as TransactionEvent } from '../../dist/Transactions-c61bd9da.esm.js';
import { when } from 'jest-when';
import { F as FollowPolicyType } from '../../dist/FollowPolicy-c599dac9.esm.js';
import { O as OpenActionType, R as ReferencePolicyType, A as AllOpenActionType } from '../../dist/ReferencePolicyConfig-c94a2b29.esm.js';
import waitFor from 'wait-for-expect';
import { T as TokenAllowanceLimit, B as BroadcastingError, a as BroadcastingErrorReason } from '../../dist/TokenAllowance-72b1a48b.esm.js';
import '../../dist/SponsorshipReady-9ac7d611.esm.js';

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
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

function mockProfileId() {
  return faker.datatype.hexadecimal({
    length: 2
  });
}
function mockPublicationId() {
  var profileId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mockProfileId();
  return "".concat(profileId, "-").concat(faker.datatype.hexadecimal({
    length: 2
  }));
}
function mockWallet() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$address = _ref.address,
    address = _ref$address === void 0 ? mockEvmAddress() : _ref$address;
  return mock({
    address: address
  });
}
function mockCredentials(overrides) {
  return mock(_objectSpread2({
    address: mockEvmAddress(),
    profileId: mockProfileId()
  }, overrides));
}
function mockSignature() {
  return mock32BytesHexString();
}
function mockAnyTransactionRequestModel(overrides) {
  return _objectSpread2({
    kind: TransactionKind.CREATE_POST
  }, overrides);
}
function mockProtocolTransactionRequestModel(overrides) {
  return _objectSpread2({
    kind: TransactionKind.CREATE_POST
  }, overrides);
}
var MockedUnsignedProtocolCall = /*#__PURE__*/function () {
  function MockedUnsignedProtocolCall(id, request) {
    var nonce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : mockNonce();
    _classCallCheck(this, MockedUnsignedProtocolCall);
    this.id = id;
    this.request = request;
    this.nonce = nonce;
  }
  _createClass(MockedUnsignedProtocolCall, [{
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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
  return new MockedUnsignedProtocolCall(faker.datatype.uuid(), request, overrides === null || overrides === void 0 ? void 0 : overrides.nonce);
}
var MockedSignedProtocolCall = /*#__PURE__*/_createClass(function MockedSignedProtocolCall(id, signature, request, nonce) {
  _classCallCheck(this, MockedSignedProtocolCall);
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
  return new UnsignedTransaction(faker.datatype.uuid(), ChainType.POLYGON, request);
}
function mockTransactionHash() {
  return mock32BytesHexString();
}
function mockNonce() {
  return faker.datatype.number();
}
var MockedMetaTransaction = /*#__PURE__*/function (_MetaTransaction) {
  _inherits(MockedMetaTransaction, _MetaTransaction);
  function MockedMetaTransaction(_ref2) {
    var _this;
    var _ref2$chainType = _ref2.chainType,
      chainType = _ref2$chainType === void 0 ? ChainType.POLYGON : _ref2$chainType,
      _ref2$id = _ref2.id,
      id = _ref2$id === void 0 ? faker.datatype.uuid() : _ref2$id,
      _ref2$hash = _ref2.hash,
      hash = _ref2$hash === void 0 ? mockTransactionHash() : _ref2$hash,
      request = _ref2.request,
      _ref2$nonce = _ref2.nonce,
      nonce = _ref2$nonce === void 0 ? mockNonce() : _ref2$nonce;
    var instructions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      withUpdatesSequence: []
    };
    _classCallCheck(this, MockedMetaTransaction);
    _this = _callSuper(this, MockedMetaTransaction);
    _this.instructions = instructions;
    _this.chainType = chainType;
    _this.id = id;
    _this.request = request;
    _this.nonce = nonce;
    _this.hash = hash;
    return _this;
  }
  _createClass(MockedMetaTransaction, [{
    key: "waitNextEvent",
    value: function () {
      var _waitNextEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _item$txHash;
        var item;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              item = this.instructions.withUpdatesSequence.shift();
              if (item) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return", success(TransactionEvent.SETTLED));
            case 3:
              if (!('error' in item)) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return", failure(item.error));
            case 5:
              this.hash = (_item$txHash = item.txHash) !== null && _item$txHash !== void 0 ? _item$txHash : this.hash;
              return _context2.abrupt("return", success(item.event));
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
        chainType: ChainType.POLYGON,
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
}(MetaTransaction);
var MockedNativeTransaction = /*#__PURE__*/function (_NativeTransaction) {
  _inherits(MockedNativeTransaction, _NativeTransaction);
  function MockedNativeTransaction(_ref3) {
    var _this2;
    var _ref3$chainType = _ref3.chainType,
      chainType = _ref3$chainType === void 0 ? ChainType.POLYGON : _ref3$chainType,
      _ref3$hash = _ref3.hash,
      hash = _ref3$hash === void 0 ? mockTransactionHash() : _ref3$hash,
      _ref3$id = _ref3.id,
      id = _ref3$id === void 0 ? faker.datatype.uuid() : _ref3$id,
      request = _ref3.request;
    _classCallCheck(this, MockedNativeTransaction);
    _this2 = _callSuper(this, MockedNativeTransaction);
    _defineProperty(_assertThisInitialized(_this2), "waitNextEvent", jest$1.fn());
    _this2.chainType = chainType;
    _this2.id = id;
    _this2.request = request;
    _this2.hash = hash;
    return _this2;
  }
  _createClass(MockedNativeTransaction, null, [{
    key: "fromUnsignedTransaction",
    value: function fromUnsignedTransaction(unsignedTransaction) {
      return new MockedNativeTransaction({
        chainType: ChainType.POLYGON,
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
}(NativeTransaction);
function mockProfile() {
  return Profile.create({
    id: mockProfileId(),
    handle: faker.internet.userName()
  });
}
function mockTransactionError() {
  return new TransactionError(TransactionErrorReason.MINING_TIMEOUT);
}
var MockedDataTransaction = /*#__PURE__*/function (_DataTransaction) {
  _inherits(MockedDataTransaction, _DataTransaction);
  function MockedDataTransaction(_ref4) {
    var _this3;
    var _ref4$id = _ref4.id,
      id = _ref4$id === void 0 ? faker.datatype.uuid() : _ref4$id,
      request = _ref4.request;
    _classCallCheck(this, MockedDataTransaction);
    _this3 = _callSuper(this, MockedDataTransaction);
    _this3.id = id;
    _this3.request = request;
    return _this3;
  }
  _createClass(MockedDataTransaction, [{
    key: "waitNextEvent",
    value: function () {
      var _waitNextEvent2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", success(TransactionEvent.SETTLED));
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
}(DataTransaction);
function mockAppId() {
  return faker.commerce.productName();
}

function mockProfileLoginRequest(overrides) {
  return _objectSpread2({
    address: mockEvmAddress(),
    profileId: mockProfileId()
  }, overrides);
}
function mockJustWalletLoginRequest(overrides) {
  return _objectSpread2({
    address: mockEvmAddress()
  }, overrides);
}
function mockActiveWallet() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$wallet = _ref.wallet,
    wallet = _ref$wallet === void 0 ? mockWallet() : _ref$wallet;
  var activeWallet = mock();
  when(activeWallet.requireActiveWallet).mockResolvedValue(wallet);
  return activeWallet;
}

function mockChargeFollowConfig(overrides) {
  return _objectSpread2(_objectSpread2({
    amount: mockUsdcAmount(42),
    recipient: mockEvmAddress()
  }, overrides), {}, {
    type: FollowPolicyType.CHARGE
  });
}
function mockCreateProfileRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    localName: faker.internet.userName(),
    approveSignless: true,
    to: mockEvmAddress()
  }, overrides), {}, {
    kind: TransactionKind.CREATE_PROFILE
  });
}
function mockUpdateFollowPolicyRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    policy: mockChargeFollowConfig(),
    signless: true,
    sponsored: true
  }, overrides), {}, {
    kind: TransactionKind.UPDATE_FOLLOW_POLICY
  });
}
function mockSetProfileMetadataRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    signless: true,
    sponsored: true,
    metadataURI: faker.internet.url()
  }, overrides), {}, {
    kind: TransactionKind.UPDATE_PROFILE_DETAILS
  });
}
function mockUpdateProfileManagersRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    approveSignless: true,
    sponsored: true
  }, overrides), {}, {
    kind: TransactionKind.UPDATE_PROFILE_MANAGERS
  });
}
function mockFreeFollowRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    profileId: mockProfileId(),
    signless: true,
    sponsored: true
  }, overrides), {}, {
    kind: TransactionKind.FOLLOW_PROFILE
  });
}
function mockPaidFollowRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    profileId: mockProfileId(),
    fee: {
      amount: mockDaiAmount(1, ChainType.POLYGON),
      contractAddress: mockEvmAddress(),
      recipient: mockEvmAddress()
    },
    sponsored: true,
    signless: false
  }, overrides), {}, {
    kind: TransactionKind.FOLLOW_PROFILE
  });
}
function mockUnknownFollowRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    profileId: mockProfileId(),
    address: mockEvmAddress(),
    data: mockData(),
    sponsored: true,
    signless: false
  }, overrides), {}, {
    kind: TransactionKind.FOLLOW_PROFILE
  });
}
function mockUnfollowRequest() {
  return {
    profileId: mockProfileId(),
    kind: TransactionKind.UNFOLLOW_PROFILE,
    sponsored: true,
    signless: true
  };
}
function mockFullHandle() {
  var localName = faker.internet.userName();
  var namespace = faker.internet.domainWord();
  return "".concat(localName, "/").concat(namespace);
}
function mockLinkHandleRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    fullHandle: mockFullHandle(),
    profileId: mockProfileId(),
    signless: true,
    sponsored: true
  }, overrides), {}, {
    kind: TransactionKind.LINK_HANDLE
  });
}
function mockUnlinkHandleRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    fullHandle: mockFullHandle(),
    profileId: mockProfileId(),
    signless: true,
    sponsored: true
  }, overrides), {}, {
    kind: TransactionKind.UNLINK_HANDLE
  });
}
function mockClaimHandleRequest() {
  return {
    localName: faker.internet.userName(),
    kind: TransactionKind.CLAIM_HANDLE
  };
}
function mockBlockProfilesRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    signless: true,
    profileIds: [mockProfileId()],
    sponsored: true
  }, overrides), {}, {
    kind: TransactionKind.BLOCK_PROFILE
  });
}
function mockUnblockProfilesRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    signless: true,
    profileIds: [mockProfileId()],
    sponsored: true
  }, overrides), {}, {
    kind: TransactionKind.UNBLOCK_PROFILE
  });
}

function mockCreateMirrorRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    mirrorOn: mockPublicationId(),
    signless: false,
    sponsored: true
  }, overrides), {}, {
    kind: TransactionKind.MIRROR_PUBLICATION
  });
}
function mockCreatePostRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    signless: false,
    sponsored: true,
    metadata: faker.internet.url(),
    actions: [mockUnknownOpenActionConfig()],
    reference: mockAnyoneReferencePolicyConfig()
  }, overrides), {}, {
    kind: TransactionKind.CREATE_POST
  });
}
function mockCreateCommentRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    signless: false,
    sponsored: true,
    metadata: faker.internet.url(),
    actions: [mockUnknownOpenActionConfig()],
    reference: mockAnyoneReferencePolicyConfig(),
    commentOn: mockPublicationId()
  }, overrides), {}, {
    kind: TransactionKind.CREATE_COMMENT
  });
}
function mockCreateQuoteRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    signless: false,
    sponsored: true,
    metadata: faker.internet.url(),
    actions: [mockUnknownOpenActionConfig()],
    reference: mockAnyoneReferencePolicyConfig(),
    quoteOn: mockPublicationId()
  }, overrides), {}, {
    kind: TransactionKind.CREATE_QUOTE
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
    reason: PublicationReportReason.FAKE_ENGAGEMENT,
    additionalComments: faker.lorem.sentence()
  }, overrides);
}
function mockUnknownOpenActionConfig() {
  return {
    type: OpenActionType.UNKNOWN_OPEN_ACTION,
    address: mockEvmAddress(),
    data: '0x'
  };
}
function mockAnyoneReferencePolicyConfig() {
  return {
    type: ReferencePolicyType.ANYONE
  };
}
function mockCollectFee(overrides) {
  return _objectSpread2({
    amount: mockDaiAmount(1, ChainType.POLYGON),
    contractAddress: mockEvmAddress()
  }, overrides);
}
function mockLegacyCollectRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    publicationId: mockPublicationId(),
    "public": false,
    signless: true,
    sponsored: true
  }, overrides), {}, {
    type: AllOpenActionType.LEGACY_COLLECT,
    kind: TransactionKind.ACT_ON_PUBLICATION
  });
}
function mockSimpleCollectRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    publicationId: mockPublicationId(),
    "public": false,
    signless: true,
    sponsored: true
  }, overrides), {}, {
    type: AllOpenActionType.SIMPLE_COLLECT,
    kind: TransactionKind.ACT_ON_PUBLICATION
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
    type: AllOpenActionType.MULTIRECIPIENT_COLLECT,
    kind: TransactionKind.ACT_ON_PUBLICATION
  });
}
function mockUnknownActionRequest(overrides) {
  return _objectSpread2(_objectSpread2({
    publicationId: mockPublicationId(),
    address: mockEvmAddress(),
    data: '0x',
    "public": false,
    signless: true,
    sponsored: true
  }, overrides), {}, {
    type: AllOpenActionType.UNKNOWN_OPEN_ACTION,
    kind: TransactionKind.ACT_ON_PUBLICATION
  });
}

function mockIOnChainRelayer(_ref) {
  var signedCall = _ref.signedCall,
    result = _ref.result;
  var relayer = mock();
  when(relayer.relayProtocolCall).calledWith(signedCall).mockResolvedValue(result);
  return relayer;
}
function mockIMomokaRelayer(_ref2) {
  var signedCall = _ref2.signedCall,
    result = _ref2.result;
  var relayer = mock();
  when(relayer.relaySignedMomoka).calledWith(signedCall).mockResolvedValue(result);
  return relayer;
}
function mockTransactionQueue() {
  return mock();
}
function mockTransactionData(overrides) {
  return _objectSpread2({
    id: faker.datatype.uuid(),
    request: mock()
  }, overrides);
}
function mockIMetaTransactionNonceGateway() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref3$nonce = _ref3.nonce,
    nonce = _ref3$nonce === void 0 ? mockNonce() : _ref3$nonce;
  var gateway = mock();
  when(gateway.getNextMetaTransactionNonceFor).mockResolvedValue(nonce);
  return gateway;
}
function mockISignedOnChainGateway(_ref4) {
  var request = _ref4.request,
    nonce = _ref4.nonce,
    unsignedCall = _ref4.unsignedCall;
  var gateway = mock();
  when(gateway.createUnsignedProtocolCall).calledWith(request, nonce).mockResolvedValue(unsignedCall);
  return gateway;
}
function mockISignedMomokaGateway(_ref5) {
  var request = _ref5.request,
    unsignedCall = _ref5.unsignedCall;
  var gateway = mock();
  when(gateway.createUnsignedProtocolCall).calledWith(request).mockResolvedValue(unsignedCall);
  return gateway;
}
function mockIDelegatedTransactionGateway(_ref6) {
  var request = _ref6.request,
    result = _ref6.result;
  var gateway = mock();
  when(gateway.createDelegatedTransaction).calledWith(request).mockResolvedValue(result);
  return gateway;
}
function mockDelegableProtocolTransactionRequestModel(_ref7) {
  var signless = _ref7.signless;
  return {
    kind: TransactionKind.CREATE_POST,
    signless: signless
  };
}
function mockProtocolTransactionRequestModelWithOffChainFlag() {
  return {
    kind: TransactionKind.CREATE_POST,
    offChain: true
  };
}
function mockITransactionCompletionPresenter() {
  return {
    present: jest.fn().mockResolvedValue(undefined),
    waitForSuccess: function waitForSuccess() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return waitFor(function () {
                expect(_this.present).toBeCalledWith(success(expect.anything()));
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
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return waitFor(function () {
                expect(_this2.present).toBeCalledWith(failure(expect.any(TransactionError)));
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
    amount: mockDaiAmount(1, ChainType.POLYGON),
    spender: mockEvmAddress(),
    limit: TokenAllowanceLimit.EXACT
  }, override), {}, {
    kind: TransactionKind.APPROVE_MODULE
  });
}
function mockAnyBroadcastingError() {
  return new BroadcastingError(BroadcastingErrorReason.UNKNOWN);
}
function mockIPaidTransactionGateway(_ref8) {
  var request = _ref8.request,
    wallet = _ref8.wallet,
    unsignedTransaction = _ref8.unsignedTransaction;
  var gateway = mock();
  when(gateway.createUnsignedTransaction).calledWith(request, wallet).mockResolvedValue(unsignedTransaction);
  return gateway;
}

function mockIBalanceGateway(_ref) {
  var wallet = _ref.wallet,
    asset = _ref.asset,
    balance = _ref.balance;
  var gateway = mock();
  when(gateway.getBalanceFor).calledWith(wallet, asset).mockResolvedValue(balance);
  return gateway;
}
function mockITokenGateway(_ref2) {
  var owner = _ref2.owner,
    asset = _ref2.asset,
    spender = _ref2.spender,
    allowance = _ref2.allowance;
  var gateway = mock();
  when(gateway.getTransferAllowanceFor).calledWith(asset, owner, spender).mockResolvedValue(allowance);
  return gateway;
}
function mockTokenAvailabilityRequest() {
  var override = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread2({
    amount: mockDaiAmount(1),
    spender: mockEvmAddress()
  }, override);
}
function mockTokeAvailability(_ref3) {
  var _ref3$request = _ref3.request,
    request = _ref3$request === void 0 ? expect.any(Object) : _ref3$request,
    result = _ref3.result;
  var tokenAvailability = mock();
  when(tokenAvailability.checkAvailability).calledWith(request).mockResolvedValue(result);
  return tokenAvailability;
}

export { MockedDataTransaction, MockedMetaTransaction, MockedNativeTransaction, mockActiveWallet, mockAnyBroadcastingError, mockAnyTransactionRequestModel, mockAnyoneReferencePolicyConfig, mockAppId, mockBlockProfilesRequest, mockChargeFollowConfig, mockClaimHandleRequest, mockCollectFee, mockCreateCommentRequest, mockCreateMirrorRequest, mockCreatePostRequest, mockCreateProfileRequest, mockCreateQuoteRequest, mockCredentials, mockDelegableProtocolTransactionRequestModel, mockFreeFollowRequest, mockHidePublicationRequest, mockIBalanceGateway, mockIDelegatedTransactionGateway, mockIMetaTransactionNonceGateway, mockIMomokaRelayer, mockIOnChainRelayer, mockIPaidTransactionGateway, mockISignedMomokaGateway, mockISignedOnChainGateway, mockISignedProtocolCall, mockITokenGateway, mockITransactionCompletionPresenter, mockIUnsignedProtocolCall, mockJustWalletLoginRequest, mockLegacyCollectRequest, mockLinkHandleRequest, mockMultirecipientCollectRequest, mockNonce, mockPaidFollowRequest, mockProfile, mockProfileId, mockProfileLoginRequest, mockProtocolTransactionRequestModel, mockProtocolTransactionRequestModelWithOffChainFlag, mockPublicationId, mockReportPublicationRequest, mockSetProfileMetadataRequest, mockSignature, mockSimpleCollectRequest, mockTogglePropertyRequest, mockTokeAvailability, mockTokenAllowanceRequest, mockTokenAvailabilityRequest, mockTransactionData, mockTransactionError, mockTransactionHash, mockTransactionQueue, mockUnblockProfilesRequest, mockUnfollowRequest, mockUnknownActionRequest, mockUnknownFollowRequest, mockUnknownOpenActionConfig, mockUnlinkHandleRequest, mockUnsignedTransaction, mockUpdateFollowPolicyRequest, mockUpdateProfileManagersRequest, mockWallet };
