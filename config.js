module.exports = {
    client: {
        token: '', // ← Your bot token (.env IS RECOMMENDED)
        id: '1207745002650861623' // ← Your bot ID
    },
    modmail: {
        guildId: '1220087861274083399', // ← Your server ID
        categoryId: '1220145047555805184', // ← The modmail category ID
        staffRoles: ['1220087861290995778'], // ← The modmail staff roles IDs
        mentionStaffRolesOnNewMail: true // ← Mention staff roles when there is a new mail?
    },
    logs: {
        webhookURL: 'https://discord.com/api/webhooks/1220145361423695882/smcwFa-X6ea1E5-52mUMK1UaLp8_Kw1TB-hX0K4KgsT-8M1ltb2DsH91p8ek-bZMlZsE' // ← The logging webhook URL (OPTIONAL) (.env IS RECOMMENDED)
    }
};
