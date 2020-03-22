import React from 'react';

import './footer.css';
import { ContentConsumer } from '../Context/contentContext';
import Contact from '../Contact/contact';

export default function Footer() {
  return (
    <ContentConsumer>
      {context => (
        <footer>
          <section id="footer-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              illum eligendi assumenda recusandae neque aspernatur amet
              accusantium minus quos deserunt dolores doloremque nobis animi
              possimus expedita similique vitae, consectetur voluptates!
            </p>
          </section>
          <section id="footer-right">
            <Contact />
          </section>
        </footer>
      )}
    </ContentConsumer>
  );
}
