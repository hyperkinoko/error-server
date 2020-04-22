const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const port = process.env.PORT || 10020;

app.get('/item/:id', function (req, res) {
    let error;
    switch(req.params.id) {
        case '400':
            error = {
                "type": "invalid-id",
                "title": "不正なIDです"
            };
            res.status(400).json(error);
            break;
        case '401':
            error = {
                "type": "unauthorized",
                "title": "認証エラー"
            };
            res.status(401).json(error);
            break;
        case '404':
            error = {
                "type": "no item",
                "title": "該当する商品はありません"
            };
            res.status(404).json(error);
            break;
        default:
            const data = {
                "id": req.params.id,
                "name": "商品A",
                "price": 300
            };
            res.json(data);
            break;
    }
});

app.listen(port);
console.log('listen on port' + port);
