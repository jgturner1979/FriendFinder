// ===============================================================================
// DATA
// Below data will hold all of the Friends Characters for the app.
// ===============================================================================

var friends = [{
        name: "Ross Geller",
        occupation: "Professor",
        quote: "WE WERE ON A BREAK!!!",
        image: "assets/images/RossGeller.jpg",
        scores: [
            4,
            4,
            1,
            1,
            5,
            1,
            1,
            5,
            5,
            5
        ]
    },
    {
        name: "Monica Geller",
        occupation: "Chef",
        quote: "I KNOW!",
        image: "assets/images/MonicaGeller.png",
        scores: [
            5,
            3,
            1,
            1,
            4,
            1,
            5,
            1,
            1,
            5
        ]
    },
    {
        name: "Rachel Green",
        occupation: "Retail Buyer",
        quote: "But today, it's like there's rock bottom, then 50 feet of crap, then me.",
        image: "assets/images/RachelGreen.jpg",
        scores: [
            5,
            1,
            5,
            1,
            3,
            1,
            5,
            1,
            5,
            5
        ]
    },
    {
        name: "Phoebe Buffay",
        occupation: "Masseur",
        quote: "She’s your lobster. C’mon, you guys. It’s a known fact that lobsters fall in love and mate for life. You can actually see old lobster couples walking around their tank, you know, holding claws.",
        image: "assets/images/PhoebeBuffay.jpg",
        scores: [
            3,
            5,
            1,
            1,
            2,
            1,
            1,
            1,
            1,
            5
        ]
    },
    {
        name: "Chandler Bing",
        occupation: "Processor",
        quote: "I’m not great at the advice, can I interest you in a sarcastic comment?",
        image: "assets/images/ChandlerBing.jpg",
        scores: [
            3,
            1,
            1,
            5,
            5,
            5,
            3,
            5,
            5,
            5
        ]
    },
    {
        name: "Joey Tribbiani",
        occupation: "Actor",
        quote: "How you doin'?",
        image: "assets/images/JoeyTribbiani.jpg",
        scores: [
            1,
            4,
            1,
            1,
            1,
            1,
            3,
            1,
            5,
            5,
        ]
    }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;