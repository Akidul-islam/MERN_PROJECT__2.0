import Layout from '../../shareUi/Layout';
import AboutSection from './AboutSection';
import BookAppointment from './BookAppointment';
import ServiceSection from './ServiceSection';
import SpecialSection from './SpecialSection';
import SubHome from './SubHome';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <main className="bg-white">
      <Layout>
        <SubHome />
        <SpecialSection />
        <AboutSection />
        <ServiceSection />
        <BookAppointment />
        <Testimonial />
        <div
          className="container"
          style={{ padding: '6px 0', height: '100px' }}
        >
          <div className="col">
            <a
              className="meeting"
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwa.me%2F%2B8801521581815%3Ffbclid%3DIwAR3UDdeW5CZkoWuD5_Rr6_tcBilUI4INfUhL8NLoLsiQD1lWpgXPGMlwHLw&h=AT1uo9FUhuRdbhP8C94FsaqhQo-n87lu1OlnhTFA8KDPEnfJ0rgCudGykw46r0PyxGG5hrUAYomYfw3nhu9aEWi55q-r0IzY2TmnHGarmOHHwO94ixxHvXHmBwGBEzaZl2tDIg"
            >
              Call Us
            </a>
          </div>
        </div>
      </Layout>
    </main>
  );
};
export default Home;
