import Footer from '../components/Footer';

function App() {
  document.addEventListener('mousemove', parallax);
  function parallax(event) {
    this.querySelectorAll('.top-text').forEach((shift) => {
      const position = shift.getAttribute('value');
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }

  return (
    <div className='container mx-auto flex flex-col text-white'>
      <main className='container justify-center flex flex-col items-center mx-auto px-6 flex-1'>
        <section className='sec-1 container min-h-screen flex flex-col justify-center items-center'>
          <h2
            className='top-text text-1xl md:text-2xl lg:text-4xl mx-auto opacity-75'
            value='2'
          >
            Your new developer
          </h2>
          <h1
            className='text-3xl md:text-4xl font-bold lg:text-6xl py-1 md:py-2 lg:py-3 uppercase'
            value='1'
          >
            Daniel Milojevic
          </h1>
        </section>
        <span />
        <section className='sec-2 container min-h-screen flex flex-col justify-center items-center'>
          // Cardlist component
        </section>
        <section className='sec-3 container min-h-screen flex flex-col justify-center items-center'></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
