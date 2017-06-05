import "grimoirejs/register";
import "grimoirejs-math/register";
import "grimoirejs-fundamental/register";
import "grimoirejs-forward-shading/register";
import "grimoirejs-gltf/register";
import "grimoirejs-slide-system/register";
import gr from "grimoirejs";

import ParagraphComponent from "./Components/ParagraphComponent";
import ContainerComponent from "./Components/ContainerComponent";
import ImageComponent from "./Components/ImageComponent";
import ProgressSeeker from "./Components/ProgressSeeker";
import VideoComponent from "./Components/VideoComponent";
import EditorComponent from "./Components/EditorComponent";
import Rotate from "./Components/Rotate";

export default ()=>{
  gr.register(async ()=>{
    gr.registerComponent("Paragraph",ParagraphComponent);
    gr.registerComponent("Container",ContainerComponent);
    gr.registerComponent("Image",ImageComponent);
    gr.registerComponent("ProgressSeeker",ProgressSeeker);
    gr.registerComponent("Video",VideoComponent);
    gr.registerComponent("Rotate",Rotate);
    gr.registerComponent("Editor",EditorComponent);
    gr.registerNode("p",["Paragraph"]);
    gr.registerNode("div",["Container"]);
    gr.registerNode("img",["Image"]);
    gr.registerNode("video",["Video"]);
    gr.registerNode("editor",["Editor"]);
    gr.registerNode("render-slide-hitarea",["RenderSlideHitarea"],{},"render-slide");
  });
  gr(()=>{
    $("#editor-root").on("keydown",(e)=>{
      e.stopPropagation();
    });
    gr("#slide")("#simple-goml-container").on("execute",(e)=>{
      const parser = new DOMParser();
      const parsed = parser.parseFromString(e,"text/xml");
      const scene = parsed.getElementsByTagName("scene");
      const childs = scene.item(0).children;
      for(let i = 0; i < 3; i++){
        const n = childs.item(i);
        const gn = gr("#slide")(".editor-content-container " + n.nodeName);
        for(let j = 0; j < n.attributes.length; j++){
          const at = n.attributes.item(j);
          gn.setAttribute(at.name,at.value);
        }
      }
      gr("#slide")(".editor-content-container").append("<object>" + scene.item(0).innerHTML + "</object>");
    });
  });
};
