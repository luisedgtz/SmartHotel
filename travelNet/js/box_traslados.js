/**
 * AutocompleteboxjsonpController
 * 
 * @author Ing. Juan Garfias V�zquez
 * @email jgarfias@travelnet.com.mx
 * @version 3.0
 * @date 07/Abril/2016
 */	
// Traducción al español calendario.
	$(function($){
		$.datepicker.regional['es'] = {
			closeText : 'Cerrar',
			prevText : '<Ant',
			nextText : 'Sig>',
			currentText : 'Hoy',
			monthNames : [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre' ],
			monthNamesShort : [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
			dayNames : [ 'Domingo', 'Lunes', 'Martes', 'Mi\u00E9rcoles', 'Jueves','Viernes', 'S\u00E1bado' ],
			dayNamesShort : [ 'Dom', 'Lun', 'Mar', 'Mi\u00E9', 'Juv', 'Vie', 'S\u00E1b' ],
			dayNamesMin : [ 'Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S\u00E1' ],
			weekHeader : 'Sm',
			dateFormat : 'dd-mm-yy',
			firstDay : 0,
			isRTL : false,
			showMonthAfterYear : false,
			yearSuffix : ''};
		
		$.datepicker.setDefaults($.datepicker.regional['es']);
		// Inicializa configuracion y control de calendarios
		$("#startDate-transfer")
				.datepicker(
						{
							minDate : 0,
							numberOfMonths : 2,
							onClose : function(selectedDate) {
								if($("#startDate-transfer").val()!=""){
									
									
									//$("#advertencia").hide("blind");
									$( "#startDate-transfer" ).removeClass( "error-input" );
									
									
									$("#endDate-transfer").datepicker({
										defaultDate : "+1d",
										numberOfMonths : 2,
										onClose : function(selectedDate) {
										}
									});
									}	
								
								$("#endDate-transfer").datepicker("option", "minDate",selectedDate);
								var arrayDate = selectedDate.split("-");
								var fecha = new Date(arrayDate[2],(arrayDate[1] - 1), arrayDate[0]);
								var fechaMas30 = new Date(arrayDate[2],(arrayDate[1] - 1), arrayDate[0]);
								fecha.setDate(fecha.getDate() + 1);
								fechaMas30.setDate(fechaMas30.getDate() + 29);
								$("#endDate-transfer").datepicker("setDate", fecha);
								$("#endDate-transfer").datepicker("option", "maxDate", fechaMas30);
							}
		});
	// Finaliza configuracion y control de calendarios

	$( "#dialog" ).dialog({
		autoOpen: false,
		modal:true,
		position:"fixed",
		open: function(event, ui) { $(".ui-dialog-titlebar-close", ui.dialog | ui).hide(); },
		closeOnEscape: false
	});

	$( "#dialog" ).dialog({ width: 600,height: 200 });
	//Termina configuracion de men

	//Inicializa variables.
	$( "#r1k-tranfer" ).val(0);
	$( "#round").attr("checked",false);
	$( "#trans").val("");
	$( "#dc-transfer").val("");
	$( "#ac-transfer").val("");
	$( "#trans_name").val("");
	$( "#hotel_name").val("");
	
	$( "#totime").val("00:00");
	$( "#fromtime").val("00:00");
	$( "#totime_horas").val("00");
	$( "#totime_minutos").val("00");
	$( "#fromtime_horas").val("00:00");
	$( "#fromtime_minutos").val("00:00");

	//Caja de texto que muestra la leyenda de la edad de los menores cuando esta aplica.
	$( "#r1k-tranfer" ).change(function() {
		var r1k=$( "#r1k-tranfer" ).val();
		if(r1k>0){$( "#textr1k-tranfer" ).show("blind");}else{$( "#textr1k-tranfer" ).hide("blind");}
		 
		for(var i=r1k;i<=7;i++){
			$( "#child_age_"+i).val(0);
			$( "#child_age_"+i).hide("blind");
		}
		for(var i=0;i<r1k;i++){
			$( "#child_age_"+i).show("blind");
		}
	});

	//Para indicar que se requiere el viaje de regreso  y muestre el segundo calendario.
	$( "#round" ).click(function() {
		if($(this).is(":checked")) {
			$( "#fechaRegreso").val("");
			$( "#fechaRegreso").show("blind");
			//$("#advertencia").hide("blind");
			$( "#startDate-transfer" ).removeClass( "error-input" );
			
			
		}else{
			$( "#fechaRegreso").val("");
			$( "#fechaRegreso").hide("blind");
		}
	});

	$( "#pickup" ).change(function(){
		var pickup=$( "#pickup").val();
			if(pickup=="H"){
				$( "#fechaRegreso").val("");
				$( "#fechaRegreso").hide("blind");
				$( "#horaRegreso").hide("blind");
				$( "#minRegreso").hide("blind");	
				$( "#id_regreso").hide("blind");	
			}else{
				$( "#id_regreso").show("blind");	
				$( "#round").attr("checked",false);
			}
	});
	
	$( "#dropoff" ).change(function(){
		var pickup=$( "#dropoff").val();
			if(pickup=="A"){
				$( "#fechaRegreso").val("");
				$( "#fechaRegreso").hide("blind");
				$( "#horaRegreso").hide("blind");
				$( "#minRegreso").hide("blind");	
				$( "#id_regreso").hide("blind");	
			}else{
				$( "#id_regreso").show("blind");	
				$( "#round").attr("checked",false);
			}
	});

	//Boton que lanza el mensaje de dialogo siempre y cuando cumpla la regla de tener ya una fecha seleccionada.
	$( "#ver-precios-tranfer" ).click(function(e) {
		$( "#trans").val('');
		$( "#hotel").val('');
		$( "#trans_name").val('');
		$( "#hotel_name").val('');
	    e.preventDefault();
		$('#dialog').hide();
		$('#airport-hotel').hide();
		$('#div-searching-hotel-airport').show();
		var startDate=$( "#startDate-transfer").val();
		if(startDate=="" || $("#destino").val()=="" ){
			($("#startDate-transfer").val()=="" ) ? $( "#startDate-transfer" ).addClass( "error-input") : $( "#startDate-transfer" ).removeClass( "error-input" );
			($("#destino").val()=="" ) ? $( "#llegada" ).addClass( "error-input" ) : $( "#llegada" ).removeClass( "error-input" );
			($("#llegada").val()=="" ) ?$( "#destino" ).addClass( "error-input" ) : $( "#destino" ).removeClass( "error-input" );

			
		}else{

			$( "#startDate-transfer" ).removeClass( "error-input" )
			$( "#destino" ).removeClass( "error-input" );
			$( "#llegada" ).removeClass( "error-input" );
			
			var idDC=$("#dc-transfer").val();
			var idAC=$("#ac-transfer").val();
			var pickup=$("#pickup").val();
			var dropoff=$("#dropoff").val();
			$.ajax({
				url : "https://travelnet.com.mx/Autocompleteboxjsonp/trasladohotelaeropuerto?callback=?",
				
				// the name of the callback parameter, as specified by the YQL service
				jsonp: "callback",
				// tell jQuery we're expecting JSONP
				dataType: "jsonp",
				// tell YQL what we want and that we want JSON
				data: $('#form-transfer').serialize(),
				// work with the response
				success: function( response ) {

					if (response['hotels'].length > 0 && response['terminals'].length > 0){
							
							$( "#trans" ).empty();
							$( "#trans" ).append( "<option value='0'>Seleccione un Aeropuerto...</option>" );
							$( "#hotel" ).empty();
							$( "#hotel" ).append( "<option value='0'>Seleccione un Hotel...</option>" );
							$('#warning').empty();
							$('#dialog').show();
							$.each( response, function( key, value ) {
			
								$.each( value, function( key2, value2 ) {
								if(key=="hotels"){
									$( "#hotel" ).append( "<option value='"+value2.hotel_code+"'>"+value2.name+"</option>" );
								}else{
									$( "#trans" ).append( "<option value='"+value2.terminal+"'>"+value2.name+"</option>" );
								}
								});
							});
							$('#airport-hotel').show();
							$('#div-searching-hotel-airport').hide();
							
					}else{
						$('#div-searching-hotel-airport').hide();
						$('#not-found-sources').html(response['warning']);
						$('#not-found-sources-div').show();
						
						
					}

				}
			});
			$( "#dialog" ).dialog( "open" );
		}
	});

	//Funcion que se asegura que el traslado se de A-H o H-A
	$( "#pickup" ).change(function(){
		var pickup=$( "#pickup").val();
		if(pickup=="H"){
			$( "#dropoff").val("A");
		}else{
			$( "#dropoff").val("H");
		}
	});
	$( "#dropoff" ).change(function(){
		var pickup=$( "#dropoff").val();
		if(pickup=="H"){
			$( "#pickup").val("A");
		}else{
			$( "#pickup").val("H");
		}
	});

	//Boton de continuar y que envia la peticion a travelnet siempre y cuando cumpla con la seleccion de hotel y aeropuerto.
	$( "#continuar" ).click(function() {
		var trasEval=$( "#trans").val();
		var hotelEval=$( "#hotel").val();
		if(trasEval!=0 && hotelEval!=0){
			$('#airport-hotel').hide();
			$('#div-searching-hotel-airport').show();
			 $('#div-button-ver-precios-transfer').hide();
			 $('#div-button-ver-precios-buscando-transfer').show();
	   		$( "#form-transfer" ).submit();
	   		
			var serviceType = 'transfer';
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
	   		
		}else{
			if(trasEval==0){ $( "#trans" ).addClass( "error-input" );}
			if(hotelEval==0){ $( "#hotel" ).addClass( "error-input" );}
		}
	});

	//Llena los campos invisibles de la hora completa de ida y regreso "00:00"
	$( "#fromtime_horas" ).change(function(){
		var fromtime_horas=$( "#fromtime_horas").val();
		var fromtime_minutos=$( "#fromtime_minutos").val();
		$( "#fromtime").val(fromtime_horas+":"+fromtime_minutos);
	});

	$( "#fromtime_minutos" ).change(function(){
		var fromtime_horas=$( "#fromtime_horas").val();
		var fromtime_minutos=$( "#fromtime_minutos").val();
		$( "#fromtime").val(fromtime_horas+":"+fromtime_minutos);
	});

	$( "#totime_horas" ).change(function(){
		var fromtime_horas=$( "#totime_horas").val();
		var fromtime_minutos=$( "#totime_minutos").val();
		$( "#totime").val(fromtime_horas+":"+fromtime_minutos);
	});

	$( "#totime_minutos" ).change(function(){
		var fromtime_horas=$( "#totime_horas").val();
		var fromtime_minutos=$( "#totime_minutos").val();
		$( "#totime").val(fromtime_horas+":"+fromtime_minutos);
	});

	//Funcion que crea el UniqID
	function uniqid() {
	    var ts=String(new Date().getTime()), i = 0, out = '';
	    for(i=0;i<ts.length;i+=2) {        
	       out+=Number(ts.substr(i, 2)).toString(36);    
	    }
	    return ('d'+out);
	}
	var idUniq=uniqid();
	$( "#idUniq").val(idUniq);

	//Funcion que asigna los valores de la selección de Hotel y Aeropuerto a sus campos invisíbles.
	$( "#trans" ).change(function(){
		$( "#trans_name").val($( "#trans").val());
	});

	$( "#hotel" ).change(function(){
		$( "#hotel_name").val($( "#hotel").val());
	});

});
	
	$(function($) {

		$("#llegada").autocomplete({
			source : function(request, response) {
				$.ajax({
							
							url : "https://www.travelnet.com.mx/Autocompleteboxjsonp/trasladosv2?callback=?",
							
							dataType : "jsonp",
							data : {
								q : request.term,
								b : "cities"
							},
							success : function(data) {
								$("#ac-transfer").val("");
								$("#dc-transfer").val("");
								response($.map(data,function(item) {
													var ciudad=item.split("|");
													return {
														label : ciudad[0] + ", "+ciudad[1]+"",
														value : ciudad[0],
														code : ciudad[2]
													};
												}));
							}
						});
			},
			minLength : 2,
			maxLength : 5,
			select : function(event, ui) {
				$("#destino").val(ui.item.value);
				$("#ac-transfer").val(ui.item.code);
				$("#dc-transfer").val(ui.item.code);
				$( "#llegada" ).removeClass( "error-input" );
				$( "#destino" ).removeClass( "error-input" );
				$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
					},
			open : function() {
				$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
					},
			close : function() {
				
				if($("#ac-transfer").val()==""){
					$( "#llegada" ).addClass( "error-input" );
					$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
				}	
			}
		});
		
		$("#destino").autocomplete({
			source : function(request, response) {
				$.ajax({
							url : "https://www.travelnet.com.mx/Autocompleteboxjsonp/trasladosv2?callback=?",
							
							dataType : "jsonp",
							data : {
								q : request.term,
								b : "cities"
								
							},
							success : function(data) {
								response($.map(data,function(item) {
													var ciudad=item.split("|");
													return {
														label : ciudad[0] + ", "+ciudad[1]+"",
														value : ciudad[0],
														code : ciudad[2]
													};
												}));
							}
						});
			},
			minLength : 2,
			maxLength : 5,
			select : function(event, ui) {
				$("#dc-transfer").val(ui.item.code);
			},
			open : function() {
				$(this).removeClass("ui-corner-all").addClass(
						"ui-corner-top");
			},
			close : function() {
				$(this).removeClass("ui-corner-top").addClass(
						"ui-corner-all");
			}
		});
});
	
function closeDialog(){
	$( "#dialog" ).dialog( "close" );
	$('#not-found-sources-div').hide();
}


function quitarClassError( ID ){
	$( "#"+ID ).removeClass( "error-input" );
}
