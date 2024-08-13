   const Announcement = require('../models/announcement');

   exports.addAnnouncement = async (req, res) => {
       const { title, summary, details, media } = req.body;
       const newAnnouncement = new Announcement({ title, summary, details, media });

       try {
           await newAnnouncement.save();
           res.status(200).json({ message: 'Announcement added successfully' });
       } catch (err) {
           res.status(500).json({ error: 'Failed to add announcement' });
       }
   };

   exports.getAnnouncementSummaries = async (req, res) => {
       try {
           const announcements = await Announcement.find({}, 'summary');
           res.status(200).json({ announcements });
       } catch (err) {
           res.status(500).json({ error: 'Failed to fetch announcement summaries' });
       }
   };

   exports.getAnnouncementDetails = async (req, res) => {
       try {
           const announcements = await Announcement.find({});
           res.status(200).json({ announcements });
       } catch (err) {
           res.status(500).json({ error: 'Failed to fetch announcement details' });
       }
   };
