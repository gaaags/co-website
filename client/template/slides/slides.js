//Animations des slides

$.getScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js",function(){
    $.getScript("//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js", function(){
        $.getScript("//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js", function(){
            $.getScript("//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js", function(){

                var controller = new ScrollMagic.Controller();

                //Slide 7 animation

                var timelineSlide7 = new TimelineMax()
                    .add( TweenMax.from('#slide7 h2',1.3,{left:'-600px',opacity:0, ease: Elastic.easeOut.config(1, 0.5)}), 0)
                    .add( TweenMax.from('#slide7 p',1.3,{left:'1200px',opacity:0, ease: Elastic.easeOut.config(1, 0.5)}), 0)
                    .add( TweenMax.staggerFrom('#slide7 img',3,{opacity:0}, 0.5));

                var sceneSlide7 = new ScrollMagic.Scene({
                    triggerElement: "#slide7",
                    reverse: false
                })
                    .setTween(timelineSlide7) // trigger a TweenMax.to tween
                    .addTo(controller);

                //slide 4 animation

                var timelineSlide4 = new TimelineMax()
                    .add( TweenMax.from('#slide4 h2',1.3,{left:'-600px',opacity:0, ease: Elastic.easeOut.config(1, 0.5)}), 0)
                    .add( TweenMax.from('#slide4 p',1.3,{left:'1200px',opacity:0, ease: Elastic.easeOut.config(1, 0.5)}), 0)
                    .add( TweenMax.to('#slide4 .CocoriKro-text',1.3,{color:'#488452'}),0)
                    .add( TweenMax.from('.cocoriKro img',1.3,{opacity:0}), 1);
                var i = 0;

                    $("#slide4 .bottles img").each(function(){
                            timelineSlide4.add( TweenMax.from(this,0.5,{x:-i+'px',opacity:0}, 0.3));
                            i += 72;
                    }
                    );

                var sceneSlide4 = new ScrollMagic.Scene({
                    triggerElement: "#slide4",
                    reverse: false
                })
                    .setTween(timelineSlide4) // trigger a TweenMax.to tween
                    .addTo(controller);

                //slide 8 animation

                var timelineSlide8 = new TimelineMax()
                    .add( TweenMax.from('#slide8 h2',1.3,{left:'-600px',opacity:0, ease: Elastic.easeOut.config(1, 0.5)}), 0)
                    .add( TweenMax.from('#slide8 p',1.3,{left:'1200px',opacity:0, ease: Elastic.easeOut.config(1, 0.5)}), 0)
                    .add( TweenMax.staggerFrom('#slide8 img',2,{scaleX:0, scaleY:0, ease:Elastic.easeOut.config(1, 0.5)},1.2));

                var sceneSlide8 = new ScrollMagic.Scene({
                    triggerElement: "#slide8",
                    reverse: false
                })
                    .setTween(timelineSlide8) // trigger a TweenMax.to tween
                    .addTo(controller);

                //slide 5 animation

                var timelineSlide5 = new TimelineMax()
                    .add( TweenMax.from('#slide5 h2',1.3,{left:'-600px',opacity:0, ease: Elastic.easeOut.config(1, 0.5)}), 0)
                    .add( TweenMax.from('#slide5 p',1.3,{left:'1200px',opacity:0, ease: Elastic.easeOut.config(1, 0.5)}), 0)
                    .add( TweenMax.from('#slide5 .illustrations img',1.3,{opacity:0}))
                    .add( TweenMax.staggerFrom('#slide5 .legend',2,{opacity:0}, 0.5));

                var sceneSlide5 = new ScrollMagic.Scene({
                    triggerElement: "#slide5",
                    reverse: false
                })
                    .setTween(timelineSlide5) // trigger a TweenMax.to tween
                    .addTo(controller);

                //slide 9 animation

                var timelineSlide9 = new TimelineMax()
                    .add( TweenMax.from('#slide9 .CTA-buy a',2,{y:-500,opacity:0, ease:Bounce.easeOut}))
                    .add( TweenMax.from('#slide9 .angel-section img',2,{x:-600,opacity:0,delay:0.5}))
                    .add( TweenMax.from('#slide9 .devil-section img',2,{x:100,opacity:0,delay:1}))
                    .add( TweenMax.from('#slide9 img[title="aureole"]',3,{y:-100,opacity:0,delay:1}))
                    .add( TweenMax.to('#slide9 .CTA-buy a',0.5,{borderColor:'#FC8712',repeat:-1}));


                var sceneSlide9 = new ScrollMagic.Scene({
                    triggerElement: "#slide9",
                    reverse: false
                })
                    .setTween(timelineSlide9) // trigger a TweenMax.to tween
                    .addTo(controller);

            });
        });
    });
});