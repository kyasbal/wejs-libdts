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
    },
    defaultContainer:{
      converter:"String",
      default:"div#paragraph-root"
    }
  };

  public targetElement:HTMLElement;

  private _parent:HTMLElement;

  private _defaultDisplay:string;

  public $mount():void{
    this.targetElement = this.generateTag();
    this._defaultDisplay = this.targetElement.style.display;
    const parentContainer = this.node.getComponentInAncestor(ContainerComponent);
    if(parentContainer){
      this._parent = parentContainer.targetElement;
    }else{
      const parentContainer = document.querySelector(this.getAttribute("defaultContainer")) as HTMLElement;
      const parent = document.createElement("div");
      parent.className = "slide-container";
      parentContainer.appendChild(parent);
      this._parent = parent;
    }
    let className = this.node.getAttribute("class");
    className = className ? className : [];
    if(className.length > 0||this.defaultClasses.length > 0){
      this.targetElement.className = Array.prototype.concat([],className,this.defaultClasses).reduce((a,b) => a + " " + b);
    }
    const idName = this.node.getAttribute("id");
    if(idName){
      this.targetElement.id = idName;
    }
    this.targetElement.style.display = "none";
    this._parent.appendChild(this.targetElement);
  }

  public get defaultClasses():string[]{
    return [];
  }

  public generateTag():HTMLElement{
    return document.createElement("div");
  }

  public $buildStart(buildIndex:number):void{
    if(this.getAttribute("inBuild") === buildIndex){
      this.targetElement.style.display=this._defaultDisplay;
      this.targetElement.style.opacity = "1";
    }
    if(buildIndex === this.getAttribute("outBuild")){
      this.targetElement.style.display="none";
    }
  }

  public $buildProgress(args:{buildIndex:number,progress:number}):void {
    if(this.getAttribute("inBuild") === args.buildIndex){
      this.targetElement.style.display=this._defaultDisplay;
      this.targetElement.style.opacity = args.progress+"";
    }
  }

  public $slideEnd():void{
    this.targetElement.style.display="none";
  }
}
