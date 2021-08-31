import ListingService from '#root/adapters/ListingService';

const listingsResolver = async () => {
  return await ListingService.fetchAllListings();
};

export default listingsResolver;
