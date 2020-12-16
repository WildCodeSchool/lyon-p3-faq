import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Mentions.module.css";
const Fetch = require("../utils/callAPI");

export default function Mentions({ data }) {
  return (
    <>
      <Header displayButton={true} errorHandler={data} />
      <section className={styles.mainsection}>
        <div className={styles.container}>
          <span>FAQ MENTIONS LEGALES</span>
          <ul className={styles.mentionlist}>
            <li>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; In ultrices euismod dui, eget lobortis est
              rhoncus ut.
            </li>
            <li>
              Nulla quis tincidunt elit, eget sollicitudin odio. Quisque
              efficitur porttitor massa vitae pretium. Mauris et consequat nisi.
              Nunc sit amet fringilla lacus. Nam maximus molestie urna, congue
              ornare diam pulvinar ac. Maecenas tincidunt molestie consectetur.
              Donec sollicitudin placerat nibh, quis fringilla quam. Integer
              dolor diam, semper ultrices sapien sed, ullamcorper ornare nulla.
              Vivamus fringilla lorem nisi, non euismod quam dapibus ac. Nullam
              ut purus vitae elit maximus vulputate. Duis venenatis sodales
              neque, nec vehicula lacus placerat ac. Curabitur imperdiet neque
              turpis, ac fermentum nunc varius vitae.{" "}
            </li>
            <li>
              Sed consectetur nibh non dui sagittis, eget malesuada leo
              fermentum. Vestibulum aliquam vulputate leo quis pulvinar.
              Suspendisse sit amet aliquet odio, vitae pretium libero. In mi
              sem, aliquet nec feugiat ut, finibus id orci. Vivamus vitae tellus
              orci. In hac habitasse platea dictumst. Ut vestibulum finibus
              congue. Vestibulum a nisl sit amet libero luctus elementum. Duis
              accumsan finibus velit a tempor. Curabitur volutpat massa quis
              justo lobortis, sit amet dapibus justo gravida. In hac habitasse
              platea dictumst. Cras luctus laoreet magna eget interdum. Fusce
              vel purus a neque semper cursus.{" "}
            </li>
            <li>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; In ultrices euismod dui, eget lobortis est
              rhoncus ut. Nullam fringilla varius leo non tristique. Aliquam
              vehicula molestie sagittis. Cras consectetur sem ut urna
              vulputate, id malesuada lectus tincidunt. Pellentesque sed
              ultricies tellus. Aliquam in lacinia quam, sed dictum felis. Fusce
              ullamcorper tellus massa, vitae hendrerit lorem imperdiet quis.
              Nam rutrum sem in nisi porta volutpat. Aliquam sed convallis leo,
              eu tristique diam. Ut eros ligula, venenatis in erat quis,
              accumsan imperdiet magna. In posuere sem nec quam suscipit
              sodales. Duis vitae tempor augue. Aliquam erat volutpat. Aliquam
              ut risus eget mauris mattis placerat non ut erat. Aenean accumsan
              magna et eros commodo, at sagittis ex consectetur.
            </li>
            <li>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; In ultrices euismod dui, eget lobortis est
              rhoncus ut. Nullam fringilla varius leo non tristique. Aliquam
              vehicula molestie sagittis. Cras consectetur sem ut urna
              vulputate, id malesuada lectus tincidunt. Pellentesque sed
              ultricies tellus. Aliquam in lacinia quam, sed dictum felis. Fusce
              ullamcorper tellus massa, vitae hendrerit lorem imperdiet quis.
            </li>
          </ul>
        </div>
      </section>
      <Footer displayButton={true} errorHandler={data} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await Fetch.fetchData(process.env.API_URL);
  return { props: { data } };
}
