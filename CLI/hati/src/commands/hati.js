
const command = {
  name: 'hati',
  run: async toolbox => {
    const { print, parameters } = toolbox
    const jetpack = require('fs-jetpack');
    
    if(parameters.first == 'cwd'){
      print.success(jetpack.cwd())
    }else if(parameters.first == 'create'){
      jetpack.file(parameters.second)
    }else{
       print.success(`Welcome to Hati \u{1F43A}`)
    }

  }
}


module.exports = command

