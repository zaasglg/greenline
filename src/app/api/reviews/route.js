import { NextResponse } from 'next/server';
import { scraper } from 'google-maps-review-scraper';

export async function GET() {
  try {
    const googleMapsUrl = "https://www.google.com/maps/place/Green+Line+Carpet+Cleaning/@39.6927189,-104.8741227,17z/data=!3m1!4b1!4m6!3m5!1s0x44055d02d7065a9b:0xf71240a02f337470!8m2!3d39.6927189!4d-104.8741227!16s%2Fg%2F11lnfk3hhw?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D";

    const scrapedReviews = await scraper(googleMapsUrl, {
      sort_type: "newest",
      search_query: "Green Line Carpet Cleaning",
      pages: 3,
      clean: true
    });

    // Transform scraped reviews to match our format
    const formattedReviews = Array.isArray(scrapedReviews)
      ? scrapedReviews.map((review, index) => ({
          id: index + 1,
          text: review.text || review.review_text || "Great service!",
          author: review.author || review.reviewer_name || "Anonymous",
          rating: review.rating || 5
        }))
      : [];

    return NextResponse.json({
      success: true,
      reviews: formattedReviews
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch reviews',
      reviews: []
    }, { status: 500 });
  }
}
