$(document).ready(function() {

	
		$.ajax({
			url: 'data/estudiantes.json',
			type: 'POST',
			dataType: 'json',
			data: {},
			beforSend: function(){
				$("#divContenido").html("Obteniendo Datos...");
			},
			success:function(data, textStatus, xhr) {
				
				$("#divContenido").empty(); //Vaciado el contenedor
				//Dibujar la tabla
				$("#divContenido").append("<table class='table table-striped table-hover'>");
				$("#divContenido table").append("<tr>");
				$("#divContenido table tr:last").append(	$("<td style='width: 10%' class='text-center'>").html("Codigo") );
				$("#divContenido table tr:last").append(	$("<td style='width: 35%' class='text-center'>").html("Apellidos") );
				$("#divContenido table tr:last").append(	$("<td style='width: 35%' class='text-center'>").html("Nombres") );
				$("#divContenido table tr:last").append(	$("<td style='width: 10%' class='text-center'>").html("Nota") );
				$("#divContenido table tr:last").append(	$("<td style='width: 10%' class='text-center'>").html("Accion") );

				//Recorrer estructura y obtener los datos

				$.each(data, function(i,v) {
					$("#divContenido table").append("<tr>");
					$("#divContenido table tr:last").append(	$("<td style='width: 10%' class='text-center'>").html(v.Codigo));
					$("#divContenido table tr:last").append(	$("<td style='width: 35%' class='text-center'>").html(v.Apellidos));
					$("#divContenido table tr:last").append(	$("<td style='width: 10%' class='text-center'>").html(v.Nombres));
					$("#divContenido table tr:last").append(	$("<td style='width: 10%' class='text-center'>").html(v.Nota));
					$("#divContenido table tr:last").append(	$("<td style='width: 10%' class='text-center'><button type='button' id='btnEditar' data-toggle='modal'data-target='#ModalEditar' class='btn btn-warning'><span class='glyphicon glyphicon-edit'></span></button>   <button type='button' id='delete' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button>").html(v.Accion));

				});
			},
			error: function (xhr, textStatus, errorThrown) {
				// body...
				$("#divContenido").html("<div class='alert alert-danger'>OOPS" + errorThrown + '</div>');
			}
		});
	}); 