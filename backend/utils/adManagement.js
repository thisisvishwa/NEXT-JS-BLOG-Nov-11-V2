```javascript
const Ad = require('../models/Ad');

// Function to create a new ad
exports.createAd = async (adDetails) => {
  const ad = new Ad(adDetails);
  await ad.save();
  return ad;
};

// Function to get all ads
exports.getAllAds = async () => {
  const ads = await Ad.find();
  return ads;
};

// Function to get a specific ad
exports.getAd = async (id) => {
  const ad = await Ad.findById(id);
  return ad;
};

// Function to update an ad
exports.updateAd = async (id, adDetails) => {
  const ad = await Ad.findByIdAndUpdate(id, adDetails, { new: true });
  return ad;
};

// Function to delete an ad
exports.deleteAd = async (id) => {
  const ad = await Ad.findByIdAndDelete(id);
  return ad;
};
```