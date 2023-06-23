função  Resolver ( val )  {
    deixe  v  =  documento . getElementById ( 'res' ) ;
    v . valor  +=  valor ;
 }
 função  Resultado ( )  {
    deixe  num1  =  documento . getElementById ( 'res' ) . valor ;
    deixe  num2  =  eval ( num1 ) ;
    documento . getElementById ( 'res' ) . valor  =  num2 ;
 }
 função  Limpar ( )  {
    deixe  inp  =  documento . getElementById ( 'res' ) ;
    inp . valor  =  '' ;
 }
 função  Voltar ( )  {
    deixe  ev  =  documento . getElementById ( 'res' ) ;
    ev . valor  =  ev . valor . fatia ( 0 , - 1 ) ;
 }
