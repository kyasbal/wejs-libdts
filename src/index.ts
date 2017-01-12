
var __VERSION__ = "1.0.0";
var __NAME__ = "grimoirejs-ts-boilerplate";

import __MAIN__ from "./main"

var __EXPOSE__ = {};

let __BASE__ = __MAIN__();

Object.assign(__EXPOSE__,{
    __VERSION__:__VERSION__,
    __NAME__:__NAME__
});
Object.assign(__BASE__|| {},__EXPOSE__);

window["GrimoireJS"].lib.ts_boilerplate = __EXPOSE__;

export default __BASE__;
