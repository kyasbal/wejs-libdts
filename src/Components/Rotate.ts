import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
export default class Rotate extends Component{
  public static attributes:{[key:string]:IAttributeDeclaration} = {
    speed:{
      converter:"Number",
      default:0.1
    }
  };

  private _currentAngle:number = 0;

  public $update():void{
    this._currentAngle += this.getAttribute("speed");
    this.node.setAttribute("rotation",`y(${this._currentAngle})`)
  }
}
