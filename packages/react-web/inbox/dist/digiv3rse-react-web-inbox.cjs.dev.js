'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('@digiv3rse/react');
var sharedKernel = require('@digiv3rse/shared-kernel');
var react$1 = require('react');
var createClass = require('../../dist/createClass-c506c899.cjs.dev.js');
var reactSdk = require('@xmtp/react-sdk');
var inbox = require('@digiv3rse/domain/use-cases/inbox');

var CONVERSATION_ID_PREFIX = 'digi.dev/dm';
function buildConversationId(profileIdA, profileIdB) {
  var profileIdAParsed = parseInt(profileIdA, 16);
  var profileIdBParsed = parseInt(profileIdB, 16);
  return profileIdAParsed < profileIdBParsed ? "".concat(CONVERSATION_ID_PREFIX, "/").concat(profileIdA, "-").concat(profileIdB) : "".concat(CONVERSATION_ID_PREFIX, "/").concat(profileIdB, "-").concat(profileIdA);
}
function parseConversationId(conversationId) {
  var conversationIdWithoutPrefix = conversationId.replace("".concat(CONVERSATION_ID_PREFIX, "/"), '');
  var _conversationIdWithou = conversationIdWithoutPrefix.split('-'),
    _conversationIdWithou2 = createClass._slicedToArray(_conversationIdWithou, 2),
    profileIdA = _conversationIdWithou2[0],
    profileIdB = _conversationIdWithou2[1];
  sharedKernel.invariant(profileIdA && profileIdB, 'Invalid conversation id');
  return [profileIdA, profileIdB];
}
function isDiGiConversation(activeProfileId, conversationId) {
  if (conversationId && conversationId.includes(activeProfileId)) {
    return true;
  }
  return false;
}
function extractPeerProfileId(conversationId, activeProfileId) {
  if (isDiGiConversation(activeProfileId, conversationId)) {
    var _parseConversationId = parseConversationId(conversationId),
      _parseConversationId2 = createClass._slicedToArray(_parseConversationId, 2),
      profileIdA = _parseConversationId2[0],
      profileIdB = _parseConversationId2[1];
    var result = profileIdA === activeProfileId ? profileIdB : profileIdA;
    return react.profileId(result);
  }
  return undefined;
}

/**
 * Create a unique conversation ID based on sender/receiver addresses and
 * context values
 */
var createUniqueConversationId = function createUniqueConversationId(conversation) {
  var _conversation$context;
  return [conversation.walletAddress, conversation.peerAddress, (_conversation$context = conversation.context) === null || _conversation$context === void 0 ? void 0 : _conversation$context.conversationId].filter(function (v) {
    return Boolean(v);
  }).join('/');
};

function notEmpty(value) {
  return value !== null && value !== undefined;
}

/**
 * @experimental
 */

/**
 * @experimental
 */

/**
 * Enhance XMTP conversation with a profile of the conversation's peer
 *
 * You MUST be authenticated via `useLogin` to use this hook.
 *
 * @example
 * ```tsx
 * const { data: enhancedConversation, loading } = useEnhanceConversation({
 *   conversation,
 * });
 * ```
 * @param args - {@link UseEnhanceConversationRequest}
 * @category Inbox
 * @group Hooks
 * @experimental
 */
function useEnhanceConversation(_ref) {
  var conversation = _ref.conversation;
  var _useSession = react.useSession(),
    session = _useSession.data;
  sharedKernel.invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to use this operation. Use `useLogin` hook to authenticate.');
  sharedKernel.invariant(session.type === react.SessionType.WithProfile, 'You must have a profile to use this operation.');
  var peerProfileId = react$1.useMemo(function () {
    var _conversation$context;
    return extractPeerProfileId((_conversation$context = conversation.context) === null || _conversation$context === void 0 ? void 0 : _conversation$context.conversationId, session.profile.id);
  }, [conversation, session.profile]);
  var _useLazyProfile = react.useLazyProfile(),
    peerProfile = _useLazyProfile.data,
    error = _useLazyProfile.error,
    loading = _useLazyProfile.loading,
    execute = _useLazyProfile.execute;
  react$1.useEffect(function () {
    if (peerProfileId) {
      void execute({
        forProfileId: peerProfileId
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [peerProfileId]);
  var enhancedConversation = react$1.useMemo(function () {
    if (peerProfile) {
      // Clone the xmtp Conversation instance with all its methods and add peerProfile
      // eslint-disable-next-line
      return Object.assign(Object.create(Object.getPrototypeOf(conversation)), conversation, {
        peerProfile: peerProfile
      });
    }
    return conversation;
  }, [conversation, peerProfile]);
  if (peerProfileId === undefined) {
    return {
      conversation: conversation,
      error: null,
      isLoading: false,
      isLoaded: true
    };
  }
  if (loading) {
    return {
      conversation: conversation,
      error: null,
      isLoading: true,
      isLoaded: false
    };
  }
  if (error) {
    return {
      conversation: conversation,
      error: error,
      isLoading: false,
      isLoaded: true
    };
  }
  return {
    conversation: enhancedConversation,
    error: null,
    isLoading: false,
    isLoaded: true
  };
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return createClass._arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || createClass._unsupportedIterableToArray(arr) || _nonIterableSpread();
}

/**
 * @experimental
 */

/**
 * Enhance XMTP conversations with profiles of the conversations' peers,
 * if conversation is between two DiGi profiles.
 *
 * You MUST be authenticated via `useLogin` to use this hook.
 *
 * @example
 * ```tsx
 * import { useConversations } from '@xmtp/react-sdk';
 *
 * const { data: conversations, error, loading } = useEnhanceConversations(useConversations());
 * ```
 * @category Inbox
 * @group Hooks
 * @experimental
 */
function useEnhanceConversations(useConversationsResult) {
  var _useSession = react.useSession(),
    session = _useSession.data;
  var conversations = useConversationsResult.conversations,
    resultError = useConversationsResult.error,
    resultLoading = useConversationsResult.isLoading;
  sharedKernel.invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to use this operation. Use `useLogin` hook to authenticate.');
  sharedKernel.invariant(session.type === react.SessionType.WithProfile, 'You must have a profile to use this operation.');
  var conversationToProfileIdMap = react$1.useMemo(function () {
    return conversations.reduce(function (acc, c) {
      var _c$context;
      var peerProfileId = extractPeerProfileId((_c$context = c.context) === null || _c$context === void 0 ? void 0 : _c$context.conversationId, session.profile.id);
      return createClass._objectSpread2(createClass._objectSpread2({}, acc), {}, createClass._defineProperty({}, createUniqueConversationId(c), peerProfileId));
    }, {});
  }, [conversations, session.profile.id]);
  var uniqueProfileIds = react$1.useMemo(function () {
    var ids = Object.values(conversationToProfileIdMap).filter(notEmpty);
    return _toConsumableArray(new Set(ids));
  }, [conversationToProfileIdMap]);
  var _useLazyProfiles = react.useLazyProfiles(),
    profiles = _useLazyProfiles.data,
    error = _useLazyProfiles.error,
    loading = _useLazyProfiles.loading,
    execute = _useLazyProfiles.execute;
  var skip = uniqueProfileIds.length === 0;
  react$1.useEffect(function () {
    if (uniqueProfileIds.length !== 0) {
      void execute({
        where: {
          profileIds: uniqueProfileIds
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uniqueProfileIds]);
  var enhancedConversations = react$1.useMemo(function () {
    if (profiles && profiles.length > 0 && conversations.length > 0) {
      var eConversations = conversations.map(function (c) {
        var id = createUniqueConversationId(c);
        var peerProfile = profiles.find(function (p) {
          return p.id === conversationToProfileIdMap[id];
        });
        if (!peerProfile) {
          return c;
        }

        // Clone the xmtp Conversation instance with all its methods and add peerProfile
        // eslint-disable-next-line
        return Object.assign(Object.create(Object.getPrototypeOf(c)), c, {
          peerProfile: peerProfile
        });
      });
      return eConversations;
    }
    return conversations;
  }, [profiles, conversationToProfileIdMap, conversations]);
  if (skip) {
    return {
      conversations: conversations,
      error: null,
      isLoading: false,
      isLoaded: true
    };
  }
  if (loading || resultLoading) {
    return {
      conversations: [],
      error: null,
      isLoading: true,
      isLoaded: false
    };
  }
  if (resultError) {
    sharedKernel.assertError(resultError);
    return {
      conversations: [],
      error: resultError,
      isLoading: false,
      isLoaded: true
    };
  }
  if (error) {
    return {
      conversations: [],
      error: error,
      isLoading: false,
      isLoaded: true
    };
  }
  return {
    conversations: enhancedConversations,
    error: null,
    isLoading: false,
    isLoaded: true
  };
}

/**
 * @experimental
 */

/**
 * @experimental
 */

/**
 * Start a new XMTP conversation between two DiGi profiles.
 *
 * You MUST be authenticated via `useLogin` to use this hook.
 *
 * @example
 * ```tsx
 * const { startConversation, isLoading, error } = useStartDiGiConversation({
 *   peerProfile,
 * });
 *
 * const newConversation = await startConversation(peerProfile.ownedBy.address, firstMessage);
 * ```
 * @category Inbox
 * @group Hooks
 * @experimental
 */
function useStartDiGiConversation(args) {
  var _useSession = react.useSession(),
    session = _useSession.data;
  sharedKernel.invariant(session === null || session === void 0 ? void 0 : session.authenticated, 'You must be authenticated to use this operation. Use `useLogin` hook to authenticate.');
  sharedKernel.invariant(session.type === react.SessionType.WithProfile, 'You must have a profile to use this operation.');
  return reactSdk.useStartConversation({
    conversationId: buildConversationId(session.profile.id, args.peerProfile.id),
    metadata: {}
  });
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

var PromiseResultPresenter = /*#__PURE__*/function () {
  function PromiseResultPresenter() {
    createClass._classCallCheck(this, PromiseResultPresenter);
    createClass._defineProperty(this, "deferredResult", new sharedKernel.Deferred());
  }
  createClass._createClass(PromiseResultPresenter, [{
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
var SignerAdapter = /*#__PURE__*/function () {
  function SignerAdapter(activeWallet) {
    createClass._classCallCheck(this, SignerAdapter);
    this.activeWallet = activeWallet;
  }
  createClass._createClass(SignerAdapter, [{
    key: "getAddress",
    value: function () {
      var _getAddress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var wallet;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.activeWallet.requireActiveWallet();
            case 2:
              wallet = _context.sent;
              return _context.abrupt("return", wallet.address);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getAddress() {
        return _getAddress.apply(this, arguments);
      }
      return getAddress;
    }()
  }, {
    key: "signMessage",
    value: function () {
      var _signMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request) {
        var presenter, useCase, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              presenter = new PromiseResultPresenter();
              useCase = new inbox.SignArbitraryMessage(this.activeWallet, presenter);
              _context2.next = 4;
              return useCase.execute(request);
            case 4:
              _context2.next = 6;
              return presenter.asResult();
            case 6:
              result = _context2.sent;
              return _context2.abrupt("return", result.unwrap());
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function signMessage(_x) {
        return _signMessage.apply(this, arguments);
      }
      return signMessage;
    }()
  }]);
  return SignerAdapter;
}();

function storeKeys(_x, _x2) {
  return _storeKeys.apply(this, arguments);
}
function _storeKeys() {
  _storeKeys = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(storage, keys) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return storage.set(Uint8Array.from(keys).toString());
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _storeKeys.apply(this, arguments);
}
function loadKeys(_x3) {
  return _loadKeys.apply(this, arguments);
}
/**
 * @experimental
 */
function _loadKeys() {
  _loadKeys = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(storage) {
    var val;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return storage.get();
        case 2:
          val = _context3.sent;
          return _context3.abrupt("return", val ? Uint8Array.from(val.split(',').map(function (c) {
            return parseInt(c);
          })) : null);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _loadKeys.apply(this, arguments);
}
/**
 * @experimental
 */
var defaultOptions = {
  persistConversations: true
};

/**
 * Initialize XMTP client using the same Signer as the one provided with `DiGiConfig`.
 * Store XMTP user's decryption key in storage to improve UX.
 * Be aware that XMTP user's key must be stored safely.
 *
 * You MUST be authenticated via `useLogin` to use this hook.
 *
 * @example
 * ```tsx
 * const { client, disconnect, isLoading, error, initialize } = useXmtpClient();
 *
 * const handleConnect = async () => {
 *   await initialize();
 * };
 *
 * if (isLoading) return 'Loading...';
 * if (error) return 'Error';
 *
 * if (!client) {
 *   return (
 *     <button type="button" onClick={handleConnect}>
 *       Connect to XMTP
 *     </button>
 *   );
 * }
 * ```
 * @category Inbox
 * @group Hooks
 * @experimental
 */
function useXmtpClient() {
  var _useClient = reactSdk.useClient(),
    client = _useClient.client,
    disconnect = _useClient.disconnect,
    clientIsLoading = _useClient.isLoading,
    initialize = _useClient.initialize;
  var _useState = react$1.useState(false),
    _useState2 = createClass._slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var _useState3 = react$1.useState(),
    _useState4 = createClass._slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var _useSharedDependencie = react.useSharedDependencies(),
    activeWallet = _useSharedDependencie.activeWallet,
    storage = _useSharedDependencie.inboxKeyStorage;
  var initializeWithDiGi = react$1.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var options,
      existingKeys,
      signer,
      _newClient,
      newClient,
      newKeys,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 0 && _args[0] !== undefined ? _args[0] : defaultOptions;
          setIsLoading(true);
          setError(undefined);
          _context.prev = 3;
          _context.next = 6;
          return loadKeys(storage);
        case 6:
          existingKeys = _context.sent;
          signer = new SignerAdapter(activeWallet);
          if (!existingKeys) {
            _context.next = 13;
            break;
          }
          _context.next = 11;
          return initialize({
            keys: existingKeys,
            signer: signer,
            options: options
          });
        case 11:
          _newClient = _context.sent;
          return _context.abrupt("return", _newClient);
        case 13:
          _context.next = 15;
          return initialize({
            signer: signer,
            options: options
          });
        case 15:
          newClient = _context.sent;
          _context.next = 18;
          return reactSdk.Client.getKeys(signer);
        case 18:
          newKeys = _context.sent;
          _context.next = 21;
          return storeKeys(storage, newKeys);
        case 21:
          return _context.abrupt("return", newClient);
        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](3);
          sharedKernel.assertError(_context.t0);
          setError(_context.t0);
          return _context.abrupt("return", undefined);
        case 29:
          _context.prev = 29;
          setIsLoading(false);
          return _context.finish(29);
        case 32:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 24, 29, 32]]);
  })), [activeWallet, initialize, storage]);
  return {
    client: client,
    disconnect: disconnect,
    isLoading: isLoading || clientIsLoading,
    error: error,
    initialize: initializeWithDiGi
  };
}

exports.useEnhanceConversation = useEnhanceConversation;
exports.useEnhanceConversations = useEnhanceConversations;
exports.useStartDiGiConversation = useStartDiGiConversation;
exports.useXmtpClient = useXmtpClient;
