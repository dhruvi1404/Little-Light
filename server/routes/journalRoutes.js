// routes/journalRoutes.js
const express = require('express');
const journalController = require('../controllers/journalController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', verifyToken, journalController.getJournalsByUser);
router.get('/:id', verifyToken, journalController.getJournalById);
router.post('/', verifyToken, journalController.addJournal);
router.put('/:id', verifyToken, journalController.updateJournal);
router.delete('/:id', verifyToken, journalController.deleteJournal);

module.exports = router;
