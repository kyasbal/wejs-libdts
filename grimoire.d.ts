// Intelli Sense用
interface GrimoireInterface{
  (query:string):GomlInterface;
  (args:()=>void):void;
  noConflict():void;
  regicterNode(nodeName:string,components:string[],defaultValues:{[key:string]:any},superClass:string):void;
  registerComponent(className:string,classObject:any):void;
  registerConverter(converterName:string,converterFunction:any):void;
}

interface GomlInterface{
  (query:string):NodeInterface;
}

interface NodeInterface{
  setAttribute(name:string,value:any):void;
  append(xml:string):void;
  getAttribute(name:string):void;
  on(key:string,func:()=>void):void;
}

declare var gr:GrimoireInterface;
