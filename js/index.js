$(document).ready(function() {
  $("button").click(function() {
    if (this.innerHTML === "C") {
      // clear current string
      $("#num-container").val("");
    } else if (this.innerHTML === "=") {
      // execute calculation and replace current string
      var calcContents = $("#num-container").val();
      console.log(calcContents, eval(calcContents));
      $("#num-container").val(eval(calcContents));
      /* I threw all this out when I discovered eval()
      var calcContents = $("#num-container").val().split(/[*\/+-]/g);
      var operations = $("#num-container").val().split(/[\d.]/g).filter(function(n){return n !== "";});
      console.log("calculate", calcContents, operations);
      var ansContents = calcFunc(calcContents[0],calcContents[1],operations[0]);
      var multDivContents = [];
      console.log(ansContents);
      // loop for add and minus
      for (var i=1; i<operations.length; i++) {
        ansContents = calcFunc(ansContents,calcContents[i+1],operations[i]);
        console.log(ansContents);
      }
      $("#num-container").val(ansContents);*/
    } else {
      // append to the current string
      $("#num-container").val($("#num-container").val()+this.innerHTML);
      //console.log(this.innerHTML);
    }
  });
  
  // keypress mapping; this works only in Chrome
  $(document).keypress(function(e) {
    switch (e.which) {
      case 48:
        $("#button-0").click();
        break;
      case 49:
        $("#button-1").click();
        break;
      case 50:
        $("#button-2").click();
        break;
      case 51:
        $("#button-3").click();
        break;
      case 52:
        $("#button-4").click();
        break;
      case 53:
        $("#button-5").click();
        break;
      case 54:
        $("#button-6").click();
        break;
      case 55:
        $("#button-7").click();
        break;
      case 56:
        $("#button-8").click();
        break;
      case 57:
        $("#button-9").click();
        break;
      case 13:
        $("#button-eq").click();
        break;
      case 106:
        $("#button-mult").click();
        break;
      case 107:
        $("#button-add").click();
        break;
      case 109:
        $("#button-minus").click();
        break;
      case 111:
        $("#button-div").click();
        break;
      case 110:
        $("#button-dot").click();
        break;
      case 67:
      case 93:
        $("#button-clear").click();
    }
  });
});

// this is no longer in use
function calcFunc(a,b,op) {
  if (op === "*") return parseInt(a)*parseInt(b);
  if (op === "+") return parseInt(a)+parseInt(b);
  if (op === "-") return parseInt(a)-parseInt(b);
  if (op === "/") return parseInt(a)/parseInt(b);
}