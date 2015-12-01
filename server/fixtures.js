if(Posts.find().count() === 0){
    Posts.insert({
        title:'premier article',
        author:'benjamin',
        slug:'premier-article',
        category:'coulisses',
        createdAt:new Date(),
        image:{
            src:'/co-logo-main.png',
            title:'photo premier article',
            alt:'photo premier article'
        },
        abstract:'Eodem tempore etiam Hymetii praeclarae indolis viri negotium est actitatum, cuius hunc novimus esse ' +
        'textum. cum Africam pro consule regeret Carthaginiensibus victus inopia iam lassatis, ex horreis Romano populo ' +
        'destinatis frumentum dedit, pauloque postea cum provenisset segetum copia, integre sine ulla restituit mora.'
    });
}

if (Questions.find().count() === 0){
    Questions.insert(
        {
            label:'Une bonne bière c’est :',
            name:'question1',
            options:{
                A:{
                    value:'Une bière qui fait tourner la tête',
                    score:1
                },
                B:{
                    value:'Une bière vide',
                    score:2
                },
                C:{
                    value:'Une bière trappiste',
                    score:3
                }
            }
        });
    Questions.insert(
        {
            label:'IPA ça veut dire….',
            name:'question2',
            options:{
                A:{
                    value:'Indian Pale Ale',
                    score:3
                },
                B:{
                    value:'On s’en fiche, une IPA ça se boit',
                    score:1
                },
                C:{
                    value:'Industrial Premium Ale',
                    score:2
                }
            }
        });
    Questions.insert(
        {
            label:'Qu’est ce qui donne l’amertume à la bière',
            name:'question3',
            options:{
                A:{
                    value:'Le Houblon',
                    score:3
                },
                B:{
                    value:'L’orge',
                    score:2
                },
                C:{
                    value:'La gueule de bois',
                    score:1
                }
            }
        });
    Questions.insert(
        {
            label:'Quand la bière fait beaucoup de mousse',
            name:'question4',
            options:{
                A:{
                    value:'C’est probablement parce que vous l’avez secouée dans tous les sens',
                    score:1
                },
                B:{
                    value:'Parce que c’est la pleine lune',
                    score:3
                },
                C:{
                    value:'Parce que vous l’avez mal servie dans le verre',
                    score:2
                }
            }
        });
    Questions.insert(
        {
            label:'Le champagne de la bière, ça vous évoque quoi',
            name:'question5',
            options:{
                A:{
                    value:'Une douce incongruité : un champagne de la bière ? mais quoi encore ?',
                    score:2
                },
                B:{
                    value:'Un total désintérêt : pourquoi faire compliquer quand on peut faire simple ?',
                    score:1
                },
                C:{
                    value:'Une vraie curiosité : si une bière fait un tout en cave champenoise, ça doit valoir le coup',
                    score:3
                }
            }
        });
    Questions.insert(
        {
            label:'La bière, pour vous c’est',
            name:'question6',
            options:{
                A:{
                    value:'Tous les jours !',
                    score:1
                },
                B:{
                    value:'Avec ses amis pour débriefer de la soirée de la veille',
                    score:2
                },
                C:{
                    value:'Votre dégustation du vendredi soir',
                    score:3
                }
            }
        });
    Questions.insert(
        {
            label:'Le proverbe anglais qui vous parle le plus sur la bière',
            name:'question7',
            options:{
                A:{
                    value:'2 pints of guiness a day keep the doctor away',
                    score:2
                },
                B:{
                    value:'Beer will change the world, I don’t know how but it will',
                    score:3
                },
                C:{
                    value:'You didn’t need those brain cells anyway',
                    score:1
                }
            }
        });
    Questions.insert(
        {
            label:'Qu’est-ce que je vous sers',
            name:'question8',
            options:{
                A:{
                    value:'Vous auriez une bière un peu sucrée ?',
                    score:2
                },
                B:{
                    value:'Vous auriez une bière légèrement acidulée ?',
                    score:3
                },
                C:{
                    value:'Vous auriez une bière un peu chargée ?',
                    score:1
                }
            }
        });
    Questions.insert(
        {
            label:'La loi de pureté, dans la bière c’est',
            name:'question9',
            options:{
                A:{
                    value:'La raison pour laquelle certaines bières ont un si haut degré d’alcool',
                    score:1
                },
                B:{
                    value:'Une norme pour garantir le bon PH de la bière',
                    score:2
                },
                C:{
                    value:'Une règle suivie par les brasseurs trappistes',
                    score:3
                }
            }
        });
    Questions.insert(
        {
            label:'Un bon chercheur d’orge',
            name:'question10',
            options:{
                A:{
                    value:'C’est quelqu’un qui ferait mieux de chercher de l’or pour s’acheter ses bières',
                    score:1
                },
                B:{
                    value:'Quelqu’un qui risque d’attendre un peu avant de voir les français se mettre à la bonne bière',
                    score:3
                },
                C:{
                    value:'Quelqu’un qui a envie de découvrir la bière, tout simplement',
                    score:2
                }
            }
        });
}