///<reference path="../../node_modules/monaco-editor/monaco.d.ts"/>
import Component from "grimoirejs/ref/Node/Component";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";
import ContainerComponent from "./ContainerComponent";
declare var require: any;
export default class EditorComponent extends ContainerComponent {
  private static _configured:boolean = false;
  public static attributes: { [key: string]: IAttributeDeclaration } = {
    source: {
      default: "",
      converter: "String"
    },
    inBuild: {
      converter: "Number",
      default: 0
    },
    outBuild: {
      converter: "Number",
      default: Number.MAX_SAFE_INTEGER
    },
    defaultContainer:{
      converter:"String",
      default:"div#editor-root"
    },
    language:{
      converter:"String",
      default:"javascript"
    },
    src:{
      converter:"String",
      default:""
    },
    runButton:{
      converter:"Boolean",
      default:false
    }
  };

  private _readText(url:string):Promise<string>{
    return new Promise((resolve,reject)=>{
      const xhr = new XMLHttpRequest();
      xhr.open("GET",`${url}`);
      xhr.addEventListener("load",()=>{
        resolve(xhr.responseText);
      })
      xhr.send();
    });
  }

  private async _configure():Promise<void>{
    if(EditorComponent._configured)return;
    monaco.languages.typescript.javascriptDefaults.addExtraLib(await this._readText("/libs/jquery-dts/index.d.ts"))
    monaco.languages.typescript.javascriptDefaults.addExtraLib(await this._readText("grimoire.d.ts"));
    EditorComponent._configured = true;
  }

  private _createEditor(container:HTMLElement,buttonElem:HTMLElement):void{
    window["require"].config({ paths: { 'vs': 'libs/monaco-editor/min/vs' } });
    const that = this;
    this._readText(this.getAttribute("src")).then(text=>{
      window["require"](['vs/editor/editor.main'], function() {
        var editor = monaco.editor.create(
          container, {
            value: text,
            readOnly: false,
            language: that.getAttribute("language"),
            scrollBeyondLastLine: false,
            automaticLayout: true,
            fontSize: 20,
            scrollbar: {
              handleMouseWheel: true
            },
            theme: "vs-dark"
          });
          if(that.getAttribute("language")==="javascript"){
            buttonElem.addEventListener("click",()=>{
              eval(editor.getValue());
            });
          }
          buttonElem.addEventListener("click",()=>{
            that.node.emit("execute",editor.getValue());
          });
          this.editor = editor;
          that._configure();
      });
    });
  }

  public generateTag(): HTMLElement {
    const container = document.createElement("div");
    const containerContainer = document.createElement("div");
    containerContainer.className="single-editor-container-outer";
    containerContainer.appendChild(container);
    container.className = "single-editor-container";
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    if(!this.getAttribute("runButton")){
      buttonContainer.style.visibility="hidden";
    }
    const buttonInnerContainer = document.createElement("div");
    buttonInnerContainer.className="button-inner-container";
    const buttonSelf = document.createElement("p");
    buttonSelf.innerText="RUN";
    buttonInnerContainer.appendChild(buttonSelf);
    buttonContainer.appendChild(buttonInnerContainer);
    container.appendChild(buttonContainer);
    const actualContainer = document.createElement("div");
    actualContainer.className = "actual-editor-container";
    container.appendChild(actualContainer);
    this._createEditor(actualContainer,buttonInnerContainer);
    return containerContainer;
  }
}
