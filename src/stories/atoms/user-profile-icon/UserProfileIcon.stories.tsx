import { UserProfileIcon } from './UserProfileIcon';

export default {
  title: 'Components/UserProfileIcon',
  component: UserProfileIcon,
};

export const Default = () => <UserProfileIcon altText="ユーザー名" />;
export const DefaultLargeSize = () => <UserProfileIcon altText="ユーザー名" size="100px" />;
export const WithImage = () => <UserProfileIcon imageUrl="src/assets/react.svg" altText="ユーザー名" />;
export const LargeSize = () => <UserProfileIcon imageUrl="src/assets/react.svg" altText="ユーザー名" size="100px" />;
