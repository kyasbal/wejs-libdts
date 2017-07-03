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
});
