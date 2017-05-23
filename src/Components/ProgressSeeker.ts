import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";

export default class ProgressSeeker extends Component{
  public static attributes:{[key:string]:IAttributeDeclaration} = {
    inBuild:{
      default:1,
      converter:"Number"
    }
  };

  private inBuild:number;

  public $mount():void{
    this.inBuild = this.getAttribute("inBuild");
  }

  public $slideStart():void{
    this.node.setAttribute("progress",0);
  }

  public $buildProgress(args:{buildIndex:number,progress:number}):void {
    if(this.inBuild === args.buildIndex){
      this.node.setAttribute("progress",args.progress);
    }
  }
}
