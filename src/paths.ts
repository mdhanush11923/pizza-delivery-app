const paths = {
  home() {
    return "/";
  },

  topicShow(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },

  postCreate(topicSlug: string) {
    return `/topics/${topicSlug}/posts/new`;
  },

  postShow(topicSlug: string, postId: string) {
    return `/topics/${topicSlug}/posts/${postId}`;
  },
};

export default paths;

export const privateRoutes = [
  "/admin/stock",
  "/admin/orders",
  "/dashboard",
  "/dashboard/menu",
  "/dashboard/custom",
  "/dashboard/orders",
];

export const entryRoutes = ["/", "/login", "signup"]

export const DEFAULT_LOGIN_REDIRECT = "/dashboard";