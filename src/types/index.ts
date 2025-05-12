interface User {
  id: number;
  nickname: string;
  imageUri?: string;
}

interface Profile extends User {
  email: string;
  introduce?: string;
}

interface ImageUri {
  id?: number;
  uri: string;
}

interface Portfolio {
  id: number;
  userId: number;
  title: string;
  description: string;
  createdAt: string;
  author: User;
  imageUris: ImageUri[];
}

export type { Profile, Portfolio };
