import { useStorage } from "@vueuse/core";
import {
  generateSecretKey,
  getPublicKey,
} from "nostr-tools";

const loggedIn = useStorage("loggedIn", false);

const profile: any = useStorage("current-user", {
  firstName: "",
  lastName: "",
  displayName: "",
  name: "",
  about: "",
  email: "",
  avatar: null,
  pub: "",
  priv: "",
});

export default () => {
  const registerNew = async () => {
    if (!loggedIn.value) {
      const priv = generateSecretKey(); // `sk` is a hex string
      const pub = getPublicKey(priv); // `pk` is a hex string
      const randomName = SeedNames(pub);
      const guestProfile = "guest";

      const newProfile = {
        firstName: randomName.split(" ")[0],
        lastName: randomName.split(" ")[1],
        displayName: randomName,
        name: guestProfile,
        about: `یک ${randomName} تازه وارد`,
        email: "guest@guest.guest",
        avatar: "",
      };
      const user = {
        pub,
        priv,
      };
      profile.value = {
        ...newProfile,
        ...user,
      };
      loggedIn.value = true;
    }
    console.log("profile", profile.value);
  };

  return {
    profile,
    registerNew,
  };
};
