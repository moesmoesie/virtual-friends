import {
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";

import { config } from "./config";

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);

export function filterDataToSingleItem(data, preview) {
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
}

export const formatSlugData = (data, prefix) => {
  return data.map(({ params }) => {
    return {
      params: { slug: params.slug.substring(prefix.length) },
    };
  });
};
