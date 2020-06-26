/**
 * AutocompleteboxjsonpController
 * 
 * @author Ing. Juan Garfias V�zquez
 * @email jgarfias@travelnet.com.mx
 * @version 3.0
 * @date 07/Abril/2016
 */
$(function() {

	$("#rooms").val(1);
	$("#r1k-hotel-").val(0);
	$("#r2k-hotel-").val(0);
	$("#r3k-hotel-").val(0);
	$("#r4k-hotel-").val(0);
	$("#r5k-hotel-").val(0);
	$.datepicker.regional['es'] = {
		closeText : 'Cerrar',
		prevText : '<Ant',
		nextText : 'Sig>',
		currentText : 'Hoy',
		monthNames : [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
				'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
				'Diciembre' ],
		monthNamesShort : [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul',
				'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
		dayNames : [ 'Domingo', 'Lunes', 'Martes', 'Mi\u00E9rcoles', 'Jueves',
				'Viernes', 'S\u00E1bado' ],
		dayNamesShort : [ 'Dom', 'Lun', 'Mar', 'Mi\u00E9', 'Juv', 'Vie', 'S\u00E1b' ],
		dayNamesMin : [ 'Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S\u00E1' ],
		weekHeader : 'Sm',
		dateFormat : 'dd-mm-yy',
		firstDay : 0,
		isRTL : false,
		showMonthAfterYear : false,
		yearSuffix : ''
	};
	$.datepicker.setDefaults($.datepicker.regional['es']);
	// Inicializa configuracion y control de calendarios
	$("#startDate-hotel")
			.datepicker(
					{
						minDate : 0,
						numberOfMonths : 2,
						onClose : function(selectedDate) {			
							if($("#startDate-hotel").val()!="dd-mm-yyyy"){
							$("#endDate-hotel").datepicker({
								defaultDate : "+1d",
								numberOfMonths : 2,
								onClose : function(selectedDate) {
									//$("#warningDates").hide("fast");
									$( "#startDate-hotel" ).removeClass( "error-input" );
								}
							});
							}		
							//$("#warning").hide("fast");
							$( "#startDate-hotel" ).removeClass( "error-input" );
							$("#endDate-hotel").datepicker("option", "minDate",selectedDate);
							var arrayDate = selectedDate.split("-");
							var fecha = new Date(arrayDate[2],(arrayDate[1] - 1), arrayDate[0]);
							var fechaMas30 = new Date(arrayDate[2],(arrayDate[1] - 1), arrayDate[0]);
							fecha.setDate(fecha.getDate() + 1);
							fechaMas30.setDate(fechaMas30.getDate() + 29);
							$("#endDate-hotel").datepicker("setDate", fecha);
							$("#endDate-hotel").datepicker("option", "maxDate",fechaMas30);			
						}
					});
// Finaliza configuracion y control de calendarios
	$("#r").change(function() {
		var rooms = $('#r').val();
		switch (rooms) {
		case "1":
			for(var i=2;i<=5;i++){
				$("#r"+i+"kage").hide("fast");
				$("#r"+i+"k-hotel-").val(0);
				$("#textr"+i+"k-hotel-").hide("fast");
				for(var j=1;j<=3;j++){
					$("#r"+i+"k-hotel-"+j+"a").val(0);
					$("#r"+i+"k-hotel-"+j+"a").hide("fast");
				}
			}
			break;
		case "2":
			for(var i=3;i<=5;i++){
				$("#r"+i+"k-hotel-").val(0);
				$("#textr"+i+"k-hotel-").hide("fast");
				for(var j=1;j<=3;j++){
					$("#r"+i+"k-hotel-"+j+"a").val(0);
					$("#r"+i+"k-hotel-"+j+"a").hide("fast");
				}
			}
			$("#r2kage").show("fast");
			$("#r3kage").hide("fast");
			$("#r4kage").hide("fast");
			$("#r5kage").hide("fast");
			// $( "#dialog-confirm" ).dialog( "open" );
			break;
		case "3":
			for(var i=4;i<=5;i++){
				$("#r"+i+"k-hotel-").val(0);
				$("#textr"+i+"k-hotel-").hide("fast");
				for(var j=1;j<=3;j++){
					$("#r"+i+"k-hotel-"+j+"a").val(0);
					$("#r"+i+"k-hotel-"+j+"a").hide("fast");
				}
			}
			
			$("#r2kage").show("fast");
			$("#r3kage").show("fast");
			$("#r4kage").hide("fast");
			$("#r5kage").hide("fast");
			// $( "#dialog-confirm" ).dialog( "open" );
			break;
		case "4":
			for(var i=5;i<=5;i++){
				$("#r"+i+"k-hotel-").val(0);
				$("#textr"+i+"k-hotel-").hide("fast");
				for(var j=1;j<=3;j++){
					$("#r"+i+"k-hotel-"+j+"a").val(0);
					$("#r"+i+"k-hotel-"+j+"a").hide("fast");
				}
			}
			$("#r2kage").show("fast");
			$("#r3kage").show("fast");
			$("#r4kage").show("fast");
			$("#r5kage").hide("fast");
			// $( "#dialog-confirm" ).dialog( "open" );
			break;
		case "5":
			$("#r2kage").show("fast");
			$("#r3kage").show("fast");
			$("#r4kage").show("fast");
			$("#r5kage").show("fast");
			// $( "#dialog-confirm" ).dialog( "open" );
			break;
		default:
		}
	});

	var lang=$("#lang").val();
	var limit=$("#limit").val();
	var urljsonp="https://www.travelnet.com.mx/Autocompleteboxjsonp/autocompletecity?callback=?";
	$("#destino-hotel").autocomplete({
		source : function(request, response) {
			$.ajax({
						url : urljsonp,
						dataType : "jsonp",
						data : {
							q : request.term,
							lang : lang,
							limit : limit
						},
						success : function(data) {
							$("#citycode-hotel").val("");
							response($.map(data,function(item) {
												var ciudad=item.split("|");
												return {
													label : ciudad[0] + ", "+ciudad[1]+"",
													value : ciudad[0],
													citycode : ciudad[2]
												};
											}));
						}
					});
		},
		minLength : 2,
		maxLength : 5,
		select : function(event, ui) {	
			$("#citycode-hotel").val(ui.item.citycode);
			//$("#warningDest").hide("fast");
			$("#destino-hotel" ).removeClass( "error-input" );
			/*
			 * log( ui.item ? "Selected: " + ui.item.label :
			 * "Nothing selected, input was " + this.value);
			 */
		},
		open : function() {
			$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
		},
		close : function(event, ui) {
			$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
			
			if($("#citycode-hotel").val()==""){
				//$("#warningDest").show("fast");
				$("#destino-hotel" ).addClass( "error-input" );
			}	
		}
	});
	$("#radio1").prop("checked", true);
	$("#rooms").buttonset();
	
	$( "#nh" ).tooltip({
		 show: null,
		 position: {
		 my: "left top",
		 at: "left bottom"
		 },
		 open: function( event, ui ) {
		 ui.tooltip.animate({ top: ui.tooltip.position().top + 10 }, "fast" );
		 }
	});
		 
	$("#ver-precios-hotel").click(function(e) {
		e.preventDefault();
		var eval = $("#startDate-hotel").val();
		var dest = $("#citycode-hotel").val();
		if (eval == "" || dest == "" || $("#startDate-hotel").val()==$("#endDate-hotel").val()) {
			if (eval == "") {
				//$("#warning").show("fast");
				$( "#startDate-hotel" ).addClass( "error-input" );
			}
			if (dest == "") {
				//$("#warningDest").show("fast");
				$( "#destino-hotel" ).addClass( "error-input" );
			}
			if( $("#startDate-hotel").val()!='' && $("#startDate-hotel").val()==$("#endDate-hotel").val() ){
				//$("#warningDates").show("fast");
				$( "#startDate-hotel" ).addClass( "error-input" );
			}
			
		} else {

			var serviceType = 'hotel';
	        $.blockUI({ 
	        	//message: '<svg style="margin-top:10px, margin-bottom:10px" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g fill="none" fill-rule="evenodd" stroke-width="3"><circle cx="50" cy="50" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="10; 50" calcMode="spline" keyTimes="0; 1" keySplines="0.25, 0.84, 0.44, 1" repeatCount="indefinite" /><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="10; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.5, 0.61, 0.355, 1"  repeatCount="indefinite" /></circle><circle cx="50" cy="50" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="10; 50" calcMode="spline" keyTimes="0; 1" keySplines="0.25, 0.84, 0.44, 1" repeatCount="indefinite" /><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="10; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.5, 0.61, 0.355, 1" repeatCount="indefinite" /></circle></g></svg>',
	        	message: '<span id="loading-'+serviceType+'" style="margin-top:10px, margin-bottom:10px" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="#fff"></span>',
         	    css: {
        	        border:     'none',
        	        backgroundColor:'rgba(0, 0, 0, 0)',
        	        opacity: .8,
        	        zIndex: 1011
	
        	    }
	        }); 
	        $('#loading-'+serviceType).append($('#loading-tag-'+serviceType).html());
			 
	        $("#form-hotel").submit();
	        $('#divbuttonverprecios-hotel').hide();
			$('#divbuttonverpreciosbuscando-hotel').show();
		}
	});
		 
});



function arg(id, valor) {
		/*
	var name_input = id.replace('-hotel-','');
	console.log(name_input);
	console.log (valor);
	$("input[name=" + name_input + "]").val(valor);
*/
	var rk = valor;
	if (rk > 0) {
		$("#text"+id).show("fast");
	} else {
		$("#text"+id).hide("fast");
	}
	switch (rk) {
	case "0":
		$("#"+id+"1a").val(0);
		$("#"+id+"2a").val(0);
		$("#"+id+"3a").val(0);
		$("#"+id+"1a").hide("fast");
		$("#"+id+"2a").hide("fast");
		$("#"+id+"3a").hide("fast");
		break;
	case "1":
		$("#"+id+"2a").val(0);
		$("#"+id+"3a").val(0);
		$("#"+id+"1a").show("fast");
		$("#"+id+"2a").hide("fast");
		$("#"+id+"3a").hide("fast");
		break;
	case "2":
		$("#"+id+"3a").val(0);
		$("#"+id+"1a").show("fast");
		$("#"+id+"2a").show("fast");
		$("#"+id+"3a").hide("fast");
		break;
	case "3":
		$("#"+id+"1a").show("fast");
		$("#"+id+"2a").show("fast");
		$("#"+id+"3a").show("fast");
		break;
	default:
	}
	
	if( $("#r1k-hotel-").val() == '0' && 
		$("#r2k-hotel-").val() == '0' && 
		$("#r3k-hotel-").val() == '0' && 
		$("#r4k-hotel-").val() == '0' && 
		$("#r5k-hotel-").val() == '0' ){
		$('#kids-age-label').hide();
	} else {
		$('#kids-age-label').show();
	}
	
}