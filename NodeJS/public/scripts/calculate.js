function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}
function calculateRate(oz, package) {
  var result = 0.00;
  if (!(oz == 0)) {
    switch (package) {
      case "flat":
        result = oz * 0.15 + 0.85;
        break;
      case "metered":
        if (oz > 3) {
          result = 0.95;
        } else {
          result = oz * 0.15 + 0.35;
        }
        break;
      case "stamped":
        if (oz > 3) {
          result = 1.0;
        } else {
          result = oz * 0.15 + 0.4;
        }
        break;
      case "package":
        if (oz < 5) {
          result = 3.6;
        } else if (oz < 16) {
          result = oz * 0.18 + 3.6;
        } else if (oz < 32) {
          result = 8.68;
        } else {
          result = 10.28;
        }
        break;
      default:
        break;
    }
  }
  return result;
}

