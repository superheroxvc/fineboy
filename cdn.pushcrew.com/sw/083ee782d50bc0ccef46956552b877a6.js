'use strict';
var _wingifyPush = {
    hash: '083ee782d50bc0ccef46956552b877a6',
    trackingUrl: 'https://tracking.pushcrew.com',
    pcDomainUrl: 'https://pushcrew.com',
    defaultIcon: '/logo_192_by_192.png',
    origin: 'https',
    isAMPEnabled: 1,
    vapidPublicKey: 'BDhvWXncs8J22ZQJLj6EDlByuwUt4_wMSiinr8O7yiLtsEqewSDYFBy2dNC1xUfBkD9IDYO-gYD5NNh5DNeKyoM'
}

!function() {
  var tslib, IndexedDb = {}, detectBrowser = {}, AMPCommandEnum = {}, amp = {};
  tslib = function() {
    var __awaiter, __generator, __assign;
    return __awaiter = function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }, __generator = function(thisArg, body) {
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError('Generator is already executing.');
        for (;_; ) try {
          if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          switch (y = 0, t && (op = [ 2 & op[0], t.value ]), op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            return _.label++, {
              value: op[1],
              done: !1
            };

           case 5:
            _.label++, y = op[1], op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop(), _.trys.pop();
            continue;

           default:
            if (t = _.trys, !(t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1], t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2], _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop(), _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ], y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: !0
        };
      }
      var f, y, t, g, _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      };
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, 'function' == typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
    }, __assign = function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
      }
      return t;
    }, {
      __awaiter: __awaiter,
      __generator: __generator,
      __assign: __assign
    };
  }(), IndexedDb = function(exports, tslib_1) {
    function log(text) {
      0;
    }
    var ErrorCodes;
    !function(ErrorCodes) {
      ErrorCodes[ErrorCodes.DB_BLOCKED_ERR = 0] = 'DB_BLOCKED_ERR', ErrorCodes[ErrorCodes.DB_OPEN_ERR = 1] = 'DB_OPEN_ERR', 
      ErrorCodes[ErrorCodes.INDEXED_DB_NOT_SUPPORTED = 2] = 'INDEXED_DB_NOT_SUPPORTED', 
      ErrorCodes[ErrorCodes.DB_DELETE_ERR = 3] = 'DB_DELETE_ERR', ErrorCodes[ErrorCodes.RECORD_NOT_FOUND = 4] = 'RECORD_NOT_FOUND', 
      ErrorCodes[ErrorCodes.PUT_REQUEST_ERR = 5] = 'PUT_REQUEST_ERR', ErrorCodes[ErrorCodes.PUT_FAILED = 6] = 'PUT_FAILED';
    }(ErrorCodes || (ErrorCodes = {}));
    var IndexedDb = function() {
      function IndexedDb(databaseName, objectStores) {
        var _this = this;
        this.databaseName = databaseName, this.objectStores = objectStores, this.openAndGetDataBase = function() {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var err_1;
            return tslib_1.__generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                IndexedDb.isDatabaseOpen[this.databaseName] || (IndexedDb.isDatabaseOpen[this.databaseName] = this.openDatabase(this.databaseName)), 
                _a.label = 1;

               case 1:
                return _a.trys.push([ 1, 3, , 4 ]), [ 4, IndexedDb.isDatabaseOpen[this.databaseName] ];

               case 2:
                return _a.sent(), [ 3, 4 ];

               case 3:
                throw err_1 = _a.sent();

               case 4:
                return [ 2, this.database ];
              }
            });
          });
        }, this.onDatabaseUpgradeNeeded = function(event) {
          for (var db = event.target.result, _i = 0, _a = Object.keys(_this.objectStores); _i < _a.length; _i++) {
            var objectStoreName = _a[_i];
            db.createObjectStore(objectStoreName, {
              keyPath: _this.objectStores[objectStoreName]
            });
          }
        }, this.deleteDb = function() {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            var _this = this;
            return tslib_1.__generator(this, function(_a) {
              return [ 2, new Promise(function(resolve, reject) {
                var dbDeleteRequest = indexedDB.deleteDatabase(_this.databaseName);
                dbDeleteRequest.onerror = function(event) {
                  reject(ErrorCodes.DB_DELETE_ERR);
                }, dbDeleteRequest.onsuccess = function(event) {
                  resolve();
                };
              }) ];
            });
          });
        }, this.closeDb = function() {
          return tslib_1.__awaiter(_this, void 0, void 0, function() {
            return tslib_1.__generator(this, function(_a) {
              try {
                this.database.close();
              } catch (e) {}
              return IndexedDb.isDatabaseOpen[this.databaseName] = null, [ 2 ];
            });
          });
        }, indexedDB && 'object' == typeof indexedDB ? this.isIndexedDbSupported = !0 : this.isIndexedDbSupported = !1;
      }
      return IndexedDb.prototype.openDatabase = function(databaseName) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          var request = indexedDB.open(databaseName, 1);
          if (!request) return null;
          request.onerror = _this.onDatabaseOpenError.bind(_this, reject), request.onblocked = _this.onDatabaseOpenBlocked.bind(_this, reject), 
          request.onupgradeneeded = _this.onDatabaseUpgradeNeeded, request.onsuccess = function() {
            _this.database = request.result, _this.database.onerror = _this.onDatabaseError, 
            _this.database.onversionchange = _this.onDatabaseVersionChange, resolve(_this.database);
          };
        });
      }, IndexedDb.prototype.onDatabaseOpenError = function(reject, event) {
        event.preventDefault();
        var errorMessage = event.target.error.message;
        log('IndexedDb open error: ' + errorMessage), reject(ErrorCodes.DB_OPEN_ERR);
      }, IndexedDb.prototype.onDatabaseError = function(event) {
        log('IndexedDb error : ' + event.target.errorCode);
      }, IndexedDb.prototype.onDatabaseOpenBlocked = function(reject) {
        log('IndexedDb blocked'), reject(ErrorCodes.DB_BLOCKED_ERR);
      }, IndexedDb.prototype.onDatabaseVersionChange = function() {
        log('IndexedDb version changed');
      }, IndexedDb.prototype.get = function(table, key) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var err_2, _this = this;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!this.isIndexedDbSupported) throw ErrorCodes.INDEXED_DB_NOT_SUPPORTED;
              _a.label = 1;

             case 1:
              return _a.trys.push([ 1, 3, , 4 ]), [ 4, this.openAndGetDataBase() ];

             case 2:
              return _a.sent(), [ 3, 4 ];

             case 3:
              throw err_2 = _a.sent();

             case 4:
              return [ 2, new Promise(function(resolve, reject) {
                var transaction = _this.database.transaction(table), request = transaction.objectStore(table).get(key);
                request.onsuccess = function() {
                  resolve(request.result);
                }, request.onerror = function() {
                  log('IndexedDb - Record not found in DB'), reject(ErrorCodes.RECORD_NOT_FOUND);
                }, transaction.oncomplete = _this.closeDb, transaction.onerror = _this.closeDb, 
                transaction.onabort = _this.closeDb;
              }) ];
            }
          });
        });
      }, IndexedDb.prototype.put = function(table, record) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
          var err_3, err_4, _this = this;
          return tslib_1.__generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!this.isIndexedDbSupported) throw ErrorCodes.INDEXED_DB_NOT_SUPPORTED;
              _a.label = 1;

             case 1:
              return _a.trys.push([ 1, 3, , 4 ]), [ 4, this.deleteDb() ];

             case 2:
              return _a.sent(), [ 3, 4 ];

             case 3:
              throw err_3 = _a.sent();

             case 4:
              return _a.trys.push([ 4, 6, , 7 ]), [ 4, this.openAndGetDataBase() ];

             case 5:
              return _a.sent(), [ 3, 7 ];

             case 6:
              throw err_4 = _a.sent();

             case 7:
              return [ 2, new Promise(function(resolve, reject) {
                try {
                  var transaction = _this.database.transaction([ table ], 'readwrite'), request = transaction.objectStore(table).put(record);
                  request.onsuccess = function() {
                    log('IndexedDb insert success'), resolve();
                  }, request.onerror = function() {
                    log('IndexedDb insert failed'), reject(ErrorCodes.PUT_REQUEST_ERR);
                  }, transaction.oncomplete = _this.closeDb, transaction.onerror = _this.closeDb, 
                  transaction.onabort = _this.closeDb;
                } catch (e) {
                  log('IndexedDb insert failed'), reject(ErrorCodes.PUT_FAILED), _this.closeDb();
                }
              }) ];
            }
          });
        });
      }, IndexedDb.prototype.remove = function(table, key) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          try {
            var request = _this.database.transaction([ table ], 'readwrite').objectStore(table).delete(key);
            request.onsuccess = function() {
              log('IndexedDb remove success'), resolve();
            }, request.onerror = function() {
              log('IndexedDb remove failed'), reject();
            };
          } catch (e) {
            log('IndexedDb remove failed'), reject(e);
          }
        });
      }, IndexedDb.isDatabaseOpen = {}, IndexedDb;
    }();
    return IndexedDb;
  }(0, tslib), function(e, t) {
    'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define('bowser', [], t) : 'object' == typeof exports ? exports.bowser = t() : self.bowser = t();
  }(0, function() {
    return function(e) {
      function r(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
          i: n,
          l: !1,
          exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
      }
      var t = {};
      return r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: n
        });
      }, r.r = function(e) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Module'
        }), Object.defineProperty(e, '__esModule', {
          value: !0
        });
      }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, 'default', {
          enumerable: !0,
          value: e
        }), 2 & t && 'string' != typeof e) for (var i in e) r.d(n, i, function(t) {
          return e[t];
        }.bind(null, i));
        return n;
      }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
          return e.default;
        } : function() {
          return e;
        };
        return r.d(t, 'a', t), t;
      }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, r.p = '', r(r.s = 90);
    }({
      17: function(e, t, r) {
        'use strict';
        t.__esModule = !0, t.default = void 0;
        var n = r(18), i = function() {
          function e() {}
          return e.getFirstMatch = function(e, t) {
            var r = t.match(e);
            return r && r.length > 0 && r[1] || '';
          }, e.getSecondMatch = function(e, t) {
            var r = t.match(e);
            return r && r.length > 1 && r[2] || '';
          }, e.matchAndReturnConst = function(e, t, r) {
            if (e.test(t)) return r;
          }, e.getWindowsVersionName = function(e) {
            switch (e) {
             case 'NT':
              return 'NT';

             case 'XP':
              return 'XP';

             case 'NT 5.0':
              return '2000';

             case 'NT 5.1':
              return 'XP';

             case 'NT 5.2':
              return '2003';

             case 'NT 6.0':
              return 'Vista';

             case 'NT 6.1':
              return '7';

             case 'NT 6.2':
              return '8';

             case 'NT 6.3':
              return '8.1';

             case 'NT 10.0':
              return '10';

             default:
              return;
            }
          }, e.getMacOSVersionName = function(e) {
            var t = e.split('.').splice(0, 2).map(function(e) {
              return parseInt(e, 10) || 0;
            });
            if (t.push(0), 10 === t[0]) switch (t[1]) {
             case 5:
              return 'Leopard';

             case 6:
              return 'Snow Leopard';

             case 7:
              return 'Lion';

             case 8:
              return 'Mountain Lion';

             case 9:
              return 'Mavericks';

             case 10:
              return 'Yosemite';

             case 11:
              return 'El Capitan';

             case 12:
              return 'Sierra';

             case 13:
              return 'High Sierra';

             case 14:
              return 'Mojave';

             case 15:
              return 'Catalina';

             default:
              return;
            }
          }, e.getAndroidVersionName = function(e) {
            var t = e.split('.').splice(0, 2).map(function(e) {
              return parseInt(e, 10) || 0;
            });
            if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? 'Cupcake' : 1 === t[0] && t[1] >= 6 ? 'Donut' : 2 === t[0] && t[1] < 2 ? 'Eclair' : 2 === t[0] && 2 === t[1] ? 'Froyo' : 2 === t[0] && t[1] > 2 ? 'Gingerbread' : 3 === t[0] ? 'Honeycomb' : 4 === t[0] && t[1] < 1 ? 'Ice Cream Sandwich' : 4 === t[0] && t[1] < 4 ? 'Jelly Bean' : 4 === t[0] && t[1] >= 4 ? 'KitKat' : 5 === t[0] ? 'Lollipop' : 6 === t[0] ? 'Marshmallow' : 7 === t[0] ? 'Nougat' : 8 === t[0] ? 'Oreo' : 9 === t[0] ? 'Pie' : void 0;
          }, e.getVersionPrecision = function(e) {
            return e.split('.').length;
          }, e.compareVersions = function(t, r, n) {
            void 0 === n && (n = !1);
            var i = e.getVersionPrecision(t), s = e.getVersionPrecision(r), o = Math.max(i, s), a = 0, u = e.map([ t, r ], function(t) {
              var r = o - e.getVersionPrecision(t), n = t + new Array(r + 1).join('.0');
              return e.map(n.split('.'), function(e) {
                return new Array(20 - e.length).join('0') + e;
              }).reverse();
            });
            for (n && (a = o - Math.min(i, s)), o -= 1; o >= a; ) {
              if (u[0][o] > u[1][o]) return 1;
              if (u[0][o] === u[1][o]) {
                if (o === a) return 0;
                o -= 1;
              } else if (u[0][o] < u[1][o]) return -1;
            }
          }, e.map = function(e, t) {
            var r, n = [];
            if (Array.prototype.map) return Array.prototype.map.call(e, t);
            for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
            return n;
          }, e.find = function(e, t) {
            var r, n;
            if (Array.prototype.find) return Array.prototype.find.call(e, t);
            for (r = 0, n = e.length; r < n; r += 1) {
              var i = e[r];
              if (t(i, r)) return i;
            }
          }, e.assign = function(e) {
            for (var t, r, n = e, i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) s[o - 1] = arguments[o];
            if (Object.assign) return Object.assign.apply(Object, [ e ].concat(s));
            var a = function() {
              var e = s[t];
              'object' == typeof e && null !== e && Object.keys(e).forEach(function(t) {
                n[t] = e[t];
              });
            };
            for (t = 0, r = s.length; t < r; t += 1) a();
            return e;
          }, e.getBrowserAlias = function(e) {
            return n.BROWSER_ALIASES_MAP[e];
          }, e.getBrowserTypeByAlias = function(e) {
            return n.BROWSER_MAP[e] || '';
          }, e;
        }();
        t.default = i, e.exports = t.default;
      },
      18: function(e, t, r) {
        'use strict';
        t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0, 
        t.BROWSER_ALIASES_MAP = {
          'Amazon Silk': 'amazon_silk',
          'Android Browser': 'android',
          Bada: 'bada',
          BlackBerry: 'blackberry',
          Chrome: 'chrome',
          Chromium: 'chromium',
          Electron: 'electron',
          Epiphany: 'epiphany',
          Firefox: 'firefox',
          Focus: 'focus',
          Generic: 'generic',
          'Google Search': 'google_search',
          Googlebot: 'googlebot',
          'Internet Explorer': 'ie',
          'K-Meleon': 'k_meleon',
          Maxthon: 'maxthon',
          'Microsoft Edge': 'edge',
          'MZ Browser': 'mz',
          'NAVER Whale Browser': 'naver',
          Opera: 'opera',
          'Opera Coast': 'opera_coast',
          PhantomJS: 'phantomjs',
          Puffin: 'puffin',
          QupZilla: 'qupzilla',
          QQ: 'qq',
          QQLite: 'qqlite',
          Safari: 'safari',
          Sailfish: 'sailfish',
          'Samsung Internet for Android': 'samsung_internet',
          SeaMonkey: 'seamonkey',
          Sleipnir: 'sleipnir',
          Swing: 'swing',
          Tizen: 'tizen',
          'UC Browser': 'uc',
          Vivaldi: 'vivaldi',
          'WebOS Browser': 'webos',
          WeChat: 'wechat',
          'Yandex Browser': 'yandex',
          Roku: 'roku'
        }, t.BROWSER_MAP = {
          amazon_silk: 'Amazon Silk',
          android: 'Android Browser',
          bada: 'Bada',
          blackberry: 'BlackBerry',
          chrome: 'Chrome',
          chromium: 'Chromium',
          electron: 'Electron',
          epiphany: 'Epiphany',
          firefox: 'Firefox',
          focus: 'Focus',
          generic: 'Generic',
          googlebot: 'Googlebot',
          google_search: 'Google Search',
          ie: 'Internet Explorer',
          k_meleon: 'K-Meleon',
          maxthon: 'Maxthon',
          edge: 'Microsoft Edge',
          mz: 'MZ Browser',
          naver: 'NAVER Whale Browser',
          opera: 'Opera',
          opera_coast: 'Opera Coast',
          phantomjs: 'PhantomJS',
          puffin: 'Puffin',
          qupzilla: 'QupZilla',
          qq: 'QQ Browser',
          qqlite: 'QQ Browser Lite',
          safari: 'Safari',
          sailfish: 'Sailfish',
          samsung_internet: 'Samsung Internet for Android',
          seamonkey: 'SeaMonkey',
          sleipnir: 'Sleipnir',
          swing: 'Swing',
          tizen: 'Tizen',
          uc: 'UC Browser',
          vivaldi: 'Vivaldi',
          webos: 'WebOS Browser',
          wechat: 'WeChat',
          yandex: 'Yandex Browser'
        }, t.PLATFORMS_MAP = {
          tablet: 'tablet',
          mobile: 'mobile',
          desktop: 'desktop',
          tv: 'tv'
        }, t.OS_MAP = {
          WindowsPhone: 'Windows Phone',
          Windows: 'Windows',
          MacOS: 'macOS',
          iOS: 'iOS',
          Android: 'Android',
          WebOS: 'WebOS',
          BlackBerry: 'BlackBerry',
          Bada: 'Bada',
          Tizen: 'Tizen',
          Linux: 'Linux',
          ChromeOS: 'Chrome OS',
          PlayStation4: 'PlayStation 4',
          Roku: 'Roku'
        }, t.ENGINE_MAP = {
          EdgeHTML: 'EdgeHTML',
          Blink: 'Blink',
          Trident: 'Trident',
          Presto: 'Presto',
          Gecko: 'Gecko',
          WebKit: 'WebKit'
        };
      },
      90: function(e, t, r) {
        'use strict';
        function o(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
          }
        }
        t.__esModule = !0, t.default = void 0;
        var n, i = (n = r(91)) && n.__esModule ? n : {
          default: n
        }, s = r(18), a = function() {
          function e() {}
          var t, r, n;
          return e.getParser = function(e, t) {
            if (void 0 === t && (t = !1), 'string' != typeof e) throw new Error('UserAgent should be a string');
            return new i.default(e, t);
          }, e.parse = function(e) {
            return new i.default(e).getResult();
          }, t = e, n = [ {
            key: 'BROWSER_MAP',
            get: function() {
              return s.BROWSER_MAP;
            }
          }, {
            key: 'ENGINE_MAP',
            get: function() {
              return s.ENGINE_MAP;
            }
          }, {
            key: 'OS_MAP',
            get: function() {
              return s.OS_MAP;
            }
          }, {
            key: 'PLATFORMS_MAP',
            get: function() {
              return s.PLATFORMS_MAP;
            }
          } ], (r = null) && o(t.prototype, r), n && o(t, n), e;
        }();
        t.default = a, e.exports = t.default;
      },
      91: function(e, t, r) {
        'use strict';
        function u(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }
        t.__esModule = !0, t.default = void 0;
        var n = u(r(92)), i = u(r(93)), s = u(r(94)), o = u(r(95)), a = u(r(17)), d = function() {
          function e(e, t) {
            if (void 0 === t && (t = !1), null == e || '' === e) throw new Error('UserAgent parameter can\'t be empty');
            this._ua = e, this.parsedResult = {}, !0 !== t && this.parse();
          }
          var t = e.prototype;
          return t.getUA = function() {
            return this._ua;
          }, t.test = function(e) {
            return e.test(this._ua);
          }, t.parseBrowser = function() {
            var e = this;
            this.parsedResult.browser = {};
            var t = a.default.find(n.default, function(t) {
              if ('function' == typeof t.test) return t.test(e);
              if (t.test instanceof Array) return t.test.some(function(t) {
                return e.test(t);
              });
              throw new Error('Browser\'s test function is not valid');
            });
            return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser;
          }, t.getBrowser = function() {
            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
          }, t.getBrowserName = function(e) {
            return e ? String(this.getBrowser().name).toLowerCase() || '' : this.getBrowser().name || '';
          }, t.getBrowserVersion = function() {
            return this.getBrowser().version;
          }, t.getOS = function() {
            return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
          }, t.parseOS = function() {
            var e = this;
            this.parsedResult.os = {};
            var t = a.default.find(i.default, function(t) {
              if ('function' == typeof t.test) return t.test(e);
              if (t.test instanceof Array) return t.test.some(function(t) {
                return e.test(t);
              });
              throw new Error('Browser\'s test function is not valid');
            });
            return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os;
          }, t.getOSName = function(e) {
            var t = this.getOS().name;
            return e ? String(t).toLowerCase() || '' : t || '';
          }, t.getOSVersion = function() {
            return this.getOS().version;
          }, t.getPlatform = function() {
            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
          }, t.getPlatformType = function(e) {
            void 0 === e && (e = !1);
            var t = this.getPlatform().type;
            return e ? String(t).toLowerCase() || '' : t || '';
          }, t.parsePlatform = function() {
            var e = this;
            this.parsedResult.platform = {};
            var t = a.default.find(s.default, function(t) {
              if ('function' == typeof t.test) return t.test(e);
              if (t.test instanceof Array) return t.test.some(function(t) {
                return e.test(t);
              });
              throw new Error('Browser\'s test function is not valid');
            });
            return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform;
          }, t.getEngine = function() {
            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
          }, t.getEngineName = function(e) {
            return e ? String(this.getEngine().name).toLowerCase() || '' : this.getEngine().name || '';
          }, t.parseEngine = function() {
            var e = this;
            this.parsedResult.engine = {};
            var t = a.default.find(o.default, function(t) {
              if ('function' == typeof t.test) return t.test(e);
              if (t.test instanceof Array) return t.test.some(function(t) {
                return e.test(t);
              });
              throw new Error('Browser\'s test function is not valid');
            });
            return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine;
          }, t.parse = function() {
            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), 
            this;
          }, t.getResult = function() {
            return a.default.assign({}, this.parsedResult);
          }, t.satisfies = function(e) {
            var t = this, r = {}, n = 0, i = {}, s = 0;
            if (Object.keys(e).forEach(function(t) {
              var o = e[t];
              'string' == typeof o ? (i[t] = o, s += 1) : 'object' == typeof o && (r[t] = o, n += 1);
            }), n > 0) {
              var o = Object.keys(r), u = a.default.find(o, function(e) {
                return t.isOS(e);
              });
              if (u) {
                var d = this.satisfies(r[u]);
                if (void 0 !== d) return d;
              }
              var c = a.default.find(o, function(e) {
                return t.isPlatform(e);
              });
              if (c) {
                var f = this.satisfies(r[c]);
                if (void 0 !== f) return f;
              }
            }
            if (s > 0) {
              var l = Object.keys(i), h = a.default.find(l, function(e) {
                return t.isBrowser(e, !0);
              });
              if (void 0 !== h) return this.compareVersion(i[h]);
            }
          }, t.isBrowser = function(e, t) {
            void 0 === t && (t = !1);
            var r = this.getBrowserName().toLowerCase(), n = e.toLowerCase(), i = a.default.getBrowserTypeByAlias(n);
            return t && i && (n = i.toLowerCase()), n === r;
          }, t.compareVersion = function(e) {
            var t = [ 0 ], r = e, n = !1, i = this.getBrowserVersion();
            if ('string' == typeof i) return '>' === e[0] || '<' === e[0] ? (r = e.substr(1), 
            '=' === e[1] ? (n = !0, r = e.substr(2)) : t = [], '>' === e[0] ? t.push(1) : t.push(-1)) : '=' === e[0] ? r = e.substr(1) : '~' === e[0] && (n = !0, 
            r = e.substr(1)), t.indexOf(a.default.compareVersions(i, r, n)) > -1;
          }, t.isOS = function(e) {
            return this.getOSName(!0) === String(e).toLowerCase();
          }, t.isPlatform = function(e) {
            return this.getPlatformType(!0) === String(e).toLowerCase();
          }, t.isEngine = function(e) {
            return this.getEngineName(!0) === String(e).toLowerCase();
          }, t.is = function(e) {
            return this.isBrowser(e) || this.isOS(e) || this.isPlatform(e);
          }, t.some = function(e) {
            var t = this;
            return void 0 === e && (e = []), e.some(function(e) {
              return t.is(e);
            });
          }, e;
        }();
        t.default = d, e.exports = t.default;
      },
      92: function(e, t, r) {
        'use strict';
        t.__esModule = !0, t.default = void 0;
        var n, i = (n = r(17)) && n.__esModule ? n : {
          default: n
        }, s = /version\/(\d+(\.?_?\d+)+)/i, o = [ {
          test: [ /googlebot/i ],
          describe: function(e) {
            var t = {
              name: 'Googlebot'
            }, r = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(s, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /opera/i ],
          describe: function(e) {
            var t = {
              name: 'Opera'
            }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /opr\/|opios/i ],
          describe: function(e) {
            var t = {
              name: 'Opera'
            }, r = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(s, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /SamsungBrowser/i ],
          describe: function(e) {
            var t = {
              name: 'Samsung Internet for Android'
            }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /Whale/i ],
          describe: function(e) {
            var t = {
              name: 'NAVER Whale Browser'
            }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /MZBrowser/i ],
          describe: function(e) {
            var t = {
              name: 'MZ Browser'
            }, r = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /focus/i ],
          describe: function(e) {
            var t = {
              name: 'Focus'
            }, r = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /swing/i ],
          describe: function(e) {
            var t = {
              name: 'Swing'
            }, r = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /coast/i ],
          describe: function(e) {
            var t = {
              name: 'Opera Coast'
            }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /yabrowser/i ],
          describe: function(e) {
            var t = {
              name: 'Yandex Browser'
            }, r = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /ucbrowser/i ],
          describe: function(e) {
            var t = {
              name: 'UC Browser'
            }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /Maxthon|mxios/i ],
          describe: function(e) {
            var t = {
              name: 'Maxthon'
            }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /epiphany/i ],
          describe: function(e) {
            var t = {
              name: 'Epiphany'
            }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /puffin/i ],
          describe: function(e) {
            var t = {
              name: 'Puffin'
            }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /sleipnir/i ],
          describe: function(e) {
            var t = {
              name: 'Sleipnir'
            }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /k-meleon/i ],
          describe: function(e) {
            var t = {
              name: 'K-Meleon'
            }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /micromessenger/i ],
          describe: function(e) {
            var t = {
              name: 'WeChat'
            }, r = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /qqbrowser/i ],
          describe: function(e) {
            var t = {
              name: /qqbrowserlite/i.test(e) ? 'QQ Browser Lite' : 'QQ Browser'
            }, r = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /msie|trident/i ],
          describe: function(e) {
            var t = {
              name: 'Internet Explorer'
            }, r = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /\sedg\//i ],
          describe: function(e) {
            var t = {
              name: 'Microsoft Edge'
            }, r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /edg([ea]|ios)/i ],
          describe: function(e) {
            var t = {
              name: 'Microsoft Edge'
            }, r = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /vivaldi/i ],
          describe: function(e) {
            var t = {
              name: 'Vivaldi'
            }, r = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /seamonkey/i ],
          describe: function(e) {
            var t = {
              name: 'SeaMonkey'
            }, r = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /sailfish/i ],
          describe: function(e) {
            var t = {
              name: 'Sailfish'
            }, r = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /silk/i ],
          describe: function(e) {
            var t = {
              name: 'Amazon Silk'
            }, r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /phantom/i ],
          describe: function(e) {
            var t = {
              name: 'PhantomJS'
            }, r = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /slimerjs/i ],
          describe: function(e) {
            var t = {
              name: 'SlimerJS'
            }, r = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /blackberry|\bbb\d+/i, /rim\stablet/i ],
          describe: function(e) {
            var t = {
              name: 'BlackBerry'
            }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /(web|hpw)[o0]s/i ],
          describe: function(e) {
            var t = {
              name: 'WebOS Browser'
            }, r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /bada/i ],
          describe: function(e) {
            var t = {
              name: 'Bada'
            }, r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /tizen/i ],
          describe: function(e) {
            var t = {
              name: 'Tizen'
            }, r = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /qupzilla/i ],
          describe: function(e) {
            var t = {
              name: 'QupZilla'
            }, r = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /firefox|iceweasel|fxios/i ],
          describe: function(e) {
            var t = {
              name: 'Firefox'
            }, r = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /electron/i ],
          describe: function(e) {
            var t = {
              name: 'Electron'
            }, r = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /chromium/i ],
          describe: function(e) {
            var t = {
              name: 'Chromium'
            }, r = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /chrome|crios|crmo/i ],
          describe: function(e) {
            var t = {
              name: 'Chrome'
            }, r = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /GSA/i ],
          describe: function(e) {
            var t = {
              name: 'Google Search'
            }, r = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: function(e) {
            var t = !e.test(/like android/i), r = e.test(/android/i);
            return t && r;
          },
          describe: function(e) {
            var t = {
              name: 'Android Browser'
            }, r = i.default.getFirstMatch(s, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /playstation 4/i ],
          describe: function(e) {
            var t = {
              name: 'PlayStation 4'
            }, r = i.default.getFirstMatch(s, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /safari|applewebkit/i ],
          describe: function(e) {
            var t = {
              name: 'Safari'
            }, r = i.default.getFirstMatch(s, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /.*/i ],
          describe: function(e) {
            var t = -1 !== e.search('\\(') ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
            return {
              name: i.default.getFirstMatch(t, e),
              version: i.default.getSecondMatch(t, e)
            };
          }
        } ];
        t.default = o, e.exports = t.default;
      },
      93: function(e, t, r) {
        'use strict';
        t.__esModule = !0, t.default = void 0;
        var n, i = (n = r(17)) && n.__esModule ? n : {
          default: n
        }, s = r(18), o = [ {
          test: [ /Roku\/DVP/ ],
          describe: function(e) {
            var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
            return {
              name: s.OS_MAP.Roku,
              version: t
            };
          }
        }, {
          test: [ /windows phone/i ],
          describe: function(e) {
            var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
            return {
              name: s.OS_MAP.WindowsPhone,
              version: t
            };
          }
        }, {
          test: [ /windows /i ],
          describe: function(e) {
            var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e), r = i.default.getWindowsVersionName(t);
            return {
              name: s.OS_MAP.Windows,
              version: t,
              versionName: r
            };
          }
        }, {
          test: [ /Macintosh(.*?) FxiOS(.*?) Version\// ],
          describe: function(e) {
            var t = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
            return {
              name: s.OS_MAP.iOS,
              version: t
            };
          }
        }, {
          test: [ /macintosh/i ],
          describe: function(e) {
            var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, '.'), r = i.default.getMacOSVersionName(t), n = {
              name: s.OS_MAP.MacOS,
              version: t
            };
            return r && (n.versionName = r), n;
          }
        }, {
          test: [ /(ipod|iphone|ipad)/i ],
          describe: function(e) {
            var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, '.');
            return {
              name: s.OS_MAP.iOS,
              version: t
            };
          }
        }, {
          test: function(e) {
            var t = !e.test(/like android/i), r = e.test(/android/i);
            return t && r;
          },
          describe: function(e) {
            var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e), r = i.default.getAndroidVersionName(t), n = {
              name: s.OS_MAP.Android,
              version: t
            };
            return r && (n.versionName = r), n;
          }
        }, {
          test: [ /(web|hpw)[o0]s/i ],
          describe: function(e) {
            var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e), r = {
              name: s.OS_MAP.WebOS
            };
            return t && t.length && (r.version = t), r;
          }
        }, {
          test: [ /blackberry|\bbb\d+/i, /rim\stablet/i ],
          describe: function(e) {
            var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
            return {
              name: s.OS_MAP.BlackBerry,
              version: t
            };
          }
        }, {
          test: [ /bada/i ],
          describe: function(e) {
            var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
            return {
              name: s.OS_MAP.Bada,
              version: t
            };
          }
        }, {
          test: [ /tizen/i ],
          describe: function(e) {
            var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
            return {
              name: s.OS_MAP.Tizen,
              version: t
            };
          }
        }, {
          test: [ /linux/i ],
          describe: function() {
            return {
              name: s.OS_MAP.Linux
            };
          }
        }, {
          test: [ /CrOS/ ],
          describe: function() {
            return {
              name: s.OS_MAP.ChromeOS
            };
          }
        }, {
          test: [ /PlayStation 4/ ],
          describe: function(e) {
            var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
            return {
              name: s.OS_MAP.PlayStation4,
              version: t
            };
          }
        } ];
        t.default = o, e.exports = t.default;
      },
      94: function(e, t, r) {
        'use strict';
        t.__esModule = !0, t.default = void 0;
        var n, i = (n = r(17)) && n.__esModule ? n : {
          default: n
        }, s = r(18), o = [ {
          test: [ /googlebot/i ],
          describe: function() {
            return {
              type: 'bot',
              vendor: 'Google'
            };
          }
        }, {
          test: [ /huawei/i ],
          describe: function(e) {
            var t = i.default.getFirstMatch(/(can-l01)/i, e) && 'Nova', r = {
              type: s.PLATFORMS_MAP.mobile,
              vendor: 'Huawei'
            };
            return t && (r.model = t), r;
          }
        }, {
          test: [ /nexus\s*(?:7|8|9|10).*/i ],
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.tablet,
              vendor: 'Nexus'
            };
          }
        }, {
          test: [ /ipad/i ],
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.tablet,
              vendor: 'Apple',
              model: 'iPad'
            };
          }
        }, {
          test: [ /Macintosh(.*?) FxiOS(.*?) Version\// ],
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.tablet,
              vendor: 'Apple',
              model: 'iPad'
            };
          }
        }, {
          test: [ /kftt build/i ],
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.tablet,
              vendor: 'Amazon',
              model: 'Kindle Fire HD 7'
            };
          }
        }, {
          test: [ /silk/i ],
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.tablet,
              vendor: 'Amazon'
            };
          }
        }, {
          test: [ /tablet(?! pc)/i ],
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.tablet
            };
          }
        }, {
          test: function(e) {
            var t = e.test(/ipod|iphone/i), r = e.test(/like (ipod|iphone)/i);
            return t && !r;
          },
          describe: function(e) {
            var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
            return {
              type: s.PLATFORMS_MAP.mobile,
              vendor: 'Apple',
              model: t
            };
          }
        }, {
          test: [ /nexus\s*[0-6].*/i, /galaxy nexus/i ],
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.mobile,
              vendor: 'Nexus'
            };
          }
        }, {
          test: [ /[^-]mobi/i ],
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.mobile
            };
          }
        }, {
          test: function(e) {
            return 'blackberry' === e.getBrowserName(!0);
          },
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.mobile,
              vendor: 'BlackBerry'
            };
          }
        }, {
          test: function(e) {
            return 'bada' === e.getBrowserName(!0);
          },
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.mobile
            };
          }
        }, {
          test: function(e) {
            return 'windows phone' === e.getBrowserName();
          },
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.mobile,
              vendor: 'Microsoft'
            };
          }
        }, {
          test: function(e) {
            var t = Number(String(e.getOSVersion()).split('.')[0]);
            return 'android' === e.getOSName(!0) && t >= 3;
          },
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.tablet
            };
          }
        }, {
          test: function(e) {
            return 'android' === e.getOSName(!0);
          },
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.mobile
            };
          }
        }, {
          test: function(e) {
            return 'macos' === e.getOSName(!0);
          },
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.desktop,
              vendor: 'Apple'
            };
          }
        }, {
          test: function(e) {
            return 'windows' === e.getOSName(!0);
          },
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.desktop
            };
          }
        }, {
          test: function(e) {
            return 'linux' === e.getOSName(!0);
          },
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.desktop
            };
          }
        }, {
          test: function(e) {
            return 'playstation 4' === e.getOSName(!0);
          },
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.tv
            };
          }
        }, {
          test: function(e) {
            return 'roku' === e.getOSName(!0);
          },
          describe: function() {
            return {
              type: s.PLATFORMS_MAP.tv
            };
          }
        } ];
        t.default = o, e.exports = t.default;
      },
      95: function(e, t, r) {
        'use strict';
        t.__esModule = !0, t.default = void 0;
        var n, i = (n = r(17)) && n.__esModule ? n : {
          default: n
        }, s = r(18), o = [ {
          test: function(e) {
            return 'microsoft edge' === e.getBrowserName(!0);
          },
          describe: function(e) {
            if (/\sedg\//i.test(e)) return {
              name: s.ENGINE_MAP.Blink
            };
            var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
            return {
              name: s.ENGINE_MAP.EdgeHTML,
              version: t
            };
          }
        }, {
          test: [ /trident/i ],
          describe: function(e) {
            var t = {
              name: s.ENGINE_MAP.Trident
            }, r = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: function(e) {
            return e.test(/presto/i);
          },
          describe: function(e) {
            var t = {
              name: s.ENGINE_MAP.Presto
            }, r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: function(e) {
            var t = e.test(/gecko/i), r = e.test(/like gecko/i);
            return t && !r;
          },
          describe: function(e) {
            var t = {
              name: s.ENGINE_MAP.Gecko
            }, r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        }, {
          test: [ /(apple)?webkit\/537\.36/i ],
          describe: function() {
            return {
              name: s.ENGINE_MAP.Blink
            };
          }
        }, {
          test: [ /(apple)?webkit/i ],
          describe: function(e) {
            var t = {
              name: s.ENGINE_MAP.WebKit
            }, r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
            return r && (t.version = r), t;
          }
        } ];
        t.default = o, e.exports = t.default;
      }
    });
  }), detectBrowser = function(exports, Bowser) {
    var detectBrowser = {
      browser: Bowser.getParser(navigator.userAgent),
      name: function() {
        var browserName = this.browser.getBrowserName().toLowerCase();
        return 'microsoft edge' === browserName && (browserName = 'edge'), browserName;
      },
      device: function() {
        var deviceType = this.browser.getPlatformType(!0);
        return 'desktop' === deviceType ? deviceType : 'mobile';
      },
      version: function() {
        return parseInt(this.browser.getBrowserVersion(), 10);
      },
      os: function() {
        return this.browser.getOS().name;
      },
      osVersion: function() {
        return this.browser.getOS().version;
      },
      isOS: function() {
        return 'iOS' === this.os();
      },
      usingUserGesture: function() {
        return this.browser.satisfies({
          macos: {
            safari: '>=12.1'
          },
          firefox: '>=72',
          chrome: '>=80'
        });
      },
      isQuietNotification: function() {
        return this.browser.satisfies({
          firefox: '>=72',
          chrome: '>=80'
        });
      },
      isMacOSCatalina: function() {
        return 'macOS' === this.os() && this.osVersion().startsWith('10.15');
      }
    };
    return detectBrowser;
  }(0, bowser), AMPCommandEnum = function(exports) {
    Object.defineProperty(exports, '__esModule', {
      value: !0
    });
    var AMPCommandEnum = {
      AMP_SUBSCRIPTION_STATE: 'amp-web-push-subscription-state',
      AMP_SUBSCRIBE: 'amp-web-push-subscribe',
      AMP_UNSUBSCRIBE: 'amp-web-push-unsubscribe'
    };
    return exports.default = AMPCommandEnum, exports;
  }(AMPCommandEnum), amp = function(exports, detectBrowser, tslib_1, AMPCommandEnum_1) {
    var amp = {
      subscriptionEndPoint: _wingifyPush.pcDomainUrl + '/syncSubscriptionAction.php',
      subscriberId: '',
      init: function(config) {
        this.config = config, this.listenToPostMessage();
      },
      onMessageReceivedSubscriptionState: function() {
        var _this = this, retrievedPushSubscription = null;
        self.registration.pushManager.getSubscription().then(function(pushSubscription) {
          return retrievedPushSubscription = pushSubscription, pushSubscription ? self.registration.pushManager.permissionState(pushSubscription.options) : null;
        }).then(function(permissionStateOrNull) {
          if (null == permissionStateOrNull) _this.broadcastReply(AMPCommandEnum_1.default.AMP_SUBSCRIPTION_STATE, !1); else {
            var isSubscribed = !!retrievedPushSubscription && 'granted' === permissionStateOrNull;
            _this.broadcastReply(AMPCommandEnum_1.default.AMP_SUBSCRIPTION_STATE, isSubscribed);
          }
        });
      },
      generateSubscriberId: function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = 16 * Math.random() | 0, v = 'x' == c ? r : 3 & r | 8;
          return v.toString(16);
        }).replace(/-/g, '');
      },
      makeQueryString: function(params) {
        var queryString = '';
        for (var param in params) params.hasOwnProperty(param) && (queryString += '&' + param + '=' + params[param]);
        return queryString.substr(1);
      },
      parseSubscription: function(subscription) {
        if (subscription && subscription.endpoint) {
          var endpoint = subscription.endpoint.split('/'), subscriptionId = endpoint.pop(), subscriptionEndPoint = endpoint.join('/');
          return {
            subscriptionId: subscriptionId,
            subscriptionEndPoint: subscriptionEndPoint,
            subscription: JSON.stringify(subscription)
          };
        }
      },
      generateSyncSubscriptionParameters: function(subscription, action) {
        return void 0 === action && (action = 'insert'), this.subscriberId = this.subscriberId || this.generateSubscriberId(), 
        this.subscriberId = this.subscriberId.slice(0, -3) + 'amp', 'unsubscribe-ui' === action && (this.subscriberId = ''), 
        this.makeQueryString(tslib_1.__assign({
          hash: this.config.hash,
          origin: this.config.origin,
          vapidPublicKey: this.config.vapidPublicKey,
          browserType: detectBrowser.name(),
          subscriberId: this.subscriberId,
          action: action
        }, this.parseSubscription(subscription)));
      },
      syncSubscription: function(subscription, action) {
        void 0 === action && (action = 'insert'), fetch(this.subscriptionEndPoint + '?' + this.generateSyncSubscriptionParameters(subscription, action), {
          mode: 'no-cors'
        }).then(function() {
          console.info('Subscription Status Updated');
        });
      },
      onMessageReceivedSubscribe: function() {
        var _this = this;
        self.registration.pushManager.subscribe({
          userVisibleOnly: !0,
          applicationServerKey: this.urlBase64ToUint8Array(this.config.vapidPublicKey)
        }).then(function(subscription) {
          _this.syncSubscription(subscription), _this.broadcastReply(AMPCommandEnum_1.default.AMP_SUBSCRIBE, null);
        });
      },
      onMessageReceivedUnsubscribe: function() {
        var _this = this;
        self.registration.pushManager.getSubscription().then(function(subscription) {
          return _this.subscription = subscription, subscription.unsubscribe();
        }).then(function() {
          _this.syncSubscription(_this.subscription, 'unsubscribe-ui'), _this.broadcastReply(AMPCommandEnum_1.default.AMP_UNSUBSCRIBE, null);
        });
      },
      broadcastReply: function(command, payload) {
        self.clients.matchAll().then(function(clients) {
          for (var i = 0; i < clients.length; i++) {
            var client = clients[i];
            client.postMessage({
              command: command,
              payload: payload
            });
          }
        });
      },
      listenToPostMessage: function() {
        var _this = this;
        self.addEventListener('message', function(event) {
          var command = event.data.command;
          switch (command) {
           case AMPCommandEnum_1.default.AMP_SUBSCRIPTION_STATE:
            _this.onMessageReceivedSubscriptionState();
            break;

           case AMPCommandEnum_1.default.AMP_SUBSCRIBE:
            _this.onMessageReceivedSubscribe();
            break;

           case AMPCommandEnum_1.default.AMP_UNSUBSCRIBE:
            _this.onMessageReceivedUnsubscribe();
            break;
          }
        });
      },
      urlBase64ToUint8Array: function(base64String) {
        for (var padding = '='.repeat((4 - base64String.length % 4) % 4), base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/'), rawData = atob(base64), outputArray = new Uint8Array(rawData.length), i = 0; i < rawData.length; ++i) outputArray[i] = rawData.charCodeAt(i);
        return outputArray;
      }
    };
    return amp;
  }(0, detectBrowser, tslib, AMPCommandEnum), function(IndexedDb, detectBrowser, amp) {
    function syncChromeEncryptionKeys() {
      self.registration.pushManager.getSubscription().then(function(subscription) {
        if (subscription) {
          var currentSubscriptionString = JSON.stringify(subscription);
          hasSubscriptionChanged(currentSubscriptionString).then(function(errorCode) {
            errorCode || (errorCode = IndexedDbErrorCodes.DEFAULT_ERROR_CODE);
            var subscriptionId = splitEndPointSubscription(subscription), subscriptionJson = JSON.stringify(subscription), subscriptionObj = JSON.parse(subscriptionJson), subscriberTimeZone = '', subscriberTimeZoneOffset = '', subscriberServiceWorkerUrl = '';
            try {
              subscriberTimeZoneOffset = new Date().getTimezoneOffset().toString().replace('+', '');
              try {
                subscriberServiceWorkerUrl = encodeURIComponent(self.registration.active.scriptURL);
              } catch (e) {
                subscriberServiceWorkerUrl = encodeURIComponent(self.location.href);
              }
            } catch (err) {}
            var syncChromeUrl = encodeURI(_wingifyPush.trackingUrl + '/v3/syncChromeEncryptionKey.php?hash=' + _wingifyPush.hash + '&subscriptionId=' + subscriptionId + '&subscription=' + subscriptionJson + '&subscriberTimeZone=' + subscriberTimeZone + '&subscriberTimeZoneOffset=' + subscriberTimeZoneOffset + '&subscriberServiceWorkerUrl=' + subscriberServiceWorkerUrl + '&version=' + self.version + '&error=' + errorCode);
            if (subscriptionObj.keys.auth && subscriptionObj.keys.p256dh) return fetch(syncChromeUrl).then(function(response) {
              if (200 !== response.status) throw new Error();
              return response.json();
            }).then(function(json) {
              if ('success' === json.status) {
                var db = new IndexedDb('pushcrewDB', {
                  subscriptionInfo: 'identifier'
                });
                db.put('subscriptionInfo', {
                  subscriptionString: currentSubscriptionString,
                  timestamp: Date.now(),
                  identifier: 'subscription'
                }).catch(function() {});
              }
            }).catch(function(err) {});
          });
        }
      });
    }
    function hasSubscriptionChanged(currentSubscription) {
      return new Promise(function(resolve) {
        var resolveTimer = self.setTimeout(resolve.bind(self, IndexedDbErrorCodes.INDEXED_DB_NOT_RESOLVED), 2e3), db = new IndexedDb('pushcrewDB', {
          subscriptionInfo: 'identifier'
        });
        try {
          db.get('subscriptionInfo', 'subscription').then(function(oldSubscription) {
            !oldSubscription || oldSubscription && oldSubscription.subscriptionString !== currentSubscription ? resolve(IndexedDbErrorCodes.SUBSCRIPTION_CHANGED) : oldSubscription.subscriptionString === currentSubscription && self.clearTimeout(resolveTimer);
          }).catch(function(err) {
            resolveWithErrorCode(resolve, err);
          });
        } catch (err) {
          resolveWithErrorCode(resolve, err);
        }
      });
    }
    function resolveWithErrorCode(resolve, err) {
      var error = err;
      (err instanceof Error || err instanceof TypeError) && (error = err.message), resolve(error);
    }
    self.version = '14';
    var IndexedDbErrorCodes = {
      INDEXED_DB_NOT_RESOLVED: 10,
      SUBSCRIPTION_CHANGED: 8,
      DEFAULT_ERROR_CODE: 9
    }, splitEndPointSubscription = function(subscriptionDetails) {
      if (subscriptionDetails) {
        if (subscriptionDetails.subscriptionId) return subscriptionDetails.subscriptionId;
        if ('edge' === detectBrowser.name()) return encodeURIComponent(subscriptionDetails.endpoint);
        var endpointURL, offset, endpoint = subscriptionDetails.endpoint;
        return offset = endpoint.lastIndexOf('/'), endpointURL = endpoint.substring(0, offset + 1), 
        endpoint.replace(endpointURL, '');
      }
    }, sendEventDetails = function(eventDetails) {
      var eventDetailsURL = _wingifyPush.trackingUrl + '/pushsubscriptionchange-exec.php', formData = new FormData();
      return formData.append('version', self.version), formData.append('eventDetails', eventDetails), 
      fetch(eventDetailsURL, {
        method: 'POST',
        body: formData
      });
    };
    [ 'firefox', 'edge' ].indexOf(detectBrowser.name()) > -1 || syncChromeEncryptionKeys();
    var trackClick = function(clickDeliveryURL) {
      return fetch(clickDeliveryURL + '&version=' + self.version).catch(function(err) {});
    }, trackClose = function(closeDeliveryURL) {
      return fetch(closeDeliveryURL + '&version=' + self.version).catch(function(err) {});
    }, unsubscribeEvent = function(event) {
      if (event.subscriberId) {
        var syncUrl = _wingifyPush.pcDomainUrl + '/syncSubscription.php?hash=' + _wingifyPush.hash + '&browserType=' + event.browser + '&subscriberId=' + event.subscriberId + '&subscriptionId=' + event.subscriptionId + '&action=unsubscribe-delete&token=' + event.right_to_erase_auth_token + '&version=' + self.version;
        return fetch(syncUrl).then(function(response) {
          if (200 !== response.status) throw new Error();
          return response.json();
        }).then(function(json) {
          'success' === json.status && self.registration.pushManager.getSubscription().then(function(subscription) {
            subscription.unsubscribe();
          });
        }).catch(function(err) {});
      }
    }, trackClickEvent = function(event) {
      return self.registration.pushManager.getSubscription().then(function(subscription) {
        var subscriptionId = splitEndPointSubscription(subscription), browserName = detectBrowser.name(), clickDeliveryURL = _wingifyPush.trackingUrl + "/trackClick.php?subscriptionId=" + subscriptionId + '&notificationTag=' + event.notification.tag + '&browser=' + browserName + '&device=' + detectBrowser.device() + '&hash=' + _wingifyPush.hash;
        return 'chrome' !== browserName && 'opera' !== browserName || !event.action || (clickDeliveryURL = _wingifyPush.trackingUrl + "/trackClick.php?subscriptionId=" + subscriptionId + '&notificationTag=' + event.notification.tag + '&browser=' + browserName + '&device=' + detectBrowser.device() + '&hash=' + _wingifyPush.hash + '&action=' + event.action), 
        trackClick(clickDeliveryURL);
      });
    }, trackCloseEvent = function(event) {
      return self.registration.pushManager.getSubscription().then(function(subscription) {
        var subscriptionId = splitEndPointSubscription(subscription), browserName = detectBrowser.name(), closeDeliveryURL = _wingifyPush.trackingUrl + "/trackClose.php?subscriptionId=" + subscriptionId + '&notificationTag=' + event.notification.tag + '&browser=' + browserName + '&device=' + detectBrowser.device() + '&hash=' + _wingifyPush.hash;
        return trackClose(closeDeliveryURL);
      });
    }, openNotificationClickedWindow = function(notificationURL) {
      return clients.matchAll({
        type: 'window'
      }).then(function(clientList) {
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
          if (client.url === decodeURIComponent(notificationURL) && 'focus' in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow(decodeURIComponent(notificationURL));
      });
    }, showPushCrewNotification = function(notificationDetails) {
      var notificationFinalDetails = {
        body: notificationDetails.message,
        icon: notificationDetails.icon,
        requireInteraction: notificationDetails.requireInteraction,
        tag: notificationDetails.notificationTag,
        actions: notificationDetails.actions,
        data: notificationDetails.data,
        renotify: !0
      };
      if ('image' in Notification.prototype && notificationDetails.image && (notificationFinalDetails.image = notificationDetails.image), 
      'chrome' === detectBrowser.name() && detectBrowser.isMacOSCatalina() && (notificationFinalDetails.requireInteraction = !1), 
      'opera' !== detectBrowser.name()) return self.registration.showNotification(notificationDetails.title, notificationFinalDetails);
      self.registration.showNotification(notificationDetails.title, notificationFinalDetails);
    }, showErrorNotification = function(errorString, subscriptionId) {
      var notificationDetails = {};
      notificationDetails.title = 'Oops! We couldn\'t fetch the notification', notificationDetails.message = 'Sorry, due to some error the notification that was sent couldn\'t be displayed.', 
      notificationDetails.icon = _wingifyPush.defaultIcon, notificationDetails.notificationTag = 'notification-error', 
      notificationDetails.requireInteraction = !1, notificationDetails.data = {}, notificationDetails.data.notificationURL = encodeURIComponent('https://pushcrew.com/error-fetching-push-notifications/?hash=' + _wingifyPush.hash);
      var logSwErrorUrl = _wingifyPush.trackingUrl + "/logServiceWorkerError.php?subscriptionId=" + subscriptionId + '&error=' + errorString + '&hash=' + _wingifyPush.hash + '&version=' + self.version;
      return fetch(logSwErrorUrl).then(function() {
        return showPushCrewNotification(notificationDetails);
      }).catch(function(err) {
        return showPushCrewNotification(notificationDetails);
      });
    }, commonNotificationHandlerForPushEvent = function(eventData, subscriptionId) {
      var notificationDetails = {}, subscriberId = eventData.subscriber_id || eventData.subscriberId, requireInteraction = void 0 !== eventData.ri_flag ? eventData.ri_flag : eventData.requireInteraction, icon = eventData.icon_url || eventData.icon, browserName = detectBrowser.name();
      'firefox' === browserName ? (notificationDetails.title = decodeURIComponent(escape(eventData.title)), 
      notificationDetails.message = decodeURIComponent(escape(eventData.msg))) : (notificationDetails.title = eventData.title, 
      notificationDetails.message = eventData.message), notificationDetails.notificationTag = eventData.tag, 
      notificationDetails.icon = icon, notificationDetails.image = eventData.image || '', 
      notificationDetails.requireInteraction = !0, notificationDetails.subscriberId = void 0 !== subscriberId ? subscriberId : null, 
      notificationDetails.actions = [], notificationDetails.data = {}, notificationDetails.data.notificationURL = encodeURIComponent(eventData.url), 
      notificationDetails.data.subscriberId = notificationDetails.subscriberId, eventData.right_to_erase_auth_token && (notificationDetails.data.right_to_erase_auth_token = eventData.right_to_erase_auth_token, 
      notificationDetails.data.browser = browserName, notificationDetails.data.subscriptionId = subscriptionId), 
      eventData.button_one && eventData.button_one_url && (notificationDetails.actions.push({
        action: 'action1',
        title: eventData.button_one
      }), notificationDetails.data.action_one_url = encodeURIComponent(eventData.button_one_url)), 
      eventData.button_two && eventData.button_two_url && (notificationDetails.actions.push({
        action: 'action2',
        title: eventData.button_two
      }), notificationDetails.data.action_two_url = encodeURIComponent(eventData.button_two_url)), 
      !1 === requireInteraction && (notificationDetails.requireInteraction = !1);
      var trackDeliveryURL = _wingifyPush.trackingUrl + "/trackDelivery.php?subscriptionId=" + subscriptionId + '&notificationTag=' + notificationDetails.notificationTag + '&browser=' + browserName + '&device=' + detectBrowser.device() + '&hash=' + _wingifyPush.hash + '&version=' + self.version;
      return fetch(trackDeliveryURL).then(function() {
        return showPushCrewNotification(notificationDetails);
      }).catch(function(err) {
        return showPushCrewNotification(notificationDetails);
      });
    };
    self.addEventListener('install', function(event) {
      event.waitUntil(self.skipWaiting());
    }), self.addEventListener('activate', function(event) {
      event.waitUntil(self.clients.claim());
    }), self.addEventListener('push', function(event) {
      event.waitUntil(self.registration.pushManager.getSubscription().then(function(subscription) {
        try {
          if (!subscription || !subscription.endpoint) throw new Error('Subscription not found in service worker');
          var subscriptionId = splitEndPointSubscription(subscription);
          if (event.data) {
            if ('object' != typeof event.data.json()) throw new Error('Not a valid JSON data');
            var payloadObject = event.data.json();
            return commonNotificationHandlerForPushEvent(payloadObject, subscriptionId);
          }
          return fetch(_wingifyPush.trackingUrl + '/getMessage.php?hash=' + _wingifyPush.hash + '&subscriptionId=' + subscriptionId + '&version=' + self.version).then(function(response) {
            if (200 !== response.status) throw new Error();
            return response.json().then(function(data) {
              if (data.error || !data.notification) throw new Error('The API returned an error.');
              if ('notification-error' === data.notification.tag) throw new Error('Tag is notification-error');
              return commonNotificationHandlerForPushEvent(data.notification, subscriptionId);
            }).catch(function(err) {
              return showErrorNotification(err.toString(), subscriptionId);
            });
          }).catch(function(err) {
            return showErrorNotification(err.toString(), subscriptionId);
          });
        } catch (err) {
          return showErrorNotification(err.toString(), subscriptionId);
        }
      }));
    }), self.addEventListener('notificationclick', function(event) {
      var notificationURL, promiseArr = [];
      event.notification.close(), notificationURL = 'action1' == event.action ? event.notification.data.action_one_url : 'action2' == event.action ? event.notification.data.action_two_url : event.notification.data.notificationURL, 
      promiseArr.push(trackClickEvent(event)), promiseArr.push(openNotificationClickedWindow(notificationURL)), 
      event.notification.data.right_to_erase_auth_token && -1 !== notificationURL.indexOf(event.notification.data.right_to_erase_auth_token) && promiseArr.push(unsubscribeEvent(event.notification.data)), 
      event.waitUntil(Promise.all(promiseArr));
    }), self.addEventListener('notificationclose', function(event) {
      event.waitUntil(trackCloseEvent(event));
    });
    var createPSChangeObject = function(event) {
      var subscriptionObject = {
        hasNewSubscription: !1,
        hasOldSubscription: !1
      };
      event.oldSubscription && (subscriptionObject.hasOldSubscription = !0, subscriptionObject.oldSubscription = event.oldSubscription), 
      event.newSubscription && (subscriptionObject.hasNewSubscription = !0, subscriptionObject.newSubscription = event.newSubscription);
      var dataToSend = {
        event: event,
        subscriptionObject: subscriptionObject,
        permission: Notification.permission,
        endpoint: null
      };
      return dataToSend;
    };
    self.addEventListener('pushsubscriptionchange', function(event) {
      event.waitUntil(self.registration.pushManager.getSubscription().then(function(subscription) {
        var dataToSend = createPSChangeObject(event);
        return dataToSend.source = 'then', subscription ? (dataToSend.endpoint = subscription.endpoint, 
        sendEventDetails(JSON.stringify(dataToSend))) : sendEventDetails(JSON.stringify(dataToSend));
      }).catch(function(error) {
        var dataToSend = createPSChangeObject(event);
        return dataToSend.source = 'catch', sendEventDetails(JSON.stringify(dataToSend));
      }));
    }), 1 === _wingifyPush.isAMPEnabled && amp.init({
      origin: _wingifyPush.origin,
      hash: _wingifyPush.hash,
      vapidPublicKey: _wingifyPush.vapidPublicKey
    });
  }(IndexedDb, detectBrowser, amp);
}();