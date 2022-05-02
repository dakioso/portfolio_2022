function Footer() {
  return (
    <footer className='container mx-auto px-6 pt-6 flex flex-row items-center justify-center fixed bottom-0'>
      <a
        href='mailto:daniel.milojevic@hotmail.com'
        className=' hover:opacity-80 duration-150 p-5 block'
        target={'_blank'}
      >
        Contact 📱
      </a>
      |
      <a
        href='https://github.com/dakioso/'
        target={'_blank'}
        className='p-5 hover:opacity-80 duration-150'
      >
        GitHub 💻
      </a>
    </footer>
  );
}

export default Footer;
