  $(function(){

    var heroes = [];

    $.getJSON(../json/heroes.json, function(data){
      $.eah(data.heroes,function(i, f){
      	var tblRow = "<tr>" + "<td>" + f.localizedName + "</td>" +
      	"<td>" + f.id + "</td>" + "<td>" + f.abilities + "</td>" + "</tr>"
      	$(tblRow).appendTo("#heroesdata tbody");
      })
    });
  });