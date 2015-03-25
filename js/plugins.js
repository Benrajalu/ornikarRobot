/*global jQuery:false */
/*global Modernizr:false */
/*global console:false */
/*global confirm:false */

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
                log = $("#log"), 
                hardSell = 'Je n\'en sais rien, mais clairement c\'est lui qu\'il vous faut.',
                scroll = function(){
                    $('#log').animate({ scrollTop: $('#log')[0].scrollHeight}, 500);
                };

            // Funny form validation
            if(query != ''){
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
                    reply += 'Je ne sais pas quoi dire.'
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
