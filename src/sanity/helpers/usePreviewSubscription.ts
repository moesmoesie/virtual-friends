import { createPreviewSubscriptionHook } from "next-sanity";

const usePreviewSubscription = createPreviewSubscriptionHook({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN!,
});

export default usePreviewSubscription;
