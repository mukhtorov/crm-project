import { ProfileContaier } from "./style";
import noImg from "../../assets/images/noUser.webp";

export const Profile = () => {
  return (
    <ProfileContaier>
      <ProfileContaier.Image src={noImg} />
      <div>
        <ProfileContaier.Name>Sardorbek Muhtorov</ProfileContaier.Name>
        <ProfileContaier.Email>sardor.edu@gmail.com</ProfileContaier.Email>
      </div>
    </ProfileContaier>
  );
};
