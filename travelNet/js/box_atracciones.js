/**
 * AutocompleteboxjsonpController
 * 
 * @author Ing. Juan Garfias Vázquez
 * @email jgarfias@travelnet.com.mx
 * @version 3.0
 * @date 07/Abril/2016
 */

$(function($){
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
			$("#startDate-ticket")
					.datepicker(
							{
								minDate : 0,
								numberOfMonths : 2,
								onClose : function(selectedDate) {			
									if($("#startDate-ticket").val()!=""){
										$( "#startDate-ticket" ).removeClass( "error-input" );
									$("#endDate-ticket").datepicker({
										defaultDate : "+1d",
										numberOfMonths : 2,
										onClose : function(selectedDate) {
										}
									});
									}		
									$("#warningDate").hide("slow");
									$("#endDate-ticket").datepicker("option", "minDate",selectedDate);
									var arrayDate = selectedDate.split("-");
									var fecha = new Date(arrayDate[2],(arrayDate[1] - 1), arrayDate[0]);
									var fechaMas30 = new Date(arrayDate[2],(arrayDate[1] - 1), arrayDate[0]);
									fecha.setDate(fecha.getDate() + 1);
									fechaMas30.setDate(fechaMas30.getDate() + 29);
									$("#endDate-ticket").datepicker("setDate", fecha);
									$("#endDate-ticket").datepicker("option", "maxDate",fechaMas30);			
								}
							});
		// Finaliza configuracion y control de calendarios
			//Caja de texto que muestra la leyenda de la edad de los menores cuando esta aplica.
			$( "#r1k-ticket" ).change(function() {
				var r1k=$( "#r1k-ticket" ).val();
				if(r1k>0){$( "#textr1k-ticket" ).show("blind");}else{$( "#textr1k" ).hide("blind");}
				 
				for(var i=r1k;i<=8;i++){
					$( "#child_age_"+i+"-ticket").val(0);
					$( "#child_age_"+i+"-ticket").hide("blind");
				}
				for(var i=0;i<r1k;i++){
					$( "#child_age_"+i+"-ticket").show("blind");
				}
			});
		//Boton que lanza el mensaje de dialogo siempre y cuando cumpla la regla de tener ya una fecha seleccionada.
		$("#ver-precio-ticket").click(function(e) {
			e.preventDefault();		
			var startDate = $("#startDate-ticket").val();
			var rowID = $("#rowID").val();
			if (startDate == "" || rowID=="") {
				if(startDate==""){
					//$("#warningDate").show("slow");
					$( "#startDate-ticket" ).addClass( "error-input" );
				}else{
					//$("#warningDate").hide("slow");
					$( "#startDate-ticket" ).removeClass( "error-input" );
				}
				if(rowID==""){
						//$("#warningCity").show("slow");
						$( "#destino-atraccion" ).addClass( "error-input" );
					}else{
						//$("#warningCity").hide("slow");
						$( "#destino-atraccion" ).removeClass( "error-input" );
					}
			} else {
				 $("#form").submit();
					var serviceType = 'ticket';
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
				 $('#div-button-ver-precios-tickets').hide();
				 $('#div-button-ver-precios-buscando-tickets').show();
			}
		});
		var lang=$("#lang").val();
		var limit=$("#limit").val();
		$("#destino-atraccion").autocomplete({
			source : function(request, response) {
				$.ajax({
					//url : "https://www.travelnet.com.mx/Autocompleteboxjsonp/ciudadesv2?callback=?",
					url : "https://www.travelnet.com.mx/Autocompleteboxjsonp/ciudadesv2?callback=?",
					//url : "http://192.168.20.17/Autocompleteboxjsonp/ciudadesv2?callback=?",
							dataType : "jsonp",
							data : {
								q : request.term,
								lang : lang,
								limit : limit
							},
							success : function(data) {
								$("#rowID").val("");
								$( "#destino-atraccion" ).removeClass( "error-input" );
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
				$("#rowID").val(ui.item.citycode);
				//$("#warningCity").hide("slow");
				$( "#destino-atraccion" ).removeClass( "error-input" );
			},
			open : function() {
				$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
			},
			close : function(event, ui) {
				$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
				
				if($("#rowID").val()==""){
					//$("#warningCity").show("slow");
					$( "#destino-atraccion" ).addClass( "error-input" );
				}	
			}
		});
});