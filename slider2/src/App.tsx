import "./App.css";

import Slider from "./components/slider";

const images = [
  "https://wallpapercave.com/wp/o0o0JI8.jpg",
  "https://cdn.wallpapersafari.com/13/26/0LbGYl.jpg",
  "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1652341392/EducationHub/photos/saguaro-cacti.jpg",
  "https://cdn.wallpapersafari.com/53/62/l6bruO.jpg",
];

function App() {
  return <Slider images={images} />;
}

export default App;
