import React from "react";

import "./footer.css";
import { ContentConsumer } from "../Context/contentContext";

export default function Footer() {
  return (
    <ContentConsumer>
      {context => (
        <footer>
          <section id="footer-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            distinctio quidem corrupti aperiam odio odit molestiae libero
            tenetur dolores dolorem, voluptatibus sapiente ducimus
            necessitatibus quia repudiandae aut rerum repellat adipisci cumque
            fuga accusamus hic mollitia perferendis officiis. Doloremque minus
            officiis autem! Exercitationem enim accusamus saepe ipsum, qui eius
            quia quidem tempora necessitatibus impedit doloribus dignissimos
            magnam alias, molestias, doloremque sapiente eveniet officia vero ea
            totam facere non sunt omnis corporis. Id ducimus quo recusandae
            velit quasi incidunt quam magni maiores minus beatae, quae
            accusantium iste est reiciendis, suscipit aliquam ex dignissimos
            voluptate nesciunt. Iusto incidunt distinctio voluptas minus rerum
            minima.
          </section>
          <section id="footer-right">
            <ul>
              <li>Email: someemail@email.com</li>
              <li>Tel:01234556789</li>
              <li>More Contect info</li>
            </ul>
          </section>
        </footer>
      )}
    </ContentConsumer>
  );
}
