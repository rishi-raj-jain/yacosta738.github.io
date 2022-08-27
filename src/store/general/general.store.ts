import { atom } from "nanostores";

const DARK = "dark";
const LIGHT = "light";

const getTheme = (): string => {
  if (!localStorage.getItem("theme")) localStorage.setItem("theme", DARK);

  return localStorage.getItem("theme");
};

export interface IGeneralStore {
  theme: string;
  drawer: boolean;
  showNavbar: boolean;
  showAdsBanner: boolean;
  showSide: boolean;
  loading: boolean;
  firstTimeLoading: boolean;
  swStatus: string;
  searchModal: boolean;
}

const generalStore = atom<IGeneralStore>({
  theme: getTheme(),
  drawer: false,
  showNavbar: true,
  showAdsBanner: true,
  showSide: true,
  loading: false,
  firstTimeLoading: true,
  swStatus: "pending",
  searchModal: false,
});

const updateShowNavbar = (showNavbar: boolean) => {
  generalStore.set({ ...generalStore.get(), showNavbar });
};

const toggleShowAdsBanner = () => {
  console.log({ ...generalStore.get(), showAdsBanner: generalStore.get().showAdsBanner });
  console.log({ ...generalStore.get(), showAdsBanner: !generalStore.get().showAdsBanner });
  const { showAdsBanner } = generalStore.get();
  generalStore.set({ ...generalStore.get(), showAdsBanner: !showAdsBanner });
  console.log("------------------------------");
  console.log({ ...generalStore.get(), showAdsBanner: generalStore.get().showAdsBanner });
  console.log({ ...generalStore.get(), showAdsBanner: !generalStore.get().showAdsBanner });
};

const updateDrawer = (drawer: boolean) => {
  generalStore.set({ ...generalStore.get(), drawer });
};
const toggleDrawer = () => {
  updateDrawer(!generalStore.get().drawer);
};

const toggleSearchModal = () => {
  generalStore.set({
    ...generalStore.get(),
    searchModal: !generalStore.get().searchModal,
  });
};

export {
  generalStore,
  updateDrawer,
  updateShowNavbar,
  toggleDrawer,
  toggleSearchModal,
  toggleShowAdsBanner,
};