const handlebars = require("handlebars");
const fs = require("fs");
const glob = require("glob");

async function readAsync(fileName){
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

async function globSlides(){
  return new Promise((resolve,reject)=>{
    glob("./gomls/slide*.goml",{},(err,files)=>{
      if(err){
        reject(err);
      }else{
        resolve(files);
      }
    });
  });
}

async function bundle(){
  const header = await readAsync("./gomls/header.goml");
  const slides = await globSlides();
  const slidesInArray = [];
  for(let i = 0; i < slides.length; i++){
    const slide = slides[i];
    const index = /slide(\d+)\.goml/.exec(slide)[1];
    slidesInArray[index] = await readAsync(slide);
  }
  const bundled = handlebars.compile(header,{noEscape:true})({slides:slidesInArray});
  console.log(bundled);
}

bundle();
