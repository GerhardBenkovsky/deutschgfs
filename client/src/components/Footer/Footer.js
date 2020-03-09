import React from 'react';

import './footer.css';
import { ContentConsumer } from '../Context/contentContext';

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
            fuga accusamus hic mollitia perferendis officiis.
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
