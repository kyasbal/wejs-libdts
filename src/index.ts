import __MAIN__ from "./main";
import gr from "grimoirejs";
import ComponentsContainerComponent from "./Components/ContainerComponent";
import ComponentsEditorComponent from "./Components/EditorComponent";
import ComponentsImageComponent from "./Components/ImageComponent";
import ComponentsParagraphComponent from "./Components/ParagraphComponent";
import ComponentsProgressSeeker from "./Components/ProgressSeeker";
import ComponentsRotate from "./Components/Rotate";
import ComponentsVideoComponent from "./Components/VideoComponent";

let __VERSION__ = "1.0.0";
let __NAME__ = "grimoirejs-sc-slide";

let __EXPOSE__ = {
  "Components": {
    "ContainerComponent": ComponentsContainerComponent,
    "EditorComponent": ComponentsEditorComponent,
    "ImageComponent": ComponentsImageComponent,
    "ParagraphComponent": ComponentsParagraphComponent,
    "ProgressSeeker": ComponentsProgressSeeker,
    "Rotate": ComponentsRotate,
    "VideoComponent": ComponentsVideoComponent
  }
};

gr.notifyRegisteringPlugin(__NAME__);
let __BASE__ = __MAIN__();

Object.assign(__EXPOSE__, {
  __VERSION__: __VERSION__,
  __NAME__: __NAME__
});
Object.assign(__BASE__ || {}, __EXPOSE__);

(window as any)["GrimoireJS"].lib.sc_slide = __EXPOSE__;

export default __BASE__;
