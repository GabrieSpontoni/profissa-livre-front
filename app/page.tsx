import Image from "next/image";

export default function Home() {
  const propsImageCarousel: {
    width: number;
    height: number;
  } = {
    width: 400,
    height: 300,
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-base-content">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <div className="rounded-t-lg overflow-hidden bg-base-200 relative min-w-96 h-64">
            <Image
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="carousel rounded-box my-4 lg:mx-40">
        <div className="carousel-item">
          <Image
            {...propsImageCarousel}
            src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <Image
            {...propsImageCarousel}
            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <Image
            {...propsImageCarousel}
            src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <Image
            {...propsImageCarousel}
            src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <Image
            {...propsImageCarousel}
            src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <Image
            {...propsImageCarousel}
            src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <Image
            {...propsImageCarousel}
            src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Burger"
          />
        </div>
      </div>
    </main>
  );
}
