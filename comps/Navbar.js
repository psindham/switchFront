function Navbar() {
    return <header class="u-clearfix u-header" >
    <nav class="navbar navbar-expand-lg navbar-dark theme-color  static-top" >
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/images/logo.jpg" alt="..." height="80"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Sign up</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sign in</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
}
export default Navbar;