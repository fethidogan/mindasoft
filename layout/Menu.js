import React, { useState, useEffect } from 'react'
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap"
import { AiFillApple, AiFillAndroid, AiOutlineClose } from 'react-icons/ai'
import { FaSitemap, FaBusinessTime } from 'react-icons/fa'
import { MdOutlineDevicesOther, MdHealthAndSafety, MdShoppingCart, MdScience, MdSearch } from 'react-icons/md'
import { GiAutoRepair, GiDividedSquare, GiTruck, GiChart, GiAirplaneDeparture, GiGraduateCap, GiHamburgerMenu } from 'react-icons/gi'
import { SiAffinitydesigner, SiPython } from 'react-icons/si'
import { CgWebsite } from 'react-icons/cg'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
// Menu css komple Home modul css içinde
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Menu = () => {
  const [serviceShow, setServiceShow] = useState(false);
  const [expertiseShow, setExpertiseShow] = useState(false);
  const [toggler, setToggler] = useState(false)
  const router = useRouter()

  // scroll pozisyonunu al
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const windowsize = useWindowSize();
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  // sayfaya göre renk değiştir.
  const handlenavcolor = () => {
    if (scrollPosition > 750) {
      return styles.navbar
    }
    if (router.pathname == "/healthcare-medical-app-development") {
      return styles.medicalnavbar
    }
    else if (router.pathname == "/transport-logistics-apps") {
      return styles.logisticsnavbar
    }
    else if (router.pathname == "/financial-app-development") {
      return styles.financialnavbar
    }
    else if (router.pathname == "/ecommerce-app-development") {
      return styles.ecommercenavbar
    }
    else if (router.pathname == "/travel-app-development") {
      return styles.travelnavbar
    }
    else if (router.pathname == "/education-app-development") {
      return styles.educationnavbar
    }
    else {
      return styles.navbar
    }
  }

  const handleserviceclick = () => {
    if (!serviceShow) {
      setServiceShow(true)
    }
    if (serviceShow) {
      setServiceShow(false)
    }
    if (expertiseShow) {
      setServiceShow(true)
      setExpertiseShow(false)
    }
  }

  const handlexpertiseclick = () => {
    if (!expertiseShow) {
      setExpertiseShow(true)
    }
    if (expertiseShow) {
      setExpertiseShow(false)
    }
    if (serviceShow) {
      setExpertiseShow(true)
      setServiceShow(false)
    }
  }

  return (
    <>

      {router.pathname === "/admin/requests" || router.pathname === "/admin/addblog" || router.pathname === "/admin/edit" ?

        <Navbar collapseOnSelect expand="lg" className={handlenavcolor()} fixed="top">

          <Container >
            <Link href="/" passHref><Navbar.Brand className={styles.bottlelogo}>MINDASOFT</Navbar.Brand></Link>

            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setToggler(!toggler)}>
              {!toggler ? <GiHamburgerMenu size={30} color="#2977ff" /> : <AiOutlineClose size={30} color="#ad0051" />}
            </Navbar.Toggle>


            <Container>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                  <Link href="/admin/requests" passHref><Nav.Link><span className={styles.services}>Client Requests</span></Nav.Link></Link>
                  <Link href="/admin/addblog" passHref><Nav.Link><span className={styles.services}>Add Blog Post</span></Nav.Link></Link>
                  <Link href="/admin/edit" passHref><Nav.Link><span className={styles.services}>Edit Blog Post</span></Nav.Link></Link>

                </Nav>
              </Navbar.Collapse>
            </Container>

          </Container>
        </Navbar>

        :

        <Navbar collapseOnSelect expand="lg" className={handlenavcolor()} fixed="top">

          {/* Dropdown Arrowu yoket */}
          <style jsx global>{`.dropdown-toggle::after {content: none;}`}</style>
          {/* Dropdown menü */}
          <style jsx global>{`
      .dropdown-menu {margin-left: -450px; border: 0px; box-shadow:0px 0px 10px rgba(230, 230, 230, 0.9)}
      .show > .dropdown-menu {
        max-height: 900px;
        visibility: visible;
        transition: all 0.5s ease-in-out;
        margin-top: 0px;
      }
      
      .dropdown-menu {
        display: block;
        max-height: 0;
        visibility: hidden;
        overflow: hidden;
      }
      @media only screen and (max-width: 1200px) {.dropdown-menu{margin-left:-40px; padding:0px;}}`}</style>


          {windowsize.width > 600 ?
            <Container >
              <Link href="/" passHref><Navbar.Brand className={styles.bottlelogo}>MINDASOFT</Navbar.Brand></Link>

              {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
              <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setToggler(!toggler)}>
                {!toggler ? <GiHamburgerMenu size={30} color="#2977ff" /> : <AiOutlineClose size={30} color="#ad0051" />}
              </Navbar.Toggle>


              <Container>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  </Nav>
                  <Nav
                    navbarScroll
                  >

                    <NavDropdown
                      title={<span className={styles.services}>Services {serviceShow ? <RiArrowUpSFill size={20} style={{ marginTop: "-5px" }} /> : <RiArrowDownSFill size={20} style={{ marginTop: "-5px" }} />}</span>}
                      id="collasible-nav-dropdown"
                      className={styles.dropdownitem}
                      show={serviceShow}
                      onClick={() => handleserviceclick()}
                      onMouseEnter={() => setServiceShow(true)}
                      onMouseLeave={() => setServiceShow(false)}>

                      <Container className={styles.dropdownitems} >

                        <Container>

                          <NavDropdown.Item className={styles.dropdowntitles}>Mobile App Development</NavDropdown.Item>

                          <Link href="/ios-iphone-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><AiFillApple size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />iOs app development <p className={styles.subtexts}>iPhone and iPad applications</p></NavDropdown.Item></Link>
                          <Link href="/android-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><AiFillAndroid size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />Android app development <p className={styles.subtexts}>Applications for android devices</p></NavDropdown.Item></Link>
                          <Link href="/cross-platform-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><MdOutlineDevicesOther size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />Cross-Platform development<p className={styles.subtexts}>Cross-platform development for multi os</p></NavDropdown.Item></Link>

                        </Container>

                        <Container>

                          <NavDropdown.Item className={styles.dropdowntitles}>Web Development</NavDropdown.Item>

                          <Link href="/web-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><FaSitemap size={30} color="#ffcf4a" style={{ marginTop: "-5px", marginRight: "7px" }} />Web app development<p className={styles.subtexts}>Custom web app development</p></NavDropdown.Item></Link>
                          <Link href="/single-page-apps" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><CgWebsite size={30} color="#ffcf4a" style={{ marginTop: "-5px", marginRight: "7px" }} />Single-page application <p className={styles.subtexts}>Single page web apps with low cost</p></NavDropdown.Item></Link>
                          <Link href="/website-modernization" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><GiAutoRepair size={30} color="#ffcf4a" style={{ marginTop: "-5px", marginRight: "7px" }} />Website modernization<p className={styles.subtexts}>Redesigning the old website</p></NavDropdown.Item></Link>

                        </Container>

                        <Container>

                          <NavDropdown.Item className={styles.dropdowntitles}>For Startups</NavDropdown.Item>

                          <Link href="/mvp-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><GiDividedSquare size={30} color="#924fff" style={{ marginTop: "-5px", marginRight: "7px" }} />MVP Development<p className={styles.subtexts}>Reduce time to get in market</p></NavDropdown.Item></Link>
                          <Link href="/ui-ux-design-services" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><SiAffinitydesigner size={30} color="#924fff" style={{ marginTop: "-5px", marginRight: "7px" }} />UI / UX Design <p className={styles.subtexts}>Attract visitors with design</p></NavDropdown.Item></Link>

                        </Container>

                      </Container>

                    </NavDropdown>

                    <NavDropdown
                      title={<span className={styles.services}>Expertise {expertiseShow ? <RiArrowUpSFill size={20} style={{ marginTop: "-5px" }} /> : <RiArrowDownSFill size={20} style={{ marginTop: "-5px" }} />}</span>}
                      id="collasible-nav-dropdown"
                      className={styles.dropdownitem}
                      show={expertiseShow}
                      onClick={() => handlexpertiseclick()}
                      onMouseEnter={() => setExpertiseShow(true)}
                      onMouseLeave={() => setExpertiseShow(false)}>

                      <Container className={styles.dropdownitems}>

                        <Container>

                          <NavDropdown.Item className={styles.dropdowntitles}>Industries</NavDropdown.Item>

                          <Link href="/healthcare-medical-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><MdHealthAndSafety size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />Healthcare and medical<p className={styles.subtexts}>Health & medical applications</p></NavDropdown.Item></Link>
                          <Link href="/transport-logistics-apps" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><GiTruck size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />Logistics<p className={styles.subtexts}>Solutions for logistic companies</p></NavDropdown.Item></Link>
                          <Link href="/financial-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><GiChart size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />Financial<p className={styles.subtexts}>Analytics and payment solutions</p></NavDropdown.Item></Link>
                          <Link href="/ecommerce-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><MdShoppingCart size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />Retail<p className={styles.subtexts}>E-commerce solutions for companies</p></NavDropdown.Item></Link>
                          <Link href="/travel-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><GiAirplaneDeparture size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />Travel<p className={styles.subtexts}>Booking solutions and integration</p></NavDropdown.Item></Link>
                          <Link href="/education-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><GiGraduateCap size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />Education<p className={styles.subtexts}>E-learning solutions</p></NavDropdown.Item></Link>

                        </Container>

                        <div>
                          <Container>

                            <NavDropdown.Item className={styles.dropdowntitles}>Software Development</NavDropdown.Item>

                            <Link href="/python-development-services" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><SiPython size={30} color="#34eb98" style={{ marginTop: "-5px", marginRight: "7px" }} />Python development<p className={styles.subtexts}>Python solutions and integration</p></NavDropdown.Item></Link>
                            <Link href="/data-science-and-machine-learning-service" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><MdScience size={30} color="#34eb98" style={{ marginTop: "-5px", marginRight: "7px" }} />Data science & ML Apps<p className={styles.subtexts}>Data processing and Machine learning</p></NavDropdown.Item></Link>

                          </Container>

                          <Container>

                            <NavDropdown.Item className={styles.dropdowntitles}>Digital transformation</NavDropdown.Item>

                            <Link href="/crm-development-services" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><FaBusinessTime size={30} color="#8d30ff" style={{ marginTop: "-5px", marginRight: "7px" }} />CRM, HRM, ERP<p className={styles.subtexts}>CRM, HRM, ERP solutions for your companies</p></NavDropdown.Item></Link>
                            <Link href="/seo-services" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><MdSearch size={30} color="#8d30ff" style={{ marginTop: "-5px", marginRight: "7px" }} />SEO<p className={styles.subtexts}>Reach top on search engines</p></NavDropdown.Item></Link>

                          </Container>

                        </div>

                      </Container>

                    </NavDropdown>

                    <Link href="/blog" passHref><Nav.Link onClick={() => setToggler(false)}><span className={styles.services}>Blog</span></Nav.Link></Link>
                    <Link href="/contact" passHref><Nav.Link onClick={() => setToggler(false)}><span className={styles.services}><Button className={styles.navbarhireus} size='md'>Contact Us</Button></span></Nav.Link></Link>

                  </Nav>
                </Navbar.Collapse>
              </Container>

            </Container>
            :
            <Container >
              <Link href="/" passHref><Navbar.Brand className={styles.bottlelogo}>MINDASOFT</Navbar.Brand></Link>

              {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
              <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setToggler(!toggler)}>
                {!toggler ? <GiHamburgerMenu size={30} color="#2977ff" /> : <AiOutlineClose size={30} color="#ad0051" />}
              </Navbar.Toggle>


              <Container>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                  </Nav>
                  <Nav
                    navbarScroll
                  >

                    <NavDropdown
                      title={<span className={styles.services}>Services {serviceShow ? <RiArrowUpSFill size={20} style={{ marginTop: "-5px" }} /> : <RiArrowDownSFill size={20} style={{ marginTop: "-5px" }} />}</span>}
                      id="collasible-nav-dropdown"
                      className={styles.dropdownitem}
                      show={serviceShow}
                      onClick={() => handleserviceclick()}
                    >

                      <Container className={styles.dropdownitems} >

                        <Container>

                          <NavDropdown.Item className={styles.dropdowntitles}>Mobile Development</NavDropdown.Item>

                          <Link href="/ios-iphone-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><AiFillApple size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />iOs app development <p className={styles.subtexts}>iPhone and iPad applications</p></NavDropdown.Item></Link>
                          <Link href="/android-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><AiFillAndroid size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />Android app development <p className={styles.subtexts}>Applications for android devices</p></NavDropdown.Item></Link>
                          <Link href="/cross-platform-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><MdOutlineDevicesOther size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />Cross-Platform development<p className={styles.subtexts}>Cross-platform development for multi os</p></NavDropdown.Item></Link>

                        </Container>

                        <Container>

                          <NavDropdown.Item className={styles.dropdowntitles}>Web Development</NavDropdown.Item>

                          <Link href="/web-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><FaSitemap size={30} color="#ffcf4a" style={{ marginTop: "-5px", marginRight: "7px" }} />Web app development<p className={styles.subtexts}>Custom web app development</p></NavDropdown.Item></Link>
                          <Link href="/single-page-apps" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><CgWebsite size={30} color="#ffcf4a" style={{ marginTop: "-5px", marginRight: "7px" }} />Single page apps <p className={styles.subtexts}>Single page web apps with low cost</p></NavDropdown.Item></Link>
                          <Link href="/website-modernization" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><GiAutoRepair size={30} color="#ffcf4a" style={{ marginTop: "-5px", marginRight: "7px" }} />Website modernization<p className={styles.subtexts}>Redesigning the old website</p></NavDropdown.Item></Link>

                        </Container>

                        <Container>

                          <NavDropdown.Item className={styles.dropdowntitles}>For Startups</NavDropdown.Item>

                          <Link href="/mvp-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><GiDividedSquare size={30} color="#924fff" style={{ marginTop: "-5px", marginRight: "7px" }} />MVP Development<p className={styles.subtexts}>Reduce time to get in market</p></NavDropdown.Item></Link>
                          <Link href="/ui-ux-design-services" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><SiAffinitydesigner size={30} color="#924fff" style={{ marginTop: "-5px", marginRight: "7px" }} />UI / UX Design <p className={styles.subtexts}>Attract visitors with design</p></NavDropdown.Item></Link>

                        </Container>

                      </Container>

                    </NavDropdown>

                    <NavDropdown
                      title={<span className={styles.services}>Expertise {expertiseShow ? <RiArrowUpSFill size={20} style={{ marginTop: "-5px" }} /> : <RiArrowDownSFill size={20} style={{ marginTop: "-5px" }} />}</span>}
                      id="collasible-nav-dropdown"
                      className={styles.dropdownitem}
                      show={expertiseShow}
                      onClick={() => handlexpertiseclick()}
                    >

                      <Container className={styles.dropdownitems}>

                        <Container>

                          <NavDropdown.Item className={styles.dropdowntitles}>Industries</NavDropdown.Item>

                          <Link href="/healthcare-medical-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><MdHealthAndSafety size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />Healthcare and medical<p className={styles.subtexts}>Health & medical applications</p></NavDropdown.Item></Link>
                          <Link href="/transport-logistics-apps" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><GiTruck size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />Logistics<p className={styles.subtexts}>Solutions for logistic companies</p></NavDropdown.Item></Link>
                          <Link href="/financial-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><GiChart size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />Financial<p className={styles.subtexts}>Analytics and payment solutions</p></NavDropdown.Item></Link>
                          <Link href="/ecommerce-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><MdShoppingCart size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />Retail<p className={styles.subtexts}>E-commerce solutions for companies</p></NavDropdown.Item></Link>
                          <Link href="/travel-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><GiAirplaneDeparture size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />Travel<p className={styles.subtexts}>Booking solutions and integration</p></NavDropdown.Item></Link>
                          <Link href="/education-app-development" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><GiGraduateCap size={30} color="#2977ff" style={{ marginTop: "-5px", marginRight: "7px" }} />Education<p className={styles.subtexts}>E-learning solutions</p></NavDropdown.Item></Link>

                        </Container>

                        <div>
                          <Container>

                            <NavDropdown.Item className={styles.dropdowntitles}>Software Development</NavDropdown.Item>

                            <Link href="/python-development-services" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><SiPython size={30} color="#34eb98" style={{ marginTop: "-5px", marginRight: "7px" }} />Python development<p className={styles.subtexts}>Python solutions and integration</p></NavDropdown.Item></Link>
                            <Link href="/data-science-and-machine-learning-service" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><MdScience size={30} color="#34eb98" style={{ marginTop: "-5px", marginRight: "7px" }} />Data science & ML Apps<p className={styles.subtexts}>Data processing and Machine learning</p></NavDropdown.Item></Link>

                          </Container>

                          <Container>

                            <NavDropdown.Item className={styles.dropdowntitles}>Digital transformation</NavDropdown.Item>

                            <Link href="/crm-development-services" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><FaBusinessTime size={30} color="#8d30ff" style={{ marginTop: "-5px", marginRight: "7px" }} />CRM, HRM, ERP<p className={styles.subtexts}>CRM, HRM, ERP solutions for your companies</p></NavDropdown.Item></Link>
                            <Link href="/seo-services" passHref><NavDropdown.Item className={styles.dropdowntexts} onClick={() => setToggler(false)}><MdSearch size={30} color="#8d30ff" style={{ marginTop: "-5px", marginRight: "7px" }} />SEO<p className={styles.subtexts}>Reach top on search engines</p></NavDropdown.Item></Link>

                          </Container>

                        </div>

                      </Container>

                    </NavDropdown>

                    <Link href="/blog" passHref><Nav.Link onClick={() => {
                      setToggler(false)
                      setExpertiseShow(false)
                      setServiceShow(false)
                    }}><span className={styles.services}>Blog</span></Nav.Link></Link>
                    
                    <Link href="/contact" passHref><Nav.Link onClick={() => {
                      setToggler(false)
                      setExpertiseShow(false)
                      setServiceShow(false)
                    }}><span className={styles.services}><Button className={styles.navbarhireus} size='md'>Contact Us</Button></span></Nav.Link></Link>

                  </Nav>
                </Navbar.Collapse>
              </Container>

            </Container>
          }

        </Navbar>
      }
    </>
  )
}

export default Menu
