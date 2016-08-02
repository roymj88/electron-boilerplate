export var greet = function () {
    return 'Hello World!';
};

export var bye = function () {
    return 'See ya!';
};
$(document).on("click", ".submit", function(){
	var firstname 	= $(".firstname").val();
	var lastname 	= $(".lastname").val();

	if(!firstname){
		alert("First Name is required!");
	}else if(!lastname){
		alert("Last Name is required!");
	}else{

		var html  = "<tr>";
			html += "<td>"+firstname+"</td>";
			html += "<td>"+lastname+"</td>";
			html += "</tr>";

		$("table.list").find("tbody").append(html);
		$(".firstname").val("");
		$(".lastname").val("");
	}

});
