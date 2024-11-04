// controllers/journalController.js
const journalService = require('../services/journalService');

exports.getJournalsByUser = async (req, res) => {
    try {
        const userId = req.user.userId;
        const journals = await journalService.getJournalsByUserId(userId);
        res.status(200).json(journals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getJournalById = async (req, res) => {
    try {
        const journal = await journalService.getJournalById(req.params.id);
        if (!journal) return res.status(404).json({ message: 'Journal not found' });

        res.status(200).json(journal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addJournal = async (req, res) => {
    try {
        const journalData = { ...req.body, userId: req.user.userId };
        const journal = await journalService.addJournal(journalData);
        res.status(201).json(journal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateJournal = async (req, res) => {
    try {
        const journal = await journalService.updateJournal(req.params.id, req.body);
        res.status(200).json(journal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteJournal = async (req, res) => {
    try {
        await journalService.deleteJournal(req.params.id);
        res.status(200).json({ message: 'Journal deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
