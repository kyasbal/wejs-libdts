import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";

export default class ContainerComponent extends Component {
  public static attributes:{[key:string]:IAttributeDeclaration} = {
    inBuild:{
      converter:"Number",
      default:0
    },
    outBuild:{
      converter:"Number",
      default:Number.MAX_SAFE_INTEGER
    }
  };

  public targetElement:HTMLElement;

  private _parent:HTMLElement;

  public $mount():void{
    this.targetElement = this.generateTag();
    const parentContainer = this.node.getComponentInAncestor(ContainerComponent);
    if(parentContainer){
      this._parent = parentContainer.targetElement;
    }else{
      this._parent = document.querySelector("div#paragraph-root") as HTMLElement;
    }
    const className = this.node.getAttribute("class");
    if(className){
      this.targetElement.className = className.reduce((a,b) => a + " " + b);
    }
    const idName = this.node.getAttribute("id");
    if(idName){
      this.targetElement.id = idName;
    }
    this.targetElement.style.visibility = "collapse";
    this._parent.appendChild(this.targetElement);
  }

  public generateTag():HTMLElement{
    return document.createElement("div");
  }

  public $buildStart(buildIndex:number):void{
    if(buildIndex === this.getAttribute("inBuild")){
      this.targetElement.style.visibility="visible";
    }
    if(buildIndex === this.getAttribute("outBuild")){
      this.targetElement.style.visibility="collapse";
    }
  }

  public $slideEnd():void{
    this.targetElement.style.visibility="collapse";
  }
}
