const API_KEY = "02d26983-50bf-449c-b2c6-4ef350ccd607";

export function getNewsCategoriesEndpoint(
  category,
  pageNumber = 1,
  pageSize = 20
) {
  const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page-size=${pageSize}&page=${pageNumber}`;
  return `https://content.guardianapis.com/search${queryParams}`;
}

export function getNewsDetailsEndpoint(newsId) {
  const queryParams = `?api-key=${API_KEY}&show-fields=all`;
  return `https://content.guardianapis.com/${newsId}${queryParams}`;
}
