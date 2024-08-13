const DisplayName = require('../models/displayName');

// Save a new display name
exports.saveDisplayName = async (req, res) => {
    const { displayName } = req.body;
    const newDisplayName = new DisplayName({ name: displayName });

    try {
        await newDisplayName.save();
        res.status(200).json({
            message: 'Display name saved successfully'
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to save display name' });
    }
};

// Get all display names
exports.getDisplayNames = async (req, res) => {
    try {
        const names = await DisplayName.find({}, 'name');
        res.status(200).json({ names });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch display names' });
    }
};
