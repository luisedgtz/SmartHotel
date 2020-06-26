/**
 * AutocompleteboxjsonpController
 * 
 * @author Ing. Juan Garfias V�zquez
 * @email jgarfias@travelnet.com.mx
 * @version 2.0
 * @date 05/May/20014
 */
$(function() {
	$("#rooms").val(1);
	$("#r").val(1);
	$("#r1k").val(0);
	$("#r2k").val(0);
	$("#r3k").val(0);
	$("#r4k").val(0);
	$("#r5k").val(0);
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
	$.datepicker.regional['en'] = {
			dateFormat : 'dd-mm-yy'
		};
	$.datepicker.setDefaults($.datepicker.regional[$('#language').val()]);
	// Inicializa configuracion y control de calendarios
	$("#startDate-home")
			.datepicker(
					{
						minDate : 0,
						//changeMonth : true,
						numberOfMonths : 2,
						onClose : function(selectedDate) {			
							if($("#startDate-home").val()!=""){
							$("#endDate-home").datepicker({
								defaultDate : "+1d",
								numberOfMonths : 2,
								onClose : function(selectedDate) {
								}
							});
							}		
							//$("#warning").hide("");
							$( "#startDate-home" ).removeClass( "error-input" );
							$("#endDate-home").datepicker("option", "minDate",selectedDate);
							var arrayDate = selectedDate.split("-");
							var fecha = new Date(arrayDate[2],(arrayDate[1] - 1), arrayDate[0]);
							var fechaMas30 = new Date(arrayDate[2],(arrayDate[1] - 1), arrayDate[0]);
							fecha.setDate(fecha.getDate() + 1);
							fechaMas30.setDate(fechaMas30.getDate() + 29);
							$("#endDate-home").datepicker("setDate", fecha);
							$("#endDate-home").datepicker("option", "maxDate",fechaMas30);			
						}
					});
// Finaliza configuracion y control de calendarios
	$("#r").change(function() {
		//alert("alerta!!");
		var rooms = $('#r').val();
		switch (rooms) {
		case "1":
			for(var i=2;i<=5;i++){
				$("#r"+i+"kage").hide("");
				$("#r"+i+"k").val(0);
				$("#textr"+i+"k").hide("");
				for(var j=1;j<=4;j++){
					$("#r"+i+"k"+j+"a").val(0);
					$("#r"+i+"k"+j+"a").hide("");
				}
			}
			break;
		case "2":
			for(var i=3;i<=5;i++){
				$("#r"+i+"k").val(0);
				$("#textr"+i+"k").hide("");
				for(var j=1;j<=4;j++){
					$("#r"+i+"k"+j+"a").val(0);
					$("#r"+i+"k"+j+"a").hide("");
				}
			}
			$("#r2kage").show("");
			$("#r3kage").hide("");
			$("#r4kage").hide("");
			$("#r5kage").hide("");
			// $( "#dialog-confirm" ).dialog( "open" );
			break;
		case "3":
			for(var i=4;i<=5;i++){
				$("#r"+i+"k").val(0);
				$("#textr"+i+"k").hide("");
				for(var j=1;j<=4;j++){
					$("#r"+i+"k"+j+"a").val(0);
					$("#r"+i+"k"+j+"a").hide("");
				}
			}
			
			$("#r2kage").show("");
			$("#r3kage").show("");
			$("#r4kage").hide("");
			$("#r5kage").hide("");
			// $( "#dialog-confirm" ).dialog( "open" );
			break;
		case "4":
			for(var i=5;i<=5;i++){
				$("#r"+i+"k").val(0);
				$("#textr"+i+"k").hide("");
				for(var j=1;j<=4;j++){
					$("#r"+i+"k"+j+"a").val(0);
					$("#r"+i+"k"+j+"a").hide("");
				}
			}
			$("#r2kage").show("");
			$("#r3kage").show("");
			$("#r4kage").show("");
			$("#r5kage").hide("");
			// $( "#dialog-confirm" ).dialog( "open" );
			break;
		case "5":
			$("#r2kage").show("");
			$("#r3kage").show("");
			$("#r4kage").show("");
			$("#r5kage").show("");
			// $( "#dialog-confirm" ).dialog( "open" );
			break;
		default:
		}
	});

	var lang=$("#lang").val();
	var limit=$("#limit").val();
	//var urljsonp="https://www.travelnet.com.mx/Autocompleteboxjsonp/autocompletecity?callback=?";
	var urljsonp="http://www.travelnet.com.mx/Autocompleteboxjsonp/completehomeform?callback=?";
	
	 $.ajax({
			url : urljsonp,
			dataType : "jsonp",
			data : {},
			success : function(data) {
				$.each( data, function( key, value ) {
					
					$( "#selectCountry" ).append( "<option value='"+value.code+"'>"+value.name+"</option>" );
					
				});
			}
		});
	
	$( "#selectCountry" ).change(function() {
		  //alert( $('#selectCountry').val() );
		if($('#selectCountry').val()!=''){
		var urljsonp2="http://www.travelnet.com.mx/Autocompleteboxjsonp/completehomeformcity?callback=?";
			$( "#destino" ).html('');
			 $.ajax({
					url : urljsonp2,
					dataType : "jsonp",
					data : {countryCode : $('#selectCountry').val()},
					success : function(data) {
						$.each( data, function( key, value ) {
							
							$( "#destino" ).append( "<option value='"+value.code+"'>"+value.name+"</option>" );
							
						});
						 $("#destino").show(""); 
					}
				});
			 
			 if($('#selectCountry').val() != ''){
				 //$("#warningDest").hide("");
				 $("#selectCountry").removeClass( "error-input" );
			 }
			 
		} else {
			 $("#destino").hide(""); 
		}
	});
	
	String.prototype.replaceAt = function(index, char) {
		return this.substr(0, index) + "<b>" + char + "</b>";
	};
	$.ui.autocomplete.prototype._renderItem = function(ul, item) {
	    this.term = this.term.toLowerCase();
	    var resultStr = item.label.toLowerCase();
	    var t = "";
	    while (resultStr.indexOf(this.term) != -1) {
	        var index = resultStr.indexOf(this.term);
	        t = t + item.label.replaceAt(index, item.label.slice(index, index + this.term.length));
	        resultStr = resultStr.substr(index + this.term.length);
	        item.label = item.label.substr(index + this.term.length);
	    }
	    return $("<li></li>").data("item.autocomplete", item).append("<a>" + t + item.label + "</a>").appendTo(ul);
	};
	/*
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
	
	textSearch($("#destino"),$("#destino").val());
	*/
	$("#radio1").prop("checked", true);
	//$("#rooms").buttonset();
	
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
		 
	$("#ver_precios").click(function(e) {
		//alert('Ver precios');
		e.preventDefault();
		var eval = $("#startDate-home").val();
		var dest = $("#selectCountry").val();
		if (eval == "" || dest == "") {
			if (eval == "") {
				//$("#warning").show("");
				$( "#startDate-home" ).addClass( "error-input" );
			}
			if (dest == "") {
				//$("#warningDest").show("");
				$( "#selectCountry" ).addClass( "error-input" );
			}
		} else {
			
			 $("#searchHomes").submit();
				var serviceType = 'home';
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
			 $('#div-button-ver-precios').hide();
			 $('#div-button-ver-precios-buscando').show();
		}
	});
		 
});
function arg(id, valor) {
	$(function($) {
		$("input[name=" + id + "]").val(valor);
	});
	var rk = valor;
	if (rk > 0) {
		$("#text"+id).show("");
	} else {
		$("#text"+id).hide("");
	}
	switch (rk) {
	case "0":
		$("#"+id+"1a").val(0);
		$("#"+id+"2a").val(0);
		$("#"+id+"3a").val(0);
		$("#"+id+"4a").val(0);
		$("#"+id+"1a").hide("");
		$("#"+id+"2a").hide("");
		$("#"+id+"3a").hide("");
		$("#"+id+"4a").hide("");
		break;
	case "1":
		$("#"+id+"2a").val(0);
		$("#"+id+"3a").val(0);
		$("#"+id+"4a").val(0);
		$("#"+id+"1a").show("");
		$("#"+id+"2a").hide("");
		$("#"+id+"3a").hide("");
		$("#"+id+"4a").hide("");
		break;
	case "2":
		$("#"+id+"3a").val(0);
		$("#"+id+"4a").val(0);
		$("#"+id+"1a").show("");
		$("#"+id+"2a").show("");
		$("#"+id+"3a").hide("");
		$("#"+id+"4a").hide("");
		break;
	case "3":
		$("#"+id+"4a").val(0);
		$("#"+id+"1a").show("");
		$("#"+id+"2a").show("");
		$("#"+id+"3a").show("");
		$("#"+id+"4a").hide("");
		break;
	case "4":
		$("#"+id+"1a").show("");
		$("#"+id+"2a").show("");
		$("#"+id+"3a").show("");
		$("#"+id+"4a").show("");
		break;
	default:
	}
	if( $("#r1k").val() == '0' && 
			$("#r2k").val() == '0' && 
			$("#r3k").val() == '0' && 
			$("#r4k").val() == '0' && 
			$("#r5k").val() == '0' ){
			$('#kids-age-label').hide();
		} else {
			$('#kids-age-label').show();
		}
}