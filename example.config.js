module.exports = {
    client: {
        token: '', // ← Your bot token (.env IS RECOMMENDED)
        id: '1214664524473311262' // ← Your bot ID
    },
    modmail: {
        guildId: '1219634544500670495', // ← Your server ID
        categoryId: '1219634545029156924', // ← The modmail category ID
        staffRoles: ['1219684494471331842'], // ← The modmail staff roles IDs
        mentionStaffRolesOnNewMail: true // ← Mention staff roles when there is a new mail?
    },
    logs: {
        webhookURL: '' // ← The logging webhook URL (OPTIONAL) (.env IS RECOMMENDED)
    }
};
