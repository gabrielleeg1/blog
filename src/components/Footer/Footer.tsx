/*
 * My personal blog and portfolio website
 * Copyright (C) 2022  Gabrielle Guimarães
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react';

import {Container, Main, Column, Info, Content} from './Footer.styles';
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitch,
  FiTwitter,
} from 'react-icons/fi';

export default function Footer() {
  return (
    <Container>
      <Content>
        <Main>
          <h2>Gabrielle Guimarães</h2>

          <p className='copyright'>
            © 2022-present Gabrielle Guimarães. All Rights Reserved
          </p>
        </Main>

        <Info>
          <Column>
            <h3>Social</h3>

            <ul>
              <li>
                <a href='https://twitter.com/gabrielleeg1'>
                  <FiTwitter /> Twitter
                </a>
              </li>

              <li>
                <a href='https://www.instagram.com/gabrielle1guim/'>
                  <FiInstagram /> Instagram
                </a>
              </li>

              <li>
                <a href='https://www.twitch.tv/gabrielleeg1'>
                  <FiTwitch /> Twitch
                </a>
              </li>

              <li>
                <a href='https://www.linkedin.com/in/gabrielle-guimar%C3%A3es-1aa393233/'>
                  <FiLinkedin /> Linkedin
                </a>
              </li>

              <li>
                <a href='https://github.com/gabrielleeg1'>
                  <FiGithub /> Github
                </a>
              </li>
            </ul>
          </Column>

          <Column>
            <h3>Contact</h3>

            <ul>
              <li>gabrielle1guim@gmail.com</li>
            </ul>
          </Column>
        </Info>
      </Content>
    </Container>
  );
};
