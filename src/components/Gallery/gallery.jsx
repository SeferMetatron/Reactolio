import "./gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <h2 className="gallery-title">Portfolio Samples</h2>
      <div className="card">
        <img src="https://picsum.photos/150/150?1" alt="card" />
      </div>
      <div className="card">
        <img src="https://picsum.photos/150/150?2" alt="card" />
      </div>
      <div className="card">
        <img src="https://picsum.photos/150/150?3" alt="card" />
      </div>
      <div className="card">
        <img src="https://picsum.photos/150/150?4" alt="card" />
      </div>
      <div className="card">
        <img src="https://picsum.photos/150/150?5" alt="card" />
      </div>
      <div className="card">
        <img src="https://picsum.photos/150/150?6" alt="card" />
      </div>
      <div className="card">
        <img src="https://picsum.photos/150/150?7" alt="card" />
      </div>
      <div className="card">
        <img src="https://picsum.photos/150/150?8" alt="card" />
      </div>
      <div className="card">
        <img src="./Images/jojoj.jpg" alt="card" />
      </div>
    </div>
  );
};
export default Gallery;
