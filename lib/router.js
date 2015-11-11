Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.route('/',{
    name:'slides'
});

Router.route('/register',{
    name:'register'
});

Router.route('/team',{
   name:'team'
},{
    name:'main.slides'
});

Router.route('/blog',{
    name:'blog'
});

Router.route('/commande/:step',{
    name:'order'
});