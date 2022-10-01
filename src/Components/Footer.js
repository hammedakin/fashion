

const Footer = () => {
  return (
    <>
      <footer class="text-center text-white footer">
        <div class="container pt-4">
          <section class="mb-4">
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="bi bi-facebook light-text"></i>

            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="bi bi-twitter light-text"></i>

            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >      <i class="bi bi-instagram light-text"></i>
            </a>
          </section>
        </div>

        <div class="text-center text-dark p-3" >
          © 2022 Copyright:
          <a class="text-dark" href="https://mdbootstrap.com/">Trythisnow</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;