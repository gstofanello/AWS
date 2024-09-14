const express = require('express');
const app = express();
const PORT = 25000;

// Rota que fornece dados
app.get('/api/data', (req, res) => {
  res.json({ message: 'TESTANDO!', timestamp: new Date() });
});

// Iniciar o servidor na porta 25000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


