import got from 'got';

const LISTING_SERVICE_URI = 'http://listing-service:7100';

export default class ListingService {
  static async fetchAllListings() {
    const body = await got.get(`${LISTING_SERVICE_URI}/listings`).json();
    return body;
  }
}
