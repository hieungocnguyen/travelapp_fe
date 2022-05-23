import axios from "axios";
import cookies from "react-cookies";

export let endpoints = {
   users: "/users/",
   "user-id": (userId) => `/users/${userId}/`,
   current_user: "/users/current_user/",
   oauth2_info: "/oauth2_info/",
   login: "/o/token/",
   tours: "/tours/",
   "tour-detail": (tourId) => `tours/${tourId}/`,
   "tour-images": (tourId) => `tours/${tourId}/images/`,
   tags: (tourId) => `/tours/${tourId}/tags/`,
   "comment-tour": (tourId) => `tours/${tourId}/comments/`,
   "rating-tour": (tourId) => `/tours/${tourId}/rate/`,
   "tour-comment": `/comment_tour/`,
   recoveryPass: "/users/reset_password/",
   confirmPass: "/users/reset_password/confirm/",
   "facebook-access": "/social_auth/facebook/",
   "google-access": "/social_auth/google/",
   "book-tour": "/book_tours/",
   "book-tour-id": (bookId) => `/book_tours/${bookId}/`,
   "send-mail-book-tour": (bookId) => `/book_tours/${bookId}/send_mail/`,
   "total-booking-tour": (tourId) => `/book_tours/${tourId}/total_price/`,
   "user-bill-unpaid": `/users/get_bill_unpaid/`,
   "bills-book-tour": (bookId) => `/bills/${bookId}/`,
   "tour-info-bill": (bookId) => `/bills/${bookId}/get_tour_info/`,
   rate: `/rate/`,
   news: `/news/`,
   "news-detail": (newsId) => `/news/${newsId}/`,
   "news-views": (newsId) => `/news/${newsId}/views/`,

   "comment-news": "/comment_news/",
   "new-comments": (newsId) => `/news/${newsId}/comments/`,
   "news-like-status": (newsId) => `/news/${newsId}/like_status/`,
   "new-click-like": (newsId) => `/news/${newsId}/like/`,
   "count-like-news": (newsId) => `/news/${newsId}/count_like/`,
   "user-get-bill-paid": "/users/get_bill_paid/",
   "user-change-password": (userId) => `/users/${userId}/change_password/`,
   "tours/rate_average": (tourId) => `/tours/${tourId}/rate_average/`,
};

export const authAxios = () =>
   axios.create({
      baseURL: "http://localhost:8000",
      headers: {
         Authorization: `Bearer ${cookies.load("access_token")}`,
      },
   });

export default axios.create({
   baseURL: "http://localhost:8000",
});
