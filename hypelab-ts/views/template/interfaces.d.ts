export declare enum Component {
    headline = 0,
    body = 1,
    ctaLink = 2,
    ctaText = 3,
    displayUrl = 4,
    mediaContent = 5,
    icon = 6,
    advertiser = 7
}
export interface DisplayCampaign {
    headline: string;
    body: string;
    displayUrl: string;
    ctaUrl: string;
    ctaText: string;
    media: Media;
    icon: string;
    advertiser: string;
}
export declare enum MediaType {
    image = 0,
    video = 1
}
export interface Media {
    type: MediaType;
    url: string;
}
export declare const PlacementIdentifier = "hypelabPlacementIdentifier";
