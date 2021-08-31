import { Listing } from '#root/db/models';

const setupRoutes = (app) => {
  app.get('/listings', async (req, res, next) => {
    try {
      const listings = await Listing.findAll();
      return res.json(listings);
    } catch (e) {
      return next(e);
    }
  });
};

export default setupRoutes;
