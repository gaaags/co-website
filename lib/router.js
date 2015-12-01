Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/',{
    name:'slides'
});

Router.route('/team',{
   name:'team'
},{
    name:'main.slides'
});

//******************** Blog ***********************

Router.route('/blog',{
    name:'blog',
    template:'blog',
    waitOn:function(){
        return Meteor.subscribe('posts');
    }
});

Router.route('/blog/:slug',{
    name:'postPage',
    data:function(){
        return Posts.findOne({slug:this.params.slug})
    }
});

Router.onBeforeAction('dataNotFound',{only:'postPage'});

//****************** Questions **********************

Router.route('/questions',{
   name:'questions',
    template:'questions',
    waitOn:function(){
        return Meteor.subscribe('questions');
    }
});

Router.route('/results/:profileName',{
    name:'results',
    template:'results',
    data:function(){
        profileName = this.params.profileName;
        if (profileName == 'punk'){
            profile = {
                title:'Vous êtes un punk à chien de la bière',
                src:'http://www.brain-magazine.fr/images/stories/REPORTAGES/PUNK_A_CHIENS/itosslimnono.jpg',
                text:'« Une bière ? » « Oh non…. Pas qu’une ! J’en veux plus. Et j’en veux des fortes !» La bière, pour ' +
                'vous, est un compagnon de plus quand vous êtes avec vos amis. C’est synonyme de bonne ambiance avant tout. ' +
                'Car après tout, l’important c’est l’instant ! Et qu’importe pourvu qu’il y ait l’ivresse non ? Alors vous vous ' +
                'y adonner, en quantité mais pas forcément en qualité.<br/> Vous, il vous faut vraiment lâcher vos 8.6 et vos ' +
                'Amsterdamer. Un kit d’initiation est vraiment vital pour vous. Dans 10 ans, quand vous regarderez en ' +
                'arrière, vous ne vous reconnaîtrez plus !!'
            };
        } else if (profileName=='padawan'){
            profile = {
                title:'Vous êtes un jeune padawan de la bière',
                src:'http://vignette4.wikia.nocookie.net/star-wars-lego/images/e/e3/Anakin_Padawan_redise%C3%B1o_de_2013.png/revision/latest?cb=20131114143954&path-prefix=es',
                text:'Sers-toi de la force, Luke ! Et oui, vous avez du mal à y voir clair. Le côté obscur de la force, ' +
                'et les bouteilles vertes, vous ne les évitez pas toujours. Vous tentez néanmoins d’approfondir votre connaissance, ' +
                'et vous vous posez beaucoup de questions sur la bière. Il suffit qu’un maître jedi vous mette entre les mains une bonne bière, ' +
                'pour que vos pouvoirs se déchainent, libérant chez vous une innarêtable soif d’apprendre.<br/>Un kit d’initiation ? ' +
                'C’est pour vous qu’il a été créé. Vous allez enfin pouvoir découvrir le meilleur de ce monde méconnu, riche, et mystérieux.'
            };
        } else if (profileName == 'connaisseur'){
            profile = {
                title:'Vous êtes un Fin connaisseur de la bière',
                src:'http://www.leberry.fr/photoSRC/bqViVeldaWelbKxCPNWs_pusXXdNGltxXD4uu1iw_sR0IkLcazbGupnwlQUaVQo_pWI48f0HY_sxYvETMFwM2diAkJo-_/francis-julien-zythologue_1912564.jpeg',
                text:'Sur 10 bouteilles de bières vendues en France, 9 sont produites par des brasseries industrielles, et sont de piètre qualité. ' +
                'Vous achetez toujours la 10ème. Vous aimez ce qui est bon. Les produits de qualité, les fines saveurs, et les accords harmonieux.' +
                ' Vous appréciez déguster, et aller au-devant de nouvelles expériences. La bière est riche, et vous ne cessez de vous en faire la ' +
                'remarque, ainsi qu’à tous vos amis.' +
                '<br/>Un kit d’initiation à la bière ? Vous auriez pu l’inventer ! Ce sera à coup sûr, votre compagnon lors de vos prochaines dégustations découvertes.'
            };
        }
        return profile;
    }
});