import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";
import { definePreview } from "next-sanity/preview";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export const previewClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.SANITY_API_TOKEN,
});

export const usePreview = definePreview({ projectId, dataset });
