/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  // header\n  var $win = $(window),\n      $header = $('.header'),\n      headerHeight = $header.outerHeight(),\n      startPos = 0;\n  $win.on('load scroll', function () {\n    var value = $(this).scrollTop();\n\n    if (value > startPos && value > headerHeight) {\n      $header.addClass('header--slide-up');\n    } else {\n      $header.removeClass('header--slide-up');\n    }\n\n    startPos = value;\n  }); // スクロールボタンの表示・非表示設定\n\n  var scrBtn = $('.scr-btn');\n  $(window).scroll(function () {\n    if ($(this).scrollTop() < 200) {\n      $(scrBtn).fadeOut();\n    } else {\n      $(scrBtn).fadeIn();\n    }\n  }); // scroll to top\n\n  $(scrBtn).on('click', function () {\n    $('html, body').animate({\n      scrollTop: 0\n    }, 300);\n    return false;\n  });\n});\nwindow.addEventListener('load', function () {\n  // ドロワーメニュー\n  set_event_drawMenu();\n});\n\nfunction set_event_drawMenu() {\n  // ハンバーガーボタンがクリックされた場合\n  var menuBtn = document.getElementsByClassName('menu-btn')[0];\n  menuBtn.addEventListener(\"click\", drawMenu); // ドロワーメニューのモーダルウィンドウがクリックされた場合\n\n  var menu = document.getElementsByClassName('drawer-menu')[0];\n  menu.addEventListener('click', drawMenu);\n}\n\n;\n\nfunction drawMenu() {\n  var className_menu = 'drawer-menu';\n  var className_menuBefore = className_menu + '--draw';\n  var className_menuBtn = 'menu-btn';\n  var className_menuBtnBar = className_menuBtn + '__bar';\n  var className_target = event.target.classList;\n  /* ハンバーガーボタンorドロワーメニューのモーダルウィンドウが\n     イベントターゲットであった場合のみ動作。                */\n\n  if (className_target.contains(className_menuBtn) || className_target.contains(className_menuBtnBar) || className_target.contains(className_menuBefore)) {\n    // コンテンツ全てを左方向へアニメーション移動\n    var body = document.getElementsByClassName('body')[0];\n    body.classList.toggle('body--draw'); // \"position:fixed\"で配置が\"window\"基準になっていて、画面外にあるドロワーメニューを画面内に配置\n\n    var menu = document.getElementsByClassName(className_menu)[0];\n    menu.classList.toggle(className_menuBefore); // ハンバーガーボタンアニメーションをトリガー\n\n    transformBtn();\n  }\n}\n\n;\n\nfunction transformBtn() {\n  var name_btnBar = 'menu-btn__bar';\n  var className_btnBars = document.getElementsByClassName(name_btnBar);\n  var name_btnBars = [\"--top\", \"--middle\", \"--bottom\"];\n\n  for (var i = 0; i < className_btnBars.length; i++) {\n    var className_btnBar = name_btnBar + name_btnBars[i] + '-touched';\n    className_btnBars[i].classList.toggle(className_btnBar);\n  }\n}\n\n;\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });