import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import ContainerComponent from "./ContainerComponent";
import {parse} from "marked";
export default class ImageComponent extends ContainerComponent {
  public static attributes:{[key:string]:IAttributeDeclaration  }= {
    src:{
      default:"",
      converter:"String"
    },
    inBuild:{
      converter:"Number",
      default:0
    },
    outBuild:{
      converter:"Number",
      default:Number.MAX_SAFE_INTEGER
    },
    defaultContainer:{
      converter:"String",
      default:"div#paragraph-root"
    }
  };

  public get defaultClasses():string[]{
    return ["markdown-container"];
  }

  public $mount(){
    super.$mount();
    const div = this.targetElement as HTMLDivElement;
    const xhr = new XMLHttpRequest();
    xhr.onload = ()=>{
     const md =  parse(xhr.responseText);
     this.targetElement.innerHTML = md;
    }
    xhr.open("GET",this.getAttribute("src"),false);
    xhr.send();
  }

  public generateTag():HTMLElement{
    return document.createElement("div");
  }
}
