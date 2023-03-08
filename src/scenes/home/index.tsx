import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/Hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return <div>Home</div>;
};

export default Home;
