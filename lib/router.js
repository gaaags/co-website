Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.route('/',{
    name:'slides'
});

Router.route('/team',{
   name:'team'
},{
    name:'main.slides'
});

Router.route('/blog',{
    name:'blog'
});