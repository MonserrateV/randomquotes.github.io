var quotes = [
  '"An investment in knowledge always pays the best interest."-Benjamin Franklin', 
  '"I do believe something magical can happen when you read a good book."-J.K. Rowling',
  '"To encourage literature and the arts is a duty which every good citizen owes to his country."-George Washington',
  '"Success is the sum of small efforts, repeated day in and day out."-Robert J. Collier',
  '"In matters of principle, stand like a rock; in matters of taste, swim with the current."-Thomas Jefferson',
  '"Optimism is a happiness magnet. If you stay positive, good things and good people will be drawn to you."-Mary Lou Retton',
  '"It\'\s kind of fun to do the impossible."-Walt Disney',
  '"The best way to cheer yourself up is to try to cheer somebody else up."-Mark Twain',
  '"Give your hands to serve and your hearts to love."-Mother Teresa',
  '"Consult not your fears, but your hopes and your dreams."-Pope John XXIII',
  '"Just as man cannot live without dreams, he cannot live without hope. If dreams reflect the past, hope summons the future."-Elie Wiesel',
  '"It is not only for what we do that we are held responsible, but also for what we do not do."-Moliere',
  '"The price of greatness is responsibility."-Sir Winston Churchill',
  '"Friends are medicine for a wounded heart and vitamins for a hopeful soul."-Steve Maraboli',
  '"May love and laughter light your days, and warm your heart and home. May good and faithful friends be yours wherever you may roam..."-Irish Proverb',
]

function newQuote(){
var ranNumber = Math.floor(Math.random() * (quotes.length));

document.getElementById('quoteDisplay').innerHTML=quotes[ranNumber];
}