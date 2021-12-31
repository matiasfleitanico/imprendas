exports.id = 66;
exports.ids = [66];
exports.modules = {

/***/ 868:
/***/ ((module) => {

// Exports
module.exports = {
	"buttonHeader": "Home_buttonHeader__EEZeR",
	"subtitleForm3": "Home_subtitleForm3__gKe1F",
	"subtitleForm2": "Home_subtitleForm2__k5DIu",
	"subtitle": "Home_subtitle__tYBZW",
	"parra": "Home_parra__JsMrW",
	"containerDescription2": "Home_containerDescription2__1_hAN",
	"subtitleForm": "Home_subtitleForm__gPLfd",
	"button": "Home_button__hQmsM",
	"buttonForm": "Home_buttonForm__B32AO",
	"separator": "Home_separator__BzkTS",
	"slider": "Home_slider__SoxcW",
	"description": "Home_description__JhekB",
	"image_1": "Home_image_1__PjTO0",
	"formContainer": "Home_formContainer__jS_dQ",
	"form": "Home_form__eFLbn",
	"span": "Home_span__q9_wN",
	"containerService": "Home_containerService__N5itl",
	"service": "Home_service__Ie4vL",
	"galeryImage": "Home_galeryImage__nne1c",
	"galeryHome": "Home_galeryHome__CurML",
	"galeryMini": "Home_galeryMini__FAjaU",
	"boxCenter": "Home_boxCenter__uKxuV",
	"inputStyle": "Home_inputStyle__EBnqG",
	"inputStyleText": "Home_inputStyleText__2YPWZ",
	"subtitle2": "Home_subtitle2___ERfr",
	"datos": "Home_datos__FB62x",
	"dat1": "Home_dat1__kO8aR",
	"dat2": "Home_dat2__ZDf3G",
	"dat3": "Home_dat3__2dXRi",
	"formPattern": "Home_formPattern__7rMVE",
	"primer": "Home_primer__ITrdW",
	"segundo": "Home_segundo___gNf5",
	"tercer": "Home_tercer__6QZQS",
	"cuarto": "Home_cuarto__ac3LI",
	"buttonFormBox": "Home_buttonFormBox___VneL",
	"main": "Home_main__OVLM4",
	"footer": "Home_footer__zed0_",
	"logo": "Home_logo__FLQOc",
	"grid": "Home_grid__npx0i",
	"galerys": "Home_galerys___ytle",
	"Services": "Home_Services__ox1KM",
	"Circle": "Home_Circle__EtPPJ",
	"ContainerSub": "Home_ContainerSub__jkYaH",
	"MarkFont": "Home_MarkFont__euIZS",
	"ContainerService": "Home_ContainerService__fqvc9",
	"SubtitleService": "Home_SubtitleService__XvCG4",
	"Title": "Home_Title__wIvhY",
	"Border": "Home_Border__xxlrs",
	"Border1": "Home_Border1__s4_s9",
	"Cont1": "Home_Cont1__jSSll",
	"Cont2": "Home_Cont2__6IsVP",
	"Cont3": "Home_Cont3__KJsdG",
	"Div": "Home_Div__xUkwE",
	"ParrafoService": "Home_ParrafoService__DF9lS",
	"Description": "Home_Description__mGLX9",
	"ContainerDescription1": "Home_ContainerDescription1__atQxV",
	"GaleryOff": "Home_GaleryOff__6Fcyk",
	"FormContainer": "Home_FormContainer__p9CMl",
	"Galeria": "Home_Galeria__0vJH7",
	"header": "Home_header__CyQ_T",
	"headerMobile": "Home_headerMobile__hJOGQ",
	"buttonMenu": "Home_buttonMenu__5JGas",
	"imgSlider": "Home_imgSlider__nxtwX"
};


/***/ }),

/***/ 938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(868);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(865);
/* harmony import */ var react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(692);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);




class GaleryImge extends (react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(props){
        super(props);
        this.state = {
            visible: true
        };
    }
    handleClick = ()=>{
        this.setState({
            visible: !this.state.visible
        });
    };
    render() {
        let myImage = this.props.image;
        let myStyle1 = {
            display: "none"
        };
        let myStyle2 = {
            backgroundImage: "url(../../img/" + myImage + ")",
            width: '56%',
            height: '68%',
            backgroundSize: "cover",
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat',
            position: "fixed",
            top: '20%',
            rigth: '0px',
            left: '20%',
            zIndex: '30'
        };
        let myStyle = {
            backgroundImage: "url(../../img/" + myImage + ")",
            width: '200px',
            height: '200px',
            backgroundSize: "cover",
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat',
            transition: "all 1s cubic-bezier(0.215, 0.610, 0.355, 1.000)",
            display: "flex",
            flexWrap: "nowrap",
            overflow: "hidden",
            cursor: "pointer"
        };
        let myBack = {
            backgroundColor: 'black',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            rigth: '0px',
            opacity: '0.8',
            position: 'fixed',
            zIndex: '20'
        };
        let icon = {
            color: 'white',
            width: '20px',
            marginLeft: '96%',
            marginTop: '1%',
            cursor: 'pointer'
        };
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    onClick: this.handleClick,
                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().galeryImage),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: myStyle
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: this.handleClick,
                            style: this.state.visible ? myStyle1 : myBack
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: this.state.visible ? myStyle1 : myStyle2,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTimes, {
                                size: 60,
                                style: icon,
                                onClick: this.handleClick
                            })
                        })
                    ]
                })
            ]
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GaleryImge);


/***/ }),

/***/ 807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(868);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(865);
/* harmony import */ var react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(692);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(851);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(664);






class Header extends (react_cjs_react_production_min__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(props){
        super(props);
        this.state = {
            visible: true
        };
    }
    handleClick = ()=>{
        this.setState({
            visible: !this.state.visible
        });
    };
    render() {
        let myStyle = {
            backgroundColor: "#121212",
            color: "#e4e4e4",
            marginLeft: "10px",
            marginTop: "13px"
        };
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().headerMobile),
                    children: [
                        this.state.visible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaBars, {
                            size: 23,
                            style: myStyle,
                            onClick: this.handleClick
                        }),
                        !this.state.visible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTimes, {
                            size: 23,
                            style: myStyle,
                            onClick: this.handleClick
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonHeader),
                                children: "HOME"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonHeader),
                            children: "QUIENES SOMOS"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonHeader),
                            children: "SERVICIOS"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            href: "/galeria",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonHeader),
                                children: "GALERIA"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonHeader),
                            children: "CONTACTO"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                    className: this.state.visible ? 'headerMobileOff' : 'headerMobileOn',
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonHeader),
                                children: "HOME"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonHeader),
                            children: "QUIENES SOMOS"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonHeader),
                            children: "SERVICIOS"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            href: "/galeria",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonHeader),
                                children: "GALERIA"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonHeader),
                            children: "CONTACTO"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        })
                    ]
                })
            ]
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(868);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Slider() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "slider",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1___default().slider),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "../../img/logo.png",
                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_1___default().imgSlider)
            })
        })
    }));
};


/***/ })

};
;