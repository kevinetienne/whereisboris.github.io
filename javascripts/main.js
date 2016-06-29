$(document).ready(function() {
    var excuses = [
        'he was playing cricket like nothing was happening on the 25th June 2016.',
        'he wrote an article and told us everything was fine on the 26th June 2016.',
        "his friend Nigel was in France but we couldn't find him here on the 27th June 2016.",
        'he was quoted by half the UK on the 28th June 2016.',
        'he cancelled his meeting 15 minutes before meeting MPs on the 29th June 2016.',
        "maybe he'll turn up tomorrow who knows?",
        'everything is scaremongering anyway.',
        'the NHS will get £350m.',
        'he promised the free market on no ground.',
    ];
    var nobody = "Nobody's seen him but... ";
    var result;

    window.addEventListener('devtoolschange', function (e) {
        console.log("Well played but nope Boris isn't there.", e.detail.open);
    });

    function handler() {
        result = nobody + excuses[Math.floor(Math.random()*excuses.length)];
        $('.confetti > p').html(result);
    }

    $('html').on('click', handler);
});
