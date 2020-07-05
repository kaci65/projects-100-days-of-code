let quotes = [
	"\"Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.\" Will Ferrell",
	"\"I\’m sick of following my dreams, man. I\’m just going to ask where they’re going and hook up with \’em later.\" Mitch Hedberg",
	"\"When your mother asks, \‘Do you want a piece of advice?\’ it is a mere formality. It doesn\’t matter if you answer yes or no. You\’re going to get it anyway.\" Erma Bombeck",
	"\"I want my children to have all the things I couldn\’t afford. Then I want to move in with them.\" Phyllis Diller",
	"\"I walk around like everything\’s fine, but deep down, inside my shoe, my sock is sliding off.\" Anonymous",
	"\"I used to sell furniture for a living. The trouble was, it was my own.\" Les Dawson",
	"\"Truth hurts. Maybe not as much as jumping on a bicycle with a seat missing, but it hurts.\" Lt. Frank Drebin (Leslie Nielsen), Naked Gun 2½: The Smell of Fear",
	"\"My Mama says that alligators are ornery because they got all them teeth and no toothbrush.\" Bobby Boucher (Adam Sandler), The Waterboy",
	"\"I\’m at a place in my life when errands are starting to count as going out.\" Anonymous",
	"\"A good rule to remember for life is that when it comes to plastic surgery and sushi, never be attracted by a bargain.\" Graham Norton",
	"\"Here’s some advice: At a job interview, tell them you’re willing to give 110 percent. Unless the job is a statistician.\" Adam Gropman",
	"\"Here\’s something to think about: How come you never see a headline like \‘Psychic Wins Lottery\’?\" Jay Leno",
	"\"My therapist told me the way to achieve true inner peace is to finish what I start. So far I\’ve finished two bags of M&Ms and a chocolate cake. I feel better already.\" Dave Barry",
	"\"Instead of the mahi mahi, may I just get the one mahi because I’m not that hungry?\" Shelley Darlingson (Anna Faris), The House Bunny",
	"\"Why do they call it rush hour when nothing moves?\" Robin Williams",
	"\"I prefer not to think before speaking. I like being as surprised as everyone else by what comes out of my mouth.\" Anonymous",
	"\"Eggs are fantastic for a fitness diet. If you don\’t like the taste, just add cocoa, flour, sugar, butter, baking powder and cook at 350 for 30 minutes.\" Anonymous",
	"\"My husband and I fell in love at first sight. Maybe I should have taken a second look.\" Halley Reed (Mia Farrow), Crimes and Misdemeanors",
	"\"I haven\’t spoken to my wife in years. I didn\’t want to interrupt her.\" Rodney Dangerfield",
	"\"The worst part of online shopping is having to get up and get your credit card from your purse.\" Anonymous",
	"\"Good parenting means investing in your child\’s future, which is why I am saving to buy mine a hoverboard someday.\" Lin-Manuel Miranda",
	"\"I\’m one stomach flu away from my goal weight.\" Emily Charlton (Emily Blunt), The Devil Wears Prada",
	"\"Trying is the first step toward failure.\" -Homer Simpson, The Simpsons",
	"\"Light travels faster than sound. This is why some people appear bright until you hear them speak.\" Alan Dundes",
	"\"Always remember that you are absolutely unique. Just like everyone else.\" Margaret Mead"
]

function newQuote(){
	let randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById("random-quote").innerHTML = quotes[randomNumber];
}