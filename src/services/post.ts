import { IPost } from "src/interfaces";

export const getPosts = (): Promise<IPost[]> => {
  const posts = Array(5)
    .fill(0)
    .map(
      (_, i): IPost => ({
        date: new Date(new Date().setDate(i)),
        body: "lorem ipsum",
        title: "Webshippy",
      })
    );
  return new Promise<IPost[]>((resolve) => resolve(posts));
};
