var quotes = [
      "The quick brown fox jumps over the lazy dog.",
      "Look out! There are llamas!",
      "No, really, don't get up.",
      "Whatever",
      "Etc."    
    ];

document.getElementById("changeQuote").addEventListener("click", function() {
    var q = quotes[ Math.floor( Math.random() * quotes.length ) ];
    document.getElementById("test").innerHTML = q;     
});