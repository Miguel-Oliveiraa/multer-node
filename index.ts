import express from 'express';
import multer from 'multer';
import { storage } from './multerConfig';

const upload = multer({ storage: storage });
const app = express();

// Permite acessar arquivos na pasta uploads em /files/[nome_do_arquivo]
app.use('/files', express.static("uploads"));

// Envia arquivo com o nome file
app.post('/upload', upload.single('file'), (req, res) => {
    res.json(req.body.filename);
});

app.listen(3000);