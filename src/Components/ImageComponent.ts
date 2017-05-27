import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import ContainerComponent from "./ContainerComponent";
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
    }
  };

  public $mount(){
    super.$mount();
    const img = this.targetElement as HTMLImageElement;
    img.src = this.getAttribute("src");
  }

  public generateTag():HTMLElement{
    return document.createElement("img");
  }
}
