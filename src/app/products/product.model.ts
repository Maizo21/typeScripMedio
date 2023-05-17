import { Category } from "../categories/category.model";
import { BaseModel } from "../base.model";

export type Sizes = "S" | "M" | "L";

export interface Product extends BaseModel {
  name: string;
  image: string;
  description: string;
  stock: number;
  price: number;
  size: Sizes;
  category: Category;
  isNew: boolean;
  tags: string[];
}
