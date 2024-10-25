import { useUser } from '@clerk/clerk-expo';

export const User = () => {
  const { user } = useUser();
  const locationId = user?.unsafeMetadata?.locationid;
  //@ts-ignore
  const isAdmin = user?.unsafeMetadata?.accessrole?.name === 'Admin';
  return { locationId, isAdmin };
};
