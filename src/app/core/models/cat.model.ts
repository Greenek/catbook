export interface Cat {
  name: string;
  uri: string;
  color: string;
  birthday: string;
  bio: string;
  activities: {
    likes: string[];
    dislikes: string[];
  };
  image: string;
}
