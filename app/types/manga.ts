export type ComicItem = {
  _id: string;
  name: string;
  slug: string;
  origin_name: string[];
  status: string;
  thumb_url: string;
  sub_docquyen: boolean;
  category: {
    id: string;
    name: string;
    slug: string;
  }[];
  updatedAt: string;
  chaptersLatest: {
    chapter_name: number;
    chapter_api_data: string;
    filename: string,
  }[]
  chapters: {
    server_data: {
      chapter_name: number;
      chapter_api_data: string;
      filename: string,
    }[];
  }[];
  content: string,
  author: string[]
};

export type SeoOnPage = {
  titleHead: string;
  descriptionHead: string;
  og_type: string;
  og_image: string[];
};

export type Pagination = {
  totalItems: number;
  totalItemsPerPage: number;
  currentPage: number;
  pageRanges: number;
};

export type ApiParams = {
  type_slug: string;
  filterCategory: any[];
  sortField: string;
  pagination: Pagination;
  itemsUpdateInDay: number;
};

export type ComicApiResponse = {
  status: string;
  message: string;
  data: {
    seoOnPage: SeoOnPage;
    items: ComicItem[];
    params: ApiParams;
    type_list: string;
    APP_DOMAIN_FRONTEND: string;
    APP_DOMAIN_CDN_IMAGE: string;
  };
};

export type ChapterResponse = {
  domain_cdn: string;
  item: {
    chapter_path: string;
    chapter_image: {
      image_page: number;
      image_file: string;
    }[];
  };
};