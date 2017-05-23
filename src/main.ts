import "grimoirejs/register";
import "grimoirejs-math/register";
import "grimoirejs-fundamental/register";
import "grimoirejs-slide-system/register";
import gr from "grimoirejs";

import ParagraphComponent from "./Components/ParagraphComponent";
import ContainerComponent from "./Components/ContainerComponent";
import ImageComponent from "./Components/ImageComponent";
import ProgressSeeker from "./Components/ProgressSeeker";

export default ()=>{
  gr.register(async ()=>{
    gr.registerComponent("Paragraph",ParagraphComponent);
    gr.registerComponent("Container",ContainerComponent);
    gr.registerComponent("Image",ImageComponent);
    gr.registerComponent("ProgressSeeker",ProgressSeeker);
    gr.registerNode("p",["Paragraph"]);
    gr.registerNode("div",["Container"]);
    gr.registerNode("img",["Image"]);
  });
};
