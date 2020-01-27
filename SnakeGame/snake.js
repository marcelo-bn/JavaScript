window.onload = function(){

    var cenario = window.document.getElementById('cenario');
    var ctx = cenario.getContext('2d');
    var placar = window.document.querySelector('p#placar');
    var recorde = window.document.querySelector('p#recorde');

    window.document.addEventListener("keydown", movimentar);

    setInterval(jogo,130); // Tempo para chamar a função

    const vel = 1;
    var tam_peca = 20; 
    var qtd_peca = 20;
    var vx = vy = 0;
    var px = py = 200; // Cabeça da cobra
    var fx = fy = 10; // Fruta
    var rastro = [];
    var cauda = 5;
    var pontos = 0;
    var rec = 0;

    function jogo(){
       
        // Placar
        placar.innerHTML = `Pontuação: <strong>${pontos}</strong>`
        if (pontos > rec) {
            rec = pontos
            recorde.innerHTML = `Recorde: <strong>${rec}</strong>`
        }else{
           recorde.innerHTML = `Recorde: <strong>${rec}</strong>`
        }

        // Velocidade 
        px += vx;
        py += vy;

        if (px<0){ // Chegou no lado esquerdo
            px = qtd_peca - 1;
        }
        if (px > qtd_peca - 1){ // Chegou no lado direito
            px = 0;
        }
        if (py < 0){ // Chegou em cima
            py = qtd_peca - 1;
        }
        if (py > qtd_peca -1){ // Chegou embaixo
            py = 0;
        }
        
        // Cenário
        ctx.fillStyle = "greenyellow"; 
        ctx.fillRect(0,0, cenario.width, cenario.height);

        // Fruta
        ctx.fillStyle = "red"; 
        ctx.fillRect(fx*tam_peca,fy*tam_peca, tam_peca, tam_peca);

        // Cobra
        ctx.fillStyle = "green"
        for (var i = 0; i < rastro.length; i++) {
            ctx.fillRect(rastro[i].x*tam_peca, rastro[i].y*tam_peca, tam_peca-1, tam_peca-1);

            if(rastro[i].x == px && rastro[i].y == py){
                
                vx = vy = 0;
                cauda = 5;
                placar.innerHTML = `Pressione as setas para iniciar o jogo!`;
                pontos = 0;
            }
        }

        rastro.push({x:px, y:py});

        // Diminuindo rastro
        while(rastro.length > cauda){
            rastro.shift();
        }

        // Aumentando cauda e reposicionando fruta
        if(fx == px && fy == py){
           cauda++;
           pontos += 25;
           rep_fruta();
        }

    }

    function movimentar(event){

        switch (event.keyCode){
            case 37: // Esquerda
                vx = -vel;
                vy = 0;
                break;
            case 39: // Direita
                vx = vel;
                vy = 0;
                break;
            case 38: // Cima
                vx = 0;
                vy = -vel;
                break;
            case 40: // Baixo
                vx = 0;
                vy = vel;
                break;
            default:
                break;
        }

    }

    function rep_fruta(){

        while(!aux){
           var x1 = Math.floor(Math.random()*qtd_peca);
           var y1 = Math.floor(Math.random()*qtd_peca);
           var aux = false;

           for (var i = 0; i < rastro.length; i++) {
                if (x1 != rastro[i].x && y1 != rastro[i].y){
                     fx = x1;
                     fy = y1;
                     aux = true;
                } 
           }
        }
    }


}