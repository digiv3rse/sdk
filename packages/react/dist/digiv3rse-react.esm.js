import React, { useRef, useEffect, useContext, useState, useCallback } from 'react';
import { Bootstrap, CredentialsExpiredError, LogoutReason, anonymousSessionData, SessionType, ActiveWallet, Logout, Login, UpgradeCredentials } from '@digiv3rse/domain/use-cases/authentication';
export { LogoutReason, SessionType } from '@digiv3rse/domain/use-cases/authentication';
import * as gql from '@digiv3rse/api-bindings';
import { updateSessionData, AuthChallengeDocument, AuthAuthenticateDocument, AuthRefreshDocument, RevokeAuthenticationDocument, SupportedFiatType, getSessionData, ProfileDocument, PublicationDocument, isPostPublication, isCommentPublication, isMirrorPublication, isQuotePublication, DiGiProfileManagerRelayErrorReasonType, RelayErrorReasonType, BroadcastOnMomokaDocument, BroadcastOnchainDocument, recentTransactionsVar, TxStatus, OwnedHandlesDocument, ProfileManagersDocument, DiGiTransactionStatusDocument, DiGiTransactionStatusType, DiGiTransactionFailureType, createAuthApolloClient, createLensApolloClient, useSessionDataVar, useProfile as useProfile$1, UnspecifiedError, WalletAuthenticationToProfileAuthenticationDocument, DismissRecommendedProfilesDocument, ProfileRecommendationsDocument, ExploreProfilesOrderByType, useExploreProfiles as useExploreProfiles$1, ExplorePublicationsOrderByType, useExplorePublications as useExplorePublications$1, useFeed as useFeed$1, useFeedHighlights as useFeedHighlights$1, useProfileRecommendations, useSearchProfiles as useSearchProfiles$1, useSearchPublications as useSearchPublications$1, useCurrencies as useCurrencies$1, chainType, useInvitedProfiles as useInvitedProfiles$1, InviteDocument, ProfileAlreadyInvitedDocument, InvitedProfilesDocument, useModuleMetadata as useModuleMetadata$1, useModuleMetadataLazyQuery, useHandleToAddressLazyQuery, useProfileAlreadyInvited, useProfileAlreadyInvitedLazyQuery, useNotifications as useNotifications$1, useWhoHaveBlocked, useProfileLazyQuery, useProfilesLazyQuery, useMutualFollowers as useMutualFollowers$1, useProfileActionHistory as useProfileActionHistory$1, useFollowers, useFollowing, useProfileManagers as useProfileManagers$1, useProfiles as useProfiles$1, ReportProfileDocument, ProfileReportingReason, ProfileReportingSpamSubreason, ProfileReportingFraudSubreason, useWhoActedOnPublication as useWhoActedOnPublication$1, usePublicationBookmarks, AddPublicationBookmarkDocument, RemovePublicationBookmarkDocument, isPrimaryPublication, HideCommentDocument, UnhideCommentDocument, HidePublicationDocument, usePublicationLazyQuery, usePublicationsLazyQuery, AddPublicationNotInterestedDocument, UndoPublicationNotInterestedDocument, usePublication as usePublication$1, usePublications as usePublications$1, AddReactionDocument, RemoveReactionDocument, PublicationReactionType, ReportPublicationDocument, PublicationReportingReason, PublicationReportingSpamSubreason, PublicationReportingSensitiveSubreason, PublicationReportingFraudSubreason, PublicationReportingIllegalSubreason, useWhoReactedPublication, useFollowRevenues, useRevenueFromPublication as useRevenueFromPublication$1, useRevenueFromPublications as useRevenueFromPublications$1, omitTypename, CommentOnMomokaDocument, CreateMomokaCommentTypedDataDocument, CommentOnchainDocument, CreateOnchainCommentTypedDataDocument, MirrorOnMomokaDocument, CreateMomokaMirrorTypedDataDocument, MirrorOnchainDocument, CreateOnchainMirrorTypedDataDocument, PostOnMomokaDocument, CreateMomokaPostTypedDataDocument, PostOnchainDocument, CreateOnchainPostTypedDataDocument, QuoteOnMomokaDocument, CreateMomokaQuoteTypedDataDocument, QuoteOnchainDocument, CreateOnchainQuoteTypedDataDocument, resolveTokenAllowanceRequest, BlockDocument, CreateBlockProfilesTypedDataDocument, ClaimProfileWithHandleDocument, resolveFollowModuleInput, GenerateDiGiApiRelayAddressDocument, FollowDocument, CreateFollowTypedDataDocument, TriStateValue, resolveFollowPolicy, LinkHandleToProfileDocument, CreateLinkHandleToProfileTypedDataDocument, isPublicationId, LegacyCollectDocument, ActOnOpenActionDocument, findCollectModuleSettings, erc20Amount, SetProfileMetadataDocument, CreateOnchainSetProfileMetadataTypedDataDocument, UnblockDocument, CreateUnblockProfilesTypedDataDocument, UnfollowDocument, CreateUnfollowTypedDataDocument, UnlinkHandleFromProfileDocument, CreateUnlinkHandleFromProfileTypedDataDocument, SetFollowModuleDocument, CreateSetFollowModuleTypedDataDocument, CreateChangeProfileManagersTypedDataDocument, ChangeProfileManagerActionType, useClaimableProfiles, useLastLoggedInProfile as useLastLoggedInProfile$1, useProfilesManagedLazyQuery, useOwnedHandles as useOwnedHandles$1, useProfilesManaged as useProfilesManaged$1 } from '@digiv3rse/api-bindings';
export { ClaimProfileWithHandleErrorReasonType, CommentRankingFilterType, ComparisonOperatorConditionType, CustomFiltersType, ExploreProfilesOrderByType, ExplorePublicationType, ExplorePublicationsOrderByType, FeedEventItemType, FollowModuleType, HiddenCommentsType, LimitType, MarketplaceMetadataAttributeDisplayType, NftContractType, NotificationType, OpenActionCategoryType, OpenActionModuleType, ProfileActionHistoryType, ProfileInterestTypes, PublicationContentWarningType, PublicationMetadataLicenseType, PublicationMetadataMainFocusType, PublicationMetadataTransactionType, PublicationReactionType, PublicationType, SearchPublicationType, SupportedFiatType, TriStateValue, UnspecifiedError, erc20Amount, fiatAmount, findCollectModuleSettings, isCollectModuleSettings, isCommentPublication, isMirrorPublication, isPostPublication, isPrimaryPublication, isQuotePublication, resolveFollowPolicy, resolveReferencePolicy } from '@digiv3rse/api-bindings';
import { TransactionKind, ProtocolTransactionKinds, MetaTransaction, NativeTransaction, DataTransaction, TransactionEvent, TransactionError, TransactionErrorReason, Wallet, UserRejectedError, PendingSigningRequestError, InsufficientGasError, WalletConnectionError, WalletConnectionErrorReason, ProfileReportReason, PublicationReportReason, UnsignedTransaction } from '@digiv3rse/domain/entities';
export { InsufficientGasError, PendingSigningRequestError, ProfileReportReason, PublicationReportReason, TransactionError, UserRejectedError, WalletConnectionError } from '@digiv3rse/domain/entities';
import { BroadcastingError, BroadcastingErrorReason, TokenAllowanceLimit, TransactionQueue, SignedOnChain, DelegableSigning, SubsidizeOffChain, PaidTransaction, TokenAllowance } from '@digiv3rse/domain/use-cases/transactions';
export { BroadcastingError, BroadcastingErrorReason, TokenAllowanceLimit } from '@digiv3rse/domain/use-cases/transactions';
import { TokenAvailability, InviteWallets } from '@digiv3rse/domain/use-cases/wallets';
export { InsufficientAllowanceError, InsufficientFundsError } from '@digiv3rse/domain/use-cases/wallets';
import { invariant, failure, success, DateUtils, never, InvariantError, assertError, ChainType, Kind, Amount, erc20, assertNever, BigDecimal, matic, Deferred, hasAtLeastOne, hasTwoOrMore, Denomination, ether } from '@digiv3rse/shared-kernel';
export { Amount, ChainType, InvariantError, erc20, ether, fiat, matic } from '@digiv3rse/shared-kernel';
import jwtDecode from 'jwt-decode';
import isObject from 'lodash/isObject';
import { CredentialsStorageSchema, Storage, BaseStorageSchema } from '@digiv3rse/storage';
import { z } from 'zod';
import { FollowPolicyType, DismissRecommendedProfiles, ReportProfile, BlockProfiles, isClaimReservedHandleRequest, ClaimHandleError as ClaimHandleError$1, ClaimHandle, CreateProfile, isPaidFollowRequest, isUnknownFollowRequest, FollowProfile, LinkHandle, SetProfileMetadata, UnblockProfiles, UnfollowProfile, UnlinkHandle, UpdateFollowPolicy, UpdateProfileManagers } from '@digiv3rse/domain/use-cases/profile';
export { FollowPolicyType } from '@digiv3rse/domain/use-cases/profile';
import { OpenActionType, ReferencePolicyType, AllOpenActionType, ToggleProperty, HidePublication, ReportPublication, CreateComment, CreateMirror, CreatePost, CreateQuote, OpenAction } from '@digiv3rse/domain/use-cases/publications';
export { OpenActionType, ReferencePolicyType } from '@digiv3rse/domain/use-cases/publications';
import { erc20 as erc20$1, isTheSameAddress, isValidHandle, bigNumber, digiHub, permissionlessCreator, digiTokenHandleRegistry, publicActProxy } from '@digiv3rse/blockchain-bindings';
export { decodeData, encodeData, isValidHandle } from '@digiv3rse/blockchain-bindings';
import { ErrorCode } from '@ethersproject/logger';
import { errorCodes } from 'eth-rpc-errors';
import { hexValue } from '@ethersproject/bytes';
import { JsonRpcProvider } from '@ethersproject/providers';
import { jsx } from 'react/jsx-runtime';
import differenceBy from 'lodash/differenceBy.js';
import merge from 'lodash/merge';
import { useLazyQuery } from '@apollo/client';
import { v4 } from 'uuid';
import { MaxUint256 } from '@ethersproject/constants';

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var BootstrapPresenter = /*#__PURE__*/function () {
  function BootstrapPresenter() {
    _classCallCheck(this, BootstrapPresenter);
  }
  _createClass(BootstrapPresenter, [{
    key: "present",
    value: function present(session) {
      updateSessionData(session);
    }
  }]);
  return BootstrapPresenter;
}();

function useBootstrapController(_ref) {
  var credentialsGateway = _ref.credentialsGateway,
    credentialsFactory = _ref.credentialsFactory,
    logout = _ref.logout,
    transactionQueue = _ref.transactionQueue;
  var isStartedRef = useRef(false);
  useEffect(function () {
    // Protects again multiple calls to start (quite likely from `useEffect` hook in concurrent mode or in development strict mode)
    if (isStartedRef.current) {
      return;
    }
    isStartedRef.current = true;
    var bootstrap = new Bootstrap(credentialsGateway, credentialsFactory, transactionQueue, logout, new BootstrapPresenter());
    void bootstrap.execute();
  }, [credentialsFactory, credentialsGateway, logout, transactionQueue]);
}

function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

var AccessTokenStorage = /*#__PURE__*/function () {
  function AccessTokenStorage(authApi, credentialsStorage) {
    _classCallCheck(this, AccessTokenStorage);
    _defineProperty(this, "isRefreshing", false);
    _defineProperty(this, "expiryListeners", new Set());
    _defineProperty(this, "refreshListeners", new Set());
    this.authApi = authApi;
    this.credentialsStorage = credentialsStorage;
  }
  _createClass(AccessTokenStorage, [{
    key: "onExpiry",
    value: function onExpiry(callback) {
      var _this = this;
      this.expiryListeners.add(callback);
      return function () {
        return _this.expiryListeners["delete"](callback);
      };
    }
  }, {
    key: "onRefresh",
    value: function onRefresh(callback) {
      var _this2 = this;
      this.refreshListeners.add(callback);
      return function () {
        return _this2.refreshListeners["delete"](callback);
      };
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return this.credentialsStorage.getAccessToken();
    }
  }, {
    key: "refreshToken",
    value: function () {
      var _refreshToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              invariant(this.isRefreshing === false, 'Cannot refresh token while refreshing');
              this.isRefreshing = true;
              _context.next = 4;
              return this.refreshCredentials();
            case 4:
              result = _context.sent;
              this.isRefreshing = false;
              if (result.isSuccess()) {
                this.emitRefreshEvent();
              } else {
                this.emitExpiryEvent();
              }
              return _context.abrupt("return", result);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function refreshToken() {
        return _refreshToken.apply(this, arguments);
      }
      return refreshToken;
    }()
  }, {
    key: "refreshCredentials",
    value: function () {
      var _refreshCredentials = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var credentials, newCredentials;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.credentialsStorage.get();
            case 2:
              credentials = _context2.sent;
              if (!(!credentials || !credentials.canRefresh())) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return", failure(new CredentialsExpiredError()));
            case 5:
              _context2.prev = 5;
              _context2.next = 8;
              return this.authApi.refreshCredentials(credentials.refreshToken);
            case 8:
              newCredentials = _context2.sent;
              _context2.next = 11;
              return this.credentialsStorage.set(newCredentials);
            case 11:
              return _context2.abrupt("return", success());
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](5);
              return _context2.abrupt("return", failure(new CredentialsExpiredError()));
            case 17:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[5, 14]]);
      }));
      function refreshCredentials() {
        return _refreshCredentials.apply(this, arguments);
      }
      return refreshCredentials;
    }()
  }, {
    key: "emitExpiryEvent",
    value: function emitExpiryEvent() {
      this.expiryListeners.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: "emitRefreshEvent",
    value: function emitRefreshEvent() {
      this.refreshListeners.forEach(function (callback) {
        return callback();
      });
    }
  }]);
  return AccessTokenStorage;
}();

function isWalletJwtContent(decodedJwt) {
  return isObject(decodedJwt) && 'role' in decodedJwt && decodedJwt.role === 'wallet_refresh';
}
function isProfileJwtContent(decodedJwt) {
  return isObject(decodedJwt) && 'role' in decodedJwt && decodedJwt.role === 'profile_refresh';
}

// Threshold in seconds that will mark token as expired even it's still valid
// Adds some time for all communications that's required to refresh tokens
var TOKEN_EXP_THRESHOLD = DateUtils.secondsToMs(3);
var JwtCredentials = /*#__PURE__*/function () {
  function JwtCredentials(accessToken, refreshToken) {
    _classCallCheck(this, JwtCredentials);
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    var decodedRefreshToken = jwtDecode(refreshToken);
    if (isWalletJwtContent(decodedRefreshToken)) {
      this.address = decodedRefreshToken.id;
      this.authorizationId = decodedRefreshToken.authorizationId;
      return;
    }
    if (isProfileJwtContent(decodedRefreshToken)) {
      this.address = decodedRefreshToken.evmAddress;
      this.profileId = decodedRefreshToken.id;
      this.authorizationId = decodedRefreshToken.authorizationId;
      return;
    }
    never('Invalid JWT format');
  }
  _createClass(JwtCredentials, [{
    key: "canRefresh",
    value: function canRefresh() {
      var now = Date.now();
      var tokenExpDate = this.getTokenExpDate(this.refreshToken);
      return now < tokenExpDate - TOKEN_EXP_THRESHOLD;
    }
  }, {
    key: "getTokenExpDate",
    value: function getTokenExpDate(token) {
      var decodedToken = jwtDecode(token);
      invariant(decodedToken.exp, 'Exp date should be provided by JWT token');
      return DateUtils.secondsToMs(decodedToken.exp);
    }
  }]);
  return JwtCredentials;
}();

var AuthApi = /*#__PURE__*/function () {
  function AuthApi(apolloClient) {
    _classCallCheck(this, AuthApi);
    this.apolloClient = apolloClient;
  }
  _createClass(AuthApi, [{
    key: "generateChallenge",
    value: function () {
      var _generateChallenge = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.apolloClient.query({
                query: AuthChallengeDocument,
                variables: {
                  request: request
                },
                // challenge to sign should be always a new one
                fetchPolicy: 'network-only'
              });
            case 2:
              result = _context.sent;
              return _context.abrupt("return", {
                id: result.data.result.id,
                text: result.data.result.text
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function generateChallenge(_x) {
        return _generateChallenge.apply(this, arguments);
      }
      return generateChallenge;
    }()
  }, {
    key: "generateCredentials",
    value: function () {
      var _generateCredentials = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        var result, _result$data$result, accessToken, refreshToken;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.apolloClient.mutate({
                mutation: AuthAuthenticateDocument,
                variables: {
                  request: request
                }
              });
            case 2:
              result = _context2.sent;
              _result$data$result = result.data.result, accessToken = _result$data$result.accessToken, refreshToken = _result$data$result.refreshToken;
              return _context2.abrupt("return", new JwtCredentials(accessToken, refreshToken));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function generateCredentials(_x2) {
        return _generateCredentials.apply(this, arguments);
      }
      return generateCredentials;
    }()
  }, {
    key: "refreshCredentials",
    value: function () {
      var _refreshCredentials = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(refreshToken) {
        var result, _result$data$result2, newAccessToken, newRefreshToken;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.apolloClient.mutate({
                mutation: AuthRefreshDocument,
                variables: {
                  request: {
                    refreshToken: refreshToken
                  }
                }
              });
            case 2:
              result = _context3.sent;
              _result$data$result2 = result.data.result, newAccessToken = _result$data$result2.accessToken, newRefreshToken = _result$data$result2.refreshToken;
              return _context3.abrupt("return", new JwtCredentials(newAccessToken, newRefreshToken));
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function refreshCredentials(_x3) {
        return _refreshCredentials.apply(this, arguments);
      }
      return refreshCredentials;
    }()
  }]);
  return AuthApi;
}();

var CredentialsExpiryController = /*#__PURE__*/function () {
  function CredentialsExpiryController(logout) {
    _classCallCheck(this, CredentialsExpiryController);
    this.logout = logout;
  }
  _createClass(CredentialsExpiryController, [{
    key: "subscribe",
    value: function subscribe(tokenExpiryEmitter) {
      var _this = this;
      tokenExpiryEmitter.onExpiry(function () {
        void _this.onTokenExpired();
      });
    }
  }, {
    key: "onTokenExpired",
    value: function () {
      var _onTokenExpired = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.logout.execute(LogoutReason.CREDENTIALS_EXPIRED);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function onTokenExpired() {
        return _onTokenExpired.apply(this, arguments);
      }
      return onTokenExpired;
    }()
  }]);
  return CredentialsExpiryController;
}();

var CredentialsFactory = /*#__PURE__*/function () {
  function CredentialsFactory(auth) {
    _classCallCheck(this, CredentialsFactory);
    this.auth = auth;
  }
  _createClass(CredentialsFactory, [{
    key: "renewCredentials",
    value: function () {
      var _renewCredentials = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(credentials) {
        var newCredentials;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (credentials.canRefresh()) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", failure(new CredentialsExpiredError()));
            case 2:
              _context.prev = 2;
              _context.next = 5;
              return this.auth.refreshCredentials(credentials.refreshToken);
            case 5:
              newCredentials = _context.sent;
              return _context.abrupt("return", success(newCredentials));
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              return _context.abrupt("return", failure(new CredentialsExpiredError()));
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[2, 9]]);
      }));
      function renewCredentials(_x) {
        return _renewCredentials.apply(this, arguments);
      }
      return renewCredentials;
    }()
  }, {
    key: "issueCredentials",
    value: function () {
      var _issueCredentials = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(signer, using) {
        var challenge, result, credentials;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.auth.generateChallenge({
                "for": using,
                signedBy: signer.address
              });
            case 2:
              challenge = _context2.sent;
              _context2.next = 5;
              return signer.signMessage(challenge.text);
            case 5:
              result = _context2.sent;
              if (!result.isFailure()) {
                _context2.next = 8;
                break;
              }
              return _context2.abrupt("return", result);
            case 8:
              _context2.next = 10;
              return this.auth.generateCredentials({
                id: challenge.id,
                signature: result.value
              });
            case 10:
              credentials = _context2.sent;
              return _context2.abrupt("return", success(credentials));
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function issueCredentials(_x2, _x3) {
        return _issueCredentials.apply(this, arguments);
      }
      return issueCredentials;
    }()
  }]);
  return CredentialsFactory;
}();

var CredentialsGateway = /*#__PURE__*/function () {
  function CredentialsGateway(credentialsStorage, apolloClient) {
    _classCallCheck(this, CredentialsGateway);
    this.credentialsStorage = credentialsStorage;
    this.apolloClient = apolloClient;
  }
  _createClass(CredentialsGateway, [{
    key: "getCredentials",
    value: function () {
      var _getCredentials = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.credentialsStorage.get());
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getCredentials() {
        return _getCredentials.apply(this, arguments);
      }
      return getCredentials;
    }()
  }, {
    key: "save",
    value: function () {
      var _save = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(credentials) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.credentialsStorage.set(credentials);
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function save(_x) {
        return _save.apply(this, arguments);
      }
      return save;
    }()
  }, {
    key: "invalidate",
    value: function () {
      var _invalidate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(reason) {
        var credentials;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.getCredentials();
            case 2:
              credentials = _context3.sent;
              if (!credentials) {
                never('User is not authenticated');
              }
              if (!(reason === LogoutReason.USER_INITIATED)) {
                _context3.next = 7;
                break;
              }
              _context3.next = 7;
              return this.revoke({
                authorizationId: credentials.authorizationId
              });
            case 7:
              _context3.next = 9;
              return this.credentialsStorage.reset();
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function invalidate(_x2) {
        return _invalidate.apply(this, arguments);
      }
      return invalidate;
    }()
  }, {
    key: "revoke",
    value: function () {
      var _revoke = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.apolloClient.mutate({
                mutation: RevokeAuthenticationDocument,
                variables: {
                  request: request
                }
              });
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function revoke(_x3) {
        return _revoke.apply(this, arguments);
      }
      return revoke;
    }()
  }]);
  return CredentialsGateway;
}();

/**
 * Stores auth credentials.
 * Access token is kept in memory.
 * Refresh token is persisted permanently.
 */
var CredentialsStorage = /*#__PURE__*/function () {
  function CredentialsStorage(storageProvider, namespace) {
    _classCallCheck(this, CredentialsStorage);
    _defineProperty(this, "accessToken", null);
    var authStorageSchema = new CredentialsStorageSchema("digi.".concat(namespace, ".credentials"));
    this.refreshTokenStorage = Storage.createForSchema(authStorageSchema, storageProvider);
  }
  _createClass(CredentialsStorage, [{
    key: "set",
    value: function () {
      var _set = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var accessToken, refreshToken;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              accessToken = _ref.accessToken, refreshToken = _ref.refreshToken;
              this.accessToken = accessToken;
              _context.next = 4;
              return this.refreshTokenStorage.set({
                refreshToken: refreshToken
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function set(_x) {
        return _set.apply(this, arguments);
      }
      return set;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var refreshToken, accessToken;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.getRefreshToken();
            case 2:
              refreshToken = _context2.sent;
              if (refreshToken) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return", null);
            case 5:
              accessToken = this.getAccessToken();
              return _context2.abrupt("return", new JwtCredentials(accessToken, refreshToken));
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function get() {
        return _get.apply(this, arguments);
      }
      return get;
    }()
  }, {
    key: "reset",
    value: function () {
      var _reset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              this.accessToken = null;
              _context3.next = 3;
              return this.refreshTokenStorage.reset();
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function reset() {
        return _reset.apply(this, arguments);
      }
      return reset;
    }()
  }, {
    key: "subscribe",
    value: function subscribe(_) {
      throw new Error('Method not implemented.');
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return this.accessToken;
    }
  }, {
    key: "getRefreshToken",
    value: function () {
      var _getRefreshToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _result$refreshToken;
        var result;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.refreshTokenStorage.get();
            case 2:
              result = _context4.sent;
              return _context4.abrupt("return", (_result$refreshToken = result === null || result === void 0 ? void 0 : result.refreshToken) !== null && _result$refreshToken !== void 0 ? _result$refreshToken : null);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function getRefreshToken() {
        return _getRefreshToken.apply(this, arguments);
      }
      return getRefreshToken;
    }()
  }]);
  return CredentialsStorage;
}();

var LogoutPresenter = /*#__PURE__*/function () {
  function LogoutPresenter() {
    _classCallCheck(this, LogoutPresenter);
  }
  _createClass(LogoutPresenter, [{
    key: "logout",
    value: function logout(reason) {
      updateSessionData(anonymousSessionData(reason));
    }
  }]);
  return LogoutPresenter;
}();

/* eslint-disable no-console */

var ConsoleLoggerLevel = /*#__PURE__*/function (ConsoleLoggerLevel) {
  ConsoleLoggerLevel[ConsoleLoggerLevel["Info"] = 1] = "Info";
  ConsoleLoggerLevel[ConsoleLoggerLevel["Warn"] = 2] = "Warn";
  ConsoleLoggerLevel[ConsoleLoggerLevel["Error"] = 3] = "Error";
  ConsoleLoggerLevel[ConsoleLoggerLevel["Fatal"] = 4] = "Fatal";
  return ConsoleLoggerLevel;
}({});
var ConsoleLogger = /*#__PURE__*/function () {
  function ConsoleLogger() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      level = _ref.level;
    _classCallCheck(this, ConsoleLogger);
    this.level = level !== null && level !== void 0 ? level : ConsoleLoggerLevel.Warn;
  }
  _createClass(ConsoleLogger, [{
    key: "info",
    value: function info(message, data) {
      if (this.level > ConsoleLoggerLevel.Info) return;
      console.info(message, data);
    }
  }, {
    key: "warn",
    value: function warn(message, data) {
      if (this.level > ConsoleLoggerLevel.Warn) return;
      console.error(message, data);
    }
  }, {
    key: "error",
    value: function error(_error, message, data) {
      if (this.level > ConsoleLoggerLevel.Error) return;
      console.error(message, _error, data);
    }
  }, {
    key: "fatal",
    value: function fatal(error, message, data) {
      if (this.level > ConsoleLoggerLevel.Fatal) return;
      console.error(message, error, data);
    }
  }]);
  return ConsoleLogger;
}();

/**
 * The interface used to access the `Signer` and `Provider` instances.
 */

/**
 * `<BaseProvider>` configuration
 *
 * @internal
 */

/**
 * Internal configuration
 *
 * @internal
 */

function buildImageTransform(width) {
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
  return {
    width: width,
    height: height,
    keepAspectRatio: true
  };
}
var defaultQueryParams = {
  image: {
    small: buildImageTransform('400px'),
    medium: buildImageTransform('700px')
  },
  profile: {
    thumbnail: buildImageTransform('256px'),
    cover: buildImageTransform('1100px')
  },
  fxRateFor: SupportedFiatType.Usd,
  statsFor: []
};
function resolveFragmentVariables(params) {
  var _params$fxRateFor, _params$image$medium, _params$image, _params$image$small, _params$image2, _params$profile$cover, _params$profile, _params$profile$metad, _params$profile2, _params$profile$thumb, _params$profile3, _params$statsFor;
  return {
    fxRateFor: (_params$fxRateFor = params.fxRateFor) !== null && _params$fxRateFor !== void 0 ? _params$fxRateFor : defaultQueryParams.fxRateFor,
    imageMediumSize: (_params$image$medium = (_params$image = params.image) === null || _params$image === void 0 ? void 0 : _params$image.medium) !== null && _params$image$medium !== void 0 ? _params$image$medium : defaultQueryParams.image.medium,
    imageSmallSize: (_params$image$small = (_params$image2 = params.image) === null || _params$image2 === void 0 ? void 0 : _params$image2.small) !== null && _params$image$small !== void 0 ? _params$image$small : defaultQueryParams.image.small,
    profileCoverSize: (_params$profile$cover = (_params$profile = params.profile) === null || _params$profile === void 0 ? void 0 : _params$profile.cover) !== null && _params$profile$cover !== void 0 ? _params$profile$cover : defaultQueryParams.profile.cover,
    profileMetadataSource: (_params$profile$metad = (_params$profile2 = params.profile) === null || _params$profile2 === void 0 ? void 0 : _params$profile2.metadataSource) !== null && _params$profile$metad !== void 0 ? _params$profile$metad : null,
    profilePictureSize: (_params$profile$thumb = (_params$profile3 = params.profile) === null || _params$profile3 === void 0 ? void 0 : _params$profile3.thumbnail) !== null && _params$profile$thumb !== void 0 ? _params$profile$thumb : defaultQueryParams.profile.thumbnail,
    statsFor: (_params$statsFor = params.statsFor) !== null && _params$statsFor !== void 0 ? _params$statsFor : defaultQueryParams.statsFor
  };
}

/**
 * @internal
 */
function resolveConfig(config) {
  var _config$debug, _config$logger, _config$sponsored, _config$params;
  return {
    debug: (_config$debug = config.debug) !== null && _config$debug !== void 0 ? _config$debug : false,
    logger: (_config$logger = config.logger) !== null && _config$logger !== void 0 ? _config$logger : new ConsoleLogger(),
    storage: config.storage,
    environment: config.environment,
    bindings: config.bindings,
    origin: config.origin,
    sponsored: (_config$sponsored = config.sponsored) !== null && _config$sponsored !== void 0 ? _config$sponsored : true,
    fragmentVariables: resolveFragmentVariables((_config$params = config.params) !== null && _config$params !== void 0 ? _config$params : defaultQueryParams)
  };
}

var DisableConversationsGateway = /*#__PURE__*/function () {
  function DisableConversationsGateway(storage) {
    _classCallCheck(this, DisableConversationsGateway);
    this.storage = storage;
  }
  _createClass(DisableConversationsGateway, [{
    key: "reset",
    value: function () {
      var _reset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.storage.reset());
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function reset() {
        return _reset.apply(this, arguments);
      }
      return reset;
    }()
  }]);
  return DisableConversationsGateway;
}();

var KeyBundleData = z.string();
function createInboxKeyStorage(storageProvider, namespace) {
  var notificationStorageDataSchema = new BaseStorageSchema("digi.".concat(namespace, ".inbox.keyBundle"), KeyBundleData);
  return Storage.createForSchema(notificationStorageDataSchema, storageProvider);
}

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

var ProfileCacheManager = /*#__PURE__*/function () {
  function ProfileCacheManager(client, variables) {
    _classCallCheck(this, ProfileCacheManager);
    this.client = client;
    this.variables = variables;
  }
  _createClass(ProfileCacheManager, [{
    key: "fetchProfileById",
    value: function () {
      var _fetchProfileById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.fetch({
                forProfileId: id
              }));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function fetchProfileById(_x) {
        return _fetchProfileById.apply(this, arguments);
      }
      return fetchProfileById;
    }()
  }, {
    key: "fetchProfileByHandle",
    value: function () {
      var _fetchProfileByHandle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(fullHandle) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.fetch({
                forHandle: fullHandle
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function fetchProfileByHandle(_x2) {
        return _fetchProfileByHandle.apply(this, arguments);
      }
      return fetchProfileByHandle;
    }()
  }, {
    key: "refreshCurrentProfile",
    value: function () {
      var _refreshCurrentProfile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var session;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              session = getSessionData();
              if (session) {
                _context3.next = 3;
                break;
              }
              return _context3.abrupt("return");
            case 3:
              invariant(session.type === SessionType.WithProfile, "It's not possible to refresh a profile without a profile session");
              _context3.next = 6;
              return this.client.refetchQueries({
                updateCache: function updateCache(cache) {
                  cache.evict({
                    id: cache.identify({
                      __typename: 'Profile',
                      id: session.profileId
                    })
                  });
                }
              });
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function refreshCurrentProfile() {
        return _refreshCurrentProfile.apply(this, arguments);
      }
      return refreshCurrentProfile;
    }()
  }, {
    key: "fetch",
    value: function () {
      var _fetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var _yield$this$client$qu, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.client.query({
                query: ProfileDocument,
                variables: _objectSpread2({
                  request: request
                }, this.variables),
                fetchPolicy: 'network-only'
              });
            case 2:
              _yield$this$client$qu = _context4.sent;
              data = _yield$this$client$qu.data;
              return _context4.abrupt("return", data.result);
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function fetch(_x3) {
        return _fetch.apply(this, arguments);
      }
      return fetch;
    }()
  }]);
  return ProfileCacheManager;
}();

var PublicationCacheManager = /*#__PURE__*/function () {
  function PublicationCacheManager(client, variables) {
    _classCallCheck(this, PublicationCacheManager);
    this.client = client;
    this.variables = variables;
  }
  _createClass(PublicationCacheManager, [{
    key: "fetchNewPost",
    value: function () {
      var _fetchNewPost = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(tx) {
        var publication;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.fetchNewPublication(tx);
            case 2:
              publication = _context.sent;
              invariant(isPostPublication(publication), "Unexpected publication type");
              return _context.abrupt("return", publication);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function fetchNewPost(_x) {
        return _fetchNewPost.apply(this, arguments);
      }
      return fetchNewPost;
    }()
  }, {
    key: "fetchNewComment",
    value: function () {
      var _fetchNewComment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(tx) {
        var publication;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.fetchNewPublication(tx);
            case 2:
              publication = _context2.sent;
              invariant(isCommentPublication(publication), "Unexpected publication type");
              return _context2.abrupt("return", publication);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function fetchNewComment(_x2) {
        return _fetchNewComment.apply(this, arguments);
      }
      return fetchNewComment;
    }()
  }, {
    key: "fetchNewMirror",
    value: function () {
      var _fetchNewMirror = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(tx) {
        var publication;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.fetchNewPublication(tx);
            case 2:
              publication = _context3.sent;
              invariant(isMirrorPublication(publication), "Unexpected publication type");
              return _context3.abrupt("return", publication);
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function fetchNewMirror(_x3) {
        return _fetchNewMirror.apply(this, arguments);
      }
      return fetchNewMirror;
    }()
  }, {
    key: "fetchNewQuote",
    value: function () {
      var _fetchNewQuote = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(tx) {
        var publication;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.fetchNewPublication(tx);
            case 2:
              publication = _context4.sent;
              invariant(isQuotePublication(publication), "Unexpected publication type");
              return _context4.abrupt("return", publication);
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function fetchNewQuote(_x4) {
        return _fetchNewQuote.apply(this, arguments);
      }
      return fetchNewQuote;
    }()
  }, {
    key: "refresh",
    value: function () {
      var _refresh = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(publicationId) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.request({
                forId: publicationId
              }, 'network-only');
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function refresh(_x5) {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }()
  }, {
    key: "update",
    value: function update(publicationId, updateFn) {
      this.client.cache.updateQuery({
        query: PublicationDocument,
        variables: _objectSpread2({
          request: {
            forId: publicationId
          }
        }, this.variables)
      }, function (data) {
        if (data !== null && data !== void 0 && data.result) {
          return _objectSpread2(_objectSpread2({}, data), {}, {
            result: updateFn(data.result)
          });
        }
        return data;
      });
    }
  }, {
    key: "fetchNewPublication",
    value: function () {
      var _fetchNewPublication = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_ref) {
        var _request$forId;
        var id, txHash, request, publication;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              id = _ref.id, txHash = _ref.txHash;
              request = txHash ? {
                forTxHash: txHash
              } : {
                forId: id
              };
              _context6.next = 4;
              return this.request(request, 'network-only');
            case 4:
              publication = _context6.sent;
              invariant(publication, "Publication for ".concat((_request$forId = request.forId) !== null && _request$forId !== void 0 ? _request$forId : request.forTxHash, " not found"));
              return _context6.abrupt("return", publication);
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function fetchNewPublication(_x6) {
        return _fetchNewPublication.apply(this, arguments);
      }
      return fetchNewPublication;
    }()
  }, {
    key: "request",
    value: function () {
      var _request2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(_request, fetchPolicy) {
        var _yield$this$client$qu, data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.client.query({
                query: PublicationDocument,
                variables: _objectSpread2({
                  request: _request
                }, this.variables),
                fetchPolicy: fetchPolicy
              });
            case 2:
              _yield$this$client$qu = _context7.sent;
              data = _yield$this$client$qu.data;
              return _context7.abrupt("return", data.result);
            case 5:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function request(_x7, _x8) {
        return _request2.apply(this, arguments);
      }
      return request;
    }()
  }]);
  return PublicationCacheManager;
}();

function handleRelayError(error, _) {
  switch (error.reason) {
    case RelayErrorReasonType.AppNotAllowed:
    case DiGiProfileManagerRelayErrorReasonType.AppNotAllowed:
      return failure(new BroadcastingError(BroadcastingErrorReason.APP_NOT_ALLOWED, {
        details: 'See https://docs.digiv3rse.xyz/docs/gasless-and-signless#whitelisting-your-app'
      }));
    case RelayErrorReasonType.RateLimited:
    case DiGiProfileManagerRelayErrorReasonType.RateLimited:
      return failure(new BroadcastingError(BroadcastingErrorReason.RATE_LIMITED));
    case RelayErrorReasonType.NotSponsored:
    case DiGiProfileManagerRelayErrorReasonType.NotSponsored:
      return failure(new BroadcastingError(BroadcastingErrorReason.NOT_SPONSORED));
    case RelayErrorReasonType.Failed:
    case DiGiProfileManagerRelayErrorReasonType.Failed:
      return failure(new BroadcastingError(BroadcastingErrorReason.UNKNOWN));
    case DiGiProfileManagerRelayErrorReasonType.NoDiGiManagerEnabled:
      return failure(new BroadcastingError(BroadcastingErrorReason.NO_DIGI_MANAGER_ENABLED));
    case DiGiProfileManagerRelayErrorReasonType.RequiresSignature:
      return failure(new BroadcastingError(BroadcastingErrorReason.REQUIRES_SIGNATURE));
    default:
      throw new InvariantError("Unexpected relay error reason: ".concat(error.reason));
  }
}

var MomokaRelayer = /*#__PURE__*/function () {
  function MomokaRelayer(apolloClient, factory, logger) {
    _classCallCheck(this, MomokaRelayer);
    this.apolloClient = apolloClient;
    this.factory = factory;
    this.logger = logger;
  }
  _createClass(MomokaRelayer, [{
    key: "relaySignedMomoka",
    value: function () {
      var _relaySignedMomoka = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(signedCall) {
        var result, receipt, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(signedCall);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              receipt = result.value;
              transaction = this.factory.createDataTransaction({
                id: receipt.id,
                request: signedCall.request
              });
              return _context.abrupt("return", success(transaction));
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function relaySignedMomoka(_x) {
        return _relaySignedMomoka.apply(this, arguments);
      }
      return relaySignedMomoka;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(signedCall) {
        var _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return this.apolloClient.mutate({
                mutation: BroadcastOnMomokaDocument,
                variables: {
                  request: {
                    id: signedCall.id,
                    signature: signedCall.signature
                  }
                }
              });
            case 3:
              _yield$this$apolloCli = _context2.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'RelayError')) {
                _context2.next = 7;
                break;
              }
              return _context2.abrupt("return", handleRelayError(data.result));
            case 7:
              return _context2.abrupt("return", success(data.result));
            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              assertError(_context2.t0);
              this.logger.error(_context2.t0, "It was not possible to relay the transaction for ".concat(signedCall.id));
              return _context2.abrupt("return", failure(new BroadcastingError(BroadcastingErrorReason.UNKNOWN, {
                cause: _context2.t0
              })));
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 10]]);
      }));
      function relayWithProfileManager(_x2) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }]);
  return MomokaRelayer;
}();

var OnChainRelayer = /*#__PURE__*/function () {
  function OnChainRelayer(apolloClient, factory, logger) {
    _classCallCheck(this, OnChainRelayer);
    this.apolloClient = apolloClient;
    this.factory = factory;
    this.logger = logger;
  }
  _createClass(OnChainRelayer, [{
    key: "relayProtocolCall",
    value: function () {
      var _relayProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(signedCall) {
        var result, receipt, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(signedCall);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              receipt = result.value;
              transaction = this.factory.createMetaTransaction({
                chainType: ChainType.POLYGON,
                id: signedCall.id,
                request: signedCall.request,
                nonce: signedCall.nonce,
                relayerTxId: receipt.txId,
                txHash: receipt.txHash
              });
              return _context.abrupt("return", success(transaction));
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function relayProtocolCall(_x) {
        return _relayProtocolCall.apply(this, arguments);
      }
      return relayProtocolCall;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(signedCall) {
        var _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return this.apolloClient.mutate({
                mutation: BroadcastOnchainDocument,
                variables: {
                  request: {
                    id: signedCall.id,
                    signature: signedCall.signature
                  }
                }
              });
            case 3:
              _yield$this$apolloCli = _context2.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'RelayError')) {
                _context2.next = 7;
                break;
              }
              return _context2.abrupt("return", handleRelayError(data.result));
            case 7:
              return _context2.abrupt("return", success(data.result));
            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              assertError(_context2.t0);
              this.logger.error(_context2.t0, "It was not possible to relay the transaction for ".concat(signedCall.id));
              return _context2.abrupt("return", failure(new BroadcastingError(BroadcastingErrorReason.UNKNOWN, {
                cause: _context2.t0
              })));
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 10]]);
      }));
      function relayWithProfileManager(_x2) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }]);
  return OnChainRelayer;
}();

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

/**
 * Ensures that the given value is a valid AppId
 *
 * @group Helpers
 */
function appId(value) {
  // for now just asserts the type, in future it will enforce a format
  return value;
}

/**
 * Ensures that the given value is a valid ProfileId
 *
 * @group Helpers
 */
function profileId(id) {
  // for now just asserts the type, in future it will enforce a format
  return id;
}

/**
 * Ensures that the given value is a valid PublicationId
 *
 * @group Helpers
 */
function publicationId(id) {
  // for now just asserts the type, in future it will enforce a format
  return id;
}

/**
 * Ensures that the given value is a DataHexString
 *
 * @group Helpers
 */
function data(value) {
  // for now just asserts the type, in future it will enforce a format
  return value;
}

/**
 * Ensures that the given value is a valid URL
 *
 * @group Helpers
 */
function url(value) {
  // for now just asserts the type, in future it will enforce a format
  return value;
}

/**
 * Ensures that the given value is a valid URI
 *
 * @group Helpers
 */
function uri(value) {
  // for now just asserts the type, in future it will enforce a format
  return value;
}

var UriSchema = z.string().min(6).url().transform(uri);
var EvmAddressSchema = z.string().min(42).transform(function (value) {
  return value;
});
var DataSchema = z.string().transform(data);
var ProfileIdSchema = z.string().transform(profileId);
var PublicationIdSchema = z.string().transform(publicationId);
var SerializedErc20Schema = z.object({
  kind: z.literal(Kind.ERC20),
  name: z.string(),
  decimals: z.number(),
  symbol: z.string(),
  address: z.string(),
  chainType: z.nativeEnum(ChainType)
});
var SerializedErc20AmountSchema = z.object({
  asset: SerializedErc20Schema,
  value: z.string()
});
// Checky workaround to private constructor
var AmountCtor = Amount.ether(0).constructor;
var Erc20AmountSchema = z.union([SerializedErc20AmountSchema, z["instanceof"](AmountCtor)]).superRefine(function (val, ctx) {
  if (val instanceof AmountCtor) {
    return z.NEVER;
  }
  var result = SerializedErc20AmountSchema.safeParse(val);
  if (!result.success) {
    result.error.issues.forEach(function (issue) {
      return ctx.addIssue(issue);
    });
  }
  return z.NEVER;
}).transform(function (value) {
  return value instanceof AmountCtor ? value : Amount.erc20(erc20(value.asset), value.value);
});

var TokenAllowanceRequestSchema = z.object({
  amount: Erc20AmountSchema,
  spender: z.string(),
  limit: z.nativeEnum(TokenAllowanceLimit),
  kind: z.literal(TransactionKind.APPROVE_MODULE)
});

var CreateProfileRequestSchema = z.object({
  kind: z.literal(TransactionKind.CREATE_PROFILE),
  localName: z.string(),
  approveSignless: z["boolean"](),
  to: EvmAddressSchema
});
var FollowRequestFeeSchema = z.object({
  amount: Erc20AmountSchema,
  contractAddress: z.string(),
  recipient: z.string()
});
var FreeFollowRequestSchema = z.object({
  profileId: ProfileIdSchema,
  kind: z.literal(TransactionKind.FOLLOW_PROFILE),
  signless: z["boolean"](),
  sponsored: z["boolean"]()
});
var PaidFollowRequestSchema = z.object({
  profileId: ProfileIdSchema,
  kind: z.literal(TransactionKind.FOLLOW_PROFILE),
  fee: FollowRequestFeeSchema,
  signless: z.literal(false),
  sponsored: z["boolean"]()
});
var UnknownFollowRequestSchema = z.object({
  profileId: ProfileIdSchema,
  kind: z.literal(TransactionKind.FOLLOW_PROFILE),
  address: EvmAddressSchema,
  data: DataSchema,
  signless: z["boolean"](),
  sponsored: z["boolean"]()
});
var FollowRequestSchema = z.union([PaidFollowRequestSchema, FreeFollowRequestSchema, UnknownFollowRequestSchema]);
var UnfollowRequestSchema = z.object({
  profileId: ProfileIdSchema,
  kind: z.literal(TransactionKind.UNFOLLOW_PROFILE),
  signless: z["boolean"](),
  sponsored: z["boolean"]()
});
var UpdateProfileManagersRequestSchema = z.object({
  approveSignless: z["boolean"]().optional(),
  add: EvmAddressSchema.array().min(1).optional(),
  remove: EvmAddressSchema.array().min(1).optional(),
  kind: z.literal(TransactionKind.UPDATE_PROFILE_MANAGERS),
  sponsored: z["boolean"]()
}).superRefine(function (val, ctx) {
  if (['add', 'remove', 'approveSignless'].every(function (key) {
    return !(key in val);
  })) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "At least one of 'add', 'remove', or 'approveSignless' must be present."
    });
    return z.NEVER;
  }
  // TODO add further checks needed

  return z.NEVER;
});
var ChargeFollowPolicyConfigSchema = z.object({
  type: z.literal(FollowPolicyType.CHARGE),
  amount: Erc20AmountSchema,
  recipient: z.string()
});
var AnyoneFollowPolicyConfigSchema = z.object({
  type: z.literal(FollowPolicyType.ANYONE)
});
var NoOneFollowPolicyConfigSchema = z.object({
  type: z.literal(FollowPolicyType.NO_ONE)
});
var UnknownFollowPolicyConfigSchema = z.object({
  type: z.literal(FollowPolicyType.UNKNOWN),
  address: EvmAddressSchema,
  data: DataSchema
});
var FollowPolicyConfigSchema = z.discriminatedUnion('type', [ChargeFollowPolicyConfigSchema, AnyoneFollowPolicyConfigSchema, NoOneFollowPolicyConfigSchema, UnknownFollowPolicyConfigSchema]);
var UpdateFollowPolicyRequestSchema = z.object({
  policy: FollowPolicyConfigSchema,
  kind: z.literal(TransactionKind.UPDATE_FOLLOW_POLICY),
  signless: z["boolean"](),
  sponsored: z["boolean"]()
});
var SetProfileMetadataRequestSchema = z.object({
  metadataURI: UriSchema,
  kind: z.literal(TransactionKind.UPDATE_PROFILE_DETAILS),
  signless: z["boolean"](),
  sponsored: z["boolean"]()
});
var LinkHandleRequestSchema = z.object({
  fullHandle: z.string(),
  profileId: ProfileIdSchema,
  kind: z.literal(TransactionKind.LINK_HANDLE),
  signless: z["boolean"](),
  sponsored: z["boolean"]()
});
var UnlinkHandleRequestSchema = z.object({
  fullHandle: z.string(),
  profileId: ProfileIdSchema,
  kind: z.literal(TransactionKind.UNLINK_HANDLE),
  signless: z["boolean"](),
  sponsored: z["boolean"]()
});
var UnblockProfilesRequestSchema = z.object({
  profileIds: ProfileIdSchema.array().min(1),
  kind: z.literal(TransactionKind.UNBLOCK_PROFILE),
  signless: z["boolean"](),
  sponsored: z["boolean"]()
});
var ClaimHandleRequestSchema = z.union([z.object({
  kind: z.literal(TransactionKind.CLAIM_HANDLE),
  localName: z.string(),
  followPolicy: FollowPolicyConfigSchema.optional()
}), z.object({
  kind: z.literal(TransactionKind.CLAIM_HANDLE),
  id: z.string(),
  handle: z.string(),
  followPolicy: FollowPolicyConfigSchema.optional()
})]);
var BlockProfilesRequestSchema = z.object({
  profileIds: ProfileIdSchema.array().min(1),
  kind: z.literal(TransactionKind.BLOCK_PROFILE),
  signless: z["boolean"](),
  sponsored: z["boolean"]()
});

var RecipientWithSplitSchema = z.object({
  recipient: EvmAddressSchema,
  split: z.number()
});
var SimpleCollectActionConfigSchema = z.object({
  type: z.literal(OpenActionType.SIMPLE_COLLECT),
  amount: Erc20AmountSchema.optional(),
  followerOnly: z["boolean"](),
  referralFee: z.number().optional(),
  collectLimit: z.number().optional(),
  recipient: EvmAddressSchema.optional(),
  endsAt: z.coerce.date().min(new Date()).optional()
});
var MultirecipientCollectActionConfigSchema = z.object({
  type: z.literal(OpenActionType.MULTIRECIPIENT_COLLECT),
  amount: Erc20AmountSchema,
  followerOnly: z["boolean"](),
  referralFee: z.number().optional(),
  collectLimit: z.number().optional(),
  recipients: z.array(RecipientWithSplitSchema),
  endsAt: z.coerce.date().min(new Date()).optional()
});
var UnknownOpenActionConfigSchema = z.object({
  type: z.literal(OpenActionType.UNKNOWN_OPEN_ACTION),
  address: EvmAddressSchema,
  data: DataSchema
});
var OpenActionConfigSchema = z.discriminatedUnion('type', [SimpleCollectActionConfigSchema, MultirecipientCollectActionConfigSchema, UnknownOpenActionConfigSchema]).superRefine(function (val, ctx) {
  if (val.type === OpenActionType.SIMPLE_COLLECT) {
    if (val.amount && !val.recipient) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'You must provide a recipient when specifying an amount',
        path: ['recipient']
      });
    }
  }
});
var AnyoneReferencePolicyConfigSchema = z.object({
  type: z.literal(ReferencePolicyType.ANYONE)
});
var DegreesOfSeparationReferencePolicyConfigSchema = z.object({
  type: z.literal(ReferencePolicyType.DEGREES_OF_SEPARATION),
  params: z.object({
    commentsRestricted: z["boolean"](),
    mirrorsRestricted: z["boolean"](),
    degreesOfSeparation: z.number(),
    quotesRestricted: z["boolean"](),
    sourceProfileId: ProfileIdSchema.optional()
  })
});
var FollowersOnlyReferencePolicyConfigSchema = z.object({
  type: z.literal(ReferencePolicyType.FOLLOWERS_ONLY)
});
var NoReferencePolicyConfigSchema = z.object({
  type: z.literal(ReferencePolicyType.NO_ONE)
});
var ReferencePolicyConfigSchema = z.discriminatedUnion('type', [AnyoneReferencePolicyConfigSchema, DegreesOfSeparationReferencePolicyConfigSchema, FollowersOnlyReferencePolicyConfigSchema, NoReferencePolicyConfigSchema]);
var CreatePostRequestSchema = z.object({
  kind: z.literal(TransactionKind.CREATE_POST),
  signless: z["boolean"](),
  sponsored: z["boolean"](),
  metadata: UriSchema,
  reference: ReferencePolicyConfigSchema["default"]({
    type: ReferencePolicyType.ANYONE
  }),
  actions: OpenActionConfigSchema.array()["default"]([])
});
var CreateCommentRequestSchema = z.object({
  kind: z.literal(TransactionKind.CREATE_COMMENT),
  signless: z["boolean"](),
  sponsored: z["boolean"](),
  metadata: UriSchema,
  commentOn: PublicationIdSchema,
  reference: ReferencePolicyConfigSchema["default"]({
    type: ReferencePolicyType.ANYONE
  }),
  actions: OpenActionConfigSchema.array()["default"]([])
});
var CreateQuoteRequestSchema = z.object({
  kind: z.literal(TransactionKind.CREATE_QUOTE),
  signless: z["boolean"](),
  sponsored: z["boolean"](),
  metadata: UriSchema,
  quoteOn: PublicationIdSchema,
  reference: ReferencePolicyConfigSchema["default"]({
    type: ReferencePolicyType.ANYONE
  }),
  actions: OpenActionConfigSchema.array()["default"]([])
});
var CreateMirrorRequestSchema = z.object({
  mirrorOn: PublicationIdSchema,
  kind: z.literal(TransactionKind.MIRROR_PUBLICATION),
  signless: z["boolean"](),
  sponsored: z["boolean"]()
});
var CollectFeeSchema = z.object({
  amount: Erc20AmountSchema,
  contractAddress: EvmAddressSchema
});
var BaseCollectRequestSchema = z.object({
  kind: z.literal(TransactionKind.ACT_ON_PUBLICATION),
  publicationId: PublicationIdSchema
});
var LegacyCollectRequestSchema = BaseCollectRequestSchema.extend({
  type: z.literal(AllOpenActionType.LEGACY_COLLECT),
  publicationId: PublicationIdSchema,
  referrer: PublicationIdSchema.optional(),
  fee: CollectFeeSchema.optional(),
  "public": z.literal(false),
  signless: z["boolean"](),
  sponsored: z["boolean"]()
});
var SimpleCollectRequestSchema = BaseCollectRequestSchema.extend({
  type: z.literal(AllOpenActionType.SIMPLE_COLLECT),
  publicationId: PublicationIdSchema,
  referrers: z.union([PublicationIdSchema, ProfileIdSchema]).array().min(1).optional(),
  fee: CollectFeeSchema.optional(),
  "public": z["boolean"](),
  signless: z["boolean"](),
  sponsored: z["boolean"]()
});
var MultirecipientCollectRequestSchema = BaseCollectRequestSchema.extend({
  type: z.literal(AllOpenActionType.MULTIRECIPIENT_COLLECT),
  publicationId: PublicationIdSchema,
  referrers: z.union([PublicationIdSchema, ProfileIdSchema]).array().min(1).optional(),
  fee: CollectFeeSchema,
  "public": z["boolean"](),
  signless: z["boolean"](),
  sponsored: z["boolean"]()
});
var UnknownActionRequestSchema = BaseCollectRequestSchema.extend({
  type: z.literal(AllOpenActionType.UNKNOWN_OPEN_ACTION),
  publicationId: PublicationIdSchema,
  address: EvmAddressSchema,
  data: DataSchema,
  referrers: z.union([PublicationIdSchema, ProfileIdSchema]).array().min(1).optional(),
  "public": z["boolean"](),
  signless: z["boolean"](),
  sponsored: z["boolean"]()
});
var OpenActionRequestSchema = z.discriminatedUnion('type', [LegacyCollectRequestSchema, SimpleCollectRequestSchema, MultirecipientCollectRequestSchema, UnknownActionRequestSchema]);

/* eslint-disable no-fallthrough */
function resolveProtocolTransactionRequestSchema(kind) {
  switch (kind) {
    case TransactionKind.ACT_ON_PUBLICATION:
      return OpenActionRequestSchema;
    case TransactionKind.BLOCK_PROFILE:
      return BlockProfilesRequestSchema;
    case TransactionKind.CLAIM_HANDLE:
      return ClaimHandleRequestSchema;
    case TransactionKind.CREATE_COMMENT:
      return CreateCommentRequestSchema;
    case TransactionKind.CREATE_POST:
      return CreatePostRequestSchema;
    case TransactionKind.CREATE_PROFILE:
      return CreateProfileRequestSchema;
    case TransactionKind.CREATE_QUOTE:
      return CreateQuoteRequestSchema;
    case TransactionKind.FOLLOW_PROFILE:
      return FollowRequestSchema;
    case TransactionKind.LINK_HANDLE:
      return LinkHandleRequestSchema;
    case TransactionKind.MIRROR_PUBLICATION:
      return CreateMirrorRequestSchema;
    case TransactionKind.UNFOLLOW_PROFILE:
      return UnfollowRequestSchema;
    case TransactionKind.UNLINK_HANDLE:
      return UnlinkHandleRequestSchema;
    case TransactionKind.UPDATE_FOLLOW_POLICY:
      return UpdateFollowPolicyRequestSchema;
    case TransactionKind.UPDATE_PROFILE_DETAILS:
      return SetProfileMetadataRequestSchema;
    case TransactionKind.UPDATE_PROFILE_MANAGERS:
      return UpdateProfileManagersRequestSchema;
    case TransactionKind.UNBLOCK_PROFILE:
      return UnblockProfilesRequestSchema;
    default:
      throw new Error('Not implemented');
  }
}
function resolveAnyTransactionRequestSchema(kind) {
  switch (kind) {
    case TransactionKind.APPROVE_MODULE:
      return TokenAllowanceRequestSchema;
    default:
      return resolveProtocolTransactionRequestSchema(kind);
  }
}
function refineProtocolTransactionRequest(val, ctx) {
  var schema = resolveProtocolTransactionRequestSchema(val.kind);
  var result = schema.safeParse(val);
  if (!result.success) {
    result.error.issues.forEach(function (issue) {
      return ctx.addIssue(issue);
    });
  }
  return z.NEVER;
}
function toProtocolTransactionRequest(val) {
  var schema = resolveProtocolTransactionRequestSchema(val.kind);
  return schema.parse(val);
}
var ProtocolTransactionRequestSchema = z.object({
  kind: z["enum"](ProtocolTransactionKinds)
}).passthrough().superRefine(refineProtocolTransactionRequest).transform(toProtocolTransactionRequest);
function refineAnyTransactionRequest(val, ctx) {
  var schema = resolveAnyTransactionRequestSchema(val.kind);
  var result = schema.safeParse(val);
  if (!result.success) {
    result.error.issues.forEach(function (issue) {
      return ctx.addIssue(issue);
    });
  }
  return z.NEVER;
}
function toAnyTransactionRequest(val) {
  var schema = resolveAnyTransactionRequestSchema(val.kind);
  return schema.parse(val);
}
var AnyTransactionRequestSchema = z.object({
  kind: z.nativeEnum(TransactionKind)
}).passthrough().superRefine(refineAnyTransactionRequest).transform(toAnyTransactionRequest);
var TransactionType = /*#__PURE__*/function (TransactionType) {
  TransactionType[TransactionType["Native"] = 0] = "Native";
  TransactionType[TransactionType["Meta"] = 1] = "Meta";
  TransactionType[TransactionType["Data"] = 2] = "Data";
  return TransactionType;
}({});
var MetaTransactionSchema = z.object({
  type: z.literal(TransactionType.Meta),
  chainType: z.nativeEnum(ChainType),
  id: z.string(),
  relayerTxId: z.string(),
  txHash: z.string().nullable(),
  nonce: z.number(),
  request: ProtocolTransactionRequestSchema
});
var NativeTransactionSchema = z.object({
  type: z.literal(TransactionType.Native),
  chainType: z.nativeEnum(ChainType),
  id: z.string(),
  relayerTxId: z.string().optional(),
  txHash: z.string().nullable(),
  request: AnyTransactionRequestSchema
});
var DataTransactionSchema = z.object({
  type: z.literal(TransactionType.Data),
  id: z.string(),
  request: ProtocolTransactionRequestSchema
});
var TransactionSchema = z.discriminatedUnion('type', [MetaTransactionSchema, NativeTransactionSchema, DataTransactionSchema]);
var TransactionListSchema = z.array(TransactionSchema);

var _transactionKindToFil;
var digiHubTransactionKinds = [TransactionKind.ACT_ON_PUBLICATION, TransactionKind.CREATE_COMMENT, TransactionKind.CREATE_POST, TransactionKind.CREATE_QUOTE, TransactionKind.FOLLOW_PROFILE, TransactionKind.MIRROR_PUBLICATION, TransactionKind.UPDATE_PROFILE_MANAGERS, TransactionKind.UPDATE_FOLLOW_POLICY, TransactionKind.UPDATE_PROFILE_DETAILS];

// const tokenHandleRegistryTransactionKinds = []; // not used yet

var transactionKindToFilterGroup = (_transactionKindToFil = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_transactionKindToFil, TransactionKind.ACT_ON_PUBLICATION, digiHubTransactionKinds), TransactionKind.BLOCK_PROFILE, digiHubTransactionKinds), TransactionKind.UNBLOCK_PROFILE, digiHubTransactionKinds), TransactionKind.CREATE_COMMENT, digiHubTransactionKinds), TransactionKind.CREATE_POST, digiHubTransactionKinds), TransactionKind.CREATE_QUOTE, digiHubTransactionKinds), TransactionKind.FOLLOW_PROFILE, digiHubTransactionKinds), TransactionKind.MIRROR_PUBLICATION, digiHubTransactionKinds), TransactionKind.UPDATE_PROFILE_MANAGERS, digiHubTransactionKinds), TransactionKind.UPDATE_FOLLOW_POLICY, digiHubTransactionKinds), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_transactionKindToFil, TransactionKind.UPDATE_PROFILE_DETAILS, digiHubTransactionKinds), TransactionKind.CLAIM_HANDLE, []), TransactionKind.APPROVE_MODULE, []), TransactionKind.CREATE_PROFILE, []), TransactionKind.UNFOLLOW_PROFILE, []), TransactionKind.LINK_HANDLE, []), TransactionKind.UNLINK_HANDLE, []));
function isSerializableMetaTransaction(tx) {
  return tx instanceof MetaTransaction;
}
function toTransactionSchema(tx) {
  if (tx instanceof MetaTransaction) {
    return _objectSpread2({
      type: TransactionType.Meta
    }, tx.toTransactionData());
  }
  if (tx instanceof NativeTransaction) {
    return _objectSpread2({
      type: TransactionType.Native
    }, tx.toTransactionData());
  }
  if (tx instanceof DataTransaction) {
    return _objectSpread2({
      type: TransactionType.Data
    }, tx.toTransactionData());
  }
  assertNever(tx, 'Transaction type not supported');
}
var PendingTransactionGateway = /*#__PURE__*/function () {
  function PendingTransactionGateway(storage, transactionFactory) {
    _classCallCheck(this, PendingTransactionGateway);
    this.storage = storage;
    this.transactionFactory = transactionFactory;
  }
  _createClass(PendingTransactionGateway, [{
    key: "save",
    value: function () {
      var _save = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(tx) {
        var transactions, newTransactions, idx, expectedNonce;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getAll();
            case 2:
              transactions = _context.sent;
              newTransactions = _toConsumableArray(transactions);
              idx = transactions.findIndex(function (entry) {
                return entry.id === tx.id;
              });
              if (!(idx > -1)) {
                _context.next = 10;
                break;
              }
              newTransactions.splice(idx, 1, tx);
              _context.next = 9;
              return this.update(newTransactions);
            case 9:
              return _context.abrupt("return");
            case 10:
              if (!(tx instanceof MetaTransaction)) {
                _context.next = 15;
                break;
              }
              _context.next = 13;
              return this.getNextMetaTransactionNonceFor(tx.request.kind);
            case 13:
              expectedNonce = _context.sent;
              if (expectedNonce) {
                invariant(expectedNonce === tx.nonce, "Nonce mismatch, was expecting ".concat(expectedNonce, ", got ").concat(tx.nonce));
              }
            case 15:
              newTransactions.unshift(tx);
              _context.next = 18;
              return this.update(newTransactions);
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function save(_x) {
        return _save.apply(this, arguments);
      }
      return save;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
        var transactions;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.getAll();
            case 2:
              transactions = _context2.sent;
              _context2.next = 5;
              return this.update(transactions.filter(function (tx) {
                return tx.id !== id;
              }));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function remove(_x2) {
        return _remove.apply(this, arguments);
      }
      return remove;
    }()
  }, {
    key: "reset",
    value: function () {
      var _reset = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              void this.storage.reset();
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function reset() {
        return _reset.apply(this, arguments);
      }
      return reset;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this = this;
        var data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!this.cache) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return", this.cache.slice());
            case 2:
              _context4.next = 4;
              return this.storage.get();
            case 4:
              data = _context4.sent;
              if (!(data === null)) {
                _context4.next = 7;
                break;
              }
              return _context4.abrupt("return", []);
            case 7:
              return _context4.abrupt("return", data.map(function (entry) {
                return _this.toEntity(entry);
              }));
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function getAll() {
        return _getAll.apply(this, arguments);
      }
      return getAll;
    }()
  }, {
    key: "getNextMetaTransactionNonceFor",
    value: function () {
      var _getNextMetaTransactionNonceFor = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(kind) {
        var all, metaTransactions, filter, firstOfKind;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.getAll();
            case 2:
              all = _context5.sent;
              if (!(all.length === 0)) {
                _context5.next = 5;
                break;
              }
              return _context5.abrupt("return", undefined);
            case 5:
              metaTransactions = all.filter(isSerializableMetaTransaction);
              if (!(metaTransactions.length === 0)) {
                _context5.next = 8;
                break;
              }
              return _context5.abrupt("return", undefined);
            case 8:
              if (!(kind in transactionKindToFilterGroup)) {
                _context5.next = 12;
                break;
              }
              filter = transactionKindToFilterGroup[kind];
              firstOfKind = metaTransactions.find(function (tx) {
                return filter.includes(tx.request.kind);
              });
              return _context5.abrupt("return", firstOfKind ? firstOfKind.nonce + 1 : undefined);
            case 12:
              return _context5.abrupt("return", undefined);
            case 13:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function getNextMetaTransactionNonceFor(_x3) {
        return _getNextMetaTransactionNonceFor.apply(this, arguments);
      }
      return getNextMetaTransactionNonceFor;
    }()
  }, {
    key: "subscribe",
    value: function subscribe(subscriber) {
      var _this2 = this;
      this.storage.subscribe( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(newData, oldData) {
          var _oldData$map;
          var updatedTransactions, previousTransactions, newTransaction;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                if (!(newData === null)) {
                  _context6.next = 2;
                  break;
                }
                return _context6.abrupt("return");
              case 2:
                updatedTransactions = newData.map(function (entry) {
                  return _this2.toEntity(entry);
                });
                previousTransactions = (_oldData$map = oldData === null || oldData === void 0 ? void 0 : oldData.map(function (entry) {
                  return _this2.toEntity(entry);
                })) !== null && _oldData$map !== void 0 ? _oldData$map : [];
                newTransaction = differenceBy(updatedTransactions, previousTransactions, function (tx) {
                  return tx.id;
                });
                if (newTransaction.length > 0) {
                  subscriber(newTransaction);
                }
              case 6:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }));
        return function (_x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(transactions) {
        var data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              this.cache = transactions;
              data = transactions.map(toTransactionSchema);
              _context7.next = 4;
              return this.storage.set(data);
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function update(_x6) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "toEntity",
    value: function toEntity(data) {
      switch (data.type) {
        case TransactionType.Meta:
          return this.transactionFactory.createMetaTransaction(data);
        case TransactionType.Native:
          return this.transactionFactory.createNativeTransaction(data);
        case TransactionType.Data:
          return this.transactionFactory.createDataTransaction(data);
        default:
          assertNever(data, 'Transaction type not supported');
      }
    }
  }]);
  return PendingTransactionGateway;
}();

var TransactionQueuePresenter = /*#__PURE__*/function () {
  function TransactionQueuePresenter() {
    _classCallCheck(this, TransactionQueuePresenter);
  }
  _createClass(TransactionQueuePresenter, [{
    key: "clearRecent",
    value: function clearRecent() {
      var transactions = recentTransactionsVar();
      var filteredTransactions = transactions.filter(function (tx) {
        return tx.status !== TxStatus.FAILED && tx.status !== TxStatus.SETTLED;
      });
      recentTransactionsVar(filteredTransactions);
    }
  }, {
    key: "pending",
    value: function pending(data) {
      if (recentTransactionsVar().find(function (_ref) {
        var id = _ref.id;
        return id === data.id;
      })) {
        this.updateById(data.id, _objectSpread2(_objectSpread2({}, data), {}, {
          status: TxStatus.PENDING
        }));
      } else {
        this.addTransaction({
          id: data.id,
          status: TxStatus.PENDING,
          request: data.request,
          txHash: data.txHash
        });
      }
    }
  }, {
    key: "settled",
    value: function settled(data) {
      this.updateById(data.id, {
        status: TxStatus.SETTLED
      });
    }
  }, {
    key: "failed",
    value: function failed(error, data) {
      this.updateById(data.id, {
        status: TxStatus.FAILED,
        error: error
      });
    }
  }, {
    key: "addTransaction",
    value: function addTransaction(data) {
      var transactions = recentTransactionsVar();
      recentTransactionsVar([data].concat(_toConsumableArray(transactions)));
    }
  }, {
    key: "updateById",
    value: function updateById(id, update) {
      var transactions = recentTransactionsVar();
      recentTransactionsVar(transactions.map(function (data) {
        if (id === data.id) {
          return _objectSpread2(_objectSpread2({}, data), update);
        }
        return data;
      }));
    }
  }]);
  return TransactionQueuePresenter;
}();

var BlockProfilesResponder = /*#__PURE__*/function () {
  function BlockProfilesResponder(profileCacheManager) {
    _classCallCheck(this, BlockProfilesResponder);
    this.profileCacheManager = profileCacheManager;
  }
  _createClass(BlockProfilesResponder, [{
    key: "commit",
    value: function () {
      var _commit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref) {
        var _this = this;
        var request;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              request = _ref.request;
              _context2.next = 3;
              return Promise.all(request.profileIds.map( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(profileId) {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", _this.profileCacheManager.fetchProfileById(profileId));
                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }()));
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function commit(_x) {
        return _commit.apply(this, arguments);
      }
      return commit;
    }()
  }]);
  return BlockProfilesResponder;
}();

var FollowProfileResponder = /*#__PURE__*/function () {
  function FollowProfileResponder(profileCacheManager) {
    _classCallCheck(this, FollowProfileResponder);
    this.profileCacheManager = profileCacheManager;
  }
  _createClass(FollowProfileResponder, [{
    key: "commit",
    value: function () {
      var _commit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var request;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              request = _ref.request;
              _context.next = 3;
              return this.profileCacheManager.fetchProfileById(request.profileId);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function commit(_x) {
        return _commit.apply(this, arguments);
      }
      return commit;
    }()
  }]);
  return FollowProfileResponder;
}();

var LinkHandleResponder = /*#__PURE__*/function () {
  function LinkHandleResponder(apolloClient, profileCacheManager) {
    _classCallCheck(this, LinkHandleResponder);
    this.apolloClient = apolloClient;
    this.profileCacheManager = profileCacheManager;
  }
  _createClass(LinkHandleResponder, [{
    key: "commit",
    value: function () {
      var _commit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.all([this.profileCacheManager.refreshCurrentProfile(), this.apolloClient.refetchQueries({
                include: [OwnedHandlesDocument]
              })]);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function commit() {
        return _commit.apply(this, arguments);
      }
      return commit;
    }()
  }]);
  return LinkHandleResponder;
}();

var NoopResponder = /*#__PURE__*/function () {
  function NoopResponder() {
    _classCallCheck(this, NoopResponder);
  }
  _createClass(NoopResponder, [{
    key: "commit",
    value: // eslint-disable-next-line @typescript-eslint/no-empty-function
    function () {
      var _commit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function commit(_x) {
        return _commit.apply(this, arguments);
      }
      return commit;
    }()
  }]);
  return NoopResponder;
}();

var RefreshCurrentProfileResponder = /*#__PURE__*/function () {
  function RefreshCurrentProfileResponder(profileCacheManager) {
    _classCallCheck(this, RefreshCurrentProfileResponder);
    this.profileCacheManager = profileCacheManager;
  }
  _createClass(RefreshCurrentProfileResponder, [{
    key: "commit",
    value: function () {
      var _commit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.profileCacheManager.refreshCurrentProfile();
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function commit() {
        return _commit.apply(this, arguments);
      }
      return commit;
    }()
  }]);
  return RefreshCurrentProfileResponder;
}();

var RefreshPublicationResponder = /*#__PURE__*/function () {
  function RefreshPublicationResponder(publicationCacheManage) {
    _classCallCheck(this, RefreshPublicationResponder);
    this.publicationCacheManage = publicationCacheManage;
  }
  _createClass(RefreshPublicationResponder, [{
    key: "commit",
    value: function () {
      var _commit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var request;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              request = _ref.request;
              _context.next = 3;
              return this.publicationCacheManage.refresh(request.publicationId);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function commit(_x) {
        return _commit.apply(this, arguments);
      }
      return commit;
    }()
  }]);
  return RefreshPublicationResponder;
}();

var UnblockProfilesResponder = /*#__PURE__*/function () {
  function UnblockProfilesResponder(profileCacheManager) {
    _classCallCheck(this, UnblockProfilesResponder);
    this.profileCacheManager = profileCacheManager;
  }
  _createClass(UnblockProfilesResponder, [{
    key: "commit",
    value: function () {
      var _commit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var _this = this;
        var request;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              request = _ref.request;
              _context.next = 3;
              return Promise.all(request.profileIds.map(function (profileId) {
                return _this.profileCacheManager.fetchProfileById(profileId);
              }));
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function commit(_x) {
        return _commit.apply(this, arguments);
      }
      return commit;
    }()
  }]);
  return UnblockProfilesResponder;
}();

var UnfollowProfileResponder = /*#__PURE__*/function () {
  function UnfollowProfileResponder(profileCacheManager) {
    _classCallCheck(this, UnfollowProfileResponder);
    this.profileCacheManager = profileCacheManager;
  }
  _createClass(UnfollowProfileResponder, [{
    key: "commit",
    value: function () {
      var _commit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var request;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              request = _ref.request;
              _context.next = 3;
              return this.profileCacheManager.fetchProfileById(request.profileId);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function commit(_x) {
        return _commit.apply(this, arguments);
      }
      return commit;
    }()
  }]);
  return UnfollowProfileResponder;
}();

var UpdateProfileManagersResponder = /*#__PURE__*/function () {
  function UpdateProfileManagersResponder(apolloClient, profileCacheManager) {
    _classCallCheck(this, UpdateProfileManagersResponder);
    this.apolloClient = apolloClient;
    this.profileCacheManager = profileCacheManager;
  }
  _createClass(UpdateProfileManagersResponder, [{
    key: "commit",
    value: function () {
      var _commit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.all([this.profileCacheManager.refreshCurrentProfile(), this.apolloClient.refetchQueries({
                include: [ProfileManagersDocument]
              })]);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function commit() {
        return _commit.apply(this, arguments);
      }
      return commit;
    }()
  }]);
  return UpdateProfileManagersResponder;
}();

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

var SerializableMetaTransaction = /*#__PURE__*/function (_ref) {
  _inherits(SerializableMetaTransaction, _ref);
  function SerializableMetaTransaction(state, reduce) {
    var _this;
    _classCallCheck(this, SerializableMetaTransaction);
    _this = _callSuper(this, SerializableMetaTransaction);
    _this.state = state;
    _this.reduce = reduce;
    return _this;
  }
  _createClass(SerializableMetaTransaction, [{
    key: "toTransactionData",
    value: function toTransactionData() {
      return {
        chainType: this.state.chainType,
        id: this.state.id,
        relayerTxId: this.state.relayerTxId,
        nonce: this.state.nonce,
        request: this.state.request,
        txHash: this.state.txHash
      };
    }
  }, {
    key: "chainType",
    get: function get() {
      return this.state.chainType;
    }
  }, {
    key: "id",
    get: function get() {
      return this.state.id;
    }
  }, {
    key: "request",
    get: function get() {
      return this.state.request;
    }
  }, {
    key: "nonce",
    get: function get() {
      return this.state.nonce;
    }
  }, {
    key: "hash",
    get: function get() {
      return this.state.txHash;
    }
  }, {
    key: "waitNextEvent",
    value: function () {
      var _waitNextEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.reduce(this.state);
            case 2:
              result = _context.sent;
              if (!result.isSuccess()) {
                _context.next = 6;
                break;
              }
              this.state = result.value.state;
              return _context.abrupt("return", success(result.value.event));
            case 6:
              return _context.abrupt("return", result);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function waitNextEvent() {
        return _waitNextEvent.apply(this, arguments);
      }
      return waitNextEvent;
    }()
  }]);
  return SerializableMetaTransaction;
}(MetaTransaction);
var SerializableNativeTransaction = /*#__PURE__*/function (_ref2) {
  _inherits(SerializableNativeTransaction, _ref2);
  function SerializableNativeTransaction(state, reduce) {
    var _this2;
    _classCallCheck(this, SerializableNativeTransaction);
    _this2 = _callSuper(this, SerializableNativeTransaction);
    _this2.state = state;
    _this2.reduce = reduce;
    return _this2;
  }
  _createClass(SerializableNativeTransaction, [{
    key: "toTransactionData",
    value: function toTransactionData() {
      return {
        chainType: this.state.chainType,
        id: this.state.id,
        relayerTxId: this.state.relayerTxId,
        request: this.state.request,
        txHash: this.state.txHash
      };
    }
  }, {
    key: "chainType",
    get: function get() {
      return this.state.chainType;
    }
  }, {
    key: "id",
    get: function get() {
      return this.state.id;
    }
  }, {
    key: "request",
    get: function get() {
      return this.state.request;
    }
  }, {
    key: "hash",
    get: function get() {
      return this.state.txHash;
    }
  }, {
    key: "waitNextEvent",
    value: function () {
      var _waitNextEvent2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.reduce(this.state);
            case 2:
              result = _context2.sent;
              if (!result.isSuccess()) {
                _context2.next = 6;
                break;
              }
              this.state = result.value.state;
              return _context2.abrupt("return", success(result.value.event));
            case 6:
              return _context2.abrupt("return", result);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function waitNextEvent() {
        return _waitNextEvent2.apply(this, arguments);
      }
      return waitNextEvent;
    }()
  }]);
  return SerializableNativeTransaction;
}(NativeTransaction);
var SerializableDataTransaction = /*#__PURE__*/function (_ref3) {
  _inherits(SerializableDataTransaction, _ref3);
  function SerializableDataTransaction(id, request) {
    var _this3;
    _classCallCheck(this, SerializableDataTransaction);
    _this3 = _callSuper(this, SerializableDataTransaction);
    _this3.id = id;
    _this3.request = request;
    return _this3;
  }
  _createClass(SerializableDataTransaction, [{
    key: "waitNextEvent",
    value: function () {
      var _waitNextEvent3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
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
        return _waitNextEvent3.apply(this, arguments);
      }
      return waitNextEvent;
    }()
  }, {
    key: "toTransactionData",
    value: function toTransactionData() {
      return {
        id: this.id,
        request: this.request
      };
    }
  }]);
  return SerializableDataTransaction;
}(DataTransaction);
var TransactionFactory = /*#__PURE__*/function () {
  function TransactionFactory(transactionObserver) {
    _classCallCheck(this, TransactionFactory);
    this.transactionObserver = transactionObserver;
  }
  _createClass(TransactionFactory, [{
    key: "createMetaTransaction",
    value: function createMetaTransaction(init) {
      return new SerializableMetaTransaction({
        chainType: init.chainType,
        id: init.id,
        relayerTxId: init.relayerTxId,
        nonce: init.nonce,
        request: init.request,
        txHash: init.txHash
      }, this.createProtocolCallStateReducer());
    }
  }, {
    key: "createNativeTransaction",
    value: function createNativeTransaction(init) {
      if (init.relayerTxId) {
        return new SerializableNativeTransaction({
          chainType: init.chainType,
          id: init.id,
          relayerTxId: init.relayerTxId,
          request: init.request,
          txHash: init.txHash
        }, this.createProtocolCallStateReducer());
      }
      if (ProtocolTransactionKinds.includes(init.request.kind)) {
        return new SerializableNativeTransaction({
          chainType: init.chainType,
          id: init.id,
          request: init.request,
          txHash: init.txHash
        }, this.createProtocolCallStateReducer());
      }
      return new SerializableNativeTransaction({
        chainType: init.chainType,
        id: init.id,
        request: init.request,
        txHash: init.txHash
      }, this.createPureBlockchainStateReducer());
    }
  }, {
    key: "createDataTransaction",
    value: function createDataTransaction(init) {
      return new SerializableDataTransaction(init.id, init.request);
    }
  }, {
    key: "createProtocolCallStateReducer",
    value: function createProtocolCallStateReducer() {
      var _this4 = this;
      return /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(state) {
          var _state$txHash;
          var request, indexingEventResult;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                request = state.relayerTxId ? {
                  relayerTxId: state.relayerTxId
                } : {
                  txHash: (_state$txHash = state.txHash) !== null && _state$txHash !== void 0 ? _state$txHash : never()
                };
                _context4.next = 3;
                return _this4.transactionObserver.waitForNextIndexingEvent(request);
              case 3:
                indexingEventResult = _context4.sent;
                if (!indexingEventResult.isFailure()) {
                  _context4.next = 6;
                  break;
                }
                return _context4.abrupt("return", indexingEventResult);
              case 6:
                if (!indexingEventResult.value.indexed) {
                  _context4.next = 8;
                  break;
                }
                return _context4.abrupt("return", success({
                  event: TransactionEvent.SETTLED,
                  state: _objectSpread2(_objectSpread2({}, state), {}, {
                    txHash: indexingEventResult.value.txHash
                  })
                }));
              case 8:
                return _context4.abrupt("return", success({
                  event: TransactionEvent.UPGRADED,
                  state: _objectSpread2(_objectSpread2({}, state), {}, {
                    txHash: indexingEventResult.value.txHash
                  })
                }));
              case 9:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        return function (_x) {
          return _ref4.apply(this, arguments);
        };
      }();
    }
  }, {
    key: "createPureBlockchainStateReducer",
    value: function createPureBlockchainStateReducer() {
      var _this5 = this;
      return /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(state) {
          var _state$txHash2;
          var result;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this5.transactionObserver.waitForConfirmation({
                  txHash: (_state$txHash2 = state.txHash) !== null && _state$txHash2 !== void 0 ? _state$txHash2 : never("Cannot observe ".concat(NativeTransaction.name, " on-chain without a TX hash")),
                  chainType: state.chainType
                });
              case 2:
                result = _context5.sent;
                if (!result.isFailure()) {
                  _context5.next = 5;
                  break;
                }
                return _context5.abrupt("return", result);
              case 5:
                return _context5.abrupt("return", success({
                  event: TransactionEvent.SETTLED,
                  state: state
                }));
              case 6:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }));
        return function (_x2) {
          return _ref5.apply(this, arguments);
        };
      }();
    }
  }]);
  return TransactionFactory;
}();

var ONE_SECOND = 1000; // ms

/**
 * The transaction observer timings
 *
 * @internal
 */

function delay(waitInMs) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, waitInMs);
  });
}
function resolveTransactionErrorReason(reason) {
  switch (reason) {
    case DiGiTransactionFailureType.Reverted:
      return TransactionErrorReason.REVERTED;
    default:
      return TransactionErrorReason.UNKNOWN;
  }
}
var TransactionObserver = /*#__PURE__*/function () {
  function TransactionObserver(providerFactory, apolloClient, timings) {
    _classCallCheck(this, TransactionObserver);
    this.providerFactory = providerFactory;
    this.apolloClient = apolloClient;
    this.timings = timings;
  }
  _createClass(TransactionObserver, [{
    key: "waitForConfirmation",
    value: function () {
      var _waitForConfirmation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var provider, startedAt, txResponse;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.providerFactory.createProvider({
                chainType: request.chainType
              });
            case 2:
              provider = _context.sent;
              startedAt = Date.now();
            case 4:
              if (!(Date.now() - startedAt <= this.timings.maxMiningWaitTime)) {
                _context.next = 25;
                break;
              }
              _context.next = 7;
              return provider.getTransaction(request.txHash);
            case 7:
              txResponse = _context.sent;
              if (!(txResponse === null)) {
                _context.next = 12;
                break;
              }
              _context.next = 11;
              return delay(ONE_SECOND);
            case 11:
              return _context.abrupt("continue", 4);
            case 12:
              _context.prev = 12;
              _context.next = 15;
              return Promise.race([txResponse.wait(1), delay(this.timings.maxMiningWaitTime).then(function () {
                throw new TransactionError(TransactionErrorReason.MINING_TIMEOUT);
              })]);
            case 15:
              return _context.abrupt("return", success());
            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](12);
              if (!(_context.t0 instanceof TransactionError)) {
                _context.next = 22;
                break;
              }
              return _context.abrupt("return", failure(_context.t0));
            case 22:
              throw _context.t0;
            case 23:
              _context.next = 4;
              break;
            case 25:
              return _context.abrupt("return", failure(new TransactionError(TransactionErrorReason.MINING_TIMEOUT)));
            case 26:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[12, 18]]);
      }));
      function waitForConfirmation(_x) {
        return _waitForConfirmation.apply(this, arguments);
      }
      return waitForConfirmation;
    }()
  }, {
    key: "waitForNextIndexingEvent",
    value: function () {
      var _waitForNextIndexingEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var _this = this;
        var startedAt, observable, previousTxHash;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              startedAt = Date.now();
              observable = this.apolloClient.poll({
                query: DiGiTransactionStatusDocument,
                variables: {
                  request: request.relayerTxId ? {
                    forTxId: request.relayerTxId
                  } : {
                    forTxHash: request.txHash
                  }
                }
              });
              previousTxHash = null;
              return _context3.abrupt("return", new Promise(function (resolve, reject) {
                var subscription = observable.subscribe({
                  next: function () {
                    var _next = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref) {
                      var result, _result$reason;
                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while (1) switch (_context2.prev = _context2.next) {
                          case 0:
                            result = _ref.result;
                            if (!(result === null)) {
                              _context2.next = 3;
                              break;
                            }
                            return _context2.abrupt("return");
                          case 3:
                            if (!(result.status === DiGiTransactionStatusType.Failed)) {
                              _context2.next = 7;
                              break;
                            }
                            subscription.unsubscribe();
                            resolve(failure(new TransactionError(resolveTransactionErrorReason((_result$reason = result.reason) !== null && _result$reason !== void 0 ? _result$reason : never("Missing reason")))));
                            return _context2.abrupt("return");
                          case 7:
                            if (previousTxHash === null) {
                              previousTxHash = result.txHash;
                            }
                            if (!(previousTxHash !== result.txHash || result.status === DiGiTransactionStatusType.Complete)) {
                              _context2.next = 12;
                              break;
                            }
                            subscription.unsubscribe();
                            resolve(success({
                              indexed: result.status === DiGiTransactionStatusType.Complete,
                              txHash: result.txHash
                            }));
                            return _context2.abrupt("return");
                          case 12:
                            if (Date.now() - startedAt > _this.timings.maxIndexingWaitTime) {
                              subscription.unsubscribe();
                              resolve(failure(new TransactionError(TransactionErrorReason.INDEXING_TIMEOUT)));
                            }
                          case 13:
                          case "end":
                            return _context2.stop();
                        }
                      }, _callee2);
                    }));
                    function next(_x3) {
                      return _next.apply(this, arguments);
                    }
                    return next;
                  }(),
                  error: reject
                });
              }));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function waitForNextIndexingEvent(_x2) {
        return _waitForNextIndexingEvent.apply(this, arguments);
      }
      return waitForNextIndexingEvent;
    }()
  }]);
  return TransactionObserver;
}();

var TransactionStorageSchema = /*#__PURE__*/function (_BaseStorageSchema) {
  _inherits(TransactionStorageSchema, _BaseStorageSchema);
  function TransactionStorageSchema(key) {
    var _this;
    _classCallCheck(this, TransactionStorageSchema);
    _this = _callSuper(this, TransactionStorageSchema, [key, TransactionListSchema]);
    _defineProperty(_assertThisInitialized(_this), "version", 2);
    return _this;
  }
  _createClass(TransactionStorageSchema, [{
    key: "migrate",
    value: function migrate(storageItem) {
      var storageVersion = storageItem.metadata.version;
      if (this.version > storageVersion) {
        return this.parseData([]);
      }
      return this.parseData(storageItem.data);
    }
  }]);
  return TransactionStorageSchema;
}(BaseStorageSchema);
function createTransactionStorage(storageProvider, namespace) {
  var schema = new TransactionStorageSchema("digi.".concat(namespace, ".transactions"));
  return Storage.createForSchema(schema, storageProvider);
}

var BalanceGateway = /*#__PURE__*/function () {
  function BalanceGateway(providerFactory) {
    _classCallCheck(this, BalanceGateway);
    this.providerFactory = providerFactory;
  }
  _createClass(BalanceGateway, [{
    key: "getBalanceFor",
    value: function () {
      var _getBalanceFor = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(wallet, asset) {
        var provider, contract, balance;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.providerFactory.createProvider({
                chainType: ChainType.POLYGON
              });
            case 2:
              provider = _context.sent;
              contract = erc20$1(asset.address, provider);
              _context.next = 6;
              return contract.balanceOf(wallet.address);
            case 6:
              balance = _context.sent;
              return _context.abrupt("return", Amount.erc20(asset, BigDecimal.rescale(BigDecimal.from(balance.toString()), -asset.decimals)));
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getBalanceFor(_x, _x2) {
        return _getBalanceFor.apply(this, arguments);
      }
      return getBalanceFor;
    }()
  }]);
  return BalanceGateway;
}();

var TokenGateway = /*#__PURE__*/function () {
  function TokenGateway(providerFactory) {
    _classCallCheck(this, TokenGateway);
    this.providerFactory = providerFactory;
  }
  _createClass(TokenGateway, [{
    key: "getTransferAllowanceFor",
    value: function () {
      var _getTransferAllowanceFor = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(asset, owner, spender) {
        var provider, contract, allowance;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.providerFactory.createProvider({
                chainType: ChainType.POLYGON
              });
            case 2:
              provider = _context.sent;
              contract = erc20$1(asset.address, provider);
              _context.next = 6;
              return contract.allowance(owner.address, spender);
            case 6:
              allowance = _context.sent;
              return _context.abrupt("return", Amount.erc20(asset, BigDecimal.rescale(BigDecimal.from(allowance.toString()), -asset.decimals)));
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getTransferAllowanceFor(_x, _x2, _x3) {
        return _getTransferAllowanceFor.apply(this, arguments);
      }
      return getTransferAllowanceFor;
    }()
  }]);
  return TokenGateway;
}();

function assertErrorObjectWithCode(error) {
  if (!Object.prototype.hasOwnProperty.call(error, 'code')) {
    throw error;
  }
}
function isUserRejectedError(err) {
  return err.code === ErrorCode.ACTION_REJECTED || err.code === errorCodes.provider.userRejectedRequest;
}

var WalletDataSchema = z.object({
  address: z.string()
});
var UnsignedProtocolCall = /*#__PURE__*/function () {
  function UnsignedProtocolCall(id, request, typedData) {
    _classCallCheck(this, UnsignedProtocolCall);
    this.id = id;
    this.request = request;
    this.typedData = typedData;
  }
  _createClass(UnsignedProtocolCall, [{
    key: "nonce",
    get: function get() {
      invariant(typeof this.typedData.message.nonce === 'number', 'Nonce is not defined');
      return this.typedData.message.nonce;
    }
  }], [{
    key: "create",
    value: function create(_ref) {
      var id = _ref.id,
        request = _ref.request,
        typedData = _ref.typedData;
      return new UnsignedProtocolCall(id, request, typedData);
    }
  }]);
  return UnsignedProtocolCall;
}();
var SignedProtocolCall = /*#__PURE__*/function () {
  function SignedProtocolCall(id, request, signature, nonce) {
    _classCallCheck(this, SignedProtocolCall);
    this.id = id;
    this.request = request;
    this.signature = signature;
    this.nonce = nonce;
  }
  _createClass(SignedProtocolCall, null, [{
    key: "create",
    value: function create(_ref2) {
      var unsignedCall = _ref2.unsignedCall,
        signature = _ref2.signature;
      return new SignedProtocolCall(unsignedCall.id, unsignedCall.request, signature, unsignedCall.nonce);
    }
  }]);
  return SignedProtocolCall;
}();
var ConcreteWallet = /*#__PURE__*/function (_Wallet) {
  _inherits(ConcreteWallet, _Wallet);
  function ConcreteWallet(address, signerFactory, transactionFactory) {
    var _this;
    _classCallCheck(this, ConcreteWallet);
    _this = _callSuper(this, ConcreteWallet, [address]);
    _defineProperty(_assertThisInitialized(_this), "signingInProgress", false);
    _this.signerFactory = signerFactory;
    _this.transactionFactory = transactionFactory;
    return _this;
  }
  _createClass(ConcreteWallet, [{
    key: "signProtocolCall",
    value: function () {
      var _signProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(unsignedCall) {
        var result, signer, _signature, signedCall;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.signerFactory.createSigner({
                address: this.address,
                chainType: ChainType.POLYGON
              });
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              if (!this.signingInProgress) {
                _context.next = 7;
                break;
              }
              return _context.abrupt("return", failure(new PendingSigningRequestError()));
            case 7:
              this.signingInProgress = true;
              signer = result.value;
              _context.prev = 9;
              _context.next = 12;
              return signer._signTypedData(unsignedCall.typedData.domain, unsignedCall.typedData.types, unsignedCall.typedData.message);
            case 12:
              _signature = _context.sent;
              signedCall = SignedProtocolCall.create({
                unsignedCall: unsignedCall,
                signature: _signature
              });
              return _context.abrupt("return", success(signedCall));
            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](9);
              assertErrorObjectWithCode(_context.t0);
              if (!isUserRejectedError(_context.t0)) {
                _context.next = 22;
                break;
              }
              return _context.abrupt("return", failure(new UserRejectedError()));
            case 22:
              throw _context.t0;
            case 23:
              _context.prev = 23;
              this.signingInProgress = false;
              return _context.finish(23);
            case 26:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[9, 17, 23, 26]]);
      }));
      function signProtocolCall(_x) {
        return _signProtocolCall.apply(this, arguments);
      }
      return signProtocolCall;
    }()
  }, {
    key: "signMessage",
    value: function () {
      var _signMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(message) {
        var result, signer, _signature2;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.signerFactory.createSigner({
                address: this.address
              });
            case 2:
              result = _context2.sent;
              if (!result.isFailure()) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return", result);
            case 5:
              if (!this.signingInProgress) {
                _context2.next = 7;
                break;
              }
              return _context2.abrupt("return", failure(new PendingSigningRequestError()));
            case 7:
              this.signingInProgress = true;
              signer = result.value;
              _context2.prev = 9;
              _context2.next = 12;
              return signer.signMessage(message);
            case 12:
              _signature2 = _context2.sent;
              return _context2.abrupt("return", success(_signature2));
            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](9);
              assertErrorObjectWithCode(_context2.t0);
              if (!isUserRejectedError(_context2.t0)) {
                _context2.next = 21;
                break;
              }
              return _context2.abrupt("return", failure(new UserRejectedError()));
            case 21:
              throw _context2.t0;
            case 22:
              _context2.prev = 22;
              this.signingInProgress = false;
              return _context2.finish(22);
            case 25:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[9, 16, 22, 25]]);
      }));
      function signMessage(_x2) {
        return _signMessage.apply(this, arguments);
      }
      return signMessage;
    }()
  }, {
    key: "sendTransaction",
    value: function () {
      var _sendTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(unsignedTransaction) {
        var result, signer, response, transaction;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.signerFactory.createSigner({
                address: this.address,
                chainType: unsignedTransaction.chainType
              });
            case 2:
              result = _context3.sent;
              if (!result.isFailure()) {
                _context3.next = 5;
                break;
              }
              return _context3.abrupt("return", result);
            case 5:
              if (!this.signingInProgress) {
                _context3.next = 7;
                break;
              }
              return _context3.abrupt("return", failure(new PendingSigningRequestError()));
            case 7:
              this.signingInProgress = true;
              signer = result.value;
              _context3.prev = 9;
              _context3.next = 12;
              return signer.sendTransaction(unsignedTransaction.transactionRequest);
            case 12:
              response = _context3.sent;
              transaction = this.transactionFactory.createNativeTransaction({
                chainType: unsignedTransaction.chainType,
                id: unsignedTransaction.id,
                request: unsignedTransaction.request,
                txHash: response.hash
              });
              return _context3.abrupt("return", success(transaction));
            case 17:
              _context3.prev = 17;
              _context3.t0 = _context3["catch"](9);
              assertErrorObjectWithCode(_context3.t0);
              if (!isUserRejectedError(_context3.t0)) {
                _context3.next = 22;
                break;
              }
              return _context3.abrupt("return", failure(new UserRejectedError()));
            case 22:
              if (!(_context3.t0.code === ErrorCode.INSUFFICIENT_FUNDS)) {
                _context3.next = 24;
                break;
              }
              return _context3.abrupt("return", failure(new InsufficientGasError(matic())));
            case 24:
              throw _context3.t0;
            case 25:
              _context3.prev = 25;
              this.signingInProgress = false;
              return _context3.finish(25);
            case 28:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[9, 17, 25, 28]]);
      }));
      function sendTransaction(_x3) {
        return _sendTransaction.apply(this, arguments);
      }
      return sendTransaction;
    }()
  }, {
    key: "toWalletData",
    value: function toWalletData() {
      return {
        address: this.address
      };
    }
  }], [{
    key: "create",
    value: function create(address, signerFactory, transactionFactory) {
      return new ConcreteWallet(address, signerFactory, transactionFactory);
    }
  }]);
  return ConcreteWallet;
}(Wallet);

z.array(WalletDataSchema);
var WalletGateway = /*#__PURE__*/function () {
  function WalletGateway(signerFactory, transactionFactory) {
    _classCallCheck(this, WalletGateway);
    _defineProperty(this, "inMemoryCache", {});
    this.signerFactory = signerFactory;
    this.transactionFactory = transactionFactory;
  }
  _createClass(WalletGateway, [{
    key: "getByAddress",
    value: function () {
      var _getByAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(address) {
        var key, _this$inMemoryCache$k, wallet;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              key = address.toLowerCase();
              if (!this.inMemoryCache[key]) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return", (_this$inMemoryCache$k = this.inMemoryCache[key]) !== null && _this$inMemoryCache$k !== void 0 ? _this$inMemoryCache$k : never());
            case 3:
              wallet = ConcreteWallet.create(address, this.signerFactory, this.transactionFactory);
              this.inMemoryCache[key] = wallet;
              return _context.abrupt("return", wallet);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getByAddress(_x) {
        return _getByAddress.apply(this, arguments);
      }
      return getByAddress;
    }()
  }]);
  return WalletGateway;
}();

var ProviderFactory = /*#__PURE__*/function () {
  function ProviderFactory(bindings, chains) {
    _classCallCheck(this, ProviderFactory);
    this.bindings = bindings;
    this.chains = chains;
  }
  _createClass(ProviderFactory, [{
    key: "createProvider",
    value: function () {
      var _createProvider = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(config) {
        var _this$chains$config$c, _this$chains$config$c2;
        var chainId, provider, network;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              chainId = (_this$chains$config$c = (_this$chains$config$c2 = this.chains[config.chainType]) === null || _this$chains$config$c2 === void 0 ? void 0 : _this$chains$config$c2.chainId) !== null && _this$chains$config$c !== void 0 ? _this$chains$config$c : never('Unable to determine chainId');
              _context.next = 3;
              return this.bindings.getProvider({
                chainId: chainId
              });
            case 3:
              provider = _context.sent;
              _context.next = 6;
              return provider.getNetwork();
            case 6:
              network = _context.sent;
              invariant(network.chainId === chainId, "Invalid chainId. Expected ".concat(chainId, " but got ").concat(network.chainId));
              return _context.abrupt("return", provider);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createProvider(_x) {
        return _createProvider.apply(this, arguments);
      }
      return createProvider;
    }()
  }]);
  return ProviderFactory;
}();

var SignerFactory = /*#__PURE__*/function () {
  function SignerFactory(bindings, chains) {
    _classCallCheck(this, SignerFactory);
    this.bindings = bindings;
    this.chains = chains;
  }
  _createClass(SignerFactory, [{
    key: "createSigner",
    value: function () {
      var _createSigner = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var address, chainType, chainId, signer, signerAddress, signerChainId, chainConfig, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              address = _ref.address, chainType = _ref.chainType;
              chainId = chainType ? this.chains[chainType].chainId : undefined;
              _context.next = 4;
              return this.bindings.getSigner({
                chainId: chainId
              });
            case 4:
              signer = _context.sent;
              _context.next = 7;
              return signer.getAddress();
            case 7:
              signerAddress = _context.sent;
              if (isTheSameAddress(address, signerAddress)) {
                _context.next = 10;
                break;
              }
              return _context.abrupt("return", failure(new WalletConnectionError(WalletConnectionErrorReason.WRONG_ACCOUNT)));
            case 10:
              if (!chainType) {
                _context.next = 31;
                break;
              }
              _context.prev = 11;
              _context.next = 14;
              return signer.getChainId();
            case 14:
              signerChainId = _context.sent;
              if (!(signerChainId !== chainId)) {
                _context.next = 24;
                break;
              }
              chainConfig = this.createAddEthereumChainParameter(chainType);
              _context.next = 19;
              return this.addChain(signer, chainConfig);
            case 19:
              _context.next = 21;
              return this.switchChain(signer, chainConfig);
            case 21:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 24;
                break;
              }
              return _context.abrupt("return", result);
            case 24:
              _context.next = 31;
              break;
            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](11);
              assertErrorObjectWithCode(_context.t0);
              if (!(_context.t0.code === ErrorCode.UNSUPPORTED_OPERATION)) {
                _context.next = 31;
                break;
              }
              return _context.abrupt("return", failure(new WalletConnectionError(WalletConnectionErrorReason.INCORRECT_CHAIN)));
            case 31:
              return _context.abrupt("return", success(signer));
            case 32:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[11, 26]]);
      }));
      function createSigner(_x) {
        return _createSigner.apply(this, arguments);
      }
      return createSigner;
    }()
  }, {
    key: "createAddEthereumChainParameter",
    value: function createAddEthereumChainParameter(chainType) {
      var chainConfig = this.chains[chainType];
      return {
        chainId: hexValue(chainConfig.chainId),
        chainName: chainConfig.name,
        nativeCurrency: {
          name: chainConfig.nativeCurrency.name,
          symbol: chainConfig.nativeCurrency.symbol,
          decimals: chainConfig.nativeCurrency.decimals
        },
        rpcUrls: [chainConfig.rpcUrl],
        blockExplorerUrls: [chainConfig.blockExplorer]
      };
    }
  }, {
    key: "addChain",
    value: function () {
      var _addChain = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(signer, chainConfig) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              if (!(signer.provider && signer.provider instanceof JsonRpcProvider)) {
                _context2.next = 4;
                break;
              }
              _context2.next = 4;
              return signer.provider.send('wallet_addEthereumChain', [chainConfig]);
            case 4:
              _context2.next = 8;
              break;
            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 6]]);
      }));
      function addChain(_x2, _x3) {
        return _addChain.apply(this, arguments);
      }
      return addChain;
    }()
  }, {
    key: "switchChain",
    value: function () {
      var _switchChain = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(signer, chainConfig) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              if (!(signer.provider && signer.provider instanceof JsonRpcProvider)) {
                _context3.next = 5;
                break;
              }
              _context3.next = 4;
              return signer.provider.send('wallet_switchEthereumChain', [{
                chainId: hexValue(chainConfig.chainId)
              }]);
            case 4:
              return _context3.abrupt("return", success());
            case 5:
              _context3.next = 9;
              break;
            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
            case 9:
              return _context3.abrupt("return", failure(new WalletConnectionError(WalletConnectionErrorReason.INCORRECT_CHAIN)));
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 7]]);
      }));
      function switchChain(_x4, _x5) {
        return _switchChain.apply(this, arguments);
      }
      return switchChain;
    }()
  }]);
  return SignerFactory;
}();

function createSharedDependencies(userConfig) {
  var _responders;
  var config = resolveConfig(userConfig);

  // auth api
  var anonymousApolloClient = createAuthApolloClient({
    uri: config.environment.backend,
    logger: config.logger
  });
  var authApi = new AuthApi(anonymousApolloClient);

  // storages
  var credentialsStorage = new CredentialsStorage(config.storage, config.environment.name);
  var accessTokenStorage = new AccessTokenStorage(authApi, credentialsStorage);
  var transactionStorage = createTransactionStorage(config.storage, config.environment.name);
  var inboxKeyStorage = createInboxKeyStorage(config.storage, config.environment.name);

  // apollo client
  var apolloClient = createLensApolloClient({
    connectToDevTools: config.debug,
    uri: config.environment.backend,
    accessTokenStorage: accessTokenStorage,
    pollingInterval: config.environment.timings.pollingInterval,
    logger: config.logger,
    origin: config.origin
  });

  // infrastructure
  var signerFactory = new SignerFactory(config.bindings, config.environment.chains);
  var providerFactory = new ProviderFactory(config.bindings, config.environment.chains);
  var transactionObserver = new TransactionObserver(providerFactory, apolloClient, config.environment.timings);

  // common adapters
  var transactionFactory = new TransactionFactory(transactionObserver);
  var credentialsFactory = new CredentialsFactory(authApi);
  var credentialsGateway = new CredentialsGateway(credentialsStorage, apolloClient);
  var profileCacheManager = new ProfileCacheManager(apolloClient, config.fragmentVariables);
  var publicationCacheManager = new PublicationCacheManager(apolloClient, config.fragmentVariables);
  var walletGateway = new WalletGateway(signerFactory, transactionFactory);
  var transactionGateway = new PendingTransactionGateway(transactionStorage, transactionFactory);
  var onChainRelayer = new OnChainRelayer(apolloClient, transactionFactory, config.logger);
  var momokaRelayer = new MomokaRelayer(apolloClient, transactionFactory, config.logger);
  var conversationsGateway = new DisableConversationsGateway(inboxKeyStorage);
  var responders = (_responders = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_responders, TransactionKind.ACT_ON_PUBLICATION, new RefreshPublicationResponder(publicationCacheManager)), TransactionKind.APPROVE_MODULE, new NoopResponder()), TransactionKind.BLOCK_PROFILE, new BlockProfilesResponder(profileCacheManager)), TransactionKind.CLAIM_HANDLE, new NoopResponder()), TransactionKind.CREATE_COMMENT, new NoopResponder()), TransactionKind.CREATE_POST, new NoopResponder()), TransactionKind.CREATE_PROFILE, new NoopResponder()), TransactionKind.CREATE_QUOTE, new NoopResponder()), TransactionKind.FOLLOW_PROFILE, new FollowProfileResponder(profileCacheManager)), TransactionKind.LINK_HANDLE, new LinkHandleResponder(apolloClient, profileCacheManager)), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_responders, TransactionKind.MIRROR_PUBLICATION, new NoopResponder()), TransactionKind.UNBLOCK_PROFILE, new UnblockProfilesResponder(profileCacheManager)), TransactionKind.UNFOLLOW_PROFILE, new UnfollowProfileResponder(profileCacheManager)), TransactionKind.UNLINK_HANDLE, new LinkHandleResponder(apolloClient, profileCacheManager)), TransactionKind.UPDATE_FOLLOW_POLICY, new RefreshCurrentProfileResponder(profileCacheManager)), TransactionKind.UPDATE_PROFILE_DETAILS, new RefreshCurrentProfileResponder(profileCacheManager)), TransactionKind.UPDATE_PROFILE_MANAGERS, new UpdateProfileManagersResponder(apolloClient, profileCacheManager)));
  var transactionQueuePresenter = new TransactionQueuePresenter();
  var balanceGateway = new BalanceGateway(providerFactory);
  var tokenGateway = new TokenGateway(providerFactory);

  // common interactors
  var activeWallet = new ActiveWallet(credentialsGateway, walletGateway);
  var tokenAvailability = new TokenAvailability(balanceGateway, tokenGateway, activeWallet);
  var transactionQueue = TransactionQueue.create(responders, transactionGateway, transactionQueuePresenter);

  // logout
  var logoutPresenter = new LogoutPresenter();
  var logout = new Logout(credentialsGateway, transactionGateway, conversationsGateway, logoutPresenter);

  // controllers
  var credentialsExpiryController = new CredentialsExpiryController(logout);
  credentialsExpiryController.subscribe(accessTokenStorage);
  return {
    accessTokenStorage: accessTokenStorage,
    activeWallet: activeWallet,
    apolloClient: apolloClient,
    config: config,
    credentialsFactory: credentialsFactory,
    credentialsGateway: credentialsGateway,
    inboxKeyStorage: inboxKeyStorage,
    logout: logout,
    momokaRelayer: momokaRelayer,
    onChainRelayer: onChainRelayer,
    profileCacheManager: profileCacheManager,
    providerFactory: providerFactory,
    publicationCacheManager: publicationCacheManager,
    tokenAvailability: tokenAvailability,
    transactionFactory: transactionFactory,
    transactionGateway: transactionGateway,
    transactionQueue: transactionQueue,
    walletGateway: walletGateway
  };
}

/**
 * @internal
 */

var SharedDependenciesContext = /*#__PURE__*/React.createContext(null);
/**
 * @internal
 */
function SharedDependenciesProvider(_ref) {
  var children = _ref.children,
    context = _ref.dependencies;
  return /*#__PURE__*/jsx(SharedDependenciesContext.Provider, {
    value: context,
    children: children
  });
}

/**
 * @internal DO NOT USE THIS HOOK OUTSIDE OF THE LENS SDK
 */
function useSharedDependencies() {
  var context = useContext(SharedDependenciesContext);
  invariant(context, 'Could not find Lens SDK context, ensure your code is wrapped in a <LensProvider>');
  return context;
}

var _excluded = ["children"];
/**
 * Manages the lifecycle and internal state of the Lens SDK
 *
 * @internal
 */
function BaseProvider(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(function () {
      return createSharedDependencies(props.config);
    }),
    _useState2 = _slicedToArray(_useState, 1),
    sharedDependencies = _useState2[0];
  useBootstrapController(sharedDependencies);
  return /*#__PURE__*/jsx(SharedDependenciesProvider, {
    dependencies: sharedDependencies,
    children: children
  });
}

/**
 * An deferrable task is a function that can be executed multiple times and that can be in a pending state.
 */

/**
 * The initial state of a deferred task.
 */

/**
 * The state of a deferred task during the first call.
 */

/**
 * The state of a deferred task during the n-th call
 * with data from the previous successful call.
 */

/**
 * The state of a deferred task after a successful call.
 */

/**
 * The state of a deferred task after a failed call.
 */

/**
 * The possible statuses of a deferred task.
 */

/**
 * An deferred task React Hook is a tiny wrapper around an asynchronous function
 * that provides a way to determine when the task is running and also provide access
 * the last error that occurred during the execution of the task.
 *
 * It provides a type-safe way to consume the state of the task.
 * ```ts
 * const { called, loading, data, error, execute }: UseDeferredTask<TData, TError, TInput> = useAnyDeferredTask();
 *
 *
 * if (!called) {
 *   // data === undefined
 *   // error === undefined
 *   return <p>Click the button to execute the task</p>;
 * }
 *
 * if (loading) {
 *   // data === undefined on first call
 *   // data === TData from previous successful call
 *   // error === undefined
 *   return <p>Loading...</p>;
 * }
 *
 * if (error) {
 *   // data === undefined
 *   // error === TError
 *   return <p>Something went wrong: {error.message}</p>;
 * }
 *
 * // data === TData
 * return <p>Task completed: {data}</p>;
 * ```
 */

/**
 * @internal
 */
function useDeferredTask(handler) {
  var _useState = useState({
      called: false,
      loading: false,
      data: undefined,
      error: undefined
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var execute = useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(input) {
      var result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setState(function (_ref2) {
              var data = _ref2.data;
              if (data !== undefined) {
                return {
                  called: true,
                  loading: true,
                  data: data,
                  error: undefined
                };
              }
              return {
                called: true,
                loading: true,
                data: undefined,
                error: undefined
              };
            });
            _context.prev = 1;
            _context.next = 4;
            return handler(input);
          case 4:
            result = _context.sent;
            if (result.isSuccess()) {
              setState({
                called: true,
                loading: false,
                data: result.value,
                error: undefined
              });
            } else {
              setState({
                called: true,
                loading: false,
                data: undefined,
                error: result.error
              });
            }
            return _context.abrupt("return", result);
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            setState(function (_ref3) {
              var data = _ref3.data,
                called = _ref3.called;
              return {
                loading: false,
                called: !data ? false : called,
                data: data,
                error: undefined
              };
            });
            throw _context.t0;
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 9]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [handler]);
  return _objectSpread2(_objectSpread2({}, state), {}, {
    execute: execute
  });
}

var LoginPresenter = /*#__PURE__*/function () {
  function LoginPresenter(profileCacheManager) {
    _classCallCheck(this, LoginPresenter);
    _defineProperty(this, "deferredResult", new Deferred());
    this.profileCacheManager = profileCacheManager;
  }
  _createClass(LoginPresenter, [{
    key: "present",
    value: function () {
      var _present = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(result) {
        var session, profile;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!result.isFailure()) {
                _context.next = 3;
                break;
              }
              this.deferredResult.resolve(result);
              return _context.abrupt("return");
            case 3:
              session = result.value;
              invariant(session.type !== SessionType.Anonymous, 'Unexpected anonymous session type');
              if (!(session.type === SessionType.JustWallet)) {
                _context.next = 9;
                break;
              }
              updateSessionData(session);
              this.deferredResult.resolve(success(null));
              return _context.abrupt("return");
            case 9:
              _context.next = 11;
              return this.profileCacheManager.fetchProfileById(session.profileId);
            case 11:
              profile = _context.sent;
              invariant(profile, 'Profile not found');
              updateSessionData(session);
              this.deferredResult.resolve(success(profile));
              return _context.abrupt("return");
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function present(_x) {
        return _present.apply(this, arguments);
      }
      return present;
    }()
  }, {
    key: "asResult",
    value: function asResult() {
      return this.deferredResult.promise;
    }
  }]);
  return LoginPresenter;
}();

function useLoginController() {
  var _useSharedDependencie = useSharedDependencies(),
    credentialsFactory = _useSharedDependencie.credentialsFactory,
    credentialsGateway = _useSharedDependencie.credentialsGateway,
    profileCacheManager = _useSharedDependencie.profileCacheManager,
    walletGateway = _useSharedDependencie.walletGateway;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, login;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            presenter = new LoginPresenter(profileCacheManager);
            login = new Login(walletGateway, credentialsFactory, credentialsGateway, presenter);
            _context.next = 4;
            return login.execute(request);
          case 4:
            return _context.abrupt("return", presenter.asResult());
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * `useLogin` is React Hook that allows you to login with the DiGi API.
 *
 * To login with a DiGi Profile you need to provide the Profile Id and an EVM address.
 *
 * The address can be:
 * - the EOA owner address
 * - an authorized Profile Manager address for the given Profile
 * - an EIP-1227 compliant smart wallet address (owner or authorized Profile Manager of the given Profile)
 *
 * Optionally you can login just with an EVM address. In this case the authenticated session
 * returned by {@link useSession} will be of type {@link SessionType.JustWallet} type and will not
 * contain any Profile information. The credentials associated with this session are limited to:
 * - claim a Profile with new Handle via the {@link useClaimHandle} hook
 * - collect a publication via the {@link useOpenAction} hook
 *
 * See the respective hooks documentation for more information.
 *
 * @example
 * ```tsx
 * const { execute, loading, data, error } = useLogin();
 * ```
 *
 * ## Login with a profile Id
 *
 * ```tsx
 * const { execute, loading, data, error } = useLogin();
 *
 * const address = ...
 *
 * const login = (profileId: ProfileId) => {
 *   execute({
 *     address: address,
 *     profileId: profileId,
 *   });
 * };
 *
 * if (loading) {
 *   return <div>Loading...</div>;
 * }
 *
 * if (error) {
 *   return <div>Error: {error.message}</div>;
 * }
 *
 * if (data) {
 *   return <div>Logged in as {data.profile.id}</div>;
 * }
 * ```
 *
 * ## Login with a profile handle
 *
 * Combine with `useLazyProfile` to login with Profile handle
 * ```tsx
 * const { execute: fetchProfile } = useLazyProfile();
 * const { execute: login, loading, data, error } = useLogin();
 *
 * const address = ...
 *
 * const login = async (handle: string) => {
 *   const profileResult = await fetchProfile({ forHandle: handle });
 *
 *   if (profileResult.isFailure()) {
 *     toast.error(profileResult.error.message);
 *     return;
 *   }
 *
 *   const profile = profileResult.value;
 *
 *   const loginResult = execute({
 *     address: address,
 *     profileId: profile.id,
 *   });
 *
 *   if (loginResult.isFailure()) {
 *     toast.error(loginResult.error.message);
 *     return;
 *   }
 *
 *   // continue with successful login flow for example use
 *   // your routing library to redirect the user somewhere.
 * };
 *
 * // continue as before
 * ```
 *
 * ## Login with just an EVM address
 *
 * ```tsx
 * const { execute, loading, data, error } = useLogin();
 *
 * const login = (address: string) => {
 *   const result = await execute({ address })
 *
 *
 * ```
 *
 * ## Failure scenarios
 *
 * You can handle possible failure scenarios by checking the `result` object.
 *
 * ```tsx
 * const { execute, loading, data, error } = useLogin();
 *
 * const login = (profileId: ProfileId) => {
 *   const result = await execute({
 *     address: address,
 *     profileId: profileId,
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'PendingSigningRequestError':
 *         console.log(
 *           'There is a pending signing request in your wallet. ' +
 *             'Approve it or discard it and try again.'
 *         );
 *         break;
 *
 *       case 'WalletConnectionError':
 *         console.log('There was an error connecting to your wallet', error.message);
 *         break;
 *
 *       case 'UserRejectedError':
 *         // the user decided to not sign, usually this is silently ignored by UIs
 *         break;
 *     }
 *     return;
 *   }
 *
 *   // ...
 * };
 * ```
 *
 * @category Authentication
 * @group Hooks
 */
function useLogin() {
  var login = useLoginController();
  return useDeferredTask(login);
}

function useLogoutController() {
  var _useSharedDependencie = useSharedDependencies(),
    logout = _useSharedDependencie.logout;
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return logout.execute(LogoutReason.USER_INITIATED);
        case 2:
          return _context.abrupt("return", success());
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
}

/**
 * `useLogout` is a React Hook that allows you to logout from the current session.
 *
 * @example
 * ```tsx
 * const { execute, loading } = useLogout();
 * ```
 *
 * ## Usage
 *
 * ```tsx
 * const { execute: logout } = useLogout();
 *
 * return <button onClick={logout}>Logout</button>;
 * ```
 *
 * @category Authentication
 * @group Hooks
 */
function useLogout() {
  return useDeferredTask(useLogoutController());
}

function useDiGiApolloClient() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _useSharedDependencie = useSharedDependencies(),
    client = _useSharedDependencie.apolloClient;
  return _objectSpread2(_objectSpread2({}, args), {}, {
    client: client
  });
}

/**
 * @internal
 */
function useLazyFragmentVariables() {
  var _useSharedDependencie = useSharedDependencies(),
    config = _useSharedDependencie.config;
  return function (variables) {
    // order matters here, as we want to be able to override the resolved values on a hook-by-hook basis
    // Lodash merge is used because it skips source properties that resolve to undefined
    return merge({}, config.fragmentVariables, variables);
  };
}

/**
 * @internal
 */
function useFragmentVariables(variables) {
  var _useSharedDependencie2 = useSharedDependencies(),
    config = _useSharedDependencie2.config;

  // order matters here, as we want to be able to override the resolved values on a hook-by-hook basis
  // Lodash merge is used because it skips source properties that resolve to undefined
  return merge({}, config.fragmentVariables, variables);
}

function usePreviousValue(value) {
  var ref = useRef();
  useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}

/**
 * A not authenticated user's session
 */

/**
 * A typical authenticated user's session.
 */

/**
 * An authenticated user's session with just a wallet address.
 *
 * This is currently not used, but will be used in the future.
 */

/**
 * Describes the details of a user's session.
 */

/**
 * `useSession` is a hook that lets you access the current {@link Session}
 *
 * @example
 * Use this hook to determine if the user is authenticated or not.
 * ```tsx
 * function Page() {
 *   const { data, error, loading } = useSession();
 *
 *   if (loading) return <p>Loading...</p>;
 *
 *   if (error) return <p>Something went wrong.</p>;
 *
 *   switch (data.type) {
 *     case SessionType.Anonymous:
 *       // data is a AnonymousSession
 *       return <Login />;
 *
 *     case SessionType.JustWallet:
 *       // data is a WalletOnlySession
 *       return <MyWallet address={data.address} />;
 *
 *     case SessionType.WithProfile:
 *       // data is a ProfileSession
 *       return <MyProfile profile={data.profile} />;
 *
 *     default:
 *       return <p>Something went wrong.</p>;
 *   }
 * }
 * ```
 *
 * @category Authentication
 * @group Hooks
 */
function useSession() {
  var sessionData = useSessionDataVar();
  var prevSession = usePreviousValue(sessionData);
  var trigger = (sessionData === null || sessionData === void 0 ? void 0 : sessionData.type) === SessionType.WithProfile;
  var profileId = (sessionData === null || sessionData === void 0 ? void 0 : sessionData.type) === SessionType.WithProfile ? sessionData.profileId : undefined;
  var _useProfile = useProfile$1(useDiGiApolloClient({
      variables: useFragmentVariables({
        request: {
          forProfileId: profileId
        }
      }),
      fetchPolicy: 'cache-first',
      skip: !trigger
    })),
    data = _useProfile.data,
    error = _useProfile.error,
    previousData = _useProfile.previousData;
  if (!sessionData) {
    return {
      data: undefined,
      error: undefined,
      loading: true
    };
  }
  switch (sessionData.type) {
    case SessionType.Anonymous:
      return {
        data: {
          type: SessionType.Anonymous,
          authenticated: false,
          lastLogoutReason: sessionData.lastLogoutReason
        },
        error: undefined,
        loading: false
      };
    case SessionType.JustWallet:
      return {
        data: {
          type: SessionType.JustWallet,
          authenticated: true,
          address: sessionData.address
        },
        error: undefined,
        loading: false
      };
  }
  if (error) {
    return {
      data: undefined,
      error: new UnspecifiedError(error),
      loading: false
    };
  }
  if (!data) {
    if (!prevSession) {
      // no data, no previous session, so still loading for initial data
      return {
        data: undefined,
        error: undefined,
        loading: true
      };
    }
    if (prevSession.type === SessionType.WithProfile) {
      // no data, but we have a previous session, so that means transitioning to a new profile
      if (previousData !== null && previousData !== void 0 && previousData.result) {
        return {
          data: {
            type: SessionType.WithProfile,
            authenticated: true,
            address: prevSession.address,
            profile: previousData.result
          },
          error: undefined,
          loading: false
        };
      }

      // shouldn't happen, but just in case, fallback to loading
      return {
        data: undefined,
        error: undefined,
        loading: true
      };
    }

    // transitioning from AnonymousSession to ProfileSession
    // OR from WalletOnlySession to ProfileSession
    return {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      data: prevSession,
      error: undefined,
      loading: false
    };
  }
  invariant(data.result, "Active Profile [ID:".concat(sessionData.profileId, "] data not found.\n") + 'This is likely an issue with UI state ported across environments.');
  return {
    data: {
      type: SessionType.WithProfile,
      address: sessionData.address,
      authenticated: true,
      profile: data.result
    },
    error: undefined,
    loading: false
  };
}

var CredentialsUpgrader = /*#__PURE__*/function () {
  function CredentialsUpgrader(apolloClient) {
    _classCallCheck(this, CredentialsUpgrader);
    this.apolloClient = apolloClient;
  }
  _createClass(CredentialsUpgrader, [{
    key: "upgradeCredentials",
    value: function () {
      var _upgradeCredentials = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(profileId) {
        var result, _result$data$result, accessToken, refreshToken;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.apolloClient.mutate({
                mutation: WalletAuthenticationToProfileAuthenticationDocument,
                variables: {
                  request: {
                    profileId: profileId
                  }
                }
              });
            case 2:
              result = _context.sent;
              _result$data$result = result.data.result, accessToken = _result$data$result.accessToken, refreshToken = _result$data$result.refreshToken;
              return _context.abrupt("return", new JwtCredentials(accessToken, refreshToken));
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function upgradeCredentials(_x) {
        return _upgradeCredentials.apply(this, arguments);
      }
      return upgradeCredentials;
    }()
  }]);
  return CredentialsUpgrader;
}();

var UpgradeCredentialsPresenter = /*#__PURE__*/function () {
  function UpgradeCredentialsPresenter(profileCacheManager) {
    _classCallCheck(this, UpgradeCredentialsPresenter);
    _defineProperty(this, "deferredResult", new Deferred());
    this.profileCacheManager = profileCacheManager;
  }
  _createClass(UpgradeCredentialsPresenter, [{
    key: "present",
    value: function () {
      var _present = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(result) {
        var profileId, profile;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!result.isFailure()) {
                _context.next = 3;
                break;
              }
              this.deferredResult.resolve(result);
              return _context.abrupt("return");
            case 3:
              invariant(result.value.type === SessionType.WithProfile, "You can only upgrade to session with profile");
              profileId = result.value.profileId;
              _context.next = 7;
              return this.profileCacheManager.fetchProfileById(profileId);
            case 7:
              profile = _context.sent;
              invariant(profile, 'Profile not found');
              updateSessionData(result.value);
              this.deferredResult.resolve(success(profile));
              return _context.abrupt("return");
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function present(_x) {
        return _present.apply(this, arguments);
      }
      return present;
    }()
  }, {
    key: "asResult",
    value: function asResult() {
      return this.deferredResult.promise;
    }
  }]);
  return UpgradeCredentialsPresenter;
}();

function useUpgradeCredentialsController() {
  var _useSharedDependencie = useSharedDependencies(),
    apolloClient = _useSharedDependencie.apolloClient,
    credentialsGateway = _useSharedDependencie.credentialsGateway,
    profileCacheManager = _useSharedDependencie.profileCacheManager;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, credentialsUpgrader, upgrade;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            presenter = new UpgradeCredentialsPresenter(profileCacheManager);
            credentialsUpgrader = new CredentialsUpgrader(apolloClient);
            upgrade = new UpgradeCredentials(credentialsUpgrader, credentialsGateway, presenter);
            _context.next = 5;
            return upgrade.execute(request);
          case 5:
            return _context.abrupt("return", presenter.asResult());
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * Upgrade credentials from "just wallet" to "with profile".
 *
 * @experimental This hook is experimental and may change in future versions.
 * @category Authentication
 * @group Hooks
 */
function useUpgradeCredentials() {
  var upgrade = useUpgradeCredentialsController();
  return useDeferredTask(upgrade);
}

var DismissRecommendedProfilesGateway = /*#__PURE__*/function () {
  function DismissRecommendedProfilesGateway(apolloClient) {
    _classCallCheck(this, DismissRecommendedProfilesGateway);
    this.apolloClient = apolloClient;
  }
  _createClass(DismissRecommendedProfilesGateway, [{
    key: "dismiss",
    value: function () {
      var _dismiss = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.apolloClient.mutate({
                mutation: DismissRecommendedProfilesDocument,
                variables: {
                  request: {
                    dismiss: request.profileIds
                  }
                }
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function dismiss(_x) {
        return _dismiss.apply(this, arguments);
      }
      return dismiss;
    }()
  }]);
  return DismissRecommendedProfilesGateway;
}();

var DismissRecommendedProfilesPresenter = /*#__PURE__*/function () {
  function DismissRecommendedProfilesPresenter(apolloClient) {
    _classCallCheck(this, DismissRecommendedProfilesPresenter);
    this.apolloClient = apolloClient;
  }
  _createClass(DismissRecommendedProfilesPresenter, [{
    key: "present",
    value: function () {
      var _present = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.apolloClient.refetchQueries({
                include: [ProfileRecommendationsDocument]
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function present() {
        return _present.apply(this, arguments);
      }
      return present;
    }()
  }]);
  return DismissRecommendedProfilesPresenter;
}();

function useDismissRecommendedProfilesController() {
  var _useSharedDependencie = useSharedDependencies(),
    apolloClient = _useSharedDependencie.apolloClient;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, gateway, dismiss;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            presenter = new DismissRecommendedProfilesPresenter(apolloClient);
            gateway = new DismissRecommendedProfilesGateway(apolloClient);
            dismiss = new DismissRecommendedProfiles(gateway, presenter);
            _context.next = 5;
            return dismiss.execute(request);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * Dismiss profiles from the recommended list.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```tsx
 * const { execute: dismiss, loading } = useDismissRecommendedProfiles();
 *
 * // ...
 *
 * <button onClick={() => dismiss({ profileIds: [profile.id] })} disabled={loading}>
 *   Dismiss recommendation
 * </button>
 * ```
 *
 * @category Discovery
 * @group Hooks
 */
function useDismissRecommendedProfiles() {
  var _useSession = useSession(),
    session = _useSession.data;
  var dismiss = useDismissRecommendedProfilesController();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var profileIds;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            profileIds = _ref.profileIds;
            invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to dismiss recommended profiles.');
            _context.next = 4;
            return dismiss({
              profileIds: profileIds
            });
          case 4:
            return _context.abrupt("return", success());
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
}

/**
 * A discriminated union of the possible results of a read operation with no errors.
 *
 * You can rely on the `loading` value to determine if the `data` is available.
 * When `loading` is `false`, the `data` value will be available.
 */

/**
 * A discriminated union of the possible results of a read operation with possible errors.
 *
 * You can rely on the `loading` value to determine if the `data` or `error` can be evaluated.
 *
 * If `error` is `undefined`, then `data` value will be available.
 */

/**
 * A discriminated union of the possible results of a read operation.
 */

function buildReadResult(data, error) {
  if (data !== undefined) {
    return {
      data: data,
      error: undefined,
      loading: false
    };
  }
  if (error) {
    return {
      data: undefined,
      error: new UnspecifiedError(error),
      loading: false
    };
  }
  return {
    data: undefined,
    error: undefined,
    loading: true
  };
}
/**
 * @internal
 */
function useReadResult(_ref) {
  var error = _ref.error,
    data = _ref.data;
  return buildReadResult(data === null || data === void 0 ? void 0 : data.result, error);
}

/**
 * A paginated read result.
 */

function useAdHocQuery(query) {
  var _useSharedDependencie = useSharedDependencies(),
    apolloClient = _useSharedDependencie.apolloClient;
  var _useLazyQuery = useLazyQuery(query, {
      fetchPolicy: 'no-cache',
      client: apolloClient
    }),
    _useLazyQuery2 = _slicedToArray(_useLazyQuery, 1),
    fetch = _useLazyQuery2[0];
  return fetch;
}
function usePaginatedReadResult(_ref5) {
  var error = _ref5.error,
    data = _ref5.data,
    loading = _ref5.loading,
    fetchMore = _ref5.fetchMore,
    variables = _ref5.variables,
    observable = _ref5.observable;
  var fetch = useAdHocQuery(observable.query);
  var cachedData = useRef(data).current;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    beforeCount = _useState2[0],
    setBeforeCount = _useState2[1];
  var probeForNewerResults = useCallback( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(prev) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch({
              variables: _objectSpread2(_objectSpread2({}, variables), {}, {
                cursor: prev
              })
            });
          case 2:
            response = _context2.sent;
            if (response.data) {
              setBeforeCount(response.data.result.items.length);
            }
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }(), [fetch, variables]);
  useEffect(function () {
    if (cachedData !== null && cachedData !== void 0 && cachedData.result.pageInfo.prev) {
      void probeForNewerResults(cachedData.result.pageInfo.prev);
    }
  }, [cachedData, probeForNewerResults]);
  return _objectSpread2(_objectSpread2({}, buildReadResult(data === null || data === void 0 ? void 0 : data.result.items, error)), {}, {
    beforeCount: beforeCount,
    hasMore: data !== null && data !== void 0 && data.result.pageInfo.next ? true : false,
    next: function () {
      var _next = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!loading) {
                _context3.next = 3;
                break;
              }
              console.warn('Cannot fetch next page while loading, this is a no-op.');
              return _context3.abrupt("return");
            case 3:
              if (!(!loading && data !== null && data !== void 0 && data.result.pageInfo.next)) {
                _context3.next = 6;
                break;
              }
              _context3.next = 6;
              return fetchMore({
                variables: {
                  cursor: data.result.pageInfo.next
                }
              });
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function next() {
        return _next.apply(this, arguments);
      }
      return next;
    }(),
    prev: function () {
      var _prev = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!loading) {
                _context4.next = 3;
                break;
              }
              console.warn('Cannot fetch previous page while loading, this is a no-op.');
              return _context4.abrupt("return");
            case 3:
              if (!(!loading && data !== null && data !== void 0 && data.result.pageInfo.prev)) {
                _context4.next = 7;
                break;
              }
              _context4.next = 6;
              return fetchMore({
                variables: {
                  cursor: data.result.pageInfo.prev
                }
              });
            case 6:
              setBeforeCount(0);
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function prev() {
        return _prev.apply(this, arguments);
      }
      return prev;
    }()
  });
}

/**
 * `useExploreProfiles` is a paginated hook that lets you discover new profiles based on a defined criteria
 *
 * @category Discovery
 * @group Hooks
 * @param args - {@link UseExploreProfilesArgs}
 *
 * @example
 * Explore the latest created profiles
 * ```tsx
 * import { useExploreProfiles, ExploreProfilesOrderByType } from '@digiv3rse/react';
 *
 * function ExploreProfiles() {
 *   const { data, error, loading } = useExploreProfiles({
 *      orderBy: ExploreProfilesOrderByType.LatestCreated,
 *   });
 *
 *   if (loading) return <p>Loading...</p>;
 *
 *   if (error) return <p>Error: {error.message}</p>;
 *
 *   return (
 *     <ul>
 *       {data.map((profile) => (
 *         <li key={profile.id}>{profile.handle}</li>
 *       ))}
 *     </ul>
 *   );
 * }
 * ```
 */
function useExploreProfiles() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      orderBy: ExploreProfilesOrderByType.LatestCreated
    },
    where = _ref.where,
    limit = _ref.limit,
    _ref$orderBy = _ref.orderBy,
    orderBy = _ref$orderBy === void 0 ? ExploreProfilesOrderByType.LatestCreated : _ref$orderBy;
  return usePaginatedReadResult(useExploreProfiles$1(useDiGiApolloClient({
    variables: useFragmentVariables({
      limit: limit,
      where: where,
      orderBy: orderBy
    })
  })));
}

/**
 * `useExplorePublications` is a paginated hook that lets you discover new publications base on a defined criteria
 *
 * @category Discovery
 * @group Hooks
 * @param args - {@link UseExplorePublicationsArgs}
 *
 * @example
 * Explore publications of type post with the most comments
 * ```tsx
 * import { useExplorePublications, ExplorePublicationsOrderByType, ExplorePublicationType  } from '@digiv3rse/react';
 *
 * function ExplorePublications() {
 *   const { data, error, loading } = useExplorePublications(
 *    where: {
 *        publicationTypes: [ExplorePublicationType.Post],
 *      },
 *    orderBy: ExplorePublicationsOrderByType.TopCommented,
 * );
 *
 *   if (loading) return <p>Loading...</p>;
 *
 *   if (error) return <p>Error: {error.message}</p>;
 *
 *   return (
 *     <ul>
 *       {data.map((publication) => (
 *         <li key={publication.id}>
 *            // render publication details
 *         </li>
 *       ))}
 *     </ul>
 *   );
 * }
 * ```
 */
function useExplorePublications() {
  var _where$metadata;
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      orderBy: ExplorePublicationsOrderByType.Latest
    },
    where = _ref.where,
    _ref$orderBy = _ref.orderBy,
    orderBy = _ref$orderBy === void 0 ? ExplorePublicationsOrderByType.Latest : _ref$orderBy;
  return usePaginatedReadResult(useExplorePublications$1(useDiGiApolloClient({
    variables: useFragmentVariables({
      where: where,
      orderBy: orderBy,
      statsFor: where === null || where === void 0 || (_where$metadata = where.metadata) === null || _where$metadata === void 0 ? void 0 : _where$metadata.publishedOn
    })
  })));
}

/**
 * Fetch a the feed of a given profile and filters.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @category Discovery
 * @group Hooks
 * @param args - {@link UseFeedArgs}
 *
 * @example
 * ```tsx
 * import { useFeed, ProfileId } from '@digiv3rse/react';
 *
 * function Feed({ profileId }: { profileId: ProfileId }) {
 *   const { data, loading, error } =  useFeed({
 *      where: {
 *        for: profileId,
 *      },
 *    });
 *
 *   if (loading) return <div>Loading...</div>;
 *
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <ul>
 *       {data.map((item, idx) => (
 *         <li key={`${item.root.id}-${idx}`}>
 *           // render item details
 *         </li>
 *       ))}
 *     </ul>
 *   );
 * }
 * ```
 */
function useFeed(_ref) {
  var _where$metadata;
  var where = _ref.where;
  var _useSession = useSession(),
    session = _useSession.data;
  return usePaginatedReadResult(useFeed$1(useDiGiApolloClient({
    variables: useFragmentVariables({
      where: where,
      statsFor: where === null || where === void 0 || (_where$metadata = where.metadata) === null || _where$metadata === void 0 ? void 0 : _where$metadata.publishedOn
    }),
    skip: (session === null || session === void 0 ? void 0 : session.type) !== SessionType.WithProfile
  })));
}

/**
 * Fetch a the highlights of a feed for given profile and filters.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @category Discovery
 * @group Hooks
 * @param args - {@link UseFeedHighlightsArgs}
 *
 * @example
 * ```tsx
 * import { useFeedHighlights, ProfileId } from '@digiv3rse/react';
 *
 * function Feed({ profileId }: { profileId: ProfileId }) {
 *   const { data, loading, error } =  useFeedHighlights({
 *      where: {
 *        for: profileId,
 *      },
 *    });
 *
 *   if (loading) return <div>Loading...</div>;
 *
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <ul>
 *       {data.map((item) => (
 *         <li key={item.id}>
 *           // render item details
 *         </li>
 *       ))}
 *     </ul>
 *   );
 * }
 * ```
 */
function useFeedHighlights(_ref) {
  var _where$metadata;
  var where = _ref.where;
  var _useSession = useSession(),
    session = _useSession.data;
  return usePaginatedReadResult(useFeedHighlights$1(useDiGiApolloClient({
    variables: useFragmentVariables({
      where: where,
      statsFor: where === null || where === void 0 || (_where$metadata = where.metadata) === null || _where$metadata === void 0 ? void 0 : _where$metadata.publishedOn
    }),
    skip: (session === null || session === void 0 ? void 0 : session.type) !== SessionType.WithProfile
  })));
}

/**
 * {@link useRecommendedProfiles} hook arguments
 */

/**
 * `useRecommendedProfiles` is a paginated hook that lets you fetch recommended profiles.
 *
 * @category Discovery
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useRecommendedProfiles({
 *   for: '0x123',
 * });
 * ```
 */
function useRecommendedProfiles(args) {
  return usePaginatedReadResult(useProfileRecommendations(useDiGiApolloClient({
    variables: useFragmentVariables(args)
  })));
}

/**
 * `useSearchProfiles` is a paginated hook that lets you search for profiles based on a defined criteria
 *
 * @category Discovery
 * @group Hooks
 * @param args - {@link UseSearchProfilesArgs}
 *
 * @example
 * ```tsx
 * function SearchProfiles() {
 *   const { data, error, loading } = useSearchProfiles({ query: 'foo' });
 *
 *   if (loading) return <p>Loading...</p>;
 *
 *   if (error) return <p>Error: {error.message}</p>;
 *
 *   return (
 *     <ul>
 *       {data.map((profile) => (
 *         <li key={profile.id}>{profile.handle}</li>
 *       ))}
 *     </ul>
 *   );
 * }
 * ```
 */
function useSearchProfiles(args) {
  return usePaginatedReadResult(useSearchProfiles$1(useDiGiApolloClient({
    variables: useFragmentVariables(args)
  })));
}

/**
 * Search for publications based on a defined criteria
 *
 * @category Discovery
 * @group Hooks
 * @param args - {@link UseSearchPublicationsArgs}
 *
 * @example
 * Search for publications with content that contains "foo"
 * ```tsx
 * import { useSearchPublications } from '@digiv3rse/react';
 *
 * function SearchPublication() {
 *   const { data, error, loading } = useSearchPublications({ query: 'foo' });
 *
 *   if (loading) return <p>Loading...</p>;
 *
 *   if (error) return <p>Error: {error.message}</p>;
 *
 *   return (
 *     <ul>
 *       {data.map((publication) => (
 *         <li key={publication.id}>
 *            // render publication details
 *         </li>
 *       ))}
 *     </ul>
 *   );
 * }
 * ```
 *
 * @example
 * Search for audio post publications with content that matches a query
 * ```tsx
 * import { useSearchPublications } from '@digiv3rse/react';
 *
 * function SearchPublication() {
 *   const { data, error, loading } = useSearchPublications({
 *      query,
 *      where: {
 *        publicationTypes: [SearchPublicationType.Post],
 *        metadata: {
 *          mainContentFocus: [PublicationMetadataMainFocusType.Audio],
 *        },
 *      },
 *    });
 *
 *   if (loading) return <p>Loading...</p>;
 *
 *   if (error) return <p>Error: {error.message}</p>;
 *
 *   return (
 *     <ul>
 *       {data.map((publication) => (
 *         <li key={publication.id}>
 *            // render publication details
 *         </li>
 *       ))}
 *     </ul>
 *   );
 * }
 * ```
 */
function useSearchPublications(_ref) {
  var _where$metadata;
  var query = _ref.query,
    limit = _ref.limit,
    where = _ref.where;
  return usePaginatedReadResult(useSearchPublications$1(useDiGiApolloClient({
    variables: useFragmentVariables({
      query: query,
      limit: limit,
      where: where,
      statsFor: where === null || where === void 0 || (_where$metadata = where.metadata) === null || _where$metadata === void 0 ? void 0 : _where$metadata.publishedOn
    })
  })));
}

/**
 * Returns the current access token.
 *
 * @experimental This API is VERY experimental and might change in the future.
 * @defaultValue `null` if not authenticated.
 */
function useAccessToken() {
  var _useSharedDependencie = useSharedDependencies(),
    accessTokenStorage = _useSharedDependencie.accessTokenStorage;
  var _useState = useState(function () {
      return accessTokenStorage.getAccessToken();
    }),
    _useState2 = _slicedToArray(_useState, 2),
    token = _useState2[0],
    setToken = _useState2[1];
  useEffect(function () {
    return accessTokenStorage.onRefresh(function () {
      setToken(accessTokenStorage.getAccessToken());
    });
  }, [accessTokenStorage]);
  return token;
}

// eslint-disable-next-line no-restricted-imports

/**
 * Returns the internal Apollo Client instance.
 *
 * @example
 * ```
 * const client = useApolloClient();
 * ```
 *
 * If you already signed in, the instance will be already include Access Token credentials in its requests.
 *
 * The internal Apollo Client instance is configured so that it automatically renews credentials (both Access Token and Refresh Token) when they expire.
 * This is done transparently, so you don't need to worry about it.
 *
 * Perform a query
 * ```ts
 * const client = useApolloClient();
 * const { data, loading, error } = useQuery(gql`<your query>`, { client })
 * ```
 *
 * @experimental This hook is experimental and may change in the future.
 * @category Misc
 * @group Hooks
 */
function useApolloClient() {
  var _useSharedDependencie = useSharedDependencies(),
    apolloClient = _useSharedDependencie.apolloClient;
  return apolloClient;
}

/**
 * Returns the {@link IStorageProvider} or {@link IObservableStorageProvider} instance defined in DiGiConfig.
 */
function useStorage() {
  var _useSharedDependencie = useSharedDependencies(),
    config = _useSharedDependencie.config;
  return config.storage;
}

/**
 * {@link useCurrencies} hook arguments
 */

/**
 * `useCurrencies` is a paginated hook that lets you fetch ERC20 tokens that are enabled on the DiGi protocol.
 *
 * **Pro-tip**: use this hook to populate a dropdown menu of currencies to choose from
 * to support for example a collect open action form or setup follow policy fees.
 *
 * @category Misc
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useCurrencies();
 * ```
 *
 * @example
 * ```tsx
 * function CurrencySelector({ onChange }: { onChange: (currency: Erc20) => void }) {
 *   const { data: currencies, error, loading } = useCurrencies();
 *
 *   if (loading) return <p>Loading...</p>;
 *
 *   if (error) return <p>Error: {error.message}</p>;
 *
 *   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
 *     const currency = currencies.find((c) => c.symbol === event.target.value);
 *     if (currency) onChange(currency);
 *   };
 *
 *   return (
 *     <select onChange={handleChange}>
 *       {currencies.map((c) => (
 *         <option key={c.address} value={c.symbol}>
 *           {c.name}
 *         </option>
 *       ))}
 *     </select>
 *   );
 * }
 * ```
 */
function useCurrencies() {
  var _result$data;
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var result = usePaginatedReadResult(useCurrencies$1(useDiGiApolloClient({
    variables: args
  })));
  if (result.loading) {
    return result;
  }
  if (result.error) {
    return result;
  }
  return _objectSpread2(_objectSpread2({}, result), {}, {
    data: ((_result$data = result.data) !== null && _result$data !== void 0 ? _result$data : []).map(function (currency) {
      return erc20({
        name: currency.name,
        decimals: currency.decimals,
        symbol: currency.symbol,
        address: currency.contract.address,
        chainType: chainType(currency.contract.chainId)
      });
    })
  });
}

/**
 * Fetch all invited profiles.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```tsx
 * const { data, error, loading } = useInvitedProfiles();
 * ```
 *
 * @category Misc
 * @group Hooks
 */
function useInvitedProfiles() {
  var _useSession = useSession(),
    session = _useSession.data;
  invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to use this query. Use `useLogin` hook to authenticate.');
  return useReadResult(useInvitedProfiles$1(useDiGiApolloClient({
    variables: useFragmentVariables()
  })));
}

var InviteWalletsGateway = /*#__PURE__*/function () {
  function InviteWalletsGateway(apolloClient) {
    _classCallCheck(this, InviteWalletsGateway);
    this.apolloClient = apolloClient;
  }
  _createClass(InviteWalletsGateway, [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        var _this = this;
        var invites, invalid;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              invites = request.wallets.map(function (wallet) {
                return {
                  address: wallet
                };
              });
              _context2.next = 3;
              return Promise.all(invites.map( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(invite) {
                  var wasInvited;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _this.wasWalletInvited(invite.address);
                      case 2:
                        wasInvited = _context.sent;
                        return _context.abrupt("return", wasInvited ? invite.address : undefined);
                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x2) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 3:
              invalid = _context2.sent;
              return _context2.abrupt("return", invites.filter(function (invite) {
                return !invalid.includes(invite.address);
              }));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function create(_x) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "invite",
    value: function () {
      var _invite = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(invites) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.apolloClient.mutate({
                mutation: InviteDocument,
                variables: {
                  request: {
                    invites: invites.map(function (i) {
                      return i.address;
                    })
                  }
                }
              });
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function invite(_x3) {
        return _invite.apply(this, arguments);
      }
      return invite;
    }()
  }, {
    key: "wasWalletInvited",
    value: function () {
      var _wasWalletInvited = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(address) {
        var result;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.apolloClient.query({
                query: ProfileAlreadyInvitedDocument,
                variables: {
                  request: {
                    "for": address
                  }
                }
              });
            case 2:
              result = _context4.sent;
              return _context4.abrupt("return", result.data.result);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function wasWalletInvited(_x4) {
        return _wasWalletInvited.apply(this, arguments);
      }
      return wasWalletInvited;
    }()
  }]);
  return InviteWalletsGateway;
}();

var InviteWalletsPresenter = /*#__PURE__*/function () {
  function InviteWalletsPresenter(apolloClient, profileCacheManager) {
    _classCallCheck(this, InviteWalletsPresenter);
    _defineProperty(this, "deferredResult", new Deferred());
    this.apolloClient = apolloClient;
    this.profileCacheManager = profileCacheManager;
  }
  _createClass(InviteWalletsPresenter, [{
    key: "present",
    value: function () {
      var _present = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(result) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.deferredResult.resolve(result);
              if (!result.isFailure()) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return", result);
            case 3:
              _context.next = 5;
              return Promise.all([this.profileCacheManager.refreshCurrentProfile(), this.apolloClient.refetchQueries({
                include: [InvitedProfilesDocument]
              })]);
            case 5:
              return _context.abrupt("return", success());
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function present(_x) {
        return _present.apply(this, arguments);
      }
      return present;
    }()
  }, {
    key: "asResult",
    value: function asResult() {
      return this.deferredResult.promise;
    }
  }]);
  return InviteWalletsPresenter;
}();

function useInviteWalletsController() {
  var _useSharedDependencie = useSharedDependencies(),
    apolloClient = _useSharedDependencie.apolloClient,
    profileCacheManager = _useSharedDependencie.profileCacheManager;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, gateway, inviteWallets;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            presenter = new InviteWalletsPresenter(apolloClient, profileCacheManager);
            gateway = new InviteWalletsGateway(apolloClient);
            inviteWallets = new InviteWallets(gateway, gateway, presenter);
            _context.next = 5;
            return inviteWallets.invite(request);
          case 5:
            return _context.abrupt("return", presenter.asResult());
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * Invite one or many wallet addresses to join DiGi Protocol.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```tsx
 * const { called, loading, data, error, execute: invite } = useInviteWallets();
 *
 * invite({
 *   wallets: ['0x1234567890123456789012345678901234567890'],
 * })
 * ```
 *
 * @category Misc
 * @group Hooks
 */
function useInviteWallets() {
  var _useSession = useSession(),
    session = _useSession.data;
  var invite = useInviteWalletsController();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to use this operation. Use `useLogin` hook to authenticate.');
            _context.next = 3;
            return invite(args);
          case 3:
            result = _context.sent;
            if (!result.isFailure()) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return", result);
          case 6:
            return _context.abrupt("return", success());
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}

function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

var NotFoundError = /*#__PURE__*/function (_Error) {
  _inherits(NotFoundError, _Error);
  function NotFoundError(message) {
    var _this;
    _classCallCheck(this, NotFoundError);
    _this = _callSuper(this, NotFoundError, [message]);
    _defineProperty(_assertThisInitialized(_this), "name", 'NotFoundError');
    return _this;
  }
  return _createClass(NotFoundError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

/**
 * {@link useModuleMetadata} hook arguments
 */

/**
 * Fetch a DiGi Module's metadata.
 *
 * @example
 * ```tsx
 * const { data, error, loading } = useModuleMetadata();
 * ```
 *
 * @category Modules
 * @group Hooks
 */
function useModuleMetadata(args) {
  return useReadResult(useModuleMetadata$1(useDiGiApolloClient({
    variables: {
      request: args
    }
  })));
}
/**
 * `useLazyModuleMetadata` is a lazy version of {@link useModuleMetadata} React Hook.
 *
 * This hook will not fetch the metadata until the returned function is called.
 *
 *
 * @example
 * ```ts
 * const { called, data, error, loading, execute } = useLazyModuleMetadata();
 * ```
 *
 * @experimental This hook is experimental and may change in the future.
 * @category Modules
 * @group Hooks
 */
function useLazyModuleMetadata() {
  var _useModuleMetadataLaz = useModuleMetadataLazyQuery(useDiGiApolloClient({
      fetchPolicy: 'cache-and-network'
    })),
    _useModuleMetadataLaz2 = _slicedToArray(_useModuleMetadataLaz, 1),
    fetch = _useModuleMetadataLaz2[0];
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _yield$fetch, data, error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch({
              variables: {
                request: args
              }
            });
          case 2:
            _yield$fetch = _context.sent;
            data = _yield$fetch.data;
            error = _yield$fetch.error;
            if (!error) {
              _context.next = 7;
              break;
            }
            return _context.abrupt("return", failure(new UnspecifiedError(error)));
          case 7:
            if (data !== null && data !== void 0 && data.result) {
              _context.next = 9;
              break;
            }
            return _context.abrupt("return", failure(new NotFoundError("module metadata for: ".concat(args.implementation))));
          case 9:
            return _context.abrupt("return", success(data.result));
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

/**
 * `useResolveAddress` is a hook that resolves n EVM address from a DiGi Handle.
 *
 * This hook will not execute until the returned function is called.
 *
 * @example
 * ```ts
 * const { called,  error, loading, execute } = useResolveAddress();
 * ```
 *
 * Simple example:
 * ```ts
 * const { called, error, loading, execute } = useResolveAddress();
 *
 * const callback = async () => {
 *   const address = await execute({ handle: 'digi/wagmi' });
 *
 *   console.log(address);
 * }
 * ```
 *
 * @experimental This hook is experimental and may change in the future.
 * @category Handle
 * @group Hooks
 */
function useResolveAddress() {
  var _useHandleToAddressLa = useHandleToAddressLazyQuery(useDiGiApolloClient()),
    _useHandleToAddressLa2 = _slicedToArray(_useHandleToAddressLa, 1),
    fetch = _useHandleToAddressLa2[0];
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var _yield$fetch, data, error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch({
              variables: {
                request: request
              }
            });
          case 2:
            _yield$fetch = _context.sent;
            data = _yield$fetch.data;
            error = _yield$fetch.error;
            if (!error) {
              _context.next = 7;
              break;
            }
            return _context.abrupt("return", failure(new UnspecifiedError(error)));
          case 7:
            invariant(data, 'Data must be defined');
            return _context.abrupt("return", success(data.result));
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

var HandleNotAvailableError = /*#__PURE__*/function (_Error) {
  _inherits(HandleNotAvailableError, _Error);
  function HandleNotAvailableError(handle) {
    var _this;
    _classCallCheck(this, HandleNotAvailableError);
    _this = _callSuper(this, HandleNotAvailableError, ["Handle \"".concat(handle, "\" is already taken")]);
    _defineProperty(_assertThisInitialized(_this), "name", 'HandleNotAvailableError');
    return _this;
  }
  return _createClass(HandleNotAvailableError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var InvalidHandleError = /*#__PURE__*/function (_Error2) {
  _inherits(InvalidHandleError, _Error2);
  function InvalidHandleError(localName) {
    var _this2;
    _classCallCheck(this, InvalidHandleError);
    _this2 = _callSuper(this, InvalidHandleError, ["Handle \"".concat(localName, "\" is not valid")]);
    _defineProperty(_assertThisInitialized(_this2), "name", 'InvalidHandleError');
    return _this2;
  }
  return _createClass(InvalidHandleError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Validate the proposed new handle, its format and availability.
 *
 * This hook will not execute until the returned function is called.
 *
 * @example
 * ```ts
 * const { called,  error, loading, execute } = useValidateHandle();
 * ```
 *
 * Simple example:
 * ```ts
 * const { called, error, loading, execute } = useValidateHandle();
 *
 * const callback = async () => {
 *   const result = await execute({ localName: 'wagmi' });
 *
 *   if (result.isFailure()) {
 *     console.error(result.error.message); // handle not valid or already taken
 *     return;
 *   }
 *
 *   if (result.value === true) {
 *     // success - handle is available
 *   }
 * }
 * ```
 *
 * @experimental This hook is experimental and may change in the future.
 * @category Handle
 * @group Hooks
 */
function useValidateHandle() {
  var _useHandleToAddressLa = useHandleToAddressLazyQuery(useDiGiApolloClient()),
    _useHandleToAddressLa2 = _slicedToArray(_useHandleToAddressLa, 1),
    fetch = _useHandleToAddressLa2[0];
  var _useSharedDependencie = useSharedDependencies(),
    environment = _useSharedDependencie.config.environment;
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var handle, _yield$fetch, data, error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (isValidHandle(request.localName)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", failure(new InvalidHandleError(request.localName)));
          case 2:
            handle = environment.handleResolver(request.localName);
            _context.next = 5;
            return fetch({
              variables: {
                request: {
                  handle: handle
                }
              }
            });
          case 5:
            _yield$fetch = _context.sent;
            data = _yield$fetch.data;
            error = _yield$fetch.error;
            if (!error) {
              _context.next = 10;
              break;
            }
            return _context.abrupt("return", failure(new UnspecifiedError(error)));
          case 10:
            invariant(data, 'Data must be defined');
            if (!data.result) {
              _context.next = 13;
              break;
            }
            return _context.abrupt("return", failure(new HandleNotAvailableError(handle)));
          case 13:
            return _context.abrupt("return", success());
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

/**
 * {@link useWasWalletInvited} hook arguments
 */

/**
 * Check if a wallet was already invited.
 *
 * @example
 * ```tsx
 * const { data, error, loading } = useWasWalletInvited({
 *   for: '0x1234567890123456789012345678901234567890',
 * });
 * ```
 *
 * @category Wallet
 * @group Hooks
 */
function useWasWalletInvited(args) {
  return useReadResult(useProfileAlreadyInvited(useDiGiApolloClient({
    variables: {
      request: args
    }
  })));
}

/**
 * Check if a wallet was already invited in a lazy way.
 *
 * This hook will not execute until the returned function is called.
 *
 * @experimental This hook is experimental and may change in the future.
 * @example
 * ```ts
 * const { called, data, error, loading, execute } = useLazyWasWalletInvited();
 *
 * const callback = async () => {
 *   const result = await execute({ for: '0x1234567890123456789012345678901234567890' });
 *
 *   if (result.isFailure()) {
 *     toast.error(result.error.message);
 *     return;
 *   }
 *
 *   const wasInvited = result.value;
 *
 *   // continue
 * }
 * ```
 *
 * @category Wallet
 * @group Hooks
 */
function useLazyWasWalletInvited() {
  var _useProfileAlreadyInv = useProfileAlreadyInvitedLazyQuery(useDiGiApolloClient()),
    _useProfileAlreadyInv2 = _slicedToArray(_useProfileAlreadyInv, 1),
    fetch = _useProfileAlreadyInv2[0];
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _yield$fetch, data, error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch({
              variables: {
                request: args
              }
            });
          case 2:
            _yield$fetch = _context.sent;
            data = _yield$fetch.data;
            error = _yield$fetch.error;
            if (!error) {
              _context.next = 7;
              break;
            }
            return _context.abrupt("return", failure(new UnspecifiedError(error)));
          case 7:
            invariant(data, 'Data must be defined');
            return _context.abrupt("return", success(data.result));
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

/**
 * Fetch a paginated list of notifications for the authenticated profile matching given criteria.
 *
 * @category Notifications
 * @group Hooks
 * @param args - {@link UseNotificationsArgs}
 *
 * @example
 * Fetch all notifications.
 * ```tsx
 * const { data, error, loading } = useNotifications();
 * ```
 *
 * @example
 * Fetch all follow notifications from a specific app.
 * ```tsx
 * import { useNotifications, NotificationType, appId } from '@digiv3rse/react';
 *
 * const { data, error, loading } = useNotifications({
 *  where: {
 *    publishedOn: [appId('any-app-id')],
 *    notificationTypes: [NotificationType.Followed],
 *  },
 * });
 *
 * ```
 * @example
 * Fetch all quotes notifications from high-signal accounts.
 * ```tsx
 * import { useNotifications, NotificationType, appId } from '@digiv3rse/react';
 *
 * const { data, error, loading } = useNotifications({
 *  where: {
 *    notificationTypes: [NotificationType.Quote],
 *    highSignal: true,
 *  },
 * });
 * ```
 */
function useNotifications() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    where = _ref.where;
  return usePaginatedReadResult(useNotifications$1(useDiGiApolloClient({
    variables: useFragmentVariables({
      where: where,
      statsFor: where === null || where === void 0 ? void 0 : where.publishedOn
    })
  })));
}

/**
 * {@link useBlockedProfiles} hook arguments
 */

/**
 * Fetch profiles that the authenticated profile has blocked.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @category Profiles
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useBlockedProfiles();
 * ```
 */
function useBlockedProfiles() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _useSession = useSession(),
    session = _useSession.data;
  invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated.');
  invariant(session.type === SessionType.WithProfile, 'You must be authenticated with a profile to use this query. Use `useLogin` hook to authenticate.');
  return usePaginatedReadResult(useWhoHaveBlocked(useDiGiApolloClient({
    variables: useFragmentVariables(args)
  })));
}

/**
 * {@link useLazyProfile} callback hook arguments
 */

/**
 * `useLazyProfile` is a lazy version of {@link useProfile} React Hook.
 *
 * This hook will not fetch the profile until the returned function is called.
 *
 * This hook is intended to enable more complex use cases, the vast majority of
 * use cases should use {@link useProfile} instead.
 *
 * @example
 * ```ts
 * const { called, data, error, loading, execute } = useLazyProfile();
 * ```
 *
 * @experimental This hook is experimental and may change in the future.
 *
 * ```ts
 * const { called, data, error, loading, execute } = useLazyProfile();
 *
 * const callback = async () => {
 *   const result = await execute({ forProfileId: profileId });
 *
 *   if (result.isFailure()) {
 *     toast.error(result.error.message);
 *     return;
 *   }
 *
 *   const profile = result.value;
 *
 *   // do something with profile
 * }
 * ```
 *
 * @category Profiles
 * @group Hooks
 */
function useLazyProfile() {
  var _useProfileLazyQuery = useProfileLazyQuery(useDiGiApolloClient({
      fetchPolicy: 'cache-and-network'
    })),
    _useProfileLazyQuery2 = _slicedToArray(_useProfileLazyQuery, 1),
    fetch = _useProfileLazyQuery2[0];
  var fill = useLazyFragmentVariables();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _yield$fetch, data, error, _args$forProfileId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch({
              variables: fill({
                request: args
              })
            });
          case 2:
            _yield$fetch = _context.sent;
            data = _yield$fetch.data;
            error = _yield$fetch.error;
            if (!error) {
              _context.next = 7;
              break;
            }
            return _context.abrupt("return", failure(new UnspecifiedError(error)));
          case 7:
            if (data !== null && data !== void 0 && data.result) {
              _context.next = 9;
              break;
            }
            return _context.abrupt("return", failure(new NotFoundError("profile for: ".concat(String((_args$forProfileId = args.forProfileId) !== null && _args$forProfileId !== void 0 ? _args$forProfileId : args.forHandle)))));
          case 9:
            return _context.abrupt("return", success(data.result));
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

/**
 * {@link useLazyProfiles} callback hook arguments
 */

/**
 * `useLazyProfiles` is a lazy version of {@link useProfiles} React Hook.
 *
 * This version doesn't support pagination!
 *
 * This hook will not fetch profiles until the returned function is called.
 *
 * @experimental This hook is experimental and may change in the future.
 * @example
 * ```ts
 * const { called, data, error, loading, execute } = useLazyProfiles();
 *
 * const callback = async () => {
 *   const result = await execute({
 *     where: {
 *       profileIds: ['0x01', '0x02'],
 *     },
 *   });
 *
 *   if (result.isFailure()) {
 *     toast.error(result.error.message);
 *     return;
 *   }
 *
 *   const profiles = result.value;
 *
 *   // do something with the profiles
 * }
 * ```
 *
 * @category Profiles
 * @group Hooks
 */
function useLazyProfiles() {
  var _useProfilesLazyQuery = useProfilesLazyQuery(useDiGiApolloClient({
      fetchPolicy: 'no-cache'
    })),
    _useProfilesLazyQuery2 = _slicedToArray(_useProfilesLazyQuery, 1),
    fetch = _useProfilesLazyQuery2[0];
  var fill = useLazyFragmentVariables();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _yield$fetch, data, error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch({
              variables: fill(args)
            });
          case 2:
            _yield$fetch = _context.sent;
            data = _yield$fetch.data;
            error = _yield$fetch.error;
            if (!error) {
              _context.next = 7;
              break;
            }
            return _context.abrupt("return", failure(new UnspecifiedError(error)));
          case 7:
            invariant(data, 'Data must be defined');
            return _context.abrupt("return", success(data.result.items));
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

/**
 * {@link useMutualFollowers} hook arguments
 */

/**
 * `useMutualFollowers` is a paginated hook that lets you fetch mutual followers between two profiles.
 *
 * @category Profiles
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useMutualFollowers({
 *   observer: '0x123',
 *   viewing: '0x456',
 * });
 * ```
 */
function useMutualFollowers(args) {
  return usePaginatedReadResult(useMutualFollowers$1(useDiGiApolloClient({
    variables: useFragmentVariables(args)
  })));
}

/**
 * {@link useProfile} hook arguments
 */

/**
 * `useProfile` is a React hook that allows you to fetch a profile from the DiGi API.
 *
 * @example
 * ```ts
 * const { data, error, loading } = useProfile({ forProfileId: '0x04' });
 * ```
 *
 * Get a profile by handle:
 * ```ts
 * const { data, error, loading } = useProfile({
 *   forHandle: 'digi/stani',
 * });
 * ```
 *
 * Get a profile by Id:
 * ```ts
 * const { data, error, loading } = useProfile({
 *   forProfileId: '0x04',
 * });
 * ```
 *
 * @category Profiles
 * @group Hooks
 *
 * @param args - {@link UseProfileArgs}
 */
function useProfile(_ref) {
  var forHandle = _ref.forHandle,
    forProfileId = _ref.forProfileId;
  invariant(forProfileId === undefined || forHandle === undefined, "Only one of 'forProfileId' or 'forHandle' should be provided to 'useProfile' hook");
  var _useReadResult = useReadResult(useProfile$1(useDiGiApolloClient({
      variables: useFragmentVariables({
        request: _objectSpread2(_objectSpread2({}, forHandle && {
          forHandle: forHandle
        }), forProfileId && {
          forProfileId: forProfileId
        })
      }),
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first'
    }))),
    data = _useReadResult.data,
    error = _useReadResult.error,
    loading = _useReadResult.loading;
  if (loading) {
    return {
      data: undefined,
      error: undefined,
      loading: true
    };
  }
  if (error) {
    return {
      data: undefined,
      error: error,
      loading: false
    };
  }
  if (data === null) {
    return {
      data: undefined,
      error: new NotFoundError(forProfileId ? "Profile with id: ".concat(forProfileId) : "Profile with handle: ".concat(forHandle ? forHandle : '')),
      loading: false
    };
  }
  return {
    data: data,
    error: undefined,
    loading: false
  };
}

/**
 * {@link useProfileActionHistory} hook arguments
 */

/**
 * `useProfileActionHistory` is a paginated hook that lets you fetch profile action history.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @category Profiles
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useProfileActionHistory();
 * ```
 */
function useProfileActionHistory() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _useSession = useSession(),
    session = _useSession.data;
  return usePaginatedReadResult(useProfileActionHistory$1(useDiGiApolloClient({
    variables: args,
    skip: (session === null || session === void 0 ? void 0 : session.type) !== SessionType.WithProfile
  })));
}

/**
 * {@link useProfileFollowers} hook arguments
 */

/**
 * `useProfileFollowers` is a paginated hook that lets you fetch profiles that follow a requested profile.
 *
 * @category Profiles
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useProfileFollowers({
 *   of: '0x123',
 * });
 * ```
 */
function useProfileFollowers(args) {
  return usePaginatedReadResult(useFollowers(useDiGiApolloClient({
    variables: useFragmentVariables(args)
  })));
}

/**
 * {@link useProfileFollowing} hook arguments
 */

/**
 * `useProfileFollowing` is a paginated hook that lets you fetch profiles that are followed by a requested profile.
 *
 * @category Profiles
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useProfileFollowing({
 *   for: '0x123',
 * });
 * ```
 */
function useProfileFollowing(args) {
  return usePaginatedReadResult(useFollowing(useDiGiApolloClient({
    variables: useFragmentVariables(args)
  })));
}

/**
 * `useProfileManagers` is a paginated React hook that lets you fetch profile manager details for a given profile.
 *
 * @example
 * Use this hook in combination with the ProfileSession returned by the {@link useSession} to fetch the profile managers for the logged-in Profile
 * ```tsx
 * function ProfileManagers({ session }: { session: ProfileSession }) {
 *   const { data: managers, error, loading } = useProfileManagers({
 *     for: session.profile.id,
 *   });
 *
 *   if (loading) {
 *     return <p>Loading...</p>;
 *   }
 *
 *   if (error) {
 *     return <p>Error: {error.message}</p>;
 *   }
 *
 *   return (
 *     <ul>
 *       {managers.map(({ address }) => (
 *         <li key={address}>{address}</li>
 *       ))}
 *     </ul>
 *   );
 * }
 * ```
 *
 * @category Profiles
 * @group Hooks
 */
function useProfileManagers(args) {
  return usePaginatedReadResult(useProfileManagers$1(useDiGiApolloClient({
    variables: {
      request: args
    }
  })));
}

/**
 * {@link useProfiles} hook arguments
 */

/**
 * `useProfiles` is a paginated hook that lets you fetch profiles based on a set of filters.
 *
 * @example
 * ```ts
 * const { data, loading, error } = useProfiles({
 * ```
 *
 * @category Profiles
 * @group Hooks
 *
 * @example
 * Fetch profiles by handles
 * ```tsx
 * const { data, loading, error } = useProfiles({
 *   where: {
 *     handles: ['test/@firstprofile'],
 *   },
 * });
 * ```
 *
 * @example
 * Fetch profiles by ids
 * ```tsx
 * const { data, loading, error } = useProfiles({
 *   where: {
 *     profileIds: [profileId('0x01'), profileId('0x02')],
 *   },
 * });
 * ```
 *
 * @example
 * Fetch profiles by owner addresses
 * ```tsx
 * const { data, loading, error } = useProfiles({
 *   where: {
 *     ownedBy: ['0xe3D871d389BF78c091E29deCe83200E9d6B2B0C2'],
 *   },
 * });
 * ```
 *
 * @example
 * Fetch profiles who commented on a publication
 * ```tsx
 * const { data, loading, error } = useProfiles({
 *   where: {
 *     whoCommentedOn: publicationId('0x1b-0x012b'),
 *   },
 * });
 * ```
 *
 * @example
 * Fetch profiles who mirrored a publication
 * ```tsx
 * const { data, loading, error } = useProfiles({
 *   where: {
 *     whoMirroredPublication: publicationId('0x1b-0x012b'),
 *   },
 * });
 * ```
 *
 * @example
 * Fetch profiles who quoted a publication
 * ```tsx
 * const { data, loading, error } = useProfiles({
 *   where: {
 *     whoQuotedPublication: publicationId('0x1b-0x012b'),
 *   },
 * });
 * ```
 */
function useProfiles(args) {
  return usePaginatedReadResult(useProfiles$1(useDiGiApolloClient({
    variables: useFragmentVariables(args)
  })));
}

var PromiseResultPresenter = /*#__PURE__*/function () {
  function PromiseResultPresenter() {
    _classCallCheck(this, PromiseResultPresenter);
    _defineProperty(this, "deferredResult", new Deferred());
  }
  _createClass(PromiseResultPresenter, [{
    key: "present",
    value: function present(result) {
      this.deferredResult.resolve(result);
    }
  }, {
    key: "asResult",
    value: function asResult() {
      return this.deferredResult.promise;
    }
  }]);
  return PromiseResultPresenter;
}();

var mapReportReasonToInput$1 = function mapReportReasonToInput(reason) {
  switch (reason) {
    case ProfileReportReason.IMPERSONATION:
      return {
        fraudReason: {
          reason: ProfileReportingReason.Fraud,
          subreason: ProfileReportingFraudSubreason.Impersonation
        }
      };
    case ProfileReportReason.FRAUD_SOMETHING_ELSE:
      return {
        fraudReason: {
          reason: ProfileReportingReason.Fraud,
          subreason: ProfileReportingFraudSubreason.SomethingElse
        }
      };
    case ProfileReportReason.REPETITIVE:
      return {
        spamReason: {
          reason: ProfileReportingReason.Spam,
          subreason: ProfileReportingSpamSubreason.Repetitive
        }
      };
    case ProfileReportReason.SPAM_SOMETHING_ELSE:
      return {
        spamReason: {
          reason: ProfileReportingReason.Spam,
          subreason: ProfileReportingSpamSubreason.SomethingElse
        }
      };
    default:
      assertNever(reason, "Unknown report type");
  }
};
var ReportProfileGateway = /*#__PURE__*/function () {
  function ReportProfileGateway(apolloClient) {
    _classCallCheck(this, ReportProfileGateway);
    this.apolloClient = apolloClient;
  }
  _createClass(ReportProfileGateway, [{
    key: "report",
    value: function () {
      var _report = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var additionalComments, profileId, reason;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              additionalComments = _ref.additionalComments, profileId = _ref.profileId, reason = _ref.reason;
              _context.next = 3;
              return this.apolloClient.mutate({
                mutation: ReportProfileDocument,
                variables: {
                  request: {
                    "for": profileId,
                    additionalComments: additionalComments,
                    reason: _objectSpread2({}, mapReportReasonToInput$1(reason))
                  }
                }
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function report(_x) {
        return _report.apply(this, arguments);
      }
      return report;
    }()
  }]);
  return ReportProfileGateway;
}();

function useReportProfileController() {
  var _useSharedDependencie = useSharedDependencies(),
    apolloClient = _useSharedDependencie.apolloClient;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var gateway, presenter, reportProfile;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            gateway = new ReportProfileGateway(apolloClient);
            presenter = new PromiseResultPresenter();
            reportProfile = new ReportProfile(gateway, presenter);
            _context.next = 5;
            return reportProfile.report(request);
          case 5:
            return _context.abrupt("return", presenter.asResult());
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * Report a profile for a given reason.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```tsx
 * const { execute: report, loading } = useReportProfile();
 *
 * const handleSubmit = async () => {
 *   const result = await report({
 *     profileId: profileId('0x01'),
 *     reason: ProfileReportReason.IMPERSONATION,
 *     additionalComments: 'Human readable comments, if any.',
 *   });
 *
 *   if (result.isSuccess()) {
 *     alert('Profile reported!');
 *   }
 * };
 *
 * <button onClick={handleSubmit} disabled={loading}>
 *   Report
 * </button>
 * ```
 *
 * @category Profiles
 * @group Hooks
 */
function useReportProfile() {
  var _useSession = useSession(),
    session = _useSession.data;
  var reportProfile = useReportProfileController();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var profileId, reason, additionalComments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            profileId = _ref.profileId, reason = _ref.reason, additionalComments = _ref.additionalComments;
            invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to use this operation. Use `useLogin` hook to authenticate.');
            return _context.abrupt("return", reportProfile({
              profileId: profileId,
              reason: reason,
              additionalComments: additionalComments
            }));
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
}

/**
 * {@link useWhoActedOnPublication} hook arguments
 */

/**
 * `useWhoActedOnPublication` is a paginated hook that lets you fetch profiles that acted on a publication.
 *
 * @category Profiles
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useWhoActedOnPublication({
 *   on: '0x123-0x456',
 * });
 * ```
 */
function useWhoActedOnPublication(args) {
  return usePaginatedReadResult(useWhoActedOnPublication$1(useDiGiApolloClient({
    variables: useFragmentVariables(args)
  })));
}

/**
 * `useBookmarks` is a paginated hook that lets you fetch the bookmarks of a profile owned by the logged in wallet.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @category Bookmarks
 * @group Hooks
 * @param args - {@link UseBookmarksArgs}
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useBookmarks();
 * ```
 */
function useBookmarks() {
  var _args$where;
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _useSession = useSession(),
    session = _useSession.data;
  return usePaginatedReadResult(usePublicationBookmarks(useDiGiApolloClient({
    variables: useFragmentVariables({
      request: args,
      statsFor: (_args$where = args.where) === null || _args$where === void 0 || (_args$where = _args$where.metadata) === null || _args$where === void 0 ? void 0 : _args$where.publishedOn
    }),
    skip: (session === null || session === void 0 ? void 0 : session.type) !== SessionType.WithProfile
  })));
}

var BookmarksGateway = /*#__PURE__*/function () {
  function BookmarksGateway(apolloClient) {
    _classCallCheck(this, BookmarksGateway);
    this.apolloClient = apolloClient;
  }
  _createClass(BookmarksGateway, [{
    key: "add",
    value: function () {
      var _add = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var publicationId;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              publicationId = _ref.publicationId;
              _context.next = 3;
              return this.apolloClient.mutate({
                mutation: AddPublicationBookmarkDocument,
                variables: {
                  request: {
                    on: publicationId
                  }
                }
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function add(_x) {
        return _add.apply(this, arguments);
      }
      return add;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref2) {
        var publicationId;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              publicationId = _ref2.publicationId;
              _context2.next = 3;
              return this.apolloClient.mutate({
                mutation: RemovePublicationBookmarkDocument,
                variables: {
                  request: {
                    on: publicationId
                  }
                }
              });
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function remove(_x2) {
        return _remove.apply(this, arguments);
      }
      return remove;
    }()
  }]);
  return BookmarksGateway;
}();

var BookmarksPresenter = /*#__PURE__*/function () {
  function BookmarksPresenter(publicationCacheManager) {
    _classCallCheck(this, BookmarksPresenter);
    this.publicationCacheManager = publicationCacheManager;
  }
  _createClass(BookmarksPresenter, [{
    key: "add",
    value: function () {
      var _add = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var publicationId;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              publicationId = _ref.publicationId;
              this.publicationCacheManager.update(publicationId, function (current) {
                if (!isPrimaryPublication(current)) {
                  return current;
                }
                return _objectSpread2(_objectSpread2({}, current), {}, {
                  operations: _objectSpread2(_objectSpread2({}, current.operations), {}, {
                    hasBookmarked: true
                  })
                });
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function add(_x) {
        return _add.apply(this, arguments);
      }
      return add;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref2) {
        var publicationId;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              publicationId = _ref2.publicationId;
              this.publicationCacheManager.update(publicationId, function (current) {
                if (!isPrimaryPublication(current)) {
                  return current;
                }
                return _objectSpread2(_objectSpread2({}, current), {}, {
                  operations: _objectSpread2(_objectSpread2({}, current.operations), {}, {
                    hasBookmarked: false
                  })
                });
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function remove(_x2) {
        return _remove.apply(this, arguments);
      }
      return remove;
    }()
  }]);
  return BookmarksPresenter;
}();

function useBookmarkToggleController() {
  var _useSharedDependencie = useSharedDependencies(),
    apolloClient = _useSharedDependencie.apolloClient,
    publicationCacheManager = _useSharedDependencie.publicationCacheManager;
  var add = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, gateway, bookmark;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            presenter = new BookmarksPresenter(publicationCacheManager);
            gateway = new BookmarksGateway(apolloClient);
            bookmark = new ToggleProperty(gateway, presenter);
            _context.next = 5;
            return bookmark.add(request);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function add(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var remove = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
      var presenter, gateway, bookmark;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            presenter = new BookmarksPresenter(publicationCacheManager);
            gateway = new BookmarksGateway(apolloClient);
            bookmark = new ToggleProperty(gateway, presenter);
            _context2.next = 5;
            return bookmark.remove(request);
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function remove(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return {
    add: add,
    remove: remove
  };
}

/**
 * `useBookmarkToggle` hook lets the user save or remove a publication from their bookmarks.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * You can use the `primaryPublication.operations.hasBookmarked` property to determine
 * if the publication is bookmarked by the active profile.
 *
 * @category Publications
 * @group Hooks
 * @param args - {@link UseBookmarkToggleArgs}
 *
 * @example
 * ```tsx
 * import { AnyPublication, useBookmarkToggle } from '@digiv3rse/react-web';
 *
 * function Publication({ publication }: { publication: AnyPublication }) {
 *   const { execute: toggle, loading } = useBookmarkToggle();
 *
 *   return (
 *     <button onClick={() => toggle({ publication })} disabled={loading}>
 *       {publication.operations.hasBookmarked ? 'Bookmarked' : 'Not bookmarked'}
 *     </button>
 *   );
 * }
 * ```
 */
function useBookmarkToggle() {
  var _useSession = useSession(),
    session = _useSession.data;
  var _useBookmarkToggleCon = useBookmarkToggleController(),
    add = _useBookmarkToggleCon.add,
    remove = _useBookmarkToggleCon.remove;
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var publication, target;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            publication = _ref.publication;
            invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to use this operation. Use `useLogin` hook to authenticate.');
            target = isMirrorPublication(publication) ? publication.mirrorOn : publication;
            if (!target.operations.hasBookmarked) {
              _context.next = 8;
              break;
            }
            _context.next = 6;
            return remove({
              publicationId: target.id
            });
          case 6:
            _context.next = 10;
            break;
          case 8:
            _context.next = 10;
            return add({
              publicationId: target.id
            });
          case 10:
            return _context.abrupt("return", success());
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
}

var HideCommentGateway = /*#__PURE__*/function () {
  function HideCommentGateway(apolloClient) {
    _classCallCheck(this, HideCommentGateway);
    this.apolloClient = apolloClient;
  }

  // hide
  _createClass(HideCommentGateway, [{
    key: "add",
    value: function () {
      var _add = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var publicationId;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              publicationId = _ref.publicationId;
              _context.next = 3;
              return this.apolloClient.mutate({
                mutation: HideCommentDocument,
                variables: {
                  request: {
                    "for": publicationId
                  }
                }
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function add(_x) {
        return _add.apply(this, arguments);
      }
      return add;
    }() // unhide
  }, {
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref2) {
        var publicationId;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              publicationId = _ref2.publicationId;
              _context2.next = 3;
              return this.apolloClient.mutate({
                mutation: UnhideCommentDocument,
                variables: {
                  request: {
                    "for": publicationId
                  }
                }
              });
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function remove(_x2) {
        return _remove.apply(this, arguments);
      }
      return remove;
    }()
  }]);
  return HideCommentGateway;
}();

var HideCommentPresenter = /*#__PURE__*/function () {
  function HideCommentPresenter(publicationCacheManager) {
    _classCallCheck(this, HideCommentPresenter);
    this.publicationCacheManager = publicationCacheManager;
  }

  // hide
  _createClass(HideCommentPresenter, [{
    key: "add",
    value: function () {
      var _add = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var publicationId;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              publicationId = _ref.publicationId;
              this.publicationCacheManager.update(publicationId, function (current) {
                if (!isCommentPublication(current)) {
                  return current;
                }
                return _objectSpread2(_objectSpread2({}, current), {}, {
                  hiddenByAuthor: true
                });
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function add(_x) {
        return _add.apply(this, arguments);
      }
      return add;
    }() // unhide
  }, {
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref2) {
        var publicationId;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              publicationId = _ref2.publicationId;
              this.publicationCacheManager.update(publicationId, function (current) {
                if (!isCommentPublication(current)) {
                  return current;
                }
                return _objectSpread2(_objectSpread2({}, current), {}, {
                  hiddenByAuthor: false
                });
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function remove(_x2) {
        return _remove.apply(this, arguments);
      }
      return remove;
    }()
  }]);
  return HideCommentPresenter;
}();

function useHideCommentController() {
  var _useSharedDependencie = useSharedDependencies(),
    apolloClient = _useSharedDependencie.apolloClient,
    publicationCacheManager = _useSharedDependencie.publicationCacheManager;
  var hide = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, gateway, comment;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            presenter = new HideCommentPresenter(publicationCacheManager);
            gateway = new HideCommentGateway(apolloClient);
            comment = new ToggleProperty(gateway, presenter);
            _context.next = 5;
            return comment.add(request);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function hide(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var unhide = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
      var presenter, gateway, reaction;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            presenter = new HideCommentPresenter(publicationCacheManager);
            gateway = new HideCommentGateway(apolloClient);
            reaction = new ToggleProperty(gateway, presenter);
            _context2.next = 5;
            return reaction.remove(request);
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function unhide(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return {
    hide: hide,
    unhide: unhide
  };
}

/**
 * This hook enables the author of a publication to toggle the visibility of a comment on their publication.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```tsx
 * import { Comment, useHideCommentToggle } from '@digiv3rse/react-web';
 *
 * function HideableComment({ comment }: { comment: Comment }) {
 *   const { execute: toggle, loading } = useHideCommentToggle();
 *
 *   return (
 *     <button onClick={() => toggle({ comment })} disabled={loading}>
 *       {comment.hiddenByAuthor ? 'Unhide' : 'Hide'}
 *     </button>
 *   );
 * }
 * ```
 *
 * @category Publications
 * @group Hooks
 * @param args - {@link UseHideCommentToggleArgs}
 */
function useHideCommentToggle() {
  var _useSession = useSession(),
    session = _useSession.data;
  var _useHideCommentContro = useHideCommentController(),
    hide = _useHideCommentContro.hide,
    unhide = _useHideCommentContro.unhide;
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var comment;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            comment = _ref.comment;
            invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to use this operation. Use `useLogin` hook to authenticate.');
            invariant(session.type === SessionType.WithProfile, 'You must be authenticated with a profile to use this query. Use `useLogin` hook to authenticate.');
            invariant(isCommentPublication(comment), 'Publication is not a Comment.');
            invariant(comment.commentOn.by.id === session.profile.id, 'You can only hide comments on publications that you have authored.');
            if (!comment.hiddenByAuthor) {
              _context.next = 10;
              break;
            }
            _context.next = 8;
            return unhide({
              publicationId: comment.id
            });
          case 8:
            _context.next = 12;
            break;
          case 10:
            _context.next = 12;
            return hide({
              publicationId: comment.id
            });
          case 12:
            return _context.abrupt("return", success());
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
}

var HidePublicationGateway = /*#__PURE__*/function () {
  function HidePublicationGateway(apolloClient) {
    _classCallCheck(this, HidePublicationGateway);
    this.apolloClient = apolloClient;
  }
  _createClass(HidePublicationGateway, [{
    key: "hide",
    value: function () {
      var _hide = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.apolloClient.mutate({
                mutation: HidePublicationDocument,
                variables: {
                  request: {
                    "for": request.publicationId
                  }
                }
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function hide(_x) {
        return _hide.apply(this, arguments);
      }
      return hide;
    }()
  }]);
  return HidePublicationGateway;
}();

var HidePublicationPresenter = /*#__PURE__*/function () {
  function HidePublicationPresenter(publicationCacheManager) {
    _classCallCheck(this, HidePublicationPresenter);
    this.publicationCacheManager = publicationCacheManager;
  }
  _createClass(HidePublicationPresenter, [{
    key: "present",
    value: function present(publicationId) {
      this.publicationCacheManager.update(publicationId, function (current) {
        return _objectSpread2(_objectSpread2({}, current), {}, {
          isHidden: true
        });
      });
    }
  }]);
  return HidePublicationPresenter;
}();

function useHidePublicationController() {
  var _useSharedDependencie = useSharedDependencies(),
    apolloClient = _useSharedDependencie.apolloClient,
    publicationCacheManager = _useSharedDependencie.publicationCacheManager;
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var publicationId, presenter, gateway, hidePublication;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            publicationId = _ref.publicationId;
            presenter = new HidePublicationPresenter(publicationCacheManager);
            gateway = new HidePublicationGateway(apolloClient);
            hidePublication = new HidePublication(gateway, presenter);
            _context.next = 6;
            return hidePublication.hide({
              publicationId: publicationId
            });
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
}

/**
 * Hide a publication posted by the authenticated profile to prevent other profiles from seeing it.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```tsx
 * import { useHidePublication, AnyPublication } from '@digiv3rse/react';
 *
 * function HidePublication({ publication }: { publication: AnyPublication }) {
 *   const { execute: hide, loading } = useHidePublication();
 *
 *   if (publication.isHidden) {
 *    return <span>Publication is hidden</span>;
 *   }
 *
 *   return (
 *     <button onClick={() => hide({ publication })} disabled={loading}>
 *       Hide publication
 *     </button>
 *   );
 * }
 * ```
 *
 * @category Publications
 * @group Hooks
 * @param args - {@link UseHidePublicationArgs}
 */
function useHidePublication() {
  var _useSession = useSession(),
    session = _useSession.data;
  var hide = useHidePublicationController();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var publication;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            publication = _ref.publication;
            invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to hide a publication');
            invariant(publication.by.ownedBy.address === session.address, 'Publication not owned by the active wallet. Make sure that publication is owned by the wallet before trying to hide it.');
            _context.next = 5;
            return hide({
              publicationId: publication.id
            });
          case 5:
            return _context.abrupt("return", success());
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
}

/**
 * {@link useLazyPublication} callback hook arguments
 */

/**
 * `useLazyPublication` is a lazy version of {@link usePublication} React Hook.
 *
 * This hook will not fetch the publication until the returned function is called.
 *
 * This hook is intended to enable more complex use cases, the vast majority of
 * use cases should use {@link usePublication} instead.
 *
 * @example
 * ```ts
 * const { called, data, error, loading, execute } = useLazyPublication();
 * ```
 *
 * @experimental This hook is experimental and may change in the future.
 *
 * ```ts
 * const { called, data, error, loading, execute } = useLazyPublication();
 *
 * const callback = async () => {
 *   const result = await execute({ forId: publicationId });
 *
 *   if (result.isFailure()) {
 *     toast.error(result.error.message);
 *     return;
 *   }
 *
 *   const publication = result.value;
 *
 *   // do something with the publication
 * }
 * ```
 *
 * @category Publications
 * @group Hooks
 */
function useLazyPublication() {
  var _usePublicationLazyQu = usePublicationLazyQuery(useDiGiApolloClient({
      fetchPolicy: 'cache-and-network'
    })),
    _usePublicationLazyQu2 = _slicedToArray(_usePublicationLazyQu, 1),
    fetch = _usePublicationLazyQu2[0];
  var fill = useLazyFragmentVariables();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _yield$fetch, data, error, _args$forId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch({
              variables: fill({
                request: args
              })
            });
          case 2:
            _yield$fetch = _context.sent;
            data = _yield$fetch.data;
            error = _yield$fetch.error;
            if (!error) {
              _context.next = 7;
              break;
            }
            return _context.abrupt("return", failure(new UnspecifiedError(error)));
          case 7:
            if (data !== null && data !== void 0 && data.result) {
              _context.next = 9;
              break;
            }
            return _context.abrupt("return", failure(new NotFoundError("publication for: ".concat(String((_args$forId = args.forId) !== null && _args$forId !== void 0 ? _args$forId : args.forTxHash)))));
          case 9:
            return _context.abrupt("return", success(data.result));
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

/**
 * {@link useLazyPublications} callback hook arguments
 */

/**
 * `useLazyPublications` is a lazy version of {@link usePublications} React Hook.
 *
 * This version doesn't support pagination!
 *
 * This hook will not fetch publications until the returned function is called.
 *
 * @experimental This hook is experimental and may change in the future.
 * @example
 * ```ts
 * const { called, data, error, loading, execute } = useLazyPublications();
 *
 * const callback = async () => {
 *   const result = await execute({
 *     where: {
 *       publicationTypes: [PublicationType.Post]
 *     }
 *   });
 *
 *   if (result.isFailure()) {
 *     toast.error(result.error.message);
 *     return;
 *   }
 *
 *   const publications = result.value;
 *
 *   // do something with the publications
 * }
 * ```
 *
 * @category Publications
 * @group Hooks
 */
function useLazyPublications() {
  var _usePublicationsLazyQ = usePublicationsLazyQuery(useDiGiApolloClient({
      fetchPolicy: 'no-cache'
    })),
    _usePublicationsLazyQ2 = _slicedToArray(_usePublicationsLazyQ, 1),
    fetch = _usePublicationsLazyQ2[0];
  var fill = useLazyFragmentVariables();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _yield$fetch, data, error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch({
              variables: fill(args)
            });
          case 2:
            _yield$fetch = _context.sent;
            data = _yield$fetch.data;
            error = _yield$fetch.error;
            if (!error) {
              _context.next = 7;
              break;
            }
            return _context.abrupt("return", failure(new UnspecifiedError(error)));
          case 7:
            invariant(data, 'Data must be defined');
            return _context.abrupt("return", success(data.result.items));
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

var NotInterestedGateway = /*#__PURE__*/function () {
  function NotInterestedGateway(apolloClient) {
    _classCallCheck(this, NotInterestedGateway);
    this.apolloClient = apolloClient;
  }
  _createClass(NotInterestedGateway, [{
    key: "add",
    value: function () {
      var _add = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var publicationId;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              publicationId = _ref.publicationId;
              _context.next = 3;
              return this.apolloClient.mutate({
                mutation: AddPublicationNotInterestedDocument,
                variables: {
                  request: {
                    on: publicationId
                  }
                }
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function add(_x) {
        return _add.apply(this, arguments);
      }
      return add;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref2) {
        var publicationId;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              publicationId = _ref2.publicationId;
              _context2.next = 3;
              return this.apolloClient.mutate({
                mutation: UndoPublicationNotInterestedDocument,
                variables: {
                  request: {
                    on: publicationId
                  }
                }
              });
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function remove(_x2) {
        return _remove.apply(this, arguments);
      }
      return remove;
    }()
  }]);
  return NotInterestedGateway;
}();

var NotInterestedPresenter = /*#__PURE__*/function () {
  function NotInterestedPresenter(publicationCacheManager) {
    _classCallCheck(this, NotInterestedPresenter);
    this.publicationCacheManager = publicationCacheManager;
  }
  _createClass(NotInterestedPresenter, [{
    key: "add",
    value: function () {
      var _add = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var publicationId;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              publicationId = _ref.publicationId;
              this.publicationCacheManager.update(publicationId, function (current) {
                if (!isPrimaryPublication(current)) {
                  return current;
                }
                return _objectSpread2(_objectSpread2({}, current), {}, {
                  operations: _objectSpread2(_objectSpread2({}, current.operations), {}, {
                    isNotInterested: true
                  })
                });
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function add(_x) {
        return _add.apply(this, arguments);
      }
      return add;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref2) {
        var publicationId;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              publicationId = _ref2.publicationId;
              this.publicationCacheManager.update(publicationId, function (current) {
                if (!isPrimaryPublication(current)) {
                  return current;
                }
                return _objectSpread2(_objectSpread2({}, current), {}, {
                  operations: _objectSpread2(_objectSpread2({}, current.operations), {}, {
                    isNotInterested: false
                  })
                });
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function remove(_x2) {
        return _remove.apply(this, arguments);
      }
      return remove;
    }()
  }]);
  return NotInterestedPresenter;
}();

function useNotInterestedController() {
  var _useSharedDependencie = useSharedDependencies(),
    apolloClient = _useSharedDependencie.apolloClient,
    publicationCacheManager = _useSharedDependencie.publicationCacheManager;
  var add = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, gateway, reaction;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            presenter = new NotInterestedPresenter(publicationCacheManager);
            gateway = new NotInterestedGateway(apolloClient);
            reaction = new ToggleProperty(gateway, presenter);
            _context.next = 5;
            return reaction.add(request);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function add(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var remove = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
      var presenter, gateway, reaction;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            presenter = new NotInterestedPresenter(publicationCacheManager);
            gateway = new NotInterestedGateway(apolloClient);
            reaction = new ToggleProperty(gateway, presenter);
            _context2.next = 5;
            return reaction.remove(request);
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function remove(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return {
    add: add,
    remove: remove
  };
}

/**
 * `useNotInterestedToggle` hook let's the active profile toggle the not interested status of a publication.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * You can use the `primaryPublication.operations.isNotInterested` property to determine
 * the active profile's interest with the provided publication.
 *
 * @example
 * ```tsx
 * import { AnyPublication, useNotInterestedToggle } from '@digiv3rse/react-web';
 *
 * function Publication({ publication }: { publication: AnyPublication }) {
 *   const { execute: toggle, loading } = useNotInterestedToggle();
 *
 *   return (
 *     <button onClick={() => toggle({ publication })} disabled={loading}>
 *       {publication.operations.isNotInterested ? 'Not interested' : 'Interested'}
 *     </button>
 *   );
 * }
 * ```
 *
 * @category Publications
 * @group Hooks
 */
function useNotInterestedToggle() {
  var _useSession = useSession(),
    session = _useSession.data;
  var _useNotInterestedCont = useNotInterestedController(),
    add = _useNotInterestedCont.add,
    remove = _useNotInterestedCont.remove;
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var publication, _ref3, publicationId, isNotInterested;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            publication = _ref.publication;
            invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to use this operation. Use `useLogin` hook to authenticate.');
            _ref3 = isMirrorPublication(publication) ? publication.mirrorOn : publication, publicationId = _ref3.id, isNotInterested = _ref3.operations.isNotInterested;
            if (!isNotInterested) {
              _context.next = 8;
              break;
            }
            _context.next = 6;
            return remove({
              publicationId: publicationId
            });
          case 6:
            _context.next = 10;
            break;
          case 8:
            _context.next = 10;
            return add({
              publicationId: publicationId
            });
          case 10:
            return _context.abrupt("return", success());
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
}

/**
 * {@link usePublication} hook arguments
 */

/**
 * Fetch a publication by either its publication id or transaction hash.
 *
 * @example
 * ```tsx
 * const { data, error, loading } = usePublication({
 *   forId: '0x04-0x0b',
 * });
 * ```
 *
 * @category Publications
 * @group Hooks
 * @param args - {@link UsePublicationArgs}
 */
function usePublication(_ref) {
  var forId = _ref.forId,
    forTxHash = _ref.forTxHash;
  invariant(forId === undefined || forTxHash === undefined, "Only one of 'forId' or 'forTxHash' should be provided to 'usePublication' hook");
  var _useReadResult = useReadResult(usePublication$1(useDiGiApolloClient({
      variables: useFragmentVariables({
        request: _objectSpread2(_objectSpread2({}, forId && {
          forId: forId
        }), forTxHash && {
          forTxHash: forTxHash
        })
      }),
      fetchPolicy: 'cache-and-network',
      // leverage cache content if possible
      nextFetchPolicy: 'cache-first'
    }))),
    data = _useReadResult.data,
    error = _useReadResult.error,
    loading = _useReadResult.loading;
  if (loading) {
    return {
      data: undefined,
      error: undefined,
      loading: true
    };
  }
  if (error) {
    return {
      data: undefined,
      error: error,
      loading: false
    };
  }
  if (data === null) {
    return {
      data: undefined,
      error: new NotFoundError(forId ? "Publication with id ".concat(forId, " was not found") : "Publication with txHash ".concat(forTxHash ? forTxHash : '', " was not found")),
      loading: false
    };
  }
  return {
    data: data,
    error: undefined,
    loading: false
  };
}

/**
 * {@link usePublications} hook arguments
 */

/**
 * Fetch a paginated result of publications based on a set of filters.
 *
 * @category Publications
 * @group Hooks
 * @param args - {@link UsePublicationsArgs}
 *
 * @example
 * Fetch post publications
 * ```tsx
 * const { data, loading, error } = usePublications({
 *   where: {
 *     publicationTypes: [PublicationType.Post],
 *   }
 * });
 * ```
 *
 * @example
 * Fetch all short form video post publications
 * ```tsx
 * const { data, loading, error } = usePublications({
 *   where: {
 *     publicationTypes: [PublicationType.Post]
 *     metadata: {
 *       mainContentFocus: [PublicationMetadataMainFocusType.ShortVideo],
 *     }
 *   }
 * });
 * ```
 *
 * @example
 * Fetch all comments for a specified publication
 * ```tsx
 * const { data, loading, error } = usePublications({
 *   where: {
 *     commentOn: {
 *       id: publicationId('0x03-0x24'),
 *     },
 *   }
 * });
 * ```
 *
 * @example
 * Fetch all mirrors of a specified publication
 * ```tsx
 * const { data, loading, error } = usePublications({
 *   where: {
 *     mirrorOn: publicationId('0x03-0x24'),
 *   }
 * });
 * ```
 *
 * @example
 * Fetch all quotes of a specified publication
 * ```tsx
 * const { data, loading, error } = usePublications({
 *   where: {
 *     quoteOn: publicationId('0x03-0x24'),
 *   }
 * });
 * ```
 *
 * @example
 * Fetch all publications by an author's Profile ID
 * ```tsx
 * const { data, loading, error } = usePublications({
 *   where: {
 *     from: [profileId('0x01')],
 *   }
 * });
 * ```
 *
 * @example
 * Fetch publications mirrored by a Profile ID
 * ```tsx
 * const { data, loading, error } = usePublications({
 *   where: {
 *     from: [profileId('0x01')],
 *     publicationTypes: [PublicationType.Mirror],
 *   }
 * });
 * ```
 *
 * @example
 * Fetch publications quoted by a Profile ID
 * ```tsx
 * const { data, loading, error } = usePublications({
 *   where: {
 *     from: [profileId('0x01')],
 *     publicationTypes: [PublicationType.Quote],
 *   }
 * });
 * ```
 */
function usePublications(_ref) {
  var _where$metadata;
  var where = _ref.where,
    limit = _ref.limit;
  return usePaginatedReadResult(usePublications$1(useDiGiApolloClient({
    variables: useFragmentVariables({
      where: where,
      limit: limit,
      statsFor: where === null || where === void 0 || (_where$metadata = where.metadata) === null || _where$metadata === void 0 ? void 0 : _where$metadata.publishedOn
    })
  })));
}

var ReactionGateway = /*#__PURE__*/function () {
  function ReactionGateway(apolloClient) {
    _classCallCheck(this, ReactionGateway);
    this.apolloClient = apolloClient;
  }
  _createClass(ReactionGateway, [{
    key: "add",
    value: function () {
      var _add = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.apolloClient.mutate({
                mutation: AddReactionDocument,
                variables: {
                  request: {
                    "for": request.publicationId,
                    reaction: request.reaction
                  }
                }
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function add(_x) {
        return _add.apply(this, arguments);
      }
      return add;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.apolloClient.mutate({
                mutation: RemoveReactionDocument,
                variables: {
                  request: {
                    "for": request.publicationId,
                    reaction: request.reaction
                  }
                }
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function remove(_x2) {
        return _remove.apply(this, arguments);
      }
      return remove;
    }()
  }]);
  return ReactionGateway;
}();

function updateOperationsOnAdd(reaction) {
  switch (reaction) {
    case PublicationReactionType.Upvote:
      return {
        hasUpvoted: true
      };
    case PublicationReactionType.Downvote:
      return {
        hasDownvoted: true
      };
  }
}
function updateOperationsOnRemove(reaction) {
  switch (reaction) {
    case PublicationReactionType.Upvote:
      return {
        hasUpvoted: false
      };
    case PublicationReactionType.Downvote:
      return {
        hasDownvoted: false
      };
  }
}
function updateStatsOnAdd(stats, reaction) {
  switch (reaction) {
    case PublicationReactionType.Upvote:
      return {
        upvotes: stats.upvotes + 1
      };
    case PublicationReactionType.Downvote:
      return {
        downvotes: stats.downvotes + 1
      };
  }
}
function updateStatsOnRemove(stats, reaction) {
  switch (reaction) {
    case PublicationReactionType.Upvote:
      return {
        upvotes: stats.upvotes - 1
      };
    case PublicationReactionType.Downvote:
      return {
        downvotes: stats.downvotes - 1
      };
  }
}
var ReactionPresenter = /*#__PURE__*/function () {
  function ReactionPresenter(publicationCacheManager) {
    _classCallCheck(this, ReactionPresenter);
    this.publicationCacheManager = publicationCacheManager;
  }
  _createClass(ReactionPresenter, [{
    key: "add",
    value: function () {
      var _add = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.publicationCacheManager.update(request.publicationId, function (current) {
                if (isPrimaryPublication(current)) {
                  return _objectSpread2(_objectSpread2({}, current), {}, {
                    stats: _objectSpread2(_objectSpread2({}, current.stats), updateStatsOnAdd(current.stats, request.reaction)),
                    operations: _objectSpread2(_objectSpread2({}, current.operations), updateOperationsOnAdd(request.reaction))
                  });
                }
                return current;
              });
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function add(_x) {
        return _add.apply(this, arguments);
      }
      return add;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              this.publicationCacheManager.update(request.publicationId, function (current) {
                if (isPrimaryPublication(current)) {
                  return _objectSpread2(_objectSpread2({}, current), {}, {
                    stats: _objectSpread2(_objectSpread2({}, current.stats), updateStatsOnRemove(current.stats, request.reaction)),
                    operations: _objectSpread2(_objectSpread2({}, current.operations), updateOperationsOnRemove(request.reaction))
                  });
                }
                return current;
              });
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function remove(_x2) {
        return _remove.apply(this, arguments);
      }
      return remove;
    }()
  }]);
  return ReactionPresenter;
}();

function useReactionToggleController() {
  var _useSharedDependencie = useSharedDependencies(),
    apolloClient = _useSharedDependencie.apolloClient,
    publicationCacheManager = _useSharedDependencie.publicationCacheManager;
  var add = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, gateway, reaction;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            presenter = new ReactionPresenter(publicationCacheManager);
            gateway = new ReactionGateway(apolloClient);
            reaction = new ToggleProperty(gateway, presenter);
            _context.next = 5;
            return reaction.add(request);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function add(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var remove = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
      var presenter, gateway, reaction;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            presenter = new ReactionPresenter(publicationCacheManager);
            gateway = new ReactionGateway(apolloClient);
            reaction = new ToggleProperty(gateway, presenter);
            _context2.next = 5;
            return reaction.remove(request);
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function remove(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return {
    add: add,
    remove: remove
  };
}

/**
 * A helper to check if a certain type of reaction has been added to a publication.
 *
 * @example
 * ```tsx
 * const hasUpvoted = hasReacted({
 *   publication,
 *   reaction: PublicationReactionType.Upvote,
 * });
 * ```
 *
 * @group Helpers
 */
function hasReacted(args) {
  switch (args.reaction) {
    case PublicationReactionType.Upvote:
      return args.publication.operations.hasUpvoted;
    case PublicationReactionType.Downvote:
      return args.publication.operations.hasDownvoted;
  }
}
/**
 * `useReactionToggle` hook allows to add or remove a reaction to a publication.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```tsx
 * import { PrimaryPublication, useReactionToggle } from '@digiv3rse/react-web';
 *
 * function Publication({ publication }: { publication: PrimaryPublication }) {
 *  const { execute: toggle, loading, error } = useReactionToggle();
 *
 *  const toggleReaction = async () => {
 *    await toggle({
 *      reaction: PublicationReactionType.Upvote,
 *      publication,
 *    });
 *  };
 *
 *  if (error) {
 *   return <p>Error reacting to publication: {error.message}</p>;
 *  }
 *
 *  return (
 *    <div>
 *      // render publication details
 *      <button onClick={toggleReaction} disabled={loading}>
 *        Toggle reaction
 *      </button>
 *    </div>
 *  );
 * }
 * ```
 *
 * @category Publications
 * @group Hooks
 */
function useReactionToggle() {
  var _useSession = useSession(),
    session = _useSession.data;
  var _useReactionToggleCon = useReactionToggleController(),
    add = _useReactionToggleCon.add,
    remove = _useReactionToggleCon.remove;
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var reaction, publication;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            reaction = _ref.reaction, publication = _ref.publication;
            invariant(isPrimaryPublication(publication), 'Publication is not a primary publication');
            invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to use this operation. Use `useLogin` hook to authenticate.');
            if (!hasReacted({
              publication: publication,
              reaction: reaction
            })) {
              _context.next = 8;
              break;
            }
            _context.next = 6;
            return remove({
              publicationId: publication.id,
              reaction: reaction
            });
          case 6:
            _context.next = 10;
            break;
          case 8:
            _context.next = 10;
            return add({
              publicationId: publication.id,
              reaction: reaction
            });
          case 10:
            return _context.abrupt("return", success());
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
}

var mapReportReasonToInput = function mapReportReasonToInput(reason) {
  switch (reason) {
    case PublicationReportReason.VIOLENCE:
      return {
        illegalReason: {
          reason: PublicationReportingReason.Illegal,
          subreason: PublicationReportingIllegalSubreason.Violence
        }
      };
    case PublicationReportReason.SELF_HARM:
      return {
        illegalReason: {
          reason: PublicationReportingReason.Illegal,
          subreason: PublicationReportingIllegalSubreason.ThreatIndividual
        }
      };
    case PublicationReportReason.DIRECT_THREAT:
      return {
        illegalReason: {
          reason: PublicationReportingReason.Illegal,
          subreason: PublicationReportingIllegalSubreason.DirectThreat
        }
      };
    case PublicationReportReason.HARASSMENT:
    case PublicationReportReason.HATE_SPEECH:
      return {
        illegalReason: {
          reason: PublicationReportingReason.Illegal,
          subreason: PublicationReportingIllegalSubreason.HumanAbuse
        }
      };
    case PublicationReportReason.ANIMAL_ABUSE:
      return {
        illegalReason: {
          reason: PublicationReportingReason.Illegal,
          subreason: PublicationReportingIllegalSubreason.AnimalAbuse
        }
      };
    case PublicationReportReason.SCAM:
    case PublicationReportReason.UNAUTHORIZED_SALE:
      return {
        fraudReason: {
          reason: PublicationReportingReason.Fraud,
          subreason: PublicationReportingFraudSubreason.Scam
        }
      };
    case PublicationReportReason.IMPERSONATION:
      return {
        fraudReason: {
          reason: PublicationReportingReason.Fraud,
          subreason: PublicationReportingFraudSubreason.Impersonation
        }
      };
    case PublicationReportReason.NUDITY:
      return {
        sensitiveReason: {
          reason: PublicationReportingReason.Sensitive,
          subreason: PublicationReportingSensitiveSubreason.Nsfw
        }
      };
    case PublicationReportReason.OFFENSIVE:
      return {
        sensitiveReason: {
          reason: PublicationReportingReason.Sensitive,
          subreason: PublicationReportingSensitiveSubreason.Offensive
        }
      };
    case PublicationReportReason.MISLEADING:
      return {
        spamReason: {
          reason: PublicationReportingReason.Spam,
          subreason: PublicationReportingSpamSubreason.Misleading
        }
      };
    case PublicationReportReason.MISUSE_HASHTAGS:
      return {
        spamReason: {
          reason: PublicationReportingReason.Spam,
          subreason: PublicationReportingSpamSubreason.MisuseHashtags
        }
      };
    case PublicationReportReason.UNRELATED:
      return {
        spamReason: {
          reason: PublicationReportingReason.Spam,
          subreason: PublicationReportingSpamSubreason.Unrelated
        }
      };
    case PublicationReportReason.REPETITIVE:
      return {
        spamReason: {
          reason: PublicationReportingReason.Spam,
          subreason: PublicationReportingSpamSubreason.Repetitive
        }
      };
    case PublicationReportReason.FAKE_ENGAGEMENT:
      return {
        spamReason: {
          reason: PublicationReportingReason.Spam,
          subreason: PublicationReportingSpamSubreason.FakeEngagement
        }
      };
    case PublicationReportReason.MANIPULATION_ALGO:
      return {
        spamReason: {
          reason: PublicationReportingReason.Spam,
          subreason: PublicationReportingSpamSubreason.ManipulationAlgo
        }
      };
    case PublicationReportReason.SOMETHING_ELSE:
      return {
        spamReason: {
          reason: PublicationReportingReason.Spam,
          subreason: PublicationReportingSpamSubreason.SomethingElse
        }
      };
    default:
      assertNever(reason, "Unknown report type");
  }
};
var ReportPublicationGateway = /*#__PURE__*/function () {
  function ReportPublicationGateway(apolloClient) {
    _classCallCheck(this, ReportPublicationGateway);
    this.apolloClient = apolloClient;
  }
  _createClass(ReportPublicationGateway, [{
    key: "report",
    value: function () {
      var _report = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var additionalComments, publicationId, reason;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              additionalComments = _ref.additionalComments, publicationId = _ref.publicationId, reason = _ref.reason;
              _context.next = 3;
              return this.apolloClient.mutate({
                mutation: ReportPublicationDocument,
                variables: {
                  request: {
                    "for": publicationId,
                    additionalComments: additionalComments,
                    reason: _objectSpread2({}, mapReportReasonToInput(reason))
                  }
                }
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function report(_x) {
        return _report.apply(this, arguments);
      }
      return report;
    }()
  }]);
  return ReportPublicationGateway;
}();

function useReportPublicationController() {
  var _useSharedDependencie = useSharedDependencies(),
    apolloClient = _useSharedDependencie.apolloClient;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var gateway, presenter, reportPublication;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            gateway = new ReportPublicationGateway(apolloClient);
            presenter = new PromiseResultPresenter();
            reportPublication = new ReportPublication(gateway, presenter);
            _context.next = 5;
            return reportPublication.report(request);
          case 5:
            return _context.abrupt("return", presenter.asResult());
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * Report a publication for a given reason.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```tsx
 * const { execute: report, loading } = useReportPublication();
 *
 * const handleSubmit = async () => {
 *   const result = await report({
 *     publicationId: publicationId('0x014e-0x0a'),
 *     reason: PublicationReportReason.FAKE_ENGAGEMENT,
 *     additionalComments: 'Human readable comments, if any.',
 *   });
 *
 *   if (result.isSuccess()) {
 *     alert('Publication reported!');
 *   }
 * };
 *
 * <button onClick={handleSubmit} disabled={loading}>
 *   Report
 * </button>
 * ```
 *
 * @category Publications
 * @group Hooks
 */
function useReportPublication() {
  var _useSession = useSession(),
    session = _useSession.data;
  var reportPublication = useReportPublicationController();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var publicationId, reason, additionalComments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            publicationId = _ref.publicationId, reason = _ref.reason, additionalComments = _ref.additionalComments;
            invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to use this operation. Use `useLogin` hook to authenticate.');
            return _context.abrupt("return", reportPublication({
              publicationId: publicationId,
              reason: reason,
              additionalComments: additionalComments
            }));
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
}

/**
 * {@link useWhoReactedToPublication} hook arguments
 */

/**
 * `useWhoReactedToPublication` is a paginated hook that lets you fetch
 * profiles that reacted to a publication, together with the reactions.
 *
 * @category Publications
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useWhoReactedToPublication({
 *   for: '0x123-0x456',
 * });
 * ```
 */
function useWhoReactedToPublication(args) {
  return usePaginatedReadResult(useWhoReactedPublication(useDiGiApolloClient({
    variables: useFragmentVariables(args)
  })));
}

/**
 * {@link useRevenueFromFollow} hook arguments
 */

/**
 * Fetch a revenue of a profile from all follow actions.
 *
 * @example
 * ```tsx
 * const { data, error, loading } = useRevenueFromFollow({
 *   for: '0x04',
 * });
 * ```
 *
 * @category Revenue
 * @group Hooks
 */
function useRevenueFromFollow(args) {
  var _useReadResult = useReadResult(useFollowRevenues(useDiGiApolloClient({
      variables: useFragmentVariables({
        request: args
      })
    }))),
    data = _useReadResult.data,
    error = _useReadResult.error,
    loading = _useReadResult.loading;
  if (loading) {
    return {
      data: undefined,
      error: undefined,
      loading: true
    };
  }
  if (error) {
    return {
      data: undefined,
      error: error,
      loading: false
    };
  }
  return {
    data: data.revenues,
    error: undefined,
    loading: false
  };
}

/**
 * {@link useRevenueFromPublication} hook arguments
 */

/**
 * Fetch a profile's revenue from a single publication.
 *
 * @example
 * ```tsx
 * const { data, error, loading } = useRevenueFromPublication({
 *   for: '0x04-0x0b',
 * });
 * ```
 *
 * @category Revenue
 * @group Hooks
 */
function useRevenueFromPublication(args) {
  var _useReadResult = useReadResult(useRevenueFromPublication$1(useDiGiApolloClient({
      variables: useFragmentVariables({
        request: args,
        statsFor: args.publishedOn
      })
    }))),
    data = _useReadResult.data,
    error = _useReadResult.error,
    loading = _useReadResult.loading;
  if (loading) {
    return {
      data: undefined,
      error: undefined,
      loading: true
    };
  }
  if (error) {
    return {
      data: undefined,
      error: error,
      loading: false
    };
  }
  if (data === null) {
    return {
      data: undefined,
      error: new NotFoundError("Publication with id: ".concat(args["for"])),
      loading: false
    };
  }
  return {
    data: data,
    error: undefined,
    loading: false
  };
}

/**
 * {@link useRevenueFromPublications} hook arguments
 */

/**
 * Fetch a profile's revenue for all their publications.
 *
 * @example
 * ```tsx
 * const { data, error, loading } = useRevenueFromPublications({
 *   for: '0x04',
 * });
 * ```
 *
 * @category Revenue
 * @group Hooks
 * @param args - {@link UseRevenueFromPublicationsArgs}
 */
function useRevenueFromPublications(args) {
  return usePaginatedReadResult(useRevenueFromPublications$1(useDiGiApolloClient({
    variables: useFragmentVariables(_objectSpread2(_objectSpread2({}, args), {}, {
      statsFor: args.publishedOn
    }))
  })));
}

var maxIssuesInMessage = 99;
var issueSeparator = '\n';
var bulletPoint = '· ';
function escapeQuotes(str) {
  return str.replace(/"/g, '\\"');
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers
 */
var identifierRegex = /(?:[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0898-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF65-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDEFD-\uDF1C\uDF27\uDF30-\uDF50\uDF70-\uDF85\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E-\uDE41\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDF00-\uDF10\uDF12-\uDF3A\uDF3E-\uDF42\uDF50-\uDF59\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC40-\uDC55]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC30-\uDC6D\uDC8F\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDCD0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]|\uDB40[\uDD00-\uDDEF])*/;
function formatPath(path) {
  if (path.length === 1) {
    return path[0].toString();
  }
  return path.reduce(function (acc, item) {
    // handle numeric indices
    if (typeof item === 'number') {
      return acc + '[' + item.toString() + ']';
    }

    // handle quoted values
    if (item.includes('"')) {
      return acc + '["' + escapeQuotes(item) + '"]';
    }

    // handle special characters
    if (!identifierRegex.test(item)) {
      return acc + '["' + item + '"]';
    }

    // handle normal values
    var separator = acc.length === 0 ? '' : '.';
    return acc + separator + item;
  }, '');
}
function formatZodInvalidUnionIssue(issue) {
  var groups = issue.unionErrors.map(function (zodError) {
    return zodError.issues.map(function (nested) {
      if (hasAtLeastOne(nested.path)) {
        return "\"".concat(formatPath(nested.path), "\": ").concat(nested.message);
      }
      return nested.message;
    });
  });
  var uniqueGroups = _toConsumableArray(new Set(groups.map(function (group) {
    return group.join('; ');
  })));
  var path = Array.isArray(issue.path) ? issue.path : [issue.path];
  var prefix = hasAtLeastOne(path) ? "\"".concat(formatPath(path), "\": ") : '';
  if (hasTwoOrMore(uniqueGroups)) {
    return "".concat(bulletPoint).concat(prefix, "expected to match one of the following groups:\n") + "\t\t".concat(uniqueGroups.join("".concat(issueSeparator, "\tOR:").concat(issueSeparator, "\t\t")));
  }
  return "".concat(bulletPoint).concat(prefix).concat(uniqueGroups[0]);
}
function formatZodIssue(issue) {
  if (issue.code === z.ZodIssueCode.invalid_union) {
    return formatZodInvalidUnionIssue(issue);
  }
  if (hasAtLeastOne(issue.path)) {
    return "".concat(bulletPoint, "\"").concat(formatPath(issue.path), "\": ").concat(issue.message);
  }
  return issue.message;
}

/**
 * Formats a Zod parsing error into a human-readable string.
 *
 * The formatting is tailored to the DiGi Protocol Metadata use case. It may not be suitable for other use cases.
 *
 * @category Helpers
 *
 * @example
 * ```ts
 * const result = PublicationMetadataSchema.safeParse(invalid);
 *
 * if (!result.success) {
 *   throw new Error(formatZodError(result.error));
 * }
 * ```
 */
function formatZodError(zodError) {
  var reason = zodError.errors
  // limit max number of issues printed in the reason section
  .slice(0, maxIssuesInMessage)
  // format error message
  .map(function (issue) {
    return formatZodIssue(issue);
  })
  // concat as string
  .join(issueSeparator);
  if (reason.length === 0) {
    return 'invalid argument, it was not possible to determine a more detailed reason.\n' + 'Check the input you provided and try again.';
  }
  return "fix the following issues\n".concat(reason);
}

function evaluate(result) {
  if (result.success) {
    return result.data;
  }
  never(formatZodError(result.error));
}
function createCommentRequest(input) {
  return evaluate(CreateCommentRequestSchema.safeParse(_objectSpread2({
    kind: TransactionKind.CREATE_COMMENT
  }, input)));
}
function createPostRequest(input) {
  return evaluate(CreatePostRequestSchema.safeParse(_objectSpread2({
    kind: TransactionKind.CREATE_POST
  }, input)));
}
function createMirrorRequest(input) {
  return evaluate(CreateMirrorRequestSchema.safeParse(_objectSpread2({
    kind: TransactionKind.MIRROR_PUBLICATION
  }, input)));
}
function createQuoteRequest(input) {
  return evaluate(CreateQuoteRequestSchema.safeParse(_objectSpread2({
    kind: TransactionKind.CREATE_QUOTE
  }, input)));
}

var NewPublicationPresenter = /*#__PURE__*/function () {
  function NewPublicationPresenter(fetchNewPublication) {
    _classCallCheck(this, NewPublicationPresenter);
    _defineProperty(this, "deferredResult", new Deferred());
    _defineProperty(this, "earlyFailure", null);
    this.fetchNewPublication = fetchNewPublication;
  }
  _createClass(NewPublicationPresenter, [{
    key: "present",
    value: function () {
      var _present = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(result) {
        var publication;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!result.isFailure()) {
                _context.next = 6;
                break;
              }
              if (result.error instanceof TransactionError) {
                _context.next = 4;
                break;
              }
              this.earlyFailure = failure(result.error);
              return _context.abrupt("return");
            case 4:
              this.deferredResult.resolve(failure(result.error));
              return _context.abrupt("return");
            case 6:
              _context.next = 8;
              return this.fetchNewPublication(result.value);
            case 8:
              publication = _context.sent;
              this.deferredResult.resolve(success(publication));
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function present(_x) {
        return _present.apply(this, arguments);
      }
      return present;
    }()
  }, {
    key: "asResult",
    value: function asResult() {
      var _this = this;
      if (this.earlyFailure) {
        return this.earlyFailure;
      }
      return success({
        waitForCompletion: function () {
          var _waitForCompletion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", _this.deferredResult.promise);
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function waitForCompletion() {
            return _waitForCompletion.apply(this, arguments);
          }
          return waitForCompletion;
        }()
      });
    }
  }]);
  return NewPublicationPresenter;
}();

var CreateMomokaCommentGateway = /*#__PURE__*/function () {
  function CreateMomokaCommentGateway(apolloClient, transactionFactory) {
    _classCallCheck(this, CreateMomokaCommentGateway);
    this.apolloClient = apolloClient;
    this.transactionFactory = transactionFactory;
  }
  _createClass(CreateMomokaCommentGateway, [{
    key: "createDelegatedTransaction",
    value: function () {
      var _createDelegatedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              transaction = this.transactionFactory.createDataTransaction({
                id: result.value.id,
                request: request
              });
              return _context.abrupt("return", success(transaction));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createDelegatedTransaction(_x) {
        return _createDelegatedTransaction.apply(this, arguments);
      }
      return createDelegatedTransaction;
    }()
  }, {
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        var input, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              input = this.resolveMomokaCommentRequest(request);
              _context2.next = 3;
              return this.createTypedData(input);
            case 3:
              result = _context2.sent;
              return _context2.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createUnsignedProtocolCall(_x2) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var input, _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              input = this.resolveMomokaCommentRequest(request);
              _context3.next = 3;
              return this.apolloClient.mutate({
                mutation: CommentOnMomokaDocument,
                variables: {
                  request: input
                }
              });
            case 3:
              _yield$this$apolloCli = _context3.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context3.next = 7;
                break;
              }
              return _context3.abrupt("return", handleRelayError(data.result));
            case 7:
              return _context3.abrupt("return", success(data.result));
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function relayWithProfileManager(_x3) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }, {
    key: "resolveMomokaCommentRequest",
    value: function resolveMomokaCommentRequest(request) {
      return {
        contentURI: request.metadata,
        commentOn: request.commentOn
      };
    }
  }, {
    key: "createTypedData",
    value: function () {
      var _createTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var _yield$this$apolloCli2, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.apolloClient.mutate({
                mutation: CreateMomokaCommentTypedDataDocument,
                variables: {
                  request: request
                }
              });
            case 2:
              _yield$this$apolloCli2 = _context4.sent;
              data = _yield$this$apolloCli2.data;
              return _context4.abrupt("return", data.result);
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function createTypedData(_x4) {
        return _createTypedData.apply(this, arguments);
      }
      return createTypedData;
    }()
  }]);
  return CreateMomokaCommentGateway;
}();

var Eip1559GasPriceEstimate = /*#__PURE__*/function () {
  function Eip1559GasPriceEstimate(baseFee, maxPriorityFeePerGas) {
    _classCallCheck(this, Eip1559GasPriceEstimate);
    this.baseFee = baseFee;
    this.maxPriorityFeePerGas = maxPriorityFeePerGas;
  }
  _createClass(Eip1559GasPriceEstimate, [{
    key: "maxFeePerGas",
    get: function get() {
      // Heuristic logic based on https://www.blocknative.com/blog/eip-1559-fees
      // > maxFeePerGas = (2 * baseFee) + maxPriorityFeePerGas
      // Despite ethers.js uses an hardcoded value for maxPriorityFeePerGas they
      // use the same exact logic to compute maxFeePerGas.
      // see: https://github.com/ethers-io/ethers.js/blob/7175e2e99c2747e8d2314feb407bf0a0f9371ece/packages/abstract-provider/src.ts/index.ts#L247
      return this.baseFee.mul(2).add(this.maxPriorityFeePerGas);
    }
  }, {
    key: "estimatedGasPrice",
    get: function get() {
      return this.baseFee.add(this.maxPriorityFeePerGas);
    }
  }]);
  return Eip1559GasPriceEstimate;
}();
var TransactionExecutionSpeed = /*#__PURE__*/function (TransactionExecutionSpeed) {
  TransactionExecutionSpeed["FAST"] = "fast";
  TransactionExecutionSpeed["AVERAGE"] = "average";
  TransactionExecutionSpeed["SLOW"] = "slow";
  return TransactionExecutionSpeed;
}({});
var BLOCK_COUNT = 20;
var LOWER_PERCENTILE = 1;
var MEAN_PERCENTILE = 50;
var HIGHER_PERCENTILE = 99;
var REWARD_PERCENTILES = [LOWER_PERCENTILE, MEAN_PERCENTILE, HIGHER_PERCENTILE];
var NEWEST_BLOCK = 'pending';
function computeFeeHistoryStats(result) {
  var _blocks;
  var oldestBlock = Number(result.oldestBlock);
  var blockNum = oldestBlock;
  var index = 0;
  var blocks = [];
  while (blockNum < oldestBlock + result.reward.length) {
    var _result$baseFeePerGas, _result$reward$index;
    blocks.push({
      number: blockNum,
      baseFeePerGas: BigDecimal.from((_result$baseFeePerGas = result.baseFeePerGas[index]) !== null && _result$baseFeePerGas !== void 0 ? _result$baseFeePerGas : never("Cannot find baseFeePerGas for block ".concat(blockNum))),
      priorityFeePerGas: ((_result$reward$index = result.reward[index]) !== null && _result$reward$index !== void 0 ? _result$reward$index : never("Cannot find reward for block ".concat(blockNum))).map(function (x) {
        return BigDecimal.from(x);
      })
    });
    blockNum += 1;
    index += 1;
  }
  return {
    blocks: blocks,
    baseFee: ((_blocks = blocks[blocks.length - 1]) !== null && _blocks !== void 0 ? _blocks : never('Cannot index last block')).baseFeePerGas
  };
}
var transactionSpeedToPercentileIndex = _defineProperty(_defineProperty(_defineProperty({}, TransactionExecutionSpeed.SLOW, REWARD_PERCENTILES.indexOf(LOWER_PERCENTILE)), TransactionExecutionSpeed.AVERAGE, REWARD_PERCENTILES.indexOf(MEAN_PERCENTILE)), TransactionExecutionSpeed.FAST, REWARD_PERCENTILES.indexOf(HIGHER_PERCENTILE));
function computeMaxPriorityFeePerGas(blocks, speed) {
  // TODO: set min to 2 Gwei
  var index = transactionSpeedToPercentileIndex[speed];
  return BigDecimal.mean(blocks.map(function (b) {
    var _b$priorityFeePerGas$;
    return (_b$priorityFeePerGas$ = b.priorityFeePerGas[index]) !== null && _b$priorityFeePerGas$ !== void 0 ? _b$priorityFeePerGas$ : never('Cannot find priorityFeePerGas for the specified transactions execution speed');
  }));
}
var Eip1559GasPriceEstimator = /*#__PURE__*/function () {
  function Eip1559GasPriceEstimator(provider, createAmount) {
    _classCallCheck(this, Eip1559GasPriceEstimator);
    this.provider = provider;
    this.createAmount = createAmount;
  }
  _createClass(Eip1559GasPriceEstimator, [{
    key: "estimate",
    value: function () {
      var _estimate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(speed) {
        var _yield$this$fetchFeeH, blocks, baseFee, maxPriorityFeePerGas;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.fetchFeeHistoryStats();
            case 2:
              _yield$this$fetchFeeH = _context.sent;
              blocks = _yield$this$fetchFeeH.blocks;
              baseFee = _yield$this$fetchFeeH.baseFee;
              maxPriorityFeePerGas = computeMaxPriorityFeePerGas(blocks, speed);
              return _context.abrupt("return", new Eip1559GasPriceEstimate(this.createAmount(Denomination.wei(baseFee)), this.createAmount(Denomination.wei(maxPriorityFeePerGas))));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function estimate(_x) {
        return _estimate.apply(this, arguments);
      }
      return estimate;
    }()
  }, {
    key: "fetchFeeHistoryStats",
    value: function () {
      var _fetchFeeHistoryStats = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.provider.send('eth_feeHistory', [BLOCK_COUNT, NEWEST_BLOCK, REWARD_PERCENTILES]);
            case 2:
              response = _context2.sent;
              return _context2.abrupt("return", computeFeeHistoryStats(response));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function fetchFeeHistoryStats() {
        return _fetchFeeHistoryStats.apply(this, arguments);
      }
      return fetchFeeHistoryStats;
    }()
  }]);
  return Eip1559GasPriceEstimator;
}();

var UnsignedContractCallTransaction = /*#__PURE__*/function (_ref) {
  _inherits(UnsignedContractCallTransaction, _ref);
  function UnsignedContractCallTransaction(request, transactionRequest) {
    var _this;
    _classCallCheck(this, UnsignedContractCallTransaction);
    _this = _callSuper(this, UnsignedContractCallTransaction, [v4(), ChainType.POLYGON, request]);
    _this.transactionRequest = transactionRequest;
    return _this;
  }
  return _createClass(UnsignedContractCallTransaction);
}(UnsignedTransaction);
var AbstractContractCallGateway = /*#__PURE__*/function () {
  function AbstractContractCallGateway(config, providerFactory) {
    _classCallCheck(this, AbstractContractCallGateway);
    this.config = config;
    this.providerFactory = providerFactory;
  }
  _createClass(AbstractContractCallGateway, [{
    key: "createUnsignedTransaction",
    value: function () {
      var _createUnsignedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request, wallet) {
        var provider, _yield$this$createCal, contractAddress, encodedData, value, _transactionRequest, gasLimit, gasEstimator, gasPriceEstimate, transactionRequest;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.providerFactory.createProvider({
                chainType: ChainType.POLYGON
              });
            case 2:
              provider = _context.sent;
              _context.next = 5;
              return this.createCallDetails(request, provider);
            case 5:
              _yield$this$createCal = _context.sent;
              contractAddress = _yield$this$createCal.contractAddress;
              encodedData = _yield$this$createCal.encodedData;
              value = _yield$this$createCal.value;
              if (!(this.config.debug === true)) {
                _context.next = 12;
                break;
              }
              _transactionRequest = {
                to: contractAddress,
                from: wallet.address,
                data: encodedData,
                value: value,
                type: 2 // EIP-1559
              };
              return _context.abrupt("return", new UnsignedContractCallTransaction(request, _transactionRequest));
            case 12:
              _context.next = 14;
              return provider.estimateGas({
                to: contractAddress,
                from: wallet.address,
                data: encodedData,
                value: value
              });
            case 14:
              gasLimit = _context.sent;
              gasEstimator = new Eip1559GasPriceEstimator(provider, function (v) {
                return Amount.matic(v);
              });
              _context.next = 18;
              return gasEstimator.estimate(TransactionExecutionSpeed.FAST);
            case 18:
              gasPriceEstimate = _context.sent;
              transactionRequest = {
                to: contractAddress,
                from: wallet.address,
                data: encodedData,
                gasLimit: gasLimit,
                maxFeePerGas: bigNumber(gasPriceEstimate.maxFeePerGas),
                maxPriorityFeePerGas: bigNumber(gasPriceEstimate.maxPriorityFeePerGas),
                type: 2,
                // EIP-1559
                value: value
              };
              return _context.abrupt("return", new UnsignedContractCallTransaction(request, transactionRequest));
            case 21:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createUnsignedTransaction(_x, _x2) {
        return _createUnsignedTransaction.apply(this, arguments);
      }
      return createUnsignedTransaction;
    }()
  }]);
  return AbstractContractCallGateway;
}();

function resolveOpenActionModuleInput(config) {
  var _config$recipient, _config$collectLimit$, _config$collectLimit, _config$endsAt$toISOS, _config$endsAt, _config$collectLimit$2, _config$collectLimit2, _config$endsAt$toISOS2, _config$endsAt2;
  switch (config.type) {
    case OpenActionType.SIMPLE_COLLECT:
      return {
        collectOpenAction: {
          simpleCollectOpenAction: _objectSpread2(_objectSpread2({}, config.amount && {
            amount: {
              currency: config.amount.asset.address,
              value: config.amount.toSignificantDigits()
            },
            referralFee: config.referralFee,
            recipient: (_config$recipient = config.recipient) !== null && _config$recipient !== void 0 ? _config$recipient : null
          }), {}, {
            collectLimit: (_config$collectLimit$ = (_config$collectLimit = config.collectLimit) === null || _config$collectLimit === void 0 ? void 0 : _config$collectLimit.toString()) !== null && _config$collectLimit$ !== void 0 ? _config$collectLimit$ : null,
            endsAt: (_config$endsAt$toISOS = (_config$endsAt = config.endsAt) === null || _config$endsAt === void 0 ? void 0 : _config$endsAt.toISOString()) !== null && _config$endsAt$toISOS !== void 0 ? _config$endsAt$toISOS : null,
            followerOnly: config.followerOnly
          })
        }
      };
    case OpenActionType.MULTIRECIPIENT_COLLECT:
      return {
        collectOpenAction: {
          multirecipientCollectOpenAction: _objectSpread2(_objectSpread2({}, config.amount && {
            amount: {
              currency: config.amount.asset.address,
              value: config.amount.toSignificantDigits()
            },
            referralFee: config.referralFee,
            recipients: config.recipients.map(function (_ref) {
              var recipient = _ref.recipient,
                split = _ref.split;
              return {
                recipient: recipient,
                split: split
              };
            })
          }), {}, {
            collectLimit: (_config$collectLimit$2 = (_config$collectLimit2 = config.collectLimit) === null || _config$collectLimit2 === void 0 ? void 0 : _config$collectLimit2.toString()) !== null && _config$collectLimit$2 !== void 0 ? _config$collectLimit$2 : null,
            endsAt: (_config$endsAt$toISOS2 = (_config$endsAt2 = config.endsAt) === null || _config$endsAt2 === void 0 ? void 0 : _config$endsAt2.toISOString()) !== null && _config$endsAt$toISOS2 !== void 0 ? _config$endsAt$toISOS2 : null,
            followerOnly: config.followerOnly
          })
        }
      };
    case OpenActionType.UNKNOWN_OPEN_ACTION:
      return {
        unknownOpenAction: {
          address: config.address,
          data: config.data
        }
      };
  }
}

function resolveReferenceModuleInput(config) {
  switch (config.type) {
    case ReferencePolicyType.FOLLOWERS_ONLY:
      return {
        followerOnlyReferenceModule: true
      };
    case ReferencePolicyType.DEGREES_OF_SEPARATION:
      return {
        degreesOfSeparationReferenceModule: config.params
      };
    case ReferencePolicyType.NO_ONE:
      return {
        degreesOfSeparationReferenceModule: {
          commentsRestricted: false,
          mirrorsRestricted: false,
          degreesOfSeparation: 0,
          quotesRestricted: false
        }
      };
  }
  return undefined;
}

var CreateOnChainCommentGateway = /*#__PURE__*/function (_ref) {
  _inherits(CreateOnChainCommentGateway, _ref);
  function CreateOnChainCommentGateway(config, providerFactory, apolloClient, transactionFactory) {
    var _this;
    _classCallCheck(this, CreateOnChainCommentGateway);
    _this = _callSuper(this, CreateOnChainCommentGateway, [config, providerFactory]);
    _this.apolloClient = apolloClient;
    _this.transactionFactory = transactionFactory;
    return _this;
  }
  _createClass(CreateOnChainCommentGateway, [{
    key: "createDelegatedTransaction",
    value: function () {
      var _createDelegatedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              transaction = this.transactionFactory.createNativeTransaction({
                chainType: ChainType.POLYGON,
                id: v4(),
                request: request,
                relayerTxId: result.value.txId,
                txHash: result.value.txHash
              });
              return _context.abrupt("return", success(transaction));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createDelegatedTransaction(_x) {
        return _createDelegatedTransaction.apply(this, arguments);
      }
      return createDelegatedTransaction;
    }()
  }, {
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, nonce) {
        var input, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              input = this.resolveOnchainCommentRequest(request);
              _context2.next = 3;
              return this.createTypedData(input, nonce);
            case 3:
              result = _context2.sent;
              return _context2.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createUnsignedProtocolCall(_x2, _x3) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "createCallDetails",
    value: function () {
      var _createCallDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var input, result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              input = this.resolveOnchainCommentRequest(request);
              _context3.next = 3;
              return this.createTypedData(input);
            case 3:
              result = _context3.sent;
              return _context3.abrupt("return", this.createCommentCallDetails(result));
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function createCallDetails(_x4) {
        return _createCallDetails.apply(this, arguments);
      }
      return createCallDetails;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var input, _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              input = this.resolveOnchainCommentRequest(request);
              _context4.next = 3;
              return this.apolloClient.mutate({
                mutation: CommentOnchainDocument,
                variables: {
                  request: input
                }
              });
            case 3:
              _yield$this$apolloCli = _context4.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context4.next = 7;
                break;
              }
              return _context4.abrupt("return", handleRelayError(data.result));
            case 7:
              return _context4.abrupt("return", success(data.result));
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function relayWithProfileManager(_x5) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }, {
    key: "createCommentCallDetails",
    value: function createCommentCallDetails(result) {
      var contract = digiHub(result.typedData.domain.verifyingContract);
      var encodedData = contract["interface"].encodeFunctionData('comment', [{
        profileId: result.typedData.message.profileId,
        contentURI: result.typedData.message.contentURI,
        pointedProfileId: result.typedData.message.pointedProfileId,
        pointedPubId: result.typedData.message.pointedPubId,
        referrerProfileIds: result.typedData.message.referrerProfileIds,
        referrerPubIds: result.typedData.message.referrerPubIds,
        referenceModuleData: result.typedData.message.referenceModuleData,
        actionModules: result.typedData.message.actionModules,
        actionModulesInitDatas: result.typedData.message.actionModulesInitDatas,
        referenceModule: result.typedData.message.referenceModule,
        referenceModuleInitData: result.typedData.message.referenceModuleInitData
      }]);
      return {
        contractAddress: result.typedData.domain.verifyingContract,
        encodedData: encodedData
      };
    }
  }, {
    key: "createTypedData",
    value: function () {
      var _createTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, nonce) {
        var _yield$this$apolloCli2, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.apolloClient.mutate({
                mutation: CreateOnchainCommentTypedDataDocument,
                variables: {
                  request: request,
                  options: nonce ? {
                    overrideSigNonce: nonce
                  } : undefined
                }
              });
            case 2:
              _yield$this$apolloCli2 = _context5.sent;
              data = _yield$this$apolloCli2.data;
              return _context5.abrupt("return", data.result);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function createTypedData(_x6, _x7) {
        return _createTypedData.apply(this, arguments);
      }
      return createTypedData;
    }()
  }, {
    key: "resolveOnchainCommentRequest",
    value: function resolveOnchainCommentRequest(request) {
      var _request$actions;
      return {
        contentURI: request.metadata,
        commentOn: request.commentOn,
        openActionModules: (_request$actions = request.actions) === null || _request$actions === void 0 ? void 0 : _request$actions.map(resolveOpenActionModuleInput),
        referenceModule: request.reference && resolveReferenceModuleInput(request.reference)
      };
    }
  }]);
  return CreateOnChainCommentGateway;
}(AbstractContractCallGateway);

function useCreateCommentController() {
  var _useSharedDependencie = useSharedDependencies(),
    activeWallet = _useSharedDependencie.activeWallet,
    apolloClient = _useSharedDependencie.apolloClient,
    config = _useSharedDependencie.config,
    momokaRelayer = _useSharedDependencie.momokaRelayer,
    onChainRelayer = _useSharedDependencie.onChainRelayer,
    providerFactory = _useSharedDependencie.providerFactory,
    publicationCacheManager = _useSharedDependencie.publicationCacheManager,
    transactionFactory = _useSharedDependencie.transactionFactory,
    transactionGateway = _useSharedDependencie.transactionGateway,
    transactionQueue = _useSharedDependencie.transactionQueue;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, onChainGateway, onChainComment, delegableOnChainComment, offChainGateway, momokaComment, delegableMomokaComment, paidOnChainQuote, createComment;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            presenter = new NewPublicationPresenter(function (tx) {
              return publicationCacheManager.fetchNewComment(tx);
            });
            onChainGateway = new CreateOnChainCommentGateway(config, providerFactory, apolloClient, transactionFactory);
            onChainComment = new SignedOnChain(activeWallet, transactionGateway, onChainGateway, onChainRelayer, transactionQueue, presenter);
            delegableOnChainComment = new DelegableSigning(onChainComment, onChainGateway, transactionQueue, presenter);
            offChainGateway = new CreateMomokaCommentGateway(apolloClient, transactionFactory);
            momokaComment = new SubsidizeOffChain(activeWallet, offChainGateway, momokaRelayer, transactionQueue, presenter);
            delegableMomokaComment = new DelegableSigning(momokaComment, offChainGateway, transactionQueue, presenter);
            paidOnChainQuote = new PaidTransaction(activeWallet, onChainGateway, presenter, transactionQueue);
            createComment = new CreateComment(delegableOnChainComment, delegableMomokaComment, paidOnChainQuote);
            _context.next = 11;
            return createComment.execute(request);
          case 11:
            return _context.abrupt("return", presenter.asResult());
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * @internal
 */
function useSponsoredConfig() {
  var _useSharedDependencie = useSharedDependencies(),
    config = _useSharedDependencie.config;

  /**
   * Disables the sponsored flag if RequiredConfig says so
   */
  return function (request) {
    return config.sponsored ? request : _objectSpread2(_objectSpread2({}, request), {}, {
      sponsored: false
    });
  };
}

/**
 * An object representing the result of a comment creation.
 *
 * It allows to wait for the comment to be fully processed and indexed.
 */

/**
 * Create new comment details.
 */

/**
 * `useCreateComment` is React Hook that allows you to create a new DiGi Comment.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```ts
 * const { execute, error, loading } = useCreateComment();
 * ```
 *
 * ## Basic usage
 *
 * Create a text-only comment:
 *
 * ```tsx
 * const { execute, error, loading } = useCreateComment();
 *
 * const comment = async (content: string) => {
 *   // create the desired metadata via the `@digiv3rse/metadata` package helpers
 *   const metadata = textOnly({ content });
 *
 *   // upload the metadata to a storage provider of your choice (IPFS in this example)
 *   const uri = await uploadToIpfs(metadata);
 *
 *   // invoke the `execute` function to create the comment
 *   const result = await execute({
 *     commentOn: publicationId, // the publication ID to comment on
 *     metadata: uri,
 *   });
 * }
 * ```
 *
 * See the [`@digiv3rse/metadata` package](https://github.com/digi-protocol/metadata) for more
 * information on how to create metadata for other types of publications.
 *
 * ## Failure scenarios
 *
 * You can handle possible failure scenarios by checking the `result` value.
 *
 * ```tsx
 * const { execute, error, loading } = useCreateComment();
 *
 * const comment = async (content: string) => {
 *   // first part is the same as in the initial example
 *
 *   // invoke the `execute` function to create the comment
 *   const result = await execute({
 *
 *     metadata: uri,
 *     commentOn: publicationId,
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'BroadcastingError':
 *         console.log('There was an error broadcasting the transaction', error.message);
 *         break;
 *
 *       case 'PendingSigningRequestError':
 *         console.log(
 *           'There is a pending signing request in your wallet. ' +
 *             'Approve it or discard it and try again.'
 *         );
 *         break;
 *
 *       case 'WalletConnectionError':
 *         console.log('There was an error connecting to your wallet', error.message);
 *         break;
 *
 *       case 'UserRejectedError':
 *         // the user decided to not sign, usually this is silently ignored by UIs
 *         break;
 *     }
 *     return;
 *   }
 * };
 * ```
 * At this point the comment creation is completed from an end-user perspective but,
 * in case of on-chain TX, this is not necessarily mined and indexed (yet). See the following section.
 *
 * ## Wait for completion
 *
 * In case of successful submission, the `result` value can be used to wait for the comment to be fully processed.
 *
 * This gives you an opportunity to decide what UX to provide to the end-user.
 *
 * For example if the comment is on-chain it might take a while to be mined and indexed. So you might want to show a loading indicator or
 * let the user navigate away from the page.
 *
 * ```tsx
 * const { execute, error, loading } = useCreateComment();
 *
 * const comment = async (content: string) => {
 *   // first part is the same as in the initial example
 *
 *   // invoke the `execute` function to create the comment
 *   const result = await execute({
 *     commentOn: publicationId,
 *     metadata: uri,
 *   });
 *
 *   if (result.isFailure()) {
 *     // handle failure scenarios
 *     return;
 *   }
 *
 *   // this might take a while, depends on the type of tx (on-chain or Momoka)
 *   // and the congestion of the network
 *   const completion = await result.value.waitForCompletion();
 *
 *   if (completion.isFailure()) {
 *     console.log('There was an processing the transaction', completion.error.message);
 *     return;
 *   }
 *
 *   // the comment is now ready to be used
 *   const comment = completion.value;
 *   console.log('Comment created', comment);
 * };
 * ```
 *
 * ## Open actions
 *
 * Contextually to the comment creation you can configure the open actions.
 *
 * As with anything involving amounts in the DiGi SDK you can use the
 * {@link Amount} helper with currencies from the {@link useCurrencies} hook to
 * create the desired amounts.
 *
 * Create a comment with a `SimpleCollectOpenAction` module:
 * ```tsx
 * const wmatic = ... // from useCurrencies hook
 *
 * const result = await execute({
 *   commentOn: publicationId,
 *   metadata: uri,
 *   actions: [
 *     {
 *       type: OpenActionType.SIMPLE_COLLECT,
 *       amount: Amount.erc20(wmatic, 100), // 100 WMATIC
 *       followerOnly: true,
 *       collectLimit: 10,
 *       recipient: '0x4f94FAFEE38F545920485fC747467EFc85C302E0',
 *       endsAt: new Date('2025-12-31T00:00:00.000Z'),
 *     }
 *   ]
 * });
 * ```
 * See {@link SimpleCollectActionConfig} for more details.
 *
 * Create a comment with a `MultirecipientCollectOpenAction` module:
 * ```tsx
 * const wmatic = ... // from useCurrencies hook
 *
 * const result = await execute({
 *   commentOn: publicationId,
 *   metadata: uri,
 *   actions: [
 *     {
 *       type: OpenActionType.MULTIRECIPIENT_COLLECT,
 *       amount: Amount.erc20(wmatic, 100), // 100 WMATIC
 *       followerOnly: true,
 *       collectLimit: 10,
 *       recipients: [
 *         {
 *           recipient: '0x4f94FAFEE38F545920485fC747467EFc85C302E0',
 *           split: 30, // 30%
 *         },
 *         {
 *           recipient: '0x097A4fE5cfFf0360438990b88549d4288748f6cB',
 *           split: 70, // 70%
 *         },
 *       ],
 *       endsAt: new Date('2025-12-31T00:00:00.000Z'),
 *     }
 *   ]
 * });
 * ```
 *
 * See {@link MultirecipientCollectActionConfig} for more details.
 *
 * Finally you can also create a comment with a custom open action (AKA unknown open action):
 *
 * ```tsx
 * const result = await execute({
 *   commentOn: publicationId,
 *   metadata: uri,
 *   actions: [
 *     {
 *       type: OpenActionType.UNKNOWN_OPEN_ACTION,
 *       address: '0x4f94FAFEE38F545920485fC747467EFc85C302E0',
 *       data: '0x.....'
 *     }
 *   ]
 * });
 * ```
 *
 * See {@link UnknownOpenActionConfig} for more details.
 *
 * ## Reference policy
 *
 * Contextually to the comment creation you can configure the reference policy.
 *
 * No one can comment, quote, or mirror the comment:
 * ```tsx
 * const result = await execute({
 *   commentOn: publicationId,
 *   metadata: uri,
 *
 *   reference: {
 *     type: ReferencePolicyType.NO_ONE
 *   }
 * });
 * ```
 *
 * Only followers can comment, quote, or mirror the comment:
 * ```tsx
 * const result = await execute({
 *   commentOn: publicationId,
 *   metadata: uri,
 *
 *   reference: {
 *     type: ReferencePolicyType.FOLLOWERS_ONLY
 *   }
 * });
 * ```
 *
 * You can have finer control over who can comment, quote, or mirror the comment by using the `DEGREES_OF_SEPARATION` reference policy:
 * ```tsx
 * const result = await execute({
 *   commentOn: publicationId,
 *   metadata: uri,
 *
 *   reference: {
 *     type: ReferencePolicyType.DEGREES_OF_SEPARATION,
 *     params: {
 *       degreesOfSeparation: 2, // followers and followers of your followers
 *       commentsRestricted: true, // can comment
 *       mirrorsRestricted: true, // can mirror
 *       quotesRestricted: false, // cannot quote
 *     }
 *   }
 * });
 * ```
 *
 * You can even set the `DEGREES_OF_SEPARATION` reference policy to follow someone elses graph:
 * ```tsx
 * const result = await execute({
 *   commentOn: publicationId,
 *   metadata: uri,
 *
 *   reference: {
 *     type: ReferencePolicyType.DEGREES_OF_SEPARATION,
 *     params: {
 *       degreesOfSeparation: 2, // followers and followers of your followers
 *       commentsRestricted: true, // can comment
 *       mirrorsRestricted: true, // can mirror
 *       quotesRestricted: false, // cannot quote
 *
 *       sourceProfileId: '0x01', // in relation to Profile Id 0x01
 *     }
 *   }
 * });
 * ```
 *
 * See {@link DegreesOfSeparationReferencePolicyConfig} for more details.
 *
 * ## Creating an app-specific comment
 *
 * You can create a comment that is specific to an app by defining the `appId` when creating the comment metadata.
 *
 * This allows apps to build custom experiences by only surfacing publications that were created in their app.
 *
 * ```tsx
 * const metadata = textOnly({
 *  content: `Hello world!`,
 *  appId: 'my-app-id',
 * });
 *
 * const uri = await uploadToIpfs(metadata);
 *
 * const result = await execute({
 *  commentOn: publicationId,
 *  metadata: uri,
 * });
 * ```
 *
 * ## Self-funded approach
 *
 * In case you want to pay for the transaction gas costs yourself, you can do so by setting the
 * `sponsored` parameter to `false`:
 *
 * ```ts
 * const comment = async (content: string) => {
 *   // create and upload metadata as before
 *
 *   const result = await execute({
 *     metadata: uri,
 *     commentOn: : publicationId,
 *     sponsored: false,
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientGasError':
 *         console.log('You do not have enough funds to pay for the transaction cost.');
 *         break;
 *
 *       // ...
 *     }
 *     return;
 *   }
 *
 *   // ...
 * }
 * ```
 *
 * The example above shows how to detect when the user does not have enough funds to pay for the transaction cost.
 *
 * ## Self-funded fallback
 *
 * If for some reason the DiGi API cannot sponsor the transaction, the hook will fail with a {@link BroadcastingError} with one of the following reasons:
 * - {@link BroadcastingErrorReason.NOT_SPONSORED} - the profile is not sponsored
 * - {@link BroadcastingErrorReason.RATE_LIMITED} - the profile reached the rate limit
 * - {@link BroadcastingErrorReason.APP_NOT_ALLOWED} - the app is not whitelisted for gasless transactions
 *
 * In those cases you can retry the transaction as self-funded like in the following example:
 *
 * ```ts
 * const comment = async (content: string) => {
 *   // create and upload metadata as before
 *
 *   const sponsoredResult = await execute({
 *     metadata: uri,
 *     commentOn: : publicationId,
 *   });
 *
 *   if (sponsoredResult.isFailure()) {
 *     switch (sponsoredResult.error.name) {
 *       case 'BroadcastingError':
 *         if ([BroadcastingErrorReason.NOT_SPONSORED, BroadcastingErrorReason.RATE_LIMITED].includes(sponsoredResult.error.reason)) {
 *
 *           const chargedResult = = await execute({
 *             metadata: uri,
 *             commentOn: : publicationId,
 *             sponsored: false,
 *           });
 *
 *           // continue with chargedResult as in the previous example
 *         }
 *         break;
 *
 *      // ...
 *   }
 * }
 * ```
 *
 * We omitted the handling of the {@link BroadcastingErrorReason.APP_NOT_ALLOWED} error because it's usually
 * something that builder will face when deploying their app to production using the Production DiGi API.
 *
 * It just requires the app to apply for whitelisting. See https://docs.digi.xyz/docs/gasless-and-signless#whitelisting-your-app.
 *
 * ## Momoka comments
 *
 * For a comment to be hosted on Momoka it must meet the following criteria:
 * - it must be a comment for a Momoka publication
 * - reference policy `ANYONE` (which is also the default value in case it's not specified)
 * - no open actions
 * - sponsored by the DiGi API (which is also the default value in case it's not specified)
 *
 * If the comment does not meet the above criteria, it will be hosted on-chain.
 *
 * ## Upgrading from v1
 *
 * Replace the `useCreateComment` hook with `useCreateComment` like in the following diff:
 * ```diff
 * - const { execute, error, isPending } = useCreateComment({ publisher, upload: uploadToIpfs });
 * + const { execute, error, loading } = useCreateComment();
 * ```
 * Amend the code that used to call the `execute` function to:
 * ```ts
 * // first: create metadata using the `@digiv3rse/metadata` package
 * const metadata = textOnly({
 *   content: `Hello world!`,
 * });
 *
 * // second: upload it using the upload function you used to pass to `useCreateComment`:
 * const uri = await uploadToIpfs(metadata);
 *
 * // finally, invoke the `execute` function:
 * const result = await execute({
 *   commentOn: publicationId,
 *   metadata: uri,
 * })
 *
 * // continue as usual
 * ```
 *
 * @category Publications
 * @group Hooks
 */
function useCreateComment() {
  var _useSession = useSession(),
    session = _useSession.data;
  var createComment = useCreateCommentController();
  var configureRequest = useSponsoredConfig();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _args$sponsored;
      var request;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to create a comment. Use `useLogin` hook to authenticate.');
            invariant(session.type === SessionType.WithProfile, 'You must have a profile to create a comment.');
            request = configureRequest(createCommentRequest(_objectSpread2({
              signless: session.profile.signless,
              sponsored: (_args$sponsored = args.sponsored) !== null && _args$sponsored !== void 0 ? _args$sponsored : true
            }, args)));
            return _context.abrupt("return", createComment(request));
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

var CreateMomokaMirrorGateway = /*#__PURE__*/function () {
  function CreateMomokaMirrorGateway(apolloClient, transactionFactory) {
    _classCallCheck(this, CreateMomokaMirrorGateway);
    this.apolloClient = apolloClient;
    this.transactionFactory = transactionFactory;
  }
  _createClass(CreateMomokaMirrorGateway, [{
    key: "createDelegatedTransaction",
    value: function () {
      var _createDelegatedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              transaction = this.transactionFactory.createDataTransaction({
                id: result.value.id,
                request: request
              });
              return _context.abrupt("return", success(transaction));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createDelegatedTransaction(_x) {
        return _createDelegatedTransaction.apply(this, arguments);
      }
      return createDelegatedTransaction;
    }()
  }, {
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        var input, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              input = this.resolveMomokaMirrorRequest(request);
              _context2.next = 3;
              return this.createTypedData(input);
            case 3:
              result = _context2.sent;
              return _context2.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createUnsignedProtocolCall(_x2) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var input, _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              input = this.resolveMomokaMirrorRequest(request);
              _context3.next = 3;
              return this.apolloClient.mutate({
                mutation: MirrorOnMomokaDocument,
                variables: {
                  request: input
                }
              });
            case 3:
              _yield$this$apolloCli = _context3.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context3.next = 7;
                break;
              }
              return _context3.abrupt("return", handleRelayError(data.result));
            case 7:
              return _context3.abrupt("return", success(data.result));
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function relayWithProfileManager(_x3) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }, {
    key: "resolveMomokaMirrorRequest",
    value: function resolveMomokaMirrorRequest(request) {
      return {
        mirrorOn: request.mirrorOn
      };
    }
  }, {
    key: "createTypedData",
    value: function () {
      var _createTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var _yield$this$apolloCli2, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.apolloClient.mutate({
                mutation: CreateMomokaMirrorTypedDataDocument,
                variables: {
                  request: request
                }
              });
            case 2:
              _yield$this$apolloCli2 = _context4.sent;
              data = _yield$this$apolloCli2.data;
              return _context4.abrupt("return", data.result);
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function createTypedData(_x4) {
        return _createTypedData.apply(this, arguments);
      }
      return createTypedData;
    }()
  }]);
  return CreateMomokaMirrorGateway;
}();

var CreateOnChainMirrorGateway = /*#__PURE__*/function (_ref) {
  _inherits(CreateOnChainMirrorGateway, _ref);
  function CreateOnChainMirrorGateway(config, providerFactory, apolloClient, transactionFactory) {
    var _this;
    _classCallCheck(this, CreateOnChainMirrorGateway);
    _this = _callSuper(this, CreateOnChainMirrorGateway, [config, providerFactory]);
    _this.apolloClient = apolloClient;
    _this.transactionFactory = transactionFactory;
    return _this;
  }
  _createClass(CreateOnChainMirrorGateway, [{
    key: "createDelegatedTransaction",
    value: function () {
      var _createDelegatedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              transaction = this.transactionFactory.createNativeTransaction({
                chainType: ChainType.POLYGON,
                id: v4(),
                request: request,
                relayerTxId: result.value.txId,
                txHash: result.value.txHash
              });
              return _context.abrupt("return", success(transaction));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createDelegatedTransaction(_x) {
        return _createDelegatedTransaction.apply(this, arguments);
      }
      return createDelegatedTransaction;
    }()
  }, {
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, nonce) {
        var input, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              input = this.resolveOnchainMirrorRequest(request);
              _context2.next = 3;
              return this.createTypedData(input, nonce);
            case 3:
              result = _context2.sent;
              return _context2.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createUnsignedProtocolCall(_x2, _x3) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "createCallDetails",
    value: function () {
      var _createCallDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var input, result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              input = this.resolveOnchainMirrorRequest(request);
              _context3.next = 3;
              return this.createTypedData(input);
            case 3:
              result = _context3.sent;
              return _context3.abrupt("return", this.createMirrorCallDetails(result));
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function createCallDetails(_x4) {
        return _createCallDetails.apply(this, arguments);
      }
      return createCallDetails;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var input, _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              input = this.resolveOnchainMirrorRequest(request);
              _context4.next = 3;
              return this.apolloClient.mutate({
                mutation: MirrorOnchainDocument,
                variables: {
                  request: input
                }
              });
            case 3:
              _yield$this$apolloCli = _context4.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context4.next = 7;
                break;
              }
              return _context4.abrupt("return", handleRelayError(data.result));
            case 7:
              return _context4.abrupt("return", success(data.result));
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function relayWithProfileManager(_x5) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }, {
    key: "createMirrorCallDetails",
    value: function createMirrorCallDetails(result) {
      var contract = digiHub(result.typedData.domain.verifyingContract);
      var encodedData = contract["interface"].encodeFunctionData('mirror', [{
        profileId: result.typedData.message.profileId,
        metadataURI: result.typedData.message.metadataURI,
        pointedProfileId: result.typedData.message.pointedProfileId,
        pointedPubId: result.typedData.message.pointedPubId,
        referrerProfileIds: result.typedData.message.referrerProfileIds,
        referrerPubIds: result.typedData.message.referrerPubIds,
        referenceModuleData: result.typedData.message.referenceModuleData
      }]);
      return {
        contractAddress: result.typedData.domain.verifyingContract,
        encodedData: encodedData
      };
    }
  }, {
    key: "createTypedData",
    value: function () {
      var _createTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, nonce) {
        var _yield$this$apolloCli2, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.apolloClient.mutate({
                mutation: CreateOnchainMirrorTypedDataDocument,
                variables: {
                  request: request,
                  options: nonce ? {
                    overrideSigNonce: nonce
                  } : undefined
                }
              });
            case 2:
              _yield$this$apolloCli2 = _context5.sent;
              data = _yield$this$apolloCli2.data;
              return _context5.abrupt("return", data.result);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function createTypedData(_x6, _x7) {
        return _createTypedData.apply(this, arguments);
      }
      return createTypedData;
    }()
  }, {
    key: "resolveOnchainMirrorRequest",
    value: function resolveOnchainMirrorRequest(request) {
      return {
        mirrorOn: request.mirrorOn
      };
    }
  }]);
  return CreateOnChainMirrorGateway;
}(AbstractContractCallGateway);

function useCreateMirrorController() {
  var _useSharedDependencie = useSharedDependencies(),
    activeWallet = _useSharedDependencie.activeWallet,
    apolloClient = _useSharedDependencie.apolloClient,
    config = _useSharedDependencie.config,
    momokaRelayer = _useSharedDependencie.momokaRelayer,
    onChainRelayer = _useSharedDependencie.onChainRelayer,
    providerFactory = _useSharedDependencie.providerFactory,
    publicationCacheManager = _useSharedDependencie.publicationCacheManager,
    transactionFactory = _useSharedDependencie.transactionFactory,
    transactionGateway = _useSharedDependencie.transactionGateway,
    transactionQueue = _useSharedDependencie.transactionQueue;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, onChainGateway, onChainMirror, delegableOnChainMirror, offChainGateway, momokaMirror, delegableMomokaMirror, paidOnChainQuote, createMirror;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            presenter = new NewPublicationPresenter(function (tx) {
              return publicationCacheManager.fetchNewMirror(tx);
            });
            onChainGateway = new CreateOnChainMirrorGateway(config, providerFactory, apolloClient, transactionFactory);
            onChainMirror = new SignedOnChain(activeWallet, transactionGateway, onChainGateway, onChainRelayer, transactionQueue, presenter);
            delegableOnChainMirror = new DelegableSigning(onChainMirror, onChainGateway, transactionQueue, presenter);
            offChainGateway = new CreateMomokaMirrorGateway(apolloClient, transactionFactory);
            momokaMirror = new SubsidizeOffChain(activeWallet, offChainGateway, momokaRelayer, transactionQueue, presenter);
            delegableMomokaMirror = new DelegableSigning(momokaMirror, offChainGateway, transactionQueue, presenter);
            paidOnChainQuote = new PaidTransaction(activeWallet, onChainGateway, presenter, transactionQueue);
            createMirror = new CreateMirror(delegableOnChainMirror, delegableMomokaMirror, paidOnChainQuote);
            _context.next = 11;
            return createMirror.execute(request);
          case 11:
            return _context.abrupt("return", presenter.asResult());
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * An object representing the result of a mirror creation.
 *
 * It allows to wait for the mirror to be fully processed and indexed.
 */

/**
 * Mirror a publication.
 */

/**
 * `useCreateMirror` is React Hook that allows you to mirror a DiGi publication.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```ts
 * const { execute, error, loading } = useCreateMirror();
 * ```
 *
 * ## Basic usage
 *
 * ```tsx
 * const { execute, error, loading } = useCreateMirror();
 *
 * const mirror = () => {
 *   const result = await execute({
 *     mirrorOn: publicationId, // the publication ID to mirror
 *   });
 * }
 * ```
 *
 * ## Failure scenarios
 *
 * You can handle possible failure scenarios by checking the `result` value.
 *
 * ```tsx
 * const { execute, error, loading } = useCreateMirror();
 *
 * const mirror = async () => {
 *   const result = await execute({
 *     mirrorOn: publicationId,
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'BroadcastingError':
 *         console.log('There was an error broadcasting the transaction', error.message);
 *         break;
 *
 *       case 'PendingSigningRequestError':
 *         console.log(
 *           'There is a pending signing request in your wallet. ' +
 *             'Approve it or discard it and try again.'
 *         );
 *         break;
 *
 *       case 'WalletConnectionError':
 *         console.log('There was an error connecting to your wallet', error.message);
 *         break;
 *
 *       case 'UserRejectedError':
 *         // the user decided to not sign, usually this is silently ignored by UIs
 *         break;
 *     }
 *     return;
 *   }
 * };
 * ```
 * At this point the mirror creation is completed from an end-user perspective but,
 * in case of on-chain TX, this is not necessarily mined and indexed (yet). See the following section.
 *
 * ## Wait for completion
 *
 * In case of successful submission, the `result` value can be used to wait for the mirror to be fully processed.
 *
 * This gives you an opportunity to decide what UX to provide to the end-user.
 *
 * For example if the mirror is on-chain it might take a while to be mined and indexed. So you might want to show a loading indicator or
 * let the user navigate away from the page.
 *
 * ```tsx
 * const { execute, error, loading } = useCreateMirror();
 *
 * const mirror = async () => {
 *   const result = await execute({
 *     mirrorOn: publicationId,
 *   });
 *
 *   if (result.isFailure()) {
 *     // handle failure scenarios
 *     return;
 *   }
 *
 *   // this might take a while, depends on the type of tx (on-chain or Momoka)
 *   // and the congestion of the network
 *   const completion = await result.value.waitForCompletion();
 *
 *   if (completion.isFailure()) {
 *     console.log('There was an processing the transaction', completion.error.message);
 *     return;
 *   }
 *
 *   // the mirror is now ready to be used
 *   const mirror = completion.value;
 *   console.log('Mirror created', mirror);
 * };
 * ```
 *
 * ## Self-funded approach
 *
 * In case you want to pay for the transaction gas costs yourself, you can do so by setting the
 * `sponsored` parameter to `false`:
 *
 * ```ts
 * const mirror = async (publicationId: PublicationId) => {
 *   const result = await execute({
 *     mirrorOn: publicationId,
 *     sponsored: false,
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientGasError':
 *         console.log('You do not have enough funds to pay for the transaction cost.');
 *         break;
 *
 *       // ...
 *     }
 *     return;
 *   }
 *
 *   // ...
 * }
 * ```
 *
 * The example above shows how to detect when the user does not have enough funds to pay for the transaction cost.
 *
 * ## Self-funded fallback
 *
 * If for some reason the DiGi API cannot sponsor the transaction, the hook will fail with a {@link BroadcastingError} with one of the following reasons:
 * - {@link BroadcastingErrorReason.NOT_SPONSORED} - the profile is not sponsored
 * - {@link BroadcastingErrorReason.RATE_LIMITED} - the profile reached the rate limit
 * - {@link BroadcastingErrorReason.APP_NOT_ALLOWED} - the app is not whitelisted for gasless transactions
 *
 * In those cases you can retry the transaction as self-funded like in the following example:
 *
 * ```ts
 * const mirror = async (publicationId: PublicationId) => {
 *   const sponsoredResult = await execute({
 *     mirrorOn: publicationId,
 *     sponsored: false,
 *   });
 *
 *   if (sponsoredResult.isFailure()) {
 *     switch (sponsoredResult.error.name) {
 *       case 'BroadcastingError':
 *         if ([BroadcastingErrorReason.NOT_SPONSORED, BroadcastingErrorReason.RATE_LIMITED].includes(sponsoredResult.error.reason)) {
 *
 *           const chargedResult = = await execute({
 *             mirrorOn: publicationId,
 *             sponsored: false,
 *           });
 *
 *           // continue with chargedResult as in the previous example
 *         }
 *         break;
 *
 *      // ...
 *   }
 * }
 * ```
 *
 * We omitted the handling of the {@link BroadcastingErrorReason.APP_NOT_ALLOWED} error because it's usually
 * something that builder will face when deploying their app to production using the Production DiGi API.
 *
 * It just requires the app to apply for whitelisting. See https://docs.digi.xyz/docs/gasless-and-signless#whitelisting-your-app.
 *
 *
 * @category Publications
 * @group Hooks
 */
function useCreateMirror() {
  var _useSession = useSession(),
    session = _useSession.data;
  var createMirror = useCreateMirrorController();
  var configureRequest = useSponsoredConfig();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _args$sponsored;
      var request;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to create a mirror. Use `useLogin` hook to authenticate.');
            invariant(session.type === SessionType.WithProfile, 'You must have a profile to create a mirror.');
            request = configureRequest(createMirrorRequest(_objectSpread2({
              signless: session.profile.signless,
              sponsored: (_args$sponsored = args.sponsored) !== null && _args$sponsored !== void 0 ? _args$sponsored : true
            }, args)));
            return _context.abrupt("return", createMirror(request));
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

var CreateMomokaPostGateway = /*#__PURE__*/function () {
  function CreateMomokaPostGateway(apolloClient, transactionFactory) {
    _classCallCheck(this, CreateMomokaPostGateway);
    this.apolloClient = apolloClient;
    this.transactionFactory = transactionFactory;
  }
  _createClass(CreateMomokaPostGateway, [{
    key: "createDelegatedTransaction",
    value: function () {
      var _createDelegatedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              transaction = this.transactionFactory.createDataTransaction({
                id: result.value.id,
                request: request
              });
              return _context.abrupt("return", success(transaction));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createDelegatedTransaction(_x) {
        return _createDelegatedTransaction.apply(this, arguments);
      }
      return createDelegatedTransaction;
    }()
  }, {
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        var input, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              input = this.resolveMomokaPostRequest(request);
              _context2.next = 3;
              return this.createTypedData(input);
            case 3:
              result = _context2.sent;
              return _context2.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createUnsignedProtocolCall(_x2) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var input, _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              input = this.resolveMomokaPostRequest(request);
              _context3.next = 3;
              return this.apolloClient.mutate({
                mutation: PostOnMomokaDocument,
                variables: {
                  request: input
                }
              });
            case 3:
              _yield$this$apolloCli = _context3.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context3.next = 7;
                break;
              }
              return _context3.abrupt("return", handleRelayError(data.result));
            case 7:
              return _context3.abrupt("return", success(data.result));
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function relayWithProfileManager(_x3) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }, {
    key: "resolveMomokaPostRequest",
    value: function resolveMomokaPostRequest(request) {
      return {
        contentURI: request.metadata
      };
    }
  }, {
    key: "createTypedData",
    value: function () {
      var _createTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var _yield$this$apolloCli2, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.apolloClient.mutate({
                mutation: CreateMomokaPostTypedDataDocument,
                variables: {
                  request: request
                }
              });
            case 2:
              _yield$this$apolloCli2 = _context4.sent;
              data = _yield$this$apolloCli2.data;
              return _context4.abrupt("return", data.result);
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function createTypedData(_x4) {
        return _createTypedData.apply(this, arguments);
      }
      return createTypedData;
    }()
  }]);
  return CreateMomokaPostGateway;
}();

var CreateOnChainPostGateway = /*#__PURE__*/function (_ref) {
  _inherits(CreateOnChainPostGateway, _ref);
  function CreateOnChainPostGateway(config, providerFactory, apolloClient, transactionFactory) {
    var _this;
    _classCallCheck(this, CreateOnChainPostGateway);
    _this = _callSuper(this, CreateOnChainPostGateway, [config, providerFactory]);
    _this.apolloClient = apolloClient;
    _this.transactionFactory = transactionFactory;
    return _this;
  }
  _createClass(CreateOnChainPostGateway, [{
    key: "createDelegatedTransaction",
    value: function () {
      var _createDelegatedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              transaction = this.transactionFactory.createNativeTransaction({
                chainType: ChainType.POLYGON,
                id: v4(),
                request: request,
                relayerTxId: result.value.txId,
                txHash: result.value.txHash
              });
              return _context.abrupt("return", success(transaction));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createDelegatedTransaction(_x) {
        return _createDelegatedTransaction.apply(this, arguments);
      }
      return createDelegatedTransaction;
    }()
  }, {
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, nonce) {
        var input, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              input = this.resolveOnchainPostRequest(request);
              _context2.next = 3;
              return this.createTypedData(input, nonce);
            case 3:
              result = _context2.sent;
              return _context2.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createUnsignedProtocolCall(_x2, _x3) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "createCallDetails",
    value: function () {
      var _createCallDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var input, result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              input = this.resolveOnchainPostRequest(request);
              _context3.next = 3;
              return this.createTypedData(input);
            case 3:
              result = _context3.sent;
              return _context3.abrupt("return", this.createPostCallDetails(result));
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function createCallDetails(_x4) {
        return _createCallDetails.apply(this, arguments);
      }
      return createCallDetails;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var input, _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              input = this.resolveOnchainPostRequest(request);
              _context4.next = 3;
              return this.apolloClient.mutate({
                mutation: PostOnchainDocument,
                variables: {
                  request: input
                }
              });
            case 3:
              _yield$this$apolloCli = _context4.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context4.next = 7;
                break;
              }
              return _context4.abrupt("return", handleRelayError(data.result));
            case 7:
              return _context4.abrupt("return", success(data.result));
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function relayWithProfileManager(_x5) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }, {
    key: "createPostCallDetails",
    value: function createPostCallDetails(result) {
      var contract = digiHub(result.typedData.domain.verifyingContract);
      var encodedData = contract["interface"].encodeFunctionData('post', [{
        profileId: result.typedData.message.profileId,
        contentURI: result.typedData.message.contentURI,
        actionModules: result.typedData.message.actionModules,
        actionModulesInitDatas: result.typedData.message.actionModulesInitDatas,
        referenceModule: result.typedData.message.referenceModule,
        referenceModuleInitData: result.typedData.message.referenceModuleInitData
      }]);
      return {
        contractAddress: result.typedData.domain.verifyingContract,
        encodedData: encodedData
      };
    }
  }, {
    key: "createTypedData",
    value: function () {
      var _createTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, nonce) {
        var _yield$this$apolloCli2, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.apolloClient.mutate({
                mutation: CreateOnchainPostTypedDataDocument,
                variables: {
                  request: request,
                  options: nonce ? {
                    overrideSigNonce: nonce
                  } : undefined
                }
              });
            case 2:
              _yield$this$apolloCli2 = _context5.sent;
              data = _yield$this$apolloCli2.data;
              return _context5.abrupt("return", data.result);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function createTypedData(_x6, _x7) {
        return _createTypedData.apply(this, arguments);
      }
      return createTypedData;
    }()
  }, {
    key: "resolveOnchainPostRequest",
    value: function resolveOnchainPostRequest(request) {
      var _request$actions;
      return {
        contentURI: request.metadata,
        openActionModules: (_request$actions = request.actions) === null || _request$actions === void 0 ? void 0 : _request$actions.map(resolveOpenActionModuleInput),
        referenceModule: request.reference && resolveReferenceModuleInput(request.reference)
      };
    }
  }]);
  return CreateOnChainPostGateway;
}(AbstractContractCallGateway);

function useCreatePostController() {
  var _useSharedDependencie = useSharedDependencies(),
    activeWallet = _useSharedDependencie.activeWallet,
    apolloClient = _useSharedDependencie.apolloClient,
    config = _useSharedDependencie.config,
    momokaRelayer = _useSharedDependencie.momokaRelayer,
    onChainRelayer = _useSharedDependencie.onChainRelayer,
    providerFactory = _useSharedDependencie.providerFactory,
    publicationCacheManager = _useSharedDependencie.publicationCacheManager,
    transactionFactory = _useSharedDependencie.transactionFactory,
    transactionGateway = _useSharedDependencie.transactionGateway,
    transactionQueue = _useSharedDependencie.transactionQueue;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, onChainGateway, onChainPost, delegableOnChainPost, offChainGateway, momokaPost, delegableMomokaPost, paidOnChainPost, createPost;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            presenter = new NewPublicationPresenter(function (tx) {
              return publicationCacheManager.fetchNewPost(tx);
            });
            onChainGateway = new CreateOnChainPostGateway(config, providerFactory, apolloClient, transactionFactory);
            onChainPost = new SignedOnChain(activeWallet, transactionGateway, onChainGateway, onChainRelayer, transactionQueue, presenter);
            delegableOnChainPost = new DelegableSigning(onChainPost, onChainGateway, transactionQueue, presenter);
            offChainGateway = new CreateMomokaPostGateway(apolloClient, transactionFactory);
            momokaPost = new SubsidizeOffChain(activeWallet, offChainGateway, momokaRelayer, transactionQueue, presenter);
            delegableMomokaPost = new DelegableSigning(momokaPost, offChainGateway, transactionQueue, presenter);
            paidOnChainPost = new PaidTransaction(activeWallet, onChainGateway, presenter, transactionQueue);
            createPost = new CreatePost(delegableOnChainPost, delegableMomokaPost, paidOnChainPost);
            _context.next = 11;
            return createPost.execute(request);
          case 11:
            return _context.abrupt("return", presenter.asResult());
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function extractUnknownOpenActionModuleAddresses(desired) {
  return desired.actions.reduce(function (addresses, action) {
    if (action.type === OpenActionType.UNKNOWN_OPEN_ACTION) {
      addresses.push(action.address);
    }
    return addresses;
  }, []);
}
function useCreatePostRequest() {
  var _useLazyModuleMetadat = useLazyModuleMetadata(),
    fetch = _useLazyModuleMetadat.execute;
  var _useSharedDependencie = useSharedDependencies(),
    config = _useSharedDependencie.config;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(input) {
      var desired, implementations, results, _iterator, _step, result, _result$value, signlessApproved, sponsoredApproved;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            desired = createPostRequest(input); // if sponsored is disabled globally, return here
            if (!(config.sponsored === false)) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return", _objectSpread2(_objectSpread2({}, desired), {}, {
              sponsored: false
            }));
          case 3:
            implementations = extractUnknownOpenActionModuleAddresses(desired);
            _context.next = 6;
            return Promise.all(implementations.map(function (implementation) {
              return fetch({
                implementation: implementation
              });
            }));
          case 6:
            results = _context.sent;
            _iterator = _createForOfIteratorHelper(results);
            _context.prev = 8;
            _iterator.s();
          case 10:
            if ((_step = _iterator.n()).done) {
              _context.next = 23;
              break;
            }
            result = _step.value;
            if (!result.isFailure()) {
              _context.next = 16;
              break;
            }
            if (!(result.error instanceof NotFoundError)) {
              _context.next = 15;
              break;
            }
            return _context.abrupt("return", _objectSpread2(_objectSpread2({}, desired), {}, {
              sponsored: false,
              signless: false
            }));
          case 15:
            throw result.error;
          case 16:
            _result$value = result.value, signlessApproved = _result$value.signlessApproved, sponsoredApproved = _result$value.sponsoredApproved;
            if (sponsoredApproved) {
              _context.next = 19;
              break;
            }
            return _context.abrupt("return", _objectSpread2(_objectSpread2({}, desired), {}, {
              sponsored: false,
              signless: false
            }));
          case 19:
            if (signlessApproved) {
              _context.next = 21;
              break;
            }
            return _context.abrupt("return", _objectSpread2(_objectSpread2({}, desired), {}, {
              signless: false
            }));
          case 21:
            _context.next = 10;
            break;
          case 23:
            _context.next = 28;
            break;
          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](8);
            _iterator.e(_context.t0);
          case 28:
            _context.prev = 28;
            _iterator.f();
            return _context.finish(28);
          case 31:
            return _context.abrupt("return", desired);
          case 32:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[8, 25, 28, 31]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * An object representing the result of a post creation.
 *
 * It allows to wait for the post to be fully processed and indexed.
 */

/**
 * Create new post details.
 */

/**
 * `useCreatePost` is a React Hook that allows you to create a new DiGi Post.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```ts
 * const { execute, error, loading } = useCreatePost();
 * ```
 *
 * ## Basic usage
 *
 * Create a text-only post:
 *
 * ```tsx
 * const { execute, error, loading } = useCreatePost();
 *
 * const post = (content: string) => {
 *   // create the desired metadata via the `@digiv3rse/metadata` package helpers
 *   const metadata = textOnly({ content });
 *
 *   // upload the metadata to a storage provider of your choice (IPFS in this example)
 *   const uri = await uploadToIpfs(metadata);
 *
 *   // invoke the `execute` function to create the post
 *   const result = await execute({
 *     metadata: uri,
 *   });
 * }
 * ```
 *
 * See the [`@digiv3rse/metadata` package](https://github.com/digi-protocol/metadata) for more
 * information on how to create metadata for other types of publications.
 *
 * ## Failure scenarios
 *
 * You can handle possible failure scenarios by checking the `result` value.
 *
 * ```tsx
 * const { execute, error, loading } = useCreatePost();
 *
 * const post = async (content: string) => {
 *   // first part is the same as in the initial example
 *
 *   // invoke the `execute` function to create the post
 *   const result = await execute({
 *     metadata: uri,
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'BroadcastingError':
 *         console.log('There was an error broadcasting the transaction', error.message);
 *         break;
 *
 *       case 'PendingSigningRequestError':
 *         console.log(
 *           'There is a pending signing request in your wallet. ' +
 *             'Approve it or discard it and try again.'
 *         );
 *         break;
 *
 *       case 'WalletConnectionError':
 *         console.log('There was an error connecting to your wallet', error.message);
 *         break;
 *
 *       case 'UserRejectedError':
 *         // the user decided to not sign, usually this is silently ignored by UIs
 *         break;
 *     }
 *     return;
 *   }
 * };
 * ```
 * At this point the post creation is completed from an end-user perspective but,
 * in case of on-chain TX, this is not necessarily mined and indexed (yet). See the following section.
 *
 * ## Wait for completion
 *
 * In case of successful submission, the `result` value can be used to wait for the post to be fully processed.
 *
 * This gives you an opportunity to decide what UX to provide to the end-user.
 *
 * For example if the post is on-chain it might take a while to be mined and indexed. So you might want to show a loading indicator or
 * let the user navigate away from the page.
 *
 * ```tsx
 * const { execute, error, loading } = useCreatePost();
 *
 * const post = async (content: string) => {
 *   // first part is the same as in the initial example
 *
 *   // invoke the `execute` function to create the post
 *   const result = await execute({
 *     metadata: uri,
 *   });
 *
 *   if (result.isFailure()) {
 *     // handle failure scenarios
 *     return;
 *   }
 *
 *   // this might take a while, depends on the type of tx (on-chain or Momoka)
 *   // and the congestion of the network
 *   const completion = await result.value.waitForCompletion();
 *
 *   if (completion.isFailure()) {
 *     console.log('There was an processing the transaction', completion.error.message);
 *     return;
 *   }
 *
 *   // the post is now ready to be used
 *   const post = completion.value;
 *   console.log('Post created', post);
 * };
 * ```
 *
 * ## Open actions
 *
 * Contextually to the post creation you can configure the open actions.
 *
 * As with anything involving amounts in the DiGi SDK you can use the
 * {@link Amount} helper with currencies from the {@link useCurrencies} hook to
 * create the desired amounts.
 *
 * Create a post with a `SimpleCollectOpenAction` module:
 * ```tsx
 * const wmatic = ... // from useCurrencies hook
 *
 * const result = await execute({
 *   metadata: uri,
 *   actions: [
 *     {
 *       type: OpenActionType.SIMPLE_COLLECT,
 *       amount: Amount.erc20(wmatic, 100), // 100 WMATIC
 *       followerOnly: true,
 *       collectLimit: 10,
 *       recipient: '0x4f94FAFEE38F545920485fC747467EFc85C302E0',
 *       endsAt: new Date('2025-12-31T00:00:00.000Z'),
 *     }
 *   ]
 * });
 * ```
 * See {@link SimpleCollectActionConfig} for more details.
 *
 * Create a post with a `MultirecipientCollectOpenAction` module:
 * ```tsx
 * const wmatic = ... // from useCurrencies hook
 *
 * const result = await execute({
 *   metadata: uri,
 *   actions: [
 *     {
 *       type: OpenActionType.MULTIRECIPIENT_COLLECT,
 *       amount: Amount.erc20(wmatic, 100), // 100 WMATIC
 *       followerOnly: true,
 *       collectLimit: 10,
 *       recipients: [
 *         {
 *           recipient: '0x4f94FAFEE38F545920485fC747467EFc85C302E0',
 *           split: 30, // 30%
 *         },
 *         {
 *           recipient: '0x097A4fE5cfFf0360438990b88549d4288748f6cB',
 *           split: 70, // 70%
 *         },
 *       ],
 *       endsAt: new Date('2025-12-31T00:00:00.000Z'),
 *     }
 *   ]
 * });
 * ```
 *
 * See {@link MultirecipientCollectActionConfig} for more details.
 *
 * Finally you can also create a post with a custom open action (AKA unknown open action):
 *
 * ```tsx
 * const result = await execute({
 *   metadata: uri,
 *   actions: [
 *     {
 *       type: OpenActionType.UNKNOWN_OPEN_ACTION,
 *       address: '0x4f94FAFEE38F545920485fC747467EFc85C302E0',
 *       data: '0x.....'
 *     }
 *   ]
 * });
 * ```
 *
 * See {@link UnknownOpenActionConfig} for more details.
 *
 * ## Reference policy
 *
 * Contextually to the post creation you can configure the reference policy.
 *
 * No one can comment, quote, or mirror the post:
 * ```tsx
 * const result = await execute({
 *   metadata: uri,
 *
 *   reference: {
 *     type: ReferencePolicyType.NO_ONE
 *   }
 * });
 * ```
 *
 * Only followers can comment, quote, or mirror the post:
 * ```tsx
 * const result = await execute({
 *   metadata: uri,
 *
 *   reference: {
 *     type: ReferencePolicyType.FOLLOWERS_ONLY
 *   }
 * });
 * ```
 *
 * You can have finer control over who can comment, quote, or mirror the post by using the `DEGREES_OF_SEPARATION` reference policy:
 * ```tsx
 * const result = await execute({
 *   metadata: uri,
 *
 *   reference: {
 *     type: ReferencePolicyType.DEGREES_OF_SEPARATION,
 *     params: {
 *       degreesOfSeparation: 2, // followers and followers of your followers
 *       commentsRestricted: true, // can comment
 *       mirrorsRestricted: true, // can mirror
 *       quotesRestricted: false, // cannot quote
 *     }
 *   }
 * });
 * ```
 *
 * You can even set the `DEGREES_OF_SEPARATION` reference policy to follow someone elses graph:
 * ```tsx
 * const result = await execute({
 *   metadata: uri,
 *
 *   reference: {
 *     type: ReferencePolicyType.DEGREES_OF_SEPARATION,
 *     params: {
 *       degreesOfSeparation: 2, // followers and followers of your followers
 *       commentsRestricted: true, // can comment
 *       mirrorsRestricted: true, // can mirror
 *       quotesRestricted: false, // cannot quote
 *
 *       sourceProfileId: '0x01', // in relation to Profile Id 0x01
 *     }
 *   }
 * });
 * ```
 *
 * See {@link DegreesOfSeparationReferencePolicyConfig} for more details.
 *
 * ## Creating an app-specific post
 *
 * You can create a post that is specific to an app by defining the `appId` when creating the post metadata.
 *
 * This allows apps to build custom experiences by only surfacing publications that were created in their app.
 *
 * ```tsx
 * const metadata = textOnly({
 *  content: `Hello world!`,
 *  appId: 'my-app-id',
 * });
 *
 * const uri = await uploadToIpfs(metadata);
 *
 * const result = await execute({
 *  metadata: uri,
 * });
 * ```
 *
 * ## Self-funded approach
 *
 * In case you want to pay for the transaction gas costs yourself, you can do so by setting the
 * `sponsored` parameter to `false`:
 *
 * ```ts
 * const post = async (content: string) => {
 *   // create and upload metadata as before
 *
 *   const result = await execute({
 *     metadata: uri,
 *     sponsored: false,
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientGasError':
 *         console.log('You do not have enough funds to pay for the transaction cost.');
 *         break;
 *
 *       // ...
 *     }
 *     return;
 *   }
 *
 *   // ...
 * }
 * ```
 *
 * The example above shows how to detect when the user does not have enough funds to pay for the transaction cost.
 *
 * ## Self-funded fallback
 *
 * If for some reason the DiGi API cannot sponsor the transaction, the hook will fail with a {@link BroadcastingError} with one of the following reasons:
 * - {@link BroadcastingErrorReason.NOT_SPONSORED} - the profile is not sponsored
 * - {@link BroadcastingErrorReason.RATE_LIMITED} - the profile reached the rate limit
 * - {@link BroadcastingErrorReason.APP_NOT_ALLOWED} - the app is not whitelisted for gasless transactions
 *
 * In those cases you can retry the transaction as self-funded like in the following example:
 *
 * ```ts
 * const post = async (content: string) => {
 *   // create and upload metadata as before
 *
 *   const sponsoredResult = await execute({
 *     metadata: uri,
 *   });
 *
 *   if (sponsoredResult.isFailure()) {
 *     switch (sponsoredResult.error.name) {
 *       case 'BroadcastingError':
 *         if ([BroadcastingErrorReason.NOT_SPONSORED, BroadcastingErrorReason.RATE_LIMITED].includes(sponsoredResult.error.reason)) {
 *
 *           const chargedResult = await execute({
 *             metadata: uri,
 *             sponsored: false,
 *           });
 *
 *           // continue with chargedResult as in the previous example
 *         }
 *         break;
 *
 *      // ...
 *   }
 * }
 * ```
 *
 * We omitted the handling of the {@link BroadcastingErrorReason.APP_NOT_ALLOWED} error because it's usually
 * something that builder will face when deploying their app to production using the Production DiGi API.
 *
 * It just requires the app to apply for whitelisting. See https://docs.digi.xyz/docs/gasless-and-signless#whitelisting-your-app.
 *
 * ## Momoka posts
 *
 * For a post to be hosted on Momoka it must meet the following criteria:
 * - reference policy `ANYONE` (which is also the default value in case it's not specified)
 * - no open actions
 * - sponsored by the DiGi API (which is also the default value in case it's not specified)
 *
 * If the post does not meet the above criteria, it will be hosted on-chain.
 *
 * ## Upgrading from v1
 *
 * Replace the `useCreatePost` hook with `useCreatePost` like in the following diff:
 * ```diff
 * - const { execute, error, isPending } = useCreatePost({ publisher, upload: uploadToIpfs });
 * + const { execute, error, loading } = useCreatePost();
 * ```
 * Amend the code that used to call the `execute` function to:
 * ```ts
 * // first: create metadata using the `@digiv3rse/metadata` package
 * const metadata = textOnly({
 *   content: `Hello world!`,
 * });
 *
 * // second: upload it using the upload function you used to pass to `useCreatePost`:
 * const uri = await uploadToIpfs(metadata);
 *
 * // finally, invoke the `execute` function:
 * const result = await execute({
 *   metadata: uri,
 * })
 *
 * // continue as usual
 * ```
 *
 * @category Publications
 * @group Hooks
 */
function useCreatePost() {
  var _useSession = useSession(),
    session = _useSession.data;
  var createPostRequest = useCreatePostRequest();
  var createPost = useCreatePostController();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _args$sponsored;
      var request;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            invariant((session === null || session === void 0 ? void 0 : session.type) === SessionType.WithProfile, 'You must be authenticated with a Profile to post. Use `useLogin` hook to authenticate.');
            _context.next = 3;
            return createPostRequest(_objectSpread2({
              signless: session.profile.signless,
              sponsored: (_args$sponsored = args.sponsored) !== null && _args$sponsored !== void 0 ? _args$sponsored : session.profile.sponsor
            }, args));
          case 3:
            request = _context.sent;
            return _context.abrupt("return", createPost(request));
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

var CreateMomokaQuoteGateway = /*#__PURE__*/function () {
  function CreateMomokaQuoteGateway(apolloClient, transactionFactory) {
    _classCallCheck(this, CreateMomokaQuoteGateway);
    this.apolloClient = apolloClient;
    this.transactionFactory = transactionFactory;
  }
  _createClass(CreateMomokaQuoteGateway, [{
    key: "createDelegatedTransaction",
    value: function () {
      var _createDelegatedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              transaction = this.transactionFactory.createDataTransaction({
                id: result.value.id,
                request: request
              });
              return _context.abrupt("return", success(transaction));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createDelegatedTransaction(_x) {
        return _createDelegatedTransaction.apply(this, arguments);
      }
      return createDelegatedTransaction;
    }()
  }, {
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        var input, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              input = this.resolveMomokaQuoteRequest(request);
              _context2.next = 3;
              return this.createTypedData(input);
            case 3:
              result = _context2.sent;
              return _context2.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createUnsignedProtocolCall(_x2) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var input, _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              input = this.resolveMomokaQuoteRequest(request);
              _context3.next = 3;
              return this.apolloClient.mutate({
                mutation: QuoteOnMomokaDocument,
                variables: {
                  request: input
                }
              });
            case 3:
              _yield$this$apolloCli = _context3.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context3.next = 7;
                break;
              }
              return _context3.abrupt("return", handleRelayError(data.result));
            case 7:
              return _context3.abrupt("return", success(data.result));
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function relayWithProfileManager(_x3) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }, {
    key: "resolveMomokaQuoteRequest",
    value: function resolveMomokaQuoteRequest(request) {
      return {
        contentURI: request.metadata,
        quoteOn: request.quoteOn
      };
    }
  }, {
    key: "createTypedData",
    value: function () {
      var _createTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var _yield$this$apolloCli2, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.apolloClient.mutate({
                mutation: CreateMomokaQuoteTypedDataDocument,
                variables: {
                  request: request
                }
              });
            case 2:
              _yield$this$apolloCli2 = _context4.sent;
              data = _yield$this$apolloCli2.data;
              return _context4.abrupt("return", data.result);
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function createTypedData(_x4) {
        return _createTypedData.apply(this, arguments);
      }
      return createTypedData;
    }()
  }]);
  return CreateMomokaQuoteGateway;
}();

var CreateOnChainQuoteGateway = /*#__PURE__*/function (_ref) {
  _inherits(CreateOnChainQuoteGateway, _ref);
  function CreateOnChainQuoteGateway(config, providerFactory, apolloClient, transactionFactory) {
    var _this;
    _classCallCheck(this, CreateOnChainQuoteGateway);
    _this = _callSuper(this, CreateOnChainQuoteGateway, [config, providerFactory]);
    _this.apolloClient = apolloClient;
    _this.transactionFactory = transactionFactory;
    return _this;
  }
  _createClass(CreateOnChainQuoteGateway, [{
    key: "createDelegatedTransaction",
    value: function () {
      var _createDelegatedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              transaction = this.transactionFactory.createNativeTransaction({
                chainType: ChainType.POLYGON,
                id: v4(),
                request: request,
                relayerTxId: result.value.txId,
                txHash: result.value.txHash
              });
              return _context.abrupt("return", success(transaction));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createDelegatedTransaction(_x) {
        return _createDelegatedTransaction.apply(this, arguments);
      }
      return createDelegatedTransaction;
    }()
  }, {
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, nonce) {
        var input, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              input = this.resolveOnchainQuoteRequest(request);
              _context2.next = 3;
              return this.createTypedData(input, nonce);
            case 3:
              result = _context2.sent;
              return _context2.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createUnsignedProtocolCall(_x2, _x3) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "createCallDetails",
    value: function () {
      var _createCallDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var input, result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              input = this.resolveOnchainQuoteRequest(request);
              _context3.next = 3;
              return this.createTypedData(input);
            case 3:
              result = _context3.sent;
              return _context3.abrupt("return", this.createQuoteCallDetails(result));
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function createCallDetails(_x4) {
        return _createCallDetails.apply(this, arguments);
      }
      return createCallDetails;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var input, _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              input = this.resolveOnchainQuoteRequest(request);
              _context4.next = 3;
              return this.apolloClient.mutate({
                mutation: QuoteOnchainDocument,
                variables: {
                  request: input
                }
              });
            case 3:
              _yield$this$apolloCli = _context4.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context4.next = 7;
                break;
              }
              return _context4.abrupt("return", handleRelayError(data.result));
            case 7:
              return _context4.abrupt("return", success(data.result));
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function relayWithProfileManager(_x5) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }, {
    key: "createQuoteCallDetails",
    value: function createQuoteCallDetails(result) {
      var contract = digiHub(result.typedData.domain.verifyingContract);
      var encodedData = contract["interface"].encodeFunctionData('quote', [{
        profileId: result.typedData.message.profileId,
        contentURI: result.typedData.message.contentURI,
        pointedProfileId: result.typedData.message.pointedProfileId,
        pointedPubId: result.typedData.message.pointedPubId,
        referrerProfileIds: result.typedData.message.referrerProfileIds,
        referrerPubIds: result.typedData.message.referrerPubIds,
        referenceModuleData: result.typedData.message.referenceModuleData,
        actionModules: result.typedData.message.actionModules,
        actionModulesInitDatas: result.typedData.message.actionModulesInitDatas,
        referenceModule: result.typedData.message.referenceModule,
        referenceModuleInitData: result.typedData.message.referenceModuleInitData
      }]);
      return {
        contractAddress: result.typedData.domain.verifyingContract,
        encodedData: encodedData
      };
    }
  }, {
    key: "createTypedData",
    value: function () {
      var _createTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, nonce) {
        var _yield$this$apolloCli2, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.apolloClient.mutate({
                mutation: CreateOnchainQuoteTypedDataDocument,
                variables: {
                  request: request,
                  options: nonce ? {
                    overrideSigNonce: nonce
                  } : undefined
                }
              });
            case 2:
              _yield$this$apolloCli2 = _context5.sent;
              data = _yield$this$apolloCli2.data;
              return _context5.abrupt("return", data.result);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function createTypedData(_x6, _x7) {
        return _createTypedData.apply(this, arguments);
      }
      return createTypedData;
    }()
  }, {
    key: "resolveOnchainQuoteRequest",
    value: function resolveOnchainQuoteRequest(request) {
      var _request$actions;
      return {
        contentURI: request.metadata,
        quoteOn: request.quoteOn,
        openActionModules: (_request$actions = request.actions) === null || _request$actions === void 0 ? void 0 : _request$actions.map(resolveOpenActionModuleInput),
        referenceModule: request.reference && resolveReferenceModuleInput(request.reference)
      };
    }
  }]);
  return CreateOnChainQuoteGateway;
}(AbstractContractCallGateway);

function useCreateQuoteController() {
  var _useSharedDependencie = useSharedDependencies(),
    activeWallet = _useSharedDependencie.activeWallet,
    apolloClient = _useSharedDependencie.apolloClient,
    config = _useSharedDependencie.config,
    momokaRelayer = _useSharedDependencie.momokaRelayer,
    onChainRelayer = _useSharedDependencie.onChainRelayer,
    providerFactory = _useSharedDependencie.providerFactory,
    publicationCacheManager = _useSharedDependencie.publicationCacheManager,
    transactionFactory = _useSharedDependencie.transactionFactory,
    transactionGateway = _useSharedDependencie.transactionGateway,
    transactionQueue = _useSharedDependencie.transactionQueue;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, onChainGateway, onChainQuote, delegableOnChainQuote, offChainGateway, momokaQuote, delegableMomokaQuote, paidOnChainQuote, createQuote;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            presenter = new NewPublicationPresenter(function (tx) {
              return publicationCacheManager.fetchNewQuote(tx);
            });
            onChainGateway = new CreateOnChainQuoteGateway(config, providerFactory, apolloClient, transactionFactory);
            onChainQuote = new SignedOnChain(activeWallet, transactionGateway, onChainGateway, onChainRelayer, transactionQueue, presenter);
            delegableOnChainQuote = new DelegableSigning(onChainQuote, onChainGateway, transactionQueue, presenter);
            offChainGateway = new CreateMomokaQuoteGateway(apolloClient, transactionFactory);
            momokaQuote = new SubsidizeOffChain(activeWallet, offChainGateway, momokaRelayer, transactionQueue, presenter);
            delegableMomokaQuote = new DelegableSigning(momokaQuote, offChainGateway, transactionQueue, presenter);
            paidOnChainQuote = new PaidTransaction(activeWallet, onChainGateway, presenter, transactionQueue);
            createQuote = new CreateQuote(delegableOnChainQuote, delegableMomokaQuote, paidOnChainQuote);
            _context.next = 11;
            return createQuote.execute(request);
          case 11:
            return _context.abrupt("return", presenter.asResult());
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * An object representing the result of a quote creation.
 *
 * It allows to wait for the quote to be fully processed and indexed.
 */

/**
 * Create new quote details.
 */

/**
 * `useCreateQuote` is React Hook that allows you to create a new DiGi Quote.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```ts
 * const { execute, error, loading } = useCreateQuote();
 * ```
 *
 * ## Basic usage
 *
 * Create a text-only quote:
 *
 * ```tsx
 * const { execute, error, loading } = useCreateQuote();
 *
 * const quote = (content: string) => {
 *   // create the desired metadata via the `@digiv3rse/metadata` package helpers
 *   const metadata = textOnly({ content });
 *
 *   // upload the metadata to a storage provider of your choice (IPFS in this example)
 *   const uri = await uploadToIpfs(metadata);
 *
 *   // invoke the `execute` function to create the quote
 *   const result = await execute({
 *     metadata: uri,
 *     quoteOn: : publicationId, // the publication ID to quote
 *   });
 * }
 * ```
 *
 * See the [`@digiv3rse/metadata` package](https://github.com/digi-protocol/metadata) for more
 * information on how to create metadata for other types of publications.
 *
 * ## Failure scenarios
 *
 * You can handle possible failure scenarios by checking the `result` value.
 *
 * ```tsx
 * const { execute, error, loading } = useCreateQuote();
 *
 * const quote = async (content: string) => {
 *   // first part is the same as in the initial example
 *
 *   // invoke the `execute` function to create the quote
 *   const result = await execute({
 *     metadata: uri,
 *     quoteOn: : publicationId,
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'BroadcastingError':
 *         console.log('There was an error broadcasting the transaction', error.message);
 *         break;
 *
 *       case 'PendingSigningRequestError':
 *         console.log(
 *           'There is a pending signing request in your wallet. ' +
 *             'Approve it or discard it and try again.'
 *         );
 *         break;
 *
 *       case 'WalletConnectionError':
 *         console.log('There was an error connecting to your wallet', error.message);
 *         break;
 *
 *       case 'UserRejectedError':
 *         // the user decided to not sign, usually this is silently ignored by UIs
 *         break;
 *     }
 *     return;
 *   }
 * };
 * ```
 * At this point the quote creation is completed from an end-user perspective but,
 * in case of on-chain TX, this is not necessarily mined and indexed (yet). See the following section.
 *
 * ## Wait for completion
 *
 * In case of successful submission, the `result` value can be used to wait for the quote to be fully processed.
 *
 * This gives you an opportunity to decide what UX to provide to the end-user.
 *
 * For example if the quote is on-chain it might take a while to be mined and indexed. So you might want to show a loading indicator or
 * let the user navigate away from the page.
 *
 * ```tsx
 * const { execute, error, loading } = useCreateQuote();
 *
 * const quote = async (content: string) => {
 *   // first part is the same as in the initial example
 *
 *   // invoke the `execute` function to create the quote
 *   const result = await execute({
 *     metadata: uri,
 *     quoteOn: : publicationId,
 *   });
 *
 *   if (result.isFailure()) {
 *     // handle failure scenarios
 *     return;
 *   }
 *
 *   // this might take a while, depends on the type of tx (on-chain or Momoka)
 *   // and the congestion of the network
 *   const completion = await result.value.waitForCompletion();
 *
 *   if (completion.isFailure()) {
 *     console.log('There was an processing the transaction', completion.error.message);
 *     return;
 *   }
 *
 *   // the quote is now ready to be used
 *   const quote = completion.value;
 *   console.log('quote created', quote);
 * };
 * ```
 *
 * ## Open actions
 *
 * Contextually to the quote creation you can configure the open actions.
 *
 * As with anything involving amounts in the DiGi SDK you can use the
 * {@link Amount} helper with currencies from the {@link useCurrencies} hook to
 * create the desired amounts.
 *
 * Create a quote with a `SimpleCollectOpenAction` module:
 * ```tsx
 * const wmatic = ... // from useCurrencies hook
 *
 * const result = await execute({
 *   metadata: uri,
 *   actions: [
 *     {
 *       type: OpenActionType.SIMPLE_COLLECT,
 *       amount: Amount.erc20(wmatic, 100), // 100 WMATIC
 *       followerOnly: true,
 *       collectLimit: 10,
 *       recipient: '0x4f94FAFEE38F545920485fC747467EFc85C302E0',
 *       endsAt: new Date('2025-12-31T00:00:00.000Z'),
 *     }
 *   ]
 * });
 * ```
 * See {@link SimpleCollectActionConfig} for more details.
 *
 * Create a quote with a `MultirecipientCollectOpenAction` module:
 * ```tsx
 * const wmatic = ... // from useCurrencies hook
 *
 * const result = await execute({
 *   metadata: uri,
 *   quoteOn: : publicationId,
 *   actions: [
 *     {
 *       type: OpenActionType.MULTIRECIPIENT_COLLECT,
 *       amount: Amount.erc20(wmatic, 100), // 100 WMATIC
 *       followerOnly: true,
 *       collectLimit: 10,
 *       recipients: [
 *         {
 *           recipient: '0x4f94FAFEE38F545920485fC747467EFc85C302E0',
 *           split: 30, // 30%
 *         },
 *         {
 *           recipient: '0x097A4fE5cfFf0360438990b88549d4288748f6cB',
 *           split: 70, // 70%
 *         },
 *       ],
 *       endsAt: new Date('2025-12-31T00:00:00.000Z'),
 *     }
 *   ]
 * });
 * ```
 *
 * See {@link MultirecipientCollectActionConfig} for more details.
 *
 * Finally you can also create a quote with a custom open action (AKA unknown open action):
 *
 * ```tsx
 * const result = await execute({
 *   metadata: uri,
 *   quoteOn: : publicationId,
 *   actions: [
 *     {
 *       type: OpenActionType.UNKNOWN_OPEN_ACTION,
 *       address: '0x4f94FAFEE38F545920485fC747467EFc85C302E0',
 *       data: '0x.....'
 *     }
 *   ]
 * });
 * ```
 *
 * See {@link UnknownOpenActionConfig} for more details.
 *
 * ## Reference policy
 *
 * Contextually to the quote creation you can configure the reference policy.
 *
 * A quote with reference policy other than `ANYONE` will be hosted on-chain.
 * If the quote has reference policy `ANYONE` (which is also the default value) and does not have
 * any open actions, it will be hosted on Momoka.
 *
 * No one can comment, quote, or mirror the quote:
 * ```tsx
 * const result = await execute({
 *   metadata: uri,
 *   quoteOn: : publicationId,
 *   reference: {
 *     type: ReferencePolicyType.NO_ONE
 *   }
 * });
 * ```
 *
 * Only followers can comment, quote, or mirror the quote:
 * ```tsx
 * const result = await execute({
 *   metadata: uri,
 *   quoteOn: : publicationId,
 *   reference: {
 *     type: ReferencePolicyType.FOLLOWERS_ONLY
 *   }
 * });
 * ```
 *
 * You can have finer control over who can comment, quote, or mirror the quote by using the `DEGREES_OF_SEPARATION` reference policy:
 * ```tsx
 * const result = await execute({
 *   metadata: uri,
 *   quoteOn: : publicationId,
 *   reference: {
 *     type: ReferencePolicyType.DEGREES_OF_SEPARATION,
 *     params: {
 *       degreesOfSeparation: 2, // followers and followers of your followers
 *       commentsRestricted: true, // can comment
 *       mirrorsRestricted: true, // can mirror
 *       quotesRestricted: false, // cannot quote
 *     }
 *   }
 * });
 * ```
 *
 * You can even set the `DEGREES_OF_SEPARATION` reference policy to follow someone elses graph:
 * ```tsx
 * const result = await execute({
 *   metadata: uri,
 *   quoteOn: : publicationId,
 *   reference: {
 *     type: ReferencePolicyType.DEGREES_OF_SEPARATION,
 *     params: {
 *       degreesOfSeparation: 2, // followers and followers of your followers
 *       commentsRestricted: true, // can comment
 *       mirrorsRestricted: true, // can mirror
 *       quotesRestricted: false, // cannot quote
 *
 *       sourceProfileId: '0x01', // in relation to Profile Id 0x01
 *     }
 *   }
 * });
 * ```
 *
 * See {@link DegreesOfSeparationReferencePolicyConfig} for more details.
 *
 * ## Self-funded approach
 *
 * In case you want to pay for the transaction gas costs yourself, you can do so by setting the
 * `sponsored` parameter to `false`:
 *
 * ```ts
 * const quote = async (content: string) => {
 *   // create and upload metadata as before
 *
 *   const result = await execute({
 *     metadata: uri,
 *     quoteOn: : publicationId,
 *     sponsored: false,
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientGasError':
 *         console.log('You do not have enough funds to pay for the transaction cost.');
 *         break;
 *
 *       // ...
 *     }
 *     return;
 *   }
 *
 *   // ...
 * }
 * ```
 *
 * The example above shows how to detect when the user does not have enough funds to pay for the transaction cost.
 *
 * ## Self-funded fallback
 *
 * If for some reason the DiGi API cannot sponsor the transaction, the hook will fail with a {@link BroadcastingError} with one of the following reasons:
 * - {@link BroadcastingErrorReason.NOT_SPONSORED} - the profile is not sponsored
 * - {@link BroadcastingErrorReason.RATE_LIMITED} - the profile reached the rate limit
 * - {@link BroadcastingErrorReason.APP_NOT_ALLOWED} - the app is not whitelisted for gasless transactions
 *
 * In those cases you can retry the transaction as self-funded like in the following example:
 *
 * ```ts
 * const quote = async (content: string) => {
 *   // create and upload metadata as before
 *
 *   const sponsoredResult = await execute({
 *     metadata: uri,
 *     quoteOn: : publicationId,
 *   });
 *
 *   if (sponsoredResult.isFailure()) {
 *     switch (sponsoredResult.error.name) {
 *       case 'BroadcastingError':
 *         if ([BroadcastingErrorReason.NOT_SPONSORED, BroadcastingErrorReason.RATE_LIMITED].includes(sponsoredResult.error.reason)) {
 *
 *           const chargedResult = = await execute({
 *             metadata: uri,
 *             quoteOn: : publicationId,
 *             sponsored: false,
 *           });
 *
 *           // continue with chargedResult as in the previous example
 *         }
 *         break;
 *
 *      // ...
 *   }
 * }
 * ```
 *
 * We omitted the handling of the {@link BroadcastingErrorReason.APP_NOT_ALLOWED} error because it's usually
 * something that builder will face when deploying their app to production using the Production DiGi API.
 *
 * It just requires the app to apply for whitelisting. See https://docs.digi.xyz/docs/gasless-and-signless#whitelisting-your-app.
 *
 * ## Create an app-specific quote
 *
 * You can create a comment that is specific to an app by defining the `appId` when creating the comment metadata.
 *
 * This allows apps to build custom experiences by only surfacing publications that were created in their app.
 *
 * ```tsx
 * const metadata = textOnly({
 *  content: 'Quote content',
 *  appId: 'my-app-id',
 * });
 *
 * const uri = await uploadToIpfs(metadata);
 *
 * const result = await execute({
 *  quoteOn: publicationId, // the publication ID to quote
 *  metadata: uri
 * });
 * ```
 *
 * ## Momoka quotes
 *
 * For a quote to be hosted on Momoka it must meet the following criteria:
 * - it must be a quote of a Momoka publication
 * - reference policy `ANYONE` (which is also the default value in case it's not specified)
 * - no open actions
 * - sponsored by the DiGi API (which is also the default value in case it's not specified)
 *
 * If the quote does not meet the above criteria, it will be hosted on-chain.
 *
 * @category Publications
 * @group Hooks
 */
function useCreateQuote() {
  var _useSession = useSession(),
    session = _useSession.data;
  var createQuote = useCreateQuoteController();
  var configureRequest = useSponsoredConfig();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _args$sponsored;
      var request;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to create a quote. Use `useLogin` hook to authenticate.');
            invariant(session.type === SessionType.WithProfile, 'You must have a profile to create a quote.');
            request = configureRequest(createQuoteRequest(_objectSpread2({
              signless: session.profile.signless,
              sponsored: (_args$sponsored = args.sponsored) !== null && _args$sponsored !== void 0 ? _args$sponsored : true
            }, args)));
            return _context.abrupt("return", createQuote(request));
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

function resolveApproveAmount(request) {
  switch (request.limit) {
    case TokenAllowanceLimit.EXACT:
      return bigNumber(request.amount);
    case TokenAllowanceLimit.INFINITE:
      return MaxUint256;
  }
}
var ApproveTransactionGateway = /*#__PURE__*/function (_ref) {
  _inherits(ApproveTransactionGateway, _ref);
  function ApproveTransactionGateway() {
    _classCallCheck(this, ApproveTransactionGateway);
    return _callSuper(this, ApproveTransactionGateway, arguments);
  }
  _createClass(ApproveTransactionGateway, [{
    key: "createCallDetails",
    value: function () {
      var _createCallDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var contract, amount, encodedData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              contract = erc20$1(request.amount.asset.address);
              amount = resolveApproveAmount(request);
              encodedData = contract["interface"].encodeFunctionData('approve', [request.spender, amount]);
              return _context.abrupt("return", {
                contractAddress: request.amount.asset.address,
                encodedData: encodedData
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function createCallDetails(_x) {
        return _createCallDetails.apply(this, arguments);
      }
      return createCallDetails;
    }()
  }]);
  return ApproveTransactionGateway;
}(AbstractContractCallGateway);

var TransactionResultPresenter = /*#__PURE__*/function () {
  function TransactionResultPresenter() {
    _classCallCheck(this, TransactionResultPresenter);
    _defineProperty(this, "earlyFailure", null);
    _defineProperty(this, "deferredResult", new Deferred());
  }
  _createClass(TransactionResultPresenter, [{
    key: "present",
    value: function present(result) {
      if (result.isFailure()) {
        if (result.error instanceof TransactionError) {
          this.deferredResult.resolve(failure(result.error));
          return;
        }
        this.earlyFailure = failure(result.error);
        return;
      }
      this.deferredResult.resolve(success());
    }
  }, {
    key: "asResult",
    value: function asResult() {
      var _this = this;
      if (this.earlyFailure) {
        return this.earlyFailure;
      }
      return success({
        waitForCompletion: function () {
          var _waitForCompletion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", _this.deferredResult.promise);
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function waitForCompletion() {
            return _waitForCompletion.apply(this, arguments);
          }
          return waitForCompletion;
        }()
      });
    }
  }]);
  return TransactionResultPresenter;
}();

function useTokenAllowanceController() {
  var _useSharedDependencie = useSharedDependencies(),
    activeWallet = _useSharedDependencie.activeWallet,
    config = _useSharedDependencie.config,
    providerFactory = _useSharedDependencie.providerFactory,
    transactionQueue = _useSharedDependencie.transactionQueue;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, approveTransactionGateway, tokenAllowance, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            presenter = new TransactionResultPresenter();
            approveTransactionGateway = new ApproveTransactionGateway(config, providerFactory);
            tokenAllowance = new TokenAllowance(activeWallet, approveTransactionGateway, presenter, transactionQueue);
            _context.next = 5;
            return tokenAllowance.execute(request);
          case 5:
            result = presenter.asResult();
            if (!result.isFailure()) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return", result);
          case 8:
            return _context.abrupt("return", result.value.waitForCompletion());
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * Arguments for the {@link useApproveModule} hook.
 */

/**
 * Arguments for the {@link useApproveModule} hook callback.
 */

/**
 * `useApproveModule` is a React Hook that allows to perform an ERC20 pre-approval
 * for any Profile Follow modules requiring a fee, or any Publication Collect
 * modules with a fee.
 *
 * @example
 * ```ts
 * const { execute, error, loading } = useApproveModule();
 * ```
 *
 * A pre-approval does not touch the user's ERC20 but allows the module to withdraw
 * the authorized amount at a later time with an additional transaction.
 *
 * In the case of Collect Open Action modules the additional transaction is the one
 * performed via {@link useOpenAction} hook.
 *
 * In the case of Profile Follow modules the additional transaction is the one
 * performed via {@link useFollow} hook.
 *
 * In both case the additional transaction can be user's signed or can be delegated to
 * a Profile Manager (see {@link useUpdateProfileManagers} hook).
 *
 *
 * ## Pre-approve a profile follow module
 *
 * Assuming you integrated the {@link useFollow} hook in your application, you might
 * find that, in case of paid follows the result might fail with an {@link InsufficientAllowanceError}.
 *
 * ```ts
 * const { execute: follow } = useFollow();
 *
 * const followProfile = async (profile: Profile) => {
 *   const result = await execute({ profile });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientAllowanceError':
 *         // not enough allowance
 *         // pre-approve the module
 *         break;
 *
 *       // others
 *     }
 *   }
 * };
 * ```
 *
 * You can use the `useApproveModule` hook to pre-approve the module and,
 * according to the desired UX, try again the follow operation.
 *
 *
 * ```ts
 * const { execute: approve } = useApproveModule();
 * const { execute: follow } = useFollow();
 *
 * const approveFollowModuleFor = async (profile: Profile) => {
 *   const result = await approve({ on: profile });
 *
 *   if (result.isFailure()) {
 *     console.log(result.error.message);
 *     return;
 *   }
 *
 *   // try again the follow operation
 *   return followProfile(profile);
 * };
 *
 * const followProfile = async (profile: Profile) => {
 *   const result = await follow({ profile });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientAllowanceError':
 *         return approveFollowModuleFor(profile);
 *
 *       // others
 *     }
 *   }
 *
 *   // ...
 * };
 * ```
 *
 * ## Pre-approve a publication collect module
 *
 * Similarly to the Profile Follow module, you can use the `useApproveModule` hook
 * to pre-approve a Publication Collect module (legacy or Open Action based).
 *
 * ```ts
 * const { execute: approve } = useApproveModule();
 * const { execute: collect } = useOpenAction({
 *   action: {
 *     kind: OpenActionKind.COLLECT,
 *   }
 * });
 *
 * const approveCollectModuleFor = async (publication: AnyPublication) => {
 *   const result = await approve({ on: publication });
 *
 *   if (result.isFailure()) {
 *     console.log(result.error.message);
 *     return;
 *   }
 *
 *   // try again the collect operation
 *   return collectPublication(publication);
 * };
 *
 * const collectPublication = async (publication: AnyPublication) => {
 *   const result = collect({ publication });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientAllowanceError':
 *         return approveCollectModuleFor(publication);
 *
 *       // others
 *     }
 *   }
 *
 *   // ...
 * };
 * ```
 *
 * ## Failure scenarios
 *
 * Like many other SDK hooks there are some failure scenarios that you might want to handle.
 *
 * ```ts
 * const { execute, error, loading } = useApproveModule();
 *
 * const approve = async (item: AnyPublication | Profile) => {
 *   const result = await execute({ on: publication });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientGasError':
 *         console.log(`The user's wallet does not have enough MATIC to pay for the transaction`);
 *         break;
 *
 *       case 'PendingSigningRequestError':
 *         console.log(
 *           'There is a pending signing request in your wallet. ' +
 *             'Approve it or discard it and try again.'
 *         );
 *         break;
 *
 *       case 'TransactionError':
 *         console.log('There was an processing the transaction', result.error.message);
 *         break;
 *
 *       case 'WalletConnectionError':
 *         console.log('There was an error connecting to your wallet', result.error.message);
 *         break;
 *
 *       case 'UserRejectedError':
 *         // the user decided to not sign, usually this is silently ignored by UIs
 *         break;
 *     }
 *     return;
 *   }
 *
 *   // ...
 * };
 * ```
 *
 * ## Infinite approval
 *
 * By default the `useApproveModule` hook will pre-approve the exact amount required.
 *
 * You can still pre-approve an infinite amount by passing the `limit` argument:
 *
 * ```ts
 * const { execute, error, loading } = useApproveModule({
 *   limit: TokenAllowanceLimit.INFINITE
 * });
 * ```
 *
 * @category Modules
 * @group Hooks
 */
function useApproveModule() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    limit: TokenAllowanceLimit.EXACT
  };
  var increaseAllowance = useTokenAllowanceController();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var on, request;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            on = _ref.on;
            request = resolveTokenAllowanceRequest(on, args.limit);
            return _context.abrupt("return", increaseAllowance(request));
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
}

var BlockProfilesGateway = /*#__PURE__*/function (_ref) {
  _inherits(BlockProfilesGateway, _ref);
  function BlockProfilesGateway(config, providerFactory, apolloClient, transactionFactory) {
    var _this;
    _classCallCheck(this, BlockProfilesGateway);
    _this = _callSuper(this, BlockProfilesGateway, [config, providerFactory]);
    _this.apolloClient = apolloClient;
    _this.transactionFactory = transactionFactory;
    return _this;
  }
  _createClass(BlockProfilesGateway, [{
    key: "createDelegatedTransaction",
    value: function () {
      var _createDelegatedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              transaction = this.transactionFactory.createNativeTransaction({
                chainType: ChainType.POLYGON,
                id: v4(),
                request: request,
                relayerTxId: result.value.txId,
                txHash: result.value.txHash
              });
              return _context.abrupt("return", success(transaction));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createDelegatedTransaction(_x) {
        return _createDelegatedTransaction.apply(this, arguments);
      }
      return createDelegatedTransaction;
    }()
  }, {
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, nonceOverride) {
        var result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.createTypedData(request, nonceOverride);
            case 2:
              result = _context2.sent;
              return _context2.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createUnsignedProtocolCall(_x2, _x3) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.apolloClient.mutate({
                mutation: BlockDocument,
                variables: {
                  request: {
                    profiles: request.profileIds
                  }
                }
              });
            case 2:
              _yield$this$apolloCli = _context3.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return", handleRelayError(data.result));
            case 6:
              return _context3.abrupt("return", success(data.result));
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function relayWithProfileManager(_x4) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }, {
    key: "createCallDetails",
    value: function () {
      var _createCallDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var result;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.createTypedData(request);
            case 2:
              result = _context4.sent;
              return _context4.abrupt("return", this.createSetBlockStatusCallDetails(result));
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function createCallDetails(_x5) {
        return _createCallDetails.apply(this, arguments);
      }
      return createCallDetails;
    }()
  }, {
    key: "createTypedData",
    value: function () {
      var _createTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, nonce) {
        var _yield$this$apolloCli2, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.apolloClient.mutate({
                mutation: CreateBlockProfilesTypedDataDocument,
                variables: {
                  request: {
                    profiles: request.profileIds
                  },
                  options: nonce ? {
                    overrideSigNonce: nonce
                  } : undefined
                }
              });
            case 2:
              _yield$this$apolloCli2 = _context5.sent;
              data = _yield$this$apolloCli2.data;
              return _context5.abrupt("return", data.result);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function createTypedData(_x6, _x7) {
        return _createTypedData.apply(this, arguments);
      }
      return createTypedData;
    }()
  }, {
    key: "createSetBlockStatusCallDetails",
    value: function createSetBlockStatusCallDetails(result) {
      var contract = digiHub(result.typedData.domain.verifyingContract);
      var encodedData = contract["interface"].encodeFunctionData('setBlockStatus', [result.typedData.message.byProfileId, result.typedData.message.idsOfProfilesToSetBlockStatus, result.typedData.message.blockStatus]);
      return {
        contractAddress: result.typedData.domain.verifyingContract,
        encodedData: encodedData
      };
    }
  }]);
  return BlockProfilesGateway;
}(AbstractContractCallGateway);

function useBlockProfilesController() {
  var _useSharedDependencie = useSharedDependencies(),
    activeWallet = _useSharedDependencie.activeWallet,
    apolloClient = _useSharedDependencie.apolloClient,
    config = _useSharedDependencie.config,
    transactionGateway = _useSharedDependencie.transactionGateway,
    transactionQueue = _useSharedDependencie.transactionQueue,
    transactionFactory = _useSharedDependencie.transactionFactory,
    providerFactory = _useSharedDependencie.providerFactory,
    onChainRelayer = _useSharedDependencie.onChainRelayer;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, gateway, signedExecution, delegableExecution, paidExecution, blockProfile, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            presenter = new TransactionResultPresenter();
            gateway = new BlockProfilesGateway(config, providerFactory, apolloClient, transactionFactory);
            signedExecution = new SignedOnChain(activeWallet, transactionGateway, gateway, onChainRelayer, transactionQueue, presenter);
            delegableExecution = new DelegableSigning(signedExecution, gateway, transactionQueue, presenter);
            paidExecution = new PaidTransaction(activeWallet, gateway, presenter, transactionQueue);
            blockProfile = new BlockProfiles(delegableExecution, paidExecution);
            _context.next = 8;
            return blockProfile.execute(request);
          case 8:
            result = presenter.asResult();
            return _context.abrupt("return", result);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * Block one or many profiles.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @category Profiles
 * @group Hooks
 * @param args - {@link BlockProfileArgs}
 *
 * @example
 * ```ts
 * const { execute, error, loading } = useBlockProfiles();
 * ```
 *
 * ## Basic usage
 *
 * Block a single profile.
 *
 * ```tsx
 * const { execute, loading, error } = useBlockProfiles();
 *
 * const block = async (profileId: ProfileId) => {
 *  // invoke the `execute` function to block the profile
 *  await execute({
 *    profiles: [profileId],
 *  });
 * }
 * ```
 *
 * ## Block multiple profiles
 *
 * Block multiple profiles.
 *
 * ```tsx
 * const { execute, loading, error } = useBlockProfiles();
 *
 * const block = async (profileIds: ProfileId[]) => {
 *   // invoke the `execute` function to block the profiles
 *   await execute({
 *     profiles: profileIds,
 *   });
 * }
 * ```
 *
 * ## Failure scenarios
 *
 * You can handle possible failure scenarios by checking the `result` value.
 *
 * ```tsx
 * const block = async (profileId: ProfileId) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     profiles: [profileId],
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'BroadcastingError':
 *         console.log('There was an error broadcasting the transaction', error.message);
 *         break;
 *
 *       case 'PendingSigningRequestError':
 *         console.log(
 *           'There is a pending signing request in your wallet. ' +
 *             'Approve it or discard it and try again.'
 *         );
 *         break;
 *
 *       case 'WalletConnectionError':
 *         console.log('There was an error connecting to your wallet', error.message);
 *         break;
 *
 *       case 'UserRejectedError':
 *         // the user decided to not sign, usually this is silently ignored by UIs
 *         break;
 *     }
 *     return;
 *   }
 * }
 * ```
 *
 * At this point the profile update is completed from an end-user perspective but,
 * in case of on-chain TX, this is not necessarily mined and indexed (yet). See the following section.
 *
 * ## Wait for completion
 *
 * In case of successful submission, the `result` value can be used to wait for the profile metadata to be fully processed.
 *
 * ```tsx
 * const block = async (profileId: ProfileId) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     profiles: [profileId],
 *   });
 *
 *   if (result.isFailure()) {
 *     // handle failure scenarios
 *     return;
 *   }
 *
 *   // this might take a while depending the congestion of the network
 *   const completion = await result.value.waitForCompletion();
 *
 *   if (completion.isFailure()) {
 *     console.log('There was an processing the transaction', completion.error.message);
 *     return;
 *   }
 *
 *   // the transaction is fully processed
 * };
 * ```
 *
 * ## Self-funded approach
 *
 * It just takes a single parameter to disable the sponsorship of the transaction gas costs.
 *
 * ```ts
 * const block = async (profileId: ProfileId) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     profiles: [profileId],
 *     sponsored: false // <--- this is the only difference
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientGasError':
 *         console.log('You do not have enough funds to pay for the transaction gas cost.');
 *         break;
 *
 *       // ...
 *     }
 *     return;
 *   }
 *
 *   // ...
 * }
 * ```
 * In this example you can also see a new error type: {@link InsufficientGasError}. This
 * error happens only with self-funded transactions and it means that the wallet does not
 * have enough funds to pay for the transaction gas costs.
 *
 * ## Self-funded fallback
 *
 * If for some reason the DiGi API cannot sponsor the transaction, the hook will fail with a {@link BroadcastingError} with one of the following reasons:
 * - {@link BroadcastingErrorReason.NOT_SPONSORED} - the profile is not sponsored
 * - {@link BroadcastingErrorReason.RATE_LIMITED} - the profile reached the rate limit
 * - {@link BroadcastingErrorReason.APP_NOT_ALLOWED} - the app is not whitelisted for gasless transactions
 *
 * In those cases you can retry the transaction as self-funded like in the following example:
 *
 * ```ts
 * const block = async (profileId: ProfileId) => {
 *   // the first part is the same as in the initial example
 *
 *   // sponsored attempt
 *   const sponsoredResult = await execute({
 *     profiles: [profileId],
 *   });
 *
 *   if (sponsoredResult.isFailure()) {
 *     switch (sponsoredResult.error.name) {
 *       case 'BroadcastingError':
 *         if ([BroadcastingErrorReason.NOT_SPONSORED, BroadcastingErrorReason.RATE_LIMITED].includes(sponsoredResult.error.reason)) {
 *
 *           const selfFundedResult = await execute({
 *              profiles: [profileId],
 *              sponsored: false
 *           });
 *
 *           // continue with selfFundedResult as in the previous example
 *         }
 *         break;
 *
 *      // ...
 *   }
 * }
 * ```
 *
 * In this example we omitted {@link BroadcastingErrorReason.APP_NOT_ALLOWED} as it's not normally a problem per-se.
 * It just requires the app to apply for whitelisting. See https://docs.digi.xyz/docs/gasless-and-signless#whitelisting-your-app.
 *
 * You can still include it in your fallback logic if you want to. For example to unblock testing your app from a domain that is not the
 * whitelisted one (e.g. localhost).
 *
 */
function useBlockProfiles() {
  var _useSession = useSession(),
    session = _useSession.data;
  var blockProfile = useBlockProfilesController();
  var configureRequest = useSponsoredConfig();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var profiles, sponsored;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            profiles = _ref.profiles, sponsored = _ref.sponsored;
            invariant((session === null || session === void 0 ? void 0 : session.type) === SessionType.WithProfile, 'You must be authenticated with a profile to block a profile. Use `useLogin` hook to authenticate.');
            return _context.abrupt("return", blockProfile(configureRequest({
              profileIds: profiles.map(function (profile) {
                return profile.id;
              }),
              kind: TransactionKind.BLOCK_PROFILE,
              signless: session.profile.signless,
              sponsored: sponsored !== null && sponsored !== void 0 ? sponsored : true
            })));
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
}

var ClaimProfilePresenter = /*#__PURE__*/function () {
  function ClaimProfilePresenter(profileCacheManager, fullHandleResolver) {
    _classCallCheck(this, ClaimProfilePresenter);
    _defineProperty(this, "deferredResult", new Deferred());
    _defineProperty(this, "earlyFailure", null);
    this.profileCacheManager = profileCacheManager;
    this.fullHandleResolver = fullHandleResolver;
  }
  _createClass(ClaimProfilePresenter, [{
    key: "present",
    value: function () {
      var _present = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(result) {
        var profile;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!result.isFailure()) {
                _context.next = 6;
                break;
              }
              if (result.error instanceof TransactionError) {
                _context.next = 4;
                break;
              }
              this.earlyFailure = failure(result.error);
              return _context.abrupt("return");
            case 4:
              this.deferredResult.resolve(failure(result.error));
              return _context.abrupt("return");
            case 6:
              _context.next = 8;
              return this.profileCacheManager.fetchProfileByHandle(isClaimReservedHandleRequest(result.value.request) ? result.value.request.handle : this.fullHandleResolver(result.value.request.localName));
            case 8:
              profile = _context.sent;
              invariant(profile, 'Profile not found');
              this.deferredResult.resolve(success(profile));
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function present(_x) {
        return _present.apply(this, arguments);
      }
      return present;
    }()
  }, {
    key: "asResult",
    value: function asResult() {
      var _this = this;
      if (this.earlyFailure) {
        return this.earlyFailure;
      }
      return success({
        waitForCompletion: function () {
          var _waitForCompletion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", _this.deferredResult.promise);
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function waitForCompletion() {
            return _waitForCompletion.apply(this, arguments);
          }
          return waitForCompletion;
        }()
      });
    }
  }]);
  return ClaimProfilePresenter;
}();

function resolveClaimProfileWithHandleRequest(request) {
  if (isClaimReservedHandleRequest(request)) {
    return {
      id: request.id,
      followModule: request.followPolicy ? resolveFollowModuleInput(request.followPolicy) : null
    };
  }
  return {
    freeTextHandle: request.localName,
    followModule: request.followPolicy ? resolveFollowModuleInput(request.followPolicy) : null
  };
}
var ClaimProfileGateway = /*#__PURE__*/function () {
  function ClaimProfileGateway(apolloClient, transactionFactory) {
    _classCallCheck(this, ClaimProfileGateway);
    this.apolloClient = apolloClient;
    this.transactionFactory = transactionFactory;
  }
  _createClass(ClaimProfileGateway, [{
    key: "claimHandleTransaction",
    value: function () {
      var _claimHandleTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var _yield$this$apolloCli, data, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.apolloClient.mutate({
                mutation: ClaimProfileWithHandleDocument,
                variables: {
                  request: resolveClaimProfileWithHandleRequest(request)
                }
              });
            case 2:
              _yield$this$apolloCli = _context.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'ClaimProfileWithHandleErrorResult')) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return", failure(new ClaimHandleError$1(isClaimReservedHandleRequest(request) ? request.handle : request.localName, data.result.reason)));
            case 6:
              transaction = this.transactionFactory.createNativeTransaction({
                chainType: ChainType.POLYGON,
                id: v4(),
                request: request,
                relayerTxId: data.result.txId,
                txHash: data.result.txHash
              });
              return _context.abrupt("return", success(transaction));
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function claimHandleTransaction(_x) {
        return _claimHandleTransaction.apply(this, arguments);
      }
      return claimHandleTransaction;
    }()
  }]);
  return ClaimProfileGateway;
}();

function useClaimHandleController() {
  var _useSharedDependencie = useSharedDependencies(),
    apolloClient = _useSharedDependencie.apolloClient,
    config = _useSharedDependencie.config,
    profileCacheManager = _useSharedDependencie.profileCacheManager,
    transactionFactory = _useSharedDependencie.transactionFactory,
    transactionQueue = _useSharedDependencie.transactionQueue;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var gateway, presenter, claimHandle, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            gateway = new ClaimProfileGateway(apolloClient, transactionFactory);
            presenter = new ClaimProfilePresenter(profileCacheManager, config.environment.handleResolver);
            claimHandle = new ClaimHandle(gateway, transactionQueue, presenter);
            _context.next = 5;
            return claimHandle.execute(request);
          case 5:
            result = presenter.asResult();
            if (!result.isSuccess()) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return", result.value.waitForCompletion());
          case 8:
            return _context.abrupt("return", result);
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * @privateRemarks Extended class to generate proper documentation. No measurable run-time implications.
 */
var ClaimHandleError = /*#__PURE__*/function (_GenericClaimHandleEr) {
  _inherits(ClaimHandleError, _GenericClaimHandleEr);
  function ClaimHandleError() {
    _classCallCheck(this, ClaimHandleError);
    return _callSuper(this, ClaimHandleError, arguments);
  }
  return _createClass(ClaimHandleError);
}(ClaimHandleError$1);

/**
 * Claim a handle details.
 */

/**
 * `useClaimHandle` is React Hook that allows you to claim a handle.
 *
 * You MUST be authenticated with a {@link WalletOnlySession} via {@link useLogin} to use this hook.
 *
 * @experimental This hook is experimental and may change in future versions.
 * @category Profiles
 * @group Hooks
 */
function useClaimHandle() {
  var _useSession = useSession(),
    session = _useSession.data;
  var claimHandle = useClaimHandleController();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _args$reserved, _args$reserved2;
      var request;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            invariant((session === null || session === void 0 ? void 0 : session.type) === SessionType.JustWallet, 'You must be authenticated with just a wallet to claim an handle. Use `useLogin` hook omitting the profileId.');
            request = "reserved" in args && args.reserved ? {
              kind: TransactionKind.CLAIM_HANDLE,
              id: (_args$reserved = args.reserved) === null || _args$reserved === void 0 ? void 0 : _args$reserved.id,
              handle: (_args$reserved2 = args.reserved) === null || _args$reserved2 === void 0 ? void 0 : _args$reserved2.withHandle
            } : {
              kind: TransactionKind.CLAIM_HANDLE,
              localName: args.localName
            };
            return _context.abrupt("return", claimHandle(request));
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

var CreateProfilePresenter = /*#__PURE__*/function () {
  function CreateProfilePresenter(profileCacheManager, fullHandleResolver) {
    _classCallCheck(this, CreateProfilePresenter);
    _defineProperty(this, "deferredResult", new Deferred());
    _defineProperty(this, "earlyFailure", null);
    this.profileCacheManager = profileCacheManager;
    this.fullHandleResolver = fullHandleResolver;
  }
  _createClass(CreateProfilePresenter, [{
    key: "present",
    value: function () {
      var _present = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(result) {
        var profile;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!result.isFailure()) {
                _context.next = 6;
                break;
              }
              if (result.error instanceof TransactionError) {
                _context.next = 4;
                break;
              }
              this.earlyFailure = failure(result.error);
              return _context.abrupt("return");
            case 4:
              this.deferredResult.resolve(failure(result.error));
              return _context.abrupt("return");
            case 6:
              _context.next = 8;
              return this.profileCacheManager.fetchProfileByHandle(this.fullHandleResolver(result.value.request.localName));
            case 8:
              profile = _context.sent;
              invariant(profile, 'Profile not found');
              this.deferredResult.resolve(success(profile));
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function present(_x) {
        return _present.apply(this, arguments);
      }
      return present;
    }()
  }, {
    key: "asResult",
    value: function asResult() {
      var _this = this;
      if (this.earlyFailure) {
        return this.earlyFailure;
      }
      return success({
        waitForCompletion: function () {
          var _waitForCompletion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", _this.deferredResult.promise);
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function waitForCompletion() {
            return _waitForCompletion.apply(this, arguments);
          }
          return waitForCompletion;
        }()
      });
    }
  }]);
  return CreateProfilePresenter;
}();

var CreateProfileTransactionGateway = /*#__PURE__*/function (_AbstractContractCall) {
  _inherits(CreateProfileTransactionGateway, _AbstractContractCall);
  function CreateProfileTransactionGateway(apolloClient, config, providerFactory) {
    var _this;
    _classCallCheck(this, CreateProfileTransactionGateway);
    _this = _callSuper(this, CreateProfileTransactionGateway, [config, providerFactory]);
    _this.apolloClient = apolloClient;
    return _this;
  }
  _createClass(CreateProfileTransactionGateway, [{
    key: "createCallDetails",
    value: function () {
      var _createCallDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request, provider) {
        var delegatedExecutors, contract, encodedData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.resolveDelegatedExecutors(request);
            case 2:
              delegatedExecutors = _context.sent;
              contract = permissionlessCreator(this.config.environment.contracts.permissionlessCreator, provider);
              encodedData = contract["interface"].encodeFunctionData('createProfileWithHandle', [{
                to: request.to,
                followModule: '0x0000000000000000000000000000000000000000',
                followModuleInitData: '0x'
              }, request.localName, delegatedExecutors]);
              _context.t0 = this.config.environment.contracts.permissionlessCreator;
              _context.t1 = encodedData;
              _context.next = 9;
              return contract.getProfileWithHandleCreationPrice();
            case 9:
              _context.t2 = _context.sent;
              return _context.abrupt("return", {
                contractAddress: _context.t0,
                encodedData: _context.t1,
                value: _context.t2
              });
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createCallDetails(_x, _x2) {
        return _createCallDetails.apply(this, arguments);
      }
      return createCallDetails;
    }()
  }, {
    key: "resolveDelegatedExecutors",
    value: function () {
      var _resolveDelegatedExecutors = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        var _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (request.approveSignless) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", []);
            case 2:
              _context2.next = 4;
              return this.apolloClient.query({
                query: GenerateDiGiApiRelayAddressDocument
              });
            case 4:
              _yield$this$apolloCli = _context2.sent;
              data = _yield$this$apolloCli.data;
              return _context2.abrupt("return", [data.result]);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function resolveDelegatedExecutors(_x3) {
        return _resolveDelegatedExecutors.apply(this, arguments);
      }
      return resolveDelegatedExecutors;
    }()
  }]);
  return CreateProfileTransactionGateway;
}(AbstractContractCallGateway);

function useCreateProfileController() {
  var _useSharedDependencie = useSharedDependencies(),
    apolloClient = _useSharedDependencie.apolloClient,
    config = _useSharedDependencie.config,
    profileCacheManager = _useSharedDependencie.profileCacheManager,
    providerFactory = _useSharedDependencie.providerFactory,
    transactionQueue = _useSharedDependencie.transactionQueue,
    walletGateway = _useSharedDependencie.walletGateway;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var gateway, presenter, createProfile, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            gateway = new CreateProfileTransactionGateway(apolloClient, config, providerFactory);
            presenter = new CreateProfilePresenter(profileCacheManager, config.environment.handleResolver);
            createProfile = new CreateProfile(walletGateway, gateway, presenter, transactionQueue);
            _context.next = 5;
            return createProfile.execute(request);
          case 5:
            result = presenter.asResult();
            if (!result.isSuccess()) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return", result.value.waitForCompletion());
          case 8:
            return _context.abrupt("return", result);
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * Create Profile details.
 */

/**
 * `useCreateProfile` is a React Hook that allows you to create a Profile associated with a Handle.
 *
 * @example
 * ```ts
 * const { execute, loading, error } = useCreateProfile();
 * ```
 *
 * ## Create a Profile
 *
 * ```ts
 * const { execute, loading, error } = useCreateProfile();
 *
 * // ...
 *
 * const result = execute({
 *   localName: 'foobar', // full handle will be digi/foobar
 *   to: '0x1234567890123456789012345678901234567890',
 * });
 *
 * if (result.isFailure()) {
 *   console.error(result.error);
 *   return;
 * }
 *
 * const profile = result.value;
 * console.log(profile);
 * ```
 *
 * @experimental This hook is experimental and may change in future versions.
 * @category Profiles
 * @group Hooks
 */
function useCreateProfile() {
  var _useValidateHandle = useValidateHandle(),
    validate = _useValidateHandle.execute;
  var createProfile = useCreateProfileController();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _args$approveSignless;
      var result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return validate({
              localName: args.localName
            });
          case 2:
            result = _context.sent;
            if (!result.isFailure()) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return", result);
          case 5:
            return _context.abrupt("return", createProfile({
              kind: TransactionKind.CREATE_PROFILE,
              localName: args.localName,
              to: args.to,
              approveSignless: (_args$approveSignless = args.approveSignless) !== null && _args$approveSignless !== void 0 ? _args$approveSignless : true
            }));
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

function resolveProfileFollow(request) {
  if (isPaidFollowRequest(request)) {
    return [{
      profileId: request.profileId,
      followModule: {
        feeFollowModule: {
          amount: {
            currency: request.fee.amount.asset.address,
            value: request.fee.amount.toSignificantDigits()
          }
        }
      }
    }];
  }
  if (isUnknownFollowRequest(request)) {
    return [{
      profileId: request.profileId,
      followModule: {
        unknownFollowModule: {
          address: request.address,
          data: request.data
        }
      }
    }];
  }
  return [{
    profileId: request.profileId
  }];
}
var FollowProfileGateway = /*#__PURE__*/function (_ref) {
  _inherits(FollowProfileGateway, _ref);
  function FollowProfileGateway(config, providerFactory, apolloClient, transactionFactory) {
    var _this;
    _classCallCheck(this, FollowProfileGateway);
    _this = _callSuper(this, FollowProfileGateway, [config, providerFactory]);
    _this.apolloClient = apolloClient;
    _this.transactionFactory = transactionFactory;
    return _this;
  }
  _createClass(FollowProfileGateway, [{
    key: "createDelegatedTransaction",
    value: function () {
      var _createDelegatedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              transaction = this.transactionFactory.createNativeTransaction({
                chainType: ChainType.POLYGON,
                id: v4(),
                request: request,
                relayerTxId: result.value.txId,
                txHash: result.value.txHash
              });
              return _context.abrupt("return", success(transaction));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createDelegatedTransaction(_x) {
        return _createDelegatedTransaction.apply(this, arguments);
      }
      return createDelegatedTransaction;
    }()
  }, {
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, nonce) {
        var result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.createTypedData(request, nonce);
            case 2:
              result = _context2.sent;
              return _context2.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createUnsignedProtocolCall(_x2, _x3) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "createCallDetails",
    value: function () {
      var _createCallDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.createTypedData(request);
            case 2:
              result = _context3.sent;
              return _context3.abrupt("return", this.createFollowCallDetails(result));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function createCallDetails(_x4) {
        return _createCallDetails.apply(this, arguments);
      }
      return createCallDetails;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.apolloClient.mutate({
                mutation: FollowDocument,
                variables: {
                  request: this.resolveFollowDiGiManagerRequest(request)
                }
              });
            case 2:
              _yield$this$apolloCli = _context4.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context4.next = 6;
                break;
              }
              return _context4.abrupt("return", handleRelayError(data.result));
            case 6:
              return _context4.abrupt("return", success(data.result));
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function relayWithProfileManager(_x5) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }, {
    key: "createTypedData",
    value: function () {
      var _createTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, nonce) {
        var _yield$this$apolloCli2, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.apolloClient.mutate({
                mutation: CreateFollowTypedDataDocument,
                variables: {
                  request: this.resolveTypedDataFollowRequest(request),
                  options: nonce ? {
                    overrideSigNonce: nonce
                  } : undefined
                }
              });
            case 2:
              _yield$this$apolloCli2 = _context5.sent;
              data = _yield$this$apolloCli2.data;
              return _context5.abrupt("return", data.result);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function createTypedData(_x6, _x7) {
        return _createTypedData.apply(this, arguments);
      }
      return createTypedData;
    }()
  }, {
    key: "resolveFollowDiGiManagerRequest",
    value: function resolveFollowDiGiManagerRequest(request) {
      return {
        follow: resolveProfileFollow(request)
      };
    }
  }, {
    key: "resolveTypedDataFollowRequest",
    value: function resolveTypedDataFollowRequest(request) {
      return {
        follow: resolveProfileFollow(request)
      };
    }
  }, {
    key: "createFollowCallDetails",
    value: function createFollowCallDetails(result) {
      var contract = digiHub(result.typedData.domain.verifyingContract);
      var encodedData = contract["interface"].encodeFunctionData('follow', [result.typedData.message.followerProfileId, result.typedData.message.idsOfProfilesToFollow, result.typedData.message.followTokenIds, result.typedData.message.datas]);
      return {
        contractAddress: result.typedData.domain.verifyingContract,
        encodedData: encodedData
      };
    }
  }]);
  return FollowProfileGateway;
}(AbstractContractCallGateway);

function createRequestValidator(schema) {
  return function (request) {
    var result = schema.safeParse(request);
    if (result.success) return;
    never(formatZodError(result.error));
  };
}
var validateUpdateFollowPolicyRequest = createRequestValidator(UpdateFollowPolicyRequestSchema);
var validateUpdateProfileManagersRequest = createRequestValidator(UpdateProfileManagersRequestSchema);
var validateUnfollowRequest = createRequestValidator(UnfollowRequestSchema);
var validateFollowRequest = createRequestValidator(FollowRequestSchema);
var validateLinkHandleRequest = createRequestValidator(LinkHandleRequestSchema);
var validateUnlinkHandleRequest = createRequestValidator(UnlinkHandleRequestSchema);

function useFollowController() {
  var _useSharedDependencie = useSharedDependencies(),
    activeWallet = _useSharedDependencie.activeWallet,
    apolloClient = _useSharedDependencie.apolloClient,
    config = _useSharedDependencie.config,
    onChainRelayer = _useSharedDependencie.onChainRelayer,
    providerFactory = _useSharedDependencie.providerFactory,
    tokenAvailability = _useSharedDependencie.tokenAvailability,
    transactionFactory = _useSharedDependencie.transactionFactory,
    transactionGateway = _useSharedDependencie.transactionGateway,
    transactionQueue = _useSharedDependencie.transactionQueue;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, gateway, signedExecution, delegableExecution, paidExecution, followProfile;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            validateFollowRequest(request);
            presenter = new TransactionResultPresenter();
            gateway = new FollowProfileGateway(config, providerFactory, apolloClient, transactionFactory);
            signedExecution = new SignedOnChain(activeWallet, transactionGateway, gateway, onChainRelayer, transactionQueue, presenter);
            delegableExecution = new DelegableSigning(signedExecution, gateway, transactionQueue, presenter);
            paidExecution = new PaidTransaction(activeWallet, gateway, presenter, transactionQueue);
            followProfile = new FollowProfile(tokenAvailability, signedExecution, delegableExecution, paidExecution, presenter);
            _context.next = 9;
            return followProfile.execute(request);
          case 9:
            return _context.abrupt("return", presenter.asResult());
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

var PrematureFollowError = /*#__PURE__*/function (_Error) {
  _inherits(PrematureFollowError, _Error);
  function PrematureFollowError() {
    var _this;
    _classCallCheck(this, PrematureFollowError);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, PrematureFollowError, [].concat(args));
    _defineProperty(_assertThisInitialized(_this), "name", 'PrematureFollowError');
    return _this;
  }
  return _createClass(PrematureFollowError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
function createFollowRequest(args, session) {
  var _args$sponsored, _args$sponsored2, _ref, _args$sponsored3;
  invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to use this operation. Use `useLogin` hook to authenticate.');
  invariant(session.type === SessionType.WithProfile, 'You must have a profile to use this operation.');
  var followPolicy = resolveFollowPolicy(args.profile);
  switch (followPolicy.type) {
    case FollowPolicyType.CHARGE:
      return {
        kind: TransactionKind.FOLLOW_PROFILE,
        fee: {
          amount: followPolicy.amount,
          contractAddress: followPolicy.contractAddress,
          recipient: followPolicy.recipient
        },
        profileId: args.profile.id,
        signless: false,
        sponsored: (_args$sponsored = args.sponsored) !== null && _args$sponsored !== void 0 ? _args$sponsored : true
      };
    case FollowPolicyType.ANYONE:
      return {
        kind: TransactionKind.FOLLOW_PROFILE,
        profileId: args.profile.id,
        signless: session.profile.signless,
        sponsored: (_args$sponsored2 = args.sponsored) !== null && _args$sponsored2 !== void 0 ? _args$sponsored2 : true
      };
    case FollowPolicyType.UNKNOWN:
      return {
        kind: TransactionKind.FOLLOW_PROFILE,
        profileId: args.profile.id,
        address: followPolicy.contractAddress,
        data: (_ref = args.data) !== null && _ref !== void 0 ? _ref : never("Profile ".concat(args.profile.id, " is configured with Unknown Follow Module ").concat(followPolicy.contractAddress, ". ") + 'You MUST provide `data` to execute Unknown Follow Modules. ' + 'If a module does not require processing calldata just use `0x` string.'),
        signless: session.profile.signless && followPolicy.signlessApproved,
        sponsored: ((_args$sponsored3 = args.sponsored) !== null && _args$sponsored3 !== void 0 ? _args$sponsored3 : true) && followPolicy.sponsoredApproved
      };
    case FollowPolicyType.NO_ONE:
      throw new InvariantError("The profile is configured so that nobody can follow it.");
  }
}

/**
 * An object representing the result of a follow operation.
 *
 * It allows to wait for the transaction to be processed and indexed.
 */

/**
 * `useFollow` allows you to follow another Profile.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```ts
 * const { execute: follow, error, loading } = useFollow();
 * ```
 *
 * ## Follow a profile
 *
 * Given you have an instance of a {@link Profile} from fetched data, you can follow with:
 *
 * ```ts
 * const { execute, error, loading } = useFollow();
 *
 * const follow = async (profile: Profile) => {
 *   const result = await execute({ profile });
 *
 *   // ...
 * }
 * ```
 *
 * ## Failure scenarios
 *
 * You can handle possible failure scenarios by checking the `result` value.
 *
 * ```ts
 * const follow = async (profile: Profile) => {
 *   const result = await execute({ profile });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'BroadcastingError':
 *         console.log('There was an error broadcasting the transaction', error.message);
 *         break;
 *
 *       case 'PendingSigningRequestError':
 *         console.log(
 *           'There is a pending signing request in your wallet. ' +
 *             'Approve it or discard it and try again.'
 *         );
 *         break;
 *
 *       case 'InsufficientAllowanceError':
 *         const requestedAmount = result.error.requestedAmount;
 *         console.log(
 *           'You must approve the contract to spend at least: '+
 *             `${requestedAmount.asset.symbol} ${requestedAmount.toSignificantDigits(6)}`
 *         );
 *         break;
 *
 *       case 'InsufficientFundsError':
 *         const requestedAmount = result.error.requestedAmount;
 *         console.log(
 *           'You do not have enough funds to pay for this follow fee: '+
 *             `${requestedAmount.asset.symbol} ${requestedAmount.toSignificantDigits(6)}`
 *         );
 *         break;
 *
 *       case 'WalletConnectionError':
 *         console.log('There was an error connecting to your wallet', error.message);
 *         break;
 *
 *       case 'PrematureFollowError':
 *         console.log('There is a pending unfollow request for this profile.');
 *         break;
 *
 *       case 'UserRejectedError':
 *         // the user decided to not sign, usually this is silently ignored by UIs
 *         break;
 *     }
 *     return;
 *   }
 * }
 * ```
 *
 *
 * ## Wait for completion
 *
 * You can always wait the operation to be fully processed and indexed by DiGi API.
 *
 * ```ts
 * const follow = async (profile: Profile) => {
 *   const result = await execute({ profile });
 *
 *   if (result.isFailure()) {
 *     // handle failure scenarios
 *     return;
 *   }
 *
 *   // this might take a while depending on the congestion of the network
 *   const completion = await result.value.waitForCompletion();
 *
 *   if (completion.isFailure()) {
 *     console.log('There was an processing the transaction', completion.error.message);
 *     return;
 *   }
 *
 *   console.log('Follow executed successfully');
 * };
 * ```
 *
 * ## Self-funded approach
 *
 * It just takes a single parameter to disable the sponsorship of the transaction gas costs.
 *
 * ```ts
 * const follow = async (profile: Profile) => {
 *   const result = await execute({
 *     profile,
 *     sponsored: false
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientGasError':
 *         console.log('You do not have enough funds to pay for the transaction gas cost.');
 *         break;
 *
 *       // ...
 *     }
 *     return;
 *   }
 *
 *   // ...
 * }
 * ```
 * In this example you can also see a new error type: {@link InsufficientGasError}. This
 * error happens only with self-funded transactions and it means that the wallet does not
 * have enough funds to pay for the transaction gas costs.
 *
 * ## Self-funded fallback
 *
 * If for some reason the DiGi API cannot sponsor the transaction, the hook will fail with a {@link BroadcastingError} with one of the following reasons:
 * - {@link BroadcastingErrorReason.NOT_SPONSORED} - the profile is not sponsored
 * - {@link BroadcastingErrorReason.RATE_LIMITED} - the profile reached the rate limit
 * - {@link BroadcastingErrorReason.APP_NOT_ALLOWED} - the app is not whitelisted for gasless transactions
 *
 * In those cases you can retry the transaction as self-funded like in the following example:
 *
 * ```ts
 * const follow = async (profile: Profile) => {
 *   const sponsoredResult = await execute({ profile });
 *
 *   if (sponsoredResult.isFailure()) {
 *     switch (sponsoredResult.error.name) {
 *       case 'BroadcastingError':
 *         if ([BroadcastingErrorReason.NOT_SPONSORED, BroadcastingErrorReason.RATE_LIMITED].includes(sponsoredResult.error.reason)) {
 *
 *           const selfFundedResult = await execute({ profile, sponsored: false });
 *
 *           // continue with selfFundedResult as in the previous example
 *         }
 *         break;
 *
 *      // ...
 *   }
 * }
 * ```
 *
 * In this example we omitted {@link BroadcastingErrorReason.APP_NOT_ALLOWED} as it's not normally a problem per-se.
 * It just requires the app to apply for whitelisting. See https://docs.digi.xyz/docs/gasless-and-signless#whitelisting-your-app.
 *
 * You can still include it in your fallback logic if you want to. For example to unblock testing your app from a domain that is not the
 * whitelisted one (e.g. localhost).
 *
 * @category Profiles
 * @group Hooks
 */
function useFollow() {
  var _useSession = useSession(),
    session = _useSession.data;
  var followProfile = useFollowController();
  var configureRequest = useSponsoredConfig();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var request;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            invariant(args.profile.operations.canFollow === TriStateValue.Yes, "You can't follow this profile. Check the `profile.operations.canFollow` beforehand.");
            if (args.profile.operations.isFollowedByMe.isFinalisedOnchain) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return", failure(new PrematureFollowError("A previous unfollow request for ".concat(args.profile.id, " is still pending.\n          Check 'profile.operations.isFollowedByMe.isFinalisedOnchain' beforehand."))));
          case 3:
            request = configureRequest(createFollowRequest(args, session));
            return _context.abrupt("return", followProfile(request));
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
}

var LinkHandleGateway = /*#__PURE__*/function (_ref) {
  _inherits(LinkHandleGateway, _ref);
  function LinkHandleGateway(config, providerFactory, apolloClient, transactionFactory) {
    var _this;
    _classCallCheck(this, LinkHandleGateway);
    _this = _callSuper(this, LinkHandleGateway, [config, providerFactory]);
    _this.apolloClient = apolloClient;
    _this.transactionFactory = transactionFactory;
    return _this;
  }
  _createClass(LinkHandleGateway, [{
    key: "createDelegatedTransaction",
    value: function () {
      var _createDelegatedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              transaction = this.transactionFactory.createNativeTransaction({
                chainType: ChainType.POLYGON,
                id: v4(),
                request: request,
                relayerTxId: result.value.txId,
                txHash: result.value.txHash
              });
              return _context.abrupt("return", success(transaction));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createDelegatedTransaction(_x) {
        return _createDelegatedTransaction.apply(this, arguments);
      }
      return createDelegatedTransaction;
    }()
  }, {
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, nonce) {
        var result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.createTypedData(request, nonce);
            case 2:
              result = _context2.sent;
              return _context2.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createUnsignedProtocolCall(_x2, _x3) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "createCallDetails",
    value: function () {
      var _createCallDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.createTypedData(request);
            case 2:
              result = _context3.sent;
              return _context3.abrupt("return", this.createLinkCallDetails(result));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function createCallDetails(_x4) {
        return _createCallDetails.apply(this, arguments);
      }
      return createCallDetails;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.apolloClient.mutate({
                mutation: LinkHandleToProfileDocument,
                variables: {
                  request: {
                    handle: request.fullHandle
                  }
                }
              });
            case 2:
              _yield$this$apolloCli = _context4.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context4.next = 6;
                break;
              }
              return _context4.abrupt("return", handleRelayError(data.result));
            case 6:
              return _context4.abrupt("return", success(data.result));
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function relayWithProfileManager(_x5) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }, {
    key: "createTypedData",
    value: function () {
      var _createTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, nonce) {
        var _yield$this$apolloCli2, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.apolloClient.mutate({
                mutation: CreateLinkHandleToProfileTypedDataDocument,
                variables: {
                  request: {
                    handle: request.fullHandle
                  },
                  options: nonce ? {
                    overrideSigNonce: nonce
                  } : undefined
                }
              });
            case 2:
              _yield$this$apolloCli2 = _context5.sent;
              data = _yield$this$apolloCli2.data;
              return _context5.abrupt("return", data.result);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function createTypedData(_x6, _x7) {
        return _createTypedData.apply(this, arguments);
      }
      return createTypedData;
    }()
  }, {
    key: "createLinkCallDetails",
    value: function createLinkCallDetails(result) {
      var contract = digiTokenHandleRegistry(result.typedData.domain.verifyingContract);
      var encodedData = contract["interface"].encodeFunctionData('link', [result.typedData.message.handleId, result.typedData.message.profileId]);
      return {
        contractAddress: result.typedData.domain.verifyingContract,
        encodedData: encodedData
      };
    }
  }]);
  return LinkHandleGateway;
}(AbstractContractCallGateway);

function useLinkHandleController() {
  var _useSharedDependencie = useSharedDependencies(),
    activeWallet = _useSharedDependencie.activeWallet,
    apolloClient = _useSharedDependencie.apolloClient,
    config = _useSharedDependencie.config,
    onChainRelayer = _useSharedDependencie.onChainRelayer,
    transactionFactory = _useSharedDependencie.transactionFactory,
    transactionGateway = _useSharedDependencie.transactionGateway,
    transactionQueue = _useSharedDependencie.transactionQueue,
    providerFactory = _useSharedDependencie.providerFactory;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, gateway, signedExecution, delegableExecution, paidExecution, linkHandle;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            validateLinkHandleRequest(request);
            presenter = new TransactionResultPresenter();
            gateway = new LinkHandleGateway(config, providerFactory, apolloClient, transactionFactory);
            signedExecution = new SignedOnChain(activeWallet, transactionGateway, gateway, onChainRelayer, transactionQueue, presenter);
            delegableExecution = new DelegableSigning(signedExecution, gateway, transactionQueue, presenter);
            paidExecution = new PaidTransaction(activeWallet, gateway, presenter, transactionQueue);
            linkHandle = new LinkHandle(delegableExecution, paidExecution);
            _context.next = 9;
            return linkHandle.execute(request);
          case 9:
            return _context.abrupt("return", presenter.asResult());
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * Link a handle from your profile.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @category Profiles
 * @group Hooks
 * @param args - {@link LinkHandleArgs}
 *
 * @example
 * ```tsx
 * const { execute, error, loading } = useLinkHandle();
 * ```
 *
 * ## Basic usage
 *
 * Link a handle.
 *
 * ```tsx
 * const { execute, error, loading } = useLinkHandle();
 *
 * const link = async (handle: string) => {
 *   await execute({
 *     handle
 *   });
 * }
 * ```
 *
 * ## Failure scenarios
 *
 * You can handle possible failure scenarios by checking the `result` value.
 *
 * ```tsx
 * const link = async (handle: string) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     handle
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'BroadcastingError':
 *         console.log('There was an error broadcasting the transaction', error.message);
 *         break;
 *
 *       case 'PendingSigningRequestError':
 *         console.log(
 *           'There is a pending signing request in your wallet. ' +
 *             'Approve it or discard it and try again.'
 *         );
 *         break;
 *
 *       case 'WalletConnectionError':
 *         console.log('There was an error connecting to your wallet', error.message);
 *         break;
 *
 *       case 'UserRejectedError':
 *         // the user decided to not sign, usually this is silently ignored by UIs
 *         break;
 *     }
 *     return;
 *   }
 * }
 * ```
 *
 * At this point the profile update is completed from an end-user perspective but,
 * in case of on-chain TX, this is not necessarily mined and indexed (yet). See the following section.
 *
 * ## Wait for completion
 *
 * In case of successful submission, the `result` value can be used to wait for the profile metadata to be fully processed.
 *
 * ```tsx
 * const link = async (handle: string) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     handle
 *   });
 *
 * if (result.isFailure()) {
 *     // handle failure scenarios
 *     return;
 *   }
 *
 *   // this might take a while depending the congestion of the network
 *   const completion = await result.value.waitForCompletion();
 *
 *   if (completion.isFailure()) {
 *     console.log('There was an processing the transaction', completion.error.message);
 *     return;
 *   }
 *
 *   // the transaction is fully processed
 * };
 * ```
 *
 * ## Self-funded approach
 *
 * It just takes a single parameter to disable the sponsorship of the transaction gas costs.
 *
 * ```ts
 * const link = async (handle: string) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     handle,
 *     sponsored: false // <--- this is the only difference
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientGasError':
 *         console.log('You do not have enough funds to pay for the transaction gas cost.');
 *         break;
 *
 *       // ...
 *     }
 *     return;
 *   }
 *
 *   // ...
 * }
 * ```
 * In this example you can also see a new error type: {@link InsufficientGasError}. This
 * error happens only with self-funded transactions and it means that the wallet does not
 * have enough funds to pay for the transaction gas costs.
 *
 * ## Self-funded fallback
 *
 * If for some reason the DiGi API cannot sponsor the transaction, the hook will fail with a {@link BroadcastingError} with one of the following reasons:
 * - {@link BroadcastingErrorReason.NOT_SPONSORED} - the profile is not sponsored
 * - {@link BroadcastingErrorReason.RATE_LIMITED} - the profile reached the rate limit
 * - {@link BroadcastingErrorReason.APP_NOT_ALLOWED} - the app is not whitelisted for gasless transactions
 *
 * In those cases you can retry the transaction as self-funded like in the following example:
 *
 * ```ts
 * const link = async (handle: string) => {
 *   // the first part is the same as in the initial example
 *
 *   // sponsored attempt
 *   const sponsoredResult = await execute({
 *     handle,
 *   });
 *
 *   if (sponsoredResult.isFailure()) {
 *     switch (sponsoredResult.error.name) {
 *       case 'BroadcastingError':
 *         if ([BroadcastingErrorReason.NOT_SPONSORED, BroadcastingErrorReason.RATE_LIMITED].includes(sponsoredResult.error.reason)) {
 *
 *           const selfFundedResult = await execute({
 *             handle,
 *             sponsored: false
 *           });
 *
 *           // continue with selfFundedResult as in the previous example
 *         }
 *         break;
 *
 *      // ...
 *   }
 * }
 * ```
 *
 * In this example we omitted {@link BroadcastingErrorReason.APP_NOT_ALLOWED} as it's not normally a problem per-se.
 * It just requires the app to apply for whitelisting. See https://docs.digi.xyz/docs/gasless-and-signless#whitelisting-your-app.
 *
 * You can still include it in your fallback logic if you want to. For example to unblock testing your app from a domain that is not the
 * whitelisted one (e.g. localhost).
 *
 */
function useLinkHandle() {
  var _useSession = useSession(),
    session = _useSession.data;
  var linkHandle = useLinkHandleController();
  var configureRequest = useSponsoredConfig();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _args$handle$linkedTo, _args$sponsored;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to use this operation. Use `useLogin` hook to authenticate.');
            invariant(session.type === SessionType.WithProfile, 'You must have a profile to use this operation.');
            invariant(!args.handle.linkedTo, "The handle is already linked to profile ".concat((_args$handle$linkedTo = args.handle.linkedTo) === null || _args$handle$linkedTo === void 0 ? void 0 : _args$handle$linkedTo.nftTokenId, "."));
            return _context.abrupt("return", linkHandle(configureRequest({
              kind: TransactionKind.LINK_HANDLE,
              fullHandle: args.handle.fullHandle,
              profileId: session.profile.id,
              signless: session.profile.signless,
              sponsored: (_args$sponsored = args.sponsored) !== null && _args$sponsored !== void 0 ? _args$sponsored : true
            })));
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

var OpenActionGateway = /*#__PURE__*/function (_ref) {
  _inherits(OpenActionGateway, _ref);
  function OpenActionGateway(config, apolloClient, transactionFactory, providerFactory) {
    var _this;
    _classCallCheck(this, OpenActionGateway);
    _this = _callSuper(this, OpenActionGateway, [config, providerFactory]);
    _this.apolloClient = apolloClient;
    _this.transactionFactory = transactionFactory;
    return _this;
  }
  _createClass(OpenActionGateway, [{
    key: "createDelegatedTransaction",
    value: function () {
      var _createDelegatedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              transaction = this.transactionFactory.createNativeTransaction({
                chainType: ChainType.POLYGON,
                id: v4(),
                request: request,
                relayerTxId: result.value.txId,
                txHash: result.value.txHash
              });
              return _context.abrupt("return", success(transaction));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createDelegatedTransaction(_x) {
        return _createDelegatedTransaction.apply(this, arguments);
      }
      return createDelegatedTransaction;
    }()
  }, {
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, nonce) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(request.type === AllOpenActionType.LEGACY_COLLECT)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", this.createLegacyCollectUnsignedProtocolCall(request, nonce));
            case 2:
              return _context2.abrupt("return", this.createOpenActionUnsignedProtocolCall(request, nonce));
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createUnsignedProtocolCall(_x2, _x3) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "createCallDetails",
    value: function () {
      var _createCallDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var _input, _result, _input2, _result2, input, result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!request["public"]) {
                _context3.next = 6;
                break;
              }
              _input = this.resolveActOnOpenActionRequest(request);
              _context3.next = 4;
              return this.createActOnOpenActionTypedData(_input);
            case 4:
              _result = _context3.sent;
              return _context3.abrupt("return", this.createPublicActProxyCallDetails(request, _result));
            case 6:
              if (!(request.type === AllOpenActionType.LEGACY_COLLECT)) {
                _context3.next = 12;
                break;
              }
              _input2 = this.resolveLegacyCollectRequest(request);
              _context3.next = 10;
              return this.createLegacyCollectTypedData(_input2);
            case 10:
              _result2 = _context3.sent;
              return _context3.abrupt("return", this.createLegacyCollectCallDetails(_result2));
            case 12:
              input = this.resolveActOnOpenActionRequest(request);
              _context3.next = 15;
              return this.createActOnOpenActionTypedData(input);
            case 15:
              result = _context3.sent;
              return _context3.abrupt("return", this.createActCallDetails(result));
            case 17:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function createCallDetails(_x4) {
        return _createCallDetails.apply(this, arguments);
      }
      return createCallDetails;
    }()
  }, {
    key: "createLegacyCollectUnsignedProtocolCall",
    value: function () {
      var _createLegacyCollectUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request, nonce) {
        var input, result;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              input = this.resolveLegacyCollectRequest(request);
              _context4.next = 3;
              return this.createLegacyCollectTypedData(input, nonce);
            case 3:
              result = _context4.sent;
              return _context4.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function createLegacyCollectUnsignedProtocolCall(_x5, _x6) {
        return _createLegacyCollectUnsignedProtocolCall.apply(this, arguments);
      }
      return createLegacyCollectUnsignedProtocolCall;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!(request.type === AllOpenActionType.LEGACY_COLLECT)) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return", this.relayLegacyCollectRequestWithProfileManager(request));
            case 2:
              return _context5.abrupt("return", this.relayActOnOpenActionRequestWithProfileManager(request));
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function relayWithProfileManager(_x7) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }, {
    key: "relayLegacyCollectRequestWithProfileManager",
    value: function () {
      var _relayLegacyCollectRequestWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(request) {
        var input, _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              input = this.resolveLegacyCollectRequest(request);
              _context6.next = 3;
              return this.apolloClient.mutate({
                mutation: LegacyCollectDocument,
                variables: {
                  request: input
                }
              });
            case 3:
              _yield$this$apolloCli = _context6.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context6.next = 7;
                break;
              }
              return _context6.abrupt("return", handleRelayError(data.result));
            case 7:
              return _context6.abrupt("return", success(data.result));
            case 8:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function relayLegacyCollectRequestWithProfileManager(_x8) {
        return _relayLegacyCollectRequestWithProfileManager.apply(this, arguments);
      }
      return relayLegacyCollectRequestWithProfileManager;
    }()
  }, {
    key: "relayActOnOpenActionRequestWithProfileManager",
    value: function () {
      var _relayActOnOpenActionRequestWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(request) {
        var input, _yield$this$apolloCli2, data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              input = this.resolveActOnOpenActionRequest(request);
              _context7.next = 3;
              return this.apolloClient.mutate({
                mutation: ActOnOpenActionDocument,
                variables: {
                  request: input
                }
              });
            case 3:
              _yield$this$apolloCli2 = _context7.sent;
              data = _yield$this$apolloCli2.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context7.next = 7;
                break;
              }
              return _context7.abrupt("return", handleRelayError(data.result));
            case 7:
              return _context7.abrupt("return", success(data.result));
            case 8:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function relayActOnOpenActionRequestWithProfileManager(_x9) {
        return _relayActOnOpenActionRequestWithProfileManager.apply(this, arguments);
      }
      return relayActOnOpenActionRequestWithProfileManager;
    }()
  }, {
    key: "createOpenActionUnsignedProtocolCall",
    value: function () {
      var _createOpenActionUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(request, nonce) {
        var input, result;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              input = this.resolveActOnOpenActionRequest(request);
              _context8.next = 3;
              return this.createActOnOpenActionTypedData(input, nonce);
            case 3:
              result = _context8.sent;
              return _context8.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 5:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function createOpenActionUnsignedProtocolCall(_x10, _x11) {
        return _createOpenActionUnsignedProtocolCall.apply(this, arguments);
      }
      return createOpenActionUnsignedProtocolCall;
    }()
  }, {
    key: "resolveLegacyCollectRequest",
    value: function resolveLegacyCollectRequest(request) {
      return {
        on: request.publicationId,
        referrer: request.referrer
      };
    }
  }, {
    key: "resolveActOnOpenActionRequest",
    value: function resolveActOnOpenActionRequest(request) {
      switch (request.type) {
        case AllOpenActionType.SIMPLE_COLLECT:
          return {
            "for": request.publicationId,
            actOn: {
              simpleCollectOpenAction: true
            },
            referrers: this.resolveOnchainReferrers(request.referrers)
          };
        case AllOpenActionType.MULTIRECIPIENT_COLLECT:
          return {
            "for": request.publicationId,
            actOn: {
              multirecipientCollectOpenAction: true
            },
            referrers: this.resolveOnchainReferrers(request.referrers)
          };
        case AllOpenActionType.UNKNOWN_OPEN_ACTION:
          return {
            "for": request.publicationId,
            actOn: {
              unknownOpenAction: {
                address: request.address,
                data: request.data
              }
            },
            referrers: this.resolveOnchainReferrers(request.referrers)
          };
      }
    }
  }, {
    key: "resolveOnchainReferrers",
    value: function resolveOnchainReferrers(referrers) {
      return referrers === null || referrers === void 0 ? void 0 : referrers.map(function (value) {
        if (isPublicationId(value)) {
          return {
            publicationId: value
          };
        }
        return {
          profileId: value
        };
      });
    }
  }, {
    key: "createLegacyCollectTypedData",
    value: function () {
      var _createLegacyCollectTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(request, nonce) {
        var _yield$this$apolloCli3, data;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this.apolloClient.mutate({
                mutation: gql.CreateLegacyCollectTypedDataDocument,
                variables: {
                  request: request,
                  options: nonce ? {
                    overrideSigNonce: nonce
                  } : undefined
                }
              });
            case 2:
              _yield$this$apolloCli3 = _context9.sent;
              data = _yield$this$apolloCli3.data;
              return _context9.abrupt("return", data.result);
            case 5:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function createLegacyCollectTypedData(_x12, _x13) {
        return _createLegacyCollectTypedData.apply(this, arguments);
      }
      return createLegacyCollectTypedData;
    }()
  }, {
    key: "createActOnOpenActionTypedData",
    value: function () {
      var _createActOnOpenActionTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(request, nonce) {
        var _yield$this$apolloCli4, data;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this.apolloClient.mutate({
                mutation: gql.CreateActOnOpenActionTypedDataDocument,
                variables: {
                  request: request,
                  options: nonce ? {
                    overrideSigNonce: nonce
                  } : undefined
                }
              });
            case 2:
              _yield$this$apolloCli4 = _context10.sent;
              data = _yield$this$apolloCli4.data;
              return _context10.abrupt("return", data.result);
            case 5:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function createActOnOpenActionTypedData(_x14, _x15) {
        return _createActOnOpenActionTypedData.apply(this, arguments);
      }
      return createActOnOpenActionTypedData;
    }()
  }, {
    key: "createLegacyCollectCallDetails",
    value: function createLegacyCollectCallDetails(result) {
      var contract = digiHub(result.typedData.domain.verifyingContract);
      var encodedData = contract["interface"].encodeFunctionData('collect', [{
        publicationCollectedProfileId: result.typedData.message.publicationCollectedProfileId,
        publicationCollectedId: result.typedData.message.publicationCollectedId,
        collectorProfileId: result.typedData.message.collectorProfileId,
        referrerProfileId: result.typedData.message.referrerProfileId,
        referrerPubId: result.typedData.message.referrerPubId,
        collectModuleData: result.typedData.message.collectModuleData
      }]);
      return {
        contractAddress: result.typedData.domain.verifyingContract,
        encodedData: encodedData
      };
    }
  }, {
    key: "createActCallDetails",
    value: function createActCallDetails(result) {
      var contract = digiHub(result.typedData.domain.verifyingContract);
      var encodedData = contract["interface"].encodeFunctionData('act', [{
        publicationActedProfileId: result.typedData.message.publicationActedProfileId,
        publicationActedId: result.typedData.message.publicationActedId,
        actorProfileId: result.typedData.message.actorProfileId,
        referrerProfileIds: result.typedData.message.referrerProfileIds,
        referrerPubIds: result.typedData.message.referrerPubIds,
        actionModuleAddress: result.typedData.message.actionModuleAddress,
        actionModuleData: result.typedData.message.actionModuleData
      }]);
      return {
        contractAddress: result.typedData.domain.verifyingContract,
        encodedData: encodedData
      };
    }
  }, {
    key: "createPublicActProxyCallDetails",
    value: function createPublicActProxyCallDetails(request, result) {
      if (request.type == AllOpenActionType.UNKNOWN_OPEN_ACTION || request.type == AllOpenActionType.SIMPLE_COLLECT && !request.fee) {
        return this.createPublicFreeActCallDetails(result);
      }
      return this.createPublicCollectCallDetails(result);
    }
  }, {
    key: "createPublicFreeActCallDetails",
    value: function createPublicFreeActCallDetails(result) {
      var contract = publicActProxy(result.typedData.domain.verifyingContract);
      var encodedData = contract["interface"].encodeFunctionData('publicFreeAct', [{
        publicationActedProfileId: result.typedData.message.publicationActedProfileId,
        publicationActedId: result.typedData.message.publicationActedId,
        actorProfileId: result.typedData.message.actorProfileId,
        referrerProfileIds: result.typedData.message.referrerProfileIds,
        referrerPubIds: result.typedData.message.referrerPubIds,
        actionModuleAddress: result.typedData.message.actionModuleAddress,
        actionModuleData: result.typedData.message.actionModuleData
      }]);
      return {
        contractAddress: result.typedData.domain.verifyingContract,
        encodedData: encodedData
      };
    }
  }, {
    key: "createPublicCollectCallDetails",
    value: function createPublicCollectCallDetails(result) {
      var contract = publicActProxy(result.typedData.domain.verifyingContract);
      var encodedData = contract["interface"].encodeFunctionData('publicCollect', [{
        publicationActedProfileId: result.typedData.message.publicationActedProfileId,
        publicationActedId: result.typedData.message.publicationActedId,
        actorProfileId: result.typedData.message.actorProfileId,
        referrerProfileIds: result.typedData.message.referrerProfileIds,
        referrerPubIds: result.typedData.message.referrerPubIds,
        actionModuleAddress: result.typedData.message.actionModuleAddress,
        actionModuleData: result.typedData.message.actionModuleData
      }]);
      return {
        contractAddress: result.typedData.domain.verifyingContract,
        encodedData: encodedData
      };
    }
  }]);
  return OpenActionGateway;
}(AbstractContractCallGateway);

function useOpenActionController() {
  var _useSharedDependencie = useSharedDependencies(),
    activeWallet = _useSharedDependencie.activeWallet,
    apolloClient = _useSharedDependencie.apolloClient,
    config = _useSharedDependencie.config,
    onChainRelayer = _useSharedDependencie.onChainRelayer,
    providerFactory = _useSharedDependencie.providerFactory,
    tokenAvailability = _useSharedDependencie.tokenAvailability,
    transactionGateway = _useSharedDependencie.transactionGateway,
    transactionFactory = _useSharedDependencie.transactionFactory,
    transactionQueue = _useSharedDependencie.transactionQueue;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, onChainGateway, signedExecution, delegableExecution, paidExecution, openAction;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            presenter = new TransactionResultPresenter();
            onChainGateway = new OpenActionGateway(config, apolloClient, transactionFactory, providerFactory);
            signedExecution = new SignedOnChain(activeWallet, transactionGateway, onChainGateway, onChainRelayer, transactionQueue, presenter);
            delegableExecution = new DelegableSigning(signedExecution, onChainGateway, transactionQueue, presenter);
            paidExecution = new PaidTransaction(activeWallet, onChainGateway, presenter, transactionQueue);
            openAction = new OpenAction(tokenAvailability, signedExecution, delegableExecution, paidExecution, presenter);
            _context.next = 8;
            return openAction.execute(request);
          case 8:
            return _context.abrupt("return", presenter.asResult());
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * The category of Open Actions to perform on a given publication.
 */
var OpenActionKind = /*#__PURE__*/function (OpenActionKind) {
  OpenActionKind["COLLECT"] = "COLLECT";
  OpenActionKind["UNKNOWN"] = "UNKNOWN";
  return OpenActionKind;
}({});

/**
 * Execute the specified Unknown Open Action.
 */

/**
 * Execute the Collect Open Action defined by the publication.
 */

/**
 * The Open Action to perform.
 */

/**
 * Arguments for the `useOpenAction` hook.
 */

/**
 * Arguments for the `useOpenAction` hook callback.
 */

function resolveTargetPublication(publication) {
  return publication.__typename === 'Mirror' ? publication.mirrorOn : publication;
}
function resolveCollectRequestFor(args, params, session) {
  var _params$referrers, _params$referrers2;
  var collectable = resolveTargetPublication(args.publication);
  var settings = findCollectModuleSettings(collectable);
  var sponsored = session.type === SessionType.WithProfile ? args.sponsored : false;
  // technically profile.sponsor cannot be false if profile.signless is true, but we want to be explicit here
  var signless = session.type === SessionType.WithProfile && sponsored && session.profile.signless;
  invariant(settings, 'No open action module settings found for publication');
  switch (settings.__typename) {
    case 'LegacyAaveFeeCollectModuleSettings':
    case 'LegacyERC4626FeeCollectModuleSettings':
    case 'LegacyFeeCollectModuleSettings':
    case 'LegacyLimitedFeeCollectModuleSettings':
    case 'LegacyLimitedTimedFeeCollectModuleSettings':
    case 'LegacyMultirecipientFeeCollectModuleSettings':
    case 'LegacyTimedFeeCollectModuleSettings':
    case 'LegacySimpleCollectModuleSettings':
      invariant(session.type === SessionType.WithProfile, 'Legacy collect cannot be collected with just a wallet');
      return {
        kind: TransactionKind.ACT_ON_PUBLICATION,
        type: AllOpenActionType.LEGACY_COLLECT,
        publicationId: collectable.id,
        referrer: args.publication !== collectable ? args.publication.id : undefined,
        fee: {
          amount: erc20Amount(settings.amount),
          contractAddress: settings.contract.address
        },
        "public": false,
        signless: signless,
        sponsored: sponsored
      };
    case 'LegacyFreeCollectModuleSettings':
      invariant(session.type === SessionType.WithProfile, 'Legacy collect cannot be collected with just a wallet');
      return {
        kind: TransactionKind.ACT_ON_PUBLICATION,
        type: AllOpenActionType.LEGACY_COLLECT,
        publicationId: collectable.id,
        referrer: args.publication !== collectable ? args.publication.id : undefined,
        "public": false,
        signless: signless,
        sponsored: sponsored
      };
    case 'SimpleCollectOpenActionSettings':
      var amount = erc20Amount(settings.amount);
      return {
        kind: TransactionKind.ACT_ON_PUBLICATION,
        type: AllOpenActionType.SIMPLE_COLLECT,
        publicationId: collectable.id,
        referrers: (_params$referrers = params.referrers) !== null && _params$referrers !== void 0 ? _params$referrers : args.publication !== collectable ? [args.publication.id] : undefined,
        fee: amount.isZero() ? undefined : {
          amount: amount,
          contractAddress: settings.contract.address
        },
        "public": session.type === SessionType.JustWallet,
        signless: signless,
        sponsored: sponsored
      };
    case 'MultirecipientFeeCollectOpenActionSettings':
      return {
        kind: TransactionKind.ACT_ON_PUBLICATION,
        type: AllOpenActionType.MULTIRECIPIENT_COLLECT,
        publicationId: collectable.id,
        referrers: (_params$referrers2 = params.referrers) !== null && _params$referrers2 !== void 0 ? _params$referrers2 : args.publication !== collectable ? [args.publication.id] : undefined,
        fee: {
          amount: erc20Amount(settings.amount),
          contractAddress: settings.contract.address
        },
        "public": session.type === SessionType.JustWallet,
        signless: signless,
        sponsored: sponsored
      };
    default:
      never("The publication ".concat(collectable.id, " is not collectable"));
  }
}
function isUnknownOpenActionModuleSettings(settings) {
  return settings.__typename === 'UnknownOpenActionModuleSettings';
}
function resolveExecutionDynamics(args, session, settings) {
  if (session.type === SessionType.JustWallet) {
    return {
      "public": true,
      signless: false,
      sponsored: false
    };
  }
  if (settings.sponsoredApproved) {
    return {
      "public": false,
      signless: settings.signlessApproved ? session.profile.signless : false,
      sponsored: args.sponsored
    };
  }
  return {
    "public": false,
    signless: false,
    sponsored: false
  };
}
function resolveUnknownRequestFor(args, params, session) {
  var _target$openActionMod, _target$openActionMod2;
  var target = resolveTargetPublication(args.publication);
  var settings = (_target$openActionMod = (_target$openActionMod2 = target.openActionModules) === null || _target$openActionMod2 === void 0 ? void 0 : _target$openActionMod2.find(function (entry) {
    return isUnknownOpenActionModuleSettings(entry) && entry.contract.address === params.address;
  })) !== null && _target$openActionMod !== void 0 ? _target$openActionMod : never("Cannot find Open Action settings ".concat(params.address, " fro publication ").concat(target.id));
  return _objectSpread2({
    kind: TransactionKind.ACT_ON_PUBLICATION,
    type: AllOpenActionType.UNKNOWN_OPEN_ACTION,
    publicationId: target.id,
    address: settings.contract.address,
    data: params.data,
    referrers: params.referrers
  }, resolveExecutionDynamics(args, session, settings));
}
function createOpenActionRequest(_ref, params, session) {
  var publication = _ref.publication,
    _ref$sponsored = _ref.sponsored,
    sponsored = _ref$sponsored === void 0 ? true : _ref$sponsored;
  var args = {
    publication: publication,
    sponsored: sponsored
  };
  switch (params.kind) {
    case OpenActionKind.COLLECT:
      return resolveCollectRequestFor(args, params, session);
    case OpenActionKind.UNKNOWN:
      return resolveUnknownRequestFor(args, params, session);
  }
}

/**
 * An object representing the result of an open action is finalized.
 *
 * It allows to wait for the action to be fully processed and indexed.
 */

/**
 * `useOpenAction` is a React Hook that allows to perform an Open Action on a publication.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```ts
 * const { execute, error, loading } = useOpenAction({
 *   action: {
 *     kind: OpenActionKind.COLLECT,
 *   }
 * });
 * ```
 *
 * ## Collect a publication
 *
 * You can use the `useOpenAction` hook to collect a publication.
 *
 * ```ts
 * const { execute, error, loading } = useOpenAction({
 *   action: {
 *     kind: OpenActionKind.COLLECT,
 *   }
 * });
 *
 * const collect = async (publication: AnyPublication) => {
 *   const result = await execute({ publication });
 * }
 * ```
 *
 * It supports seamlessly new collect Open Action modules as well as legacy collect modules.
 *
 * ## Failure scenarios
 *
 * You can handle possible failure scenarios by checking the `result` value.
 *
 * ```ts
 * const collect = async (publication: AnyPublication) => {
 *   const result = await execute({ publication });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'BroadcastingError':
 *         console.log('There was an error broadcasting the transaction', error.message);
 *         break;
 *
 *       case 'PendingSigningRequestError':
 *         console.log(
 *           'There is a pending signing request in your wallet. ' +
 *             'Approve it or discard it and try again.'
 *         );
 *         break;
 *
 *       case 'InsufficientAllowanceError':
 *         const requestedAmount = result.error.requestedAmount;
 *         console.log(
 *           'You must approve the contract to spend at least: '+
 *             `${requestedAmount.asset.symbol} ${requestedAmount.toSignificantDigits(6)}`
 *         );
 *         break;
 *
 *       case 'InsufficientFundsError':
 *         const requestedAmount = result.error.requestedAmount;
 *         console.log(
 *           'You do not have enough funds to pay for this collect fee: '+
 *             `${requestedAmount.asset.symbol} ${requestedAmount.toSignificantDigits(6)}`
 *         );
 *         break;
 *
 *       case 'WalletConnectionError':
 *         console.log('There was an error connecting to your wallet', error.message);
 *         break;
 *
 *       case 'UserRejectedError':
 *         // the user decided to not sign, usually this is silently ignored by UIs
 *         break;
 *     }
 *     return;
 *   }
 * };
 * ```
 *
 * ## Wait for completion
 *
 * You can always wait the operation to be fully processed and indexed by DiGi API.
 *
 * ```ts
 * const collect = async (publication: AnyPublication) => {
 *   const result = await execute({ publication });
 *
 *   if (result.isFailure()) {
 *     // handle failure scenarios
 *     return;
 *   }
 *
 *   // this might take a while depending on the congestion of the network
 *   const completion = await result.value.waitForCompletion();
 *
 *   if (completion.isFailure()) {
 *     console.log('There was an processing the transaction', completion.error.message);
 *     return;
 *   }
 *
 *   console.log('Open action executed successfully');
 * };
 * ```
 *
 * ## Collect referrers
 *
 * When collecting a publication using the new SimpleCollectOpenAction or MultirecipientFeeCollectOpenAction
 * you can specify a list of referrer Publication and/or Profile IDs.
 *
 * ```ts
 * const { execute, error, loading } = useOpenAction({
 *   action: {
 *     kind: OpenActionKind.COLLECT,
 *     referrers: [
 *       publicationId,
 *       profileId,
 *     ],
 *   },
 * });
 * ```
 *
 * The referrers will split the referral reward of any collect fee paid by the collector.
 *
 * ## Public collect
 *
 * You can use the `useOpenAction` hook to collect a publication with just a wallet.
 * First make sure you logged-in via {@link useLogin} with just an EVM address.
 *
 * Then you can use the `useOpenAction` to collect a publication as mentioned above.
 *
 * ## Custom open action
 *
 * You can use the `useOpenAction` hook to execute a custom Open Action.
 *
 * You must know the address of the Open Action module and the data required to execute it.
 *
 * ```ts
 * const { execute, error, loading } = useOpenAction({
 *   action: {
 *     kind: OpenActionKind.UNKNOWN,
 *     address: '0x...', // the address of the Open Action module
 *     data: '0x...', // any data needed to execute the Open Action
 *   }
 * });
 *
 * const collect = async (publication: AnyPublication) => {
 *   const result = await execute({ publication });
 *
 *   // ...
 * }
 * ```
 *
 * ## Self-funded approach
 *
 * It just takes a single parameter to disable the sponsorship of the transaction gas costs.
 *
 * ```ts
 * const collect = async (publication: AnyPublication) => {
 *   const result = await execute({
 *     publication,
 *     sponsored: false,
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientGasError':
 *         console.log('You do not have enough funds to pay for the transaction gas cost.');
 *         break;
 *
 *       // ...
 *     }
 *     return;
 *   }
 *
 *   // ...
 * }
 * ```
 * In this example you can also see a new error type: {@link InsufficientGasError}. This
 * error happens only with self-funded transactions and it means that the wallet does not
 * have enough funds to pay for the transaction gas costs.
 *
 * ## Self-funded fallback
 *
 * If for some reason the DiGi API cannot sponsor the transaction, the hook will fail with a {@link BroadcastingError} with one of the following reasons:
 * - {@link BroadcastingErrorReason.NOT_SPONSORED} - the profile is not sponsored
 * - {@link BroadcastingErrorReason.RATE_LIMITED} - the profile reached the rate limit
 * - {@link BroadcastingErrorReason.APP_NOT_ALLOWED} - the app is not whitelisted for gasless transactions
 *
 * In those cases you can retry the transaction as self-funded like in the following example:
 *
 * ```ts
 * const collect = async (publication: AnyPublication) => {
 *   const sponsoredResult = await execute({ publication });
 *
 *   if (sponsoredResult.isFailure()) {
 *     switch (sponsoredResult.error.name) {
 *       case 'BroadcastingError':
 *         if ([BroadcastingErrorReason.NOT_SPONSORED, BroadcastingErrorReason.RATE_LIMITED].includes(sponsoredResult.error.reason)) {
 *
 *           const selfFundedResult = await execute({ publication, sponsored: false });
 *
 *           // continue with selfFundedResult as in the previous example
 *         }
 *         break;
 *
 *      // ...
 *   }
 * }
 * ```
 *
 * In this example we omitted {@link BroadcastingErrorReason.APP_NOT_ALLOWED} as it's not normally a problem per-se.
 * It just requires the app to apply for whitelisting. See https://docs.digi.xyz/docs/gasless-and-signless#whitelisting-your-app.
 *
 * You can still include it in your fallback logic if you want to. For example to unblock testing your app from a domain that is not the
 * whitelisted one (e.g. localhost).
 *
 * @category Publications
 * @group Hooks
 */
function useOpenAction(args) {
  var _useSession = useSession(),
    session = _useSession.data;
  var openAction = useOpenActionController();
  var configureRequest = useSponsoredConfig();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var publication, _ref$sponsored, sponsored, request;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            publication = _ref.publication, _ref$sponsored = _ref.sponsored, sponsored = _ref$sponsored === void 0 ? true : _ref$sponsored;
            invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to execute an Open Action a post. Use `useLogin` hook to authenticate.');
            invariant(publication.momoka === null, 'You cannot execute an Open Action on a Momoka publication.');
            request = configureRequest(createOpenActionRequest({
              publication: publication,
              sponsored: sponsored
            }, args.action, session));
            return _context.abrupt("return", openAction(request));
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
}

var ProfileMetadataGateway = /*#__PURE__*/function (_ref) {
  _inherits(ProfileMetadataGateway, _ref);
  function ProfileMetadataGateway(config, providerFactory, apolloClient, transactionFactory) {
    var _this;
    _classCallCheck(this, ProfileMetadataGateway);
    _this = _callSuper(this, ProfileMetadataGateway, [config, providerFactory]);
    _this.apolloClient = apolloClient;
    _this.transactionFactory = transactionFactory;
    return _this;
  }
  _createClass(ProfileMetadataGateway, [{
    key: "createDelegatedTransaction",
    value: function () {
      var _createDelegatedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, receipt, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              receipt = result.value;
              transaction = this.transactionFactory.createNativeTransaction({
                chainType: ChainType.POLYGON,
                id: v4(),
                relayerTxId: receipt.txId,
                txHash: receipt.txHash,
                request: request
              });
              return _context.abrupt("return", success(transaction));
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createDelegatedTransaction(_x) {
        return _createDelegatedTransaction.apply(this, arguments);
      }
      return createDelegatedTransaction;
    }()
  }, {
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, nonce) {
        var data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.createTypedData(request, nonce);
            case 2:
              data = _context2.sent;
              return _context2.abrupt("return", UnsignedProtocolCall.create({
                id: data.id,
                request: request,
                typedData: omitTypename(data.typedData)
              }));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createUnsignedProtocolCall(_x2, _x3) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "createCallDetails",
    value: function () {
      var _createCallDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.createTypedData(request);
            case 2:
              result = _context3.sent;
              return _context3.abrupt("return", this.createSetProfileMetadataUriCallDetails(result));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function createCallDetails(_x4) {
        return _createCallDetails.apply(this, arguments);
      }
      return createCallDetails;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.apolloClient.mutate({
                mutation: SetProfileMetadataDocument,
                variables: {
                  request: {
                    metadataURI: request.metadataURI
                  }
                }
              });
            case 2:
              _yield$this$apolloCli = _context4.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context4.next = 6;
                break;
              }
              return _context4.abrupt("return", handleRelayError(data.result));
            case 6:
              return _context4.abrupt("return", success(data.result));
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function relayWithProfileManager(_x5) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }, {
    key: "createTypedData",
    value: function () {
      var _createTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, nonce) {
        var _yield$this$apolloCli2, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.apolloClient.mutate({
                mutation: CreateOnchainSetProfileMetadataTypedDataDocument,
                variables: {
                  request: {
                    metadataURI: request.metadataURI
                  },
                  options: nonce ? {
                    overrideSigNonce: nonce
                  } : undefined
                }
              });
            case 2:
              _yield$this$apolloCli2 = _context5.sent;
              data = _yield$this$apolloCli2.data;
              return _context5.abrupt("return", data.result);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function createTypedData(_x6, _x7) {
        return _createTypedData.apply(this, arguments);
      }
      return createTypedData;
    }()
  }, {
    key: "createSetProfileMetadataUriCallDetails",
    value: function createSetProfileMetadataUriCallDetails(result) {
      var contract = digiHub(result.typedData.domain.verifyingContract);
      var encodedData = contract["interface"].encodeFunctionData('setProfileMetadataURI', [result.typedData.message.profileId, result.typedData.message.metadataURI]);
      return {
        contractAddress: result.typedData.domain.verifyingContract,
        encodedData: encodedData
      };
    }
  }]);
  return ProfileMetadataGateway;
}(AbstractContractCallGateway);

function useSetProfileMetadataController() {
  var _useSharedDependencie = useSharedDependencies(),
    activeWallet = _useSharedDependencie.activeWallet,
    apolloClient = _useSharedDependencie.apolloClient,
    config = _useSharedDependencie.config,
    onChainRelayer = _useSharedDependencie.onChainRelayer,
    providerFactory = _useSharedDependencie.providerFactory,
    transactionGateway = _useSharedDependencie.transactionGateway,
    transactionQueue = _useSharedDependencie.transactionQueue,
    transactionFactory = _useSharedDependencie.transactionFactory;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, gateway, signedExecution, delegableExecution, paidExecution, setProfileMetadata;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            presenter = new TransactionResultPresenter();
            gateway = new ProfileMetadataGateway(config, providerFactory, apolloClient, transactionFactory);
            signedExecution = new SignedOnChain(activeWallet, transactionGateway, gateway, onChainRelayer, transactionQueue, presenter);
            delegableExecution = new DelegableSigning(signedExecution, gateway, transactionQueue, presenter);
            paidExecution = new PaidTransaction(activeWallet, gateway, presenter, transactionQueue);
            setProfileMetadata = new SetProfileMetadata(delegableExecution, paidExecution);
            _context.next = 8;
            return setProfileMetadata.execute(request);
          case 8:
            return _context.abrupt("return", presenter.asResult());
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * Set a profile's metadata.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @example
 * ```ts
 * const { execute, error, loading } = useSetProfileMetadata();
 * ```
 *
 * ## Basic usage
 *
 * Update profile metadata with name and bio with location and website attributes.
 *
 * ```tsx
 * const { execute, error, loading } = useSetProfileMetadata();
 *
 * const update = async (name: string, bio: string) => {
 *   // create the desired metadata via the `@digiv3rse/metadata` package helpers
 *   const metadata = profile({ name, bio });
 *
 *   // upload the metadata to a storage provider of your choice (IPFS in this example)
 *   const uri = await uploadToIpfs(metadata);
 *
 *   // invoke the `execute` function to create the post
 *   const result = await execute({
 *     metadataURI: uri,
 *   });
 * };
 * ```
 *
 * See [`@digiv3rse/metadata`](https://digi-protocol.github.io/metadata/functions/profile.html) for more information on how to create metadata.
 *
 * ## Failure scenarios
 *
 * You can handle possible failure scenarios by checking the `result` value.
 *
 * ```tsx
 * const update = async (name: string, bio: string) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     metadataURI: uri,
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'BroadcastingError':
 *         console.log('There was an error broadcasting the transaction', error.message);
 *         break;
 *
 *       case 'PendingSigningRequestError':
 *         console.log(
 *           'There is a pending signing request in your wallet. ' +
 *             'Approve it or discard it and try again.'
 *         );
 *         break;
 *
 *       case 'WalletConnectionError':
 *         console.log('There was an error connecting to your wallet', error.message);
 *         break;
 *
 *       case 'UserRejectedError':
 *         // the user decided to not sign, usually this is silently ignored by UIs
 *         break;
 *     }
 *     return;
 *   }
 * };
 * ```
 * At this point the profile update is completed from an end-user perspective but,
 * in case of on-chain TX, this is not necessarily mined and indexed (yet). See the following section.
 *
 * ## Wait for completion
 *
 * In case of successful submission, the `result` value can be used to wait for the profile metadata to be fully processed.
 *
 * ```tsx
 * const update = async (name: string, bio: string) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     metadataURI: uri,
 *   });
 *
 *   if (result.isFailure()) {
 *     // handle failure scenarios
 *     return;
 *   }
 *
 *   // this might take a while depending the congestion of the network
 *   const completion = await result.value.waitForCompletion();
 *
 *   if (completion.isFailure()) {
 *     console.log('There was an processing the transaction', completion.error.message);
 *     return;
 *   }
 *
 *   // the transaction is fully processed
 * };
 * ```
 *
 * ## Self-funded approach
 *
 * It just takes a single parameter to disable the sponsorship of the transaction gas costs.
 *
 * ```ts
 * const update = async (name: string, bio: string) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     metadataURI: uri,
 *     sponsored: false // <--- this is the only difference
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientGasError':
 *         console.log('You do not have enough funds to pay for the transaction gas cost.');
 *         break;
 *
 *       // ...
 *     }
 *     return;
 *   }
 *
 *   // ...
 * }
 * ```
 *
 * In this example you can also see a new error type: {@link InsufficientGasError}. This
 * error happens only with self-funded transactions and it means that the wallet does not
 * have enough funds to pay for the transaction gas costs.
 *
 * ## Self-funded fallback
 *
 * If for some reason the DiGi API cannot sponsor the transaction, the hook will fail with a {@link BroadcastingError} with one of the following reasons:
 * - {@link BroadcastingErrorReason.NOT_SPONSORED} - the profile is not sponsored
 * - {@link BroadcastingErrorReason.RATE_LIMITED} - the profile reached the rate limit
 * - {@link BroadcastingErrorReason.APP_NOT_ALLOWED} - the app is not whitelisted for gasless transactions
 *
 * In those cases you can retry the transaction as self-funded like in the following example:
 *
 * ```ts
 * const update = async (name: string, bio: string) => {
 *   // the first part is the same as in the initial example
 *
 *   // sponsored attempt
 *   const sponsoredResult = await execute({
 *     metadataURI: uri,
 *     sponsored: false
 *   });
 *
 *   if (sponsoredResult.isFailure()) {
 *     switch (sponsoredResult.error.name) {
 *       case 'BroadcastingError':
 *         if ([BroadcastingErrorReason.NOT_SPONSORED, BroadcastingErrorReason.RATE_LIMITED].includes(sponsoredResult.error.reason)) {
 *
 *           const selfFundedResult = await execute({
 *             metadataURI: uri,
 *             sponsored: false
 *           });
 *
 *           // continue with selfFundedResult as in the previous example
 *         }
 *         break;
 *
 *      // ...
 *   }
 * }
 * ```
 *
 * In this example we omitted {@link BroadcastingErrorReason.APP_NOT_ALLOWED} as it's not normally a problem per-se.
 * It just requires the app to apply for whitelisting. See https://docs.digi.xyz/docs/gasless-and-signless#whitelisting-your-app.
 *
 * You can still include it in your fallback logic if you want to. For example to unblock testing your app from a domain that is not the
 * whitelisted one (e.g. localhost).
 *
 * @category Profiles
 * @group Hooks
 * @param args - {@link UseSetProfileMetadataArgs}
 */
function useSetProfileMetadata() {
  var setProfileMetadata = useSetProfileMetadataController();
  var _useSession = useSession(),
    session = _useSession.data;
  var configureRequest = useSponsoredConfig();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _args$sponsored;
      var request;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            invariant((session === null || session === void 0 ? void 0 : session.type) === SessionType.WithProfile, 'You must be authenticated to set profile metadata. Use `useLogin` hook to authenticate.');
            request = configureRequest({
              kind: TransactionKind.UPDATE_PROFILE_DETAILS,
              signless: session.profile.signless,
              metadataURI: uri(args.metadataURI),
              sponsored: (_args$sponsored = args.sponsored) !== null && _args$sponsored !== void 0 ? _args$sponsored : true
            });
            return _context.abrupt("return", setProfileMetadata(request));
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

var UnblockProfilesGateway = /*#__PURE__*/function (_ref) {
  _inherits(UnblockProfilesGateway, _ref);
  function UnblockProfilesGateway(config, providerFactory, apolloClient, transactionFactory) {
    var _this;
    _classCallCheck(this, UnblockProfilesGateway);
    _this = _callSuper(this, UnblockProfilesGateway, [config, providerFactory]);
    _this.apolloClient = apolloClient;
    _this.transactionFactory = transactionFactory;
    return _this;
  }
  _createClass(UnblockProfilesGateway, [{
    key: "createDelegatedTransaction",
    value: function () {
      var _createDelegatedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", failure(result.error));
            case 5:
              transaction = this.transactionFactory.createNativeTransaction({
                chainType: ChainType.POLYGON,
                id: v4(),
                request: request,
                relayerTxId: result.value.txId,
                txHash: result.value.txHash
              });
              return _context.abrupt("return", success(transaction));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createDelegatedTransaction(_x) {
        return _createDelegatedTransaction.apply(this, arguments);
      }
      return createDelegatedTransaction;
    }()
  }, {
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, nonceOverride) {
        var result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.createTypedData(request, nonceOverride);
            case 2:
              result = _context2.sent;
              return _context2.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createUnsignedProtocolCall(_x2, _x3) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "createCallDetails",
    value: function () {
      var _createCallDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.createTypedData(request);
            case 2:
              result = _context3.sent;
              return _context3.abrupt("return", this.createSetBlockStatusCallDetails(result));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function createCallDetails(_x4) {
        return _createCallDetails.apply(this, arguments);
      }
      return createCallDetails;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.apolloClient.mutate({
                mutation: UnblockDocument,
                variables: {
                  request: {
                    profiles: request.profileIds
                  }
                }
              });
            case 2:
              _yield$this$apolloCli = _context4.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context4.next = 6;
                break;
              }
              return _context4.abrupt("return", handleRelayError(data.result));
            case 6:
              return _context4.abrupt("return", success(data.result));
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function relayWithProfileManager(_x5) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }, {
    key: "createTypedData",
    value: function () {
      var _createTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, nonce) {
        var _yield$this$apolloCli2, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.apolloClient.mutate({
                mutation: CreateUnblockProfilesTypedDataDocument,
                variables: {
                  request: {
                    profiles: request.profileIds
                  },
                  options: nonce ? {
                    overrideSigNonce: nonce
                  } : undefined
                }
              });
            case 2:
              _yield$this$apolloCli2 = _context5.sent;
              data = _yield$this$apolloCli2.data;
              return _context5.abrupt("return", data.result);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function createTypedData(_x6, _x7) {
        return _createTypedData.apply(this, arguments);
      }
      return createTypedData;
    }()
  }, {
    key: "createSetBlockStatusCallDetails",
    value: function createSetBlockStatusCallDetails(result) {
      var contract = digiHub(result.typedData.domain.verifyingContract);
      var encodedData = contract["interface"].encodeFunctionData('setBlockStatus', [result.typedData.message.byProfileId, result.typedData.message.idsOfProfilesToSetBlockStatus, result.typedData.message.blockStatus]);
      return {
        contractAddress: result.typedData.domain.verifyingContract,
        encodedData: encodedData
      };
    }
  }]);
  return UnblockProfilesGateway;
}(AbstractContractCallGateway);

function useUnblockProfilesController() {
  var _useSharedDependencie = useSharedDependencies(),
    activeWallet = _useSharedDependencie.activeWallet,
    apolloClient = _useSharedDependencie.apolloClient,
    config = _useSharedDependencie.config,
    onChainRelayer = _useSharedDependencie.onChainRelayer,
    providerFactory = _useSharedDependencie.providerFactory,
    transactionFactory = _useSharedDependencie.transactionFactory,
    transactionGateway = _useSharedDependencie.transactionGateway,
    transactionQueue = _useSharedDependencie.transactionQueue;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, gateway, signedExecution, delegableExecution, paidExecution, blockProfile;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            presenter = new TransactionResultPresenter();
            gateway = new UnblockProfilesGateway(config, providerFactory, apolloClient, transactionFactory);
            signedExecution = new SignedOnChain(activeWallet, transactionGateway, gateway, onChainRelayer, transactionQueue, presenter);
            delegableExecution = new DelegableSigning(signedExecution, gateway, transactionQueue, presenter);
            paidExecution = new PaidTransaction(activeWallet, gateway, presenter, transactionQueue);
            blockProfile = new UnblockProfiles(delegableExecution, paidExecution);
            _context.next = 8;
            return blockProfile.execute(request);
          case 8:
            return _context.abrupt("return", presenter.asResult());
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * Unblock one or many profiles.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @category Profiles
 * @group Hooks
 * @param args - {@link UnblockProfileArgs}
 *
 * @example
 * ```ts
 * const { execute, error, loading } = useUnblockProfiles();
 * ```
 *
 * ## Basic usage
 *
 * Unblock a single profile.
 *
 * ```tsx
 * const { execute, loading, error } = useUnblockProfiles();
 *
 * const unblock = async (profileId: ProfileId) => {
 *  // invoke the `execute` function to unblock the profile
 *  await execute({
 *    profiles: [profileId],
 *  });
 * }
 * ```
 *
 * ## Unblock multiple profiles
 *
 * Unbblock multiple profiles.
 *
 * ```tsx
 * const { execute, loading, error } = useUnblockProfiles();
 *
 * const block = async (profileIds: ProfileId[]) => {
 *   // invoke the `execute` function to unblock the profiles
 *   await execute({
 *     profiles: profileIds,
 *   });
 * }
 * ```
 *
 * ## Failure scenarios
 *
 * You can handle possible failure scenarios by checking the `result` value.
 *
 * ```tsx
 * const unblock = async (profileId: ProfileId) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     profiles: [profileId],
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'BroadcastingError':
 *         console.log('There was an error broadcasting the transaction', error.message);
 *         break;
 *
 *       case 'PendingSigningRequestError':
 *         console.log(
 *           'There is a pending signing request in your wallet. ' +
 *             'Approve it or discard it and try again.'
 *         );
 *         break;
 *
 *       case 'WalletConnectionError':
 *         console.log('There was an error connecting to your wallet', error.message);
 *         break;
 *
 *       case 'UserRejectedError':
 *         // the user decided to not sign, usually this is silently ignored by UIs
 *         break;
 *     }
 *     return;
 *   }
 * }
 * ```
 *
 * At this point the profile update is completed from an end-user perspective but,
 * in case of on-chain TX, this is not necessarily mined and indexed (yet). See the following section.
 *
 * ## Wait for completion
 *
 * In case of successful submission, the `result` value can be used to wait for the profile metadata to be fully processed.
 *
 * ```tsx
 * const unblock = async (profileId: ProfileId) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     profiles: [profileId],
 *   });
 *
 *   if (result.isFailure()) {
 *     // handle failure scenarios
 *     return;
 *   }
 *
 *   // this might take a while depending the congestion of the network
 *   const completion = await result.value.waitForCompletion();
 *
 *   if (completion.isFailure()) {
 *     console.log('There was an processing the transaction', completion.error.message);
 *     return;
 *   }
 *
 *   // the transaction is fully processed
 * };
 * ```
 *
 * ## Self-funded approach
 *
 * It just takes a single parameter to disable the sponsorship of the transaction gas costs.
 *
 * ```ts
 * const unblock = async (profileId: ProfileId) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     profiles: [profileId],
 *     sponsored: false // <--- this is the only difference
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientGasError':
 *         console.log('You do not have enough funds to pay for the transaction gas cost.');
 *         break;
 *
 *       // ...
 *     }
 *     return;
 *   }
 *
 *   // ...
 * }
 * ```
 * In this example you can also see a new error type: {@link InsufficientGasError}. This
 * error happens only with self-funded transactions and it means that the wallet does not
 * have enough funds to pay for the transaction gas costs.
 *
 * ## Self-funded fallback
 *
 * If for some reason the DiGi API cannot sponsor the transaction, the hook will fail with a {@link BroadcastingError} with one of the following reasons:
 * - {@link BroadcastingErrorReason.NOT_SPONSORED} - the profile is not sponsored
 * - {@link BroadcastingErrorReason.RATE_LIMITED} - the profile reached the rate limit
 * - {@link BroadcastingErrorReason.APP_NOT_ALLOWED} - the app is not whitelisted for gasless transactions
 *
 * In those cases you can retry the transaction as self-funded like in the following example:
 *
 * ```ts
 * const unblock = async (profileId: ProfileId) => {
 *   // the first part is the same as in the initial example
 *
 *   // sponsored attempt
 *   const sponsoredResult = await execute({
 *     profiles: [profileId],
 *   });
 *
 *   if (sponsoredResult.isFailure()) {
 *     switch (sponsoredResult.error.name) {
 *       case 'BroadcastingError':
 *         if ([BroadcastingErrorReason.NOT_SPONSORED, BroadcastingErrorReason.RATE_LIMITED].includes(sponsoredResult.error.reason)) {
 *
 *           const selfFundedResult = await execute({
 *              profiles: [profileId],
 *              sponsored: false
 *           });
 *
 *           // continue with selfFundedResult as in the previous example
 *         }
 *         break;
 *
 *      // ...
 *   }
 * }
 * ```
 *
 * In this example we omitted {@link BroadcastingErrorReason.APP_NOT_ALLOWED} as it's not normally a problem per-se.
 * It just requires the app to apply for whitelisting. See https://docs.digi.xyz/docs/gasless-and-signless#whitelisting-your-app.
 *
 * You can still include it in your fallback logic if you want to. For example to unblock testing your app from a domain that is not the
 * whitelisted one (e.g. localhost).
 *
 */
function useUnblockProfiles() {
  var _useSession = useSession(),
    session = _useSession.data;
  var unblockProfile = useUnblockProfilesController();
  var configureRequest = useSponsoredConfig();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var profiles, sponsored;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            profiles = _ref.profiles, sponsored = _ref.sponsored;
            invariant((session === null || session === void 0 ? void 0 : session.type) === SessionType.WithProfile, 'You must be authenticated with a profile to unblock a profile. Use `useLogin` hook to authenticate.');
            return _context.abrupt("return", unblockProfile(configureRequest({
              profileIds: profiles.map(function (profile) {
                return profile.id;
              }),
              kind: TransactionKind.UNBLOCK_PROFILE,
              signless: session.profile.signless,
              sponsored: sponsored !== null && sponsored !== void 0 ? sponsored : true
            })));
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
}

var UnfollowProfileGateway = /*#__PURE__*/function (_ref) {
  _inherits(UnfollowProfileGateway, _ref);
  function UnfollowProfileGateway(config, providerFactory, apolloClient, transactionFactory) {
    var _this;
    _classCallCheck(this, UnfollowProfileGateway);
    _this = _callSuper(this, UnfollowProfileGateway, [config, providerFactory]);
    _this.apolloClient = apolloClient;
    _this.transactionFactory = transactionFactory;
    return _this;
  }
  _createClass(UnfollowProfileGateway, [{
    key: "createDelegatedTransaction",
    value: function () {
      var _createDelegatedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              transaction = this.transactionFactory.createNativeTransaction({
                chainType: ChainType.POLYGON,
                id: v4(),
                request: request,
                relayerTxId: result.value.txId,
                txHash: result.value.txHash
              });
              return _context.abrupt("return", success(transaction));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createDelegatedTransaction(_x) {
        return _createDelegatedTransaction.apply(this, arguments);
      }
      return createDelegatedTransaction;
    }()
  }, {
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, nonce) {
        var result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.createTypedData(request, nonce);
            case 2:
              result = _context2.sent;
              return _context2.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createUnsignedProtocolCall(_x2, _x3) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "createCallDetails",
    value: function () {
      var _createCallDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.createTypedData(request);
            case 2:
              result = _context3.sent;
              return _context3.abrupt("return", this.createUnfollowCallData(result));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function createCallDetails(_x4) {
        return _createCallDetails.apply(this, arguments);
      }
      return createCallDetails;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.apolloClient.mutate({
                mutation: UnfollowDocument,
                variables: {
                  request: {
                    unfollow: [request.profileId]
                  }
                }
              });
            case 2:
              _yield$this$apolloCli = _context4.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context4.next = 6;
                break;
              }
              return _context4.abrupt("return", handleRelayError(data.result));
            case 6:
              return _context4.abrupt("return", success(data.result));
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function relayWithProfileManager(_x5) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }, {
    key: "createTypedData",
    value: function () {
      var _createTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, nonce) {
        var _yield$this$apolloCli2, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.apolloClient.mutate({
                mutation: CreateUnfollowTypedDataDocument,
                variables: {
                  request: {
                    unfollow: [request.profileId]
                  },
                  options: nonce ? {
                    overrideSigNonce: nonce
                  } : undefined
                }
              });
            case 2:
              _yield$this$apolloCli2 = _context5.sent;
              data = _yield$this$apolloCli2.data;
              return _context5.abrupt("return", data.result);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function createTypedData(_x6, _x7) {
        return _createTypedData.apply(this, arguments);
      }
      return createTypedData;
    }()
  }, {
    key: "createUnfollowCallData",
    value: function createUnfollowCallData(result) {
      var contract = digiHub(result.typedData.domain.verifyingContract);
      var encodedData = contract["interface"].encodeFunctionData('unfollow', [result.typedData.message.unfollowerProfileId, result.typedData.message.idsOfProfilesToUnfollow]);
      return {
        contractAddress: result.typedData.domain.verifyingContract,
        encodedData: encodedData
      };
    }
  }]);
  return UnfollowProfileGateway;
}(AbstractContractCallGateway);

function useUnfollowController() {
  var _useSharedDependencie = useSharedDependencies(),
    activeWallet = _useSharedDependencie.activeWallet,
    apolloClient = _useSharedDependencie.apolloClient,
    config = _useSharedDependencie.config,
    onChainRelayer = _useSharedDependencie.onChainRelayer,
    providerFactory = _useSharedDependencie.providerFactory,
    transactionFactory = _useSharedDependencie.transactionFactory,
    transactionGateway = _useSharedDependencie.transactionGateway,
    transactionQueue = _useSharedDependencie.transactionQueue;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, gateway, signedExecution, delegableExecution, paidExecution, unfollowProfile;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            validateUnfollowRequest(request);
            presenter = new TransactionResultPresenter();
            gateway = new UnfollowProfileGateway(config, providerFactory, apolloClient, transactionFactory);
            signedExecution = new SignedOnChain(activeWallet, transactionGateway, gateway, onChainRelayer, transactionQueue, presenter);
            delegableExecution = new DelegableSigning(signedExecution, gateway, transactionQueue, presenter);
            paidExecution = new PaidTransaction(activeWallet, gateway, presenter, transactionQueue);
            unfollowProfile = new UnfollowProfile(delegableExecution, paidExecution);
            _context.next = 9;
            return unfollowProfile.execute(request);
          case 9:
            return _context.abrupt("return", presenter.asResult());
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * An object representing the result of an unfollow operation.
 *
 * It allows to wait for the transaction to be processed and indexed.
 */

/**
 * Unfollow a profile.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @category Profiles
 * @group Hooks
 * @param args - {@link UnfollowArgs}
 *
 * @example
 * ```tsx
 * const { execute: unfollow, error, loading } = useUnfollow();
 * ```
 *
 * ## Basic usage
 *
 * Unfollow a profile.
 *
 * ```tsx
 * const { execute: unfollow, error, loading } = useUnfollow();
 *
 * const unfollowProfile = async (profile: Profile) => {
 *   await unfollow({
 *     profile
 *   });
 * }
 * ```
 *
 * ## Failure scenarios
 *
 * You can handle possible failure scenarios by checking the `result` value.
 *
 * ```tsx
 * const unfollow = async (profile: Profile) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     profile
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'BroadcastingError':
 *         console.log('There was an error broadcasting the transaction', error.message);
 *         break;
 *
 *       case 'PendingSigningRequestError':
 *         console.log(
 *           'There is a pending signing request in your wallet. ' +
 *             'Approve it or discard it and try again.'
 *         );
 *         break;
 *
 *       case 'WalletConnectionError':
 *         console.log('There was an error connecting to your wallet', error.message);
 *         break;
 *
 *       case 'UserRejectedError':
 *         // the user decided to not sign, usually this is silently ignored by UIs
 *         break;
 *     }
 *     return;
 *   }
 * }
 * ```
 * ## Wait for completion
 *
 * In case of successful submission, the `result` value can be used to wait for the profile metadata to be fully processed.
 *
 * ```tsx
 * const unfollow = async (profile: Profile) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     profile
 *   });
 *
 * if (result.isFailure()) {
 *     // handle failure scenarios
 *     return;
 *   }
 *
 *   // this might take a while depending the congestion of the network
 *   const completion = await result.value.waitForCompletion();
 *
 *   if (completion.isFailure()) {
 *     console.log('There was an processing the transaction', completion.error.message);
 *     return;
 *   }
 *
 *   // the transaction is fully processed
 * };
 * ```
 *
 *
 * At this point the profile update is completed from an end-user perspective but,
 * in case of on-chain TX, this is not necessarily mined and indexed (yet). See the following section.
 *
 * ## Self-funded approach
 *
 * It just takes a single parameter to disable the sponsorship of the transaction gas costs.
 *
 * ```ts
 * const unfollow = async (profile: Profile) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     profile,
 *     sponsored: false // <--- this is the only difference
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientGasError':
 *         console.log('You do not have enough funds to pay for the transaction gas cost.');
 *         break;
 *
 *       // ...
 *     }
 *     return;
 *   }
 *
 *   // ...
 * }
 * ```
 * In this example you can also see a new error type: {@link InsufficientGasError}. This
 * error happens only with self-funded transactions and it means that the wallet does not
 * have enough funds to pay for the transaction gas costs.
 *
 * ## Self-funded fallback
 *
 * If for some reason the DiGi API cannot sponsor the transaction, the hook will fail with a {@link BroadcastingError} with one of the following reasons:
 * - {@link BroadcastingErrorReason.NOT_SPONSORED} - the profile is not sponsored
 * - {@link BroadcastingErrorReason.RATE_LIMITED} - the profile reached the rate limit
 * - {@link BroadcastingErrorReason.APP_NOT_ALLOWED} - the app is not whitelisted for gasless transactions
 *
 * In those cases you can retry the transaction as self-funded like in the following example:
 *
 * ```ts
 * const unfollow = async (profile: Profile) => {
 *   // the first part is the same as in the initial example
 *
 *   // sponsored attempt
 *   const sponsoredResult = await execute({
 *     profile,
 *   });
 *
 *   if (sponsoredResult.isFailure()) {
 *     switch (sponsoredResult.error.name) {
 *       case 'BroadcastingError':
 *         if ([BroadcastingErrorReason.NOT_SPONSORED, BroadcastingErrorReason.RATE_LIMITED].includes(sponsoredResult.error.reason)) {
 *
 *           const selfFundedResult = await execute({
 *             profile,
 *             sponsored: false
 *           });
 *
 *           // continue with selfFundedResult as in the previous example
 *         }
 *         break;
 *
 *      // ...
 *   }
 * }
 * ```
 *
 * In this example we omitted {@link BroadcastingErrorReason.APP_NOT_ALLOWED} as it's not normally a problem per-se.
 * It just requires the app to apply for whitelisting. See https://docs.digi.xyz/docs/gasless-and-signless#whitelisting-your-app.
 *
 * You can still include it in your fallback logic if you want to. For example to unblock testing your app from a domain that is not the
 * whitelisted one (e.g. localhost).
 *
 *
 */
function useUnfollow() {
  var _useSession = useSession(),
    session = _useSession.data;
  var unfollowProfile = useUnfollowController();
  var configureRequest = useSponsoredConfig();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _args$sponsored;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to use this operation. Use `useLogin` hook to authenticate.');
            invariant(session.type === SessionType.WithProfile, 'You must have a profile to use this operation.');
            return _context.abrupt("return", unfollowProfile(configureRequest({
              kind: TransactionKind.UNFOLLOW_PROFILE,
              profileId: args.profile.id,
              signless: session.profile.signless,
              sponsored: (_args$sponsored = args.sponsored) !== null && _args$sponsored !== void 0 ? _args$sponsored : true
            })));
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

var UnlinkHandleGateway = /*#__PURE__*/function (_ref) {
  _inherits(UnlinkHandleGateway, _ref);
  function UnlinkHandleGateway(config, providerFactory, apolloClient, transactionFactory) {
    var _this;
    _classCallCheck(this, UnlinkHandleGateway);
    _this = _callSuper(this, UnlinkHandleGateway, [config, providerFactory]);
    _this.apolloClient = apolloClient;
    _this.transactionFactory = transactionFactory;
    return _this;
  }
  _createClass(UnlinkHandleGateway, [{
    key: "createDelegatedTransaction",
    value: function () {
      var _createDelegatedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              transaction = this.transactionFactory.createNativeTransaction({
                chainType: ChainType.POLYGON,
                id: v4(),
                request: request,
                relayerTxId: result.value.txId,
                txHash: result.value.txHash
              });
              return _context.abrupt("return", success(transaction));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createDelegatedTransaction(_x) {
        return _createDelegatedTransaction.apply(this, arguments);
      }
      return createDelegatedTransaction;
    }()
  }, {
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, nonce) {
        var result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.createTypedData(request, nonce);
            case 2:
              result = _context2.sent;
              return _context2.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createUnsignedProtocolCall(_x2, _x3) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "createCallDetails",
    value: function () {
      var _createCallDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.createTypedData(request);
            case 2:
              result = _context3.sent;
              return _context3.abrupt("return", this.createUnlinkCallData(result));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function createCallDetails(_x4) {
        return _createCallDetails.apply(this, arguments);
      }
      return createCallDetails;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var _yield$this$apolloCli, data, result;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.apolloClient.mutate({
                mutation: UnlinkHandleFromProfileDocument,
                variables: {
                  request: {
                    handle: request.fullHandle
                  }
                }
              });
            case 2:
              _yield$this$apolloCli = _context4.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context4.next = 10;
                break;
              }
              _context4.next = 7;
              return this.createTypedData(request);
            case 7:
              result = _context4.sent;
              this.createUnlinkCallData(result);
              return _context4.abrupt("return", handleRelayError(data.result));
            case 10:
              return _context4.abrupt("return", success(data.result));
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function relayWithProfileManager(_x5) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }, {
    key: "createTypedData",
    value: function () {
      var _createTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, nonce) {
        var _yield$this$apolloCli2, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.apolloClient.mutate({
                mutation: CreateUnlinkHandleFromProfileTypedDataDocument,
                variables: {
                  request: {
                    handle: request.fullHandle
                  },
                  options: nonce ? {
                    overrideSigNonce: nonce
                  } : undefined
                }
              });
            case 2:
              _yield$this$apolloCli2 = _context5.sent;
              data = _yield$this$apolloCli2.data;
              return _context5.abrupt("return", data.result);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function createTypedData(_x6, _x7) {
        return _createTypedData.apply(this, arguments);
      }
      return createTypedData;
    }()
  }, {
    key: "createUnlinkCallData",
    value: function createUnlinkCallData(result) {
      var contract = digiTokenHandleRegistry(result.typedData.domain.verifyingContract);
      var encodedData = contract["interface"].encodeFunctionData('unlink', [result.typedData.message.handleId, result.typedData.message.profileId]);
      return {
        contractAddress: result.typedData.domain.verifyingContract,
        encodedData: encodedData
      };
    }
  }]);
  return UnlinkHandleGateway;
}(AbstractContractCallGateway);

function useUnlinkHandleController() {
  var _useSharedDependencie = useSharedDependencies(),
    activeWallet = _useSharedDependencie.activeWallet,
    apolloClient = _useSharedDependencie.apolloClient,
    config = _useSharedDependencie.config,
    onChainRelayer = _useSharedDependencie.onChainRelayer,
    transactionFactory = _useSharedDependencie.transactionFactory,
    transactionGateway = _useSharedDependencie.transactionGateway,
    transactionQueue = _useSharedDependencie.transactionQueue,
    providerFactory = _useSharedDependencie.providerFactory;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, gateway, signedExecution, delegableExecution, paidExecution, unlinkHandle;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            validateUnlinkHandleRequest(request);
            presenter = new TransactionResultPresenter();
            gateway = new UnlinkHandleGateway(config, providerFactory, apolloClient, transactionFactory);
            signedExecution = new SignedOnChain(activeWallet, transactionGateway, gateway, onChainRelayer, transactionQueue, presenter);
            delegableExecution = new DelegableSigning(signedExecution, gateway, transactionQueue, presenter);
            paidExecution = new PaidTransaction(activeWallet, gateway, presenter, transactionQueue);
            unlinkHandle = new UnlinkHandle(delegableExecution, paidExecution);
            _context.next = 9;
            return unlinkHandle.execute(request);
          case 9:
            return _context.abrupt("return", presenter.asResult());
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * Unlink a handle from your Profile.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @category Profiles
 * @group Hooks
 * @param args - {@link UnlinkHandleArgs}
 *
 * @example
 * ```tsx
 * const { execute, error, loading } = useUnlinkHandle();
 * ```
 *
 * ## Basic usage
 *
 * Unlink a handle.
 *
 * ```tsx
 * const { execute, error, loading } = useUnlinkHandle();
 *
 * const unlink = async (handle: string) => {
 *   await execute({
 *     handle
 *   });
 * }
 * ```
 *
 * ## Failure scenarios
 *
 * You can handle possible failure scenarios by checking the `result` value.
 *
 * ```tsx
 * const unlink = async (handle: string) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     handle
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'BroadcastingError':
 *         console.log('There was an error broadcasting the transaction', error.message);
 *         break;
 *
 *       case 'PendingSigningRequestError':
 *         console.log(
 *           'There is a pending signing request in your wallet. ' +
 *             'Approve it or discard it and try again.'
 *         );
 *         break;
 *
 *       case 'WalletConnectionError':
 *         console.log('There was an error connecting to your wallet', error.message);
 *         break;
 *
 *       case 'UserRejectedError':
 *         // the user decided to not sign, usually this is silently ignored by UIs
 *         break;
 *     }
 *     return;
 *   }
 * }
 * ```
 *
 * At this point the profile update is completed from an end-user perspective but,
 * in case of on-chain TX, this is not necessarily mined and indexed (yet). See the following section.
 *
 * ## Wait for completion
 *
 * In case of successful submission, the `result` value can be used to wait for the profile metadata to be fully processed.
 *
 * ```tsx
 * const unlink = async (handle: string) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     handle
 *   });
 *
 * if (result.isFailure()) {
 *     // handle failure scenarios
 *     return;
 *   }
 *
 *   // this might take a while depending the congestion of the network
 *   const completion = await result.value.waitForCompletion();
 *
 *   if (completion.isFailure()) {
 *     console.log('There was an processing the transaction', completion.error.message);
 *     return;
 *   }
 *
 *   // the transaction is fully processed
 * };
 * ```
 *
 * ## Self-funded approach
 *
 * It just takes a single parameter to disable the sponsorship of the transaction gas costs.
 *
 * ```ts
 * const unlink = async (handle: string) => {
 *   // the first part is the same as in the initial example
 *
 *   // invoke the `execute` function
 *   const result = await execute({
 *     handle,
 *     sponsored: false // <--- this is the only difference
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientGasError':
 *         console.log('You do not have enough funds to pay for the transaction gas cost.');
 *         break;
 *
 *       // ...
 *     }
 *     return;
 *   }
 *
 *   // ...
 * }
 * ```
 * In this example you can also see a new error type: {@link InsufficientGasError}. This
 * error happens only with self-funded transactions and it means that the wallet does not
 * have enough funds to pay for the transaction gas costs.
 *
 * ## Self-funded fallback
 *
 * If for some reason the DiGi API cannot sponsor the transaction, the hook will fail with a {@link BroadcastingError} with one of the following reasons:
 * - {@link BroadcastingErrorReason.NOT_SPONSORED} - the profile is not sponsored
 * - {@link BroadcastingErrorReason.RATE_LIMITED} - the profile reached the rate limit
 * - {@link BroadcastingErrorReason.APP_NOT_ALLOWED} - the app is not whitelisted for gasless transactions
 *
 * In those cases you can retry the transaction as self-funded like in the following example:
 *
 * ```ts
 * const unlink = async (handle: string) => {
 *   // the first part is the same as in the initial example
 *
 *   // sponsored attempt
 *   const sponsoredResult = await execute({
 *     handle,
 *   });
 *
 *   if (sponsoredResult.isFailure()) {
 *     switch (sponsoredResult.error.name) {
 *       case 'BroadcastingError':
 *         if ([BroadcastingErrorReason.NOT_SPONSORED, BroadcastingErrorReason.RATE_LIMITED].includes(sponsoredResult.error.reason)) {
 *
 *           const selfFundedResult = await execute({
 *             handle,
 *             sponsored: false
 *           });
 *
 *           // continue with selfFundedResult as in the previous example
 *         }
 *         break;
 *
 *      // ...
 *   }
 * }
 * ```
 *
 * In this example we omitted {@link BroadcastingErrorReason.APP_NOT_ALLOWED} as it's not normally a problem per-se.
 * It just requires the app to apply for whitelisting. See https://docs.digi.xyz/docs/gasless-and-signless#whitelisting-your-app.
 *
 * You can still include it in your fallback logic if you want to. For example to unblock testing your app from a domain that is not the
 * whitelisted one (e.g. localhost).
 *
 */
function useUnlinkHandle() {
  var _useSession = useSession(),
    session = _useSession.data;
  var unlinkHandle = useUnlinkHandleController();
  var configureRequest = useSponsoredConfig();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _args$handle$linkedTo, _args$sponsored;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to use this operation. Use `useLogin` hook to authenticate.');
            invariant(session.type === SessionType.WithProfile, 'You must have a profile to use this operation.');
            invariant(((_args$handle$linkedTo = args.handle.linkedTo) === null || _args$handle$linkedTo === void 0 ? void 0 : _args$handle$linkedTo.nftTokenId) === session.profile.id, "You can't unlink handle that is not linked to current profile.");
            return _context.abrupt("return", unlinkHandle(configureRequest({
              kind: TransactionKind.UNLINK_HANDLE,
              fullHandle: args.handle.fullHandle,
              profileId: session.profile.id,
              signless: session.profile.signless,
              sponsored: (_args$sponsored = args.sponsored) !== null && _args$sponsored !== void 0 ? _args$sponsored : true
            })));
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

var UpdateFollowPolicyGateway = /*#__PURE__*/function (_ref) {
  _inherits(UpdateFollowPolicyGateway, _ref);
  function UpdateFollowPolicyGateway(config, providerFactory, apolloClient, transactionFactory) {
    var _this;
    _classCallCheck(this, UpdateFollowPolicyGateway);
    _this = _callSuper(this, UpdateFollowPolicyGateway, [config, providerFactory]);
    _this.apolloClient = apolloClient;
    _this.transactionFactory = transactionFactory;
    return _this;
  }
  _createClass(UpdateFollowPolicyGateway, [{
    key: "createDelegatedTransaction",
    value: function () {
      var _createDelegatedTransaction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
        var result, transaction;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.relayWithProfileManager(request);
            case 2:
              result = _context.sent;
              if (!result.isFailure()) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", result);
            case 5:
              transaction = this.transactionFactory.createNativeTransaction({
                chainType: ChainType.POLYGON,
                id: v4(),
                request: request,
                relayerTxId: result.value.txId,
                txHash: result.value.txHash
              });
              return _context.abrupt("return", success(transaction));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createDelegatedTransaction(_x) {
        return _createDelegatedTransaction.apply(this, arguments);
      }
      return createDelegatedTransaction;
    }()
  }, {
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, nonce) {
        var result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.createTypedData(request, nonce);
            case 2:
              result = _context2.sent;
              return _context2.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createUnsignedProtocolCall(_x2, _x3) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "createCallDetails",
    value: function () {
      var _createCallDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request) {
        var result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.createTypedData(request);
            case 2:
              result = _context3.sent;
              return _context3.abrupt("return", this.createSetFollowModuleCallDetails(result));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function createCallDetails(_x4) {
        return _createCallDetails.apply(this, arguments);
      }
      return createCallDetails;
    }()
  }, {
    key: "relayWithProfileManager",
    value: function () {
      var _relayWithProfileManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request) {
        var _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.apolloClient.mutate({
                mutation: SetFollowModuleDocument,
                variables: {
                  request: {
                    followModule: resolveFollowModuleInput(request.policy)
                  }
                }
              });
            case 2:
              _yield$this$apolloCli = _context4.sent;
              data = _yield$this$apolloCli.data;
              if (!(data.result.__typename === 'DiGiProfileManagerRelayError')) {
                _context4.next = 6;
                break;
              }
              return _context4.abrupt("return", handleRelayError(data.result));
            case 6:
              return _context4.abrupt("return", success(data.result));
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function relayWithProfileManager(_x5) {
        return _relayWithProfileManager.apply(this, arguments);
      }
      return relayWithProfileManager;
    }()
  }, {
    key: "createTypedData",
    value: function () {
      var _createTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, nonce) {
        var _yield$this$apolloCli2, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.apolloClient.mutate({
                mutation: CreateSetFollowModuleTypedDataDocument,
                variables: {
                  request: {
                    followModule: resolveFollowModuleInput(request.policy)
                  },
                  options: nonce ? {
                    overrideSigNonce: nonce
                  } : undefined
                }
              });
            case 2:
              _yield$this$apolloCli2 = _context5.sent;
              data = _yield$this$apolloCli2.data;
              return _context5.abrupt("return", data.result);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function createTypedData(_x6, _x7) {
        return _createTypedData.apply(this, arguments);
      }
      return createTypedData;
    }()
  }, {
    key: "createSetFollowModuleCallDetails",
    value: function createSetFollowModuleCallDetails(result) {
      var contract = digiHub(result.typedData.domain.verifyingContract);
      var encodedData = contract["interface"].encodeFunctionData('setFollowModule', [result.typedData.message.profileId, result.typedData.message.followModule, result.typedData.message.followModuleInitData]);
      return {
        contractAddress: result.typedData.domain.verifyingContract,
        encodedData: encodedData
      };
    }
  }]);
  return UpdateFollowPolicyGateway;
}(AbstractContractCallGateway);

function useUpdateFollowPolicyController() {
  var _useSharedDependencie = useSharedDependencies(),
    activeWallet = _useSharedDependencie.activeWallet,
    apolloClient = _useSharedDependencie.apolloClient,
    config = _useSharedDependencie.config,
    onChainRelayer = _useSharedDependencie.onChainRelayer,
    providerFactory = _useSharedDependencie.providerFactory,
    transactionFactory = _useSharedDependencie.transactionFactory,
    transactionGateway = _useSharedDependencie.transactionGateway,
    transactionQueue = _useSharedDependencie.transactionQueue;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, gateway, signedExecution, delegableExecution, paidExecution, updateFollowPolicy, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            validateUpdateFollowPolicyRequest(request);
            presenter = new TransactionResultPresenter();
            gateway = new UpdateFollowPolicyGateway(config, providerFactory, apolloClient, transactionFactory);
            signedExecution = new SignedOnChain(activeWallet, transactionGateway, gateway, onChainRelayer, transactionQueue, presenter);
            delegableExecution = new DelegableSigning(signedExecution, gateway, transactionQueue, presenter);
            paidExecution = new PaidTransaction(activeWallet, gateway, presenter, transactionQueue);
            updateFollowPolicy = new UpdateFollowPolicy(delegableExecution, paidExecution);
            _context.next = 9;
            return updateFollowPolicy.execute(request);
          case 9:
            result = presenter.asResult();
            if (!result.isSuccess()) {
              _context.next = 12;
              break;
            }
            return _context.abrupt("return", result.value.waitForCompletion());
          case 12:
            return _context.abrupt("return", result);
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * `useUpdateFollowPolicy` allows you to update the follow policy of the authenticated Profile.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * @category Profiles
 * @group Hooks
 * @param args - {@link UpdateFollowPolicyArgs}
 *
 * @example
 * ```tsx
 * const { execute, loading, error } = useUpdateFollowPolicy();
 * ```
 *
 * ## Follow policy types
 *
 * Anyone can follow.
 * ```tsx
 * const { execute, loading, error } = useUpdateFollowPolicy();
 *
 * await execute({
 *   followPolicy: {
 *     type: FollowPolicyType.ANYONE,
 *   },
 * });
 * ```
 *
 * No one can follow.
 * ```tsx
 * const { execute, loading, error } = useUpdateFollowPolicy();
 *
 * await execute({
 *   followPolicy: {
 *     type: FollowPolicyType.NO_ONE,
 *   },
 * });
 * ```
 *
 * Anyone can follow, but they must pay a fee.
 * To setup a {@link FollowPolicyType.CHARGE} you need to define an amount of a currency as a fee.
 *
 * As with anything involving amounts in the DiGi SDK you can use the
 * {@link Amount} helper with currencies from the {@link useCurrencies} hook to
 * create the desired amounts.
 *
 * ```tsx
 * const { execute, loading, error } = useUpdateFollowPolicy();
 *
 * const wmatic = ... // from useCurrencies hook
 *
 * await execute({
 *   followPolicy: {
 *     type: FollowPolicyType.CHARGE,
 *     amount: Amount.erc20(wmatic, 100), // 100 WMATIC
 *     recipient: '0x1234123412341234123412341234123412341234',
 *   },
 * });
 * ```
 *
 * ## Self-funded approach
 *
 * It just takes a single parameter to disable the sponsorship of the transaction gas costs.
 *
 * ```ts
 * await execute({
 *   followPolicy: {
 *     type: FollowPolicyType.CHARGE,
 *     amount: Amount.erc20(wmatic, 100), // 100 WMATIC
 *     recipient: '0x1234123412341234123412341234123412341234',
 *   },
 *   sponsored: false, // <--- this is the only difference
 * });
 * ```
 * In this example you can also see a new error type: {@link InsufficientGasError}. This
 * error happens only with self-funded transactions and it means that the wallet does not
 * have enough funds to pay for the transaction gas costs.
 *
 * ## Self-funded fallback
 *
 * If for some reason the DiGi API cannot sponsor the transaction, the hook will fail with a {@link BroadcastingError} with one of the following reasons:
 * - {@link BroadcastingErrorReason.NOT_SPONSORED} - the profile is not sponsored
 * - {@link BroadcastingErrorReason.RATE_LIMITED} - the profile reached the rate limit
 * - {@link BroadcastingErrorReason.APP_NOT_ALLOWED} - the app is not whitelisted for gasless transactions
 *
 * In those cases you can retry the transaction as self-funded like in the following example:
 *
 * ```ts
 * const update = async () => {
 *   // the first part is the same as in the initial example
 *
 *   // sponsored attempt
 *   const sponsoredResult = await execute({
 *     followPolicy: {
 *       type: FollowPolicyType.CHARGE,
 *       amount: Amount.erc20(wmatic, 100), // 100 WMATIC
 *       recipient: '0x1234123412341234123412341234123412341234',
 *     },
 *     sponsored: false,
 *   });
 *
 *   if (sponsoredResult.isFailure()) {
 *     switch (sponsoredResult.error.name) {
 *       case 'BroadcastingError':
 *         if ([BroadcastingErrorReason.NOT_SPONSORED, BroadcastingErrorReason.RATE_LIMITED].includes(sponsoredResult.error.reason)) {
 *
 *           const selfFundedResult = await execute({
 *             metadataURI: uri,
 *             sponsored: false
 *           });
 *
 *           // continue with selfFundedResult as in the previous example
 *         }
 *         break;
 *
 *      // ...
 *   }
 * }
 * ```
 *
 * In this example we omitted {@link BroadcastingErrorReason.APP_NOT_ALLOWED} as it's not normally a problem per-se.
 * It just requires the app to apply for whitelisting. See https://docs.digi.xyz/docs/gasless-and-signless#whitelisting-your-app.
 *
 * You can still include it in your fallback logic if you want to. For example to unblock testing your app from a domain that is not the
 * whitelisted one (e.g. localhost).
 *
 */
function useUpdateFollowPolicy() {
  var _useSession = useSession(),
    session = _useSession.data;
  var updateFollowPolicy = useUpdateFollowPolicyController();
  var configureRequest = useSponsoredConfig();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _args$sponsored;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to use this operation. Use `useLogin` hook to authenticate.');
            invariant(session.type === SessionType.WithProfile, 'You must have a profile to use this operation.');
            return _context.abrupt("return", updateFollowPolicy(configureRequest({
              kind: TransactionKind.UPDATE_FOLLOW_POLICY,
              policy: args.followPolicy,
              signless: session.profile.signless,
              sponsored: (_args$sponsored = args.sponsored) !== null && _args$sponsored !== void 0 ? _args$sponsored : true
            })));
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

var UpdateProfileManagersGateway = /*#__PURE__*/function (_ref) {
  _inherits(UpdateProfileManagersGateway, _ref);
  function UpdateProfileManagersGateway(config, providerFactory, apolloClient) {
    var _this;
    _classCallCheck(this, UpdateProfileManagersGateway);
    _this = _callSuper(this, UpdateProfileManagersGateway, [config, providerFactory]);
    _this.apolloClient = apolloClient;
    return _this;
  }
  _createClass(UpdateProfileManagersGateway, [{
    key: "createUnsignedProtocolCall",
    value: function () {
      var _createUnsignedProtocolCall = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request, nonceOverride) {
        var result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.createTypedData(request, nonceOverride);
            case 2:
              result = _context.sent;
              return _context.abrupt("return", UnsignedProtocolCall.create({
                id: result.id,
                request: request,
                typedData: omitTypename(result.typedData)
              }));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createUnsignedProtocolCall(_x, _x2) {
        return _createUnsignedProtocolCall.apply(this, arguments);
      }
      return createUnsignedProtocolCall;
    }()
  }, {
    key: "createCallDetails",
    value: function () {
      var _createCallDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        var result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.createTypedData(request);
            case 2:
              result = _context2.sent;
              return _context2.abrupt("return", this.createChangeDelegatedExecutorsConfigCallDetails(result));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createCallDetails(_x3) {
        return _createCallDetails.apply(this, arguments);
      }
      return createCallDetails;
    }()
  }, {
    key: "createTypedData",
    value: function () {
      var _createTypedData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request, nonce) {
        var _request$add$map, _request$add, _request$remove$map, _request$remove;
        var _yield$this$apolloCli, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.apolloClient.mutate({
                mutation: CreateChangeProfileManagersTypedDataDocument,
                variables: {
                  request: {
                    approveSignless: request.approveSignless,
                    changeManagers: [].concat(_toConsumableArray((_request$add$map = (_request$add = request.add) === null || _request$add === void 0 ? void 0 : _request$add.map(function (address) {
                      return {
                        action: ChangeProfileManagerActionType.Add,
                        address: address
                      };
                    })) !== null && _request$add$map !== void 0 ? _request$add$map : []), _toConsumableArray((_request$remove$map = (_request$remove = request.remove) === null || _request$remove === void 0 ? void 0 : _request$remove.map(function (address) {
                      return {
                        action: ChangeProfileManagerActionType.Remove,
                        address: address
                      };
                    })) !== null && _request$remove$map !== void 0 ? _request$remove$map : []))
                  },
                  options: nonce ? {
                    overrideSigNonce: nonce
                  } : undefined
                }
              });
            case 2:
              _yield$this$apolloCli = _context3.sent;
              data = _yield$this$apolloCli.data;
              return _context3.abrupt("return", data.result);
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function createTypedData(_x4, _x5) {
        return _createTypedData.apply(this, arguments);
      }
      return createTypedData;
    }()
  }, {
    key: "createChangeDelegatedExecutorsConfigCallDetails",
    value: function createChangeDelegatedExecutorsConfigCallDetails(data) {
      var contract = digiHub(data.typedData.domain.verifyingContract);
      var encodedData = contract["interface"].encodeFunctionData('changeDelegatedExecutorsConfig(uint256,address[],bool[],uint64,bool)', [data.typedData.message.delegatorProfileId, data.typedData.message.delegatedExecutors, data.typedData.message.approvals, data.typedData.message.configNumber, data.typedData.message.switchToGivenConfig]);
      return {
        contractAddress: data.typedData.domain.verifyingContract,
        encodedData: encodedData
      };
    }
  }]);
  return UpdateProfileManagersGateway;
}(AbstractContractCallGateway);

function useUpdateProfileManagersController() {
  var _useSharedDependencie = useSharedDependencies(),
    activeWallet = _useSharedDependencie.activeWallet,
    apolloClient = _useSharedDependencie.apolloClient,
    config = _useSharedDependencie.config,
    onChainRelayer = _useSharedDependencie.onChainRelayer,
    providerFactory = _useSharedDependencie.providerFactory,
    transactionGateway = _useSharedDependencie.transactionGateway,
    transactionQueue = _useSharedDependencie.transactionQueue;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request) {
      var presenter, gateway, paidExecution, sponsoredExecution, updateProfileManagers, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            validateUpdateProfileManagersRequest(request);
            presenter = new TransactionResultPresenter();
            gateway = new UpdateProfileManagersGateway(config, providerFactory, apolloClient);
            paidExecution = new PaidTransaction(activeWallet, gateway, presenter, transactionQueue);
            sponsoredExecution = new SignedOnChain(activeWallet, transactionGateway, gateway, onChainRelayer, transactionQueue, presenter);
            updateProfileManagers = new UpdateProfileManagers(sponsoredExecution, paidExecution);
            _context.next = 8;
            return updateProfileManagers.execute(request);
          case 8:
            result = presenter.asResult();
            if (!result.isSuccess()) {
              _context.next = 11;
              break;
            }
            return _context.abrupt("return", result.value.waitForCompletion());
          case 11:
            return _context.abrupt("return", result);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

/**
 * Update the profile manager configuration for the authenticated profile.
 *
 * You MUST be authenticated via {@link useLogin} to use this hook.
 *
 * **NOTE** This hook waits for the transaction to be mined and indexed before returning.
 * This is due to the fact that until a Profile Manager configuration change is fully finalized, the enabled managers cannot yet sign transactions.
 * In the case of disabling profile managers, it's very likely you'll want the rest of the application to not perform operations while the transaction is pending.
 *
 * @example
 * ```ts
 * const { execute, loading, error } = useUpdateProfileManagers();
 * ```
 *
 * ## Basic usage
 *
 * Enable/disable the DiGi Profile Manager. This allows to perform signless transaction through the DiGi API.
 * ```ts
 * const { execute, loading, error } = useUpdateProfileManagers();
 *
 * const callback = async () => {
 *   const result = await execute({
 *     approveSignless: true, // or false to disable it
 *   });
 *
 *   if (result.isFailure()) {
 *     toast.error(result.error.message);
 *   }
 * };
 * ```
 *
 * ## Add/remove managers
 *
 * Add/remove an arbitrary address to the list of Profile managers for the authenticated Profile.
 * ```ts
 * const { execute, loading, error } = useUpdateProfileManagers();
 *
 * const callback = async () => {
 *   const result = await execute({
 *     add: ['0x1234567890123456789012345678901234567890', '0x1234567890123456789012345678901234567891'],
 *     remove: ['0x1234567890123456789012345678901234567892'],
 *   });
 * }
 * ```
 *
 * ## Failure scenarios
 *
 * You can handle possible failure scenarios by checking the `result` value.
 *
 * ```tsx
 * const callback = async () => {
 *   const result = await execute({
 *     approveSignless: true,
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'BroadcastingError':
 *         console.log('There was an error broadcasting the transaction', error.message);
 *         break;
 *
 *       case 'PendingSigningRequestError':
 *         console.log(
 *           'There is a pending signing request in your wallet. ' +
 *             'Approve it or discard it and try again.'
 *         );
 *         break;
 *
 *       case 'WalletConnectionError':
 *         console.log('There was an error connecting to your wallet', error.message);
 *         break;
 *
 *       case 'UserRejectedError':
 *         // the user decided to not sign, usually this is silently ignored by UIs
 *         break;
 *     }
 *     return;
 *   }
 * };
 *```
 *
 * ## Self-funded approach
 *
 * It just takes a single parameter to disable the sponsorship of the transaction gas costs.
 *
 * ```ts
 * const callback = async () => {
 *   const result = await execute({
 *     approveSignless: true,
 *     sponsored: false, <-- this is the only change
 *   });
 *
 *   if (result.isFailure()) {
 *     switch (result.error.name) {
 *       case 'InsufficientGasError':
 *         console.log('You do not have enough funds to pay for the transaction gas cost.');
 *         break;
 *
 *       // ...
 *     }
 *     return;
 *   }
 *```
 * In this example you can also see a new error type: {@link InsufficientGasError}. This
 * error happens only with self-funded transactions and it means that the wallet does not
 * have enough funds to pay for the transaction gas costs.
 *
 * ## Self-funded Fallback
 *
 * If for some reason the DiGi API cannot sponsor the transaction, the hook will fail with a {@link BroadcastingError} with one of the following reasons:
 * - {@link BroadcastingErrorReason.NOT_SPONSORED} - the profile is not sponsored
 * - {@link BroadcastingErrorReason.RATE_LIMITED} - the profile reached the rate limit
 * - {@link BroadcastingErrorReason.APP_NOT_ALLOWED} - the app is not whitelisted for gasless transactions
 *
 * In those cases you can retry the transaction as self-funded like in the following example:
 *
 * ```ts
 * const callback = async () => {
 *   // sponsored attempt
 *   const sponsoredResult = await execute({
 *     approveSignless: true,
 *   });
 *
 *   if (sponsoredResult.isFailure()) {
 *     switch (sponsoredResult.error.name) {
 *       case 'BroadcastingError':
 *         if ([BroadcastingErrorReason.NOT_SPONSORED, BroadcastingErrorReason.RATE_LIMITED].includes(sponsoredResult.error.reason)) {
 *
 *           const selfFundedResult = await execute({
 *             approveSignless: true,
 *             sponsored: false
 *           });
 *
 *           // continue with selfFundedResult as in the previous example
 *         }
 *         break;
 *
 *      // ...
 *   }
 * }
 * ```
 *
 * In this example we omitted {@link BroadcastingErrorReason.APP_NOT_ALLOWED} as it's not normally a problem per-se.
 * It just requires the app to apply for whitelisting. See https://docs.digi.xyz/docs/gasless-and-signless#whitelisting-your-app.
 *
 * You can still include it in your fallback logic if you want to. For example to unblock testing your app from a domain that is not the
 * whitelisted one (e.g. localhost).
 *
 * @category Profiles
 * @group Hooks
 * @param args - {@link UpdateProfileManagersArgs}
 */
function useUpdateProfileManagers() {
  var _useSession = useSession(),
    session = _useSession.data;
  var updateProfileManagers = useUpdateProfileManagersController();
  var configureRequest = useSponsoredConfig();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _args$sponsored;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            invariant((session === null || session === void 0 ? void 0 : session.type) === SessionType.WithProfile, 'You must be authenticated with the Profile you intend update Profile Managers for. ' + 'Use `useLogin` hook to authenticate.');
            if ('approveSignless' in args) {
              invariant(args.approveSignless === session.profile.signless, "The Signless Experience is already ".concat(args.approveSignless ? 'enabled' : 'disabled'));
            }
            return _context.abrupt("return", updateProfileManagers(configureRequest(_objectSpread2({
              kind: TransactionKind.UPDATE_PROFILE_MANAGERS,
              sponsored: (_args$sponsored = args.sponsored) !== null && _args$sponsored !== void 0 ? _args$sponsored : true
            }, args))));
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

/**
 * `useCanClaimHandle` is React Hook that allows you to check if you can claim a handle.
 *
 * You MUST be authenticated with a {@link WalletOnlySession} via {@link useLogin} to use this hook.
 *
 * @experimental This hook is experimental and may change in future versions.
 * @category Wallet
 * @group Hooks
 */
function useCanClaimHandle() {
  var _useSession = useSession(),
    session = _useSession.data;
  invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated.');
  invariant(session.type === SessionType.JustWallet, 'You must be authenticated with a WalletOnlySession');
  return useReadResult(useClaimableProfiles(useDiGiApolloClient({
    fetchPolicy: 'network-only'
  })));
}

/**
 * {@link useLastLoggedInProfile} hook arguments
 */

/**
 * Fetch the last logged in profile for a wallet address.
 *
 * @example
 * ```ts
 * const { data, error, loading } = useLastLoggedInProfile({
 *   for: '0x1234567890123456789012345678901234567890',
 * });
 * ```
 *
 * @category Wallet
 * @group Hooks
 */
function useLastLoggedInProfile(args) {
  var _useReadResult = useReadResult(useLastLoggedInProfile$1(useDiGiApolloClient({
      variables: useFragmentVariables({
        request: args
      })
    }))),
    data = _useReadResult.data,
    error = _useReadResult.error,
    loading = _useReadResult.loading;
  if (loading) {
    return {
      data: undefined,
      error: undefined,
      loading: true
    };
  }
  if (error) {
    return {
      data: undefined,
      error: error,
      loading: false
    };
  }
  if (data === null) {
    return {
      data: undefined,
      error: new NotFoundError("No profile found for the wallet address: ".concat(args["for"])),
      loading: false
    };
  }
  return {
    data: data,
    error: undefined,
    loading: false
  };
}

/**
 * {@link useLazyProfilesManaged} callback hook arguments
 */

/**
 * `useLazyProfilesManaged` is a lazy version of {@link useProfilesManaged} React Hook.
 *
 * This version doesn't support pagination!
 *
 * This hook will not fetch profiles until the returned function is called.
 *
 * @experimental This hook is experimental and may change in the future.
 * @example
 * ```ts
 * const { called, data, error, loading, execute } = useLazyProfilesManaged();
 *
 * const callback = async () => {
 *   const result = await execute({
 *     for: '0x1234567890123456789012345678901234567890',
 *   });
 *
 *   if (result.isFailure()) {
 *     toast.error(result.error.message);
 *     return;
 *   }
 *
 *   const profiles = result.value;
 *
 *   // do something with the profiles
 * }
 * ```
 *
 * @category Wallet
 * @group Hooks
 */
function useLazyProfilesManaged() {
  var _useProfilesManagedLa = useProfilesManagedLazyQuery(useDiGiApolloClient({
      fetchPolicy: 'no-cache'
    })),
    _useProfilesManagedLa2 = _slicedToArray(_useProfilesManagedLa, 1),
    fetch = _useProfilesManagedLa2[0];
  var fill = useLazyFragmentVariables();
  return useDeferredTask( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
      var _yield$fetch, data, error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch({
              variables: fill(args)
            });
          case 2:
            _yield$fetch = _context.sent;
            data = _yield$fetch.data;
            error = _yield$fetch.error;
            if (!error) {
              _context.next = 7;
              break;
            }
            return _context.abrupt("return", failure(new UnspecifiedError(error)));
          case 7:
            invariant(data, 'Data must be defined');
            return _context.abrupt("return", success(data.result.items));
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}

/**
 * {@link useOwnedHandles} hook arguments
 */

/**
 * `useOwnedHandles` is a paginated hook that lets you fetch handles owned by a wallet.
 *
 * @category Wallet
 * @group Hooks
 *
 * @example
 * ```tsx
 * const { data, loading, error } = useOwnedHandles({
 *   for: '0x1234567890123456789012345678901234567890',
 * });
 * ```
 */
function useOwnedHandles(args) {
  return usePaginatedReadResult(useOwnedHandles$1(useDiGiApolloClient({
    variables: args
  })));
}

/**
 * {@link useProfilesManaged} hook arguments
 */

/**
 * `useProfilesManaged` is a paginated hook that lets you fetch profiles managed by a wallet.
 *
 * @category Wallet
 * @group Hooks
 *
 * @example
 * Fetch all managed profiles, including owned profiles
 * ```tsx
 * const { data, loading, error } = useProfilesManaged({
 *   for: '0x1234567890123456789012345678901234567890',
 * });
 * ```
 *
 * Fetch managed profiles without owned ones
 * ```tsx
 * const { data, loading, error } = useProfilesManaged({
 *   for: '0x1234567890123456789012345678901234567890',
 *   includeOwned: false,
 * });
 * ```
 */
function useProfilesManaged(args) {
  return usePaginatedReadResult(useProfilesManaged$1(useDiGiApolloClient({
    variables: useFragmentVariables(args)
  })));
}

/**
 * A chain configuration
 *
 * @internal
 */

/**
 * @internal
 */
var mainnet = {
  chainId: 1,
  name: 'Ethereum',
  rpcUrl: 'https://mainnet.infura.io/v3',
  blockExplorer: 'https://etherscan.io/',
  nativeCurrency: ether()
};

/**
 * @internal
 */
var goerli = {
  chainId: 5,
  name: 'Goerli',
  rpcUrl: 'https://goerli.infura.io/v3',
  blockExplorer: 'https://goerli.etherscan.io/',
  nativeCurrency: ether()
};

/**
 * @internal
 */
var polygon = {
  chainId: 137,
  name: 'Polygon Mainnet',
  rpcUrl: 'https://polygon-rpc.com/',
  blockExplorer: 'https://polygonscan.com/',
  nativeCurrency: matic()
};

/**
 * @internal
 */
var mumbai = {
  chainId: 80001,
  name: 'Polygon Testnet Mumbai',
  rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
  blockExplorer: 'https://mumbai.polygonscan.com/',
  nativeCurrency: matic()
};

/**
 * A registry of chain configurations
 *
 * @internal
 */

/**
 * The transaction observer timings
 *
 * @internal
 */

/**
 * A function that resolves a profile localName to a fully qualified profile handle
 *
 * @internal
 */

/**
 * The environment configuration type
 *
 * @internal
 */

/**
 * The production environment configuration
 *
 * This is the environment to be used in the live instance of your application (real users, real profiles, real data).
 *
 * - Endpoint: https://api-v2.digi.dev
 * - Chain IDs: 137 (Polygon), 1 (Ethereum)
 * - Profile handle namespace: `digi/`
 * - Environment specific timings
 */
var production = {
  name: 'production',
  backend: 'https://api-v2.digi.dev',
  chains: _defineProperty(_defineProperty({}, ChainType.ETHEREUM, mainnet), ChainType.POLYGON, polygon),
  timings: {
    pollingInterval: 3000,
    maxIndexingWaitTime: 120000,
    maxMiningWaitTime: 60000
  },
  contracts: {
    permissionlessCreator: '0x0b5e6100243f793e480DE6088dE6bA70aA9f3872'
  },
  handleResolver: function handleResolver(localName) {
    return "digi/".concat(localName);
  }
};

/**
 * The development environment configuration
 *
 * This is the environment to be used when you develop and test your application (test users, test profiles, test data)
 *
 * - Endpoint: https://api-v2-mumbai-live.digi.dev
 * - Chain IDs: 80001 (Mumbai), 5 (Goerli)
 * - Profile handle namespace: `test/`
 * - Environment specific timings
 */
var development = {
  name: 'development',
  backend: 'https://api-v2-mumbai-live.digi.dev',
  chains: _defineProperty(_defineProperty({}, ChainType.ETHEREUM, goerli), ChainType.POLYGON, mumbai),
  timings: {
    pollingInterval: 3000,
    maxIndexingWaitTime: 240000,
    maxMiningWaitTime: 120000
  },
  contracts: {
    permissionlessCreator: '0xCb4FB63c3f13CB83cCD6F10E9e5F29eC250329Cc'
  },
  handleResolver: function handleResolver(localName) {
    return "test/".concat(localName);
  }
};

/**
 * @internal
 */
var staging = {
  name: 'staging',
  backend: 'https://api-mumbai.digi-v2.crtlkey.com',
  chains: _defineProperty(_defineProperty({}, ChainType.ETHEREUM, goerli), ChainType.POLYGON, mumbai),
  timings: {
    pollingInterval: 5000,
    maxIndexingWaitTime: 240000,
    maxMiningWaitTime: 2400000
  },
  contracts: {
    permissionlessCreator: '0xCb4FB63c3f13CB83cCD6F10E9e5F29eC250329Cc'
  },
  handleResolver: function handleResolver(localName) {
    return "test/".concat(localName);
  }
};

export { BaseProvider, ClaimHandleError, ConsoleLogger, ConsoleLoggerLevel, HandleNotAvailableError, InvalidHandleError, NotFoundError, OpenActionKind, PrematureFollowError, appId, data, development, goerli, hasReacted, mainnet, mumbai, polygon, production, profileId, publicationId, resolveConfig, staging, uri, url, useAccessToken, useApolloClient, useApproveModule, useBlockProfiles, useBlockedProfiles, useBookmarkToggle, useBookmarks, useCanClaimHandle, useClaimHandle, useCreateComment, useCreateMirror, useCreatePost, useCreateProfile, useCreateQuote, useCurrencies, useDeferredTask, useDismissRecommendedProfiles, useExploreProfiles, useExplorePublications, useFeed, useFeedHighlights, useFollow, useHideCommentToggle, useHidePublication, useInviteWallets, useInvitedProfiles, useLastLoggedInProfile, useLazyModuleMetadata, useLazyProfile, useLazyProfiles, useLazyProfilesManaged, useLazyPublication, useLazyPublications, useLazyWasWalletInvited, useLinkHandle, useLogin, useLogout, useModuleMetadata, useMutualFollowers, useNotInterestedToggle, useNotifications, useOpenAction, useOwnedHandles, useProfile, useProfileActionHistory, useProfileFollowers, useProfileFollowing, useProfileManagers, useProfiles, useProfilesManaged, usePublication, usePublications, useReactionToggle, useRecommendedProfiles, useReportProfile, useReportPublication, useResolveAddress, useRevenueFromFollow, useRevenueFromPublication, useRevenueFromPublications, useSearchProfiles, useSearchPublications, useSession, useSetProfileMetadata, useSharedDependencies, useStorage, useUnblockProfiles, useUnfollow, useUnlinkHandle, useUpdateFollowPolicy, useUpdateProfileManagers, useUpgradeCredentials, useValidateHandle, useWasWalletInvited, useWhoActedOnPublication, useWhoReactedToPublication };
