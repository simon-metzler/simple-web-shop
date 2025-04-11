export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2023, our motorcycle shop was born from a passion for
            two-wheeled adventures and the freedom of the open road. What
            started as a small garage operation has grown into a trusted
            destination for motorcycle enthusiasts.
          </p>
          <p className="mb-4">
            We specialize in high-performance motorcycles, with a particular
            focus on KTM's exceptional range of street and off-road bikes. Our
            team consists of experienced riders who understand the needs of both
            novice and seasoned motorcyclists.
          </p>
        </div>

        <div className="bg-base-200 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            We're committed to providing exceptional motorcycles that deliver
            unmatched performance, reliability, and excitement. Our goal is to
            help riders find the perfect machine that matches their riding style
            and aspirations.
          </p>
          <p>
            Beyond just selling motorcycles, we aim to foster a community of
            passionate riders who share our love for the sport and lifestyle.
            Whether you're a track day enthusiast, an off-road adventurer, or a
            daily commuter, we're here to support your journey.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Expertise</h3>
              <p>
                Our team consists of passionate riders with years of experience
                in the motorcycle industry.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Quality</h3>
              <p>
                We only offer premium motorcycles and accessories that meet our
                high standards.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Community</h3>
              <p>
                Join our growing community of riders for events, group rides,
                and shared experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          Have questions or want to learn more about our motorcycles? Feel free
          to reach out to us at{" "}
          <span className="font-semibold">info@simplemotoshop.com</span> or
          visit our shop at{" "}
          <span className="font-semibold">
            123 Rider Street, Motorcycle City
          </span>
          .
        </p>
      </div>
    </div>
  );
}
