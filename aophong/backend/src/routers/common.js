import express from 'express'
const router = express.Router();

router.get('/', (req, res) => {
    res.send('home')
})

router.get('/tintuc', (req, res) => {
    res.send('tin tức')
})


export default router;