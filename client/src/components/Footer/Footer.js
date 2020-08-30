import React from 'react';

import './footer.css';
import { ContentConsumer } from '../Context/contentContext';
import Contact from '../Contact/contact';

export default function Footer() {
  return (
    <ContentConsumer>
      {(context) => (
        <footer>
          <section id="footer-right">
            <Contact />
          </section>
        </footer>
      )}
    </ContentConsumer>
  );
}
