function Familia(Nombre, Apellidos, Edad, fexhaNac, Rut, Direccion, Comuna, Ciudad, PXTurno, ingDiario) {
 this.Nombre = Nombre;
 this.Apellidos = Apellidos;
 this.Edad = Edad;
 this.fexhaNac = fexhaNac;
 this.Rut = Rut;
 this.Direccion = Direccion;
 this.Comuna = Comuna;
 this.Ciudad = Ciudad;
 this.PXTurno = PXTurno;
 this.ingDiario = ingDiario;
 }

 // var Manuel = new Familia("Manuel Luis", "Chavez Araos", 33, 13 + "/" + 09 +"/" + 1988, 17023769 + "-" + 2, "Calle San Pedro " + 3707 + " Casa E Villa el caleuche", "Puente Alto", "Stgo", 21000, 10000);

 // var Carla = new Familia("Carla Edith", "Sequqida S.", 29, 12 + "/" + 02 +"/" + 1993, 21869411 + "-K" , "Calle San Pedro " + 3707 + " Casa E Villa el caleuche", "Puente Alto", "Stgo", 18000, 3000);

 // var Amitiel = new Familia("Amitiel Amapola Millaray", "Chavez Araos", 5, 06 + "/" + 03 +"/" + 2017, 25697643 + "-" + 9, "Calle San Pedro " + 3707 + " Casa E Villa el caleuche", "Puente Alto", "Stgo", null, null);

 Manuel.Calcular_Salario = function(DiasTrab, Turnos) {                                                     
    var DT = Turnos * this.PXTurno;                                                                          
    var Dtrb = DiasTrab * this.ingDiario;
    var Total = DT + Dtrb;                                                                    
    return "El monto a cobrar por los turnos trabajados es de : " + DT + 
    " y el monto acumulado en sus ingresos fue de: " + Dtrb + " Total: " + Total;
    }

Carla.Calcular_Salario = function(DiasTrab, Turnos) {                                                     
    var DT = Turnos * this.PXTurno;                                                                          
    var Dtrb = DiasTrab * this.ingDiario;
    var Total = DT + Dtrb;                                                                    
    return "El monto a cobrar por los turnos trabajados es de : " + DT + 
    " y el monto acumulado en sus ingresos fue de: " + Dtrb + " Total: " + Total;
    }
    
    Familia.Casa = function GastosComunes(Arriendo, Gas, Internet, CelularM, CelularC, PerrosVet, PerrosCom) {
        this.Arriendo = Arriendo;
        this.Gas = Gas;
        this.CelularM = CelularM;
        this.CelularC = CelularC;
        this.PerrosVet = PerrosVet;
        this.PerrosCom = PerrosCom;    
    }

    