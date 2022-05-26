import { IPost } from "./IPost";
import { IShareable } from "./IShareable";

export class Post implements IPost, IShareable {
  public body!: string;
  public date!: Date;
  public title!: string;
  public shared!: number;
}
