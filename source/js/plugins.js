/*global $:false */
'use strict';


$(window).load(function () {

    (function(){
        $('#queries').submit(function(event){
            // Prevent submit
            event.preventDefault();

            // Stock targets and variables

            var query = $('#question').val(),
                button = $(this).find('button[type="submit"]'),
                question = '<p class="me"><span>Me: </span> ',
                reply = '<p class="him new"><span>John Snow:</span> ',
                typing = '<p class="him" id="typing"><span>John Snow:</span> <span class="dot one" /> <span class="dot two" /> <span class="dot three" /></p>',
                log = $('#log'), 
                hardSell = 'Je n\'en sais rien, mais clairement c\'est lui qu\'il vous faut.',
                scroll = function(){
                    $('#log').animate({ scrollTop: $('#log')[0].scrollHeight}, 500);
                };

            // Default answers bank
            var neutral = ['Je ne sais pas quoi dire.', 
                            'Je n\'aime pas trop cette question.', 
                            'C\'est à cause de questions comme ça que des chatons dorment dehors.', 
                            'Tout ce que je sais, c\'est que l\'hiver arrive',
                            'Demande-moi plus tard',
                            'Seul Chtulu le sait.',
                            'Absolument pas.',
                            'J\'en doute.',
                            'C\'est certain',
                            'Tu en penses quoi ?'],
                numeric = ['42',
                            'Beaucoup',
                            'J\'ai perdu le compte',
                            'Pas tant que ça',
                            'Un peu',
                            'Pas mal',
                            'Une infinité',
                            'Une douzaine. Plus ou moins.' ],
                why = ['Demande à ta mère',
                        'Demande à ton père',
                        'Parce que.',
                        'Pourquoi pas ?',
                        'Ça dépend'];

            // Funny form validation
            if(query !== ''){
                question += query;
            }
            else{
                question += '...';
            }

            // Answer pool
            switch(query.replace(/\?/g,'').replace(/\-/g,' ').trim().toLowerCase()){

                case '': 
                    reply += '...Pas de question, pas de réponse';
                break;

                case 'qui es tu': 
                    reply += 'Je suis John Snow, fils de Ned Stark.';
                break;

                case 'qui est benoit':
                    reply += hardSell;
                break;

                case 'qui est ton créateur':
                    reply += hardSell;
                break;

                case 'la grande question sur la vie, l\'univers et le reste':
                    reply += '42.';
                break;

                case 'tu ne sais rien, john snow':
                    reply += ':\'(';
                break;

                case 'suis je le maitre du monde':
                    reply += 'Je ne répondrais qu\'en présence de mon avocat.';
                break;

                case 'qui est la plus belle':
                    reply += 'C\'est ma maman.';
                break;

                default:
                    var type = query.trim().toLowerCase().split(' ')[0],
                        top,
                        random;
                    if(type === 'combien'){
                        top = numeric.length,
                        random = Math.floor(Math.random() * top);
                        reply += numeric[random];
                    }
                    else if(type === 'pourquoi'){
                        top = why.length,
                        random = Math.floor(Math.random() * top);
                        reply += why[random];
                    }
                    else{
                        top = neutral.length,
                        random = Math.floor(Math.random() * top);
                        reply += neutral[random];
                    }
            }

            // Append the question, disable the form
            $(log).append(question);
            $(button).attr('disabled', 'disabled');
            scroll();

            // Simulate John's thinking to fake human interaction
            setTimeout(function(){
                 $(log).append(typing);
                scroll();
            }, 500);

            // Append John's answer and enable the form again
            setTimeout(function(){
                document.getElementById('queries').reset();
                $('#typing').remove();
                $(log).append(reply);
                $(button).removeAttr('disabled');
                scroll();
            }, 1500);

        });

    }());

});