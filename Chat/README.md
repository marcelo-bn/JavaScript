# Chat em tempo real desenvolvido com NodeJS e Socket.io
> Marcelo Bittencourt do Nascimento Filho
>
> Janeiro de 2020

# Introdução
Este projeto foi desenvolvido com o intuito de pôr em prático os conhecimento sobre a linguagem JavaScript juntamente com a 
biblioteca Socket.io. O seu início se deu através das aulas da equipe [RocketSeat](https://rocketseat.com.br), que propôs 
como desafio algumas mudanças para uma melhor experiência para com o usuário.

# Desenvolvimento
A primeira modificação realizada no projeto foi alterar o elemento HTML **div** onde as mensagens eram mostradas para o elemento do tipo **select**, desta forma as mensagens não ultrapassam o limite da região e o usuário pode utilizar um *scroll* para visualizar todas elas. Após isso, foi criado um outro elemento **select** para armazenar os usuários que estão disponíveis onde toda a lógica necessária para isso acontecer também foi desenvolvida.
 
Por último, foi adicionado ao servidor a função de inserir o horário (hora e minuto) às mensagens sempre que as recebe e as envia para todos os usuários que estão na sala. As futuras melhorias do projeto serão poder fornecer um serviço que capture mídia (som e imagem) ou arquivos e os envie para um único cliente determinado pelo usuário.
