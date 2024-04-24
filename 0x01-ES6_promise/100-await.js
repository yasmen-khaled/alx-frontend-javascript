import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const promis0 = await uploadPhoto();
    const promis1 = await createUser();

    return ({ photo: promis0, user: promis1 });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}
