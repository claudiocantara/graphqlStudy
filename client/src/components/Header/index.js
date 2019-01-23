import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link
                    to = "/">
                        Books
                    </Link>
                </li>
                <li>
                    <Link
                        to = "/authors">
                        Authors
                    </Link>
                </li>
            </ul>
        </nav>
  </header>
)

export default withRouter(Header);