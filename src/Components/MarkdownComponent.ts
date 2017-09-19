import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import ContainerComponent from "./ContainerComponent";
import {parse} from "marked";
import SlideComponent from "grimoirejs-slide-system/ref/Components/SlideComponent";
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
    reflectBuildCount:{
      converter:"Boolean",
      default: true
    },
    defaultContainer:{
      converter:"String",
      default:"div#paragraph-root"
    }
  };

  public get defaultClasses():string[]{
    return ["markdown-container"];
  }
  

  private parsedMarkedowns:string[];

  private currentIndex:number = -1;

  public $mount(){
    super.$mount();
    const div = this.targetElement as HTMLDivElement;
    const xhr = new XMLHttpRequest();
    xhr.onload = ()=>{
     const md =  parse(xhr.responseText);
     let splitted = md.split("<h1");
     console.log(splitted);
     splitted = splitted.filter(s=>s.length > 0).map(s => "<h1" + s);
     console.log(splitted);     
     this.parsedMarkedowns = splitted;     
     if(this.getAttribute("reflectBuildCount")){
       const slide = this.node.getComponentInAncestor(SlideComponent);
       slide.setAttribute("build",this.getAttribute("inBuild") + splitted.length);
       if(this.currentIndex !== -1){
        this._updateIndex(this.currentIndex);
       }
     }
    }
    xhr.open("GET",this.getAttribute("src"),false);
    xhr.send();
  }

  public $buildStart(buildIndex:number):void{
    super.$buildStart(buildIndex);
    this._updateIndex(buildIndex);
  }

  public generateTag():HTMLElement{
    return document.createElement("div");
  }

  private _updateIndex(index:number):void{
    this.currentIndex = index;
    const mdIndex = index - this.getAttribute("inBuild");
    this.targetElement.innerHTML = this.parsedMarkedowns[mdIndex] || "";
    const h1s = this.targetElement.getElementsByTagName("h1");
    for(let i = 0; i < h1s.length; i++){
      const h1 = h1s.item(i);
      if(h1.innerText === "SKIP"){
        h1.style.display = "none";        
      }
    }
  }
}
