(function($){
    

	mainTl =  new TimelineMax(
        { 
            paused: true, 
            repeat: -1,									// repeat 3 times
			immediateRender: true
        });

    $svgWalk = $('#animation_walk'),
    $step1 = $svgWalk.find('#walk1'),
    $step2 = $svgWalk.find('#walk2'),
    $step3 = $svgWalk.find('#walk3'),
    $step4 = $svgWalk.find('#walk4'),
    $step5 = $svgWalk.find('#walk5'),
    $step6 = $svgWalk.find('#walk6'),
    $step7 = $svgWalk.find('#walk7'),
    $step8 = $svgWalk.find('#walk8'),
    $allSteps = [$step1, $step2, $step3, $step4, $step5, $step6, $step7, $step8];

    setSvgWalkStage();
    function setSvgWalkStage(){
        var clearTl = new TimelineMax();
        clearTl
            .set($step2, { autoAlpha: 0, transformOrigin: "center center" })
            .set($step3, { autoAlpha: 0, transformOrigin: "center center" })
            .set($step4, { autoAlpha: 0, transformOrigin: "center center" })
            .set($step5, { autoAlpha: 0, transformOrigin: "center center" })
            .set($step6, { autoAlpha: 0, transformOrigin: "center center" })
            .set($step7, { autoAlpha: 0, transformOrigin: "center center" })
            .set($step8, { autoAlpha: 0, transformOrigin: "center center" });
        return clearTl;
      }

      
    
        _partialTl = new TimelineMax(
            { 
                paused: true, 
                repeat: 2,									// repeat 3 times
                immediateRender: false
            });

      mainTl
        //.set($allSteps, {autoAlpha: 0})
        .to($allSteps, 0, {autoAlpha: 0})
        .to($step1, 0, {autoAlpha: 1})

        .to($allSteps, 0, {autoAlpha: 0}, '+=0.3')
        .to($step2, 0, {autoAlpha: 1})
        
        .to($allSteps, 0, {autoAlpha: 0}, '+=0.3')
        .to($step3, 0, {autoAlpha: 1})
        
        .to($allSteps, 0, {autoAlpha: 0}, '+=0.3')
        .to($step4, 0, {autoAlpha: 1})

        .to($allSteps, 0, {autoAlpha: 0}, '+=0.3')
        .to($step5, 0, {autoAlpha: 1})
     
        
        .to($allSteps, 0, {autoAlpha: 0}, '+=0.3')
        .to($step6, 0, {autoAlpha: 1})
        
        .to($allSteps, 0, {autoAlpha: 0}, '+=0.3')
        .to($step7, 0, {autoAlpha: 1})
        .addLabel('loopStart')
        //.add(_partialTl)
        .to($allSteps, 0, {autoAlpha: 0}, '+=0.3')
        .to($step8,0, {autoAlpha: 1});
        
        

    

    _partialTl
        //.set($allSteps, {autoAlpha: 0})
        .to($svgWalk, 1, {xPercent: '50'})
        .to($svgWalk, 1, {xPercent: '0'});
		// .set([$scrollIndicator], {yPercent: '105'})
		// .set([$h1, $h2], {autoAlpha: 0})
		// .set([$h1], {yPercent: '-10'})
		// .set([$headerBg], {scale: 1.05})
		// .to([$spinner, $logoLt], 0.7, {autoAlpha: 0, ease: Power4.easeOut}, '+=1.5')
		// .to($overlay, 1.5, {autoAlpha: 0, ease:Linear.easeNone}, '-=0.0')
		//.to($overlay, 1.5, {autoAlpha: 0, ease:Linear.easeNone}, '-=0.5')
		// .to($headerBg, 10, {scale: 1, ease: Power4.easeOut, y: 0}, '-=1.5')
		//.set($hVideoWrapper, {className: '+=is-blurred'}, $hVideoWrapperTiming)
		// .to([$h1], 5, {autoAlpha: 1, yPercent: '0', ease: Power4.easeOut}, '-=9.0')
		//.to($separateur, 3, {autoAlpha: 1, xPercent: '0', ease: Power4.easeOut}, '-=1.0')
		// .to($h2, 3, {autoAlpha: 1, ease: Power4.easeOut}, '-=8')
		//.to($h6, 3, {autoAlpha: 1, ease: Power4.easeOut}, '-=1.5')
		// .to($scrollIndicator, 1, {yPercent: '2', ease: Power4.easeOut, onComplete: setIntroDone}, '-=4.0');

    $('.btn-stop3').click(function(e){
        mainTl.pause();
    });
    $('.btn-play3').click(function(e){
        mainTl.play();
    });
        
    
    

})(jQuery);