export type PageType = Readonly<{
  searchParams: any;
  params: any;
}>;

export type filterType = {
  searchParams: any;
  page: number;
  take: number;
};

export type LayoutType = {
  children: React.ReactNode;
};

export type ServerActionReturnType = {
  errors?: Array<any>;
  ok: boolean;
  error?: any;
  data?: any;
};

export type ImageList = Array<{
  id: number;
  alt: string;
  image: string;
}>;

export type selectDataType = {
  name: string;
  id: number;
};
