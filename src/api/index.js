import service from "./service";

export const getNews = () => service("/news.json")
export const getAllNews = () => service("/newsAlldata.json")




