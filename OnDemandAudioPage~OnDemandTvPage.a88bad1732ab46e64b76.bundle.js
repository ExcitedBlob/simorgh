(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1466:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(40);var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),_bbc_psammead_media_player__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(283),ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_6__),_contexts_RequestContext__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(12),_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(7),Wrapper=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__.a)("div",{target:"e1a3lole1"})((function(props){return!props.hasBottomPadding&&"padding-bottom: ".concat(_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.f,";")}),"@media (min-width: ",_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_4__.i,"){",(function(props){return!props.hasBottomPadding&&"padding-bottom: ".concat(_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.l,";")}),";}"),AVPlayer=function AVPlayer(_ref){var assetId=_ref.assetId,placeholderSrc=_ref.placeholderSrc,title=_ref.title,embedUrl=_ref.embedUrl,iframeTitle=_ref.iframeTitle,type=_ref.type,skin=_ref.skin,className=_ref.className,hasBottomPadding=_ref.hasBottomPadding,showLoadingImage=_ref.showLoadingImage,darkMode=_ref.darkMode,_useContext=Object(react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_8__.a),translations=_useContext.translations,service=_useContext.service,_useContext2=Object(react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_RequestContext__WEBPACK_IMPORTED_MODULE_7__.a),isAmp=_useContext2.isAmp,platform=_useContext2.platform,isValidPlatform=["amp","canonical"].includes(platform),mediaInfo={title:title,type:type},noJsMessage=ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_6___default()("This ".concat(mediaInfo.type," cannot play in your browser. Please enable JavaScript or try a different browser."),["media","noJs"],translations);return isValidPlatform&&assetId?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper,{hasBottomPadding:hasBottomPadding,className:className},isAmp?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_bbc_psammead_media_player__WEBPACK_IMPORTED_MODULE_5__.a,{placeholderSrc:placeholderSrc,src:embedUrl,title:iframeTitle,skin:skin,noJsMessage:noJsMessage,service:service}):react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_bbc_psammead_media_player__WEBPACK_IMPORTED_MODULE_5__.b,{showPlaceholder:!1,showLoadingImage:showLoadingImage,darkMode:darkMode,src:embedUrl,title:iframeTitle,skin:skin,service:service,mediaInfo:mediaInfo,noJsMessage:noJsMessage,noJsClassName:"no-js"})):null},AudioPlayer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__.a)(AVPlayer,{target:"e1a3lole0"})("amp-iframe,div>iframe{width:calc(100% + ",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.f,");margin:0 -",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.e,";@media (min-width: ",_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_4__.e,"){width:calc(100% + ",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.h,");margin:0 -",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.f,";}}");__webpack_exports__.a=function(props){return"audio"===props.skin?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AudioPlayer,props):react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AVPlayer,props)},AVPlayer.defaultProps={embedUrl:"",assetId:"",placeholderSrc:"",type:"",title:"",iframeTitle:"",className:"",skin:"classic",hasBottomPadding:!0,showLoadingImage:!1,darkMode:!1}},1469:function(module,exports,__webpack_require__){var is=__webpack_require__(77)((function is(Ctor,val){return null!=val&&val.constructor===Ctor||val instanceof Ctor}));module.exports=is},1470:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(19),_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__),_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_bbc_psammead_headings__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(329),_bbc_psammead_visually_hidden_text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(30),_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(5),_bbc_psammead_timestamp_container_utilities__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(72),_bbc_gel_foundations_typography__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(14),_bbc_psammead_styles_font_styles__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(15),_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(7),BrandTitle=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__.a)("span",{target:"eb9izc01"})("display:inline-block;width:100%;padding-bottom:",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_5__.e,";word-break:break-word;",(function(_ref){var script=_ref.script;return _ref.darkMode?"":script&&Object(_bbc_gel_foundations_typography__WEBPACK_IMPORTED_MODULE_8__.o)(script)})," ",_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_6__.l.LAPTOP_AND_LARGER,"{padding-bottom:0;word-break:break-word;line-height:",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_5__.j,";}"),Subheading=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__.a)("span",{target:"eb9izc00"})((function(_ref2){var script=_ref2.script;return script&&Object(_bbc_gel_foundations_typography__WEBPACK_IMPORTED_MODULE_8__.j)(script)})," ",(function(_ref3){var service=_ref3.service;return Object(_bbc_psammead_styles_font_styles__WEBPACK_IMPORTED_MODULE_9__.b)(service)})," margin:0;"),OnDemandHeadingContainer=function OnDemandHeadingContainer(_ref4){var idAttr=_ref4.idAttr,brandTitle=_ref4.brandTitle,releaseDateTimeStamp=_ref4.releaseDateTimeStamp,episodeTitle=_ref4.episodeTitle,ariaHidden=_ref4.ariaHidden,darkMode=_ref4.darkMode,className=_ref4.className,_useContext=Object(react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_10__.a),script=_useContext.script,service=_useContext.service,timezone=_useContext.timezone,datetimeLocale=_useContext.datetimeLocale,formattedTimestamp=Object(_bbc_psammead_timestamp_container_utilities__WEBPACK_IMPORTED_MODULE_7__.b)({timestamp:releaseDateTimeStamp,format:"LL",timezone:timezone,locale:datetimeLocale,isRelative:!1}),TextWrapper=ariaHidden?react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment:"span";return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_bbc_psammead_headings__WEBPACK_IMPORTED_MODULE_3__.a,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({script:script,service:service,id:idAttr,darkMode:darkMode,className:className},"content"===idAttr&&{tabIndex:"-1"},ariaHidden&&{as:"strong","aria-hidden":"true"}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextWrapper,ariaHidden?{}:{role:"text"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BrandTitle,{script:script,darkMode:darkMode},brandTitle),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_bbc_psammead_visually_hidden_text__WEBPACK_IMPORTED_MODULE_4__.a,null,", "),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Subheading,{script:script,service:service},episodeTitle||formattedTimestamp)))};OnDemandHeadingContainer.defaultProps={idAttr:null,episodeTitle:null,ariaHidden:!1,darkMode:!1,className:""},OnDemandHeadingContainer.__docgenInfo={description:"",methods:[],displayName:"OnDemandHeadingContainer",props:{idAttr:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},episodeTitle:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},ariaHidden:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},darkMode:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},brandTitle:{type:{name:"string"},required:!0,description:""},releaseDateTimeStamp:{type:{name:"number"},required:!0,description:""}}},__webpack_exports__.a=OnDemandHeadingContainer,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/containers/OnDemandHeading/index.jsx"]={name:"OnDemandHeadingContainer",docgenInfo:OnDemandHeadingContainer.__docgenInfo,path:"src/app/containers/OnDemandHeading/index.jsx"})},1471:function(module,__webpack_exports__,__webpack_require__){"use strict";var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),_bbc_psammead_paragraph__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(416),_bbc_psammead_styles_colours__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7),StyledParagraphComponent=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a)(_bbc_psammead_paragraph__WEBPACK_IMPORTED_MODULE_4__.a,{target:"e1oycz0u0"})((function(_ref){return!_ref.darkMode&&"color: ".concat(_bbc_psammead_styles_colours__WEBPACK_IMPORTED_MODULE_5__.m,";")}),"@media (max-width: ",_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_3__.f,"){padding-bottom:",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_2__.e,";}"),OnDemandParagraphContainer=function OnDemandParagraphContainer(_ref2){var idAttr=_ref2.idAttr,text=_ref2.text,darkMode=_ref2.darkMode,_useContext=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_6__.a),script=_useContext.script,service=_useContext.service;return text?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledParagraphComponent,{script:script,service:service,id:idAttr,darkMode:darkMode},text):null};OnDemandParagraphContainer.defaultProps={idAttr:null,darkMode:!1},OnDemandParagraphContainer.__docgenInfo={description:"",methods:[],displayName:"OnDemandParagraphContainer",props:{idAttr:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},darkMode:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},text:{type:{name:"string"},required:!0,description:""}}},__webpack_exports__.a=OnDemandParagraphContainer,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/containers/OnDemandParagraph/index.jsx"]={name:"OnDemandParagraphContainer",docgenInfo:OnDemandParagraphContainer.__docgenInfo,path:"src/app/containers/OnDemandParagraph/index.jsx"})},1472:function(module,__webpack_exports__,__webpack_require__){"use strict";var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_bbc_psammead_styles_colours__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_bbc_gel_foundations_typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14),_bbc_psammead_styles_font_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(15),_bbc_psammead_timestamp_container_utilities__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(72),_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(5),_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(7),smallScreenMargin="\n  @media(max-width: ".concat(_bbc_gel_foundations_breakpoints__WEBPACK_IMPORTED_MODULE_7__.f,") {\n    margin-top: 0;\n  }\n"),Wrapper=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.a)("time",{target:"eyaghzb0"})((function(_ref){var script=_ref.script;return script&&Object(_bbc_gel_foundations_typography__WEBPACK_IMPORTED_MODULE_4__.m)(script)})," ",(function(_ref2){var service=_ref2.service;return Object(_bbc_psammead_styles_font_styles__WEBPACK_IMPORTED_MODULE_5__.b)(service)})," color:",(function(_ref3){return _ref3.darkMode?_bbc_psammead_styles_colours__WEBPACK_IMPORTED_MODULE_2__.q:_bbc_psammead_styles_colours__WEBPACK_IMPORTED_MODULE_2__.m}),";margin-top:",_bbc_gel_foundations_spacings__WEBPACK_IMPORTED_MODULE_3__.e,";display:inline-block;",(function(_ref4){return!_ref4.darkMode&&smallScreenMargin}),";"),OnDemandFooterTimestamp=function OnDemandFooterTimestamp(_ref5){var releaseDateTimeStamp=_ref5.releaseDateTimeStamp,darkMode=_ref5.darkMode,_useContext=Object(react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ServiceContext__WEBPACK_IMPORTED_MODULE_8__.a),script=_useContext.script,service=_useContext.service,timezone=_useContext.timezone,datetimeLocale=_useContext.datetimeLocale,formattedTimestamp=Object(_bbc_psammead_timestamp_container_utilities__WEBPACK_IMPORTED_MODULE_6__.b)({timestamp:releaseDateTimeStamp,format:"LL",timezone:timezone,locale:datetimeLocale,isRelative:!1}),dateTime=Object(_bbc_psammead_timestamp_container_utilities__WEBPACK_IMPORTED_MODULE_6__.b)({timestamp:releaseDateTimeStamp,format:"YYYY-MM-DD",timezone:timezone,locale:datetimeLocale,isRelative:!1});return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper,{script:script,service:service,darkMode:darkMode,dateTime:dateTime},formattedTimestamp)};OnDemandFooterTimestamp.defaultProps={darkMode:!1},OnDemandFooterTimestamp.__docgenInfo={description:"",methods:[],displayName:"OnDemandFooterTimestamp",props:{darkMode:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},releaseDateTimeStamp:{type:{name:"number"},required:!0,description:""}}},__webpack_exports__.a=OnDemandFooterTimestamp,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/containers/OnDemandFooterTimestamp/index.jsx"]={name:"OnDemandFooterTimestamp",docgenInfo:OnDemandFooterTimestamp.__docgenInfo,path:"src/app/containers/OnDemandFooterTimestamp/index.jsx"})},1473:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(__filename){__webpack_require__.d(__webpack_exports__,"a",(function(){return EPISODE_STATUS}));__webpack_require__(36),__webpack_require__(110),__webpack_require__(8),__webpack_require__(13);var _lib_logger_node__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(67),_lib_logger_node__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_lib_logger_node__WEBPACK_IMPORTED_MODULE_4__),_lib_logger_const__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(68),logger=_lib_logger_node__WEBPACK_IMPORTED_MODULE_4___default()(__filename),EPISODE_STATUS={EPISODE_IS_AVAILABLE:"available",EPISODE_IS_NOT_YET_AVAILABLE:"not-yet-available",EPISODE_IS_EXPIRED:"expired"};EPISODE_STATUS.EPISODE_IS_AVAILABLE,EPISODE_STATUS.EPISODE_IS_EXPIRED,EPISODE_STATUS.EPISODE_IS_NOT_YET_AVAILABLE,EPISODE_STATUS.EPISODE_IS_NOT_YET_AVAILABLE,EPISODE_STATUS.EPISODE_IS_EXPIRED}).call(this,"/index.js")},1474:function(module,__webpack_exports__,__webpack_require__){"use strict";var helpers_extends=__webpack_require__(19),extends_default=__webpack_require__.n(helpers_extends),react=__webpack_require__(0),react_default=__webpack_require__.n(react),utilities_episodeAvailability=__webpack_require__(1473),emotion_styled_base_browser_esm=__webpack_require__(4),pathOr=__webpack_require__(8),pathOr_default=__webpack_require__.n(pathOr),esm=__webpack_require__(283),spacings=__webpack_require__(3),breakpoints=__webpack_require__(5),ServiceContext=__webpack_require__(7),AudioErrorWrapper=Object(emotion_styled_base_browser_esm.a)("div",{target:"euos1oz1"})("position:relative;min-height:165px;margin-bottom:",spacings.h,";"),VideoErrorWrapper=Object(emotion_styled_base_browser_esm.a)("div",{target:"euos1oz0"})("margin:",spacings.i," 0 ",spacings.l,";padding-top:","56.25%",";position:relative;overflow:hidden;@media (max-width: ",breakpoints.f,"){margin-top:",spacings.f,";}@media (max-width: ",breakpoints.d,"){margin:",spacings.f," -",spacings.f," 0;}@media (max-width: ",breakpoints.b,"){margin:",spacings.e," -",spacings.e," 0;}"),ErrorMessage_getErrorMessage=function getErrorMessage(status,translations){return status===utilities_episodeAvailability.a.EPISODE_IS_EXPIRED?pathOr_default()("This content is no longer available",["media","contentExpired"],translations):pathOr_default()("This content is not yet available",["media","contentNotYetAvailable"],translations)},ErrorMessage_ErrorMessage=function ErrorMessage(_ref){var episodeAvailability=_ref.episodeAvailability,skin=_ref.skin,_useContext=Object(react.useContext)(ServiceContext.a),service=_useContext.service,translations=_useContext.translations,Wrapper="audio"===skin?AudioErrorWrapper:VideoErrorWrapper;return react_default.a.createElement(Wrapper,null,react_default.a.createElement(esm.c,{service:service,message:ErrorMessage_getErrorMessage(episodeAvailability,translations)}))};ErrorMessage_ErrorMessage.defaultProps={skin:"video"},ErrorMessage_ErrorMessage.__docgenInfo={description:"",methods:[],displayName:"ErrorMessage",props:{skin:{defaultValue:{value:"'video'",computed:!1},type:{name:"enum",value:[{value:"'audio'",computed:!1},{value:"'video'",computed:!1}]},required:!1,description:""},episodeAvailability:{type:{name:"enum",computed:!0,value:"Object.values(EPISODE_STATUS)"},required:!0,description:""}}};var episodeAvailability_ErrorMessage=ErrorMessage_ErrorMessage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/lib/utilities/episodeAvailability/ErrorMessage/index.jsx"]={name:"ErrorMessage",docgenInfo:ErrorMessage_ErrorMessage.__docgenInfo,path:"src/app/lib/utilities/episodeAvailability/ErrorMessage/index.jsx"});__webpack_exports__.a=function withMediaError(PageComponent){var MediaErrorComponent=function MediaErrorComponent(props){var episodeAvailability=props.pageData.episodeAvailability,mediaIsAvailable=episodeAvailability===utilities_episodeAvailability.a.EPISODE_IS_AVAILABLE;return react_default.a.createElement(PageComponent,extends_default()({},props,{mediaIsAvailable:mediaIsAvailable,MediaError:mediaIsAvailable?function(){return null}:function ErrorComponent(errorProps){return react_default.a.createElement(episodeAvailability_ErrorMessage,extends_default()({},errorProps,{episodeAvailability:episodeAvailability}))}}))};return MediaErrorComponent.defaultProps={pageData:null},MediaErrorComponent}}}]);
//# sourceMappingURL=OnDemandAudioPage~OnDemandTvPage.a88bad1732ab46e64b76.bundle.js.map