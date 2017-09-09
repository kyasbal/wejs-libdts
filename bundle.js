const handlebars = require("handlebars");
const fs = require("fs");
const glob = require("glob");
const yaml = require("js-yaml");
function globAsync(globStr){
  return new Promise((resolve,reject)=>{
    glob.Glob(globStr,{},(err,matches)=>{
      if(err){
        reject(err);
      }else{
        resolve(matches);
      }
    });
  });
}

function readAsync(fileName){
  return new Promise((resolve,reject)=>{
    fs.readFile(fileName,"utf-8",(err,content)=>{
      if(!err){
        resolve(content);
      }else{
        reject(err);
      }
    })
  });
}

async function bundle(){
  const header = await readAsync("./gomls/header.goml");
  const directory = "./gomls/";
  const slideMeta = yaml.load(await readAsync("./gomls/slide.yml"));
  const slidesInArray = [];
  for(let i = 0; i < slideMeta.length; i++){
    const slide = slideMeta[i];
    const files = await globAsync(directory + slide);
    for(let j = 0; j < files.length; j++){
      slidesInArray.push(await readAsync(files[j]));
    }
  }
  const bundled = handlebars.compile(header,{noEscape:true})({slides:slidesInArray});
  console.log(bundled);
}

bundle();
