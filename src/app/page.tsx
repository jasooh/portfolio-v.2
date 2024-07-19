// CSS
import "../styling/constants.css";

export default function Home() {
  return (
    <main className="page-container px-96 pt-20">
      {/* Name section */}
      <header className="fixed fit-self">
        <p>Hey, I'm</p>
        <h1 className="text-stroke mb-2">
          JUSTIN <br /> ABUYUAN
        </h1>
        <h2>
          Engineering Student @ the{" "}
          <span className="text-secondary">University of Waterloo</span>
        </h2>
      </header>

      {/* Content section */}
      <section className="full-screen-fit row-container align-right">
        {/* Summary */}
        <div className="w-1/2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            dicta assumenda pariatur minima nisi est fuga veniam aliquid
            architecto eos eum nobis ut adipisci, vero, consectetur voluptas
            ullam dolorem explicabo!
          </p>
        </div>

        {/* Experience */}

        {/* Projects */}

        {/* Contact */}
      </section>
    </main>
  );
}
