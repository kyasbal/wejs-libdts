import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import ContainerComponent from "./ContainerComponent";
export default class ParagraphComponent extends ContainerComponent {
  public static attributes:{[key:string]:IAttributeDeclaration  }= {
    text:{
      default:"",
      converter:"String"
    },
    inBuild:{
      converter:"Number",
      default:0
    }
  };

  public $mount(){
    super.$mount();
    this.targetElement.innerText = this.getAttribute("text");
  }

  public generateTag():HTMLElement{
    return document.createElement("p");
  }
}
