"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Carousel from './components/Carousel';
import About from '../app/components/About';
import '../app/components/styles.scss';
type Repository = {
  id: number;
  name: string;
  owner: {
    avatar_url: string;
  };
};

async function getData(username: string): Promise<Repository[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const data: Repository[] = await res.json();
  return data;
}

export default function Home() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [avatar, setAvatar] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const dataAc = await getData('VicthorVF21');
      setAvatar(dataAc[0]?.owner?.avatar_url ?? '');
      setRepos(dataAc);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="Div_Profile">
        <div>
          {repos.length > 0 && <Carousel items={repos.map(repo => repo.name)} active={0} />}
        </div>
      </div>
      <div className="Div_Font">
        <img id="PicFont" src="https://res.cloudinary.com/dmsoej29n/image/upload/v1684571517/ImaExa/VMVFsinfondo_susa9g.png" alt="Fondo" />
      </div>
      <div id='Aboutdiv'>
        <About />
      </div>
      <div className="container">

	<div className="container__progressbars">

		<div className="progressbar">
			<svg className="progressbar__svg">
				<circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-html shadow-html"> </circle>
			</svg>
			<span className="progressbar__text shadow-html">HTML</span>
		</div>

		<div className="progressbar">
			<svg className="progressbar__svg">
				<circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-css shadow-css"> </circle>
			</svg>
			<span className="progressbar__text shadow-css">CSS</span>
		</div>

		<div className="progressbar">
			<svg className="progressbar__svg">
				<circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-scss shadow-scss"> </circle>
			</svg>
			<span className="progressbar__text shadow-scss">SCSS</span>
		</div>

		<div className="progressbar">
			<svg className="progressbar__svg">
				<circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-js shadow-js"> </circle>
			</svg>
			<span className="progressbar__text shadow-js">JavaScript</span>
		</div>

		<div className="progressbar">
			<svg className="progressbar__svg">
				<circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-ts shadow-ts"> </circle>
			</svg>
			<span className="progressbar__text shadow-ts">TypeScript</span>
		</div>

		<div className="progressbar">
			<svg className="progressbar__svg">
				<circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-node shadow-node"> </circle>
			</svg>
			<span className="progressbar__text shadow-node">Node.js</span>
		</div>

		<div className="progressbar">
			<svg className="progressbar__svg">
				<circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-react shadow-react"> </circle>
			</svg>
			<span className="progressbar__text shadow-react">React.js</span>
		</div>
		<div className="progressbar">
			<svg className="progressbar__svg">
				<circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-angular shadow-angular"> </circle>
			</svg>
			<span className="progressbar__text shadow-angular">Java</span>
		</div>
	</div>
</div>
      <div id='Div_Social'>
      <a href="https://twitter.com/VictorV57108264" className="icon-button twitter"><i className="icon-twitter"></i><span></span></a>
<a href="https://www.facebook.com/vict97" className="icon-button facebook"><i className="icon-facebook"></i><span></span></a>
<a href="https://www.instagram.com/victhor_v_f/" className="icon-button instagram"><i className="icon-instagram"></i><span></span></a>
<a href="https://wa.me/50684230784?text=Hola+Victor%2C+quiero+contactar+contigo" className="icon-button whatsapp"><i className="icon-whatsapp"></i><span></span></a>
</div>
    </div>
  );
}
