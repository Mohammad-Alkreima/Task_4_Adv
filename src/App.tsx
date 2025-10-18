import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {

  return (
    <>
      <Header/>
      <Main/>
      <Footer
        logo={"/Task_4_Adv/assets/img/logo.png"}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque."
        sections={[
          {
            title: "Service",
            links: [
              { label: "Payment & Tax", href: "#" },
              { label: "Features", href: "#" },
              { label: "View Booking", href: "#" },
              { label: "Support", href: "#" },
            ],
          },
          {
            title: "About",
            links: [
              { label: "About us", href: "#" },
              { label: "News", href: "#" },
              { label: "Pricing", href: "#" },
              { label: "New Property", href: "#" },
            ],
          },
          {
            title: "Our Location",
            text: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
          },
        ]}
        socialLinks={[
          { icon: "/Task_4_Adv/assets/img/facebook-fill.svg", href: "#" },
          { icon: "/Task_4_Adv/assets/img/twitter-fill.svg", href: "#" },
          { icon: "/Task_4_Adv/assets/img/linkedin-fill.svg", href: "#" },
        ]}
      />
    </>
  )
}

export default App
