/**
 * AutocompleteboxjsonpController
 * 
 * @author Ing. Juan Garfias V�zquez
 * @email jgarfias@travelnet.com.mx
 * @version 3.0
 * @date 07/Abril/2016
 * 
 */
	$(function($) {
		
		// Traducci�n al espa�ol calendario.
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

		// Inicia configuracion de calendario From - To
		$("#flight0startDate").datepicker(
				{
					minDate : 0,
					//defaultDate: "+1w",
					
					numberOfMonths : 2,
					onClose : function(selectedDate) {
						
						$( "#flight0startDate" ).removeClass( "error-input" );
						$("#flight0endDate").datepicker("option", "minDate",selectedDate);
						var arrayDate = selectedDate.split("-");
						//alert(arrayDate[2]+'-'+ arrayDate[0]+'-'+ (arrayDate[1] - 1));
						var fecha = new Date(arrayDate[2],(arrayDate[1] - 1), arrayDate[0]);
						fecha.setDate(fecha.getDate() + 1);

						$("#flight0endDate").datepicker("setDate", fecha);
						
						$("#flight1startDate").datepicker("option", "minDate",selectedDate);
						var arrayDate = selectedDate.split("-");
						var fecha = new Date(arrayDate[2], arrayDate[1]-1,arrayDate[0]);
						fecha.setDate(fecha.getDate() + 1);

						$("#flight1startDate").datepicker("setDate", fecha);
						
						$( "#advertenciaFechaIda0" ).removeClass( "error-input" );
						$( "#flight0endDate" ).removeClass( "error-input" );
					}
				});
		
		$("#flight0endDate").datepicker({
			//defaultDate: "+1w",
			
			numberOfMonths : 2,
			onClose : function(selectedDate) {
				$("#flight0startDate").datepicker("option", "maxDate", selectedDate);
				$( "#flight0endDate" ).removeClass( "error-input" );
			}
		});
		
		
		$("#flight1startDate").datepicker(
				{
					minDate : 0,
					//defaultDate: "+1w",
					
					numberOfMonths : 2,
					onClose : function(selectedDate) {
						$("#flight2startDate").datepicker("option", "minDate",selectedDate);
						var arrayDate = selectedDate.split("-");
						var fecha = new Date(arrayDate[2], arrayDate[1]-1,arrayDate[0]);
						fecha.setDate(fecha.getDate() + 1);
						//$("#advertencia13").hide("fast");
						$("#flight1startDate" ).removeClass( "error-input" );
						$("#flight2startDate").datepicker("setDate", fecha);
					}
				});
		
		$("#flight2startDate").datepicker(
				{
					minDate : 0,
					//defaultDate: "+1w",
					
					numberOfMonths : 2,
					onClose : function(selectedDate) {
						$("#flight3startDate").datepicker("option", "minDate",
								selectedDate);
						var arrayDate = selectedDate.split("-");
						var fecha = new Date(arrayDate[2], arrayDate[1]-1,arrayDate[0]);
						fecha.setDate(fecha.getDate() + 1);
						//$("#advertencia23").hide("fast");
						$("#flight2startDate").removeClass( "error-input" );
						$("#flight3startDate").datepicker("setDate", fecha);
					}
				});
		
		$("#flight3startDate").datepicker(
				{
					minDate : 0,
					//defaultDate: "+1w",
					
					numberOfMonths : 2,
					onClose : function(selectedDate) {
						$("#flight4startDate").datepicker("option", "minDate",
								selectedDate);
						var arrayDate = selectedDate.split("-");
						var fecha = new Date(arrayDate[2], arrayDate[1]-1,arrayDate[0]);
						fecha.setDate(fecha.getDate() + 1);
						//$("#advertencia33").hide("fast");
						$( "#flight3startDate" ).removeClass( "error-input" );
						$("#flight4startDate").datepicker("setDate", fecha);
					}
				});
		
		$("#flight4startDate").datepicker(
				{
					minDate : 0,
					//defaultDate: "+1w",
					
					numberOfMonths : 2,
					onClose : function(selectedDate) {
						$("#flight5startDate").datepicker("option", "minDate",
								selectedDate);
						var arrayDate = selectedDate.split("-");
						var fecha = new Date(arrayDate[2], arrayDate[1]-1,arrayDate[0]);
						fecha.setDate(fecha.getDate() + 1);
						//$("#advertencia43").hide("fast");
						$("#flight4startDate").removeClass( "error-input" );
						$("#flight5startDate").datepicker("setDate", fecha);
					}
				});
		
		
		//Termina configuracion de calendario From - To

		$("#r1k").val(0);
		$("#flight0startDate").val("");
		$("#flight0endDate").val("");
		$("#flight1startDate").val("");
		$("#flight2startDate").val("");
		$("#flight3startDate").val("");
		$("#flight4startDate").val("");

		//Mostramos / ocultamos el texto por defecto si es necesario
		function textSearch(id, defaultText) {
			id.focus(function() {
				if ($(this).attr("value") == defaultText)
					$(this).attr("value", "");
			});
			id.blur(function() {
				if ($(this).attr("value") == "")
					$(this).attr("value", defaultText);
			});
		}
		
		//Caja de texto que muestra la leyenda de la edad de los menores cuando esta aplica.
		$("#r1k").change(function() {


			var r1k = $("#r1k").val();
			if (r1k > 0) {
				$("#textr1k").show("fast");
			} else {
				$("#textr1k").hide("fast");
			}
			switch (r1k) {
			case "0":

				for( var i=r1k ; i<=8 ; i++ ){
					$("#child_age_"+i+'-flight').hide("fast");
					j=parseInt(i)+1;
					$("#r1k"+j+"a").val("");$("#s1k"+j).prop("checked",false);
					$("input[name=s1k"+j+"]").val(0);
				}

			break;
			case "1":
				for(var i=r1k ; i<=8 ; i++ ){
					$("#child_age_"+i+'-flight').hide("fast");
					j=parseInt(i)+1;
					$("#r1k"+j+"a").val("");$("#s1k"+j).prop("checked",false);
					$("input[name=s1k"+j+"]").val(0);
				}
				for(var i=0 ; i<r1k ; i++ ){
					$("#child_age_"+i+'-flight').show("fast");
				}
			break;
			case "2":
				for(var i=r1k ; i<=8 ; i++ ){
					$("#child_age_"+i+'-flight').hide("fast");
					j=parseInt(i)+1;
					$("#r1k"+j+"a").val("");$("#s1k"+j).prop("checked",false);
					$("input[name=s1k"+j+"]").val(0);
				}
				for(var i=0 ; i<r1k ; i++ ){
					$("#child_age_"+i+'-flight').show("fast");
				}
			break;
			case "3":
				for(var i=r1k ; i<=8 ; i++ ){
					$("#child_age_"+i+'-flight').hide("fast");
					j=parseInt(i)+1;
					$("#r1k"+j+"a").val("");$("#s1k"+j).prop("checked",false);
					$("input[name=s1k"+j+"]").val(0);
				}
				for(var i=0 ; i<r1k ; i++ ){
					$("#child_age_"+i+'-flight').show("fast");
				}
			break;
			case "4":
				for(var i=r1k ; i<=8 ; i++ ){
					$("#child_age_"+i+'-flight').hide("fast");
					j=parseInt(i)+1;
					$("#r1k"+j+"a").val("");$("#s1k"+j).prop("checked",false);
					$("input[name=s1k"+j+"]").val(0);
				}
				for(var i=0 ; i<r1k ; i++ ){
					$("#child_age_"+i+'-flight').show("fast");
				}
			break;
			case "5":
				for(var i=r1k ; i<=8 ; i++ ){
					$("#child_age_"+i+'-flight').hide("fast");
					j=parseInt(i)+1;
					$("#r1k"+j+"a").val("");$("#s1k"+j).prop("checked",false);
					$("input[name=s1k"+j+"]").val(0);
				}
				for(var i=0 ; i<r1k ; i++ ){
					$("#child_age_"+i+'-flight').show("fast");
				}
			break;
			case "6":
				for(var i=r1k ; i<=8 ; i++ ){
					$("#child_age_"+i+'-flight').hide("fast");
					j=parseInt(i)+1;
					$("#r1k"+j+"a").val("");$("#s1k"+j).prop("checked",false);
					$("input[name=s1k"+j+"]").val(0);
				}
				for(var i=0 ; i<r1k ; i++ ){
					$("#child_age_"+i+'-flight').show("fast");
				}
			break;
			case "7":
				for(var i=r1k ; i<=8 ; i++ ){
					$("#child_age_"+i+'-flight').hide("fast");
					j=parseInt(i)+1;
					$("#r1k"+j+"a").val("");$("#s1k"+j).prop("checked",false);
					$("input[name=s1k"+j+"]").val(0);
				}
				for(var i=0 ; i<r1k ; i++ ){
					$("#child_age_"+i+'-flight').show("fast");
				}
			break;
			case "8":
				for(var i=0 ; i<r1k ; i++ ){
					$("#child_age_"+i+'-flight').show("fast");
				}
			break;
			default:
			}
			//if(r1k!=0){
				validar();
			//}
		});

		
		//$("#flightType-roundtrip").attr("checked",true);

		$('#flightType-roundtrip').prop('checked', true);

		$("input[name=flightType]").click(function() {
			var tipo = $('input[name=flightType]:checked', '#formVuelos').val();
			switch (tipo) {

			case 'roundtrip':
				$("#fechaRegreso-flight").show("fast");
				$("#relojRegresa-flight").show("fast");
				$("#multiplesDestinos").hide("fast");
				//$( "#endDate").css("color","#a3a3a3");
				multiplesVuelosDisabled(1);
				multiplesVuelosDisabled(2);
				multiplesVuelosDisabled(3);
				multiplesVuelosDisabled(4);
				$("#destino2").hide("fast");
				 $("#destino3").hide("fast");
				 $("#destino4").hide("fast");
				break;
			case 'oneway':
				$("#fechaRegreso-flight").hide("fast");
				$("#relojRegresa-flight").hide("fast");
				$("#multiplesDestinos").hide("fast");
				//$( "#endDate").css("color","red");
				multiplesVuelosDisabled(1);
				multiplesVuelosDisabled(2);
				multiplesVuelosDisabled(3);
				multiplesVuelosDisabled(4);
				 $("#destino2").hide("fast");
				 $("#destino3").hide("fast");
				 $("#destino4").hide("fast");
				 
				break;
			case 'multiple':
				$("#fechaRegreso-flight").hide("fast");
				$("#relojRegresa-flight").hide("fast");
				$("#multiplesDestinos").show("fast");
				$("#agregarDestino").show("fast");
				$("#eliminarDestino").hide("fast");
				multiplesVuelosDisabledRemove(1);
				
				break;
			default:

				break;
			}
		});

		//var jsonpurl="http://192.168.20.11/tnw/html/Autocompleteboxjsonp/vuelosv2?callback=?";
		var jsonpurl="https://www.travelnet.com.mx/Autocompleteboxjsonp/vuelosv2?callback=?";
		var jsonpaerolineas="https://www.travelnet.com.mx/Autocompleteboxjsonp/aerolineas?callback=?";
		
		var limit=$("#limit") .val();
		var lang = $("#lang").val();
		
		
		$("#flight0from").autocomplete({
			source : function(request, response) {
				$.ajax({
					url : jsonpurl,
					dataType : "jsonp",
					data : {
						q : request.term,
						limit : limit,
						lang : lang
					},
					success : function(data) {
						response($.map(data, function(item) {
							
							var ciudad=item.split("|");
							return ({
								label : ciudad[0] + ", "+ciudad[1]+"",
								value : ciudad[0],
								cFrom : ciudad[2]
							});
							
						}));
					}
				});
			},
			minLength : 2,
			maxLength : 5,
			select : function(event, ui) {
				
				$("#cFrom").val(ui.item.cFrom);
				/*
				log( ui.item ?
				"Selected: " + ui.item.label :
				"Nothing selected, input was " + this.value);
				 */
				$( "#flight0from" ).removeClass( "error-input" );
				
				
			},
			open : function() {
				$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
			},
			close : function() {
				$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
			}
		});

		$("#flight0to").autocomplete({
			source : function(request, response) {
				$.ajax({
					url : jsonpurl,
					dataType : "jsonp",
					data : {
						q : request.term,
						limit : limit,
						lang : lang
					},
					success : function(data) {
						response($.map(data, function(item) {
							
							var ciudad=item.split("|");
							return ({
								label : ciudad[0] + ", "+ciudad[1]+"",
								value : ciudad[0],
								cFrom : ciudad[2]
							});
						}));
					}
				});
			},
			minLength : 2,
			maxLength : 5,
			select : function(event, ui) {

				$("#cTo").val(ui.item.cFrom);
				/*
				log( ui.item ?
				"Selected: " + ui.item.label :
				"Nothing selected, input was " + this.value);
				 */
				$( "#flight0to" ).removeClass( "error-input" );
			},
			open : function() {
				$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
			},
			close : function() {
				$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
			}
		});
		
		///////////////////////////////////
		
		$("#flight1from").autocomplete({
			source : function(request, response) {
				$.ajax({
					url : jsonpurl,
					dataType : "jsonp",
					data : {
						q : request.term,
						limit : limit,
						lang : lang
					},
					success : function(data) {
						response($.map(data, function(item) {
							
							var ciudad=item.split("|");
							return ({
								label : ciudad[0] + ", "+ciudad[1]+"",
								value : ciudad[0],
								cFrom : ciudad[2]
							});
						}));
					}
				});
			},
			minLength : 2,
			maxLength : 5,
			select : function(event, ui) {

				$("#cFrom1").val(ui.item.cFrom);
				/*
				log( ui.item ?
				"Selected: " + ui.item.label :
				"Nothing selected, input was " + this.value);
				 */
				$( "#flight1from" ).removeClass( "error-input" );
			},
			open : function() {
				$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
			},
			close : function() {
				$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
			}
		});

		$("#flight1to").autocomplete({
			source : function(request, response) {
				$.ajax({
					url : jsonpurl,
					dataType : "jsonp",
					data : {
						q : request.term,
						limit : limit,
						lang : lang
					},
					success : function(data) {
						response($.map(data, function(item) {
							
							var ciudad=item.split("|");
							return ({
								label : ciudad[0] + ", "+ciudad[1]+"",
								value : ciudad[0],
								cFrom : ciudad[2]
							});
						}));
					}
				});
			},
			minLength : 2,
			maxLength : 5,
			select : function(event, ui) {

				$("#cTo1").val(ui.item.cFrom);
				/*
				log( ui.item ?
				"Selected: " + ui.item.label :
				"Nothing selected, input was " + this.value);
				 */
				$("#advertencia12").hide("fast");
				$( "#flight1to" ).removeClass( "error-input" );
			},
			open : function() {
				$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
			},
			close : function() {
				$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
			}
		});
		
		//////////////////////////
		///////////////////////////////////
		
		$("#flight2from").autocomplete({
			source : function(request, response) {
				$.ajax({
					url : jsonpurl,
					dataType : "jsonp",
					data : {
						q : request.term,
						limit : limit,
						lang : lang
					},
					success : function(data) {
						response($.map(data, function(item) {
							
							var ciudad=item.split("|");
							return ({
								label : ciudad[0] + ", "+ciudad[1]+"",
								value : ciudad[0],
								cFrom : ciudad[2]
							});
						}));
					}
				});
			},
			minLength : 2,
			maxLength : 5,
			select : function(event, ui) {

				$("#cFrom2").val(ui.item.cFrom);
				/*
				log( ui.item ?
				"Selected: " + ui.item.label :
				"Nothing selected, input was " + this.value);
				 */
				//$("#advertencia21").hide("fast");
				$( "#flight2from" ).removeClass( "error-input" );
			},
			open : function() {
				$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
			},
			close : function() {
				$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
			}
		});

		$("#flight2to").autocomplete({
			source : function(request, response) {
				$.ajax({
					url : jsonpurl,
					dataType : "jsonp",
					data : {
						q : request.term,
						limit : limit,
						lang : lang
					},
					success : function(data) {
						response($.map(data, function(item) {
							
							var ciudad=item.split("|");
							return ({
								label : ciudad[0] + ", "+ciudad[1]+"",
								value : ciudad[0],
								cFrom : ciudad[2]
							});
						}));
					}
				});
			},
			minLength : 2,
			maxLength : 5,
			select : function(event, ui) {

				$("#cTo2").val(ui.item.cFrom);
				/*
				log( ui.item ?
				"Selected: " + ui.item.label :
				"Nothing selected, input was " + this.value);
				 */
				//$("#advertencia22").hide("fast");
				$( "#flight2to" ).removeClass( "error-input" );
			},
			open : function() {
				$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
			},
			close : function() {
				$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
			}
		});
		
		//////////////////////////
		
		$("#flight3from").autocomplete({
			source : function(request, response) {
				$.ajax({
					url : jsonpurl,
					dataType : "jsonp",
					data : {
						q : request.term,
						limit : limit,
						lang : lang
					},
					success : function(data) {
						response($.map(data, function(item) {
							
							var ciudad=item.split("|");
							return ({
								label : ciudad[0] + ", "+ciudad[1]+"",
								value : ciudad[0],
								cFrom : ciudad[2]
							});
						}));
					}
				});
			},
			minLength : 2,
			maxLength : 5,
			select : function(event, ui) {
				$( "#flight3from" ).removeClass( "error-input" );
				$("#cFrom3").val(ui.item.cFrom);
				/*
				log( ui.item ?
				"Selected: " + ui.item.label :
				"Nothing selected, input was " + this.value);
				 */
				$("#advertencia31").hide("fast");
			},
			open : function() {
				$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
			},
			close : function() {
				$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
			}
		});

		$("#flight3to").autocomplete({
			source : function(request, response) {
				$.ajax({
					url : jsonpurl,
					dataType : "jsonp",
					data : {
						q : request.term,
						limit : limit,
						lang : lang
					},
					success : function(data) {
						response($.map(data, function(item) {
							
							var ciudad=item.split("|");
							return ({
								label : ciudad[0] + ", "+ciudad[1]+"",
								value : ciudad[0],
								cFrom : ciudad[2]
							});
						}));
					}
				});
			},
			minLength : 2,
			maxLength : 5,
			select : function(event, ui) {
				$( "#flight3to" ).removeClass( "error-input" );
				$("#cTo3").val(ui.item.cFrom);
				/*
				log( ui.item ?
				"Selected: " + ui.item.label :
				"Nothing selected, input was " + this.value);
				 */
				$("#advertencia32").hide("fast");
			},
			open : function() {
				$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
			},
			close : function() {
				$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
			}
		});
		/////////////////////////////
		
		$("#flight4from").autocomplete({
			source : function(request, response) {
				$.ajax({
					url : jsonpurl,
					dataType : "jsonp",
					data : {
						q : request.term,
						limit : limit,
						lang : lang
					},
					success : function(data) {
						response($.map(data, function(item) {
							
							var ciudad=item.split("|");
							return ({
								label : ciudad[0] + ", "+ciudad[1]+"",
								value : ciudad[0],
								cFrom : ciudad[2]
							});
						}));
					}
				});
			},
			minLength : 2,
			maxLength : 5,
			select : function(event, ui) {
				$( "#flight4from" ).removeClass( "error-input" );
				$("#cFrom4").val(ui.item.cFrom);
				/*
				log( ui.item ?
				"Selected: " + ui.item.label :
				"Nothing selected, input was " + this.value);
				 */
				$("#advertencia41").hide("fast");
			},
			open : function() {
				$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
			},
			close : function() {
				$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
			}
		});

		$("#flight4to").autocomplete({
			source : function(request, response) {
				$.ajax({
					url : jsonpurl,
					dataType : "jsonp",
					data : {
						q : request.term,
						limit : limit,
						lang : lang
					},
					success : function(data) {
						response($.map(data, function(item) {
							
							var ciudad=item.split("|");
							return ({
								label : ciudad[0] + ", "+ciudad[1]+"",
								value : ciudad[0],
								cFrom : ciudad[2]
							});
						}));
					}
				});
			},
			minLength : 2,
			maxLength : 5,
			select : function(event, ui) {
				$( "#flight4to" ).removeClass( "error-input" );
				$("#cTo4").val(ui.item.cFrom);
				/*
				log( ui.item ?
				"Selected: " + ui.item.label :
				"Nothing selected, input was " + this.value);
				 */
				//$("#advertencia42").hide("fast");
			},
			open : function() {
				$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
			},
			close : function() {
				$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
			}
		});
		
/////////////////////////////////////////////////////////////////////////////////
		
		$("#airline").autocomplete({
			source : function(request, response) {
				$.ajax({
					url : jsonpaerolineas,
					dataType : "jsonp",
					data : {
						q : request.term,
						limit : limit,
						lang : lang
					},
					success : function(data) {
						response($.map(data, function(item) {
							return ({
								label : item.aerolinea,
								airline_code : item.code
							});
						}));
					}
				});
			},
			minLength : 2,
			maxLength : 5,
			select : function(event, ui) {

				$("#airline_code").val(ui.item.airline_code);
				/*
				log( ui.item ?
				"Selected: " + ui.item.label :
				"Nothing selected, input was " + this.value);
				 */

			},
			open : function() {
				$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
			},
			close : function() {
				$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
			}
		});
///////////////////////////////////////////////////////////////////////////////		
		 
		/* 
		 $( "button:first" ).button({
			 icons: {
			 primary: "ui-icon-plusthick"
			 },
			 text: false
			 }).next().button({
			 icons: {
			 primary: "ui-icon-minusthick"
			 },text: false
			});
		 */
		 $( "#agregarDestino" ).click(function(e) {
			 e.preventDefault();
			 var d2=0;
			 var d3=0;
			 var d4=0;
			 if($("#destino2").css("display")!="none"){ d2 = 1; }
			 if($("#destino3").css("display")!="none"){ d3 = 1; }
			 if($("#destino4").css("display")!="none"){ d4 = 1; }

			 if(d2==0){
				 $("#destino2").show("fast");
				 multiplesVuelosDisabledRemove(2);
				 $("#eliminarDestino").show("fast");
			 }else{
				 if( d3 == 0 ){
					 $("#destino3").show("fast");
					 multiplesVuelosDisabledRemove(3);
				 }else{
					 if(d4== 0){
						 $("#agregarDestino").hide("fast");
						 $("#destino4").show("fast");
						 multiplesVuelosDisabledRemove(4);
					 }
				 }
			 }
		 });
		 
		 $( "#eliminarDestino" ).click(function(e) {
			 e.preventDefault();
			 var d2=0;
			 var d3=0;
			 var d4=0;
			 if($("#destino2").css("display")!="none"){ d2 = 1; }
			 if($("#destino3").css("display")!="none"){ d3 = 1; }
			 if($("#destino4").css("display")!="none"){ d4 = 1; }

			 if(d4!=0){
				 $("#destino4").hide("fast");
				 $("#agregarDestino").show("fast");
				 multiplesVuelosDisabled(4);
			 }else{
				 if( d3 != 0 ){
					 $("#destino3").hide("fast");
					 multiplesVuelosDisabled(3);
				 }else{
					 $("#destino2").hide("fast");
					 multiplesVuelosDisabled(2);
					 $("#eliminarDestino").hide("fast");
					 
				 	}
			 }

			 });

		function multiplesVuelosDisabled(k){
		 $("#flight"+k+"from").attr('disabled', 'disabled');
		 $("#cFrom"+k).attr('disabled', 'disabled');
		 $("#flight"+k+"to").attr('disabled', 'disabled');
		 $("#cTo"+k).attr('disabled', 'disabled');
		 $("#flight"+k+"startDate").attr('disabled', 'disabled');
		 $("#sh"+k).attr('disabled', 'disabled');
	 
		}
		
		function multiplesVuelosDisabledRemove(k){
			 $("#flight"+k+"from").removeAttr('disabled'); 
			 $("#cFrom"+k).removeAttr('disabled'); 
			 $("#flight"+k+"to").removeAttr('disabled'); 
			 $("#cTo"+k).removeAttr('disabled'); 
			 $("#flight"+k+"startDate").removeAttr('disabled'); 
			 $("#sh"+k).removeAttr('disabled'); 
		
			 //textSearch($("#flight"+k+"from"), "Buscar Origen...");
				//textSearch($("#flight"+k+"to"), "Buscar Destino...");
				 //$("#flight"+k+"from").val("Buscar Origen...");
				 //textSearch($("#flight"+k+"from"), "Buscar Origen...");
				 //$("#flight"+k+"to").val(""); 
			 
			 //$("#cFrom"+k).val("");
			 
			 //$("#cTo"+k).val("");
			 $("#flight"+k+"startDate").val("");
			 $("#sh"+k).val("NA");
			 
			}

		for(var k=1;k<5;k++){
			 multiplesVuelosDisabled(k);
		}
		
			$("#ver-precio-flight").click(function(e) {
				e.preventDefault();
				var validador=validar();
				var validadorfechas=0;
				var validadordestinos=0;
				var tipo = $('input[name=flightType]:checked', '#formVuelos').val();

				switch (tipo) {
				case 'roundtrip':
					///////// evaluacion fechas
					if(($("#flight0startDate").val())==""){ 
							$( "#flight0startDate" ).addClass( "error-input" );
							validadorfechas++;
						}else{ 
							$( "#advertenciaFechaIda0" ).removeClass( "error-input" );
						}
					if(($("#flight0endDate").val())==""){
							$( "#flight0endDate" ).addClass( "error-input" );
						}else{ 
							$( "#flight0endDate" ).removeClass( "error-input" );
						}
					
					///////////////// evaluacion destinos
					
					if(($("#cFrom").val())==""){
						$( "#flight0from" ).addClass( "error-input" );
						validadordestinos++;
					}else{ 
						$( "#flight0from" ).removeClass( "error-input" );
					}
					
					if(($("#cTo").val())==""){
						$( "#flight0to" ).addClass( "error-input" );
						validadordestinos++;
					}else{ 
						$( "#flight0to" ).removeClass( "error-input" );
					}
					
					if(($("#cFrom").val())!="" && $("#cTo").val()!=""){
						
					}
					
					break;
				case 'oneway':
					///////// evaluacion fechas
					if(($("#flight0startDate").val())==""){ 
							$( "#flight0startDate" ).addClass( "error-input" ); 
							validadorfechas++;
						}else{ 
							
							$( "#advertenciaFechaIda0" ).removeClass( "error-input" );
						}

					///////////////// Evaluacion de destinos.
					
					if(($("#cFrom").val())==""){
						$( "#flight0from" ).addClass( "error-input" );
						validadordestinos++;
					}else{ 
						$( "#flight0from" ).removeClass( "error-input" );
						
					}
					
					if(($("#cTo").val())==""){
						$( "#flight0to" ).addClass( "error-input" );
						validadordestinos++;
					}else{ 
						$( "#flight0to" ).removeClass( "error-input" );
						
					}
					

					if(($("#cFrom").val())!="" && $("#cTo").val()!=""){
						
					}
					break;
				case 'multiple':
					
					///////////////// Evaluacion de destinos.
					
					if(($("#cFrom").val())==""){
						$( "#flight0from" ).addClass( "error-input" );
						validadordestinos++;
					}else{ 
						$( "#flight0from" ).removeClass( "error-input" );
					}
					
					if(($("#cTo").val())==""){
						$( "#flight0to" ).addClass( "error-input" );
						validadordestinos++;
					}else{ 
						$( "#flight0to" ).removeClass( "error-input" );
					}
					if(($("#flight0startDate").val())==""){ 
						$( "#flight0startDate" ).addClass( "error-input" ); 
						 validadorfechas++;
					}else{ 
						$( "#advertenciaFechaIda0" ).removeClass( "error-input" );
					}
					
					 var d2=0;
					 var d3=0;
					 var d4=0;
					 if($("#destino2").css("display")!="none"){ d2 = 1; }
					 if($("#destino3").css("display")!="none"){ d3 = 1; }
					 if($("#destino4").css("display")!="none"){ d4 = 1; }

					 var evalMulti=parseInt(d2+d3+d4+1);
					 for(var k=0;k<evalMulti;k++){
						 if ($("#cFrom" + (k + 1)).val() == "") {
							 
							 $( "#flight" + (k + 1) + "from" ).addClass( "error-input" ); 
							 
							 //$("#advertencia" + (k + 1) + "1").show("fast");
							
							validadordestinos++;
						} else {
							//$("#advertencia" + (k + 1) + "1").hide("fast");
							$( "#flight" + (k + 1) + "from" ).removeClass( "error-input" );
						}
		
						if ($("#cTo" + (k + 1)).val() == "") {
							//$("#advertencia" + (k + 1) + "2").show("fast");
							$( "#flight" + (k + 1) + "to" ).addClass( "error-input" );
							validadordestinos++;
						} else {
							//$("#advertencia" + (k + 1) + "2").hide("fast");
							$( "#flight" + (k + 1) + "to" ).removeClass( "error-input" );
						}
						
						if ($("#flight" + (k + 1) + "startDate").val() == "") {
							 //$("#advertencia" + (k + 1) + "3").show("fast");
							 $( "#flight" + (k + 1) + "startDate" ).addClass( "error-input" ); 
							 validadorfechas++;
						} else {
							//$("#advertencia" + (k + 1) + "3").hide("fast");
							 $( "#flight" + (k + 1) + "startDate" ).removeClass( "error-input" ); 
						}

					 }
					
					break;
				default:
					break;
				}
				
				if (validador==1 && validadorfechas==0 && validadordestinos==0 ) {
					 $('#div-button-ver-precios-flight').hide();
					 $('#div-button-ver-precios-buscando-flight').show();
					 $("#formVuelos").submit();
						var serviceType = 'flight';
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
				} 
			});

			$( "#adulto" ).change(function() {
				validar();
			});
			$("#flights[1]").attr('disabled','disabled');
			$("#flights[2]").attr('disabled','disabled');
			$("#flights[3]").attr('disabled','disabled');
			$("#flights[4]").attr('disabled','disabled');
			
	});
		
	 function muestraBotonAsiento(valor,divAsiento,checkAsiento){
		 if(valor<2 && valor!=""){
			 $("#"+divAsiento).show("fast");
			 
		 }else{
			 $("#"+checkAsiento).prop("checked",false);
			 $("#"+divAsiento).hide("fast");
			 
		 }
		 validar();
	 }
		 
		 function fnSetValInfants(id){
			 if($("#"+id).is(':checked')) {
				 	$("input[name="+id+"]").val("1");
					validar();
		        } else {         	
		        	$("input[name="+id+"]").val("0");
		        	validar();
		        }
		 }
	 
		 function validar(){
					var validador=0;
					var ninos=$("#r1k").val();
					
					for(var i=1;i<=ninos;i++){
						var valAux=parseInt($("input[name=s1k"+i+"]").val());
						valAux==0 ? valAux=1 : valAux=0;
						var edadninos=parseInt($("#r1k"+i+"a").val());
						
						 if(isNaN(edadninos)){
							 console.log("es numero raro");
						 }
						console.log(edadninos);
						
						if(edadninos < 2 ){
						validador=validador+valAux;
						}
					}
					
					
					if (ninos == '0') {
						$("#error").hide("fast");
					}
					
					if(validador>parseInt($("#adulto").val())){
						$("#error").show("fast");
						return 0;
					}else{
						$("#error").hide("fast");
						return 1;
					}

					
		 }

