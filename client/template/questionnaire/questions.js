Template.questions.helpers({
    questions:function(){
        return Questions.find();
    }
});

Template.questions.events({
    'submit form':function(e){
        e.preventDefault();
        var score = 0,
            options=[],
            option,
            profile;

        $('.question-group').each(function(){
            option = $(':radio:checked',this).data('score');
            options.push(option);
        });

        for (var i = 0;i < options.length;i++){
            if (isNaN(options[i])){
                options[i] = 0;
            }
            score += options[i];
        }

        console.log(score);

        if (score < 13){
            Router.go('/results/punk');
            //Blaze.remove(Template.questions);
            //Blaze.renderWithData(Template.results,profile,document.querySelector('#main'));
        } else if (score < 25){
            Router.go('/results/padawan');
        } else {
            Router.go('/results/connaisseur');
        }
    }
});