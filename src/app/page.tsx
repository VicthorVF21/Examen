"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Carousel from './components/Carousel';
import About from '../app/components/About';

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
      <div id='Div_Social'>
      <a href="#" className="icon-button twitter"><i className="icon-twitter"></i><span></span></a>
<a href="#" className="icon-button facebook"><i className="icon-facebook"></i><span></span></a>
<a href="#" className="icon-button instagram"><i className="icon-instagram"></i><span></span></a>
<a href="https://wa.me/50684230784?text=Hola+Victor%2C+quiero+contactar+contigo" className="icon-button whatsapp"><i className="icon-whatsapp"></i><span></span></a>
</div>
    </div>
  );
}
