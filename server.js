const app = require('./config/express')();
const port = app.get('port');

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(process.env.PORT || port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});