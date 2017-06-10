import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import Transform from "grimoirejs-fundamental/ref/Components/TransformComponent";
import Quaternion from "grimoirejs-math/ref/Quaternion";
/**
 * 定速回転のためのコンポーネント
 */
export default class Rotate extends Component {
  /**
   * このコンポーネントが持つ属性
   */
  public static attributes:{[key:string]:IAttributeDeclaration} = {
    speed:{
      converter:"String",
      default:0.01
    }
  };

  private _transform:Transform;

  public $mount(){
    this._transform = this.node.getComponent(Transform);
  }

  public $update(){
    this._transform.rotation =
      Quaternion.multiply(this._transform.rotation,Quaternion.euler(0,this.getAttribute("speed"),0));
  }
}
