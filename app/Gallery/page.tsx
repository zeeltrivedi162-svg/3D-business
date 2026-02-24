import Image from "next/image";

export default function Gallery() {
  const images = [
    "/model 3d img.jpg",
    "/house 3d img.webp",
    "/cube 3d.jpg",
    "/keychain 3d.jpg",
    "/3d photo img.jpg",
    "/logo 3d img.jpg",
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h1 className="gallery-title">Our Gallery</h1>
        <p className="gallery-intro">
          Explore our latest 3D projects and creative digital work.
        </p>

        <div className="gallery-grid">
          {images.map((src, index) => (
            <div
              className="gallery-item"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="gallery-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}