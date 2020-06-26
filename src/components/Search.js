import React from 'react'

export default (props)=>{
    return(
            <div class="containerBox container-box-hotel">
            <form action="https://online.ifc.com.mx/boxtravelnet/hotels" method="post" enctype="multipart/form-data" name="form" id="form-hotel">

                <input type="hidden" value="616720940f4a080d96967f2ef56d0e28" name="id"/>
                <input type="hidden" name="language" value="es"/> 
                <input type="hidden" name="c" value="USD"/> 
                <input type="hidden" id="limit" value="20"/>
                <input type="hidden" id="lang" value="es"/> 
                <input type="hidden" name="sortby" value="ofertas"/>
                <input id="destino-hotel" class="searchCity" name="d" placeholder="Destino" autocomplete="off" type="hidden" value="Monterrey"/>
                <input type="hidden" value="MONR" name="dc" id="citycode-hotel" autocomplete="off"/>      

                    <div class="divNewLine">
                        
                        <div class="divCell">
                            <label># Habitaciones</label>
                            <div id="rooms">
                                <select id='r' name='r' autocomplete="off">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                        </div>

                        <div class="divCell">
                            <label>Adultos:</label>
                            <select class="numAdultsRoom" id="r1a-hotel-" name='r1a' onchange="arg(this.id,this.value)" autocomplete="off">
                                <option>1</option>
                                <option selected="selected" value="2">2 (Doble)</option>
                                <option value="5">2 (Twin)</option>
                                <option>3</option>
                                <option>4</option>
                                <option value="5.1">5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                            </select>
                        </div>
                        <div class="divCell">
                            <label>Menores:</label>
                            <select class="smallNumberBox" id="r1k-hotel-" name='r1k' onchange="arg(this.id,this.value)">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div class="divCell">
                            <label>Llegada:</label>
                         
                            <input name="sd" placeholder="DD-MM-AA" type="text" id="startDate-hotel" class="input-date" readonly="readonly" autocomplete="off" />
                            <div class="divNewLine">
                                <div class="elementHidden warning" id="warning">Selecciona un día de entrada</div>
                            </div>
                        </div>
                    <div class="divCell">
                            <label>Salida:</label>
                            <input name="ed" placeholder="DD-MM-AA" type="text" id="endDate-hotel" class="input-date" readonly="readonly" autocomplete="off" />
                            <div class="divNewLine">
                                <div class="elementHidden warning" id="warningDates">La fecha de entrada y salida no deben ser las mismas.</div>
                            </div>
                        </div>
                        <div class="divCell">
                            <div class="container-box-hotel containerBox-footer buttonForm" id="ver-precios-hotel" align="center">
                                <span id='divbuttonverprecios-hotel' class="buscar-label">Buscar</span>
                                <div class="elementHidden" id='divbuttonverpreciosbuscando-hotel'>
                                    <label class="buscar-label label-buscando">Buscando...</label>
                                    <img height="33" width="100" class='image-svg-loading' alt="Buscando..." src="images/loading-cylon-white.svg" />
                                </div>
                            </div>
                        </div>
                    </div>	
                    
                <div id="r2kage" class="elementHidden divNewLine">
                    <div class="divCell">
                            
                    </div>
                    <div class="divCell">
                    <label>Adultos:</label>
                    <div class="divNewLine"></div>
                    <select class="numAdultsRoom" name='r2a' id="r2a-hotel-" onchange="arg(this.id,this.value)" autocomplete="off">
                        <option>1</option>
                        <option selected="selected" value="2">2 (Doble)</option>
                        <option value="5">2 (Twin)</option>
                        <option>3</option>
                        <option>4</option>
                        <option value="5.1">5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>	                
                    </select>
                    </div>
                    <div class="divCell">
                    <label>Menores:</label>
                    <div class="divNewLine"></div>
                    <select class="smallNumberBox" name='r2k' id="r2k-hotel-"  onchange="arg(this.id,this.value)" autocomplete="off">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    </div>
                </div>  
                <div id="r3kage" class="elementHidden divNewLine">
                    <div class="divCell">
                            
                    </div>
                    <div class="divCell" >
                    <label>Adultos</label>
                    <div class="divNewLine"></div>
                    <select class="numAdultsRoom" id="r3a-hotel-" name='r3a' onchange="arg(this.id,this.value)" autocomplete="off">
                        <option>1</option>
                        <option selected="selected" value="2">2 (Doble)</option>
                        <option value="5">2 (Twin)</option>
                        <option>3</option>
                        <option>4</option>
                        <option value="5.1">5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>                
                    </select>
                    </div>
                
                    <div class="divCell">
                    <label>Menores:</label>
                    <div class="divNewLine"></div>
                    <select class="smallNumberBox" id="r3k-hotel-" name='r3k' onchange="arg(this.id,this.value)" autocomplete="off">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    </div>
            </div>	
            <div id="r4kage" class="elementHidden divNewLine" >
                <div class="divCell">
                            
                </div>
                <div class="divCell">
                <label>Adultos</label>
                <div class="divNewLine"></div>
                <select class="numAdultsRoom" id="r4a-hotel-" name='r4a' onchange="arg(this.id,this.value)" autocomplete="off">
                    <option>1</option>
                    <option selected="selected" value="2">2 (Doble)</option>
                    <option value="5">2 (Twin)</option>
                    <option>3</option>
                    <option>4</option>
                    <option value="5.1">5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>                
                </select>
                </div>
            
                <div class="divCell">
                <label>Menores:</label>
                <div class="divNewLine"></div>
                <select class="smallNumberBox" id="r4k-hotel-" name='r4k' onchange="arg(this.id,this.value)" autocomplete="off">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                </div>
            </div>
            <div id="r5kage" class="elementHidden divNewLine">
                <div class="divCell">
                            
                </div>
                <div class="divCell">
                <label>Adultos</label>
                <div class="divNewLine"></div>
                <select class="numAdultsRoom" id="r5a-hotel-" name='r5a' onchange="arg(this.id,this.value)" autocomplete="off">
                    <option>1</option>
                    <option selected="selected" value="2">2 (Doble)</option>
                    <option value="5">2 (Twin)</option>
                    <option>3</option>
                    <option>4</option>
                    <option value="5.1">5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>                
                </select>
                </div>
                <div class="divCell">
                <label>Menores:</label>
                <div class="divNewLine"></div>
                <select class="smallNumberBox" id="r5k-hotel-" name='r5k' onchange="arg(this.id,this.value)" autocomplete="off">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                </div>
            </div>		
                
                    <div class="divNewLine elementHidden" id="kids-age-label">
                    <label>Especificar las edades de los ni&ntilde;os ( 0 - 18 )</label>
                    <hr/>
                    </div>			

                    <div id="textr1k-hotel-" class="divNewLine elementHidden">

                            <label>Habitaci&oacute;n 1</label>
                            <div class="divNewLine"></div>
                            <div class='divCell'>
                            <select id="r1k-hotel-1a" name='r1k1a' class="numInputHidden" size="1" autocomplete="off" onchange="arg(this.id,this.value)">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                            </select>
                            </div>
                            <div class='divCell'>
                            <select id="r1k-hotel-2a" name='r1k2a' class="numInputHidden" size="1" autocomplete="off" onchange="arg(this.id,this.value)">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                            </select> 
                            </div>
                            <div class='divCell'>
                            <select id="r1k-hotel-3a" name='r1k3a' class="numInputHidden" size="1" autocomplete="off" onchange="arg(this.id,this.value)">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                            </select>
                            </div>
                    </div>
                    
                    
                    <div id="textr2k-hotel-" class="divNewLine elementHidden">
                    <label>Habitaci&oacute;n 2</label>
                        <div class="divNewLine"></div>
                    
                        <div class='divCell'>
                        <select id="r2k-hotel-1a" name='r2k1a'  class="numInputHidden" size="1" onchange="arg(this.id,this.value)" autocomplete="off">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        </select>
                        </div>
                            <div class='divCell'>
                        <select id="r2k-hotel-2a" name='r2k2a' class="numInputHidden" size="1"  onchange="arg(this.id,this.value)" autocomplete="off">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        </select> 
                        </div>
                            <div class='divCell'>
                        <select id="r2k-hotel-3a" name='r2k3a' class="numInputHidden" size="1"  onchange="arg(this.id,this.value)" autocomplete="off">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        </select>
                        </div>
                </div>

                <div id="textr3k-hotel-" class="divNewLine elementHidden">
                <label>Habitaci&oacute;n 3</label>
                <div class="divNewLine"></div>
                <div class='divCell'>
                    <select id="r3k-hotel-1a" name='r3k1a' class="numInputHidden" size="1"  onchange="arg(this.id,this.value)" autocomplete="off">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    </select>
                    </div>
                            <div class='divCell'>
                    <select id="r3k-hotel-2a" name='r3k2a' class="numInputHidden" size="1"  onchange="arg(this.id,this.value)" autocomplete="off">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    </select> 
                    </div>
                            <div class='divCell'>
                    <select id="r3k-hotel-3a" name='r3k3a' class="numInputHidden" size="1"  onchange="arg(this.id,this.value)" autocomplete="off">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    </select>
                    <div class='divCell-50px'>
                </div>
            </div>
            </div>

                <div id="textr4k-hotel-" class="divNewLine elementHidden">
                <label>Habitaci&oacute;n 4</label>
                <div class="divNewLine"></div>

                    <div class='divCell-100px'>
                    <select id="r4k-hotel-1a" name='r4k1a' class="numInputHidden" size="1"  onchange="arg(this.id,this.value)" autocomplete="off">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    </select>
                    </div>
                    <div class='divCell'>
                    <select id="r4k-hotel-2a" name='r4k2a' class="numInputHidden" size="1"  onchange="arg(this.id,this.value)" autocomplete="off">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    </select> 
                    </div>
                    <div class='divCell'>
                    <select id="r4k-hotel-3a" name='r4k3a' class="numInputHidden" size="1"  onchange="arg(this.id,this.value)" autocomplete="off">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    </select>
                    </div>
                    
                </div>

                <div id="textr5k-hotel-" class="divNewLine elementHidden">
                <label>Habitaci&oacute;n 5</label>
                <div class="divNewLine"></div> 
                    
                    <div class='divCell'>
                    <select id="r5k-hotel-1a" name='r5k1a' class="numInputHidden" size="1"  onchange="arg(this.id,this.value)" autocomplete="off">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    </select>
                    </div>
                    <div class='divCell'>
                    <select id="r5k-hotel-2a" name='r5k2a' class="numInputHidden" size="1"  onchange="arg(this.id,this.value)" autocomplete="off"> 
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    </select>
                    </div>
                    <div class='divCell'>
                    <select id="r5k-hotel-3a" name='r5k3a' class="numInputHidden" size="1"  onchange="arg(this.id,this.value)" autocomplete="off">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    </select>
                    </div>

                </div>
            <div class="divNewLine"></div>
        </form>
    </div>
    )
}