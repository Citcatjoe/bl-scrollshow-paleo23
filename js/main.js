(function($){

    data = [
        { 
            isTitle: true,
            //bgUrl: 'img/this/dr_jm_b.jpg',
            // bgUrl: 'img/this/stromae_2014_a.jpg',
            //bgUrl: 'img/this/foule_tente.jpg',
            slideClasses: 'swiper-slide bg-cover relative bg-slate-400',
            overlay2: true,
            title: "<img src='img/this/logo_paleo_mauve.png' class='w-36 md:w-60 mx-initial mx-auto md:mx-0 max-w-none -translate-y-4 md:-translate-y-8'>Les 10 concerts les plus incroyables de l'histoire du festival",
            // title: "Les 10 concerts les plus incroyables de l'histoire <br><span class='relative'>de <img src='img/this/logo_paleo_mauve.png' class='w-32 max-w-none absolute top-2 -right-36'></span>",
            chapo: 'Le plus grand festival de Suisse romande s’apprête à ouvrir sa 46e édition ce mardi. Pour fêter ça, et avant de vous accompagner toute la semaine sur place, Blick vous propose un retour en arrière dans l’oeil des maestros du festival.',
            chapeau: 'chapeau 1'
        },
        { 
            //bgUrl: 'img/this/paleo_couches.jpg',
            bgUrl: null,
            slideClasses: 'swiper-slide bg-cover relative bg-slate-500',
            overlay: false,
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-left p-8 rounded-3xl',
            interTextAlt: 'Dans l’oeil de Daniel Rossellat et Jacques Monnier!',
            textAlt: 'Du premier terrain de Colovray jusqu’à celui de l’Asse, de l’intimiste «Paléo folk festival» au grand raout capable de réconcilier Vaudois et Genevois, la légende s’est construite en petites anecdotes, tout comme pour des milliers de Romands qui se les racontent encore à la pause café des années plus tard. Émotions, souvenirs indélébiles, péripéties surréalistes, voici la sélection des 10 meilleurs concerts selon le big boss et le programmateur de renom qui ont donné naissance au Paléo.'
        },
        // { 
        //     bgUrl: 'img/this/paleo_foule_large.jpg',
        //     slideClasses: 'swiper-slide bg-cover relative bg-slate-500',
        //     overlay: true,
        //     colClasses: 'w-full md:w-2/3 p-0 md:p-6 mx-auto bg-custom-textbox p-8 rounded-3xl',
        //     textAlt: 'De la star du moment Rosalia, aux vétérans d’Indochine, en passant par les Black Eyed Peas ou Placebo, la pleine de l’Asse verra à nouveau défiler cette semaine ce qui fait sa renommée années après années: un programme éclectique, une sélection food qui l’est tout autant et son lot de réjouissances qui fait vibrer les Romandes et les Romands l’été venu.<br><br>Pour fêter l’arrivée du rendez-vous nyonnais, et avant de vous accompagner pendant cette 46e édition, Blick vous propose un retour en arrière dans l’oeil des deux maestros de la pleine de l’Asse: Daniel Rossellat et Jacques Monnier.'
        // },
        // { 
        //     bgUrl: 'img/this/paleo_duo_nb.jpg',
        //     slideClasses: 'swiper-slide bg-cover relative bg-slate-500',
        //     overlay: true,
        //     colClasses: 'w-full md:w-2/3 p-0 md:p-4 mx-auto',
        //     textAlt: 'A la tête du festival depuis sa création, le big boss et le programmateur de renom nous livrent les 10 meilleurs concerts dont ils se souviennent dans leur Paléo. Du premier terrain de Colovray jusqu’à celui de l’Asse, de l’intimiste «Paléo folk festival» au grand raout capable de réconcilier Vaudois et Genevois, la légende s’est construite en petites anecdotes, tout comme pour des milliers de romands qui se les racontent encore à la pause café des années plus tard.<br><br> Emotions, souvenirs indélébiles, péripéties surréalistes, voici la sélection de deux passionnés de musique qui ont donné naissance au Paléo. (IMAGE DE ROSSELLAT et MONNIER JEUNES)'
        // },
        { 
            bgUrl: 'img/this/mano_negra_1989.jpg',
            color: 'darkgoldenrod',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-right',
            field1: 'La success story',
            field2: 'Mano Negra',
            field3: '1989 au Club Tent',
            field4: '',
            text: 'De nos jours, on ne présente plus le groupe mené par Manu Chao, lui-même habitué du festival en solo par la suite. «Mais Mano Negra était une découverte en 1989, lorsqu’il a débarqué au Club Tent pour deux concerts», se souvient Jacques Monnier. Sur l’ancien terrain de Colovray, la fameuse scène, toujours bien connue aujourd’hui, peut alors accueillir 1500 personnes. «Les musiciens ont déclenché une telle hystérie auprès du public que nous avons décidé de leur proposer de rester un jour de plus pour jouer un troisième concert, sous le chapiteau cette fois-ci.» Bondé, ce dernier accueille donc 10’000 personnes en transe pour ce qui restera à jamais «une magnifique révélation». Le même soir, Charles Trenet se produit sur la grande scène, ce qui fait dire au programmateur que «les extrêmes se sont bien côtoyés». Esprit de Paléo es-tu là?'
        },
        { 
            bgUrl: 'img/this/charles_trenet_1989_a.jpg',
            color: 'coral',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-right',
            field1: '«Où sont les chaises?»',
            field2: 'Charles Trenet',
            field3: '1989 sur la Grande Scène',
            field4: '',
            text: 'Puisqu’on parle du loup, le concert de Charles Trenet en 1989 fait partie des coups de coeur indélébiles de Daniel Rossellat. Le chanteur français qu’écoutaient nos grand-parents, et même nos arrières grands-parents, était la tête d’affiche de la Grande Scène.'
        },
        { 
            bgUrl: 'img/this/charles_trenet_1989_b.jpg',
            color: 'coral',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-left',
            field1: null,
            field2: null,
            field3: null,
            field4: '',
            text: '«C’était un grand moment d’émotion car nous avions très peur que le public ne suive pas, se remémore le big boss du festival. Mais ce fut un triomphe! Pour l’anecdote, Charles Trenet m’avait demandé lors du soundcheck où se trouvaient les chaises pour le public... je ne savais pas comment le rassurer», rigole-t-il.'
        },
        { 
            bgUrl: 'img/this/ravi_shankar_2005_a.jpg',
            color: '#FFA700',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-left',
            field1: 'La parenthèse enchantée',
            field2: 'Ravi Shankar',
            field3: '2005 sur la Grande Scène',
            field4: '',
            text: "A l'été 2005, Paléo prend un énorme risque et fait le pari du joueur de sitar indien Ravi Shankar. Père de la chanteuse Norah Jones, celui-ci s’est produit à Woodstock en 1969 et a collaboré avec les Beatles l’année d’avant lors de leur retraite indienne, débouchant sur leur mythique album éponyme, surnommé le «White Album»."
        },
        { 
            bgUrl: 'img/this/ravi_shankar_2005_b.jpg',
            color: '#FFA700',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 mx-auto',
            field1: null,
            field2: null,
            field3: null,
            field4: '',
            text: 'Sur une plaine de l’Asse qui a accueilli Rammstein la même année, le public va donc écouter de la musique indienne traditionnelle. «Ce style demande une concentration absolue et on se demandait comment les 35’000 spectateurs allaient réagir. Allaient-ils parler fort ou quitter les lieux?», se rappelle Jacques Monnier.'
        },
        { 
            bgUrl: 'img/this/ravi_shankar_2005_c.jpg',
            color: '#FFA700',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-right',
            field1: null,
            field2: null,
            field3: null,
            field4: '',
            text: 'Exceptionnellement, le public est même invité à s’asseoir. «Au final, le public a été merveilleux avec un grand respect du vieux Monsieur et avec une grande qualité d’écoute. Nous étions bien soulagés à la fin du concert.»'
        },
        { 
            bgUrl: 'img/this/neil_young_2013_b.jpg',
            color: '#ac00d0',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-left',
            field1: 'Like a hurricane',
            field2: 'Neil Young',
            field3: '2013 sur la Grande Scène',
            field4: '',
            text: 'La légende de l’americana Neil Young, transcendé sous une pluie torrentielle sur la plaine de l’Asse: le tableau marquera pour toujours Daniel Rossellat. C’est une scène d’anthologie qui frappe le Nyonnais lorsque l’artiste entame son titre «Like a hurricane».'
        },
        { 
            bgUrl: 'img/this/neil_young_2013_d.jpg',
            color: '#ac00d0',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-right',
            field1: null,
            field2: null,
            field3: null,
            field4: '',
            text: 'Le titre tombe pour le moins à pic, puisque l’orage tonne et les éclairs fusent au même moment sur un Paléo trempé mais heureux. «Un moment surréaliste et électrisant.»'
        },
        { 
            bgUrl: 'img/this/stephan_eicher_2019_a.jpg',
            color: '#08f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-left',
            field1: 'Le chef d’orchestre',
            field2: 'Stephan Eicher',
            field3: '2019 sur la Grande Scène',
            field4: '',
            text: 'C’est peut être la péripétie la plus marquante de l’histoire récente de Paléo qui a eu lieu en 2019. Prévu à 23h00 sur la Grande scène, le groupe français Shaka Ponk annule sa venue à 14h00. En cause, une extinction de voix de sa chanteuse. Les organisateurs craignent alors une case vide dans le programme. Heureusement pour eux, le génial Stephan Eicher est dans les parages, puisqu’il se produit ce jour-là sur l’ancienne scène des arches.'
        },
        { 
            bgUrl: 'img/this/stephan_eicher_2019_b.jpg',
            color: '#08f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-right',
            field1: null,
            field2: null,
            field3: null,
            field4: '',
            text: 'Sous sa houlette, le festival met alors en place une création «express» avec les artistes présents ce soir-là, dont le québécois Robert Charlebois. «Les loges ressemblaient à une ruche créative durant toute la journée», se remémore Jacques Monnier. Le spectacle fut alors un grande réussite «grâce à l’énergie et à la motivation de dizaines de musiciens et techniciens. Cela n’aurait pas été mieux si on s’y était mis six mois avant».'
        },
        { 
            bgUrl: 'img/this/stephan_eicher_2019_x.jpg',
            color: '#08f',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 mx-auto',
            field1: null,
            field2: null,
            field3: null,
            field4: '',
            text: "Une belle histoire qui restera pour Jacques Monnier «l’un des moments les plus marquants de l'histoire du festival»."
        },
        { 
            bgUrl: 'img/this/noir_desir_2022_x.jpg',
            color: '#760202',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-right',
            field1: 'Service merci!',
            field2: 'Noir Désir',
            field3: '2000 sur la Grande Scène',
            field4: '',
            text: "Avant les déboires de son chanteur Bertrand Cantat, condamné pour le meurtre de Marie Trintignant en 2003, il fut un temps où Noir Désir était au sommet de la scène rock francophone. Le groupe n’est toutefois pas à l’affiche du festival à l'été 2000, c’est The Cranberries qui doit enflammer la Grande Scène. Mais le groupe irlandais annule sa venue deux jours avant."
        },
        { 
            bgUrl: 'img/this/noir_desir_2022_c.jpg',
            color: '#760202',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 mx-auto',
            field1: null,
            field2: null,
            field3: null,
            field4: '',
            text: 'Au même moment, loin des scènes, les Français enregistrent leur futur album «des visages, des figures» à Bordeaux. «Amis du festival, ils ont toutefois accepté de venir nous sauver», raconte Jacques Monnier. Tout droit sortis du studio, il envoie une énergie incroyable pour un concert «unique, mythique et inoubliable».'
        },
        { 
            bgUrl: 'img/this/joan_baez_1982_a.jpg',
            color: '#ff006c',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-left',
            field1: 'Retour aux sources',
            field2: 'Joan Baez',
            field3: '1982 sur la Grande Scène',
            field4: '',
            text: 'Sur le terrain de Colovray, l’une des figures du mouvement flower power envoie une véritable aura de paix en cet été 1982, au plus près des racines folk du festival. «Elle avait demandé aux milliers de personnes dans le public de se donner la main, un beau moment de communion», raconte Daniel Rossellat.'
        },
        { 
            bgUrl: 'img/this/joan_baez_1982_x2.jpg',
            color: '#ff006c',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-left',
            field1: null,
            field2: null,
            field3: null,
            field4: '',
            text: 'La légende de Woodstock s’est également produite à Paléo en 2015, seule avec sa guitare, pour célébrer la 40e édition et les origines du rendez-vous nyonnais. La même année, elle a rejoint une autre légende sur scène, Patti Smith, pour l’accompagner sur le titre «People have the power». «Une classe intemporelle», conclut Daniel Rossellat.'
        },
        { 
            bgUrl: 'img/this/paul_simon_1991_x.jpg',
            color: '#9bbb00',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-left',
            field1: 'Inondé de bonheur',
            field2: 'Paul Simon',
            field3: '1991 sur la Grande Scène',
            field4: '',
            text: 'En 1991, «c’est un rêve qui se réalise avec Paul Simon, un de nos artistes préféré qui accepte de venir jouer à Paléo, accompagné de 25 musiciens sud-africains, brésiliens et américains», se remémore Jacques Monnier. Mais un défaut dans la construction de la scène ainsi qu’un gros orage arrosant les artistes et les instruments obligent les organisateurs à stopper le concert. «Tout le matériel était inondé», soupire encore le programmateur. Après 45 minutes de travail des techniciens et une énorme frayeur, le concert a pu reprendre avec une formation allégée puisqu’une partie des amplificateurs ont sauté. «C’était une soirée mémorable, entre grandes émotions et inquiétudes.»'
        },
        { 
            bgUrl: 'img/this/stromae_2014_b.jpg',
            color: '#00cfff',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-left',
            field1: 'Frissons',
            field2: 'Stromae',
            field3: '2014 sur la Grande Scène',
            field4: '',
            text: 'Beaucoup estiment qu’il régnait une atmosphère particulière lors du concert de Stromae sur la grande scène en 2014. Daniel Rossellat est du même avis. «Il s’est produit trois fois à Nyon, en 2011, 2014 et 2022, mais j’ai une préférence pour le concert exceptionnel de 2014», précise le big boss. '
        },
        { 
            bgUrl: 'img/this/stromae_2014_a.jpg',
            color: '#00cfff',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-left',
            field1: null,
            field2: null,
            field3: null,
            field4: '',
            text: 'Et pour cause, l’affluence était si forte sur la plaine de l’Asse que des écrans géants supplémentaires avaient été installés pour la première fois. Jamais à court d’émotions avec le Belge, Daniel Rossellat se souvient aussi du concert de l’an dernier. «Stromae a demandé au public le silence le plus total. Le public s’est exécuté et Stromae entame alors une chanson à cappella avec ses choristes. Le frisson absolu.»'
        },
        { 
            bgUrl: 'img/this/stromae_2014_e.jpg',
            color: '#00cfff',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-left',
            field1: null,
            field2: null,
            field3: null,
            field4: '',
            text: 'Nul doute que le Belge, à nouveau en prise avec des soucis de santé qui l’obligent à annuler sa tournée en cours, créera toujours l’événement à Nyon.'
        },
        { 
            bgUrl: 'img/this/jamel_debbouze_2004_a.jpg',
            color: '#00e182',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-right',
            field1: 'Le pari',
            field2: 'Jamel Debbouze',
            field3: '2004 sur la Grande Scène',
            field4: '',
            text: 'Grande première à Paléo en 2004, l’humoriste Jamel Debbouze est invité sur la Grande Scène. Un pari «casse-gueule», concède Jacques Monnier. «C’était la première fois qu’un humoriste, seul sur scène, jouait devant 40’000 personnes. Quelques heures avant le spectacle, une grande angoisse m’envahit. Les conditions d’écoute que nous offrons sont-elles acceptables?», se souvient le programmateur. Il faut dire que ce type de prestations se jouent habituellement dans des théâtres, avec un public assis et concentré. Les paroles de l’humoriste seront-elles audibles pour cette masse humaine ou les spectateurs vont-ils quitter les lieux?'
        },
        { 
            bgUrl: 'img/this/jamel_debbouze_2004_x.jpg',
            color: '#00e182',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-right',
            field1: null,
            field2: null,
            field3: null,
            field4: '',
            text: 'Fort heureusement, Jamel triomphe. «Il nous a avoué avoir aussi eu la trouille de sa vie d’artiste en montant sur scène pour réaliser ce challenge improbable.»'
        },
        { 
            bgUrl: 'img/this/jamel_debbouze_2004_x2.jpg',
            color: '#00e182',
            colClasses: 'w-full md:w-1/2 p-0 md:p-6 float-right',
            field1: null,
            field2: null,
            field3: null,
            field4: '',
            text: 'L’homme a dû y prendre goût puisqu’il reviendra en 2011 et en 2018, donnant au passage l’impulsion pour d’autres humoristes d’en faire de même comme Gad Elmaleh ou Kev Adams.'
        }, 
        { 
            isCredits: true,
            overlay: true,
            bgUrl: 'img/this/dr_jm_pv.jpg',
            bgColor: null,
            slideClasses: 'swiper-slide credits bg-cover relative bg-slate-400',
        }	
	];

    Handlebars.registerHelper('indexFormatter', function(index) {
        return (index < 10 ? '0' : '') + index;
      });

    buildList(data);
      function buildList(data){
          var source   = $("#slide-template").html();
          var template = Handlebars.compile(source);
          var html = template({'slide':data});
          $(".swiper-wrapper").prepend(html); 
      }

    buildContent(data);
    function buildContent(data){
        var source   = $("#content-template").html();
        var template = Handlebars.compile(source);
        var html = template({'content':data});
        $(".content").prepend(html); 
    }

	
	// console.log(data);

    // buildCards(data);
    // function buildCards(data){
    //     var source   = $("#card-template").html();
    //     var template = Handlebars.compile(source);
    //     var html = template({'card':data});
    //     $(".authors").prepend(html); 
    // }
    
    setTimeout(function() { 
        $('body').addClass('is-visible');
    }, 1000);

    setTimeout(function() { 
        $('.scroller').addClass('is-visible');
    }, 6000);
    
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        effect: "fade",
        fadeEffect: { crossFade: true },
        speed: 400,
        slidesPerView: 1,
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.apres',
          prevEl: '.avant',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
    });
    
    
    var controller = new ScrollMagic.Controller();

    
    

            setTimeout(function() { 

                //alert($("#trigger01").parent().height());
                   
                new ScrollMagic.Scene({triggerElement: "#trigger00", duration: $("#trigger00").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger00').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger01", duration: $("#trigger01").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger01').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger02", duration: $("#trigger02").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger02').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger03", duration: $("#trigger03").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger03').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);
               
                new ScrollMagic.Scene({triggerElement: "#trigger04", duration: $("#trigger04").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger04').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger05", duration: $("#trigger05").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger05').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);
                
                new ScrollMagic.Scene({triggerElement: "#trigger06", duration: $("#trigger06").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger06').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger07", duration: $("#trigger07").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger07').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger08", duration: $("#trigger08").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger08').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger09", duration: $("#trigger09").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger09').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger10", duration: $("#trigger10").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger10').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger11", duration: $("#trigger11").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger11').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger12", duration: $("#trigger12").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger12').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger13", duration: $("#trigger13").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger13').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger14", duration: $("#trigger14").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger14').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger15", duration: $("#trigger15").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger15').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger16", duration: $("#trigger16").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger16').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger17", duration: $("#trigger17").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger17').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger18", duration: $("#trigger18").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger18').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger19", duration: $("#trigger19").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger19').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger20", duration: $("#trigger20").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger20').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger21", duration: $("#trigger21").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger21').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger22", duration: $("#trigger22").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger22').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger23", duration: $("#trigger23").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger23').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                new ScrollMagic.Scene({triggerElement: "#trigger24", duration: $("#trigger24").parent().height()})
                .on("enter", function (event) {
                        var i = parseInt($('#trigger24').attr('id').slice(-2));
                        swiper.slideTo(i+1);
                        //$('.scroller').removeClass('is-visible');
                })
                .triggerHook(0.8).addTo(controller);

                // new ScrollMagic.Scene({triggerElement: "#trigger25", duration: $("#trigger25").parent().height()})
                // .on("enter", function (event) {
                //         var i = parseInt($('#trigger25').attr('id').slice(-2));
                //         swiper.slideTo(i+1);
                //         //$('.scroller').removeClass('is-visible');
                // }).triggerHook(0.8).addIndicators({name: "#trigger25"}).addTo(controller);

                
            }, 2000);
    

    

   
    // new ScrollMagic.Scene({triggerElement: "#trigger3", duration: $("#trigger3").parent().height()})
    // .on("enter", function (event) {
    //     var i = parseInt($('#trigger3').attr('id').slice(-1));
    //     swiper.slideTo(i+1);
    // }).triggerHook(0.8).addIndicators({name: "trigger slide 3"}).addTo(controller);

    // new ScrollMagic.Scene({triggerElement: "#trigger4"})
    // .on("enter", function (event) {
    //     var i = parseInt($('#trigger4').attr('id').slice(-1));
    //     swiper.slideTo(i+1);
    // }).triggerHook(0.8).addTo(controller);

    // new ScrollMagic.Scene({triggerElement: "#trigger5"})
    // .on("enter", function (event) {
    //     var i = parseInt($('#trigger5').attr('id').slice(-1));
    //     swiper.slideTo(i+1);
    // }).triggerHook(0.8).addTo(controller);

    // new ScrollMagic.Scene({triggerElement: "#trigger6"})
    // .on("enter", function (event) {
    //     var i = parseInt($('#trigger6').attr('id').slice(-1));
    //     swiper.slideTo(i+1);
    // }).triggerHook(0.8).addTo(controller);

    // new ScrollMagic.Scene({triggerElement: "#trigger7"})
    // .on("enter", function (event) {
    //     var i = parseInt($('#trigger7').attr('id').slice(-1));
    //     swiper.slideTo(i+1);
    // }).triggerHook(0.8).addTo(controller);

    // new ScrollMagic.Scene({triggerElement: "#trigger8"})
    // .on("enter", function (event) {
    //     var i = parseInt($('#trigger8').attr('id').slice(-1));
    //     swiper.slideTo(i+1);
    // }).triggerHook(0.8).addTo(controller);

    // new ScrollMagic.Scene({triggerElement: "#trigger9"})
    // .on("enter", function (event) {
    //     var i = parseInt($('#trigger9').attr('id').slice(-1));
    //     swiper.slideTo(i+1);
    // }).triggerHook(0.8).addTo(controller);

    // new ScrollMagic.Scene({triggerElement: "#trigger10"})
    // .on("enter", function (event) {
    //     var i = parseInt($('#trigger10').attr('id').slice(-2));
    //     swiper.slideTo(i+1);
    // }).triggerHook(0.8).addTo(controller);
        
//     Handlebars.registerHelper('indexFormatter', function(index) {
//   let formattedIndex = String(index);
//   if (formattedIndex.length < 2) {
//     formattedIndex = '0' + formattedIndex;
//   }
//   return formattedIndex;
// });


    

})(jQuery);