const command = {
    name: 'mkjson',
    run: async toolbox => {
      const { print, parameters } = toolbox
      
      if(!parameters.first){
        print.error("Parameters must be specified")
      }else{
        print.success(makeJson(parameters.first)) // Informação passada como parâmetro
      }
      
    }
  }
  
function makeJson(item){
    let split_comma = item.split(",")
    let vetor = []
    let word = ""
    
    for (const i in split_comma) {
        let split_colon = split_comma[i].split(":")
        vetor.push(split_colon[0])
        vetor.push(split_colon[1])
    }  
    
    for (const i in vetor) {
        if(i % 2 == 0){
            word += `  \"${vetor[i]}\"`
        }else{
           if(verifyNumber(vetor[i])){
                word += `:${vetor[i]},\n`
           }else{
                word += `:\"${vetor[i]}\",\n`
           }
        }
    }
    
    word = word.substring(0, word.length-2)
    
    function verifyNumber(item){
        if(isNaN(item)){
            return false
        }else{
            return true
        }
    }

    return `{\n${word}\n}`
  
  }
  module.exports = command