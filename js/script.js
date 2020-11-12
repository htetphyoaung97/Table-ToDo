let input_box_name = document.querySelector("#name");
let input_box_phone = document.querySelector("#phone");
let input_box_address = document.querySelector("#address");
let input_box_email = document.querySelector("#email");
let input_box_submit = document.querySelector("#submit-btn");

$(document).ready(function () {
	$(input_box_submit).click(function(){
		let add_name = $(input_box_name).val();
		let add_address = $(input_box_address).val();
		let add_phone = $(input_box_phone).val();
		let add_email = $(input_box_email).val();
		
		
		$(".table-body").append(`<tr class="bg-secondary text-white"><td>${add_name}</td><td>${add_address}</td><td>${add_phone}</td><td>${add_email}</td><td class="text-right"><a href="#" class="delet text-white"><i class="fas fa-trash-alt"></i></a></td></tr>`);
		$(input_box_name).val("");
		$(input_box_address).val("");
		$(input_box_phone).val("");
		$(input_box_email).val("");	

	});
		$(".table-body").on('click','.delet', function(event){
			$(this).parent().parent().fadeOut(500,function(){
				$(this).remove();
			})
		});
	});