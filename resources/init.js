gr(()=>{
    gr("*")(".intro-slide").on("build-start",(args)=>{
      if(args === 0){
        gr("*")(".intro-shader").setAttribute("shift",0.55);
      }
      if(args === 1){
        gr("*")(".intro-shader").setAttribute("shift",0.3);
      }
      if(args === 2){
        gr("*")(".intro-shader").setAttribute("shift",0);
      }
    });
  });
  