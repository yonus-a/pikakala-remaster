export default function getFilterData(take: number, searchParams: any) {
  return {
    searchParams,
    page: +searchParams.page - 1 || 0,
    take: +searchParams.take || take,
  };
}
