(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1552:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var pipe=__webpack_require__(1092),pipe_default=__webpack_require__.n(pipe),helpers_extends=(__webpack_require__(20),__webpack_require__(45),__webpack_require__(155),__webpack_require__(721),__webpack_require__(18)),extends_default=__webpack_require__.n(helpers_extends),emotion_styled_base_browser_esm=__webpack_require__(4),react=__webpack_require__(0),react_default=__webpack_require__.n(react),path=__webpack_require__(10),path_default=__webpack_require__.n(path),is=__webpack_require__(2545),is_default=__webpack_require__.n(is),spacings=__webpack_require__(3),breakpoints=__webpack_require__(5),react_router=__webpack_require__(64),pathOr=__webpack_require__(8),pathOr_default=__webpack_require__.n(pathOr),Metadata=__webpack_require__(170),ATIAnalytics=__webpack_require__(166),ChartbeatAnalytics=__webpack_require__(167),ComscoreAnalytics=__webpack_require__(169),Grid=__webpack_require__(17),ServiceContext=__webpack_require__(7),RequestContext=__webpack_require__(14),OnDemandHeading=__webpack_require__(2546),OnDemandHeading_StyledRadioHeadingContainer=Object(emotion_styled_base_browser_esm.a)(OnDemandHeading.a,{target:"ei12wot0"})("padding:",spacings.h," 0 ",spacings.f,";@media (min-width: ",breakpoints.g,"){padding:",spacings.h," 0 ",spacings.f,";}@media (max-width: ",breakpoints.f,"){padding:",spacings.h," 0 ",spacings.e,";}"),OnDemandParagraph=__webpack_require__(2547),AVPlayer=__webpack_require__(2542),ImageWithPlaceholder=(__webpack_require__(122),__webpack_require__(30),__webpack_require__(204)),ImageContainer=Object(emotion_styled_base_browser_esm.a)("div",{target:"e1sqqoal0"})("padding:",spacings.h," 0 ",spacings.l,";",(function paddingDir(_ref){var dir=_ref.dir;return"padding-".concat("rtl"===dir?"left":"right")}),":",spacings.f,";@media (max-width: 22.4375rem){display:none;}"),getSrc=function getSrc(_ref2){var imageUrl=_ref2.imageUrl,size=_ref2.size;return"https://".concat(imageUrl.replace("$recipe","".concat(size,"x").concat(size)))},OnDemandImage_OnDemandImage=function OnDemandImage(_ref4){var imageUrl=_ref4.imageUrl,altFromProps=_ref4.alt,dir=_ref4.dir,defaultImageAltText=Object(react.useContext)(ServiceContext.a).defaultImageAltText,alt=is_default()(String,altFromProps)?altFromProps:defaultImageAltText,src=getSrc({imageUrl:imageUrl,size:128}),srcset=function getSrcSet(_ref3){var imageUrl=_ref3.imageUrl;return _ref3.sizes.map((function(size){return"".concat(getSrc({imageUrl:imageUrl,size:size})," ").concat(size,"w")})).join(",")}({imageUrl:imageUrl,sizes:[128,240,480]});return react_default.a.createElement(ImageContainer,{"data-e2e":"on-demand-image",dir:dir},react_default.a.createElement(ImageWithPlaceholder.a,{src:src,alt:alt,srcset:srcset,sizes:"(min-width: 1008px) 228px, 30vw",ratio:100,width:240,height:240}))};OnDemandImage_OnDemandImage.defaultProps={alt:null,dir:"ltr"},OnDemandImage_OnDemandImage.__docgenInfo={description:"",methods:[],displayName:"OnDemandImage",props:{alt:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},dir:{defaultValue:{value:"'ltr'",computed:!1},type:{name:"string"},required:!1,description:""},imageUrl:{type:{name:"string"},required:!0,description:""}}};var containers_OnDemandImage=OnDemandImage_OnDemandImage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/containers/OnDemandImage/index.jsx"]={name:"OnDemandImage",docgenInfo:OnDemandImage_OnDemandImage.__docgenInfo,path:"src/app/containers/OnDemandImage/index.jsx"});var LinkedData=__webpack_require__(168),getMediaId=__webpack_require__(2543),getMasterbrand=__webpack_require__(2544),getEmbedUrl=__webpack_require__(1091),RadioSchedule=__webpack_require__(396),RecentAudioEpisodes=__webpack_require__(1463),OnDemandFooterTimestamp=__webpack_require__(2548),PodcastExternalLinks=__webpack_require__(1481),staticAssetsPath="".concat(Object({NODE_ENV:"production",NODE_PATH:"",STORYBOOK:"true",PUBLIC_URL:"."}).SIMORGH_PUBLIC_STATIC_ASSETS_ORIGIN).concat(Object({NODE_ENV:"production",NODE_PATH:"",STORYBOOK:"true",PUBLIC_URL:"."}).SIMORGH_PUBLIC_STATIC_ASSETS_PATH),audioPlaceholderImageSrc="".concat(staticAssetsPath,"images/amp_audio_placeholder.png"),getGroups=function getGroups(zero,one,two,three,four,five){return{group0:zero,group1:one,group2:two,group3:three,group4:four,group5:five}},StyledGelWrapperGrid=Object(emotion_styled_base_browser_esm.a)(Grid.b,{target:"e60skt72"})("@media (min-width: ",breakpoints.i,"){padding-top:",spacings.l,";}"),StyledGridItemParagraph=Object(emotion_styled_base_browser_esm.a)(Grid.j,{target:"e60skt71"})("@media (min-width: 22.5rem) and (max-width: ",breakpoints.d,"){grid-template-columns:repeat(4, 1fr);grid-column-end:span 4;}"),StyledGridItemImage=Object(emotion_styled_base_browser_esm.a)(Grid.j,{target:"e60skt70"})("@media (min-width: 22.5rem) and (max-width: ",breakpoints.d,"){grid-template-columns:repeat(2, 1fr);grid-column-end:span 2;}"),OnDemandAudioPage_PageGrid=function PageGrid(_ref){var children=_ref.children;return react_default.a.createElement(Grid.b,{columns:getGroups(6,6,6,6,8,20),enableGelGutters:!0},react_default.a.createElement(Grid.j,{item:!0,startOffset:getGroups(1,1,1,1,2,5),columns:getGroups(6,6,6,6,6,12),margins:getGroups(!0,!0,!0,!0,!1,!1)},children))},OnDemandAudioPage_OnDemandAudioPage=function OnDemandAudioPage(_ref2){var pageData=_ref2.pageData,mediaIsAvailable=_ref2.mediaIsAvailable,MediaError=_ref2.MediaError,isPodcast=pageData.isPodcast,language=pageData.language,brandTitle=pageData.brandTitle,headline=pageData.headline,summary=pageData.summary,shortSynopsis=pageData.shortSynopsis,masterBrand=pageData.masterBrand,episodeId=pageData.episodeId,releaseDateTimeStamp=pageData.releaseDateTimeStamp,imageUrl=pageData.imageUrl,imageAltText=pageData.imageAltText,promoBrandTitle=pageData.promoBrandTitle,durationISO8601=pageData.durationISO8601,thumbnailImageUrl=pageData.thumbnailImageUrl,radioScheduleData=pageData.radioScheduleData,recentEpisodes=pageData.recentEpisodes,brandId=pageData.brandId,episodeTitle=pageData.episodeTitle,externalLinks=pageData.externalLinks,pageType=path_default()(["metadata","type"],pageData),isAmp=Object(react.useContext)(RequestContext.a).isAmp,location=Object(react_router.e)(),_useContext2=Object(react.useContext)(ServiceContext.a),dir=_useContext2.dir,liveRadioOverrides=_useContext2.liveRadioOverrides,lang=_useContext2.lang,service=_useContext2.service,translations=_useContext2.translations,serviceName=_useContext2.serviceName,oppDir="rtl"===dir?"ltr":"rtl",mediaId=Object(getMediaId.a)({assetId:episodeId,masterBrand:Object(getMasterbrand.a)(masterBrand,liveRadioOverrides),lang:lang,service:service}),embedUrl=Object(getEmbedUrl.a)({mediaId:mediaId,type:"media",isAmp:isAmp,queryString:location.search}),iframeTitle=pathOr_default()("Audio player",["mediaAssetPage","audioPlayer"],translations),hasRecentEpisodes=recentEpisodes&&Boolean(recentEpisodes.length),metadataTitle=episodeTitle?"".concat(episodeTitle," - ").concat(brandTitle," - ").concat(serviceName):headline,metadataImageProps=is_default()(String,imageUrl)?{image:"https://".concat(imageUrl.replace("$recipe","400x400")),imageWidth:400,imageHeight:400}:{};return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(ATIAnalytics.a,{data:pageData}),react_default.a.createElement(ChartbeatAnalytics.a,{data:pageData}),react_default.a.createElement(ComscoreAnalytics.a,null),react_default.a.createElement(Metadata.a,extends_default()({openGraphType:"website",lang:language,title:metadataTitle,description:shortSynopsis},metadataImageProps)),react_default.a.createElement(Grid.b,{as:"main",role:"main",columns:getGroups(6,6,6,6,8,20),enableGelGutters:!0},react_default.a.createElement(Grid.j,{item:!0,startOffset:getGroups(1,1,1,1,2,5),columns:getGroups(6,6,6,6,6,12),margins:getGroups(!0,!0,!0,!0,!1,!1)},react_default.a.createElement(StyledGelWrapperGrid,{dir:oppDir,columns:getGroups(6,6,6,6,6,6),enableGelGutters:!0},react_default.a.createElement(StyledGridItemParagraph,{item:!0,columns:getGroups(6,6,4,4,4,4)},react_default.a.createElement(OnDemandHeading_StyledRadioHeadingContainer,{idAttr:"content",brandTitle:brandTitle,episodeTitle:episodeTitle,releaseDateTimeStamp:releaseDateTimeStamp}),react_default.a.createElement(OnDemandParagraph.a,{text:summary}),episodeTitle&&react_default.a.createElement(OnDemandFooterTimestamp.a,{releaseDateTimeStamp:releaseDateTimeStamp})),react_default.a.createElement(StyledGridItemImage,{item:!0,columns:getGroups(0,0,2,2,2,2)},react_default.a.createElement(containers_OnDemandImage,{imageUrl:imageUrl,alt:imageAltText}))),mediaIsAvailable?react_default.a.createElement(AVPlayer.a,{assetId:episodeId,embedUrl:embedUrl,iframeTitle:iframeTitle,title:"On-demand radio",type:"audio",skin:"audio",placeholderSrc:audioPlaceholderImageSrc}):react_default.a.createElement(MediaError,{skin:"audio"}),react_default.a.createElement(LinkedData.a,{type:"WebPage",seoTitle:metadataTitle,entities:mediaIsAvailable?[{"@type":"AudioObject",name:promoBrandTitle,description:shortSynopsis,thumbnailUrl:thumbnailImageUrl,duration:durationISO8601,uploadDate:new Date(releaseDateTimeStamp).toISOString(),embedURL:embedUrl}]:[]}))),isPodcast&&react_default.a.createElement(OnDemandAudioPage_PageGrid,null,react_default.a.createElement(PodcastExternalLinks.a,{links:externalLinks,brandTitle:brandTitle})),hasRecentEpisodes&&react_default.a.createElement(OnDemandAudioPage_PageGrid,null,react_default.a.createElement(RecentAudioEpisodes.a,{masterBrand:masterBrand,episodes:recentEpisodes,brandId:brandId,pageType:pageType})),radioScheduleData&&react_default.a.createElement(RadioSchedule.a,{initialData:radioScheduleData}))};OnDemandAudioPage_OnDemandAudioPage.__docgenInfo={description:"",methods:[],displayName:"OnDemandAudioPage",props:{MediaError:{type:{name:"func"},required:!0,description:""},mediaIsAvailable:{type:{name:"bool"},required:!0,description:""},pageData:{type:{name:"shape",value:{isPodcast:{name:"bool",required:!1},brandTitle:{name:"string",required:!1},headline:{name:"string",required:!1},summary:{name:"string",required:!1},language:{name:"string",required:!1},releaseDateTimeStamp:{name:"number",required:!1},imageUrl:{name:"string",required:!1},imageAltText:{name:"string",required:!1},episodeTitle:{name:"string",required:!1}}},required:!0,description:""}}};var pages_OnDemandAudioPage_OnDemandAudioPage=OnDemandAudioPage_OnDemandAudioPage;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/pages/OnDemandAudioPage/OnDemandAudioPage.jsx"]={name:"OnDemandAudioPage",docgenInfo:OnDemandAudioPage_OnDemandAudioPage.__docgenInfo,path:"src/app/pages/OnDemandAudioPage/OnDemandAudioPage.jsx"});var applyBasicPageHandlers=__webpack_require__(241),withMediaError=__webpack_require__(2550);__webpack_exports__.default=pipe_default()(withMediaError.a,Object(applyBasicPageHandlers.a)({addVariantHandling:!1}))(pages_OnDemandAudioPage_OnDemandAudioPage)},2543:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(20);__webpack_exports__.a=function getMediaId(_ref){var assetId=_ref.assetId,masterBrand=_ref.masterBrand,lang=_ref.lang,service=_ref.service;return function isLiveRadio(assetId){return"liveradio"===assetId}(assetId)?"".concat(masterBrand,"/").concat(assetId,"/").concat(lang):"".concat(service,"/").concat(masterBrand,"/").concat(assetId,"/").concat(lang)}},2544:function(module,__webpack_exports__,__webpack_require__){"use strict";var ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.a=function getMasterBrand(externalId,liveRadioIdOverrides){return ramda_src_pathOr__WEBPACK_IMPORTED_MODULE_0___default()(externalId,["masterBrand",externalId],liveRadioIdOverrides)}}}]);
//# sourceMappingURL=OnDemandAudioPage.7007c7d208bde6f3ce91.bundle.js.map