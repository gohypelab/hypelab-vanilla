# HypeLab Publisher SDK

The HypeLab SDK is a JavaScript SDK for writing applications that interact with the HypeLab ad servers. The SDK provides a simple interface for application builders and abstractions for core data structures, ad rendering, and API request generation.

## Features

-   Exposes the HypeLab API through the HypeLab Client
-   Works in any Javascript front-end (TypeScript not yet supported for hypelab-vanilla)

## Integration Guide

Start by including the `hypelab-vanilla` SDK in the head tag:

```html
<head>
    <script src="https://cdn.jsdelivr.net/gh/gohypelab/hypelab-vanilla@vX.X.X/index.js"></script>
</head>
```

Note that the latest version can be found by looking on our public [Github page](https://github.com/gohypelab/hypelab-vanilla/tags).

### Initializing a client

Next, add a `<script>` tag and initialize a client using your `propertySlug`. Call the `setClient` method to ensure that you use the same configuration for the entire page of ad requests.

```js
<script>
  let client = new HypeLab.Client({
    URL: 'https://api.hypelab-staging.com',
    // URL: 'https://api.hypelab.com', /* Production URL */
    propertySlug: '<PROPERTY_SLUG>',
    environment: HypeLab.Environment.Development,
    // environment: HypeLab.Environment.Production, /* Production Environment */
  });

  HypeLab.setClient(client);
</script>
```

### Setting a wallet address

If a user has connected their wallet, you can pass the wallet address to the SDK as follows. Setting a wallet is optional but helps us show the most relevant ad for the user, which in turn will help us personalize ads and ensure we can maximize your earned CPM.

```ts
client.identity.setWalletAddresses(['0x123...', '0x234...']);
```

## Formats

Now that your app is configured, you can start placing ads in any of your React components!

### Banner

Banner ads are static placements that typically display image assets. If you're new to ads monetization, they are a great place to start!

The `banner` method allows the HypeLab SDK to identify where to insert the banner ad.

```html
<script>
    HypeLab.banner({ placement: '<PLACEMENT_SLUG>', container: 'bannerSlot' });
</script>
```

Next, add the `Banner` container you just referenced (in this case, `bannerSlot`).

```html
<div id="bannerSlot"></div>
```

The size of the banner placement can be set during the placement creation process on the HypeLab UI. Please reach out to your account manager for more information.

### Native

Native ads are highly customizable ads that allow you to match the look and feel of an ad with the look and feel of your application. The following is an example Native component that uses the HypeLab SDK to render an ad template.

The `native` method allows the HypeLab SDK to identify your native template and insert the relevant ad content.

```html
<script>
    HypeLab.native({ placement: '<PLACEMENT_SLUG>', container: 'nativeSlot' });
</script>
```

Next, add the `Native` container you just referenced (in this case, `nativeSlot`).

```html
<div id="nativeSlot">
    <div class="bg-black p-5">
        <div class="relative flex items-center">
            <div class="flex-shrink-0">
                <img data-ref="icon" class="h-10 w-10 rounded-full mr-5" />
            </div>
            <div class="min-w-0 flex-1">
                <span class="absolute inset-0" aria-hidden="true"></span>
                <p class="font-medium text-slate-400">@<span data-ref="advertiser"></span></p>
                <p data-ref="displayUrl" class="text-emerald-300 text-sm"></p>
            </div>
        </div>
        <div data-ref="body" class="mt-3 text-white"></div>
        <div class="body-row text-left">
            <div data-ref="headline" class="mt-3 text-white"></div>

            <div class="mt-5">
                <a data-ref="ctaLink" href="/" target="_blank" rel="noreferrer">
                    <div data-ref="mediaContent" class="mediaContent"></div>
                    <div
                        data-ref="ctaText"
                        class="rounded-full bg-emerald-300 px-10 py-2 text-black font-bold mt-5 text-center"
                    ></div>
                </a>
            </div>
        </div>
    </div>
</div>
```

### Rewarded

Rewarded ads are served after a user explicitly chooses to view a rewarded ad. This puts the user in control of their in-app experience. Rewarded ads are shown to users in exchange for a reward that you control, such as an extra life or in-app currency. The best rewards are ones that are relevant to your users at the time they are deciding whether to opt-in to the rewarded experience.

When a user chooses to opt-in to the rewarded experience, an ad will open in a full-screen overlay and the video will autoplay without sound. Once the video playback is done, a callback is fired to let you know that it's time to reward the user.

The `rewarded` method allows the HypeLab SDK to identify where to insert the relevant ad content.

```html
<script>
    const handleRewarded = function () {
        // Grant a reward (e.g., Give an in-game item, unlock a paywall, etc.)
        console.log('handleRewarded called');
    };

    var rewarded = HypeLab.rewarded({ placement: 'f31318b055', container: 'rewarded', onComplete: handleRewarded });

    document.getElementById('hypelab-btn').addEventListener('click', function () {
        rewarded.show();
    });
</script>
```

Like the other ad formats, you need to specify a container that we can inject code into. Additionally, you can pass in a method to be called `onComplete`, which will be called when the rewarded modal is dismissed.

```html
<div id="rewarded"></div>
<div>
    <button
        id="hypelab-btn"
        className="rounded-md border border-gray-300 bg-indigo-600 px-4 py-2 text-lg text-white"
        data-cy="button"
    >
        Watch Video
    </button>
</div>
```
