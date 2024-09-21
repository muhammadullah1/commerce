import OpengraphImage from 'components/opengraph-image';

// remove it mock data
import { mockPageData } from "../../mock-data"
export async function getPage(page: string) {
  return mockPageData;
}

export const runtime = 'edge';

export default async function Image({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);
  const title = page.seo?.title || page.title;

  return await OpengraphImage({ title });
}
