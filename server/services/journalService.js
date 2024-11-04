// services/journalService.js
const { Journal, User } = require('../models');

exports.getJournalsByUserId = async (userId) => {
    return await Journal.findAll({ where: { user_id: userId } });
};

exports.getJournalById = async (journalId) => {
    return await Journal.findByPk(journalId);
};

exports.addJournal = async (journalData) => {
    const user = await User.findByPk(journalData.userId);
    if (!user) throw new Error('User not found');

    return await Journal.create({
        ...journalData,
        user_id: journalData.userId
    });
};

exports.updateJournal = async (journalId, journalData) => {
    const journal = await Journal.findByPk(journalId);
    if (!journal) throw new Error('Journal not found');

    return await journal.update(journalData);
};

exports.deleteJournal = async (journalId) => {
    const journal = await Journal.findByPk(journalId);
    if (!journal) throw new Error('Journal not found');

    return await journal.destroy();
};
