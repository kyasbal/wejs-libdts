gr(()=>{
  gr("*")(".last-slide").on("build-start",(args)=>{
    if(args === 0){
      gr("*")(".last-shader").setAttribute("shift",0);
    }
    if(args === 1){
      gr("*")(".last-shader").setAttribute("shift",0.1);
    }
    if(args === 2){
      gr("*")(".last-shader").setAttribute("shift",0.3);
    }
  });
  gr("*")(".heart-slide").on("build-start",(args)=>{
    if(args === 0){
      gr("*")(".heart-shader").setAttribute("speed",0.001);      
    }
    if(args === 1){
      gr("*")(".heart-shader").setAttribute("speed",0.05);    
    }
  })
});
