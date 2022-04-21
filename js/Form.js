// Código del alumno PRO C36 V2
class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
      this.playButton = createButton("jugar");
      this.titleImg = createImg("./assets/title.png", "Titulo del juego");
      
     //Agrega el elemento para el saludo,
     //con el tamaño de letra h2(mediano)
    
    }
    
//A T) Función que asigna Posiciones a los elementos creados 
    setElementsPosition() {
      this.titleImg.position(120,50);
      this.input.position(width / 2 - 110, height / 2 - 80);
      this.playButton.position(width / 2 - 90, height / 2 - 20);
     
     //Agrega la Posición para el saludo      
      
    }


//B T) Función que asigna Estilos de Visualización a los elementos creados   
    setElementsStyle() {
      this.titleImg.class("gameTitle");
      this.input.class("customInput");
      this.playButton.class("customButton");
      
    //Agrega el una clase para el saludo   
     
    }
  
    //Función cuando hagamos click en el mouse Muestre el saludo 
    handleMousePressed() {
      this.playButton.mousePressed(() => {
       
        //Llama la funcion hide para input y playButton


        var message = `
        Hola ${this.input.value()}
        </br>espera a que otro jugador se una...`;
        //this.greeting.html(message);
      });
    }


//función que esconde los elementos creados cuando pones el nombre del player.    
    hide() {
      this.playButton.hide();
      this.input.hide();

      //Esconde el saludo
     
    }
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
    

      //Llama a la función this.handleMousePressed() para éste objeto;
      this.handleMousePressed();
    }
  }
  